'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { MapPin, Briefcase } from 'lucide-react';
import { experience } from '@/lib/data';
import { Reveal, SectionHead, Spot } from './ui';

export default function Experience() {
  const job = experience[0];
  const list = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: list, offset: ['start 70%', 'end 60%'] });
  const h = useSpring(scrollYProgress, { stiffness: 90, damping: 28 });

  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead label="experience" title={<>Impact, <span className="gradient-text">measured</span>.</>} />
        <div className="grid lg:grid-cols-[340px_1fr] gap-10">
          <aside className="lg:sticky lg:top-28 self-start">
            <Reveal>
              <Spot className="p-7">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-4"><Briefcase size={14} />{job.type}</div>
                <h3 className="text-2xl font-semibold tracking-tight">{job.title}</h3>
                <p className="text-slate-200 mt-1">{job.company}</p>
                <p className="text-sm text-slate-400 mt-1">{job.product}</p>
                <div className="mt-5 pt-5 border-t border-white/[0.07] space-y-2 text-sm text-slate-400">
                  <p>{job.duration}</p>
                  <p className="flex items-center gap-1.5"><MapPin size={13} />{job.location}</p>
                </div>
                <ul className="mt-5 flex flex-wrap gap-1.5">{job.tech.map(t => <li key={t} className="chip !text-[11px]">{t}</li>)}</ul>
              </Spot>
            </Reveal>
          </aside>

          <div className="relative pl-8">
            <div aria-hidden className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />
            <motion.div aria-hidden style={{ scaleY: h }} className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-emerald-400 to-sky-400" />
            <ol ref={list} className="space-y-5">
              {job.achievements.map((a, i) => (
                <li key={a.metric} className="relative">
                  <span aria-hidden className="absolute -left-8 top-6 size-[15px] rounded-full bg-[#02040a] border-2 border-emerald-400/70" />
                  <Reveal delay={0.04}>
                    <Spot className="p-6">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="font-mono text-xs text-slate-400">{String(i + 1).padStart(2, '0')}</span>
                        <h4 className="font-semibold gradient-text text-lg">{a.metric}</h4>
                      </div>
                      <p className="text-slate-400 leading-relaxed text-[15px]">{a.text}</p>
                    </Spot>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
