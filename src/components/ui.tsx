'use client';

import { motion, useReducedMotion } from 'motion/react';
import { type ReactNode, type MouseEvent, type CSSProperties } from 'react';

export function Reveal({ children, delay = 0, y = 28, className = '' }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Spot({ children, className = '', style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  return <div onMouseMove={onMove} className={`spot ${className}`} style={style}>{children}</div>;
}

export function SectionHead({ label, title, sub }: { label: string; title: ReactNode; sub?: string }) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="section-label mb-4">/ {label}</p>
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">{title}</h2>
      {sub && <p className="mt-4 text-lg text-slate-400 leading-relaxed">{sub}</p>}
    </Reveal>
  );
}
