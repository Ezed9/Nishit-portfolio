import { SectionAgentStrip } from "@/components/agents/section-agent-strip";
import { experience } from "@/lib/constants";

export function ExperienceSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10" id="experience">
      <SectionAgentStrip agentId="curator" title="Experience archivist" />
      <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.16em] text-text-muted">Experience / Memory shelf</p>
          <h2 className="mt-4 font-display text-4xl text-text-primary">The work history is framed like completed missions and shipped systems.</h2>
        </div>
        <div className="space-y-4">
          {experience.map((item, index) => (
            <div
              key={item}
              className="grid gap-3 rounded-[1.75rem] bg-white/44 px-6 py-6 shadow-[0_12px_24px_rgba(186,141,107,0.05)] sm:grid-cols-[72px_1fr]"
            >
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted">0{index + 1}</p>
              <p className="text-lg leading-8 text-text-secondary">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
