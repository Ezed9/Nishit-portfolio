"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { Mascot } from "@/components/agents/agent-arena";
import { useAgentState } from "@/components/providers/agent-provider";
import { agentById, getRunStation, getRunStep, runStatusLabel } from "@/lib/agent-world";

export function AgentDock() {
  const { activeAgent, runs, miniFeed, setActiveAgent } = useAgentState();
  const prefersReducedMotion = useReducedMotion();
  const activeRun = runs.find((entry) => entry.agentId === activeAgent) ?? runs[0];
  const step = getRunStep(activeRun);
  const station = getRunStation(activeRun);
  const activeColor = agentById[activeAgent].accent;
  const [captureMode] = useState(
    () => typeof window !== "undefined" && new URLSearchParams(window.location.search).get("capture") === "1"
  );

  if (captureMode) {
    return null;
  }

  return (
    <motion.aside
      animate={prefersReducedMotion ? undefined : { y: [0, -4, 0] }}
      className="fixed bottom-4 left-4 right-4 z-40 mx-auto hidden max-w-6xl rounded-[1.5rem] border border-white/10 bg-[rgba(7,14,26,0.78)] p-3 shadow-[0_18px_48px_rgba(0,0,0,0.35)] backdrop-blur md:block"
      transition={{ duration: 4.2, ease: "easeInOut", repeat: prefersReducedMotion ? 0 : Infinity }}
      style={{ boxShadow: `0 18px 48px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04), 0 0 48px ${activeColor}` }}
    >
      <div className="grid items-center gap-3 lg:grid-cols-[1.2fr_0.85fr_0.95fr]">
        <div className="flex items-center gap-3">
          <Mascot active compact agent={agentById[activeAgent]} />
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-text-muted">Following now</p>
            <p className="mt-1 text-sm text-text-secondary">
              {agentById[activeAgent].name} is {runStatusLabel[activeRun.status]} {step.title.toLowerCase()} at{" "}
              {station.label}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {Object.values(agentById).map((agent) => (
            <button
              key={agent.id}
              aria-pressed={activeAgent === agent.id}
              className="focus-ring rounded-full border px-3 py-2 font-mono text-xs uppercase tracking-[0.12em] text-text-secondary transition hover:bg-white/10"
              onClick={() => setActiveAgent(agent.id)}
              style={{
                borderColor: activeAgent === agent.id ? agent.accent : "rgba(255,255,255,0.08)",
                background: activeAgent === agent.id ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.04)"
              }}
              type="button"
            >
              {activeAgent === agent.id ? `Watching ${agent.name}` : agent.name}
            </button>
          ))}
        </div>

        <div className="grid gap-2">
          {miniFeed.slice(0, 1).map((item) => (
            <div key={item} className="rounded-[1rem] border border-white/10 bg-white/5 px-3 py-2">
              <p className="text-xs leading-5 text-text-secondary">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}
