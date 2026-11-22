'use client';

import { Plus } from 'lucide-react';
import { faqs } from '@/lib/data';
import { Reveal, SectionHead } from './ui';

export default function Faq() {
  return (
    <section id="faq" className="relative py-28 bg-surface-1/60 border-t border-white/[0.05]">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHead label="faq" title={<>Who is <span className="gradient-text">Swapnil Shah</span>?</>} />
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <details className="group py-5">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-medium text-lg">
                  <h3 className="text-lg font-medium">{f.q}</h3>
                  <Plus size={18} className="shrink-0 text-lime-400 transition-transform group-open:rotate-45" />
                </summary>
                <p className="mt-3 text-slate-400 leading-relaxed">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
