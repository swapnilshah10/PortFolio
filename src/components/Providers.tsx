'use client';

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from 'motion/react';
import CommandPalette from './CommandPalette';

type LenisWindow = Window & { __lenis?: Lenis };

const ThemeCtx = createContext<{ game: boolean; toggle: () => void }>({ game: false, toggle: () => {} });
export const useGame = () => useContext(ThemeCtx);

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const l = (window as LenisWindow).__lenis;
  if (l) l.scrollTo(el, { offset: -80 });
  else el.scrollIntoView({ behavior: 'smooth' });
}

export default function Providers({ children }: { children: ReactNode }) {
  const [game, setGame] = useState(false);
  useEffect(() => { setGame(document.documentElement.dataset.theme === 'game'); }, []);
  const toggle = useCallback(() => {
    setGame(g => {
      const n = !g;
      document.documentElement.dataset.theme = n ? 'game' : 'default';
      try { localStorage.setItem('theme', n ? 'game' : 'default'); } catch {}
      return n;
    });
  }, []);
  useEffect(() => {
    const o = () => toggle();
    window.addEventListener('toggle-theme', o);
    return () => window.removeEventListener('toggle-theme', o);
  }, [toggle]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ duration: 1.15, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    (window as LenisWindow).__lenis = lenis;
    let raf = 0;
    const loop = (t: number) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); delete (window as LenisWindow).__lenis; };
  }, []);

  return (
    <ThemeCtx.Provider value={{ game, toggle }}>
      <motion.div aria-hidden style={{ scaleX }} className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[70] bg-gradient-to-r from-lime-400 via-sky-400 to-violet-400" />
      <CommandPalette />
      {children}
    </ThemeCtx.Provider>
  );
}
