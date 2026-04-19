'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { heroStats, terminalLines, personalInfo } from '@/lib/data';
import DoodleBackground from './DoodleBackground';

/* ── Terminal Animation ───────────────────────────────────────── */
function Terminal() {
  const [lines, setLines] = useState<{ type: string; text: string }[]>([]);
  const [typing, setTyping] = useState('');
  const [phase, setPhase] = useState(0); 
  const [charIndex, setCharIndex] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (phase >= terminalLines.length) return;
    const current = terminalLines[phase];

    if (charIndex < current.text.length) {
      const delay = current.type === 'cmd' ? 45 : 10;
      const t = setTimeout(() => {
        setTyping(current.text.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      }, delay);
      return () => clearTimeout(t);
    } else {
      const pause = current.type === 'cmd' ? 300 : 500;
      const t = setTimeout(() => {
        setLines(l => [...l, { type: current.type, text: current.text }]);
        setTyping('');
        setCharIndex(0);
        setPhase(p => p + 1);
      }, pause);
      return () => clearTimeout(t);
    }
  }, [phase, charIndex]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines, typing]);

  return (
    <div className="terminal w-full max-w-lg mx-auto animate-float">
      <div className="terminal-bar">
        <div className="terminal-dot" style={{ background: '#333' }} />
        <div className="terminal-dot" style={{ background: '#333' }} />
        <div className="terminal-dot" style={{ background: '#333' }} />
        <span className="ml-3 text-white/40 text-xs font-mono select-none">
          swapnil@jm-financial:~
        </span>
      </div>
      <div ref={bodyRef} className="terminal-body overflow-y-auto" style={{ maxHeight: '300px' }}>
        {lines.map((line, i) => (
          <div key={i}>
            {line.type === 'cmd' && (
              <div>
                <span className="terminal-prompt">$ </span>
                <span className="terminal-cmd">{line.text}</span>
              </div>
            )}
            {line.type === 'out' && (
              <div className="terminal-out pl-4 mb-1">{line.text}</div>
            )}
          </div>
        ))}
        {typing && (
          <div>
            {terminalLines[phase]?.type === 'cmd' && (
              <div>
                <span className="terminal-prompt">$ </span>
                <span className="terminal-cmd">{typing}</span>
                <span className="cursor-blink" />
              </div>
            )}
            {terminalLines[phase]?.type === 'out' && (
              <div className="terminal-out pl-4">{typing}<span className="cursor-blink" /></div>
            )}
          </div>
        )}
        {phase >= terminalLines.length && (
          <div>
            <span className="terminal-prompt">$ </span>
            <span className="cursor-blink" />
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Counter Hook ─────────────────────────────────────────────── */
function useCountUp(target: number, started: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, started, duration]);
  return value;
}

/* ── Typewriter Role ─────────────────────────────────────────── */
const ROLES = [
  'Backend Developer',
  'Systems Architect',
  'Trading API Engineer',
  'Microservices Expert',
];

function TypewriterRole() {
  const [roleIdx, setRoleIdx]   = useState(0);
  const [text, setText]         = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = ROLES[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < role.length) {
      timeout = setTimeout(() => setText(role.slice(0, text.length + 1)), 60);
    } else if (!deleting && text.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(role.slice(0, text.length - 1)), 30);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <span className="font-mono text-xl sm:text-2xl font-medium" style={{ color: 'var(--text-1)' }}>
      {text}
      <span className="cursor-blink" />
    </span>
  );
}

/* ── Stat Card ───────────────────────────────────────────────── */
function StatCard({ stat, started }: { stat: typeof heroStats[0]; started: boolean }) {
  const value = useCountUp(stat.value, started);
  return (
    <div className="stat-card">
      <div className="text-2xl font-bold font-sans" style={{ color: 'var(--text-1)' }}>
        {value}{stat.suffix}
      </div>
      <div className="text-xs mt-1 font-medium text-[var(--text-2)] uppercase tracking-wider">{stat.label}</div>
    </div>
  );
}

/* ── Hero ────────────────────────────────────────────────────── */
export default function Hero() {
  const [statsStarted, setStatsStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'var(--bg-0)' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* CSS Doodle Background */}
      <DoodleBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Text content */}
          <div style={{ animation: 'fadeUp 0.8s ease-out both' }}>
            <div className="section-label mb-6" style={{ animationDelay: '0.1s' }}>
              System Engineering & Architecture
            </div>

            <h1 className="hero-name mb-4">
              <span className="text-gradient">Swapnil Shah</span>
            </h1>

            <div className="mb-6 h-8">
              <TypewriterRole />
            </div>

            <p className="text-[0.95rem] leading-relaxed mb-8 max-w-lg"
              style={{ color: 'var(--text-2)', animation: 'fadeUp 0.8s 0.3s ease-out both' }}>
              Architecting high-throughput microservices and institutional-grade Trading APIs at{' '}
              <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>JM Financial</span>
              {' '}— powering execution and routing for{' '}
              <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>500K+</span>
              {' '}daily active users on the BlinkX platform.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-10"
              style={{ animation: 'fadeUp 0.8s 0.4s ease-out both' }}>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                View Engineering Work
              </button>
              <a
                href="/Swapnil_Shah_Backend_Developer_v2.pdf"
                download
                className="btn-outline"
              >
                <Download size={16} />
                Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4"
              style={{ animation: 'fadeUp 0.8s 0.5s ease-out both' }}>
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
                  className="w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                  style={{
                    borderColor: 'var(--border)',
                    color: 'var(--text-2)',
                    background: 'var(--bg-1)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-1)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-2)';
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
              <span className="text-sm ml-2 font-medium" style={{ color: 'var(--text-3)' }}>
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* RIGHT: Terminal */}
          <div
            className="w-full"
            style={{ animation: 'fadeRight 0.9s 0.3s ease-out both' }}
          >
            <Terminal />
          </div>
        </div>

        {/* Stats row */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          style={{ animation: 'fadeUp 0.8s 0.6s ease-out both' }}
        >
          {heroStats.map(stat => (
            <StatCard key={stat.label} stat={stat} started={statsStarted} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 group"
        aria-label="Scroll down"
        style={{ animation: 'fadeIn 1s 1.2s ease-out both' }}
      >
        <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase"
          style={{ color: 'var(--text-3)' }}>EXPLORE</span>
        <div
          className="w-5 h-8 rounded-full border flex items-start justify-center p-1 transition-colors"
          style={{ borderColor: 'var(--border)' }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{
              background: 'var(--text-2)',
              animation: 'float 2s ease-in-out infinite',
            }}
          />
        </div>
      </button>
    </section>
  );
}
