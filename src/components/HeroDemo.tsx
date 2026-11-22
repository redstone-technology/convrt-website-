import { Avatar, Badge, Bar, Bubble, Stamp, Notification, Phone, Roll, Row, Stage, Text, Thread, Window, type Act } from '../stageshow/kit'
import './hero.css'

// Convrt's homepage hero. A system story, no cursor: someone who clicked an ad
// asks a question; the reply comes, they choose a day, and they are booked.
// On the window behind, the same lead's status rolls New lead -> Replied ->
// Booked. The phone carries the conversation; the window carries the
// business's view. Real words: the conversation, Sara's row, her status.
// Plays once in view and holds on the booked state (the poster).

type Status = 'new' | 'replied' | 'booked'
type S = { reply: boolean; replyTyping: boolean; answer: boolean; answerTyping: boolean; confirm: boolean; confirmTyping: boolean; status: Status; banner: boolean }

const initial: S = { reply: false, replyTyping: false, answer: false, answerTyping: false, confirm: false, confirmTyping: false, status: 'new', banner: false }
const poster: S = { reply: true, replyTyping: false, answer: true, answerTyping: false, confirm: true, confirmTyping: false, status: 'booked', banner: true }

const COPY = {
  en: { status: { new: 'New lead', replied: 'Replied', booked: 'Booked' }, leads: 'Leads', today: 'Today', name: 'Sara A.', avatar: 'Sara A', from: 'From your ad', stamp: 'Today 9:38', adref: 'Replied to your ad', answer: 'Tuesday works', confirm: "You're booked for Tue, 6:00 PM. See you then!", field: 'Message', bannerTitle: 'New booking', bannerBody: 'Sara A. · Tue, 6:00 PM' },
  ar: { status: { new: 'عميل جديد', replied: 'تم الرد', booked: 'تم الحجز' }, leads: 'العملاء', today: 'اليوم', name: 'سارة أ.', avatar: 'سارة', from: 'من إعلانك', stamp: 'اليوم 9:38', adref: 'ردّ على إعلانك', answer: 'الثلاثاء يناسبني', confirm: 'تم حجز موعدك يوم الثلاثاء الساعة 6:00 مساءً. نراك قريباً!', field: 'رسالة', bannerTitle: 'حجز جديد', bannerBody: 'سارة أ. · الثلاثاء 6:00 م' },
}
const TONE: Record<Status, 'accent' | 'neutral' | 'success'> = { new: 'accent', replied: 'neutral', booked: 'success' }

async function script(a: Act<S>) {
  await a.wait(900)
  await a.set({ replyTyping: true, reply: true })
  await a.wait(1100)
  await a.set({ replyTyping: false, status: 'replied' })
  await a.wait(1700)
  await a.set({ answerTyping: true, answer: true })
  await a.wait(1000)
  await a.set({ answerTyping: false })
  await a.wait(1100)
  await a.set({ confirmTyping: true, confirm: true })
  await a.wait(1000)
  await a.set({ confirmTyping: false })
  await a.wait(500)
  await a.set({ status: 'booked' })
  await a.wait(400)
  await a.set({ banner: true })
  await a.wait(2400)
}

const FILLER = [
  { name: 62, sub: 92, badge: 44 },
  { name: 54, sub: 78, badge: 52 },
  { name: 70, sub: 86, badge: 40 },
  { name: 48, sub: 70, badge: 48 },
]

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
      <path d="M5 10.5 8.4 14 15 6.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function ConvrtHero({ lang = 'en', ask = 'Hi! Saw your ad. How much is it?', reply = 'Hi Sara! Happy to help. Want to book a visit? Tue or Thu?' }: { lang?: string; ask?: string; reply?: string }) {
  const k = lang === 'ar' ? COPY.ar : COPY.en
  return (
    <Stage width={720} height={460} compact={{ below: 480, width: 358, height: 460 }} initial={initial} poster={poster} script={script} play="once" className="cvh">
      {(s, _rect, layout) => (
        <>
          {layout === 'wide' && (
            <Window title={k.leads} className="cvh-window">
              <div className="cvh-list">
                <div className="cvh-head">
                  <Text className="cvh-label">{k.today}</Text>
                </div>
                <Row
                  className="cvh-row"
                  selected
                  lead={<Avatar name={k.avatar} tone="accent" size={32} />}
                  title={<Text>{k.name}</Text>}
                  subtitle={<Text className="cvh-sub">{k.from}</Text>}
                  meta={
                    <Badge tone={TONE[s.status]} className="cvh-badge">
                      <Roll variant="fade">{k.status[s.status]}</Roll>
                    </Badge>
                  }
                />
                {FILLER.map((r, i) => (
                  <Row key={i} className="cvh-row" lead={<Avatar size={32} />} title={<Bar w={r.name} />} subtitle={<Bar w={r.sub} tone={2} />} meta={<Bar w={r.badge} h={18} r={9} tone={1} />} />
                ))}
              </div>
              <div className="cvh-detail" aria-hidden>
                <Bar w={90} h={8} tone={3} />
                <Bar w={150} tone={2} />
                <Bar w={120} tone={2} />
              </div>
            </Window>
          )}

          <Phone width={layout === 'wide' ? 320 : 326} className="cvh-phone">
            <Thread className="cvh-thread">
              <Stamp>{k.stamp}</Stamp>
              <div className="cvh-adref">
                <span className="cvh-adref__label">{k.adref}</span>
                <div className="cvh-adref__card" aria-hidden>
                  <div className="cvh-adref__img" />
                  <div className="cvh-adref__meta">
                    <Bar w={84} h={6} tone={3} />
                    <Bar w={56} h={5} tone={2} />
                  </div>
                </div>
              </div>
              <Bubble from="them">{ask}</Bubble>
              {s.reply && (
                <Bubble from="me" typing={s.replyTyping}>
                  {reply}
                </Bubble>
              )}
              {s.answer && (
                <Bubble from="them" typing={s.answerTyping}>
                  {k.answer}
                </Bubble>
              )}
              {s.confirm && (
                <Bubble from="me" typing={s.confirmTyping}>
                  {k.confirm}
                </Bubble>
              )}
            </Thread>
            <div className="cvh-compose" aria-hidden>
              <span className="cvh-plus">
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <path d="M8 2.5v11M2.5 8h11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
              <span className="cvh-field">{k.field}</span>
            </div>
            {layout === 'compact' && (
              <div className="cvh-banner" data-show={s.banner || undefined}>
                <Notification banner icon={<span className="cvh-app"><Check /></span>} title={k.bannerTitle} body={k.bannerBody} />
              </div>
            )}
          </Phone>
        </>
      )}
    </Stage>
  )
}
