import { projects } from "@/lib/constants";

export function ProjectsSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02]" id="projects">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.35em] text-text-muted">
              Projects / Synth + Curator
            </p>
            <h2 className="mt-4 font-display text-4xl text-text-primary">A first shelf of projects for the workshop.</h2>
          </div>
          <div className="rounded-full border border-white/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.25em] text-text-secondary">
            Filter + search wiring next
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="rounded-[2rem] border border-white/10 bg-base-secondary p-6">
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-text-muted">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-2xl text-text-primary">{project.name}</h3>
              <p className="mt-4 leading-7 text-text-secondary">{project.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
