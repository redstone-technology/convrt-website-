// English copy. Rules: describe our work as custom software development
// (setup) and software maintenance and support (monthly). Never call Convrt a
// "marketing agency", "advertising" or "social media management". Real
// results only. No prices.

export const en = {
  lang: 'en',
  dir: 'ltr',
  meta: {
    title: 'Convrt | Turn ad inquiries into booked consultations',
    description:
      'For clinics in Doha that run ads. Convrt replies fast, follows up and books your ad inquiries, so the same ad budget brings more booked consultations.',
  },
  nav: {
    how: 'How it works',
    results: 'Results',
    blog: 'Blog',
    cta: "See if we're a fit",
    switch: 'عربي',
    switchHref: '/ar',
  },
  // One reader: owners/managers of premium aesthetic, dermatology and dental
  // clinics in Doha that run ads every month. One job: start the /start form.
  // Story order: their goal, the problem, Convrt as guide with proof, the plan,
  // what they get, the call to action. Short words, one idea per section.
  hero: {
    eyebrow: 'For clinics in Doha that run ads',
    title: 'Turn more ad inquiries into booked consultations.',
    sub: 'We reply fast, follow up and book them for you.',
    cta: "See if we're a fit",
    proof: { value: '60%+', label: 'of leads booked in 30 days at fit20 Qatar', link: 'See how' },
  },
  problem: {
    label: 'The problem',
    title: 'Patients ask. Then they disappear.',
    items: ['Replies come too late.', 'Nobody follows up.', "Booked patients don't show up."],
    line: 'Each one already cost you ad money.',
  },
  results: {
    label: 'Proof',
    title: 'It worked for fit20 Qatar.',
    body: 'A booking business like yours. Same ads, no extra leads. We fixed what happened after people asked.',
    stats: [
      { value: '60%+', label: 'of leads booked' },
      { value: '~0%', label: 'before' },
      { value: '10x+', label: 'sales vs. ad spend' },
    ],
    time: 'Their team also got a lot of time back.',
    note: 'First 30 days. 60%+ counts bookings. 10x+ compares new sales with ad spend in the same period.',
  },
  plan: {
    label: 'How it works',
    title: 'Three steps.',
    steps: [
      { n: '1', title: 'Tell us about your clinic', body: '2 minutes. We call you back.' },
      { n: '2', title: 'We find the leaks', body: 'Where patients drop off between the ad and the visit.' },
      { n: '3', title: 'We fix them', body: 'Fast replies, follow-up and reminders. Then we keep improving.' },
    ],
    cta: "See if we're a fit",
  },
  outcomes: {
    label: 'What you get',
    items: [
      { title: 'More booked consultations', body: 'From the ads you already run.' },
      { title: 'Time back for your front desk', body: 'Less chasing, more care for patients in the room.' },
      { title: 'Clear numbers', body: 'See how many ad clicks become patients.' },
    ],
  },
  faq: {
    label: 'Questions',
    title: 'Questions clinics ask',
    items: [
      { q: 'Do you run our ads?', a: 'No. Keep your ads and your agency. We work on what happens after the click.' },
      { q: 'What do you need from us?', a: 'A short call to see how patients book with you today.' },
      { q: 'What does it cost?', a: 'It depends on your clinic. We tell you on the call.' },
    ],
  },
  final: {
    title: 'Your next patient already clicked your ad.',
    cta: "See if we're a fit",
  },
  footer: {
    about: 'Convrt is part of Redstone Technology, Doha, Qatar.',
    legal: 'Custom software development, and software maintenance and support.',
    privacy: 'Privacy',
    terms: 'Terms',
    blog: 'Blog',
    contact: 'support@convrt.qa',
  },
  blog: {
    title: 'Blog',
    sub: 'Plain-language notes on turning the people who click your ads into customers.',
    back: 'All posts',
    read: 'Read',
    ctaTitle: 'Want to know where you lose customers?',
    ctaBody: 'Answer a few quick questions and our team will call you.',
  },
  start: {
    metaTitle: "See if we're a fit | Convrt",
    title: "Let's find where you lose bookings",
    sub: 'A few quick questions. It takes about 2 minutes. If we can help, our team will call you.',
    next: 'Next',
    back: 'Back',
    send: 'Send',
    sending: 'Sending…',
    step: 'Step',
    of: 'of',
    pickOne: 'Pick one',
    pickAny: 'Pick all that apply',
    questions: {
      ads: { q: 'Are you running paid ads right now?', options: ['Yes, every month', 'Sometimes', 'Not yet'] },
      type: {
        q: 'What kind of business do you have?',
        options: ['Aesthetic or dermatology clinic', 'Dental clinic', 'Other medical clinic', 'Gym or fitness studio', 'Salon or spa', 'Real estate', 'Other'],
      },
      spend: { q: 'Roughly how much do you spend on ads each month?', options: ['Under QAR 15,000', 'QAR 15,000 to 50,000', 'QAR 50,000 to 150,000', 'Over QAR 150,000', "I'd rather not say"] },
      where: { q: 'Where do people go after they click your ad?', options: ['WhatsApp', 'Instagram messages', 'A website or form', 'A phone call', 'Not sure'] },
      problem: {
        q: 'What feels like the biggest problem?',
        options: ['We reply too slowly', 'People ask, then disappear', "We don't follow up", "People book but don't show up", "We don't know where we lose them", 'Something else'],
      },
    },
    contact: {
      q: 'Where can we reach you?',
      name: 'Your name',
      business: 'Business name',
      phone: 'Phone (WhatsApp)',
      instagram: 'Instagram (optional)',
      time: 'Best time to call',
      times: ['Morning', 'Afternoon', 'Evening'],
      privacy: 'We only use this to contact you about your request.',
      privacyLink: 'Privacy policy',
    },
    required: 'Please fill this in.',
    doneTitle: 'Thanks, we got it.',
    doneBody: 'Our team will call you soon to talk it through.',
    doneNoAds: "We work best with businesses already running ads, but we'll still reach out.",
    error: 'Something went wrong. Please try again, or email support@convrt.qa.',
    home: 'Back to home',
  },
}

export type Dict = typeof en
