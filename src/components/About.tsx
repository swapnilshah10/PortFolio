'use client';

import { motion } from 'motion/react';
import { Zap, Network, Activity, Server, LineChart, ShieldCheck } from 'lucide-react';
import { personalInfo, player } from '@/lib/data';
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
        <SectionHead label="player 1" title={<>Builds, ships and <span className="gradient-text">operates</span> it all.</>} />
        <div className="grid lg:grid-cols-[360px_1fr] gap-6">
          <Reveal>
            <Spot className="p-7 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-5">
                <div className="relative size-24 overflow-hidden border-2 border-lime-400/70 shadow-[0_0_24px_rgba(163,230,53,.35)] [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/avatar.png" alt="Portrait of Swapnil Shah" className="size-full object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="pixel text-[9px] text-pink-400 mb-2">PLAYER 1</p>
                  <p className="font-display text-xl leading-tight truncate">{player.handle}</p>
                  <p className="text-sm text-cyan-300">{player.class} · {player.guild}</p>
                </div>
              </div>
              <div className="mb-5">
                <div className="flex justify-between pixel text-[9px] text-lime-400 mb-2"><span>LV {player.level}</span><span>XP {player.xp}%</span></div>
                <div className="xp-track" role="progressbar" aria-label="Experience" aria-valuenow={player.xp} aria-valuemin={0} aria-valuemax={100}>
                  <motion.div className="xp-fill" initial={{ width: 0 }} whileInView={{ width: `${player.xp}%` }} viewport={{ once: true }} transition={{ duration: 1.6, ease: 'easeOut' }} />
                </div>
              </div>
              <ul className="mb-5 space-y-2">
                {player.stats.map(st => (
                  <li key={st.label} className="grid grid-cols-[80px_1fr_28px] items-center gap-3 text-xs">
                    <span className="text-slate-300 uppercase tracking-wider">{st.label}</span>
                    <span className="xp-track !h-2"><motion.span className="xp-fill block" style={{ background: 'repeating-linear-gradient(90deg,#22d3ee 0 8px,#0891b2 8px 10px)' }} initial={{ width: 0 }} whileInView={{ width: `${st.value}%` }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2 }} /></span>
                    <span className="pixel text-[8px] text-cyan-300">{st.value}</span>
                  </li>
                ))}
              </ul>
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
                  <I size={20} className="text-lime-400 mb-4" />
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
