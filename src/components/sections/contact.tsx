"use client";

import { motion, useReducedMotion } from "framer-motion";

import { useAgentState } from "@/components/providers/agent-provider";
import { agentById } from "@/lib/agent-world";
import { activityFeed, dispatchLinks } from "@/lib/constants";

export function ContactSection() {
  const { activeAgent } = useAgentState();
  const selectedAgent = agentById[activeAgent];
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="zone-shell relative pb-32" data-testid="dispatch-terminal" id="contact">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }}
            className="command-panel rounded-[2.2rem] p-6 sm:p-8"
            style={{ boxShadow: `0 24px 60px ${selectedAgent.accent}` }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-text-muted">Dispatch Terminal</p>
            <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight text-text-primary sm:text-6xl">
              When the right collaboration appears, the system opens a live route out.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-text-secondary">
              The site already behaves like an agent runtime. The next step is connecting the real tools, traces, and
              delivery paths behind it.
            </p>

            <div className="mt-8 grid gap-3">
              {dispatchLinks.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    className="focus-ring flex items-center justify-between rounded-[1.4rem] border border-white/10 bg-white/5 px-4 py-4 transition hover:bg-white/8"
                    href={link.href}
                  >
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">{link.label}</p>
                      <p className="mt-2 text-base text-text-primary">{link.value}</p>
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-secondary">Open</span>
                  </a>
                ) : (
                  <div
                    key={link.label}
                    className="flex items-center justify-between rounded-[1.4rem] border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">{link.label}</p>
                      <p className="mt-2 text-base text-text-primary">{link.value}</p>
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-secondary">Status</span>
                  </div>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.7, ease: "easeOut", delay: 0.08 }}
            className="grid gap-5"
          >
            <div className="command-panel rounded-[2rem] p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">Live feed</p>
                  <p className="mt-2 font-display text-2xl text-text-primary">The agent system stays active below the fold.</p>
                </div>
                <div className="rounded-full border border-white/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-text-secondary">
                  Selected: {selectedAgent.name}
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {activityFeed.map((entry) => (
                  <div key={entry} className="rounded-[1.3rem] border border-white/10 bg-white/5 px-4 py-4">
                    <p className="text-sm leading-6 text-text-secondary">{entry}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="command-panel rounded-[2rem] p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">Collaboration filter</p>
              <p className="mt-3 max-w-xl text-base leading-7 text-text-secondary">
                Best fit: AI product work, retrieval systems, orchestration flows, model-to-product interfaces, and
                frontend experiences that make complex systems feel readable.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
