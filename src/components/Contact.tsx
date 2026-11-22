'use client';

import { Mail, Github, Linkedin, Phone, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { Reveal, Spot } from './ui';

const CHANNELS = [
  { I: Mail, l: 'Email', v: personalInfo.email, h: `mailto:${personalInfo.email}` },
  { I: Linkedin, l: 'LinkedIn', v: 'Swapnil-Shah9671', h: personalInfo.linkedin },
  { I: Github, l: 'GitHub', v: 'swapnilshah10', h: personalInfo.github },
  { I: Phone, l: 'Phone', v: personalInfo.phone, h: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-[60%] bg-[radial-gradient(ellipse_60%_70%_at_50%_100%,rgba(34,197,94,0.18),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="section-label mb-5">/ contact</p>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02]">
            Let’s build something <span className="gradient-text">fast and reliable</span>.
          </h2>
          <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto">Looking for backend and fintech roles where throughput, correctness and observability matter. I reply within a day.</p>
          <div className="mt-9 flex justify-center gap-3 flex-wrap">
            <a className="btn-primary" href={`mailto:${personalInfo.email}?subject=Opportunity%20for%20Swapnil%20Shah`}>Say hello <ArrowUpRight size={16} /></a>
            <a className="btn-ghost" href="/Swapnil_Shah_Backend_Developer_v2.pdf" download>Download résumé</a>
          </div>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-2 gap-4 text-left">
          {CHANNELS.map(({ I, l, v, h }, i) => (
            <Reveal key={l} delay={i * 0.06}>
              <a href={h} target={h.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block cursor-pointer">
                <Spot className="p-5 flex items-center gap-4">
                  <span className="grid place-items-center size-11 rounded-xl bg-white/5 border border-white/10"><I size={18} className="text-lime-400" /></span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-slate-400">{l}</span>
                    <span className="block truncate text-[15px]">{v}</span>
                  </span>
                  <ArrowUpRight size={16} className="text-slate-400" />
                </Spot>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
