import { agents } from "@/lib/agents";

export const siteConfig = {
  name: "Nishit",
  title: "Agent Systems Engineer",
  location: "India",
  intro:
    "A portfolio staged as an agent operating world, where four specialists plan, retrieve, build, validate, and ship intelligent products together.",
  ctas: [
    { label: "Open Mission Board", href: "#projects" },
    { label: "Enter Dispatch", href: "#contact" }
  ]
};

export const projects = [
  {
    name: "AgentKit",
    summary: "Multi-agent orchestration toolkit for retrieval, tool execution, evaluation, and trace inspection.",
    tags: ["Agents", "RAG", "Python"],
    owner: "forge",
    status: "Building live orchestration patterns",
    impact: "Turns agent coordination from demo logic into a debuggable production loop."
  },
  {
    name: "VisionOps",
    summary: "Computer vision deployment stack with model monitoring, alerting, and rapid rollback hooks.",
    tags: ["MLOps", "Vision", "FastAPI"],
    owner: "link",
    status: "Shipping resilient delivery rails",
    impact: "Connects model behavior to release confidence, rollback paths, and runtime health."
  },
  {
    name: "SynthSearch",
    summary: "Hybrid semantic search with generated previews, retrieval scoring, and adaptive ranking for technical content.",
    tags: ["Search", "LLMs", "TypeScript"],
    owner: "curator",
    status: "Expanding context quality",
    impact: "Improves how the right answer is found, ranked, and explained under real constraints."
  },
  {
    name: "SignalCanvas",
    summary: "Interactive storytelling surface for AI products with motion-led system explainers and guided state changes.",
    tags: ["Frontend", "Motion", "Next.js"],
    owner: "synth",
    status: "Translating systems into readable product stories",
    impact: "Makes complex pipelines legible to users, stakeholders, and collaborators."
  }
];

export const experience = [
  {
    year: "Now",
    title: "Agent-native product builder",
    summary: "Shipping AI experiences that make planning, retrieval, generation, and delivery visible instead of mysterious."
  },
  {
    year: "Recent",
    title: "Retrieval and evaluation systems",
    summary: "Building ranking, context assembly, and validation layers that hold up beyond a demo prompt."
  },
  {
    year: "Earlier",
    title: "ML deployment and product instrumentation",
    summary: "Connecting model outputs to monitoring, rollback, observability, and the product decisions around them."
  }
];

export const activityFeed = [
  "FORGE is hardening the project architecture",
  "SYNTH is shaping product language for each mission",
  "CURATOR is re-ranking the strongest technical proof",
  "LINK is preparing dispatch paths for the next collaboration"
];

export const proofPoints = [
  {
    label: "Runtime",
    value: "4 agents",
    detail: "Planning, storytelling, retrieval, delivery"
  },
  {
    label: "Focus",
    value: "AI systems",
    detail: "Products that connect model quality to product outcomes"
  },
  {
    label: "Bias",
    value: "Ship fast",
    detail: "Usable systems over decorative prototypes"
  }
];

export const systemZones = [
  {
    name: "Build Bay",
    lead: "FORGE",
    detail: "Where rough ideas become structured interfaces, working loops, and production-ready surfaces."
  },
  {
    name: "Story Lab",
    lead: "SYNTH",
    detail: "Where technical complexity gets translated into product language that people can scan and trust."
  },
  {
    name: "Archive Rail",
    lead: "CURATOR",
    detail: "Where projects, evidence, and context are ranked so the strongest signal appears first."
  },
  {
    name: "Dispatch Terminal",
    lead: "LINK",
    detail: "Where outputs leave the system through APIs, releases, contact paths, and live integrations."
  }
];

export const dispatchLinks = [
  {
    label: "Email",
    value: "nishitbaishya9@gmail.com",
    href: "mailto:nishitbaishya9@gmail.com"
  },
  {
    label: "GitHub",
    value: "github.com/Ezed9",
    href: "https://github.com/Ezed9"
  },
  {
    label: "Base",
    value: "India · async-friendly",
    href: ""
  }
];

export const defaultActiveAgent = agents[0].id;
