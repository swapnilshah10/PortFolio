'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Gamepad2, Users } from 'lucide-react';
import { games } from '@/lib/data';
import { Reveal, SectionHead, Spot } from './ui';
import { useGame } from './Providers';

function Cabinet({ g, i }: { g: (typeof games)[number]; i: number }) {
  const [playing, setPlaying] = useState(false);
  const { game } = useGame();
  return (
    <Reveal delay={i * 0.08}>
      <Spot className="h-full flex flex-col">
        <div className="relative aspect-[4/3] bg-black border-b border-white/10 overflow-hidden">
          <AnimatePresence mode="wait">
            {playing && g.embed ? (
              <motion.iframe key="f" src={g.embed} title={`Play ${g.title}`} loading="lazy" className="absolute inset-0 size-full bg-white"
                allow="fullscreen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
            ) : (
              <motion.div key="s" exit={{ opacity: 0 }} className="absolute inset-0 grid place-items-center text-center p-6 bg-[radial-gradient(ellipse_at_center,rgb(var(--aur1)/.18),transparent_70%)]">
                <div>
                  <Gamepad2 size={40} className="mx-auto mb-4 text-cyan-300 bob" />
                  <p className="pixel text-[10px] text-lime-400 mb-5 leading-relaxed">{game ? g.title.toUpperCase() : g.title}</p>
                  {g.embed ? (
                    <button onClick={() => setPlaying(true)} className="btn-primary"><span className="press-start">▶</span> {game ? 'Insert coin' : 'Play here'}</button>
                  ) : (
                    <a href={g.url} target="_blank" rel="noopener noreferrer" className="btn-primary">Play now <ArrowUpRight size={15} /></a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center justify-between mb-3">
            <span className="badge rarity-rare">{g.genre}</span>
            <span className="flex items-center gap-1.5 text-xs text-slate-300"><Users size={13} />{g.players}</span>
          </div>
          <h3 className="text-2xl mb-1">{g.title}</h3>
          <p className="text-cyan-300 text-sm mb-3">{g.tagline}</p>
          <p className="text-slate-400 text-[15px] leading-relaxed mb-5">{g.blurb}</p>
          <ul className="flex flex-wrap gap-1.5 mb-5">{g.stack.map(t => <li key={t} className="chip !text-[11px]">{t}</li>)}</ul>
          <a href={g.url} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-auto self-start !text-lime-400">
            Play full screen <ArrowUpRight size={14} />
          </a>
        </div>
      </Spot>
    </Reveal>
  );
}

export default function Arcade() {
  return (
    <section id="arcade" className="relative py-28 bg-surface-1/60 border-y border-white/[0.05]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead label="arcade" title={<>Games I built — <span className="gradient-text">play them here</span>.</>} sub="Three self-built games, all live. Play inside the page, or open each one full screen." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {games.map((g, i) => <Cabinet key={g.title} g={g} i={i} />)}
        </div>
      </div>
    </section>
  );
}
