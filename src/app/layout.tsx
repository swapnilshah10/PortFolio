import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const BASE_URL = 'https://swapnilshah.dev';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Swapnil Shah — Backend Developer | Spring Boot & Microservices',
    template: '%s | Swapnil Shah',
  },
  description:
    'Backend Developer with 1.5+ years at JM Financial (BlinkX trading platform) building Spring Boot microservices serving 500K+ daily users. Expert in Java, Redis, Docker, GCP, and high-throughput system design.',
  keywords: [
    'Swapnil Shah',
    'Backend Developer',
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
  ],
  authors: [{ name: 'Swapnil Shah', url: BASE_URL }],
  creator: 'Swapnil Shah',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Swapnil Shah',
    title: 'Swapnil Shah — Backend Developer | Spring Boot & Microservices',
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
    title: 'Swapnil Shah — Backend Developer | Spring Boot & Microservices',
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
  verification: {
    google: 'your-google-site-verification',
  },
};

export const viewport: Viewport = {
  themeColor: '#00d4aa',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Swapnil Shah',
  url: BASE_URL,
  image: `${BASE_URL}/avatar.png`,
  sameAs: [
    'https://github.com/Swapnil-Shah9671',
    'https://linkedin.com/in/swapnilshah10',
  ],
  jobTitle: 'Backend Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'JM Financial Ltd',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Dwarkadas J. Sanghvi College of Engineering, Mumbai University',
  },
  knowsAbout: [
    'Java', 'Spring Boot', 'Microservices', 'Redis', 'Docker',
    'GCP', 'Kafka', 'REST APIs', 'System Design', 'DevOps',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressCountry: 'IN',
  },
  email: 'shah.swapnil@proton.me',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
