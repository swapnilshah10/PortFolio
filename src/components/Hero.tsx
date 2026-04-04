'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { heroStats, terminalLines, personalInfo } from '@/lib/data';

/* ── Particle System ──────────────────────────────────────────── */
interface Particle {
  x: number; y: number; vx: number; vy: number;
  size: number; opacity: number;
}

function createParticle(w: number, h: number): Particle {
  return {
    x: Math.random() * w, y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    size: Math.random() * 1.8 + 0.4,
    opacity: Math.random() * 0.5 + 0.15,
  };
}

function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const particles = useRef<Particle[]>([]);
  const raf = useRef<number>(0);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.current = Array.from({ length: 90 }, () =>
        createParticle(canvas.width, canvas.height)
      );
    };
    resize();

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const pts = particles.current;

      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,170,${p.opacity})`;
        ctx.fill();
      }

      // Connections
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(0,212,170,${0.25 * (1 - d / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
        // Mouse interaction
        const mx = pts[i].x - mouse.current.x;
        const my = pts[i].y - mouse.current.y;
        const md = Math.sqrt(mx * mx + my * my);
        if (md < 160) {
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(mouse.current.x, mouse.current.y);
          ctx.strokeStyle = `rgba(99,102,241,${0.4 * (1 - md / 160)})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      }

      raf.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

/* ── Terminal Animation ───────────────────────────────────────── */
interface TermLine { type: string; text: string; }

function Terminal() {
  const [lines, setLines] = useState<{ type: string; text: string }[]>([]);
  const [typing, setTyping] = useState('');
  const [phase, setPhase] = useState(0); // index into terminalLines
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (phase >= terminalLines.length) return;
    const current = terminalLines[phase];

    if (charIndex < current.text.length) {
      const delay = current.type === 'cmd' ? 55 : 18;
      const t = setTimeout(() => {
        setTyping(current.text.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      }, delay);
      return () => clearTimeout(t);
    } else {
      // Line complete — pause then move on
      const pause = current.type === 'cmd' ? 400 : 600;
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
    <div className="terminal w-full max-w-lg mx-auto animate-float"
      style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,212,170,0.08)' }}>
      <div className="terminal-bar">
        <div className="terminal-dot" style={{ background: '#ff5f57' }} />
        <div className="terminal-dot" style={{ background: '#febc2e' }} />
        <div className="terminal-dot" style={{ background: '#28c840' }} />
        <span className="ml-3 text-white/30 text-xs font-mono select-none">
          swapnil@homelab:~
        </span>
      </div>
      <div ref={bodyRef} className="terminal-body overflow-y-auto" style={{ maxHeight: '300px' }}>
        {lines.map((line, i) => (
          <div key={i}>
            {line.type === 'cmd' && (
              <div>
                <span className="terminal-prompt">❯ </span>
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
                <span className="terminal-prompt">❯ </span>
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
            <span className="terminal-prompt">❯ </span>
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
  'Spring Boot Engineer',
  'Microservices Architect',
  'DevOps Enthusiast',
  'System Design Thinker',
];

function TypewriterRole() {
  const [roleIdx, setRoleIdx]   = useState(0);
  const [text, setText]         = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = ROLES[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < role.length) {
      timeout = setTimeout(() => setText(role.slice(0, text.length + 1)), 90);
    } else if (!deleting && text.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(role.slice(0, text.length - 1)), 45);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <span className="font-mono text-xl sm:text-2xl font-medium" style={{ color: 'var(--cyan)' }}>
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
      <div className="text-2xl font-black font-mono" style={{ color: 'var(--cyan)' }}>
        {value}{stat.suffix}
      </div>
      <div className="text-xs mt-1" style={{ color: 'var(--text-2)' }}>{stat.label}</div>
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
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Ambient orbs */}
      <div className="orb w-[600px] h-[600px] -top-48 -left-48"
        style={{ background: 'rgba(0,212,170,0.06)', animationDelay: '0s' }} />
      <div className="orb w-[500px] h-[500px] top-1/2 -right-48"
        style={{ background: 'rgba(99,102,241,0.07)', animationDelay: '-4s' }} />
      <div className="orb w-[400px] h-[400px] bottom-0 left-1/3"
        style={{ background: 'rgba(244,114,182,0.04)', animationDelay: '-8s' }} />

      {/* Particles */}
      <ParticleCanvas />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Text content */}
          <div style={{ animation: 'fadeUp 0.8s ease-out both' }}>
            <div className="section-label mb-6" style={{ animationDelay: '0.1s' }}>
              Available for opportunities
            </div>

            <p className="text-base mb-3" style={{ color: 'var(--text-2)' }}>
              Hi, I&apos;m
            </p>

            <h1
              className="hero-name glitch mb-3"
              data-text="Swapnil Shah"
            >
              <span className="text-gradient">Swapnil</span>
              <br />
              <span style={{ color: 'var(--text-1)' }}>Shah</span>
            </h1>

            <div className="mb-6 h-8">
              <TypewriterRole />
            </div>

            <p className="text-base leading-relaxed mb-8 max-w-lg"
              style={{ color: 'var(--text-2)', animation: 'fadeUp 0.8s 0.3s ease-out both' }}>
              Building high-throughput microservices at{' '}
              <span style={{ color: 'var(--cyan)', fontWeight: 600 }}>JM Financial</span>
              {' '}— powering{' '}
              <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>500K+</span>
              {' '}daily users on the BlinkX trading platform.
              Passionate about system design, observability, and self-hosted infrastructure.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-10"
              style={{ animation: 'fadeUp 0.8s 0.4s ease-out both' }}>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                View My Work
                <ArrowDown size={16} />
              </button>
              <a
                href="/Swapnil_Shah_Backend_Developer_v2.pdf"
                download
                className="btn-outline"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5"
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
                  className="w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                  style={{
                    borderColor: 'var(--border)',
                    color: 'var(--text-2)',
                    background: 'var(--bg-card)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--cyan)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--cyan)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'var(--glow-cyan)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-2)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
              <span className="text-sm ml-1" style={{ color: 'var(--text-3)' }}>
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
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
        aria-label="Scroll down"
        style={{ animation: 'fadeIn 1s 1.2s ease-out both' }}
      >
        <span className="text-xs font-mono tracking-widest"
          style={{ color: 'var(--text-3)' }}>SCROLL</span>
        <div
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-1 group-hover:border-[var(--cyan)] transition-colors"
          style={{ borderColor: 'var(--border)' }}
        >
          <div
            className="w-1 h-2.5 rounded-full"
            style={{
              background: 'var(--cyan)',
              animation: 'float 2s ease-in-out infinite',
            }}
          />
        </div>
      </button>
    </section>
  );
}
