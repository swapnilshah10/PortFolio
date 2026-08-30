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
    'Backend Developer with 1.5+ years at JM Financial (BlinkX trading platform) building scalable Spring Boot microservices and high-throughput RESTful APIs serving 500K+ daily active users. Proficient in Java, Python, Redis, MySQL, Docker, and GCP. Passionate about algorithmic trading, self-hosted infrastructure, observability with Grafana, Prometheus, and Loki.',
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
    items: ['Java', 'Python', 'Go', 'C++', 'JavaScript', 'SQL', 'Bash/Shell'],
  },
  {
    category: 'Backend',
    color: '#ffffff',
    glow: 'rgba(255,255,255,0.1)',
    items: ['Spring Boot', 'REST APIs', 'JWT/OAuth2', 'Kafka', 'JPA/Hibernate', 'Flask', 'Gunicorn', 'APScheduler'],
  },
  {
    category: 'Datastores',
    color: '#ffffff',
    glow: 'rgba(255,255,255,0.1)',
    items: ['MySQL', 'Redis', 'MongoDB', 'SQLite', 'HikariCP'],
  },
  {
    category: 'Infrastructure',
    color: '#ffffff',
    glow: 'rgba(255,255,255,0.1)',
    items: ['Docker', 'Nginx', 'Cloudflare Tunnel', 'Systemd', 'Linux', 'GCP Cloud Console'],
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
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'Git', 'GitHub', 'Postman', 'Jira', 'Trading APIs', 'Telegram Bot API'],
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
    icon: '📉',
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
  { type: 'out', text: 'java  spring-boot  redis  mysql  docker  gcp  kafka  grafana  nginx' },
  { type: 'cmd', text: './run --show-achievements' },
  { type: 'out', text: '✓ 92% API latency reduction\n✓ Engineered Trading API Suite\n✓ 80% smaller API payloads\n✓ Redis + Bucket4j rate limiting\n✓ OAuth2 developer portal\n✓ Full observability stack on GCP' },
];
