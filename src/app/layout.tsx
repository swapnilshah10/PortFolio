import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { faqs } from '@/lib/data';
import Providers from '@/components/Providers';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const BASE_URL = 'https://personal.silentkillerop.me';

const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Swapnil Shah — Backend Developer in Mumbai | Java, Go, Rust, Spring Boot',
    template: '%s | Swapnil Shah',
  },
  description:
    'Swapnil Shah is a Backend Developer in Mumbai at JM Financial (BlinkX), building Spring Boot microservices for 500K+ daily users. Portfolio, projects and résumé: Java, Go, Rust, Redis, Kafka, GCP, trading infrastructure.',
  keywords: [
    'Swapnil Shah Mumbai',
    'Swapnil Shah backend engineer',
    'Swapnil Shah GitHub',
    'Swapnil Shah LinkedIn',
    'Swapnil Shah Atom Reaction',
    'Rust Developer India',
    'Go Developer Mumbai',
    'Swapnil Shah',
    'Swapnil Shah Portfolio',
    'Swapnil Shah Resume',
    'Swapnil Shah JM Financial',
    'Swapnil Shah Backend Developer',
    'Swapnil Shah Software Engineer',
    'Swapnil Shah Developer',
    'Swapnil Shah BlinkX',
    'Spring Boot Developer',
    'Java Engineer',
    'Microservices Architect',
    'DevOps Engineer',
    'JM Financial',
    'BlinkX',
    'Redis',
    'Docker',
    'GCP',
    'Mumbai Backend Developer',
    'Java Spring Boot',
    'Kafka',
    'Grafana',
    'Prometheus',
    'System Design',
    'REST API Developer',
    'Rate Limiting',
    'OAuth2',
    'Traders Diary',
    'Self-Hosted Infrastructure',
    'Cloudflare Tunnel',
    'Swapnil Shah JMPro',
    'Swapnil Shah BondsKart',
    'Swapnil Shah Sensible',
    'Swapnil Shah SilentKillerOp',
    'Algorithmic Trading Developer',
    'Options Trading Python',
    'Dhan API',
  ],
  authors: [{ name: 'Swapnil Shah', url: BASE_URL }],
  creator: 'Swapnil Shah',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Swapnil Shah',
    title: 'Swapnil Shah — Backend Developer in Mumbai | Java, Go, Rust, Spring Boot',
    description:
      'Backend Developer building scalable Spring Boot microservices serving 500K+ daily users at JM Financial. Java · Redis · Docker · GCP · Kafka.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Swapnil Shah — Backend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swapnil Shah — Backend Developer in Mumbai | Java, Go, Rust, Spring Boot',
    description:
      'Building high-throughput APIs serving 500K+ users. Java · Spring Boot · Redis · Docker · GCP.',
    images: ['/og-image.png'],
    creator: '@swapnilshah',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: { canonical: BASE_URL },
  category: 'technology',
  other: { 'profile:first_name': 'Swapnil', 'profile:last_name': 'Shah' },
};

export const viewport: Viewport = {
  themeColor: '#02040a',
  width: 'device-width',
  initialScale: 1,
};

const personId = `${BASE_URL}/#person`;
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': personId,
      name: 'Swapnil Shah',
      givenName: 'Swapnil',
      familyName: 'Shah',
      alternateName: ['Swapnil Shah Backend Developer', 'swapnilshah10', 'SilentKillerOp'],
      url: BASE_URL,
      mainEntityOfPage: { '@id': `${BASE_URL}/#profile` },
      image: `${BASE_URL}/avatar.png`,
      description:
        'Swapnil Shah is a Backend Developer in Mumbai with 2+ years at JM Financial (BlinkX), building Spring Boot microservices serving 500K+ daily users, plus trading infrastructure and realtime systems in Java, Go, Rust and Python.',
      sameAs: [
        'https://github.com/swapnilshah10',
        'https://linkedin.com/in/Swapnil-Shah9671',
        'https://atomreaction.silentkillerop.me',
        'https://silentkillerop.me',
      ],
      jobTitle: 'Backend Developer',
      worksFor: { '@type': 'Organization', name: 'JM Financial Ltd' },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Dwarkadas J. Sanghvi College of Engineering, Mumbai University' },
      knowsAbout: [
        'Java', 'Spring Boot', 'Microservices', 'Go', 'Rust', 'Python', 'Redis', 'Kafka', 'PostgreSQL', 'MySQL',
        'Docker', 'GCP', 'REST APIs', 'System Design', 'DevOps', 'Observability', 'Algorithmic Trading', 'Next.js',
      ],
      address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressRegion: 'Maharashtra', addressCountry: 'IN' },
      email: 'shah.swapnil@proton.me',
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Swapnil Shah',
      alternateName: 'Swapnil Shah — Portfolio',
      inLanguage: 'en',
      publisher: { '@id': personId },
    },
    {
      '@type': 'FAQPage',
      '@id': `${BASE_URL}/#faq`,
      mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@type': 'ProfilePage',
      '@id': `${BASE_URL}/#profile`,
      url: BASE_URL,
      name: 'Swapnil Shah — Backend Developer in Mumbai',
      isPartOf: { '@id': `${BASE_URL}/#website` },
      about: { '@id': personId },
      mainEntity: { '@id': personId },
      dateModified: new Date().toISOString().slice(0, 10),
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="noise">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
