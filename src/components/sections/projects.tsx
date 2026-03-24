"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Mascot } from "@/components/agents/agent-arena";
import { useAgentState } from "@/components/providers/agent-provider";
import { type AgentId, agents } from "@/lib/agents";
import { projects } from "@/lib/constants";

const ownerLabel: Record<AgentId, string> = {
  forge: "Build lead",
  synth: "Story lead",
  curator: "Retrieval lead",
  link: "Delivery lead"
};

export function ProjectsSection() {
  const { activeAgent } = useAgentState();
  const selectedAgent = agents.find((agent) => agent.id === activeAgent) ?? agents[0];
  const prefersReducedMotion = useReducedMotion();
  const orderedProjects = [...projects].sort((a, b) => {
    if (a.owner === activeAgent && b.owner !== activeAgent) {
      return -1;
    }

    if (a.owner !== activeAgent && b.owner === activeAgent) {
      return 1;
    }

    return 0;
  });

  return (
    <section
      className="zone-shell relative bg-[linear-gradient(180deg,rgba(255,255,255,0.01),rgba(255,255,255,0.03),rgba(255,255,255,0.01))]"
      data-testid="mission-board"
      id="projects"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-text-muted">Mission Board</p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight text-text-primary sm:text-6xl">
              Work is surfaced as coordinated missions with visible owners and handoffs.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-text-secondary">
            The selected agent gets priority framing, but the whole roster still shows how projects move from build to
            delivery.
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-[0.78fr_1.22fr]">
          <motion.aside
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }}
            className="xl:sticky xl:top-10 xl:self-start"
          >
            <div
              className="command-panel rounded-[2.2rem] p-6"
              style={{ boxShadow: `0 24px 60px ${selectedAgent.accent}` }}
            >
              <div className="flex items-start gap-4">
                <Mascot active compact agent={selectedAgent} />
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">Focus agent</p>
                  <p className="mt-2 font-display text-3xl text-text-primary">{selectedAgent.name}</p>
                  <p className="mt-1 text-sm text-text-secondary">{selectedAgent.className}</p>
                </div>
              </div>

              <p className="mt-5 text-base leading-7 text-text-secondary">{selectedAgent.voiceLine}</p>

              <div className="mt-6 grid gap-3">
                {selectedAgent.tasks.map((task, index) => (
                  <div key={task} className="rounded-[1.3rem] border border-white/10 bg-white/5 px-4 py-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">
                      Capability 0{index + 1}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">{task}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>

          <div className="grid gap-4">
            {orderedProjects.map((project, index) => {
              const owner = agents.find((agent) => agent.id === project.owner) ?? selectedAgent;
              const isSelected = project.owner === activeAgent;

              return (
                <motion.article
                  key={project.name}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={
                    prefersReducedMotion ? { duration: 0 } : { duration: 0.65, ease: "easeOut", delay: index * 0.05 }
                  }
                  className="command-panel rounded-[2rem] p-6"
                  style={{
                    borderColor: isSelected ? owner.accent : "rgba(255,255,255,0.12)",
                    boxShadow: isSelected ? `0 24px 60px ${owner.accent}` : "0 24px 60px rgba(0,0,0,0.22)"
                  }}
                >
                  <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">
                          Mission 0{index + 1}
                        </span>
                        <span
                          className="rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em]"
                          style={{ borderColor: owner.accent, color: owner.accent }}
                        >
                          {ownerLabel[owner.id]}
                        </span>
                      </div>
                      <h3 className="mt-5 font-display text-3xl text-text-primary">{project.name}</h3>
                      <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary">{project.summary}</p>
                      <p className="mt-5 text-sm leading-6 text-text-secondary">{project.impact}</p>
                    </div>

                    <div className="grid gap-3">
                      <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
                        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">Runtime owner</p>
                        <div className="mt-3 flex items-center gap-3">
                          <Mascot active compact agent={owner} />
                          <div>
                            <p className="font-display text-xl text-text-primary">{owner.name}</p>
                            <p className="text-sm text-text-secondary">{owner.className}</p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
                        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">Current status</p>
                        <p className="mt-3 text-sm leading-6 text-text-secondary">{project.status}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.12em] text-text-secondary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
