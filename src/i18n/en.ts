// English copy. One offer for now: the AI Closer.
// Rules: describe our work as custom software development (setup) and
// software maintenance and support (monthly). Never call Convrt a "marketing
// agency", "advertising" or "social media management". Real results only.
// No prices. No client names in results; no riyal amounts.

export const en = {
  lang: 'en',
  dir: 'ltr',
  meta: {
    title: 'Convrt AI Closer | Every message from your ads, answered and booked',
    description:
      'The Convrt AI Closer replies to every comment, DM and WhatsApp in seconds, in Arabic or English, books the customer and gets them to show up. 24/7. More customers from the money you already spend.',
  },
  nav: {
    how: 'How it works',
    results: 'Results',
    problem: 'The problem',
    segments: "Who it's for",
    blog: 'Blog',
    cta: "See if we're a fit",
    switch: 'عربي',
    switchHref: '/ar',
  },
  // Story order: their goal, the problem, what the AI Closer does, who it's
  // for, proof, control (human in the loop + dashboard), how we start, CTA.
  home: {
    hero: {
      titleA: 'Your ads bring the messages.',
      titleB: 'We turn them into bookings.',
      sub: 'The AI Closer replies to every DM, comment and WhatsApp in seconds, books the customer and makes sure they show up. Day and night. More customers from the money you already spend.',
      demo: { ask: 'Hi! Saw your ad. How much is it?', reply: 'Hi Sara! Happy to help. Want to book a visit? Tue or Thu?' },
      cta: "See if we're a fit",
      note: 'For businesses running ads · Takes 2 minutes · We call you back',
    },
    problem: {
      titleA: 'People message.',
      titleB: 'Nobody replies in time.',
      body: [
        'Nights, weekends, busy days. Comments sit unanswered, replies come late, and the customer books with whoever answered first.',
        "And many who do book don't show up. Each one already cost you ad money.",
      ],
      fact: {
        value: '7x',
        text: 'more likely to get a real conversation when you reply within the hour, not an hour later.',
        cite: 'Harvard Business Review, 2011',
        href: 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads',
      },
    },
    plan: {
      titleA: 'Meet the',
      titleB: 'AI Closer.',
      sub: 'It sits inside your Instagram, Facebook and WhatsApp, and works like a team member who never sleeps.',
      steps: [
        { n: '01', title: 'Replies to every DM and comment', body: 'Instagram and Facebook comments, DMs and WhatsApp. In seconds, in Arabic or English, like a real person. Not canned replies.' },
        { n: '02', title: 'Qualifies and books', body: 'Finds out what they want and how serious they are, then moves the chat to a booking.' },
        { n: '03', title: 'Follows up', body: 'If they go quiet, it follows up until they book or say no.' },
        { n: '04', title: 'Gets them to show up', body: 'Reminders before the appointment, a quick confirm, and an easy reschedule. More booked people actually walk in.' },
      ],
      frag: {
        channels: ['Comments', 'DMs', 'WhatsApp'],
        replied: 'Replied in seconds',
        checks: ['Wants a consultation', 'Ready this week', 'Booked: Tue, 6 PM'],
        reminder: 'Still want Tuesday at 6? I can hold it for you.',
        booked: 'Booked',
        showReminder: 'See you tomorrow at 6 PM! Reply 1 to confirm or 2 to reschedule.',
        showReply: '1',
        confirmed: 'Confirmed',
      },
    },
    results: {
      title: 'It already works.',
      body: 'Real numbers from a fitness business. Same ads, no extra leads. Every message got a fast reply and a push to book.',
      by: 'Fitness business, first 30 days',
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
      titleA: 'You stay in control.',
      titleB: 'It never guesses.',
      sub: 'It works alongside your team. It does not replace anyone.',
      items: [
        "Anything it isn't sure about goes straight to you.",
        'Every lead, chat and booking in one dashboard.',
        'Your marketing brings the messages. We turn them into customers who show up.',
      ],
      card: {
        title: "Today's leads",
        tag: 'Instagram · Facebook · WhatsApp',
        rows: [
          { day: 'Instagram', time: '11:42 PM', name: 'Sara A.', status: 'Booked' },
          { day: 'WhatsApp', time: '1:15 AM', name: 'Mariam K.', status: 'Booked' },
          { day: 'Comment', time: '9:03 AM', name: 'Noor H.', status: 'Confirmed' },
          { day: 'Facebook', time: '10:20 AM', name: 'Omar S.', status: 'Sent to you' },
        ],
      },
      cta: "See if we're a fit",
    },
    model: {
      title: 'How we start',
      sub: 'We set it up once, then we look after it.',
      steps: [
        { n: '01', title: 'We build it for you', body: 'One-time setup. We connect your Instagram, Facebook and WhatsApp, and teach it your business.' },
        { n: '02', title: 'First month free', body: 'Your first month of maintenance and support is on us.' },
        { n: '03', title: 'Then a small monthly fee', body: 'For maintenance and support. We keep it running and keep it sharp.' },
      ],
      small: "We'll go through the details on the call.",
    },
    final: {
      title: 'Your next customer is in your DMs right now.',
      sub: "Tell us about your business. We'll show you how the AI Closer would answer them.",
      cta: "See if we're a fit",
      small: "We don't run ads. Keep your ads, your agency and your team.",
    },
  },
  segments: {
    title: 'Built for businesses that run ads',
    sub: 'If people message you after your ads, the AI Closer answers them.',
    items: [
      { name: 'Clinics', leak: 'Price questions in the DMs at 11 PM.' },
      { name: 'Gyms & fitness studios', leak: 'Trial requests that wait until the weekend is over.' },
      { name: 'Real estate', leak: 'Viewing requests that go cold.' },
      { name: 'Education & training', leak: "Course questions nobody answers in time." },
      { name: 'Car businesses', leak: 'Test-drive requests that never get booked.' },
    ],
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
    sub: 'Plain-language notes on turning the people who message you into customers.',
    back: 'All posts',
    read: 'Read',
    ctaTitle: 'How many messages are you missing?',
    ctaBody: 'Answer a few quick questions and our team will call you.',
  },
  start: {
    metaTitle: "See if we're a fit | Convrt AI Closer",
    title: "Let's see how many customers you're missing",
    sub: 'A few quick questions. It takes about 2 minutes. If the AI Closer is a fit, our team will call you.',
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
      spend: { q: 'Roughly how much do you spend on ads each month?', options: ['Under $5,000', '$5,000 to $15,000', '$15,000 to $50,000', 'Over $50,000', "I'd rather not say"] },
      where: { q: 'Where do customers message you?', options: ['Instagram DMs', 'Instagram comments', 'Facebook', 'WhatsApp', 'Website or phone'] },
      problem: {
        q: 'What happens to those messages today?',
        options: ['We reply too slowly', 'Comments go unanswered', 'Nights and weekends go unanswered', 'People ask, then disappear', "We don't follow up", "People book but don't show up", 'Too many messages for our team', 'Something else'],
      },
    },
    contact: {
      q: 'Where can we reach you?',
      name: 'Your name',
      business: 'Business name',
      phone: 'Phone (WhatsApp)',
      instagram: 'Instagram (optional)',
      time: 'Best time to call (your time)',
      times: ['Morning', 'Afternoon', 'Evening'],
      privacy: 'We only use this to contact you about your request.',
      privacyLink: 'Privacy policy',
    },
    required: 'Please fill this in.',
    doneTitle: 'Thanks, we got it.',
    doneBody: 'Our team will call you soon to talk it through.',
    doneNoAds: "The AI Closer works best for businesses already running ads, but we'll still reach out.",
    error: 'Something went wrong. Please try again, or email support@convrt.qa.',
    home: 'Back to home',
  },
}

export type Dict = typeof en
