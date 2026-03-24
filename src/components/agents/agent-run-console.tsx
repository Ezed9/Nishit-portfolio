"use client";

import { useAgentState } from "@/components/providers/agent-provider";
import { agentById, getRunStep, getRunStation, runStatusLabel } from "@/lib/agent-world";

const statusTone: Record<string, string> = {
  queued: "rgba(255,255,255,0.4)",
  running: "var(--forge-orange)",
  handoff: "var(--curator-blue)",
  done: "var(--link-green)",
  error: "#ff7f96"
};

export function AgentRunConsole() {
  const { activeAgent, capabilities, runs } = useAgentState();
  const run = runs.find((entry) => entry.agentId === activeAgent) ?? runs[0];
  const agent = agentById[run.agentId];
  const capability = capabilities[run.agentId];
  const step = getRunStep(run);
  const station = getRunStation(run);

  return (
    <div
      className="command-panel rounded-[2rem] p-5 lg:p-6"
      data-testid="run-console"
      style={{ boxShadow: `0 24px 60px ${agent.accent}` }}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">Run Console</p>
          <h3 className="mt-2 font-display text-3xl text-text-primary">{capability.label}</h3>
        </div>
        <div
          className="rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em]"
          style={{ borderColor: statusTone[run.status], color: statusTone[run.status] }}
        >
          {runStatusLabel[run.status]}
        </div>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1.4rem] border border-white/10 bg-black/10 p-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">Input</p>
          <p className="mt-3 text-sm leading-6 text-text-secondary">{run.input}</p>
        </div>

        <div className="rounded-[1.4rem] border border-white/10 bg-black/10 p-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">Current step</p>
          <p className="mt-3 text-base text-text-primary">
            {step.title} at {station.label}
          </p>
          <p className="mt-2 text-sm leading-6 text-text-secondary">{step.detail}</p>
        </div>
      </div>

      <div className="mt-4 rounded-[1.4rem] border border-white/10 bg-black/10 p-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">
          {run.status === "error" ? "Error" : "Result"}
        </p>
        <p className="mt-3 text-sm leading-6 text-text-secondary">{run.error ?? run.result ?? run.summary}</p>
      </div>

      <div className="mt-4 grid gap-3">
        {run.steps.map((entry, index) => (
          <div
            key={entry.id}
            className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-3"
            style={{
              borderColor: entry.id === run.currentStepId ? agent.accent : "rgba(255,255,255,0.08)",
              background: entry.id === run.currentStepId ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)"
            }}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">Step 0{index + 1}</p>
                <p className="mt-2 text-sm text-text-primary">{entry.title}</p>
              </div>
              <div
                className="rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em]"
                style={{ borderColor: statusTone[entry.status], color: statusTone[entry.status] }}
              >
                {runStatusLabel[entry.status]}
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-text-secondary">{entry.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
