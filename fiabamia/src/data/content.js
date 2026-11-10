// FiabaMia homepage copy, extracted from the live site.

export const HERO = {
  eyebrow: 'FiabaMia · A Bedtime Fairy Tale',
  line1: 'No one has ever',
  line2: 'told it…',
  cta: 'Listen with sound',
  scroll: 'Scroll to enter',
}

// poetic scroll-journey chapters (AWAKE → ASLEEP)
export const JOURNEY = [
  { n: 'I', label: 'The Voice', text: 'A fairy tale never read before,', sub: 'written tonight for the one you love.' },
  { n: 'II', label: 'The Journey', text: 'One last breath…', sub: 'and the night opens like a page.' },
  { n: 'III', label: 'The Dream', text: 'Become a storyteller.', sub: 'No acting lessons needed.' },
]

export const INTRO = {
  eyebrow: 'What is FiabaMia',
  heading: 'Personalized bedtime stories for children',
  body: 'FiabaMia is the web app that creates personalized bedtime stories for children aged 0 to 10: made-to-measure stories with music, interactive sounds and voice guidance — a fairy tale never read before, written tonight for the one you love.',
}

export const FEATURES = [
  {
    key: 'measure', tag: 'Made to measure',
    title: 'A story made to measure',
    body: 'Name, age, value, place and a little villain. Every tale is shaped around your child, so the hero feels unmistakably theirs.',
  },
  {
    key: 'music', tag: 'Music & sound',
    title: 'Every story has its own music',
    body: 'Original music and interactive sounds — bells, wind, a distant thunderstorm — rise and fall with the words, turning reading into an atmosphere.',
  },
  {
    key: 'words', tag: 'Words that live',
    title: 'Words that come to life',
    body: 'Illustrations and type that breathe with the story. Every chapter has a color, a motion and a mood of its own.',
  },
  {
    key: 'voice', tag: 'Voice guidance',
    title: 'Voice guidance, gently',
    body: 'Soft prompts help you read aloud — pace, pauses and tone — so becoming a storyteller takes no acting lessons at all.',
  },
]

export const AGES = {
  eyebrow: 'Every age has its own story',
  heading: 'Five age groups, from 0 to 10',
  items: [
    { range: '0–2', text: 'Gentle rhythm, soft repetition and sounds to fall asleep to.' },
    { range: '3–4', text: 'Rhythmic sentences, a circular structure and a small, gentle surprise.' },
    { range: '5–6', text: 'Silly magic, inventions and objects that come to life.' },
    { range: '7–8', text: 'An independent hero, a question of fairness and a world with consistent rules.' },
    { range: '9–10', text: 'Real metaphors, ethical dilemmas and inner growth.' },
  ],
}

export const TESTIMONIALS = {
  eyebrow: 'What parents say',
  heading: 'The bedtime ritual, remembered forever',
  items: [
    { quote: 'My daughter asked for “her” story three nights in a row. She’s the hero now.', by: 'Giulia, mom of Emma (5)' },
    { quote: 'The music and the little sounds make it feel like a tiny film we read together.', by: 'Marco, dad of Leo (7)' },
    { quote: 'Ready in thirty seconds, and somehow it feels handwritten just for him.', by: 'Sara, mom of Tommaso (4)' },
  ],
}

export const PRICING = {
  eyebrow: 'Stars',
  heading: 'Every story costs one Star. And today, Stars are free.',
  note: 'When you sign up you get 3 free Stars, and each story you create uses 1 Star. Earn more Stars by inviting other parents with your invite code.',
  plans: [
    { name: 'Pouch of Stars', stars: '10', price: 'Free to start', desc: 'Perfect for the first week of bedtimes.', featured: false },
    { name: 'Chest of Stars', stars: '40', price: 'Most loved', desc: 'A month of nightly tales, one Star at a time.', featured: true },
    { name: 'Sky of Stars', stars: '120', price: 'For dreamers', desc: 'A whole season of stories to remember.', featured: false },
  ],
}

export const BORN = {
  eyebrow: 'How a FiabaMia story is born',
  steps: [
    { n: '01', title: 'A story made to measure', body: 'Choose name, age, a value, a place and a little villain.' },
    { n: '02', title: 'Music and interactive sounds', body: 'The tale is scored with original music and gentle sound effects.' },
    { n: '03', title: 'Voice guidance', body: 'Soft prompts help you read it aloud, beautifully.' },
    { n: '04', title: 'Five age groups, from 0 to 10', body: 'Language and structure adapt to exactly the right age.' },
    { n: '05', title: 'Let’s talk about it', body: 'Three questions after the story, tied to its value and characters.' },
    { n: '06', title: 'Safe, and written in Italian', body: 'No violence, nothing scary — made for bedtime, saved in your space.' },
  ],
}

export const FAQ = {
  eyebrow: 'Frequently asked questions',
  heading: 'Everything you want to know',
  items: [
    { q: 'How do Stars work?', a: 'When you sign up you get 3 free Stars, and each story you create uses 1 Star. You can earn more Stars by inviting other parents with your invite code.' },
    { q: 'What ages is it for?', a: 'For children from 0 to 10, in five age groups (0–2, 3–4, 5–6, 7–8, 9–10). It’s not just the hero that changes: language, sentence length and structure adapt to the age.' },
    { q: 'Is it safe for bedtime?', a: 'Yes. The stories are made for bedtime: no violence, nothing scary or inappropriate, Italian only. Every story passes on an educational value you choose.' },
    { q: 'Do I need an account?', a: 'Yes, a free account: just your email, no password. You receive a sign-in link or a code by email, and your stories stay saved in your personal space.' },
  ],
}

export const FINAL = {
  eyebrow: 'Happily ever after',
  heading: 'This very night, their story awaits you',
  body: 'The bedtime ritual becomes shared magic. Ready in 30 seconds, remembered forever.',
  cta: 'Create your first story',
  note: 'Free, nothing to pay · Invite a friend and get more Stars',
  sign: 'And now… sweet dreams',
}

export const NAV = {
  brand: ['Fiaba', 'Mia'],
  links: [
    { label: 'Create a story', id: 'final' },
    { label: 'How it works', id: 'born' },
    { label: 'Stars and pricing', id: 'pricing' },
  ],
  cta: 'Create a story',
  signIn: 'Sign in',
}

export const FOOTER = {
  cols: [
    { h: 'The story', items: ['Create a story', 'How it works', 'Stars and pricing'] },
    { h: 'Your space', items: ['Your stories', 'Invite a friend', 'Sign in'] },
    { h: 'Information', items: ['Cookie policy', 'Terms of service', 'Cookie preferences'] },
  ],
  write: { h: 'Write to us', email: 'info@fiabamia.com', note: 'A real person will reply, not a robot.' },
  copyright: '© 2026 FiabaMia · All rights reserved',
}
