'use client';

import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from 'motion/react';
import CommandPalette from './CommandPalette';

type LenisWindow = Window & { __lenis?: Lenis };

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const l = (window as LenisWindow).__lenis;
  if (l) l.scrollTo(el, { offset: -80 });
  else el.scrollIntoView({ behavior: 'smooth' });
}

export default function Providers({ children }: { children: ReactNode }) {
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
    <>
      <motion.div aria-hidden style={{ scaleX }} className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[70] bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-400" />
      <CommandPalette />
      {children}
    </>
  );
}
