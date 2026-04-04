'use client';

import { useEffect, useRef } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { education, certifications } from '@/lib/data';

export default function Education() {
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
    <section id="education" ref={sectionRef} className="relative py-28 overflow-hidden"
      style={{ background: 'var(--bg-0)' }}>

      <div className="orb w-80 h-80 top-1/2 -translate-y-1/2 right-0"
        style={{ background: 'rgba(99,102,241,0.05)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="reveal mb-16">
          <div className="section-label">Background</div>
          <h2 className="section-heading">Education &amp; Certifications</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education card */}
          <div className="reveal-left card-glow card-rotating-border p-8 relative overflow-hidden">
            {/* Background accent */}
            <div
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, var(--cyan), transparent)' }}
            />

            <div className="relative z-10">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: 'rgba(0,212,170,0.1)',
                  border: '1px solid rgba(0,212,170,0.2)',
                }}
              >
                <GraduationCap size={24} style={{ color: 'var(--cyan)' }} />
              </div>

              <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-1)' }}>
                {education.degree}
              </h3>
              <p className="font-semibold mb-0.5" style={{ color: 'var(--cyan)' }}>
                {education.institution}
              </p>
              <p className="text-sm mb-4" style={{ color: 'var(--text-2)' }}>
                {education.university} · {education.duration}
              </p>

              {/* CGPA badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,212,170,0.12), rgba(99,102,241,0.12))',
                  border: '1px solid rgba(0,212,170,0.25)',
                }}
              >
                <Award size={16} style={{ color: 'var(--cyan)' }} />
                <span className="font-mono font-bold text-lg" style={{ color: 'var(--cyan)' }}>
                  {education.cgpa}
                </span>
                <span className="text-sm font-semibold" style={{ color: 'var(--text-1)' }}>
                  CGPA · Distinction
                </span>
              </div>

              {/* Coursework */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={14} style={{ color: 'var(--text-3)' }} />
                  <span className="text-xs font-mono uppercase tracking-wider"
                    style={{ color: 'var(--text-3)' }}>
                    Coursework
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map(c => (
                    <span key={c} className="tech-tag">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="reveal-right flex flex-col gap-4">
            <p className="text-sm font-mono font-bold uppercase tracking-wider mb-2"
              style={{ color: 'var(--text-3)' }}>
              Achievements &amp; Certifications
            </p>

            {certifications.map((cert, i) => (
              <div
                key={i}
                className="card-glow p-5 flex gap-4 items-start"
                style={{
                  transitionDelay: `${i * 0.1}s`,
                  border: '1px solid var(--border)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.4)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'var(--glow-purple)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '';
                }}
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{cert.icon}</span>
                <div>
                  <h4 className="font-semibold text-sm mb-0.5" style={{ color: 'var(--text-1)' }}>
                    {cert.title}
                  </h4>
                  <p className="text-xs font-mono mb-1" style={{ color: 'var(--purple)' }}>
                    {cert.issuer}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-2)' }}>
                    {cert.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
