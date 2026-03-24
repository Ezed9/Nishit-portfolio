"use client";

import { motion, useReducedMotion } from "framer-motion";

import { useAgentState } from "@/components/providers/agent-provider";
import { type AgentDefinition } from "@/lib/agents";
import { agentById, getRunStation, getRunStep, runStatusLabel, type RunStatus } from "@/lib/agent-world";

const statusTone: Record<RunStatus, string> = {
  queued: "rgba(255,255,255,0.4)",
  running: "var(--forge-orange)",
  handoff: "var(--curator-blue)",
  done: "var(--link-green)",
  error: "#ff7f96"
};

export function Mascot({
  agent,
  active,
  compact = false
}: {
  agent: AgentDefinition;
  active: boolean;
  compact?: boolean;
}) {
  const size = compact ? "h-12 w-12" : "h-[5.5rem] w-[5.5rem]";
  const eyeOffset = compact ? "top-[20px]" : "top-[33px]";
  const cheekOffset = compact ? "top-[28px]" : "top-[44px]";

  return (
    <div className="relative flex flex-col items-center">
      <div
        className={`relative ${size} rounded-[22px] border border-white/18 shadow-[0_12px_24px_rgba(0,0,0,0.2)]`}
        style={{ backgroundColor: agent.accent }}
      >
        <div className="absolute left-1.5 top-[-6px] h-4 w-4 rounded-full border border-white/50 bg-white/18" />
        <div className="absolute right-1.5 top-[-6px] h-4 w-4 rounded-full border border-white/50 bg-white/18" />
        <div className={`absolute left-[23px] ${eyeOffset} h-1.5 w-1.5 rounded-full bg-[#4c3627]`} />
        <div className={`absolute right-[23px] ${eyeOffset} h-1.5 w-1.5 rounded-full bg-[#4c3627]`} />
        <div className="absolute left-1/2 top-[41px] h-2 w-4 -translate-x-1/2 rounded-b-full border-b-2 border-[#4c3627]" />
        <div className={`absolute left-[18px] ${cheekOffset} h-2.5 w-3.5 rounded-full bg-white/18`} />
        <div className={`absolute right-[18px] ${cheekOffset} h-2.5 w-3.5 rounded-full bg-white/18`} />
      </div>
      {!compact ? (
        <div className="mt-3 rounded-full border border-white/10 bg-white/6 px-3 py-1 font-mono text-xs uppercase tracking-[0.12em] text-text-secondary">
          {active ? "watching" : "roaming"}
        </div>
      ) : null}
    </div>
  );
}

export function AgentArena({ staticMode = false }: { staticMode?: boolean }) {
  const { activeAgent, runs, setActiveAgent, stations } = useAgentState();
  const prefersReducedMotion = useReducedMotion();
  const selectedRun = runs.find((entry) => entry.agentId === activeAgent) ?? runs[0];
  const selectedAgent = agentById[activeAgent];
  const selectedStep = getRunStep(selectedRun);
  const stationAssignments = stations.map((station) => ({
    ...station,
    assigned: runs.filter((entry) => getRunStep(entry).stationId === station.id)
  }));

  return (
    <div className="grid gap-4" data-testid="playmat">
      <div className="relative rounded-[2.6rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_22px_60px_rgba(0,0,0,0.28)] backdrop-blur-[4px] sm:p-5">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-4 px-1">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted">Live playmat</p>
            <h3 className="mt-2 max-w-2xl font-display text-3xl text-text-primary sm:text-[2.4rem]">
              One runtime map, four active departments, and visible work moving through them.
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {(["queued", "running", "handoff", "done", "error"] as RunStatus[]).map((status) => (
              <span
                key={status}
                className="rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em]"
                style={{ borderColor: statusTone[status], color: statusTone[status] }}
              >
                {runStatusLabel[status]}
              </span>
            ))}
          </div>
        </div>

        <div className="pixel-stage relative hidden min-h-[720px] overflow-hidden rounded-[2.3rem] bg-[linear-gradient(180deg,rgba(7,13,24,0.98),rgba(10,18,33,0.98))] md:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,153,102,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(119,214,255,0.14),transparent_24%)]" />
          <div className="absolute inset-x-[9%] top-[12%] h-[72%] rounded-[48%] border border-dashed border-white/10" />
          <div className="absolute left-[14%] top-[14%] h-[18%] w-[34%] rounded-[999px] border border-dashed border-white/7" />
          <div className="absolute left-[38%] top-[23%] h-[30%] w-[36%] rounded-[999px] border border-dashed border-white/7" />
          <div className="absolute left-[24%] top-[58%] h-[14%] w-[50%] rounded-[999px] border border-dashed border-white/7" />

          {stationAssignments.map((station) => (
            <div
              key={station.id}
              className="absolute w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-[1.8rem] p-4"
              style={{
                left: `${station.x}%`,
                top: `${station.y}%`,
                backgroundColor: "rgba(255,255,255,0.035)",
                border: `1px solid ${station.color}33`
              }}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">{station.label}</p>
              <p className="mt-2 text-sm leading-6 text-text-secondary/80">{station.detail}</p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">
                {station.assigned.length} active
              </p>
            </div>
          ))}

          {runs.map((run, index) => {
            const agent = agentById[run.agentId];
            const station = getRunStation(run);
            const step = getRunStep(run);
            const isActive = agent.id === activeAgent;

            return (
              <motion.button
                key={agent.id}
                aria-label={`Select ${agent.name}`}
                aria-pressed={isActive}
                animate={{
                  left: `${station.x}%`,
                  top: `${station.y + 11}%`,
                  scale: isActive ? 1.12 : 1
                }}
                className="focus-ring absolute -translate-x-1/2 -translate-y-1/2 text-left"
                onClick={() => setActiveAgent(agent.id)}
                transition={staticMode || prefersReducedMotion ? { duration: 0 } : { duration: 0.8, ease: "easeInOut" }}
                type="button"
              >
                <motion.div
                  animate={staticMode || prefersReducedMotion ? { y: 0 } : { y: [0, -6, 0] }}
                  transition={{
                    duration: 2 + index * 0.18,
                    ease: "easeInOut",
                    repeat: staticMode || prefersReducedMotion ? 0 : Infinity
                  }}
                >
                  <div
                    className="absolute left-1/2 top-[74px] h-7 w-16 -translate-x-1/2 rounded-full blur-md"
                    style={{ backgroundColor: isActive ? `${agent.accent}` : "rgba(255,255,255,0.12)" }}
                  />
                  <Mascot active={isActive} agent={agent} />
                  <div
                    className="mt-4 min-w-[220px] rounded-[1.5rem] border px-4 py-4 shadow-[0_10px_20px_rgba(0,0,0,0.18)] backdrop-blur-sm"
                    style={{
                      borderColor: isActive ? agent.accent : "rgba(255,255,255,0.1)",
                      background: isActive ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.06)"
                    }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-display text-lg text-text-primary">{agent.name}</p>
                      <p
                        className="rounded-full border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em]"
                        style={{ borderColor: statusTone[run.status], color: statusTone[run.status] }}
                      >
                        {runStatusLabel[run.status]}
                      </p>
                    </div>
                    <p className="mt-2 text-sm text-text-secondary">{step.title}</p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">
                      {station.label}
                    </p>
                  </div>
                </motion.div>
              </motion.button>
            );
          })}

          <div className="absolute right-5 top-5 max-w-[320px] rounded-[1.8rem] border border-white/10 bg-[rgba(7,14,26,0.78)] p-5 shadow-[0_16px_30px_rgba(0,0,0,0.3)] backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Mascot active compact agent={selectedAgent} />
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-text-muted">Observed agent</p>
                <p className="mt-1 font-display text-2xl text-text-primary">{selectedAgent.name}</p>
                <p className="text-sm text-text-secondary">{selectedAgent.className}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-text-secondary">{selectedRun.summary}</p>
            <div className="mt-4 rounded-[1.1rem] border border-white/10 bg-white/6 px-4 py-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">Current step</p>
              <p className="mt-2 text-sm text-text-primary">{selectedStep.title}</p>
              <p className="mt-2 text-sm leading-6 text-text-secondary">{selectedStep.detail}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-3 md:hidden">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/8 p-4 shadow-[0_12px_24px_rgba(0,0,0,0.16)]">
            <div className="flex items-center gap-3">
              <Mascot active compact agent={selectedAgent} />
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-text-muted">Watching now</p>
                <p className="mt-1 font-display text-xl text-text-primary">{selectedAgent.name}</p>
                <p className="text-sm text-text-secondary">{selectedStep.title}</p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-text-secondary">{selectedRun.summary}</p>
          </div>

          <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,15,28,0.94),rgba(13,23,40,0.96))] px-4 pb-4 pt-5 shadow-[0_14px_30px_rgba(0,0,0,0.22)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,153,102,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(119,214,255,0.12),transparent_28%)]" />
            <div className="relative grid gap-3">
              {stationAssignments.map((station) => {
                const isSelectedStop = station.id === selectedStep.stationId;

                return (
                  <button
                    key={station.id}
                    className="focus-ring relative flex items-center justify-between rounded-[1.35rem] px-3 py-3 text-left"
                    onClick={() => setActiveAgent(station.assigned[0]?.agentId ?? selectedAgent.id)}
                    style={{
                      backgroundColor: isSelectedStop ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.04)",
                      boxShadow: isSelectedStop ? "0 12px 24px rgba(0,0,0,0.18)" : "none",
                      border: `1px solid ${isSelectedStop ? selectedAgent.accent : "rgba(255,255,255,0.08)"}`
                    }}
                    type="button"
                  >
                    <div>
                      <p className="font-display text-base text-text-primary">{station.label}</p>
                      <p className="mt-1 text-sm text-text-secondary">{station.detail}</p>
                    </div>
                    <div className="flex -space-x-2">
                      {station.assigned.map((entry) => (
                        <div key={entry.agentId} className="scale-[0.78]">
                          <Mascot active={entry.agentId === activeAgent} compact agent={agentById[entry.agentId]} />
                        </div>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {runs.map((run) => {
              const agent = agentById[run.agentId];
              const isActive = agent.id === activeAgent;

              return (
                <button
                  key={agent.id}
                  aria-pressed={isActive}
                  className="focus-ring rounded-full border border-white/10 bg-white/8 px-3 py-2 text-left shadow-[0_8px_18px_rgba(0,0,0,0.14)]"
                  onClick={() => setActiveAgent(agent.id)}
                  type="button"
                >
                  <div className="flex items-center gap-2">
                    <div className="scale-[0.74]">
                      <Mascot active={isActive} compact agent={agent} />
                    </div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-secondary">{agent.name}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
