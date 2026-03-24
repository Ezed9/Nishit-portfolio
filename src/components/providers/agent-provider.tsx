"use client";

import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useState
} from "react";

import { type AgentId } from "@/lib/agents";
import { defaultActiveAgent } from "@/lib/constants";

type AgentContextValue = {
  activeAgent: AgentId;
  setActiveAgent: Dispatch<SetStateAction<AgentId>>;
};

const AgentContext = createContext<AgentContextValue | null>(null);

export function AgentProvider({ children }: { children: ReactNode }) {
  const [activeAgent, setActiveAgent] = useState<AgentId>(defaultActiveAgent);
  return <AgentContext.Provider value={{ activeAgent, setActiveAgent }}>{children}</AgentContext.Provider>;
}

export function useAgentState() {
  const context = useContext(AgentContext);

  if (!context) {
    throw new Error("useAgentState must be used inside AgentProvider");
  }

  return context;
}
