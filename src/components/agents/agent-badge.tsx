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
        "group rounded-2xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur transition",
        isActive ? `${agent.glow} border-white/30 bg-white/10` : "hover:border-white/20 hover:bg-white/8"
      )}
      onClick={() => setActiveAgent(agent.id)}
      type="button"
    >
      <div className="mb-3 flex items-center gap-3">
        <span
          className="h-3 w-3 rounded-full"
          style={{ backgroundColor: agent.accent, boxShadow: `0 0 18px ${agent.accent}` }}
        />
        <div>
          <p className="font-display text-sm tracking-[0.3em] text-text-secondary">{agent.name}</p>
          <p className="text-sm text-text-primary">{agent.role}</p>
        </div>
      </div>
      <p className="mb-3 text-sm text-text-secondary">{agent.description}</p>
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-text-muted">{agent.tagline}</p>
    </motion.button>
  );
}
