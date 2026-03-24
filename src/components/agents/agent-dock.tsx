"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Mascot } from "@/components/agents/agent-arena";
import { useAgentState } from "@/components/providers/agent-provider";
import { agentById, getStation, phaseLabel } from "@/lib/agent-world";

export function AgentDock() {
  const { activeAgent, loopState, miniFeed, setActiveAgent } = useAgentState();
  const prefersReducedMotion = useReducedMotion();
  const activeLoop = loopState.find((entry) => entry.agentId === activeAgent) ?? loopState[0];
  const station = getStation(activeLoop.stationId);

  return (
    <motion.aside
      animate={prefersReducedMotion ? undefined : { y: [0, -4, 0] }}
      className="fixed bottom-4 left-4 right-4 z-40 mx-auto hidden max-w-4xl rounded-[1.5rem] border border-white/60 bg-white/72 p-3 shadow-[0_16px_40px_rgba(186,141,107,0.12)] backdrop-blur md:block"
      transition={{ duration: 4.2, ease: "easeInOut", repeat: prefersReducedMotion ? 0 : Infinity }}
    >
      <div className="grid items-center gap-3 lg:grid-cols-[1.2fr_0.85fr_0.95fr]">
        <div className="flex items-center gap-3">
          <Mascot active compact agent={agentById[activeAgent]} />
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-text-muted">Following now</p>
            <p className="mt-1 text-sm text-text-secondary">
              {agentById[activeAgent].name} is {phaseLabel[activeLoop.phase]} {activeLoop.task.toLowerCase()} at{" "}
              {station.label}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {Object.values(agentById).map((agent) => (
            <button
              key={agent.id}
              aria-pressed={activeAgent === agent.id}
              className="focus-ring rounded-full bg-white/82 px-3 py-2 font-mono text-xs uppercase tracking-[0.12em] text-text-secondary transition hover:bg-white"
              onClick={() => setActiveAgent(agent.id)}
              type="button"
            >
              {activeAgent === agent.id ? `Watching ${agent.name}` : agent.name}
            </button>
          ))}
        </div>

        <div className="grid gap-2">
          {miniFeed.slice(0, 1).map((item) => (
            <div key={item} className="rounded-[1rem] bg-[color:var(--surface-2)] px-3 py-2">
              <p className="text-xs leading-5 text-text-secondary">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}
