'use client';

import { useEffect, useRef } from 'react';

const HIGHLIGHTS = [
  { value: '1.5+', label: 'Years Experience' },
  { value: '500K+', label: 'Users Served' },
  { value: '15+', label: 'Microservices' },
  { value: '9.375', label: 'CGPA' },
];

const PASSIONS = [
  { emoji: '⚡', text: 'High-throughput API design' },
  { emoji: '🏗️', text: 'Microservices & system design' },
  { emoji: '📊', text: 'Observability & metrics' },
  { emoji: '🏠', text: 'Self-hosted infrastructure' },
  { emoji: '📈', text: 'Algorithmic trading systems' },
  { emoji: '🔐', text: 'Zero Trust security' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '-50px' }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-up')
      .forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-28 overflow-hidden"
      style={{ background: 'var(--bg-1)' }}>

      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Header - Centered */}
        <div className="reveal flex flex-col items-center mb-12">
          <div className="section-label">Background</div>
          <h2 className="section-heading">About Me</h2>
        </div>

        {/* Avatar - Centered */}
        <div className="reveal-up flex justify-center mb-10 w-full">
          <div
            className="w-32 h-32 rounded-full flex items-center justify-center text-3xl font-bold"
            style={{
              background: 'var(--bg-2)',
              border: '1px solid var(--border)',
              fontFamily: 'Inter, sans-serif',
              color: 'var(--text-1)',
              boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)'
            }}
          >
            SS
          </div>
        </div>

        {/* Text - Centered */}
        <div className="reveal-up max-w-2xl mb-14">
          <p className="text-[0.95rem] leading-relaxed mb-6" style={{ color: 'var(--text-2)' }}>
            I&apos;m a{' '}
            <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>Backend Developer</span>
            {' '}with 1.5+ years at{' '}
            <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>JM Financial</span>
            {' '}building the{' '}
            <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>BlinkX trading platform</span>
            {' '}— a high-throughput enterprise system serving over{' '}
            <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>500K daily users</span>.
          </p>
          <p className="text-[0.95rem] leading-relaxed mb-6" style={{ color: 'var(--text-2)' }}>
            My core focus has been architecting robust, low-latency infrastructure. Key wins include engineering the enterprise Trading API Suite, cutting critical API latency from{' '}
            <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>800ms → 60ms</span>, and reducing payload sizes by{' '}
            <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>80%</span>{' '}
            to ensure seamless market operations.
          </p>
          <p className="text-[0.95rem] leading-relaxed" style={{ color: 'var(--text-2)' }}>
            Outside of work, I design automated trading systems using my own Trading API infrastructure and manage a production-grade{' '}
            <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>self-hosted homelab</span>
            {' '}utilizing Cloudflare Zero Trust and Docker.
          </p>
        </div>

        {/* Stats Grid - Centered items */}
        <div className="reveal-up grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-14">
          {HIGHLIGHTS.map(h => (
            <div
              key={h.label}
              className="rounded-lg p-5 flex flex-col items-center justify-center transition-transform hover:-translate-y-1"
              style={{
                background: 'var(--bg-2)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="text-2xl font-bold font-sans mb-1"
                style={{ color: 'var(--text-1)' }}>
                {h.value}
              </div>
              <div className="text-[0.7rem] font-medium uppercase tracking-wider text-center" style={{ color: 'var(--text-3)' }}>
                {h.label}
              </div>
            </div>
          ))}
        </div>

        {/* Passions - Centered Layout */}
        <div className="reveal-up w-full">
          <p className="text-xs font-semibold uppercase tracking-wider mb-5 text-center"
            style={{ color: 'var(--text-3)' }}>
            Core Competencies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {PASSIONS.map(p => (
              <div
                key={p.text}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm transition-colors hover:bg-white/5"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-2)',
                }}
              >
                <span className="text-base flex-shrink-0">{p.emoji}</span>
                <span className="font-medium">{p.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
