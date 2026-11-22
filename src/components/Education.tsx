'use client';

import { GraduationCap, Award } from 'lucide-react';
import { education, certifications } from '@/lib/data';
import { Reveal, SectionHead, Spot } from './ui';

export default function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead label="education" title={<>Foundations &amp; <span className="gradient-text">credentials</span>.</>} />
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-5">
          <Reveal>
            <Spot className="p-8 h-full">
              <GraduationCap className="text-emerald-400 mb-5" />
              <h3 className="text-2xl font-semibold tracking-tight">{education.degree}</h3>
              <p className="text-slate-300 mt-1">{education.institution}</p>
              <p className="text-sm text-slate-400">{education.university} · {education.duration}</p>
              <p className="mt-6 text-5xl font-semibold gradient-text tabular-nums">{education.cgpa}</p>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1">CGPA · First class with distinction</p>
              <ul className="mt-6 flex flex-wrap gap-2">{education.coursework.map(c => <li key={c} className="chip">{c}</li>)}</ul>
            </Spot>
          </Reveal>
          <div className="grid gap-4">
            {certifications.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <Spot className="p-5 flex gap-4">
                  <Award size={20} className="text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium leading-snug">{c.title}</h4>
                    <p className="text-xs text-emerald-400/80 font-mono mt-1">{c.issuer}</p>
                    <p className="text-sm text-slate-400 mt-2">{c.desc}</p>
                  </div>
                </Spot>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
