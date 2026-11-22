'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'motion/react';
import { ArrowUpRight, Github, X } from 'lucide-react';
import { projects } from '@/lib/data';
import { Reveal, SectionHead, Spot } from './ui';

type P = (typeof projects)[number];

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'fintech', label: 'Fintech' },
  { id: 'infra', label: 'Systems & Infra' },
  { id: 'research', label: 'Research' },
  { id: 'web', label: 'Web & Games' },
];

function Card({ p, n, onOpen }: { p: P; n: number; onOpen: () => void }) {
  return (
    <motion.div layout layoutId={`card-${p.title}`} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}  >
      <Spot className="h-full">
        <button onClick={onOpen} className="w-full h-full text-left p-6 md:p-7 flex flex-col cursor-pointer">
          <div className="flex items-start justify-between gap-4 mb-5">
            <div className="flex items-center gap-3"><span className="text-3xl bob" aria-hidden>{p.icon}</span><span className="pixel text-[9px] text-pink-400">STAGE {String(n).padStart(2, '0')}</span></div>
            <ArrowUpRight size={18} className="text-slate-400 group-hover:text-white" />
          </div>
          <span className={`badge mb-3 inline-block ${p.featured ? 'rarity-legendary' : p.group === 'research' ? 'rarity-epic' : 'rarity-rare'}`}>{p.featured ? 'Legendary' : p.group === 'research' ? 'Epic' : 'Rare'}</span>
          <p className="font-mono text-[11px] uppercase tracking-wider text-lime-400/90 mb-2">{p.category}</p>
          <h3 className="text-xl font-semibold tracking-tight mb-2">{p.title}</h3>
          <p className="text-slate-400 text-[15px] leading-relaxed mb-5">{p.description}</p>
          <ul className="mt-auto flex flex-wrap gap-1.5">
            {p.tech.slice(0, 5).map(t => <li key={t} className="chip !text-[11px]">{t}</li>)}
            {p.tech.length > 5 && <li className="chip !text-[11px]">+{p.tech.length - 5}</li>}
          </ul>
        </button>
      </Spot>
    </motion.div>
  );
}

function Modal({ p, onClose }: { p: P; onClose: () => void }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', k);
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', k); document.documentElement.style.overflow = prev; };
  }, [onClose]);

  return (
    <motion.div className="fixed inset-0 z-[75] grid place-items-center p-4 bg-black/70 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div role="dialog" aria-modal="true" aria-label={p.title} layoutId={`card-${p.title}`} onClick={e => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[88vh] overflow-auto border border-white/10 bg-[#0d0719] p-7 md:p-9 shadow-2xl">
        <button onClick={onClose} aria-label="Close" className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 cursor-pointer"><X size={18} /></button>
        <span className="text-4xl" aria-hidden>{p.icon}</span>
        <p className="font-mono text-[11px] uppercase tracking-wider text-lime-400 mt-4 mb-2">{p.category}</p>
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">{p.title}</h3>
        <p className="text-slate-400 leading-relaxed mb-6">{p.description}</p>
        <ul className="space-y-3 mb-6">
          {p.highlights.map(h => (
            <li key={h} className="flex gap-3 text-[15px] text-slate-300 leading-relaxed">
              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-lime-400" />{h}
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-1.5 mb-7">{p.tech.map(t => <li key={t} className="chip">{t}</li>)}</ul>
        <div className="flex flex-wrap gap-3">
          {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-primary">Live site <ArrowUpRight size={15} /></a>}
          {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Github size={15} /> Source</a>}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [f, setF] = useState('all');
  const [open, setOpen] = useState<P | null>(null);
  const list = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured)).filter(p => f === 'all' || p.group === f);

  return (
    <section id="projects" className="relative py-28 bg-[#0a0614]/60 border-y border-white/[0.05]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead label="level select" title={<>Pick a <span className="gradient-text">stage</span>.</>} sub="Day-job systems and the side projects that keep me honest. Tap a stage for the engineering detail." />
        <Reveal>
          <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2 mb-8">
            {FILTERS.map(x => (
              <button key={x.id} role="tab" aria-selected={f === x.id} onClick={() => setF(x.id)}
                className={`relative px-4 py-2 rounded-full text-sm cursor-pointer border transition-colors ${f === x.id ? 'text-[#07040f] border-transparent' : 'text-slate-400 border-white/10 hover:text-white hover:border-white/25'}`}>
                {f === x.id && <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-lime-400" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
                <span className="relative font-medium">{x.label}</span>
              </button>
            ))}
          </div>
        </Reveal>
        <LayoutGroup>
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {list.map((p, i) => <Card key={p.title} p={p} n={i + 1} onOpen={() => setOpen(p)} />)}
            </AnimatePresence>
          </motion.div>
          <AnimatePresence>{open && <Modal p={open} onClose={() => setOpen(null)} />}</AnimatePresence>
        </LayoutGroup>
      </div>
    </section>
  );
}
