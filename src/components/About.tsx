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

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="reveal mb-16">
          <div className="section-label">Background</div>
          <h2 className="section-heading">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT: Avatar + stats */}
          <div className="reveal-left">
            {/* Avatar */}
            <div className="flex justify-center lg:justify-start mb-10">
              <div className="relative">
                {/* Clean Avatar Circle */}
                <div
                  className="relative w-36 h-36 rounded-full flex items-center justify-center text-4xl font-bold"
                  style={{
                    background: 'var(--bg-2)',
                    border: '1px solid var(--border)',
                    fontFamily: 'Inter, sans-serif',
                    color: 'var(--text-1)',
                  }}
                >
                  SS
                </div>
              </div>
            </div>

            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-4">
              {HIGHLIGHTS.map(h => (
                <div
                  key={h.label}
                  className="rounded-lg p-4 text-center"
                  style={{
                    background: 'var(--bg-2)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <div className="text-2xl font-bold font-sans mb-1"
                    style={{ color: 'var(--text-1)' }}>
                    {h.value}
                  </div>
                  <div className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--text-3)' }}>
                    {h.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Text */}
          <div className="reveal-right">
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
            <p className="text-[0.95rem] leading-relaxed mb-8" style={{ color: 'var(--text-2)' }}>
              Outside of work, I design automated trading systems using my own Trading API infrastructure and manage a production-grade{' '}
              <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>self-hosted homelab</span>
              {' '}utilizing Cloudflare Zero Trust and Docker.
            </p>

            {/* Passions */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-4"
                style={{ color: 'var(--text-3)' }}>
                Core Competencies
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PASSIONS.map(p => (
                  <div
                    key={p.text}
                    className="flex items-center gap-3 p-3 rounded-lg text-sm"
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
        </div>
      </div>
    </section>
  );
}
