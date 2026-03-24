"use client";

import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useMemo,
  useState
} from "react";

import { type AgentId } from "@/lib/agents";
import { defaultActiveAgent } from "@/lib/constants";
import {
  createSeedRuns,
  describeRun,
  type AgentRun,
  type AgentCapability,
  type Station,
  capabilityByAgentId,
  stations
} from "@/lib/agent-world";

type AgentContextValue = {
  activeAgent: AgentId;
  capabilities: Record<AgentId, AgentCapability>;
  runs: AgentRun[];
  miniFeed: string[];
  stations: Station[];
  setActiveAgent: Dispatch<SetStateAction<AgentId>>;
};

const AgentContext = createContext<AgentContextValue | null>(null);

export function AgentProvider({ children }: { children: ReactNode }) {
  const [activeAgent, setActiveAgent] = useState<AgentId>(defaultActiveAgent);
  const [runs] = useState<AgentRun[]>(() => createSeedRuns());
  const miniFeed = useMemo(() => runs.map((run) => describeRun(run)).slice(0, 3), [runs]);

  return (
    <AgentContext.Provider value={{ activeAgent, capabilities: capabilityByAgentId, runs, miniFeed, setActiveAgent, stations }}>
      {children}
    </AgentContext.Provider>
  );
}

export function useAgentState() {
  const context = useContext(AgentContext);

  if (!context) {
    throw new Error("useAgentState must be used inside AgentProvider");
  }

  return context;
}
