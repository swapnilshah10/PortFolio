'use client';

import { useEffect, useRef } from 'react';
import { personalInfo } from '@/lib/data';

const HIGHLIGHTS = [
  { value: '1.5+', label: 'Years Experience' },
  { value: '500K+', label: 'Users Served' },
  { value: '15+', label: 'Microservices' },
  { value: '9.375', label: 'CGPA' },
];

const PASSIONS = [
  { emoji: '⚡', text: 'High-throughput API design & optimization' },
  { emoji: '🏗️', text: 'Microservices architecture & system design' },
  { emoji: '📊', text: 'Observability with Grafana, Prometheus & Loki' },
  { emoji: '🏠', text: 'Self-hosted infrastructure & DevOps automation' },
  { emoji: '📈', text: 'Algorithmic trading & financial systems' },
  { emoji: '🔐', text: 'Zero Trust security & OAuth2 architectures' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '-50px' }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
      .forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-28 overflow-hidden"
      style={{ background: 'var(--bg-1)' }}>

      <div className="orb w-96 h-96 top-0 -left-24"
        style={{ background: 'rgba(0,212,170,0.04)', animationDelay: '-2s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="reveal mb-16">
          <div className="section-label">Who I Am</div>
          <h2 className="section-heading">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT: Avatar + stats */}
          <div className="reveal-left">
            {/* Avatar */}
            <div className="flex justify-center lg:justify-start mb-10">
              <div className="relative">
                {/* Rotating rings */}
                <div
                  className="absolute -inset-4 rounded-full border opacity-20"
                  style={{
                    borderColor: 'var(--cyan)',
                    animation: 'spin 10s linear infinite',
                  }}
                />
                <div
                  className="absolute -inset-8 rounded-full border opacity-10"
                  style={{
                    borderColor: 'var(--purple)',
                    borderStyle: 'dashed',
                    animation: 'spin 15s linear infinite reverse',
                  }}
                />

                {/* Avatar circle */}
                <div
                  className="relative w-40 h-40 rounded-full flex items-center justify-center text-5xl font-black"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,212,170,0.15), rgba(99,102,241,0.15))',
                    border: '2px solid rgba(0,212,170,0.3)',
                    boxShadow: '0 0 40px rgba(0,212,170,0.15)',
                    fontFamily: 'JetBrains Mono, monospace',
                    color: 'var(--cyan)',
                  }}
                >
                  SS
                </div>

                {/* Pulse ring */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    animation: 'ringPulse 3s ease-out infinite',
                    border: '1px solid rgba(0,212,170,0.4)',
                  }}
                />
              </div>
            </div>

            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-4">
              {HIGHLIGHTS.map(h => (
                <div
                  key={h.label}
                  className="rounded-xl p-4 text-center"
                  style={{
                    background: 'rgba(0,212,170,0.05)',
                    border: '1px solid rgba(0,212,170,0.12)',
                  }}
                >
                  <div className="text-2xl font-black font-mono mb-1"
                    style={{ color: 'var(--cyan)' }}>
                    {h.value}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-2)' }}>
                    {h.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Text */}
          <div className="reveal-right">
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-2)' }}>
              I&apos;m a{' '}
              <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>Backend Developer</span>
              {' '}with 1.5+ years at{' '}
              <span style={{ color: 'var(--cyan)', fontWeight: 600 }}>JM Financial</span>
              {' '}building the{' '}
              <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>BlinkX trading platform</span>
              {' '}— a high-stakes system serving over{' '}
              <span style={{ color: 'var(--cyan)', fontWeight: 600 }}>500K daily users</span>.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-2)' }}>
              My biggest wins at work: cutting a critical API from{' '}
              <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>800ms → 60ms</span>{' '}
              (92% faster), shrinking report endpoints by{' '}
              <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>85%</span>, and
              reducing API payload sizes by{' '}
              <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>80%</span>{' '}
              using byte-format transmission.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-2)' }}>
              Outside work, I run a{' '}
              <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>self-hosted homelab</span>
              {' '}behind CGNAT using Cloudflare Tunnel and built a{' '}
              <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>Traders Diary</span>
              {' '}app that auto-journals my Zerodha trades with Telegram alerts.
            </p>

            {/* Passions */}
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider mb-4"
                style={{ color: 'var(--text-3)' }}>
                What I&apos;m Passionate About
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {PASSIONS.map(p => (
                  <div
                    key={p.text}
                    className="flex items-start gap-3 p-3 rounded-xl text-sm"
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-2)',
                    }}
                  >
                    <span className="text-base flex-shrink-0">{p.emoji}</span>
                    <span>{p.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
