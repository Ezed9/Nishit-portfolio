import { agents, type AgentDefinition, type AgentId } from "@/lib/agents";

export type Station = {
  id: string;
  label: string;
  detail: string;
  color: string;
  x: number;
  y: number;
};

export type LoopPhase = "walking" | "making" | "sharing";

export type AgentLoopState = {
  agentId: AgentId;
  stationId: string;
  stationIndex: number;
  phase: LoopPhase;
  task: string;
  note: string;
};

export const stations: Station[] = [
  { id: "ideas", label: "Idea Desk", detail: "collects fresh prompts", color: "#ffe1d6", x: 18, y: 20 },
  { id: "build", label: "Build Nook", detail: "turns plans into demos", color: "#ffe9be", x: 48, y: 18 },
  { id: "library", label: "Memory Shelf", detail: "sorts context and notes", color: "#dff1ff", x: 76, y: 34 },
  { id: "test", label: "Test Corner", detail: "checks flows and edges", color: "#e9e0ff", x: 28, y: 68 },
  { id: "dock", label: "Ship Dock", detail: "packages the final handoff", color: "#dbf3e8", x: 70, y: 74 }
];

export const routes: Record<AgentId, string[]> = {
  forge: ["ideas", "build", "test", "dock"],
  synth: ["ideas", "build", "library", "dock"],
  curator: ["library", "ideas", "test", "library"],
  link: ["dock", "ideas", "library", "dock"]
};

export const phaseCycle: LoopPhase[] = ["walking", "making", "sharing"];

export const phaseLabel: Record<LoopPhase, string> = {
  walking: "walking over",
  making: "working on",
  sharing: "handing off"
};

export const agentById = Object.fromEntries(agents.map((agent) => [agent.id, agent])) as Record<AgentId, AgentDefinition>;

export function getStation(stationId: string) {
  return stations.find((station) => station.id === stationId) ?? stations[0];
}

export function createInitialLoopState(agent: AgentDefinition, index: number): AgentLoopState {
  const route = routes[agent.id];
  const stationIndex = index % route.length;

  return {
    agentId: agent.id,
    stationId: route[stationIndex],
    stationIndex,
    phase: phaseCycle[index % phaseCycle.length],
    task: agent.tasks[index % agent.tasks.length],
    note: `${agent.name} is warming up ${agent.tasks[index % agent.tasks.length].toLowerCase()}`
  };
}

export function nextLoopState(entry: AgentLoopState): AgentLoopState {
  const agent = agentById[entry.agentId];
  const route = routes[entry.agentId];
  const nextStationIndex = (entry.stationIndex + 1) % route.length;
  const nextPhase = phaseCycle[(phaseCycle.indexOf(entry.phase) + 1) % phaseCycle.length];
  const nextTask = agent.tasks[nextStationIndex % agent.tasks.length];
  const nextStation = getStation(route[nextStationIndex]);

  return {
    agentId: entry.agentId,
    stationId: nextStation.id,
    stationIndex: nextStationIndex,
    phase: nextPhase,
    task: nextTask,
    note: `${agent.name} is ${phaseLabel[nextPhase]} ${nextTask.toLowerCase()} at ${nextStation.label}`
  };
}
