'use client';

import { skills } from '@/lib/data';
import { Reveal, SectionHead, Spot } from './ui';

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
  const half = Math.ceil(ALL.length / 2);
  return (
    <section id="skills" className="relative py-28 bg-[#04070f]/60 border-y border-white/[0.05]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead label="skills" title={<>The <span className="gradient-text">toolbox</span>, grouped by what it does.</>} sub="Production experience in Java and Python; Go and Rust through side projects that run every trading day." />
      </div>
      <div className="space-y-3 mb-14" aria-label={`Technologies: ${ALL.join(', ')}`}>
        <Row items={ALL.slice(0, half)} />
        <Row items={ALL.slice(half)} reverse />
      </div>
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((g, i) => (
          <Reveal key={g.category} delay={(i % 3) * 0.07}>
            <Spot className="p-6 h-full">
              <h3 className="text-sm font-medium text-emerald-400 mb-4 font-mono tracking-wide">{g.category}</h3>
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
