'use client';

import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { projects } from '@/lib/data';

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current!;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `
      perspective(900px)
      rotateX(${(-y / rect.height) * 8}deg)
      rotateY(${(x / rect.width) * 8}deg)
      translateY(-6px)
    `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current!;
    card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0)';
    card.style.transition = 'transform 0.5s ease';
  };

  const handleMouseEnter = () => {
    if (cardRef.current) cardRef.current.style.transition = 'none';
  };

  return (
    <div
      ref={cardRef}
      className="reveal card-glow card-rotating-border flex flex-col h-full overflow-hidden"
      style={{
        transitionDelay: `${index * 0.12}s`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.5s ease, box-shadow 0.3s',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {/* Top accent bar */}
      <div
        className="h-1 w-full flex-shrink-0"
        style={{
          background: `linear-gradient(90deg, ${project.accent}, ${project.accent}80, transparent)`,
        }}
      />

      <div className="p-7 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{project.icon}</span>
            <div>
              <h3 className="text-lg font-bold" style={{ color: 'var(--text-1)' }}>
                {project.title}
              </h3>
              <span
                className="text-xs font-mono"
                style={{ color: project.accent, opacity: 0.85 }}
              >
                {project.category}
              </span>
            </div>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub"
            className="p-2 rounded-lg transition-all duration-200 flex-shrink-0"
            style={{ color: 'var(--text-3)', border: '1px solid var(--border)' }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = project.accent;
              el.style.borderColor = project.accent;
              el.style.background = project.accentDim;
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = 'var(--text-3)';
              el.style.borderColor = 'var(--border)';
              el.style.background = '';
            }}
          >
            <Github size={18} />
          </a>
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
                style={{ color: project.accent }}
              />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech.map(t => (
            <span
              key={t}
              className="px-2 py-0.5 rounded text-xs font-mono"
              style={{
                background: project.accentDim,
                border: `1px solid ${project.accent}30`,
                color: project.accent,
                opacity: 0.85,
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

      <div className="orb w-96 h-96 bottom-0 left-0"
        style={{ background: 'rgba(244,114,182,0.05)', animationDelay: '-6s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="reveal mb-16">
          <div className="section-label">What I&apos;ve Built</div>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed"
            style={{ color: 'var(--text-2)' }}>
            From automated trading systems to production homelab infrastructure — each project
            solves a real problem with thoughtful engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="reveal mt-10 text-center">
          <p className="text-sm mb-4" style={{ color: 'var(--text-2)' }}>
            More projects and contributions on GitHub
          </p>
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
