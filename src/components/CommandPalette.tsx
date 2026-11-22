'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Search, CornerDownLeft, Github, Linkedin, Mail, FileText, Hash, Rocket } from 'lucide-react';
import { personalInfo, projects } from '@/lib/data';
import { scrollToId } from './Providers';

type Item = { label: string; hint: string; icon: typeof Hash; run: () => void };

const go = (id: string) => () => scrollToId(id);
const open = (u: string) => () => window.open(u, '_blank', 'noopener');

export default function CommandPalette() {
  const [on, setOn] = useState(false);
  const [q, setQ] = useState('');
  const [i, setI] = useState(0);
  const input = useRef<HTMLInputElement>(null);

  const items = useMemo<Item[]>(() => [
    ...['about', 'skills', 'experience', 'projects', 'arcade', 'education', 'contact'].map(s => ({ label: `Go to ${s}`, hint: 'Section', icon: Hash, run: go(s) })),
    ...projects.map(p => ({ label: p.title, hint: 'Project', icon: Rocket, run: go('projects') })),
    { label: 'Download résumé', hint: 'PDF', icon: FileText, run: open('/Swapnil_Shah_Backend_Developer_v2.pdf') },
    { label: 'GitHub', hint: 'Link', icon: Github, run: open(personalInfo.github) },
    { label: 'LinkedIn', hint: 'Link', icon: Linkedin, run: open(personalInfo.linkedin) },
    { label: 'Send an email', hint: personalInfo.email, icon: Mail, run: () => { window.location.href = `mailto:${personalInfo.email}`; } },
  ], []);
  const list = items.filter(x => x.label.toLowerCase().includes(q.toLowerCase())).slice(0, 8);

  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setOn(v => !v); }
      if (e.key === 'Escape') setOn(false);
    };
    const o = () => setOn(true);
    window.addEventListener('keydown', k);
    window.addEventListener('open-palette', o);
    return () => { window.removeEventListener('keydown', k); window.removeEventListener('open-palette', o); };
  }, []);
  useEffect(() => { if (on) { setQ(''); setI(0); setTimeout(() => input.current?.focus(), 30); } }, [on]);
  useEffect(() => setI(0), [q]);

  const fire = (x?: Item) => { if (!x) return; setOn(false); setTimeout(x.run, 150); };

  return (
    <AnimatePresence>
      {on && (
        <motion.div className="fixed inset-0 z-[80] flex items-start justify-center pt-[15vh] px-4 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOn(false)}>
          <motion.div role="dialog" aria-label="Command palette" aria-modal="true"
            className="w-full max-w-xl rounded-2xl border border-white/10 bg-[#0d0719]/95 shadow-2xl shadow-lime-500/10 overflow-hidden"
            initial={{ y: -16, scale: 0.97, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} exit={{ y: -10, scale: 0.98, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 380, damping: 32 }} onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-3 px-4 border-b border-white/10">
              <Search size={16} className="text-slate-400" />
              <input ref={input} value={q} onChange={e => setQ(e.target.value)} placeholder="Jump to a section, project or link…"
                aria-label="Search commands"
                onKeyDown={e => {
                  if (e.key === 'ArrowDown') { e.preventDefault(); setI(v => Math.min(v + 1, list.length - 1)); }
                  if (e.key === 'ArrowUp') { e.preventDefault(); setI(v => Math.max(v - 1, 0)); }
                  if (e.key === 'Enter') fire(list[i]);
                }}
                className="flex-1 bg-transparent py-4 text-sm outline-none placeholder:text-slate-400" />
              <kbd className="text-[10px] text-slate-400 border border-white/10 rounded px-1.5 py-0.5">ESC</kbd>
            </div>
            <ul className="max-h-80 overflow-auto p-2">
              {list.length === 0 && <li className="px-3 py-6 text-center text-sm text-slate-400">Nothing matches “{q}”</li>}
              {list.map((x, n) => (
                <li key={x.label + n}>
                  <button onMouseEnter={() => setI(n)} onClick={() => fire(x)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-left cursor-pointer transition-colors ${n === i ? 'bg-white/[0.07] text-white' : 'text-slate-300'}`}>
                    <x.icon size={15} className={n === i ? 'text-lime-400' : 'text-slate-400'} />
                    <span className="flex-1 truncate">{x.label}</span>
                    <span className="text-xs text-slate-400">{x.hint}</span>
                    {n === i && <CornerDownLeft size={13} className="text-slate-400" />}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
