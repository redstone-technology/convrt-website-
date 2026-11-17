// English copy. Rules: describe our work as custom software development
// (setup) and software maintenance and support (monthly). Never call Convrt a
// "marketing agency", "advertising" or "social media management". Real
// results only. No prices.

export const en = {
  lang: 'en',
  dir: 'ltr',
  meta: {
    title: 'Convrt | Turn the leads from your ads into customers',
    description:
      'For businesses in Qatar that run ads. Convrt fixes everything between your ad and the sale: fast replies, follow-up and booking. Same ad budget, more customers.',
    clinicsTitle: 'Convrt for clinics | Turn ad inquiries into booked consultations',
    clinicsDescription:
      'For clinics in Doha that run ads. Convrt replies fast, follows up and books your ad inquiries, so the same ad budget brings more booked consultations.',
  },
  nav: {
    how: 'How it works',
    results: 'Results',
    problem: 'The problem',
    segments: 'Who we help',
    blog: 'Blog',
    cta: "See if we're a fit",
    switch: 'عربي',
    switchHref: '/ar',
  },
  // Main site: every business that sells through ads. Segment pages (like
  // /clinics) speak to one group. Same layout, same story order: their goal,
  // the problem, the plan, proof, what they get, the call to action.
  home: {
    hero: {
      titleA: 'Your ads bring the leads.',
      titleB: 'We turn them into customers.',
      sub: 'Convrt fixes everything between your ad and the sale: fast replies, follow-up and booking. Same ad budget, more customers.',
      demo: { ask: 'Hi! Saw your ad. How much is it?', reply: 'Hi Sara! Happy to help. Want to book a visit? Tue or Thu?' },
      cta: "See if we're a fit",
      note: 'For businesses running ads · Takes 2 minutes · We call you back',
    },
    problem: {
      titleA: 'People ask.',
      titleB: 'Then they disappear.',
      body: ["Replies come late. Nobody follows up. People who booked don't show up.", 'Each one already cost you ad money.'],
      fact: {
        value: '7x',
        text: 'more likely to get a real conversation when you reply within the hour, not an hour later.',
        cite: 'Harvard Business Review, 2011',
        href: 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads',
      },
    },
    plan: {
      titleA: 'Three steps.',
      titleB: 'One system.',
      sub: 'You keep your ads. We fix what happens after the click.',
      steps: [
        { n: '01', title: 'Tell us about your business', body: 'Two minutes. We call you back.' },
        { n: '02', title: 'We find the leaks', body: 'Where people drop off, from the ad to the sale.' },
        { n: '03', title: 'We fix them', body: 'Fast replies, follow-up and reminders. Then we keep improving.' },
      ],
      frag: {
        clinic: ['Clinic', 'Gym', 'Real estate'],
        funnel: ['Clicked', 'Messaged', 'Booked', 'Bought'],
        leak: 'Leak',
        reminder: 'Reminder: your visit is tomorrow at 6 PM.',
        booked: 'Booked',
      },
    },
    results: {
      title: 'It worked for fit20 Qatar.',
      body: 'A fitness program in Doha. Same ads, no extra leads. We fixed what happened after people asked.',
      table: {
        head: ['First 30 days', 'Before', 'After'],
        rows: [
          ['Leads that booked', '~0%', '60%+'],
          ['New sales vs. ad spend', '–', '10x+'],
          ['Ad budget', 'Same', 'Same'],
          ['Time spent replying', 'A lot', 'A lot less'],
        ],
      },
      big: { value: '60%+', label: 'of incoming leads booked in the first 30 days' },
      note: '60%+ counts bookings. 10x+ compares new sales with ad spend in the same period.',
    },
    outcomes: {
      titleA: 'More customers.',
      titleB: 'Less chasing.',
      sub: 'What you get when nothing slips through.',
      items: ['More sales from the same ads.', 'Time back for your team.', 'Clear numbers on every ad click.'],
      card: {
        title: 'Booked this week',
        tag: 'From your ads',
        rows: [
          { day: 'Tue', time: '6:00 PM', name: 'Trial session', status: 'Booked' },
          { day: 'Wed', time: '11:30 AM', name: 'Viewing', status: 'Booked' },
          { day: 'Wed', time: '4:00 PM', name: 'Consultation', status: 'Confirmed' },
          { day: 'Thu', time: '10:00 AM', name: 'Test drive', status: 'Reminder sent' },
        ],
      },
      cta: "See if we're a fit",
    },
    final: {
      title: 'Your next customer already clicked your ad.',
      sub: "Tell us about your business. We'll show you where sales slip away.",
      cta: "See if we're a fit",
      small: "We don't run ads. Keep your ads and your agency.",
    },
  },
  segments: {
    title: 'Built for businesses that sell through ads',
    sub: 'Different businesses lose leads in different places. We know where to look.',
    more: 'See how',
    items: [
      { name: 'Clinics', leak: 'Price questions that go quiet, and patients who miss their consultation.', href: '/clinics' },
      { name: 'Gyms & fitness studios', leak: "Trial sessions that never turn into members.", href: '' },
      { name: 'Real estate', leak: 'Viewing requests that go cold before anyone calls back.', href: '' },
      { name: 'Education & training', leak: 'Course inquiries that never enroll.', href: '' },
      { name: 'Car businesses', leak: 'Test drives that never get booked.', href: '' },
    ],
  },
  clinics: {
    // One reader: owners/managers of premium aesthetic, dermatology and dental
    // clinics in Doha that run ads every month. One job: start the /start form.
    // Story order: their goal, the problem, the plan, proof, what they get, CTA.
    // Layout follows leadish.app (same design system), in Convrt's colours.
    hero: {
      titleA: 'Your ads bring patients.',
      titleB: 'We make sure they book.',
      sub: 'Convrt replies fast, follows up and books your ad inquiries. Same ad budget, more booked consultations.',
      demo: { ask: 'Hi! Saw your ad. How much is a skin consultation?', reply: 'Hi Sara! Happy to help. Want to book one? Tue or Thu?' },
      cta: "See if we're a fit",
      note: 'For clinics in Doha · Takes 2 minutes · We call you back',
    },
    problem: {
      titleA: 'Patients ask.',
      titleB: 'Then they disappear.',
      body: ['Replies come late. Nobody follows up. Booked patients forget to come.', 'Each one already cost you ad money.'],
      fact: {
        value: '7x',
        text: 'more likely to get a real conversation when you reply within the hour, not an hour later.',
        cite: 'Harvard Business Review, 2011',
        href: 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads',
      },
    },
    plan: {
      titleA: 'Three steps.',
      titleB: 'One system.',
      sub: 'You keep your ads. We fix what happens after the click.',
      steps: [
        { n: '01', title: 'Tell us about your clinic', body: 'Two minutes. We call you back.' },
        { n: '02', title: 'We find the leaks', body: 'Where patients drop off, from the ad to the visit.' },
        { n: '03', title: 'We fix them', body: 'Fast replies, follow-up and reminders. Then we keep improving.' },
      ],
      frag: {
        clinic: ['Aesthetic clinic', 'Dental clinic', 'Other'],
        funnel: ['Clicked', 'Messaged', 'Booked', 'Came'],
        leak: 'Leak',
        reminder: 'Reminder: your consultation is tomorrow at 6 PM.',
        booked: 'Booked',
      },
    },
    results: {
      title: 'It worked for fit20 Qatar.',
      body: 'A booking business like yours. Same ads, no extra leads. We fixed what happened after people asked.',
      table: {
        head: ['First 30 days', 'Before', 'After'],
        rows: [
          ['Leads that booked', '~0%', '60%+'],
          ['New sales vs. ad spend', '–', '10x+'],
          ['Ad budget', 'Same', 'Same'],
          ['Time spent replying', 'A lot', 'A lot less'],
        ],
      },
      big: { value: '60%+', label: 'of incoming leads booked in the first 30 days' },
      note: '60%+ counts bookings. 10x+ compares new sales with ad spend in the same period.',
    },
    outcomes: {
      titleA: 'A full calendar.',
      titleB: 'A calmer front desk.',
      sub: 'What clinics get when nothing slips through.',
      items: ['More booked consultations from the same ads.', 'Time back for your front desk.', 'Clear numbers on every ad click.'],
      card: {
        title: 'Consultations this week',
        tag: 'From your ads',
        rows: [
          { day: 'Tue', time: '6:00 PM', name: 'Sara A.', status: 'Booked' },
          { day: 'Wed', time: '11:30 AM', name: 'Mariam K.', status: 'Booked' },
          { day: 'Wed', time: '4:00 PM', name: 'Noor H.', status: 'Confirmed' },
          { day: 'Thu', time: '10:00 AM', name: 'Layla S.', status: 'Reminder sent' },
        ],
      },
      cta: "See if we're a fit",
    },
    final: {
      title: 'Your next patient already clicked your ad.',
      sub: "Tell us about your clinic. We'll show you where bookings slip away.",
      cta: "See if we're a fit",
      small: "We don't run ads. Keep your ads and your agency.",
    },
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
