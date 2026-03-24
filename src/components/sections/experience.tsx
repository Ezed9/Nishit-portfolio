import { experience } from "@/lib/constants";

export function ExperienceSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10" id="experience">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.35em] text-text-muted">Experience / Link Domain</p>
          <h2 className="mt-4 font-display text-4xl text-text-primary">Signals, integrations, and execution history.</h2>
        </div>
        <div className="space-y-4">
          {experience.map((item, index) => (
            <div key={item} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-text-muted">0{index + 1}</p>
              <p className="text-lg leading-8 text-text-secondary">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
