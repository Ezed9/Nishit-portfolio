import { agents } from "@/lib/agents";

export const siteConfig = {
  name: "Nishit",
  title: "AI/ML Engineer",
  location: "India",
  intro:
    "A portfolio staged as an AI workshop, where four agents show how I design, ship, and connect intelligent systems.",
  ctas: [
    { label: "Explore Projects", href: "#projects" },
    { label: "Open Contact", href: "#contact" }
  ]
};

export const projects = [
  {
    name: "AgentKit",
    summary: "Multi-agent orchestration toolkit for retrieval, tool execution, and trace inspection.",
    tags: ["Agents", "RAG", "Python"]
  },
  {
    name: "VisionOps",
    summary: "Computer vision deployment stack with model monitoring and rapid rollback hooks.",
    tags: ["MLOps", "Vision", "FastAPI"]
  },
  {
    name: "SynthSearch",
    summary: "Hybrid semantic search with generated previews and adaptive ranking for technical content.",
    tags: ["Search", "LLMs", "TypeScript"]
  }
];

export const experience = [
  "Shipping AI products with a strong bias toward usable systems, not demos.",
  "Building retrieval, evaluation, and orchestration layers that can stand up in production.",
  "Connecting model behavior to product thinking, instrumentation, and delivery."
];

export const activityFeed = [
  "LINK fetched live portfolio status",
  "FORGE assembled the workshop shell",
  "SYNTH drafted project summaries",
  "CURATOR organized the project shelves"
];

export const defaultActiveAgent = agents[0].id;
