export type AgentId = "forge" | "synth" | "curator" | "link";

export type AgentDefinition = {
  id: AgentId;
  name: string;
  role: string;
  tagline: string;
  accent: string;
  glow: string;
  description: string;
  tasks: string[];
  position: [number, number, number];
};

export const agents: AgentDefinition[] = [
  {
    id: "forge",
    name: "FORGE",
    role: "Model Training",
    tagline: "I build foundations.",
    accent: "var(--forge-orange)",
    glow: "shadow-forge",
    description: "Turns raw inputs into production-ready systems, structure, and reliable execution.",
    tasks: ["Build project cards", "Generate skill graphs", "Compile resume"],
    position: [-2.8, 1.1, 0]
  },
  {
    id: "synth",
    name: "SYNTH",
    role: "Content Generation",
    tagline: "I create signal from noise.",
    accent: "var(--synth-purple)",
    glow: "shadow-synth",
    description: "Shapes project storytelling, summaries, and the live writing feel across the site.",
    tasks: ["Write project descriptions", "Summarize on demand", "Generate greetings"],
    position: [-0.9, 1.9, 0.6]
  },
  {
    id: "curator",
    name: "CURATOR",
    role: "Knowledge + RAG",
    tagline: "I organize the system.",
    accent: "var(--curator-blue)",
    glow: "shadow-curator",
    description: "Owns search, structure, ranking, and the way information gets surfaced to a visitor.",
    tasks: ["Search projects", "Reorder content", "Recommend related work"],
    position: [1.2, 1.25, 0]
  },
  {
    id: "link",
    name: "LINK",
    role: "Integrations + APIs",
    tagline: "I connect everything live.",
    accent: "var(--link-green)",
    glow: "shadow-link",
    description: "Fetches live external signals, status, delivery, and system connectivity.",
    tasks: ["Fetch GitHub stats", "Deliver contact form", "Pull social activity"],
    position: [3.1, 1.85, -0.4]
  }
];
