'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useScroll, useTransform, animate, useReducedMotion } from 'motion/react';
import { ArrowDownRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { heroStats, personalInfo, terminalLines } from '@/lib/data';
import { scrollToId, useGame } from './Providers';

const ROLES = ['high-throughput APIs', 'trading infrastructure', 'realtime systems', 'observable platforms'];

function Words({ text, delay = 0, className = '' }: { text: string; delay?: number; className?: string }) {
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      {text.split(' ').map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
          <motion.span className="inline-block" initial={{ y: '110%' }} animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: delay + i * 0.05, ease: [0.16, 1, 0.3, 1] }}>
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function Rotator() {
  const { game } = useGame();
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => { if (reduce) return; const t = setInterval(() => setI(v => (v + 1) % ROLES.length), 2600); return () => clearInterval(t); }, [reduce]);
  return (
    <span className={`relative inline-flex max-w-full ${game ? '' : 'sm:max-w-none'} ${game ? 'min-h-[2.15em] align-top' : 'min-h-[2.4em] sm:min-h-0 sm:h-[1.3em] sm:overflow-hidden align-top sm:align-bottom'}`}>
      <motion.span key={i} initial={{ y: '100%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`gradient-text ${game ? '' : 'sm:whitespace-nowrap'}`}>{ROLES[i]}</motion.span>
    </span>
  );
}

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const v = useMotionValue(0);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(v, to, { duration: 1.8, ease: [0.16, 1, 0.3, 1], onUpdate: x => setN(Math.round(x)) });
    return () => c.stop();
  }, [inView, to, v]);
  return <span ref={ref} className="tabular-nums">{n}{suffix}</span>;
}

function Terminal() {
  const [shown, setShown] = useState(0);
  const [typed, setTyped] = useState('');
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) { setShown(terminalLines.length); return; }
    if (shown >= terminalLines.length) return;
    const line = terminalLines[shown];
    if (line.type === 'out') { const t = setTimeout(() => { setShown(s => s + 1); setTyped(''); }, 450); return () => clearTimeout(t); }
    if (typed.length < line.text.length) { const t = setTimeout(() => setTyped(line.text.slice(0, typed.length + 1)), 55); return () => clearTimeout(t); }
    const t = setTimeout(() => { setShown(s => s + 1); setTyped(''); }, 350);
    return () => clearTimeout(t);
  }, [shown, typed, reduce]);

  return (
    <div className="spot !rounded-2xl font-mono text-[13px] leading-relaxed shadow-2xl shadow-lime-500/5">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.07]">
        <i className="size-2.5 rounded-full bg-red-400/80" /><i className="size-2.5 rounded-full bg-amber-300/80" /><i className="size-2.5 rounded-full bg-lime-400/80" />
        <span className="ml-3 text-xs text-slate-400">swapnil@prod ~ zsh</span>
      </div>
      <div className="p-5 min-h-[300px] space-y-2" aria-live="off">
        {terminalLines.slice(0, shown).map((l, i) => (
          <div key={i} className={l.type === 'cmd' ? 'text-slate-200' : 'text-lime-300/90 whitespace-pre-wrap pl-4'}>
            {l.type === 'cmd' && <span className="text-lime-400">❯ </span>}{l.text}
          </div>
        ))}
        {shown < terminalLines.length && terminalLines[shown].type === 'cmd' && (
          <div className="text-slate-200 caret"><span className="text-lime-400">❯ </span>{typed}</div>
        )}
        {shown >= terminalLines.length && <div className="caret text-lime-400">❯ </div>}
      </div>
    </div>
  );
}

export default function Hero() {
  const { game } = useGame();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      <div aria-hidden className="absolute inset-0 grid-bg" />
      <div aria-hidden className="aurora absolute inset-0">
        <i className="w-[46vw] h-[46vw] -top-[12vw] left-[8vw] bg-[radial-gradient(closest-side,rgb(var(--aur1) / .5),transparent)]" />
        <i className="w-[38vw] h-[38vw] top-[8vw] right-[2vw] bg-[radial-gradient(closest-side,rgb(var(--aur2) / .42),transparent)] [animation-delay:-6s]" />
        <i className="w-[30vw] h-[30vw] top-[30vw] left-[40vw] bg-[radial-gradient(closest-side,rgb(var(--aur3) / .38),transparent)] [animation-delay:-11s]" />
      </div>

      <motion.div style={{ y, opacity: fade }} className="relative mx-auto w-full max-w-6xl px-6 grid lg:grid-cols-[1.15fr_1fr] gap-14 items-center">
        <div className="min-w-0">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-slate-300 mb-8">
            <span className="relative flex size-2"><span className="absolute inline-flex size-full rounded-full bg-lime-400 opacity-75 animate-ping" /><span className="relative inline-flex size-2 rounded-full bg-lime-400" /></span>
            {game ? 'Player 1 ready · open to backend & fintech roles' : 'Open to backend & fintech roles'}
            <span className="text-slate-400 flex items-center gap-1"><MapPin size={11} />Mumbai</span>
          </motion.div>

          <h1 className={`${game ? 'text-[2.1rem] sm:text-5xl lg:text-[3.6rem]' : 'text-[2.4rem] sm:text-6xl lg:text-7xl'} font-semibold tracking-tight leading-[1.02]`}>
            <Words text="Swapnil Shah" />
            <br />
            <Words text="builds" delay={0.25} className="text-slate-400" />{' '}
            <Rotator />
          </h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-7 max-w-xl text-lg text-slate-400 leading-relaxed">
            Backend engineer at <span className="text-slate-200">JM Financial</span> — Spring Boot services for{' '}
            <span className="text-slate-200">500K+ daily users</span>. After hours: market-data feeds in Rust, a crash-resumable OMS, and games people actually play.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-3">
            <button className="btn-primary" onClick={() => scrollToId('projects')}>{game && <span className="press-start">▶</span>} {game ? 'Press start' : 'View projects'} <ArrowDownRight size={16} /></button>
            <button className="btn-ghost" onClick={() => scrollToId('arcade')}>{game ? 'Play games' : 'Play my games'}</button>
            <button className="btn-ghost" onClick={() => scrollToId('contact')}>Get in touch</button>
            <div className="flex items-center gap-1 ml-1">
              {[{ I: Github, h: personalInfo.github, l: 'GitHub' }, { I: Linkedin, h: personalInfo.linkedin, l: 'LinkedIn' }, { I: Mail, h: `mailto:${personalInfo.email}`, l: 'Email' }].map(({ I, h, l }) => (
                <a key={l} href={h} aria-label={l} target={h.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"><I size={18} /></a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 40, rotateX: 8 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ perspective: 1200 }} className="hidden md:block">
          <Terminal />
        </motion.div>

        <motion.dl initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
          className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-px min-w-0 rounded-2xl overflow-hidden border border-white/10 bg-white/10">
          {heroStats.map(s => (
            <div key={s.label} className="bg-surface-1 px-6 py-6">
              <dt className={game ? 'pixel text-[9px] text-pink-400 leading-relaxed uppercase' : 'text-xs text-slate-400 uppercase tracking-wider'}>{s.label}</dt>
              <dd className="mt-1 text-3xl md:text-4xl font-semibold gradient-text"><Counter to={s.value} suffix={s.suffix} /></dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
