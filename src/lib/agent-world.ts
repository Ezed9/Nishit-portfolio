import { agents, type AgentDefinition, type AgentId } from "@/lib/agents";

export type Station = {
  id: string;
  label: string;
  detail: string;
  color: string;
  x: number;
  y: number;
};

export type RunStatus = "queued" | "running" | "handoff" | "done" | "error";

export type RunStep = {
  id: string;
  stationId: string;
  title: string;
  detail: string;
  status: RunStatus;
};

export type AgentCapability = {
  id: string;
  agentId: AgentId;
  label: string;
  summary: string;
  route: string;
  inputExample: string;
  outputLabel: string;
};

export type AgentRun = {
  id: string;
  agentId: AgentId;
  capabilityId: string;
  status: RunStatus;
  summary: string;
  input: string;
  currentStepId: string;
  steps: RunStep[];
  result?: string;
  error?: string;
};

export const stations: Station[] = [
  { id: "ideas", label: "Intake Desk", detail: "shapes the first brief", color: "#ffe1d6", x: 16, y: 22 },
  { id: "build", label: "Forge Bay", detail: "turns direction into output", color: "#ffe9be", x: 44, y: 18 },
  { id: "library", label: "Context Rail", detail: "indexes evidence and memory", color: "#dff1ff", x: 76, y: 34 },
  { id: "test", label: "Review Pit", detail: "checks fit, quality, and edge cases", color: "#e9e0ff", x: 30, y: 70 },
  { id: "dock", label: "Dispatch Dock", detail: "packages the final handoff", color: "#dbf3e8", x: 72, y: 76 }
];

export const agentById = Object.fromEntries(agents.map((agent) => [agent.id, agent])) as Record<AgentId, AgentDefinition>;

export const capabilities: AgentCapability[] = [
  {
    id: "forge-project-card",
    agentId: "forge",
    label: "Project Card Generator",
    summary: "Converts structured project data into a presentation-ready mission card.",
    route: "/api/agents/forge/run",
    inputExample: "name, stack, status, impact",
    outputLabel: "card artifact"
  },
  {
    id: "synth-summary-styles",
    agentId: "synth",
    label: "Summary Style Rewriter",
    summary: "Rewrites the same project summary in multiple product voices.",
    route: "/api/agents/synth/run",
    inputExample: "project summary + target style",
    outputLabel: "styled summary set"
  },
  {
    id: "curator-project-search",
    agentId: "curator",
    label: "Local Project Search",
    summary: "Searches local project memory and ranks the strongest matching records.",
    route: "/api/agents/curator/run",
    inputExample: "keywords, tags, use case",
    outputLabel: "ranked search result"
  },
  {
    id: "link-profile-fetch",
    agentId: "link",
    label: "Profile Data Fetch",
    summary: "Fetches live GitHub and profile signals for downstream use.",
    route: "/api/agents/link/run",
    inputExample: "GitHub handle + profile sources",
    outputLabel: "live profile payload"
  }
];

export const capabilityByAgentId = Object.fromEntries(
  capabilities.map((capability) => [capability.agentId, capability])
) as Record<AgentId, AgentCapability>;

export const runStatusLabel: Record<RunStatus, string> = {
  queued: "queued",
  running: "running",
  handoff: "handoff",
  done: "done",
  error: "error"
};

export function getStation(stationId: string) {
  return stations.find((station) => station.id === stationId) ?? stations[0];
}

export function getRunStep(run: AgentRun) {
  return run.steps.find((step) => step.id === run.currentStepId) ?? run.steps[0];
}

export function getRunStation(run: AgentRun) {
  return getStation(getRunStep(run).stationId);
}

export function describeRun(run: AgentRun) {
  const agent = agentById[run.agentId];
  const step = getRunStep(run);
  const station = getStation(step.stationId);

  if (run.status === "error") {
    return `${agent.name} hit an error while ${step.title.toLowerCase()} at ${station.label}`;
  }

  if (run.status === "done") {
    return `${agent.name} completed ${step.title.toLowerCase()} and is ready to ship from ${station.label}`;
  }

  return `${agent.name} is ${runStatusLabel[run.status]} ${step.title.toLowerCase()} at ${station.label}`;
}

export function createSeedRuns(): AgentRun[] {
  return [
    {
      id: "run-forge-project-card",
      agentId: "forge",
      capabilityId: "forge-project-card",
      status: "running",
      summary: "Generating a project card from structured inputs for the mission board.",
      input: "{ name: 'AgentKit', stack: ['Agents', 'RAG', 'Python'], impact: 'Debuggable orchestration loop' }",
      currentStepId: "forge-build",
      result: "Card layout draft with title, stack chips, status line, and impact framing.",
      steps: [
        {
          id: "forge-intake",
          stationId: "ideas",
          title: "Brief accepted",
          detail: "Validated the structured payload and normalized the mission fields.",
          status: "done"
        },
        {
          id: "forge-build",
          stationId: "build",
          title: "Card compilation",
          detail: "Composing the display card, emphasis tokens, and artifact metadata.",
          status: "running"
        },
        {
          id: "forge-review",
          stationId: "test",
          title: "Artifact review",
          detail: "Quality checks will verify readability and structure before release.",
          status: "queued"
        },
        {
          id: "forge-ship",
          stationId: "dock",
          title: "Mission handoff",
          detail: "The final card will move into the visible project board.",
          status: "queued"
        }
      ]
    },
    {
      id: "run-synth-summary-styles",
      agentId: "synth",
      capabilityId: "synth-summary-styles",
      status: "handoff",
      summary: "Rewriting one project summary into concise, technical, and narrative variants.",
      input: "Rewrite SignalCanvas for founder, engineer, and recruiter audiences.",
      currentStepId: "synth-handoff",
      result: "Delivered three summary variants with tone tags and headline options.",
      steps: [
        {
          id: "synth-intake",
          stationId: "ideas",
          title: "Prompt framing",
          detail: "Mapped audience intent and narrative constraints for each rewrite.",
          status: "done"
        },
        {
          id: "synth-build",
          stationId: "build",
          title: "Variant drafting",
          detail: "Built multiple styles while preserving technical meaning.",
          status: "done"
        },
        {
          id: "synth-handoff",
          stationId: "library",
          title: "Style handoff",
          detail: "Passing the strongest variants into project memory for reuse.",
          status: "handoff"
        },
        {
          id: "synth-ship",
          stationId: "dock",
          title: "Surface publish",
          detail: "Next step will apply the selected variant into the UI.",
          status: "queued"
        }
      ]
    },
    {
      id: "run-curator-project-search",
      agentId: "curator",
      capabilityId: "curator-project-search",
      status: "queued",
      summary: "Preparing a local search across projects, tags, and supporting evidence.",
      input: "Find projects about retrieval, ranking, and evaluation.",
      currentStepId: "curator-queue",
      steps: [
        {
          id: "curator-queue",
          stationId: "library",
          title: "Search queued",
          detail: "Waiting for an explicit query execution event from the runtime.",
          status: "queued"
        },
        {
          id: "curator-plan",
          stationId: "ideas",
          title: "Query expansion",
          detail: "Will expand tags and synonyms before ranking matches.",
          status: "queued"
        },
        {
          id: "curator-review",
          stationId: "test",
          title: "Ranking review",
          detail: "Will score retrieval quality and supporting context.",
          status: "queued"
        }
      ]
    },
    {
      id: "run-link-profile-fetch",
      agentId: "link",
      capabilityId: "link-profile-fetch",
      status: "error",
      summary: "Fetching GitHub profile data and external identity signals.",
      input: "{ github: 'Ezed9', sources: ['GitHub', 'profile'] }",
      currentStepId: "link-fetch",
      error: "GitHub profile fetch returned a rate-limit response. Retry is waiting on a fresh token window.",
      steps: [
        {
          id: "link-intake",
          stationId: "dock",
          title: "Source request",
          detail: "Validated the requested external sources and response shape.",
          status: "done"
        },
        {
          id: "link-fetch",
          stationId: "ideas",
          title: "Remote fetch",
          detail: "GitHub request failed and needs a retry path or fallback cache.",
          status: "error"
        },
        {
          id: "link-merge",
          stationId: "library",
          title: "Signal merge",
          detail: "Would combine live profile fields into the site runtime.",
          status: "queued"
        }
      ]
    }
  ];
}
