"use client";

import { motion } from "framer-motion";

import { type AgentDefinition } from "@/lib/agents";
import { cn } from "@/lib/utils";
import { useAgentState } from "@/components/providers/agent-provider";

export function AgentBadge({ agent }: { agent: AgentDefinition }) {
  const { activeAgent, setActiveAgent } = useAgentState();
  const isActive = activeAgent === agent.id;

  return (
    <motion.button
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group rounded-[1.75rem] border p-4 text-left backdrop-blur transition",
        isActive
          ? `${agent.glow} border-white/30 bg-white/12`
          : "border-white/10 bg-black/30 hover:border-white/20 hover:bg-white/8"
      )}
      onClick={() => setActiveAgent(agent.id)}
      type="button"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-text-muted">Roster Slot</p>
          <div className="mt-2 flex items-center gap-3">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: agent.accent, boxShadow: `0 0 18px ${agent.accent}` }}
            />
            <div>
              <p className="font-display text-lg tracking-[0.18em] text-text-primary">{agent.name}</p>
              <p className="text-sm text-text-secondary">{agent.className}</p>
            </div>
          </div>
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-text-secondary">
          {isActive ? "Selected" : "Standby"}
        </span>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
          {agent.role}
        </span>
        <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
          {agent.temperament}
        </span>
      </div>
      <p className="mb-4 text-sm leading-7 text-text-secondary">{agent.description}</p>
      <div className="grid gap-2 sm:grid-cols-3">
        {agent.stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-muted">{stat.label}</p>
            <p className="mt-2 font-display text-xl text-text-primary">{stat.value}</p>
          </div>
        ))}
      </div>
    </motion.button>
  );
}
