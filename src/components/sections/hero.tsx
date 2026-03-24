"use client";

import { motion } from "framer-motion";

import { AgentBadge } from "@/components/agents/agent-badge";
import { AgentScene } from "@/components/three/scene";
import { agents } from "@/lib/agents";
import { siteConfig } from "@/lib/constants";

export function HeroSection() {
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
