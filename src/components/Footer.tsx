import { personalInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-400">
        <p>© {new Date().getFullYear()} {personalInfo.name}. Built with Next.js, Motion &amp; Lenis.</p>
        <p className="font-mono text-xs">Press <kbd className="border border-white/10 rounded px-1.5 py-0.5">⌘K</kbd> to navigate · try the Konami code</p>
      </div>
    </footer>
  );
}
