import { personalInfo, games } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-400">
        <div className="text-center sm:text-left">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Built with Next.js, Motion &amp; Lenis.</p>
          <nav aria-label="Play my games" className="mt-2 flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1">
            <span className="text-slate-300">Play:</span>
            {games.map(g => <a key={g.title} href={g.url} target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:text-lime-300 underline-offset-4 hover:underline">{g.title}</a>)}
            <a href="https://silentkillerop.me" target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:text-lime-300 underline-offset-4 hover:underline">All games</a>
          </nav>
        </div>
        <p className="font-mono text-xs">Press <kbd className="border border-white/10 rounded px-1.5 py-0.5">⌘K</kbd> to navigate</p>
      </div>
    </footer>
  );
}
