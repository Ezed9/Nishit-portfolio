"use client";

import { Mascot } from "@/components/agents/agent-arena";
import { useAgentState } from "@/components/providers/agent-provider";
import { agentById, getRunStation, getRunStep, runStatusLabel } from "@/lib/agent-world";

export function SectionAgentStrip({
  agentId,
  title
}: {
  agentId: keyof typeof agentById;
  title: string;
}) {
  const { activeAgent, runs, setActiveAgent } = useAgentState();
  const run = runs.find((entry) => entry.agentId === agentId) ?? runs[0];
  const station = getRunStation(run);
  const step = getRunStep(run);
  const agent = agentById[agentId];
  const isActive = activeAgent === agentId;

  return (
    <div className="rounded-[1.6rem] bg-white/58 p-4 shadow-[0_10px_24px_rgba(186,141,107,0.06)]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Mascot active={isActive} compact agent={agent} />
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-text-muted">{title}</p>
            <p className="mt-1 text-sm text-text-secondary">
              {agent.name} is {runStatusLabel[run.status]} {step.title.toLowerCase()} near {station.label}.
            </p>
          </div>
        </div>
        <button
          aria-pressed={isActive}
          className="focus-ring rounded-full bg-white/76 px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-text-secondary"
          onClick={() => setActiveAgent(agentId)}
          type="button"
        >
          {isActive ? "Being watched" : `Follow ${agent.name}`}
        </button>
      </div>
    </div>
  );
}
