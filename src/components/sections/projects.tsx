import { SectionAgentStrip } from "@/components/agents/section-agent-strip";
import { projects } from "@/lib/constants";

export function ProjectsSection() {
  return (
    <section className="border-y border-[color:var(--panel-border)] bg-white/32" id="projects">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <SectionAgentStrip agentId="synth" title="Project storyteller" />
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mt-8 font-mono text-sm uppercase tracking-[0.16em] text-text-muted">
              Projects / Synth + Curator
            </p>
            <h2 className="mt-4 font-display text-4xl text-text-primary">Projects surfaced by agents, not dropped into a plain grid.</h2>
          </div>
          <div className="soft-chip rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-text-secondary">
            live sorting soon
          </div>
        </div>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="grid gap-5 rounded-[2rem] bg-white/48 px-6 py-6 shadow-[0_12px_24px_rgba(186,141,107,0.05)] lg:grid-cols-[120px_1fr_auto]"
            >
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-text-muted">Shelf {index + 1}</div>
              <div>
                <h3 className="font-display text-2xl text-text-primary">{project.name}</h3>
                <p className="mt-3 max-w-2xl leading-7 text-text-secondary">{project.summary}</p>
              </div>
              <div className="flex flex-wrap gap-2 lg:justify-end">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[color:var(--surface-2)] px-3 py-1 text-xs text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
