"use client";

import { motion } from "framer-motion";

import { AgentBadge } from "@/components/agents/agent-badge";
import { useAgentState } from "@/components/providers/agent-provider";
import { AgentScene } from "@/components/three/scene";
import { agents } from "@/lib/agents";
import { siteConfig } from "@/lib/constants";

export function HeroSection() {
  const { activeAgent } = useAgentState();
  const selectedAgent = agents.find((agent) => agent.id === activeAgent) ?? agents[0];

  return (
    <section className="relative isolate min-h-screen overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_20%_20%,rgba(255,107,53,0.15),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.14),transparent_25%),linear-gradient(180deg,#080911_0%,#0a0a0f_100%)]" />
      <div className="absolute inset-0 bg-grid bg-[size:120px_120px] opacity-20" />
      <AgentScene />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-12 pt-28 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.4em] text-text-secondary">
              The AI Workshop
            </p>
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
              className="mt-10 max-w-xl rounded-[1.75rem] border border-white/10 bg-black/30 p-5 backdrop-blur-md"
              initial={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{
                    backgroundColor: selectedAgent.accent,
                    boxShadow: `0 0 18px ${selectedAgent.accent}`
                  }}
                />
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-text-secondary">
                  Active Agent / {selectedAgent.name}
                </p>
              </div>
              <p className="font-display text-2xl text-text-primary">{selectedAgent.tagline}</p>
              <p className="mt-3 text-sm leading-7 text-text-secondary">{selectedAgent.description}</p>
              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                {selectedAgent.tasks.map((task) => (
                  <div key={task} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">Task</p>
                    <p className="mt-2 text-sm text-text-secondary">{task}</p>
                  </div>
                ))}
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
