"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Mascot } from "@/components/agents/agent-arena";
import { useAgentState } from "@/components/providers/agent-provider";
import { agentById, describeRun, getRunStep, getRunStation, runStatusLabel } from "@/lib/agent-world";
import { agents } from "@/lib/agents";
import { systemZones } from "@/lib/constants";

export function AboutSection() {
  const { activeAgent, runs, setActiveAgent } = useAgentState();
  const selectedAgent = agentById[activeAgent];
  const selectedRun = runs.find((entry) => entry.agentId === activeAgent) ?? runs[0];
  const selectedStep = getRunStep(selectedRun);
  const selectedStation = getRunStation(selectedRun);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="zone-shell relative" id="about">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-text-muted">System Overview</p>
            <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight text-text-primary sm:text-6xl">
              Agents are the site structure, the story, and the proof of how the work gets done.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-text-secondary">
              Each band of the page is a department in the runtime. Instead of dropping projects into a neutral grid,
              the site shows who builds, who narrates, who retrieves, and who ships.
            </p>

            <div
              className="command-panel mt-8 rounded-[2rem] p-6"
              style={{ boxShadow: `0 24px 60px ${selectedAgent.accent}` }}
            >
              <div className="flex items-center gap-4">
                <Mascot active compact agent={selectedAgent} />
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">Selected lead</p>
                  <p className="mt-2 font-display text-3xl text-text-primary">{selectedAgent.name}</p>
                  <p className="mt-1 text-sm text-text-secondary">{selectedAgent.className}</p>
                </div>
              </div>
              <p className="mt-5 text-base leading-7 text-text-secondary">{selectedAgent.description}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {selectedAgent.stats.map((stat) => (
                  <div key={stat.label} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">{stat.label}</p>
                    <p className="mt-3 font-display text-3xl text-text-primary">{stat.value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-6 text-text-secondary">
                Current directive: {selectedStep.title} at {selectedStation.label}. Status is{" "}
                {runStatusLabel[selectedRun.status]}, and the run summary is {describeRun(selectedRun).toLowerCase()}.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.7, ease: "easeOut", delay: 0.08 }}
            className="grid gap-4"
          >
            <div className="grid gap-4 md:grid-cols-2">
              {systemZones.map((zone, index) => (
                <div key={zone.name} className="command-panel rounded-[1.8rem] p-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
                    Zone 0{index + 1}
                  </p>
                  <h3 className="mt-3 font-display text-2xl text-text-primary">{zone.name}</h3>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">
                    Lead {zone.lead}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-text-secondary">{zone.detail}</p>
                </div>
              ))}
            </div>

            <div className="command-panel rounded-[2rem] p-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">Roster Controls</p>
                  <p className="mt-2 font-display text-2xl text-text-primary">Every section listens to this state.</p>
                </div>
                <p className="max-w-sm text-sm leading-6 text-text-secondary">
                  Pick an agent and the emphasis, glow, and proof modules across the site shift with it.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {agents.map((agent) => {
                  const isActive = agent.id === activeAgent;

                  return (
                    <button
                      key={agent.id}
                      aria-pressed={isActive}
                      className="focus-ring rounded-[1.4rem] border px-4 py-4 text-left transition"
                      onClick={() => setActiveAgent(agent.id)}
                      style={{
                        borderColor: isActive ? agent.accent : "rgba(255,255,255,0.08)",
                        background: isActive ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.04)"
                      }}
                      type="button"
                    >
                      <div className="flex items-center gap-3">
                        <Mascot active={isActive} compact agent={agent} />
                        <div>
                          <p className="font-display text-xl text-text-primary">{agent.name}</p>
                          <p className="mt-1 text-sm text-text-secondary">{agent.tagline}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
