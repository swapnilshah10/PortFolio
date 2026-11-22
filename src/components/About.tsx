'use client';

import { Zap, Network, Activity, Server, LineChart, ShieldCheck } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { Reveal, SectionHead, Spot } from './ui';

const TILES = [
  { I: Zap, t: 'High-throughput APIs', d: '800 ms → 60 ms on the app-init path, 2 s → 300 ms on reports.' },
  { I: Network, t: 'Microservices', d: '15+ Spring Boot services with Redis, Kafka and clean boundaries.' },
  { I: Activity, t: 'Observability', d: 'Grafana, Prometheus and Loki wired in before the incident, not after.' },
  { I: Server, t: 'Self-hosted infra', d: 'Everything behind CGNAT: Cloudflare Tunnel, Tailscale, systemd.' },
  { I: LineChart, t: 'Trading systems', d: 'Market-data feeds, an OMS and a backtester I run with real money rules.' },
  { I: ShieldCheck, t: 'Security mindset', d: 'OAuth2, rate limiting at the edge, an internal pre-audit scanner.' },
];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead label="about" title={<>Engineer who <span className="gradient-text">ships and operates</span> what he builds.</>} />
        <div className="grid lg:grid-cols-[360px_1fr] gap-6">
          <Reveal>
            <Spot className="p-7 h-full flex flex-col">
              <div className="relative size-28 rounded-2xl overflow-hidden border border-white/10 mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/avatar.png" alt="Portrait of Swapnil Shah" className="size-full object-cover" />
              </div>
              <p className="text-slate-300 leading-relaxed text-[15px]">{personalInfo.summary}</p>
              <div className="mt-auto pt-6 flex flex-wrap gap-2">
                <span className="chip">Java</span><span className="chip">Go</span><span className="chip">Rust</span><span className="chip">Python</span>
              </div>
            </Spot>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TILES.map(({ I, t, d }, i) => (
              <Reveal key={t} delay={i * 0.06}>
                <Spot className="p-5 h-full">
                  <I size={20} className="text-emerald-400 mb-4" />
                  <h3 className="font-medium mb-1.5">{t}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{d}</p>
                </Spot>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
