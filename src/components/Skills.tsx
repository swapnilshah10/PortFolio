'use client';

import { useEffect, useRef } from 'react';
import { skills } from '@/lib/data';

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    els?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-28 overflow-hidden"
      style={{ background: 'var(--bg-1)' }}>

      {/* Ambient orb */}
      <div className="orb w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'rgba(99,102,241,0.05)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <div className="section-label justify-center">Technical Arsenal</div>
          <h2 className="section-heading">Skills &amp; Technologies</h2>
          <p className="mt-4 max-w-xl mx-auto text-sm leading-relaxed"
            style={{ color: 'var(--text-2)' }}>
            A battle-tested stack spanning backend services, distributed systems,
            cloud infrastructure, and full-stack development.
          </p>
        </div>

        <div className="space-y-8">
          {skills.map((group, gi) => (
            <div
              key={group.category}
              className="reveal card-glow card-rotating-border p-6"
              style={{ transitionDelay: `${gi * 0.07}s` }}
            >
              <div className="flex flex-wrap items-start gap-4">
                {/* Category label */}
                <div
                  className="flex-shrink-0 w-36"
                >
                  <span
                    className="inline-block text-xs font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-md"
                    style={{
                      color: group.color,
                      background: `${group.glow.replace('0.3', '0.12')}`,
                      border: `1px solid ${group.color}30`,
                    }}
                  >
                    {group.category}
                  </span>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-2 flex-1">
                  {group.items.map((skill, si) => (
                    <span
                      key={skill}
                      className="skill-pill"
                      style={{
                        color: group.color,
                        borderColor: `${group.color}30`,
                        background: `${group.color}0d`,
                        animationDelay: `${si * 0.04}s`,
                        transitionDelay: `${si * 0.03}s`,
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = `${group.color}1a`;
                        el.style.boxShadow = `0 0 14px ${group.glow}`;
                        el.style.borderColor = group.color;
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = `${group.color}0d`;
                        el.style.boxShadow = '';
                        el.style.borderColor = `${group.color}30`;
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Concepts highlight band */}
        <div className="reveal mt-12 rounded-2xl p-8 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0,212,170,0.05), rgba(99,102,241,0.05))',
            border: '1px solid rgba(0,212,170,0.15)',
          }}>
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0,212,170,0.1), transparent 70%)',
            }}
          />
          <div className="relative z-10">
            <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-1)' }}>
              Architecture Philosophy
            </h3>
            <p className="text-sm mb-4" style={{ color: 'var(--text-2)' }}>
              Core concepts I design and build with daily
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                'Microservices Architecture', 'Rate Limiting (Sliding Window)',
                'Reverse Proxy', 'CGNAT Bypass', 'Zero Trust Security',
                'CI/CD Pipelines', 'System Design', 'OAuth2 / JWT',
                'Horizontal Scaling', 'Event-Driven Architecture',
              ].map(c => (
                <span key={c} className="tech-tag" style={{
                  background: 'rgba(0,212,170,0.08)',
                  borderColor: 'rgba(0,212,170,0.2)',
                  color: 'var(--cyan)',
                  fontSize: '0.72rem',
                  padding: '5px 12px',
                }}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
