'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-10 border-t"
      style={{ borderColor: 'var(--border)', background: 'var(--bg-0)' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Branding */}
        <div className="flex items-center gap-3">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black text-black font-mono"
            style={{ background: 'linear-gradient(135deg,#00d4aa,#6366f1)' }}
          >
            SS
          </span>
          <span className="text-sm" style={{ color: 'var(--text-3)' }}>
            © {year} Swapnil Shah. Built with Next.js &amp; Tailwind CSS.
          </span>
        </div>

        {/* Social */}
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: personalInfo.github, label: 'GitHub' },
            { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-colors duration-200"
              style={{ color: 'var(--text-3)' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--cyan)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-3)'}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
