"use client";

import { motion, useReducedMotion } from "framer-motion";

import { type AgentDefinition } from "@/lib/agents";
import { cn } from "@/lib/utils";
import { useAgentState } from "@/components/providers/agent-provider";

export function AgentBadge({ agent }: { agent: AgentDefinition }) {
  const { activeAgent, setActiveAgent } = useAgentState();
  const isActive = activeAgent === agent.id;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.button
      aria-pressed={isActive}
      whileHover={prefersReducedMotion ? undefined : { y: -3 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
      className={cn(
        "focus-ring group rounded-[1.5rem] border p-4 text-left transition",
        isActive
          ? `${agent.glow} border-[color:var(--panel-border)] bg-[color:var(--surface-2)]`
          : "border-[color:var(--panel-border)] bg-[rgba(255,255,255,0.66)] hover:bg-[color:var(--surface-1)]"
      )}
      onClick={() => setActiveAgent(agent.id)}
      type="button"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">Helper card</p>
          <div className="mt-2 flex items-center gap-3">
            <span
              className="h-4 w-4 rounded-full border border-white/70"
              style={{ backgroundColor: agent.accent, boxShadow: `0 8px 18px ${agent.accent}` }}
            />
            <div>
              <p className="font-display text-lg text-text-primary">{agent.name}</p>
              <p className="text-sm text-text-secondary">{agent.role}</p>
            </div>
          </div>
        </div>
        <span className="soft-chip rounded-full px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-text-secondary">
          {isActive ? "Watching" : "Tap me"}
        </span>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="soft-chip rounded-full px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-text-muted">
          {agent.temperament}
        </span>
        <span className="soft-chip rounded-full px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-text-muted">
          {agent.className}
        </span>
      </div>
      <p className="mb-4 text-sm leading-6 text-text-secondary">{agent.description}</p>
      <div className="rounded-[1.1rem] border border-[color:var(--panel-border)] bg-[rgba(255,255,255,0.6)] px-4 py-3">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted">Favorite loop</p>
        <p className="mt-2 text-sm text-text-secondary">{agent.tasks[0]}</p>
      </div>
    </motion.button>
  );
}
