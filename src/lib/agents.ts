export type AgentId = "forge" | "synth" | "curator" | "link";

export type AgentDefinition = {
  id: AgentId;
  name: string;
  className: string;
  temperament: string;
  role: string;
  tagline: string;
  voiceLine: string;
  accent: string;
  glow: string;
  description: string;
  stats: Array<{
    label: string;
    value: number;
  }>;
  tasks: string[];
  position: [number, number, number];
};

export const agents: AgentDefinition[] = [
  {
    id: "forge",
    name: "FORGE",
    className: "Frontline Builder",
    temperament: "Relentless",
    role: "Model Training",
    tagline: "I build foundations.",
    voiceLine: "Give me raw material and I will turn it into a working system.",
    accent: "var(--forge-orange)",
    glow: "shadow-forge",
    description: "Turns raw inputs into production-ready systems, structure, and reliable execution.",
    stats: [
      { label: "Power", value: 92 },
      { label: "Defense", value: 86 },
      { label: "Speed", value: 58 }
    ],
    tasks: ["Build project cards", "Generate skill graphs", "Compile resume"],
    position: [-2.8, 1.1, 0]
  },
  {
    id: "synth",
    name: "SYNTH",
    className: "Spellcrafter",
    temperament: "Expressive",
    role: "Content Generation",
    tagline: "I create signal from noise.",
    voiceLine: "I turn outlines and fragments into something people actually want to read.",
    accent: "var(--synth-purple)",
    glow: "shadow-synth",
    description: "Shapes project storytelling, summaries, and the live writing feel across the site.",
    stats: [
      { label: "Power", value: 78 },
      { label: "Defense", value: 60 },
      { label: "Speed", value: 94 }
    ],
    tasks: ["Write project descriptions", "Summarize on demand", "Generate greetings"],
    position: [-0.9, 1.9, 0.6]
  },
  {
    id: "curator",
    name: "CURATOR",
    className: "Archivist Tactician",
    temperament: "Clinical",
    role: "Knowledge + RAG",
    tagline: "I organize the system.",
    voiceLine: "Nothing stays lost for long once I have indexed the field.",
    accent: "var(--curator-blue)",
    glow: "shadow-curator",
    description: "Owns search, structure, ranking, and the way information gets surfaced to a visitor.",
    stats: [
      { label: "Power", value: 74 },
      { label: "Defense", value: 82 },
      { label: "Speed", value: 88 }
    ],
    tasks: ["Search projects", "Reorder content", "Recommend related work"],
    position: [1.2, 1.25, 0]
  },
  {
    id: "link",
    name: "LINK",
    className: "Network Runner",
    temperament: "Adaptive",
    role: "Integrations + APIs",
    tagline: "I connect everything live.",
    voiceLine: "If it emits a signal, I can route it into the workshop.",
    accent: "var(--link-green)",
    glow: "shadow-link",
    description: "Fetches live external signals, status, delivery, and system connectivity.",
    stats: [
      { label: "Power", value: 69 },
      { label: "Defense", value: 73 },
      { label: "Speed", value: 97 }
    ],
    tasks: ["Fetch GitHub stats", "Deliver contact form", "Pull social activity"],
    position: [3.1, 1.85, -0.4]
  }
];
