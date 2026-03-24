"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type KeyboardEvent, useEffect, useState } from "react";

import { AgentArena, Mascot } from "@/components/agents/agent-arena";
import { AgentRunConsole } from "@/components/agents/agent-run-console";
import { useAgentState } from "@/components/providers/agent-provider";
import { agents } from "@/lib/agents";
import { agentById, describeRun, getRunStep, runStatusLabel } from "@/lib/agent-world";
import { proofPoints, siteConfig } from "@/lib/constants";

function getNextAgentId(currentId: string, direction: 1 | -1) {
  const currentIndex = agents.findIndex((agent) => agent.id === currentId);
  const nextIndex = (currentIndex + direction + agents.length) % agents.length;

  return agents[nextIndex]?.id ?? agents[0].id;
}

export function HeroSection() {
  const { activeAgent, capabilities, runs, setActiveAgent } = useAgentState();
  const selectedAgent = agentById[activeAgent];
  const selectedRun = runs.find((entry) => entry.agentId === activeAgent) ?? runs[0];
  const selectedCapability = capabilities[activeAgent];
  const selectedStep = getRunStep(selectedRun);
  const [staticMode, setStaticMode] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setStaticMode(searchParams.get("capture") === "1");
  }, []);

  const handleAgentKeyDown = (event: KeyboardEvent<HTMLButtonElement>, agentId: string) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
      return;
    }

    event.preventDefault();

    const nextAgentId = getNextAgentId(agentId, event.key === "ArrowRight" ? 1 : -1);
    setActiveAgent(nextAgentId);
  };

  return (
    <section
      className="world-grid relative isolate min-h-screen overflow-hidden border-b border-white/10"
      data-testid="hero-section"
      id="top"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,153,102,0.14),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(119,214,255,0.14),transparent_20%),linear-gradient(180deg,rgba(9,17,31,0.62),rgba(9,17,31,0.08)_24%,rgba(9,17,31,0)_60%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-[1580px] flex-col px-6 pb-16 pt-6 lg:px-10 lg:pb-20">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 py-5">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-text-muted">Agent Runtime</p>
            <p className="mt-2 font-display text-xl text-text-primary">{siteConfig.name}</p>
          </div>
          <nav className="flex flex-wrap items-center gap-3 text-sm text-text-secondary">
            <a className="focus-ring rounded-full px-3 py-2 transition hover:bg-white/5" href="#about">
              System
            </a>
            <a className="focus-ring rounded-full px-3 py-2 transition hover:bg-white/5" href="#projects">
              Missions
            </a>
            <a className="focus-ring rounded-full px-3 py-2 transition hover:bg-white/5" href="#experience">
              Ship Log
            </a>
            <a className="focus-ring rounded-full px-3 py-2 transition hover:bg-white/5" href="#contact">
              Dispatch
            </a>
          </nav>
        </div>

        <div className="grid gap-8 pb-10 pt-10 lg:pt-14">
          <div className="grid items-start gap-8 xl:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={staticMode || prefersReducedMotion ? false : { opacity: 0, y: 28 }}
              transition={staticMode || prefersReducedMotion ? { duration: 0 } : { duration: 0.85, ease: "easeOut" }}
            >
              <div className="soft-chip inline-flex rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-text-secondary">
                Runtime model online
              </div>

              <h1 className="mt-8 max-w-5xl font-display text-5xl leading-[0.88] text-text-primary sm:text-7xl xl:text-[6.4rem]">
                Four specialist agents running one visible operating floor.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-text-secondary sm:text-xl">
                {siteConfig.intro} The playmat is now the source of truth for the top half of the site, and each agent
                is framed as a real run with input, steps, status, result, and failure states.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {siteConfig.ctas.map((cta) => (
                  <a
                    key={cta.href}
                    className="focus-ring rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-medium text-text-primary transition hover:border-white/30 hover:bg-white/12"
                    href={cta.href}
                  >
                    {cta.label}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={staticMode || prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              transition={
                staticMode || prefersReducedMotion ? { duration: 0 } : { duration: 0.85, ease: "easeOut", delay: 0.06 }
              }
              className="grid gap-4"
            >
              <div className="command-panel rounded-[2rem] p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">Focus agent</p>
                    <p className="mt-2 font-display text-2xl text-text-primary">{selectedAgent.name}</p>
                  </div>
                  <div
                    className="rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em]"
                    style={{ borderColor: selectedAgent.accent, color: selectedAgent.accent }}
                  >
                    {runStatusLabel[selectedRun.status]}
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-4">
                  <Mascot active compact agent={selectedAgent} />
                  <div>
                    <p className="text-sm text-text-secondary">{selectedAgent.className}</p>
                    <p className="mt-1 text-sm leading-6 text-text-secondary">{selectedCapability.summary}</p>
                  </div>
                </div>

                <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-black/10 p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">Current directive</p>
                  <p className="mt-3 text-sm text-text-primary">{selectedStep.title}</p>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">{describeRun(selectedRun)}</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {agents.map((agent) => {
                  const isActive = agent.id === activeAgent;
                  const run = runs.find((entry) => entry.agentId === agent.id) ?? runs[0];

                  return (
                    <button
                      key={agent.id}
                      aria-pressed={isActive}
                      className="focus-ring rounded-[1.5rem] border px-4 py-4 text-left transition"
                      onClick={() => setActiveAgent(agent.id)}
                      onKeyDown={(event) => handleAgentKeyDown(event, agent.id)}
                      style={{
                        borderColor: isActive ? agent.accent : "rgba(255,255,255,0.08)",
                        background: isActive ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.04)",
                        boxShadow: isActive ? `0 18px 40px ${agent.accent}` : "none"
                      }}
                      type="button"
                    >
                      <div className="flex items-start gap-3">
                        <Mascot active={isActive} compact agent={agent} />
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <p className="font-display text-xl text-text-primary">{agent.name}</p>
                            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">
                              {runStatusLabel[run.status]}
                            </p>
                          </div>
                          <p className="mt-2 text-sm leading-6 text-text-secondary">{capabilities[agent.id].label}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={staticMode || prefersReducedMotion ? false : { opacity: 0, y: 34 }}
            transition={
              staticMode || prefersReducedMotion ? { duration: 0 } : { duration: 0.9, ease: "easeOut", delay: 0.08 }
            }
            className="grid gap-5"
          >
            <div className="command-panel rounded-[2.3rem] p-3 sm:p-4">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-4 px-2 pt-2">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">Command Floor</p>
                  <p className="mt-2 font-display text-2xl text-text-primary">The hero now is the runtime map.</p>
                </div>
                <div className="rounded-full border border-white/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-text-secondary">
                  {staticMode ? "Capture mode" : "Runtime seeded from AgentRun"}
                </div>
              </div>
              <AgentArena staticMode={staticMode} />
            </div>

            <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
              <AgentRunConsole />

              <div className="grid gap-5">
                <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                  {proofPoints.map((point) => (
                    <div key={point.label} className="command-panel rounded-[1.6rem] p-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">{point.label}</p>
                      <p className="mt-3 font-display text-2xl text-text-primary">{point.value}</p>
                      <p className="mt-2 text-sm leading-6 text-text-secondary">{point.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="command-panel rounded-[1.8rem] p-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">Route + API</p>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">
                    {selectedCapability.route} is the future execution target for {selectedAgent.name}. The current UI is
                    already using the same runtime shape that those routes will return.
                  </p>
                  <div className="mt-4 rounded-[1.2rem] border border-white/10 bg-black/10 p-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">Expected input</p>
                    <p className="mt-3 text-sm leading-6 text-text-secondary">{selectedCapability.inputExample}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
