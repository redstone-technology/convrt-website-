import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { en, type Dict } from '../i18n/en'

// The qualify flow the Instagram DM link opens: five quick questions, then
// contact details. Answers go to /api/lead, which adds the lead to the Notion
// Sales Pipeline for a setter to call back. Answers are always sent in
// English (by option index) so the pipeline reads the same for both languages.

type Key = 'ads' | 'type' | 'spend' | 'where' | 'problem'
const STEPS: { key: Key; multi: boolean }[] = [
  { key: 'ads', multi: false },
  { key: 'type', multi: false },
  { key: 'spend', multi: false },
  { key: 'where', multi: true },
  { key: 'problem', multi: true },
]

type Contact = { name: string; business: string; phone: string; instagram: string; time: number | null; website: string }

export default function StartForm({ t }: { t: Dict }) {
  const s = t.start
  const total = STEPS.length + 1
  const [step, setStep] = useState(0)
  const [picks, setPicks] = useState<Record<Key, number[]>>({ ads: [], type: [], spend: [], where: [], problem: [] })
  const [contact, setContact] = useState<Contact>({ name: '', business: '', phone: '', instagram: '', time: null, website: '' })
  const [touched, setTouched] = useState(false)
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [utm, setUtm] = useState<Record<string, string>>({})

  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    const keep: Record<string, string> = {}
    for (const k of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'src']) {
      const v = q.get(k)
      if (v) keep[k] = v.slice(0, 100)
    }
    setUtm(keep)
  }, [])

  const current = STEPS[step]
  const progress = useMemo(() => Math.round(((step + (state === 'done' ? 1 : 0)) / total) * 100), [step, state, total])

  function choose(key: Key, i: number, multi: boolean) {
    if (multi) {
      setPicks((p) => ({ ...p, [key]: p[key].includes(i) ? p[key].filter((x) => x !== i) : [...p[key], i] }))
    } else {
      setPicks((p) => ({ ...p, [key]: [i] }))
      window.setTimeout(() => setStep((n) => Math.min(n + 1, STEPS.length)), 220)
    }
  }

  const contactOk = contact.name.trim() && contact.business.trim() && contact.phone.replace(/\D/g, '').length >= 7

  async function submit(e: FormEvent) {
    e.preventDefault()
    setTouched(true)
    if (!contactOk || state === 'sending') return
    setState('sending')
    // Preview builds (hosted for review) don't send anything
    if (import.meta.env.PUBLIC_PREVIEW === '1') {
      window.setTimeout(() => setState('done'), 500)
      return
    }
    const label = (k: Key) => picks[k].map((i) => en.start.questions[k].options[i])
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lang: t.lang,
          ads: label('ads')[0] ?? '',
          type: label('type')[0] ?? '',
          spend: label('spend')[0] ?? '',
          where: label('where'),
          problem: label('problem'),
          name: contact.name.trim(),
          business: contact.business.trim(),
          phone: contact.phone.trim(),
          instagram: contact.instagram.trim(),
          time: contact.time === null ? '' : en.start.contact.times[contact.time],
          website: contact.website,
          utm,
          tz: (() => { try { return Intl.DateTimeFormat().resolvedOptions().timeZone } catch { return '' } })(),
        }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setState('done')
    } catch {
      setState('error')
    }
  }

  const home = t.lang === 'ar' ? '/ar' : '/'
  const noAds = picks.ads[0] === 2

  if (state === 'done') {
    return (
      <div className="sf sf--done">
        <div className="sf__bar"><span style={{ width: '100%' }} /></div>
        <div className="sf__check" aria-hidden>
          <svg viewBox="0 0 24 24" width="28" height="28"><path d="M6 12.5 10.2 16.5 18 8" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <h2 className="sf__q">{s.doneTitle}</h2>
        <p className="sf__p">{s.doneBody}</p>
        {noAds && <p className="sf__p sf__muted">{s.doneNoAds}</p>}
        {import.meta.env.PUBLIC_PREVIEW === '1' && <p className="sf__p sf__muted">Preview only: nothing was sent.</p>}
        <a className="btn btn--ghost sf__home" href={home}>{s.home}</a>
      </div>
    )
  }

  return (
    <div className="sf">
      <div className="sf__top">
        <span className="sf__count">
          {s.step} {step + 1} {s.of} {total}
        </span>
        {step > 0 && (
          <button type="button" className="sf__back" onClick={() => setStep((n) => n - 1)}>
            {s.back}
          </button>
        )}
      </div>
      <div className="sf__bar" aria-hidden><span style={{ width: `${Math.max(progress, 6)}%` }} /></div>

      {current ? (
        <fieldset className="sf__set" key={current.key}>
          <legend className="sf__q">{s.questions[current.key].q}</legend>
          <p className="sf__hint">{current.multi ? s.pickAny : s.pickOne}</p>
          <div className="sf__options">
            {s.questions[current.key].options.map((o, i) => {
              const on = picks[current.key].includes(i)
              return (
                <button
                  type="button"
                  key={o}
                  className="sf__opt"
                  data-on={on || undefined}
                  aria-pressed={on}
                  onClick={() => choose(current.key, i, current.multi)}
                >
                  <span className="sf__tick" data-multi={current.multi || undefined} aria-hidden />
                  {o}
                </button>
              )
            })}
          </div>
          {current.multi && (
            <button type="button" className="btn sf__next" disabled={picks[current.key].length === 0} onClick={() => setStep((n) => n + 1)}>
              {s.next} <span className="arrow" aria-hidden>→</span>
            </button>
          )}
        </fieldset>
      ) : (
        <form className="sf__set" onSubmit={submit} noValidate>
          <h2 className="sf__q">{s.contact.q}</h2>
          <div className="sf__fields">
            <label className="sf__field">
              <span>{s.contact.name}</span>
              <input autoComplete="name" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} aria-invalid={touched && !contact.name.trim()} />
              {touched && !contact.name.trim() && <em>{s.required}</em>}
            </label>
            <label className="sf__field">
              <span>{s.contact.business}</span>
              <input autoComplete="organization" value={contact.business} onChange={(e) => setContact({ ...contact, business: e.target.value })} aria-invalid={touched && !contact.business.trim()} />
              {touched && !contact.business.trim() && <em>{s.required}</em>}
            </label>
            <label className="sf__field">
              <span>{s.contact.phone}</span>
              <input type="tel" dir="ltr" inputMode="tel" autoComplete="tel" placeholder="+ country code" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} aria-invalid={touched && contact.phone.replace(/\D/g, '').length < 7} />
              {touched && contact.phone.replace(/\D/g, '').length < 7 && <em>{s.required}</em>}
            </label>
            <label className="sf__field">
              <span>{s.contact.instagram}</span>
              <input dir="ltr" placeholder="@" value={contact.instagram} onChange={(e) => setContact({ ...contact, instagram: e.target.value })} />
            </label>
            {/* Spam trap: people never see or fill this */}
            <label className="sr-only" aria-hidden>
              Website
              <input tabIndex={-1} autoComplete="off" value={contact.website} onChange={(e) => setContact({ ...contact, website: e.target.value })} />
            </label>
          </div>
          <div className="sf__time">
            <span>{s.contact.time}</span>
            <div className="sf__chips">
              {s.contact.times.map((x, i) => (
                <button type="button" key={x} className="sf__chip" data-on={contact.time === i || undefined} aria-pressed={contact.time === i} onClick={() => setContact({ ...contact, time: i })}>
                  {x}
                </button>
              ))}
            </div>
          </div>
          <button type="submit" className="btn sf__next" disabled={state === 'sending'}>
            {state === 'sending' ? s.sending : s.send} <span className="arrow" aria-hidden>→</span>
          </button>
          {state === 'error' && <p className="sf__error" role="alert">{s.error}</p>}
          <p className="sf__fine">
            {s.contact.privacy} <a href="/privacy">{s.contact.privacyLink}</a>
          </p>
        </form>
      )}
    </div>
  )
}
