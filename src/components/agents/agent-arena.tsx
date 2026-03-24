"use client";

import { motion, useReducedMotion } from "framer-motion";

import { useAgentState } from "@/components/providers/agent-provider";
import { type AgentDefinition } from "@/lib/agents";
import { agentById, getStation, phaseLabel } from "@/lib/agent-world";

export function Mascot({
  agent,
  active,
  compact = false
}: {
  agent: AgentDefinition;
  active: boolean;
  compact?: boolean;
}) {
  const size = compact ? "h-12 w-12" : "h-[4.6rem] w-[4.6rem]";
  const eyeOffset = compact ? "top-[20px]" : "top-[29px]";
  const cheekOffset = compact ? "top-[28px]" : "top-[39px]";

  return (
    <div className="relative flex flex-col items-center">
      <div
        className={`relative ${size} rounded-[22px] border border-white/80 shadow-[0_12px_24px_rgba(186,141,107,0.18)]`}
        style={{ backgroundColor: agent.accent }}
      >
        <div className="absolute left-1.5 top-[-6px] h-4 w-4 rounded-full border border-white/70 bg-white/45" />
        <div className="absolute right-1.5 top-[-6px] h-4 w-4 rounded-full border border-white/70 bg-white/45" />
        <div className={`absolute left-[19px] ${eyeOffset} h-1.5 w-1.5 rounded-full bg-[#4c3627]`} />
        <div className={`absolute right-[19px] ${eyeOffset} h-1.5 w-1.5 rounded-full bg-[#4c3627]`} />
        <div className="absolute left-1/2 top-[35px] h-2 w-4 -translate-x-1/2 rounded-b-full border-b-2 border-[#4c3627]" />
        <div className={`absolute left-[15px] ${cheekOffset} h-2.5 w-3.5 rounded-full bg-white/35`} />
        <div className={`absolute right-[15px] ${cheekOffset} h-2.5 w-3.5 rounded-full bg-white/35`} />
      </div>
      {!compact ? (
        <div className="mt-3 rounded-full bg-white/78 px-3 py-1 font-mono text-xs uppercase tracking-[0.12em] text-text-secondary">
          {active ? "watching" : "helper"}
        </div>
      ) : null}
    </div>
  );
}

export function AgentArena({ staticMode = false }: { staticMode?: boolean }) {
  const { activeAgent, loopState, setActiveAgent, stations } = useAgentState();
  const prefersReducedMotion = useReducedMotion();
  const selectedAgent = agentById[activeAgent];
  const selectedLoop = loopState.find((entry) => entry.agentId === activeAgent) ?? loopState[0];
  const stationAssignments = stations.map((station) => ({
    ...station,
    assigned: loopState.filter((entry) => entry.stationId === station.id)
  }));

  return (
    <div className="grid gap-4">
      <div className="relative rounded-[2.25rem] border border-white/40 bg-white/28 p-3 shadow-[0_18px_50px_rgba(190,150,117,0.08)] backdrop-blur-[2px] sm:p-4">
        <div className="mb-4 flex items-end justify-between gap-4 px-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted">Live playmat</p>
            <h3 className="mt-2 max-w-xl font-display text-2xl text-text-primary sm:text-[2rem]">
              Tiny helpers moving between ideas, builds, tests, and handoffs
            </h3>
          </div>
          <div className="hidden rounded-full bg-white/72 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-text-secondary md:block">
            {prefersReducedMotion || staticMode ? "gentle mode" : "live loops on"}
          </div>
        </div>

        <div className="pixel-stage relative hidden min-h-[620px] overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,253,250,0.88),rgba(255,244,234,0.92))] md:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,220,197,0.7),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(205,232,255,0.55),transparent_24%)]" />
          <div className="absolute inset-x-[11%] top-[15%] h-[67%] rounded-[48%] border border-dashed border-[rgba(160,133,111,0.16)]" />
          <div className="absolute left-[18%] top-[27%] h-[17%] w-[30%] rounded-[999px] border border-dashed border-[rgba(160,133,111,0.12)]" />
          <div className="absolute left-[45%] top-[29%] h-[34%] w-[26%] rounded-[999px] border border-dashed border-[rgba(160,133,111,0.12)]" />
          <div className="absolute left-[28%] top-[56%] h-[18%] w-[42%] rounded-[999px] border border-dashed border-[rgba(160,133,111,0.12)]" />

          {stationAssignments.map((station) => (
            <div
              key={station.id}
              className="absolute w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-[1.7rem] p-4 shadow-[0_12px_28px_rgba(186,141,107,0.08)]"
              style={{ left: `${station.x}%`, top: `${station.y}%`, backgroundColor: station.color }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-text-muted">{station.label}</p>
              <p className="mt-2 text-sm leading-6 text-text-secondary">{station.detail}</p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">
                {station.assigned.length} helper{station.assigned.length > 1 ? "s" : ""} here
              </p>
            </div>
          ))}

          {loopState.map((entry, index) => {
            const agent = agentById[entry.agentId];
            const station = getStation(entry.stationId);
            const isActive = agent.id === activeAgent;

            return (
              <motion.button
                key={agent.id}
                aria-label={`Select ${agent.name}`}
                aria-pressed={isActive}
                animate={{
                  left: `${station.x}%`,
                  top: `${station.y + 12}%`,
                  scale: isActive ? 1.06 : 1
                }}
                className="focus-ring absolute -translate-x-1/2 -translate-y-1/2 text-left"
                onClick={() => setActiveAgent(agent.id)}
                transition={staticMode || prefersReducedMotion ? { duration: 0 } : { duration: 1.1, ease: "easeInOut" }}
                type="button"
              >
                <motion.div
                  animate={staticMode || prefersReducedMotion ? { y: 0 } : { y: [0, -5, 0] }}
                  transition={{
                    duration: 1.8 + index * 0.15,
                    ease: "easeInOut",
                    repeat: staticMode || prefersReducedMotion ? 0 : Infinity
                  }}
                >
                  <div className="absolute left-1/2 top-[58px] h-5 w-12 -translate-x-1/2 rounded-full bg-[#d7bca8]/35 blur-sm" />
                  <Mascot active={isActive} agent={agent} />
                  <div className="mt-3 min-w-[172px] rounded-[1.25rem] bg-white/76 px-3 py-3 shadow-[0_10px_20px_rgba(186,141,107,0.09)]">
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-text-muted">{phaseLabel[entry.phase]}</p>
                    <p className="mt-1 text-sm text-text-secondary">{entry.task}</p>
                  </div>
                </motion.div>
              </motion.button>
            );
          })}

          <div className="absolute right-5 top-5 max-w-[280px] rounded-[1.7rem] bg-white/80 p-4 shadow-[0_16px_30px_rgba(186,141,107,0.12)] backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Mascot active compact agent={selectedAgent} />
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-text-muted">Currently watched</p>
                <p className="mt-1 font-display text-xl text-text-primary">{selectedAgent.name}</p>
                <p className="text-sm text-text-secondary">{selectedAgent.className}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-text-secondary">
              {selectedAgent.name} is {phaseLabel[selectedLoop.phase]} {selectedLoop.task.toLowerCase()}.
            </p>
            <div className="mt-3 rounded-[1rem] bg-[color:var(--surface-2)] px-3 py-3 text-sm text-text-secondary">
              {selectedAgent.voiceLine}
            </div>
          </div>
        </div>

        <div className="grid gap-3 md:hidden">
          <div className="rounded-[1.6rem] bg-white/78 p-4 shadow-[0_12px_24px_rgba(186,141,107,0.08)]">
            <div className="flex items-center gap-3">
              <Mascot active compact agent={selectedAgent} />
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-text-muted">Watching now</p>
                <p className="mt-1 font-display text-xl text-text-primary">{selectedAgent.name}</p>
                <p className="text-sm text-text-secondary">{selectedLoop.task}</p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-text-secondary">{selectedAgent.voiceLine}</p>
          </div>

          <div className="relative overflow-hidden rounded-[1.8rem] bg-[linear-gradient(180deg,rgba(255,253,250,0.9),rgba(255,244,234,0.96))] px-4 pb-4 pt-5 shadow-[0_14px_30px_rgba(186,141,107,0.08)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,220,197,0.6),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(205,232,255,0.5),transparent_28%)]" />
            <div className="relative mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-text-muted">Compact scene</p>
                <p className="mt-1 text-sm leading-6 text-text-secondary">
                  The workshop stays visible, but the extra helper stack moves below the fold.
                </p>
              </div>
              <div className="rounded-full bg-white/72 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-text-secondary">
                {prefersReducedMotion || staticMode ? "gentle" : "live"}
              </div>
            </div>
            <div className="relative grid gap-3">
              {stationAssignments.map((station) => {
                const isSelectedStop = station.id === selectedLoop.stationId;

                return (
                  <button
                    key={station.id}
                    className="focus-ring relative flex items-center justify-between rounded-[1.35rem] px-3 py-3 text-left"
                    onClick={() => setActiveAgent(station.assigned[0]?.agentId ?? selectedAgent.id)}
                    style={{
                      backgroundColor: isSelectedStop ? station.color : "rgba(255,255,255,0.58)",
                      boxShadow: isSelectedStop ? "0 12px 24px rgba(186,141,107,0.08)" : "none"
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
            {loopState.map((entry) => {
              const agent = agentById[entry.agentId];
              const isActive = agent.id === activeAgent;

              return (
                <button
                  key={agent.id}
                  aria-pressed={isActive}
                  className="focus-ring rounded-full bg-white/70 px-3 py-2 text-left shadow-[0_8px_18px_rgba(186,141,107,0.05)]"
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
