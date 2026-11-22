import type { APIRoute } from 'astro'

// Receives the /start answers and adds the lead to the Notion Sales Pipeline
// (Stage: New) for a setter to call back.
//
// Vercel environment variables:
//   NOTION_TOKEN        - internal integration secret, with the Sales Pipeline database shared to it
//   NOTION_DATABASE_ID  - optional; defaults to the Convrt Sales Pipeline

export const prerender = false

const DEFAULT_DB = '2b3089ce89584a009590c0bdd5ee4d4e'

const CATEGORY: Record<string, string> = {
  'Aesthetic or dermatology clinic': 'Clinic',
  'Dental clinic': 'Clinic',
  'Other medical clinic': 'Medical clinic',
  'Gym or fitness studio': 'Gym',
  'Salon or spa': 'Salon',
}

// The target is mid-to-high budget businesses. Leads under this are flagged for the setter.
const LOW_BUDGET = 'Under $5,000'

const clip = (v: unknown, n = 200) => (typeof v === 'string' ? v.trim().slice(0, n) : '')
const list = (v: unknown) => (Array.isArray(v) ? v.map((x) => clip(x, 80)).filter(Boolean).slice(0, 10) : [])
const text = (content: string) => ({ rich_text: content ? [{ type: 'text', text: { content } }] : [] })

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return json({ ok: false, error: 'bad_request' }, 400)
  }

  // Spam trap: a filled hidden field means a bot. Pretend it worked.
  if (clip(body.website)) return json({ ok: true })

  const name = clip(body.name, 100)
  const business = clip(body.business, 120)
  const phone = clip(body.phone, 40)
  if (!name || !business || phone.replace(/\D/g, '').length < 7) return json({ ok: false, error: 'missing_fields' }, 422)

  const token = process.env.NOTION_TOKEN ?? import.meta.env.NOTION_TOKEN
  const db = process.env.NOTION_DATABASE_ID ?? import.meta.env.NOTION_DATABASE_ID ?? DEFAULT_DB
  if (!token) {
    console.error('lead: NOTION_TOKEN is not set')
    return json({ ok: false, error: 'not_configured' }, 500)
  }

  const type = clip(body.type, 80)
  const utm = body.utm && typeof body.utm === 'object' ? (body.utm as Record<string, unknown>) : {}
  const utmLine = Object.entries(utm)
    .map(([k, v]) => `${clip(k, 30)}=${clip(v, 100)}`)
    .join(', ')

  const notes = [
    `Source: ${clip(body.lang, 5) === 'ar' ? 'ar.convrt.qa/start (Arabic site)' : 'convrt.qa/start'} (website qualify form, AI Closer)`,
    `Contact name: ${name}`,
    `Running ads: ${clip(body.ads, 60) || '-'}`,
    `Business type: ${type || '-'}`,
    `Monthly ad spend: ${clip(body.spend, 60) || '-'}${clip(body.spend, 60) === LOW_BUDGET ? ' (below target budget)' : ''}`,
    `Customers message on: ${list(body.where).join(', ') || '-'}`,
    `What happens to messages today: ${list(body.problem).join(', ') || '-'}`,
    `Best time to call: ${clip(body.time, 30) || '-'} (their time zone: ${clip(body.tz, 60) || 'unknown'})`,
    `Language: ${clip(body.lang, 5) === 'ar' ? 'Arabic' : 'English'}`,
    utmLine ? `Tracking: ${utmLine}` : '',
  ]
    .filter(Boolean)
    .join('\n')
    .slice(0, 1900)

  const res = await fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      parent: { database_id: db },
      properties: {
        'Business Name': { title: [{ type: 'text', text: { content: business } }] },
        Stage: { select: { name: 'New' } },
        Category: { select: { name: CATEGORY[type] ?? 'Other' } },
        Phone: text(phone),
        Instagram: text(clip(body.instagram, 80)),
        Notes: text(notes),
      },
    }),
  })

  if (!res.ok) {
    console.error('lead: Notion error', res.status, await res.text())
    return json({ ok: false, error: 'save_failed' }, 502)
  }
  return json({ ok: true })
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } })
}
