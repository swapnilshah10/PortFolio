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
    color: '#00d4aa',
    glow: 'rgba(0,212,170,0.3)',
    items: ['Java', 'Python', 'Go', 'C++', 'JavaScript', 'SQL', 'Bash/Shell'],
  },
  {
    category: 'Backend',
    color: '#6366f1',
    glow: 'rgba(99,102,241,0.3)',
    items: ['Spring Boot', 'REST APIs', 'JWT/OAuth2', 'Kafka', 'JPA/Hibernate', 'Flask', 'Gunicorn', 'APScheduler'],
  },
  {
    category: 'Datastores',
    color: '#f472b6',
    glow: 'rgba(244,114,182,0.3)',
    items: ['MySQL', 'Redis', 'MongoDB', 'SQLite', 'HikariCP'],
  },
  {
    category: 'Infrastructure',
    color: '#34d399',
    glow: 'rgba(52,211,153,0.3)',
    items: ['Docker', 'Nginx', 'Cloudflare Tunnel', 'Systemd', 'Linux', 'GCP Cloud Console'],
  },
  {
    category: 'Monitoring',
    color: '#fbbf24',
    glow: 'rgba(251,191,36,0.3)',
    items: ['Grafana', 'Prometheus', 'Loki', 'Promtail', 'Node Exporter', 'Nginx Exporter'],
  },
  {
    category: 'Frontend & Tools',
    color: '#fb923c',
    glow: 'rgba(251,146,60,0.3)',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'Git', 'GitHub', 'Postman', 'Jira', 'Zerodha Kite API', 'Telegram Bot API'],
  },
  {
    category: 'Concepts',
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.3)',
    items: ['Microservices Architecture', 'Rate Limiting', 'Reverse Proxy', 'CGNAT Bypass', 'Zero Trust Security', 'CI/CD', 'System Design', 'OAuth2'],
  },
];

export const experience = [
  {
    title: 'Software Developer',
    company: 'JM Financial Ltd',
    product: 'BlinkX Trading Platform',
    duration: 'Jun 2024 – Present',
    location: 'Mumbai, India',
    type: 'Full-Time',
    achievements: [
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
        metric: 'MySQL Automation',
        text: 'Designed position/holding notes feature with client-side reconciliation against Omnisys OMS and MySQL Event Scheduler for automated cleanup of expired records.',
      },
    ],
    tech: ['Java', 'Spring Boot', 'Redis', 'MySQL', 'Docker', 'GCP', 'Grafana', 'Prometheus', 'Kafka', 'JPA/Hibernate', 'Bucket4j', 'Lua'],
  },
];

export const projects = [
  {
    title: 'Traders Diary',
    description: 'Automated trading journal that integrates Zerodha Kite API to auto-sync closed positions, compute analytics, and deliver real-time Telegram alerts.',
    tech: ['Python', 'Flask', 'Zerodha Kite API', 'SQLite', 'APScheduler', 'Telegram Bot', 'Chart.js', 'Tailwind CSS'],
    highlights: [
      'Auto-syncs closed positions at 3:30 PM IST daily — records entry/exit prices, realized P&L, and trade metadata in SQLite (WAL mode)',
      'Regex-based Indian options symbol parser detecting Iron Condors, Spreads, Straddles automatically',
      'Per-underlying analytics with equity curves, doughnut charts, win rate, avg P&L, and W/L ratio',
      'Telegram Bot (webhook) with /note and /rate commands for remote journaling via Cloudflare Tunnel',
    ],
    category: 'Trading · Python · Analytics',
    accent: '#00d4aa',
    accentDim: 'rgba(0,212,170,0.1)',
    github: '',
    icon: '📈',
  },
  {
    title: 'Self-Hosted Homelab',
    description: 'Production-grade homelab on a personal Linux laptop behind CGNAT — publicly accessible via Cloudflare Tunnel with full observability and Zero Trust security.',
    tech: ['Cloudflare Tunnel', 'Nginx', 'Grafana', 'Prometheus', 'Loki', 'Promtail', 'Systemd', 'Linux'],
    highlights: [
      'CGNAT bypass using Cloudflare Tunnel (QUIC) with free SSL/DDoS protection at domain silentkiller.op.me',
      'Nginx reverse proxy with wildcard subdomain routing serving 8+ apps from one machine',
      'Full observability: Grafana + Prometheus + Node Exporter + Loki + Promtail for metrics & logs',
      'Cloudflare Zero Trust with email OTP gate; all services automated with systemd and shell scripts',
    ],
    category: 'DevOps · Infrastructure · Linux',
    accent: '#6366f1',
    accentDim: 'rgba(99,102,241,0.1)',
    github: '',
    icon: '🏠',
  },
  {
    title: 'URL Shortener',
    description: 'Full-stack Bitly clone with Django REST backend and Next.js frontend, featuring click analytics, QR code generation, and responsive design.',
    tech: ['Django REST Framework', 'React.js', 'Next.js', 'Nginx', 'Cloudflare Tunnel'],
    highlights: [
      'Short link generation with click analytics and real-time tracking dashboard',
      'QR code generation for every shortened link with download support',
      'Deployed on homelab via Nginx reverse proxy + Cloudflare Tunnel — zero infra cost',
      '30% shorter URLs with responsive UI across all device sizes',
    ],
    category: 'Full Stack · Web · API',
    accent: '#f472b6',
    accentDim: 'rgba(244,114,182,0.1)',
    github: '',
    icon: '🔗',
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
  { type: 'out', text: '{\n  "users_served": "500K+ daily",\n  "latency_win": "800ms → 60ms (-92%)",\n  "payload_reduction": "80%",\n  "services_built": "15+"\n}' },
  { type: 'cmd', text: 'ls ./tech-stack/' },
  { type: 'out', text: 'java  spring-boot  redis  mysql  docker  gcp  kafka  grafana  nginx' },
  { type: 'cmd', text: './run --show-achievements' },
  { type: 'out', text: '✓ 92% API latency reduction\n✓ 85% faster report endpoints\n✓ 80% smaller API payloads\n✓ Redis + Bucket4j rate limiting\n✓ OAuth2 developer portal\n✓ Full observability stack on GCP' },
];
