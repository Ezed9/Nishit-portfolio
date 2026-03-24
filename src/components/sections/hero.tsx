"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { AgentBadge } from "@/components/agents/agent-badge";
import { useAgentState } from "@/components/providers/agent-provider";
import { AgentScene } from "@/components/three/scene";
import { agents } from "@/lib/agents";
import { siteConfig } from "@/lib/constants";

export function HeroSection() {
  const { activeAgent } = useAgentState();
  const selectedAgent = agents.find((agent) => agent.id === activeAgent) ?? agents[0];
  const [staticMode, setStaticMode] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setStaticMode(searchParams.get("capture") === "1");
  }, []);

  return (
    <section className="relative isolate min-h-screen overflow-hidden border-b border-white/10" data-testid="hero-section">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_20%_20%,rgba(255,107,53,0.15),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.14),transparent_25%),linear-gradient(180deg,#080911_0%,#0a0a0f_100%)]" />
      <div className="absolute inset-0 bg-grid bg-[size:120px_120px] opacity-20" />
      <AgentScene staticMode={staticMode} />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-12 pt-28 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            animate={staticMode ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            initial={staticMode ? false : { opacity: 0, y: 24 }}
            transition={staticMode ? { duration: 0 } : { duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.3em] text-text-secondary">
                AI Workshop Lobby
              </span>
              <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.3em] text-text-secondary">
                Roster Online 4/4
              </span>
              <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.3em] text-text-secondary">
                Mission Build a Memorable Portfolio
              </span>
            </div>
            <h1 className="max-w-4xl font-display text-5xl leading-none text-text-primary sm:text-7xl">
              {siteConfig.name}
              <span className="mt-3 block text-text-secondary">{siteConfig.title}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">{siteConfig.intro}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              {siteConfig.ctas.map((cta) => (
                <a
                  key={cta.href}
                  className="rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-medium text-text-primary transition hover:border-white/30 hover:bg-white/12"
                  href={cta.href}
                >
                  {cta.label}
                </a>
              ))}
            </div>
            <motion.div
              key={selectedAgent.id}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 max-w-2xl rounded-[2rem] border border-white/10 bg-black/35 p-5 backdrop-blur-md"
              initial={staticMode ? false : { opacity: 0, y: 18 }}
              transition={staticMode ? { duration: 0 } : { duration: 0.35, ease: "easeOut" }}
            >
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{
                      backgroundColor: selectedAgent.accent,
                      boxShadow: `0 0 18px ${selectedAgent.accent}`
                    }}
                  />
                  <p className="font-mono text-xs uppercase tracking-[0.35em] text-text-secondary">
                    Active Character / {selectedAgent.name}
                  </p>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-text-secondary">
                  {selectedAgent.className}
                </span>
              </div>
              <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-text-muted">Character Bio</p>
                  <p className="mt-3 font-display text-2xl text-text-primary">{selectedAgent.tagline}</p>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">{selectedAgent.description}</p>
                  <div className="mt-4 rounded-2xl border border-white/10 bg-black/25 p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-muted">Voice Line</p>
                    <p className="mt-2 text-sm italic leading-7 text-text-secondary">"{selectedAgent.voiceLine}"</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-text-muted">Loadout</p>
                    <div className="mt-4 grid gap-2 sm:grid-cols-3">
                      {selectedAgent.stats.map((stat) => (
                        <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/25 px-3 py-3">
                          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">{stat.label}</p>
                          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                            <div
                              className="h-full rounded-full"
                              style={{ width: `${stat.value}%`, backgroundColor: selectedAgent.accent }}
                            />
                          </div>
                          <p className="mt-2 text-sm text-text-secondary">{stat.value}/100</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-text-muted">Mission Abilities</p>
                    <div className="mt-4 grid gap-2 sm:grid-cols-3">
                      {selectedAgent.tasks.map((task, index) => (
                        <div key={task} className="rounded-2xl border border-white/10 bg-black/25 px-3 py-3">
                          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
                            Skill {index + 1}
                          </p>
                          <p className="mt-2 text-sm text-text-secondary">{task}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="grid gap-4 self-end">
            {agents.map((agent) => (
              <AgentBadge key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
