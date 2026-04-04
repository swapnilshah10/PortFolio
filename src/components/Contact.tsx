'use client';

import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, Phone, Copy, CheckCheck, ArrowRight } from 'lucide-react';
import { personalInfo } from '@/lib/data';

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="p-1.5 rounded-md transition-all duration-200"
      aria-label="Copy to clipboard"
      style={{ color: copied ? 'var(--cyan)' : 'var(--text-3)' }}
      onMouseEnter={e => { if (!copied) (e.currentTarget as HTMLElement).style.color = 'var(--text-2)'; }}
      onMouseLeave={e => { if (!copied) (e.currentTarget as HTMLElement).style.color = 'var(--text-3)'; }}
    >
      {copied ? <CheckCheck size={14} /> : <Copy size={14} />}
    </button>
  );
}

const CONTACTS = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    accent: '#00d4aa',
    glow: 'rgba(0,212,170,0.3)',
    copyable: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Swapnil-Shah9671',
    href: personalInfo.github,
    accent: '#6366f1',
    glow: 'rgba(99,102,241,0.3)',
    copyable: false,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'swapnilshah10',
    href: personalInfo.linkedin,
    accent: '#0ea5e9',
    glow: 'rgba(14,165,233,0.3)',
    copyable: false,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    accent: '#f472b6',
    glow: 'rgba(244,114,182,0.3)',
    copyable: true,
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '-50px' }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative py-28 overflow-hidden"
      style={{ background: 'var(--bg-1)' }}>

      {/* Gradient glow */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(0,212,170,0.08), transparent)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="reveal mb-16">
          <div className="section-label justify-center">Say Hello</div>
          <h2 className="section-heading mb-4">
            Let&apos;s Build Something{' '}
            <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-base leading-relaxed max-w-xl mx-auto"
            style={{ color: 'var(--text-2)' }}>
            I&apos;m currently open to new backend engineering roles, interesting projects,
            and collaborations. Don&apos;t hesitate to reach out — I reply fast.
          </p>
        </div>

        {/* Contact cards */}
        <div className="reveal grid sm:grid-cols-2 gap-4 mb-12">
          {CONTACTS.map(c => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('mailto') || c.href.startsWith('tel') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="contact-link group text-left"
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = c.accent;
                el.style.boxShadow = `0 0 30px ${c.glow}`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'var(--border)';
                el.style.boxShadow = '';
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `${c.accent}15`,
                  border: `1px solid ${c.accent}30`,
                }}
              >
                <c.icon size={20} style={{ color: c.accent }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-mono font-bold uppercase tracking-wider mb-0.5"
                  style={{ color: 'var(--text-3)' }}>
                  {c.label}
                </p>
                <p className="text-sm font-medium truncate" style={{ color: 'var(--text-1)' }}>
                  {c.value}
                </p>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                {c.copyable && (
                  <span onClick={e => e.preventDefault()}>
                    <CopyButton text={c.value} />
                  </span>
                )}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                  style={{ color: 'var(--text-3)' }}
                />
              </div>
            </a>
          ))}
        </div>

        {/* CTA email button */}
        <div className="reveal">
          <a
            href={`mailto:${personalInfo.email}?subject=Opportunity%20for%20Swapnil%20Shah&body=Hi%20Swapnil%2C%0A%0A`}
            className="btn-primary text-base inline-flex"
            style={{ padding: '14px 36px' }}
          >
            Send Me a Message
            <ArrowRight size={18} />
          </a>
          <p className="mt-4 text-xs" style={{ color: 'var(--text-3)' }}>
            {personalInfo.location} · Usually replies within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
