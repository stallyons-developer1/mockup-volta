// All CLUTCH copy + data in one place.

export const STATS = [
  { num: '2.4', unit: 'M', label: 'Players competing' },
  { num: '18.6', unit: 'M$', label: 'Prizes paid out' },
  { num: '72', unit: 'K', label: 'Tournaments run' },
  { num: '140', unit: '+', label: 'Countries' },
]

export const STEPS = [
  { n: '01', t: 'Pick your game', d: 'Valorant, CS2, Dota 2, Fortnite and 40+ titles. Link your account in seconds.' },
  { n: '02', t: 'Join a tournament', d: 'Free rolls or cash entries that run 24/7. Auto-matched to your skill bracket.' },
  { n: '03', t: 'Climb the bracket', d: 'Win your matches, rise through the rounds, watch the prize pool heat up live.' },
  { n: '04', t: 'Cash out instantly', d: 'Winnings hit your wallet the moment the final whistle blows. No waiting.' },
]

export const TOURNAMENTS = [
  { game: 'VALORANT', pool: '$12,500', entry: 'Free', players: '1,024', state: 'LIVE' },
  { game: 'CS2', pool: '$8,000', entry: '$5', players: '512', state: 'LIVE' },
  { game: 'DOTA 2', pool: '$25,000', entry: '$15', players: '256', state: 'SOON' },
  { game: 'FORTNITE', pool: '$6,400', entry: 'Free', players: '2,048', state: 'LIVE' },
  { game: 'APEX LEGENDS', pool: '$10,000', entry: '$10', players: '384', state: 'SOON' },
  { game: 'ROCKET LEAGUE', pool: '$4,200', entry: '$3', players: '640', state: 'LIVE' },
]

export const GAMES = ['Valorant', 'CS2', 'Dota 2', 'Fortnite', 'Apex', 'League', 'Rocket League', 'PUBG']

export const TIERS = [
  {
    name: 'Rookie',
    monthly: 0,
    yearly: 0,
    feats: ['Unlimited free tournaments', 'Skill-based matchmaking', 'Instant cash-out wallet', 'Community Discord'],
  },
  {
    name: 'Pro',
    monthly: 9,
    yearly: 86,
    featured: true,
    feats: ['Everything in Rookie', 'Cash tournaments + bigger pools', '0% withdrawal fees', 'Advanced match stats', 'Priority matchmaking'],
  },
  {
    name: 'Elite',
    monthly: 19,
    yearly: 182,
    feats: ['Everything in Pro', 'Invite-only high-roller events', 'Personal performance coach', 'Early access to new titles', 'Verified pro badge'],
  },
]

export const LEADERBOARD = [
  { name: 'Spectre', country: '🇰🇷', score: 100, win: '$248K' },
  { name: 'Nyx', country: '🇸🇪', score: 88, win: '$196K' },
  { name: 'Volt', country: '🇧🇷', score: 81, win: '$174K' },
  { name: 'Mirage', country: '🇺🇸', score: 69, win: '$142K' },
  { name: 'Katana', country: '🇯🇵', score: 58, win: '$118K' },
  { name: 'Phantom', country: '🇩🇪', score: 47, win: '$96K' },
]

export const FAQ = [
  { q: 'How do payouts actually work?', a: 'The moment a tournament ends, prize money is split by placement and dropped straight into your CLUTCH wallet. Withdraw to your bank or card any time — Pro and Elite members pay zero fees.' },
  { q: 'Do I need to pay to play?', a: 'No. Rookie is free forever and includes unlimited free-entry tournaments with real cosmetic prizes. Cash pools are optional and unlocked on Pro and Elite.' },
  { q: 'How is matchmaking kept fair?', a: 'Every account carries a hidden skill rating that updates after each match. You are only ever bracketed against players within your own tier, and anti-cheat runs on every session.' },
  { q: 'Which games are supported?', a: 'Valorant, CS2, Dota 2, Fortnite, Apex Legends, Rocket League, League of Legends and PUBG today — with new titles added every month.' },
  { q: 'Is my account and money safe?', a: 'All wallets are held with a licensed payment partner, balances are encrypted, and withdrawals require two-factor confirmation. Your data is never sold.' },
]

export const MARQUEE = ['Valorant', 'CS2', 'Dota 2', 'Fortnite', 'Apex', 'Rocket League']
