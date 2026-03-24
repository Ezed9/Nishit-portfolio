"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { AgentArena } from "@/components/agents/agent-arena";
import { useAgentState } from "@/components/providers/agent-provider";
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,224,204,0.8),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(205,233,255,0.5),transparent_24%),linear-gradient(180deg,#fffaf6_0%,#fff5ed_42%,#fff1e8_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(160,133,111,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(160,133,111,0.05)_1px,transparent_1px)] bg-[size:92px_92px] opacity-40" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-14 pt-24 lg:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div
            animate={staticMode ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            initial={staticMode ? false : { opacity: 0, y: 24 }}
            transition={staticMode ? { duration: 0 } : { duration: 0.8, ease: "easeOut" }}
            className="lg:sticky lg:top-24"
          >
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="soft-chip rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-text-secondary">
                4 helpers online
              </span>
            </div>
            <h1 className="max-w-3xl font-display text-5xl leading-[0.95] text-text-primary sm:text-7xl">
              {siteConfig.name}
              <span className="mt-3 block text-text-secondary">builds AI products with a tiny live workshop of agents</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-text-secondary">
              A soft little 2D scene where helpers plan, retrieve, build, test, and ship real portfolio work. It
              should feel like watching the system think, not reading a dashboard.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              {siteConfig.ctas.map((cta) => (
                <a
                  key={cta.href}
                  className="focus-ring rounded-full border border-[color:var(--panel-border)] bg-white/90 px-6 py-3 text-sm font-medium text-text-primary transition hover:bg-white"
                  href={cta.href}
                >
                  {cta.label}
                </a>
              ))}
            </div>

            <div className="mt-8 hidden max-w-sm rounded-[1.5rem] border border-[color:var(--panel-border)] bg-white/66 px-4 py-4 shadow-[0_10px_28px_rgba(186,141,107,0.08)] md:block">
              <div className="flex items-center gap-3">
                <span
                  className="h-3.5 w-3.5 rounded-full border border-white/80"
                  style={{ backgroundColor: selectedAgent.accent, boxShadow: `0 8px 18px ${selectedAgent.accent}` }}
                />
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">Selected helper</p>
              </div>
              <div className="mt-3 flex items-baseline gap-3">
                <p className="font-display text-2xl text-text-primary">{selectedAgent.name}</p>
                <p className="text-sm text-text-muted">{selectedAgent.className}</p>
              </div>
              <p className="mt-2 text-sm leading-6 text-text-secondary">{selectedAgent.voiceLine}</p>
            </div>
          </motion.div>

          <motion.div
            animate={staticMode ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            initial={staticMode ? false : { opacity: 0, y: 28 }}
            transition={staticMode ? { duration: 0 } : { duration: 0.8, ease: "easeOut", delay: 0.08 }}
            className="space-y-4"
          >
            <AgentArena staticMode={staticMode} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
