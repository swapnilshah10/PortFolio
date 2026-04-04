'use client';

import { useEffect, useRef } from 'react';
import { MapPin, Calendar, Briefcase } from 'lucide-react';
import { experience } from '@/lib/data';

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '-50px' }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-left')
      .forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const job = experience[0];

  return (
    <section id="experience" ref={sectionRef} className="relative py-28 overflow-hidden"
      style={{ background: 'var(--bg-0)' }}>

      <div className="orb w-80 h-80 top-20 right-0"
        style={{ background: 'rgba(0,212,170,0.05)', animationDelay: '-3s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="reveal mb-16">
          <div className="section-label">Work History</div>
          <h2 className="section-heading">Professional Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-12">
          {/* Vertical line */}
          <div className="timeline-line" />
          {/* Dot */}
          <div className="timeline-dot">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                animation: 'ringPulse 2s ease-out infinite',
                background: 'rgba(0,212,170,0.4)',
              }}
            />
          </div>

          {/* Card */}
          <div className="reveal-left card-glow card-rotating-border p-8">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="px-2 py-0.5 rounded text-xs font-mono font-bold"
                    style={{
                      background: 'rgba(0,212,170,0.1)',
                      color: 'var(--cyan)',
                      border: '1px solid rgba(0,212,170,0.2)',
                    }}
                  >
                    {job.type}
                  </span>
                  <span
                    className="w-2 h-2 rounded-full inline-block"
                    style={{
                      background: '#22c55e',
                      boxShadow: '0 0 8px #22c55e',
                      animation: 'pulseGlow 2s ease-in-out infinite',
                    }}
                  />
                  <span className="text-xs font-medium" style={{ color: '#22c55e' }}>
                    Currently Active
                  </span>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--text-1)' }}>
                  {job.title}
                </h3>
                <div className="mt-1">
                  <span className="text-lg font-semibold" style={{ color: 'var(--cyan)' }}>
                    {job.company}
                  </span>
                  <span style={{ color: 'var(--text-3)' }}> · </span>
                  <span style={{ color: 'var(--text-2)' }}>{job.product}</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 text-sm" style={{ color: 'var(--text-2)' }}>
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} style={{ color: 'var(--cyan)' }} />
                  <span className="font-mono">{job.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} style={{ color: 'var(--cyan)' }} />
                  {job.location}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-6">
              {job.achievements.map((ach, i) => (
                <div key={i} className="achievement-item"
                  style={{ transitionDelay: `${i * 0.05}s` }}>
                  <span className="achievement-metric">{ach.metric}</span>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                    {ach.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div>
              <p className="text-xs font-mono font-semibold mb-3 tracking-wider uppercase"
                style={{ color: 'var(--text-3)' }}>
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {job.tech.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Open to work banner */}
        <div className="reveal mt-10 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4"
          style={{
            background: 'linear-gradient(135deg, rgba(0,212,170,0.06), rgba(99,102,241,0.06))',
            border: '1px solid rgba(0,212,170,0.15)',
          }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(0,212,170,0.12)', border: '1px solid rgba(0,212,170,0.2)' }}>
              <Briefcase size={20} style={{ color: 'var(--cyan)' }} />
            </div>
            <div>
              <p className="font-semibold" style={{ color: 'var(--text-1)' }}>
                Open to New Opportunities
              </p>
              <p className="text-sm" style={{ color: 'var(--text-2)' }}>
                Interested in backend-heavy, high-scale roles. Remote-friendly.
              </p>
            </div>
          </div>
          <a
            href="mailto:shah.swapnil@proton.me"
            className="btn-primary"
            style={{ fontSize: '0.85rem', padding: '10px 20px' }}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
