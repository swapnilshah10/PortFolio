'use client';

import { useEffect, useRef } from 'react';
import { Github, ChevronRight } from 'lucide-react';
import { projects } from '@/lib/data';

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <div
      className="reveal card-clean flex flex-col h-full overflow-hidden"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="p-7 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{project.icon}</span>
            <div>
              <h3 className="text-lg font-semibold" style={{ color: 'var(--text-1)' }}>
                {project.title}
              </h3>
              <span
                className="text-xs font-medium"
                style={{ color: 'var(--text-3)' }}
              >
                {project.category}
              </span>
            </div>
          </div>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              className="p-2 rounded-lg transition-all duration-200 flex-shrink-0 hover:bg-white/5"
              style={{ color: 'var(--text-2)', border: '1px solid var(--border)' }}
            >
              <Github size={18} />
            </a>
          )}
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-2)' }}>
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2 mb-6 flex-1">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--text-2)' }}>
              <ChevronRight
                size={14}
                className="flex-shrink-0 mt-0.5"
                style={{ color: 'var(--text-3)' }}
              />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map(t => (
            <span
              key={t}
              className="px-2 py-1 rounded text-xs font-medium"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--border)',
                color: 'var(--text-2)',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '-50px' }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-left')
      .forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-28 overflow-hidden"
      style={{ background: 'var(--bg-1)' }}>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="reveal mb-16">
          <div className="section-label">Engineering</div>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed"
            style={{ color: 'var(--text-2)' }}>
            Showcasing scalable architectures, institutional-grade API integrations, and robust infrastructure systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="reveal mt-12 text-center">
          <a
            href="https://github.com/swapnilshah10"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <Github size={16} />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
