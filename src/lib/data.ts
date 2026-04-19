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
    product: 'BlinkX Trading Platform',
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
    ],
    tech: ['Java', 'Spring Boot', 'Redis', 'MySQL', 'Docker', 'GCP', 'Grafana', 'Prometheus', 'Kafka', 'JPA/Hibernate', 'Bucket4j', 'OAuth2'],
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
