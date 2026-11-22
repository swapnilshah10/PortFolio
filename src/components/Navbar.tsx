'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Command, Download } from 'lucide-react';
import { scrollToId } from './Providers';

const LINKS = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];

export default function Navbar() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    LINKS.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
    >
      <nav aria-label="Primary" className="flex items-center gap-1 rounded-full border border-white/10 bg-[#070b14]/70 backdrop-blur-xl px-2 py-1.5 shadow-lg shadow-black/40">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="SS. back to top"
          className="px-3 py-1.5 text-sm font-semibold tracking-tight cursor-pointer">
          <span className="gradient-text">SS</span><span className="text-emerald-400">.</span>
        </button>
        <ul className="hidden md:flex items-center">
          {LINKS.map(id => (
            <li key={id}>
              <button onClick={() => scrollToId(id)} aria-current={active === id ? 'true' : undefined}
                className={`relative px-3.5 py-1.5 text-[13px] capitalize rounded-full cursor-pointer transition-colors ${active === id ? 'text-white' : 'text-slate-400 hover:text-slate-200'}`}>
                {active === id && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-white/10" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
                <span className="relative">{id}</span>
              </button>
            </li>
          ))}
        </ul>
        <button onClick={() => window.dispatchEvent(new Event('open-palette'))} aria-label="K command palette"
          className="ml-1 flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-400 hover:text-white hover:border-white/25 transition-colors cursor-pointer">
          <Command size={12} /> <span className="hidden sm:inline">K</span>
        </button>
        <a href="/Swapnil_Shah_Backend_Developer_v2.pdf" download
          className="ml-1 flex items-center gap-1.5 rounded-full bg-emerald-400 text-[#02040a] px-3.5 py-1.5 text-[13px] font-semibold hover:bg-emerald-300 transition-colors cursor-pointer">
          <Download size={13} /> Résumé
        </a>
      </nav>
    </motion.header>
  );
}
