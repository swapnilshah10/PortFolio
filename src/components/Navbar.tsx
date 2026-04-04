'use client';

import { useEffect, useState, useCallback } from 'react';
import { Menu, X, Download } from 'lucide-react';

const NAV_LINKS = [
  { href: '#about',      label: 'About' },
  { href: '#skills',     label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects' },
  { href: '#education',  label: 'Education' },
  { href: '#contact',    label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActive]  = useState('');

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 30);

    const sections = NAV_LINKS.map(l => l.href.replace('#', ''));
    let current = '';
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) current = id;
    }
    setActive(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(3,3,8,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
        }}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
            aria-label="Home"
          >
            <span
              className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-black text-black font-mono transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgba(0,212,170,0.6)]"
              style={{ background: 'linear-gradient(135deg,#00d4aa,#6366f1)' }}
            >
              SS
            </span>
            <span className="font-bold text-sm text-white/80 group-hover:text-white transition-colors hidden sm:block">
              Swapnil Shah
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/Swapnil_Shah_Backend_Developer_v2.pdf"
              download
              className="btn-outline text-sm py-2 px-4"
              style={{ fontSize: '0.8rem', padding: '8px 16px' }}
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          background: 'rgba(3,3,8,0.97)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-2xl font-bold text-white/70 hover:text-white transition-colors"
              style={{
                transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `transform 0.3s ${i * 0.05}s, opacity 0.3s ${i * 0.05}s, color 0.2s`,
                opacity: mobileOpen ? 1 : 0,
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="/Swapnil_Shah_Backend_Developer_v2.pdf"
            download
            className="btn-primary mt-4"
            onClick={() => setMobileOpen(false)}
          >
            <Download size={16} /> Download Resume
          </a>
        </div>
      </div>
    </>
  );
}
