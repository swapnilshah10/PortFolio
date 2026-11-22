export const personalInfo = {
  name: 'Swapnil Shah',
  role: 'Backend Developer',
  tagline: 'Building high-throughput systems that scale to 500K+ users',
  email: 'shah.swapnil@proton.me',
  phone: '+91 9004056780',
  location: 'Mumbai, India',
  github: 'https://github.com/swapnilshah10',
  linkedin: 'https://linkedin.com/in/Swapnil-Shah9671',
  summary:
    'Backend Developer with 2+ years at JM Financial (BlinkX trading platform) building scalable Spring Boot microservices and high-throughput RESTful APIs serving 500K+ daily active users. Proficient in Java, Python, Go, Rust, Redis, MySQL, Postgres, Docker, and GCP. Off the clock I build trading infrastructure — market-data feeds, a crash-resumable order management system, a backtesting lab — plus multiplayer games, all self-hosted with full observability.',
};

export const heroStats = [
  { value: 500, suffix: 'K+', label: 'Daily Active Users', icon: 'users' },
  { value: 92, suffix: '%', label: 'Latency Reduced', icon: 'zap' },
  { value: 15, suffix: '+', label: 'Microservices Built', icon: 'server' },
  { value: 85, suffix: '%', label: 'Faster API Endpoints', icon: 'trending-up' },
];

export const skills = [
  {
    category: 'Languages',
    color: '#ffffff',
    glow: 'rgba(255,255,255,0.1)',
    items: ['Java', 'Python', 'Go', 'Rust', 'TypeScript', 'C++', 'SQL', 'Bash/Shell'],
  },
  {
    category: 'Backend',
    color: '#ffffff',
    glow: 'rgba(255,255,255,0.1)',
    items: ['Spring Boot', 'REST APIs', 'JWT/OAuth2', 'Kafka', 'JPA/Hibernate', 'FastAPI', 'Flask', 'WebSockets', 'Gunicorn', 'APScheduler'],
  },
  {
    category: 'Datastores',
    color: '#ffffff',
    glow: 'rgba(255,255,255,0.1)',
    items: ['MySQL', 'PostgreSQL', 'Redis', 'MongoDB', 'SQLite (WAL)', 'DuckDB', 'Parquet', 'HikariCP'],
  },
  {
    category: 'Infrastructure',
    color: '#ffffff',
    glow: 'rgba(255,255,255,0.1)',
    items: ['Docker', 'Nginx', 'Cloudflare Tunnel', 'Tailscale', 'Systemd', 'Linux', 'Oracle Cloud', 'GCP Cloud Console'],
  },
  {
    category: 'Monitoring',
    color: '#ffffff',
    glow: 'rgba(255,255,255,0.1)',
    items: ['Grafana', 'Prometheus', 'Loki', 'Promtail', 'Node Exporter', 'Nginx Exporter'],
  },
  {
    category: 'Frontend & Tools',
    color: '#ffffff',
    glow: 'rgba(255,255,255,0.1)',
    items: ['React.js', 'Next.js', 'Vite', 'Tailwind CSS', 'Motion', 'Git', 'GitHub', 'Postman', 'Jira', 'Trading APIs', 'Telegram Bot API'],
  },
  {
    category: 'Concepts',
    color: '#ffffff',
    glow: 'rgba(255,255,255,0.1)',
    items: ['Microservices Architecture', 'Rate Limiting', 'Reverse Proxy', 'CGNAT Bypass', 'Zero Trust Security', 'CI/CD', 'System Design', 'OAuth2'],
  },
];

export const experience = [
  {
    title: 'Software Developer',
    company: 'JM Financial Ltd',
    product: 'BlinkX · JMPro · BondsKart',
    duration: 'Jun 2024 – Present',
    location: 'Mumbai, India',
    type: 'Full-Time',
    achievements: [
      {
        metric: 'Trading APIs',
        text: 'Architected and developed a robust, high-throughput RESTful Trading API suite serving institutional and retail clients. Implemented advanced order routing, real-time market data streaming, and secure OAuth2 authentication.',
      },
      {
        metric: '92% latency ↓',
        text: 'Optimized critical app-init API from 800ms (spiking >2s) to 60–70ms under high traffic — directly improving startup reliability for 500K+ daily active users.',
      },
      {
        metric: '85% faster',
        text: 'Reduced API response times of multiple reports endpoints by 85% (2s → 300ms) through query optimization, Redis caching, and HikariCP connection pool tuning.',
      },
      {
        metric: '80% smaller',
        text: 'Engineered byte-format data transmission cutting API payloads by up to 80%, boosting network throughput across mobile and web clients.',
      },
      {
        metric: 'Rate Limiting',
        text: 'Implemented per-endpoint, per-API-key rate limiting using Redis + Bucket4j with sliding window counters and Lua scripting for atomic operations.',
      },
      {
        metric: 'OAuth Architecture',
        text: 'Architected the Trading API Developer Portal authentication: OAuth-style flow with api_key, api_secret, request_token, access_token, and SHA-256 checksum verification.',
      },
      {
        metric: '15+ Services',
        text: 'Built and maintained 15+ Spring Boot microservices with Grafana monitoring, Docker containerization, and automated deployments on Google Cloud Platform.',
      },
      {
        metric: 'DB Migration',
        text: 'Led a MySQL migration adding unique indexes to resolve duplicate-key violations under strict production constraints (single-statement execution, no stored procedures, 300s timeout) via a custom batched staging-table deletion approach — while auditing schema drift across 190+ tables and 158 columns between UAT and Production.',
      },
      {
        metric: 'Idempotent DB Sync',
        text: 'Built set_based.py, a Python watermark-based incremental sync engine that merges multiple live production databases into a base database through a staging layer, enabling safe, repeatable reloads with zero manual intervention.',
      },
      {
        metric: 'Edge Rate Limiting',
        text: 'Implemented OpenResty/Lua fixed-window rate limiting at the edge and mapped the migration path to Redis-backed counters for distributed, multi-node deployments.',
      },
      {
        metric: 'Security Tooling',
        text: 'Built an internal pre-audit security scan to catch recurring vulnerability patterns ahead of external third-party security audits.',
      },
      {
        metric: 'Product Ownership',
        text: 'Took full ownership of BondsKart with no formal handover — audited inherited technical debt (missing input validation, unused cost-driving infrastructure, cache bugs, single-point-of-failure data storage) and escalated it to leadership through a structured, risk-first framing.',
      },
    ],
    tech: ['Java', 'Spring Boot', 'Python', 'Redis', 'MySQL', 'Docker', 'GCP', 'Grafana', 'Prometheus', 'Kafka', 'JPA/Hibernate', 'Bucket4j', 'OAuth2', 'OpenResty/Lua'],
  },
];

export const projects = [
  {
    title: 'BlinkX Trading APIs',
    description: 'Enterprise-grade Trading API suite developed for JM Financial. Designed for high-frequency trading, low-latency execution, and seamless integration for third-party developers.',
    tech: ['Java', 'Spring Boot', 'Redis', 'Kafka', 'OAuth2', 'Bucket4j'],
    highlights: [
      'Engineered a low-latency execution engine processing orders in under 5ms.',
      'Built a secure OAuth2 developer portal for API key generation and session management.',
      'Implemented sliding-window rate limiting using Redis and Bucket4j to ensure system stability.',
      'Designed real-time market data streaming integration handling high throughput during market hours.'
    ],
    category: 'Fintech · Enterprise API · System Architecture',
    accent: '#ffffff',
    accentDim: 'rgba(255,255,255,0.05)',
    github: '',
    group: 'fintech',
    featured: true,
    link: '',
    icon: '⚡',
  },
  {
    title: 'Traders Diary',
    description: 'Automated trading journal that integrates Trading APIs to auto-sync closed positions, compute analytics, and deliver real-time Telegram alerts.',
    tech: ['Python', 'Flask', 'Trading APIs', 'SQLite', 'APScheduler', 'Telegram Bot', 'Tailwind CSS'],
    highlights: [
      'Auto-syncs closed positions at 3:30 PM IST daily — records entry/exit prices, realized P&L, and trade metadata in SQLite (WAL mode).',
      'Regex-based Indian options symbol parser detecting Iron Condors, Spreads, Straddles automatically.',
      'Per-underlying analytics with equity curves, doughnut charts, win rate, avg P&L, and W/L ratio.',
      'Telegram Bot (webhook) with /note and /rate commands for remote journaling via Cloudflare Tunnel.'
    ],
    category: 'Trading · Python · Analytics',
    accent: '#ffffff',
    accentDim: 'rgba(255,255,255,0.05)',
    github: '',
    group: 'fintech',
    featured: false,
    link: '',
    icon: '📈',
  },
  {
    title: 'Self-Hosted Infrastructure',
    description: 'Production-grade homelab on a personal Linux server behind CGNAT — publicly accessible via Cloudflare Tunnel with full observability and Zero Trust security.',
    tech: ['Cloudflare Tunnel', 'Nginx', 'Grafana', 'Prometheus', 'Loki', 'Promtail', 'Systemd', 'Linux'],
    highlights: [
      'CGNAT bypass using Cloudflare Tunnel (QUIC) with free SSL/DDoS protection.',
      'Nginx reverse proxy with wildcard subdomain routing serving 8+ apps from one machine.',
      'Full observability: Grafana + Prometheus + Node Exporter + Loki + Promtail for metrics & logs.',
      'Cloudflare Zero Trust with email OTP gate; all services automated with systemd and shell scripts.'
    ],
    category: 'DevOps · Infrastructure · Linux',
    accent: '#ffffff',
    accentDim: 'rgba(255,255,255,0.05)',
    github: '',
    group: 'infra',
    featured: true,
    link: '',
    icon: '☁️',
  },
  {
    title: 'Sensible — Options Analytics Terminal',
    description: 'Open-source options analytics platform for Indian index options (NIFTY, BANKNIFTY, SENSEX, BANKEX), built on the Dhan Data API. Phase 1 shipped as v0.1.0.',
    tech: ['Python', 'Dhan Data API', 'Options Pricing', 'Open Source'],
    highlights: [
      'Built optcore, a pure options-pricing library kept side-effect-free by an AST purity test enforced in CI.',
      'Built optdhan, the broker-integration layer handling all live market-data I/O and Dhan API quirks.',
      'Self-documenting project with a 13-file architecture/decisions guide covering pricing math, deployment, and known gaps.',
      'Phase 2 backtester underway — replays a shared StrategySpec against recorded option chains via a DataSource protocol.'
    ],
    category: 'Fintech · Options Analytics · Open Source',
    accent: '#ffffff',
    accentDim: 'rgba(255,255,255,0.05)',
    github: '',
    group: 'fintech',
    featured: false,
    link: '',
    icon: '📊',
  },
  {
    title: "Milla's Bakery",
    description: 'End-to-end website and hosting for a friend\'s home bakery business — WhatsApp/Instagram-based ordering, built and shipped as a full side-project engagement from domain to deploy.',
    tech: ['Next.js 16', 'Tailwind CSS v4', 'Framer Motion', 'Vercel', 'GA4', 'Cloudflare DNS'],
    highlights: [
      'Single-page marketing site: hero, "Bake Case" product menu, story section, and a WhatsApp/Instagram DM ordering flow.',
      'GA4 analytics with custom order_click and instagram_click events wired through a shared TrackedLink component.',
      'JSON-LD Bakery structured data, sitemap, and canonical SEO setup driven by a single site-URL config.',
      'Migrated from self-hosted Nginx + Cloudflare Tunnel to Vercel with a custom domain on Cloudflare DNS, auto-deploying on every push to main.'
    ],
    category: 'Web Dev · Next.js · Small Business',
    accent: '#ffffff',
    accentDim: 'rgba(255,255,255,0.05)',
    github: 'https://github.com/swapnilshah10/MillaBakes',
    group: 'web',
    featured: false,
    link: '',
    icon: '🧁',
  },
  {
    title: 'SilentKillerOp — URL Shortener & Media Hub',
    description: 'Personal full-stack site combining a Bitly-style URL shortener with a YouTube-style video hub and embedded browser games, self-built and self-hosted end to end.',
    tech: ['Next.js 16', 'React 19', 'Django', 'Gunicorn', 'Vercel', 'Cloudflare'],
    highlights: [
      'Django + Gunicorn backend serving shortened-link redirects behind an Nginx reverse proxy and Cloudflare Tunnel.',
      'Next.js 16 (React 19, App Router) frontend with ISR-cached playlist pages, migrated from self-hosted to Vercel.',
      'Custom domain split across Vercel (frontend) and the home-server tunnel (API) via Cloudflare CNAME flattening at the apex.',
      'Embeds two self-built browser games (Dice Chess, Ultimate Tic-Tac-Toe) in a Games menu.'
    ],
    category: 'Full-Stack · Next.js · Self-Hosted',
    accent: '#ffffff',
    accentDim: 'rgba(255,255,255,0.05)',
    github: '',
    group: 'web',
    featured: false,
    link: 'https://silentkillerop.me',
    icon: '🔗',
  },
  {
    title: 'Algorithmic Options Trading Engine',
    description: 'Python backtesting framework and live execution bridge for Nifty/BankNifty options strategies — from historical strategy research through paper and live deployment on the Dhan broker API.',
    tech: ['Python', 'Dhan API', 'DuckDB', 'Pandas', 'Backtesting'],
    highlights: [
      'Built a bar-by-bar backtest engine with realistic margin, slippage, and cost modeling — catching real bugs like lookahead bias and mis-pinned expiries before they touched real money.',
      'Ran systematic robustness sweeps across entry triggers and volatility regimes to validate strategies against curve-fitting.',
      'Shipped a live execution bridge (shared decision core + runner) to Dhan\'s broker API with sandboxed order placement and a monthly circuit breaker.',
      'Iron condor strategy running in paper trading as a pre-live validation step before capital is committed.'
    ],
    category: 'Quant Finance · Python · Algo Trading',
    accent: '#ffffff',
    accentDim: 'rgba(255,255,255,0.05)',
    github: '',
    group: 'research',
    featured: true,
    link: '',
    icon: '📉',
  },
  {
    title: 'Atom Reaction — Realtime Multiplayer Game',
    description: 'A chain-reaction strategy game for up to 10 players, shipped as an installable PWA with live rooms, spectators and chat, accounts, daily puzzles and a leaderboard — built, deployed and operated solo.',
    tech: ['Python', 'FastAPI', 'WebSockets', 'React', 'Vite', 'PostgreSQL', 'Docker', 'PWA'],
    highlights: [
      'Authoritative-server WebSocket protocol: lobby, rematch, spectators via /watch/ROOM links, rate-limited room chat with emoji reactions.',
      'On-demand Postgres: a systemd socket proxy wakes the database on first connection and stops it after 3 idle minutes — 0 MB resident when nobody is playing.',
      'Installable PWA with a service-worker that never touches API or socket traffic, plus 7 languages through an English-keyed t() helper enforced by a CI check.',
      'Hardened container (unprivileged, read-only), Google login, GA4 + AdSense, SEO pages, and ~40 reversible deploys each with a tarball backup and changelog entry.'
    ],
    category: 'Games · Realtime · Full-Stack',
    group: 'web',
    featured: true,
    link: 'https://atomreaction.silentkillerop.me',
    accent: '#ffffff',
    accentDim: 'rgba(255,255,255,0.05)',
    github: 'https://github.com/swapnilshah10/atomReaction',
    icon: '⚛️',
  },
  {
    title: 'Crash-Resumable Order Management System',
    description: 'A strategy-agnostic OMS that routes orders through a Kotak Neo trading desk, with a journaled state machine so a crash or restart never loses or duplicates an order.',
    tech: ['Python', 'Flask', 'SQLite (WAL)', 'systemd', 'Unix sockets', 'Kotak Neo API'],
    highlights: [
      'Tickets → legs → attempts modelled as a state machine in a WAL journal, with a unique index on broker order ids to make placement idempotent.',
      'Orders carry a tag; fills are matched in the broker order book and booked to the algo that sent them, with late fills adopted instead of dropped.',
      'Reconciler heals order-level state and alerts if the order book is unreachable for 60 s; every guard and halt is an auditable event.',
      'Deliberately simplified after a production incident: removed position-based reconciliation in favour of tag + order-book truth.'
    ],
    category: 'Fintech · Distributed Systems · Reliability',
    group: 'fintech',
    featured: true,
    link: '',
    accent: '#ffffff',
    accentDim: 'rgba(255,255,255,0.05)',
    github: '',
    icon: '🧾',
  },
  {
    title: 'Shared Market-Data Feed & Rust Quote Store',
    description: 'One broker websocket fanned out to every consumer over a Unix socket hub, recording every instrument to a 1-second Parquet store — then ported from Python to Rust with byte-level parity.',
    tech: ['Rust', 'Python', 'Parquet', 'AF_UNIX SEQPACKET', 'DuckDB', 'Dhan API'],
    highlights: [
      'Ref-counted subscriptions: an instrument is only unsubscribed when its last consumer leaves (30 s grace) — one dropped client cannot starve another.',
      '1-second order-book and trade-flow recorders write zstd Parquet partitions per day, feeding backtests with tick-faithful data.',
      'Rust port verified against production: 40k parser cases, 211,501 second-rows and hub frames identical; 9 reconnect scenarios pass.',
      'Profiled and fixed an O(n) hot path — 5,890 ns → 44 ns per packet — cutting a synthetic 10k ticks/s load from 80% to 17.5% of a core.'
    ],
    category: 'Systems · Rust · Market Data',
    group: 'infra',
    featured: true,
    link: '',
    accent: '#ffffff',
    accentDim: 'rgba(255,255,255,0.05)',
    github: '',
    icon: '🦀',
  },
  {
    title: 'Strategy Atlas — Research Hygiene at Scale',
    description: 'A cross-idea study of 238 trading ideas (184k trades) built to answer one question honestly: do indicator filters transfer, or are they curve-fitting?',
    tech: ['Python', 'Pandas', 'DuckDB', 'Statistics', 'HTML reports'],
    highlights: [
      'Mined 718 condition rules over 20 entry-time features, with a train / holdout / forward split to separate selection from evidence.',
      'Built a null test: per-idea tuning produced 9 survivors versus 12 for random filters and 17 for no filter — tuning was worse than doing nothing.',
      'Showed structure beats timing: expiry-day and premium-selling ideas survived far more often than option-buying or short-hold ideas.',
      'Report pipeline (build → mine → per-idea → null test → export) is fully reproducible.'
    ],
    category: 'Data Science · Backtesting · Statistics',
    group: 'research',
    featured: false,
    link: '',
    accent: '#ffffff',
    accentDim: 'rgba(255,255,255,0.05)',
    github: '',
    icon: '🔬',
  },
  {
    title: 'Self-Hosted Agent Memory (Obsidian + CLI)',
    description: 'A shared knowledge vault running on my own VM, exposed over Tailscale with a REST API, so every AI agent and machine I use reads and writes the same long-term memory.',
    tech: ['Obsidian', 'REST API', 'Tailscale', 'Bash', 'Markdown', 'Docker'],
    highlights: [
      'Portable skill plus an obsmem CLI (ls / cat / put / search) that any agent can drop in; secrets live outside the skill.',
      'Every project change writes a dated changelog entry to the vault, giving a durable audit trail across tools and machines.',
      'Hub-and-spoke note index keeps the always-loaded memory tiny while hundreds of notes stay searchable.',
      'Crash-looping container diagnosed and fixed, with the root cause recorded as a runbook note.'
    ],
    category: 'Developer Tooling · Knowledge Systems · Self-Hosted',
    group: 'infra',
    featured: false,
    link: '',
    accent: '#ffffff',
    accentDim: 'rgba(255,255,255,0.05)',
    github: '',
    icon: '🗂️',
  },
];

export const education = {
  degree: 'B.E. in Computer Engineering',
  institution: 'Dwarkadas J. Sanghvi College of Engineering',
  university: 'Mumbai University',
  duration: '2020 – 2024',
  cgpa: '9.375 / 10',
  distinction: true,
  coursework: ['DBMS', 'OOP', 'Operating Systems', 'Analysis of Algorithms', 'Computer Networks', 'Data Structures'],
};

export const certifications = [
  {
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Coursera · Meta',
    desc: 'HTML, CSS, Bootstrap, React, responsive design principles',
    icon: '🎓',
  },
  {
    title: 'Architecture Documentation — Trading API Developer Portal',
    issuer: 'JM Financial',
    desc: 'Comprehensive PDF + PPTX architecture documentation presented to stakeholders',
    icon: '📐',
  },
  {
    title: 'Academic Distinction — CGPA 9.375',
    issuer: 'D.J. Sanghvi, Mumbai University',
    desc: 'Maintained Distinction grade throughout 4-year Computer Engineering program',
    icon: '🏆',
  },
];

export const terminalLines = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'Swapnil Shah — Backend Engineer @ JM Financial' },
  { type: 'cmd', text: 'cat impact.json' },
  { type: 'out', text: '{\n  "users_served": "500K+ daily",\n  "latency_win": "800ms → 60ms (-92%)",\n  "api": "Trading API Suite",\n  "services_built": "15+"\n}' },
  { type: 'cmd', text: 'ls ./tech-stack/' },
  { type: 'out', text: 'java  go  rust  spring-boot  redis  postgres  docker  gcp  kafka  grafana' },
  { type: 'cmd', text: './run --show-achievements' },
  { type: 'out', text: '✓ 92% API latency reduction\n✓ Engineered Trading API Suite\n✓ 80% smaller API payloads\n✓ Redis + Bucket4j rate limiting\n✓ OAuth2 developer portal\n✓ Full observability stack on GCP' },
];

export const faqs = [
  { q: 'Who is Swapnil Shah?', a: 'Swapnil Shah is a Backend Developer based in Mumbai, India, working at JM Financial on the BlinkX trading platform. He builds Spring Boot microservices and high-throughput APIs serving 500K+ daily active users.' },
  { q: 'What does Swapnil Shah work on at JM Financial?', a: 'Trading APIs, a developer-portal OAuth flow, Redis and Bucket4j rate limiting, and performance work that cut the app-init API from 800 ms to 60-70 ms. He also owns the BondsKart product.' },
  { q: 'Which technologies does Swapnil Shah use?', a: 'Java, Spring Boot, Kafka, Redis, MySQL and PostgreSQL professionally; Go, Rust, Python and TypeScript in side projects; Docker, GCP, Grafana, Prometheus and Loki for delivery and observability.' },
  { q: 'What side projects has Swapnil Shah built?', a: 'Atom Reaction (a realtime multiplayer game), a crash-resumable order management system, a shared market-data feed with a Rust quote store, a strategy research lab, and a self-hosted homelab behind Cloudflare Tunnel.' },
  { q: 'Which games has Swapnil Shah built?', a: 'Atom Reaction (realtime multiplayer chain-reaction game), Dice Chess and Ultimate Tic-Tac-Toe. All are live and playable in the browser from the Arcade section of this portfolio.' },
  { q: 'Is Swapnil Shah open to new roles?', a: 'Yes. He is looking for backend and fintech engineering roles. Email shah.swapnil@proton.me or connect on LinkedIn; the résumé PDF is on this page.' },
];

export const player = {
  handle: 'SILENTKILLEROP',
  class: 'Backend Engineer',
  level: 24,
  xp: 78,
  guild: 'JM Financial',
  stats: [
    { label: 'Backend', value: 92 },
    { label: 'Systems', value: 85 },
    { label: 'Realtime', value: 80 },
    { label: 'DevOps', value: 78 },
    { label: 'Frontend', value: 70 },
  ],
};

export const skillLevels = [
  { name: 'Java', lv: 92 }, { name: 'Spring Boot', lv: 92 }, { name: 'Redis', lv: 88 }, { name: 'MySQL', lv: 86 },
  { name: 'Python', lv: 84 }, { name: 'Docker / GCP', lv: 80 }, { name: 'Kafka', lv: 76 }, { name: 'Go', lv: 68 },
  { name: 'Rust', lv: 58 }, { name: 'TypeScript / React', lv: 72 },
];

export const games = [
  {
    title: 'Atom Reaction',
    tagline: 'Chain-reaction strategy for up to 10 players',
    blurb: 'Place atoms, trigger chain explosions, capture the board. Live rooms, spectators, chat, daily puzzles, 7 languages, installable PWA.',
    url: 'https://atomreaction.silentkillerop.me',
    embed: '',
    stack: ['FastAPI', 'WebSockets', 'React', 'Postgres'],
    genre: 'Multiplayer · Strategy',
    players: '2-10',
  },
  {
    title: 'Dice Chess',
    tagline: 'Chess where the dice pick your piece',
    blurb: 'A self-built browser chess variant: roll the dice, move the piece it names. Quick games, constant surprises.',
    url: 'https://dicechess.silentkillerop.me',
    embed: 'https://dicechess.silentkillerop.me',
    stack: ['JavaScript', 'Canvas'],
    genre: 'Board · Chess variant',
    players: '1-2',
  },
  {
    title: 'Ultimate Tic-Tac-Toe',
    tagline: 'Nine boards, one winner',
    blurb: 'Every move decides which board your opponent plays next. Tic-tac-toe with real strategy depth.',
    url: 'https://ultimatetictactoe.silentkillerop.me',
    embed: 'https://ultimatetictactoe.silentkillerop.me',
    stack: ['JavaScript', 'CSS'],
    genre: 'Board · Strategy',
    players: '1-2',
  },
];
