import { agents } from "@/lib/agents";

export function AboutSection() {
  const forge = agents.find((agent) => agent.id === "forge");

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10" id="about">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.35em] text-text-muted">About / Forge Domain</p>
          <h2 className="mt-4 font-display text-4xl text-text-primary">Built like a working system, not a brochure.</h2>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="text-lg leading-8 text-text-secondary">
            {forge?.name} frames the portfolio as a workshop: every section should feel assembled with intent,
            instrumented for clarity, and grounded in real AI/ML work rather than generic portfolio filler.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {forge?.tasks.map((task) => (
              <div key={task} className="rounded-2xl border border-white/10 bg-base-secondary p-4 text-sm text-text-secondary">
                {task}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
