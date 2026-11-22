'use client';

import { motion } from 'motion/react';
import { skills, skillLevels } from '@/lib/data';
import { Reveal, SectionHead, Spot } from './ui';
import { useGame } from './Providers';

const ALL = skills.flatMap(s => s.items);

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div className="marquee" style={reverse ? { animationDirection: 'reverse', animationDuration: '55s' } : undefined}>
        {doubled.map((t, i) => <span key={i} className="chip !text-sm !px-4 !py-2 whitespace-nowrap" aria-hidden={i >= items.length}>{t}</span>)}
      </div>
    </div>
  );
}

export default function Skills() {
  const { game } = useGame();
  const half = Math.ceil(ALL.length / 2);
  return (
    <section id="skills" className="relative py-28 bg-surface-1/60 border-y border-white/[0.05]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead label={game ? 'skill tree' : 'skills'} title={game ? <>Attributes &amp; <span className="gradient-text">inventory</span>.</> : <>The <span className="gradient-text">toolbox</span>, grouped by what it does.</>} sub="Production experience in Java and Python; Go and Rust through side projects that run every trading day." />
      </div>
      <div className="space-y-3 mb-14" aria-label={`Technologies: ${ALL.join(', ')}`}>
        <Row items={ALL.slice(0, half)} />
        <Row items={ALL.slice(half)} reverse />
      </div>
      {game && <div className="mx-auto max-w-6xl px-6 mb-14">
        <Spot className="p-6 md:p-8">
          <h3 className="pixel text-[10px] text-pink-400 mb-6">CORE ATTRIBUTES</h3>
          <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4">
            {skillLevels.map(k => (
              <li key={k.name} className="grid grid-cols-[130px_1fr_34px] items-center gap-3 text-sm">
                <span className="text-slate-200">{k.name}</span>
                <span className="xp-track"><motion.span className="xp-fill block" initial={{ width: 0 }} whileInView={{ width: `${k.lv}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeOut' }} /></span>
                <span className="pixel text-[9px] text-lime-400">{k.lv}</span>
              </li>
            ))}
          </ul>
        </Spot>
      </div>}
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((g, i) => (
          <Reveal key={g.category} delay={(i % 3) * 0.07}>
            <Spot className="p-6 h-full">
              <h3 className={game ? 'pixel text-[10px] text-cyan-300 mb-4' : 'text-sm font-medium text-lime-400 mb-4 font-mono tracking-wide'}>{game ? g.category.toUpperCase() : g.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map(it => <li key={it} className="chip">{it}</li>)}
              </ul>
            </Spot>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
