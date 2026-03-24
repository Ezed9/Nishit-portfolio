"use client";

import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

import { agents, type AgentId } from "@/lib/agents";
import { defaultActiveAgent } from "@/lib/constants";
import { createInitialLoopState, nextLoopState, type AgentLoopState, type Station, stations } from "@/lib/agent-world";

type AgentContextValue = {
  activeAgent: AgentId;
  loopState: AgentLoopState[];
  miniFeed: string[];
  stations: Station[];
  setActiveAgent: Dispatch<SetStateAction<AgentId>>;
};

const AgentContext = createContext<AgentContextValue | null>(null);

export function AgentProvider({ children }: { children: ReactNode }) {
  const [activeAgent, setActiveAgent] = useState<AgentId>(defaultActiveAgent);
  const [loopState, setLoopState] = useState<AgentLoopState[]>(() =>
    agents.map((agent, index) => createInitialLoopState(agent, index))
  );
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setLoopState((current) => current.map(nextLoopState));
    }, 2400);

    return () => window.clearInterval(interval);
  }, [reducedMotion]);

  const miniFeed = useMemo(() => loopState.slice(0, 3).map((entry) => entry.note), [loopState]);

  return (
    <AgentContext.Provider value={{ activeAgent, loopState, miniFeed, setActiveAgent, stations }}>
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
