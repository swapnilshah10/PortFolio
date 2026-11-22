'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export default function Konami() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    let i = 0;
    const k = (e: KeyboardEvent) => {
      i = e.key === CODE[i] || e.key.toLowerCase() === CODE[i] ? i + 1 : 0;
      if (i === CODE.length) { i = 0; setOn(true); setTimeout(() => setOn(false), 4500); }
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, []);
  return (
    <AnimatePresence>
      {on && (
        <motion.div role="status" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[85] border-2 border-lime-400 bg-surface-2 px-6 py-4 text-center shadow-[0_0_40px_rgba(163,230,53,.4)]">
          <p className="pixel text-[10px] text-lime-400 leading-relaxed">CHEAT CODE ACTIVATED<br /><span className="text-pink-400">+30 LIVES · HIRE ME MODE ON</span></p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
