import { SectionAgentStrip } from "@/components/agents/section-agent-strip";
import { agents } from "@/lib/agents";

export function AboutSection() {
  const forge = agents.find((agent) => agent.id === "forge");

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10" id="about">
      <SectionAgentStrip agentId="forge" title="About room helper" />
      <div className="mt-8 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.16em] text-text-muted">About / Build room</p>
          <h2 className="mt-4 font-display text-4xl text-text-primary">Built like a working system, still presented like a warm product.</h2>
        </div>
        <div className="rounded-[2rem] bg-white/52 p-8 shadow-[0_14px_30px_rgba(186,141,107,0.06)]">
          <p className="text-lg leading-8 text-text-secondary">
            {forge?.name} frames the portfolio as a live workshop: every section should feel intentionally assembled,
            easy to explore, and grounded in real AI/ML systems instead of generic portfolio filler.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {forge?.tasks.map((task) => (
              <div
                key={task}
                className="rounded-full bg-[color:var(--surface-2)] px-4 py-2 text-sm text-text-secondary"
              >
                {task}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
