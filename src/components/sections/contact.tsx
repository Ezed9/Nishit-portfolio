import { SectionAgentStrip } from "@/components/agents/section-agent-strip";
import { activityFeed } from "@/lib/constants";

export function ContactSection() {
  return (
    <section className="border-t border-[color:var(--panel-border)]" id="contact">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div className="lg:col-span-2">
          <SectionAgentStrip agentId="link" title="Delivery runner" />
        </div>
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.16em] text-text-muted">Contact / Ship dock</p>
          <h2 className="mt-4 font-display text-4xl text-text-primary">When the real agent runtime arrives, this becomes the delivery layer.</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-text-secondary">
            This pass makes the whole page agent-first. Next, your real agents can plug into this layer so the same UI
            surfaces actual jobs, outputs, handoffs, and delivery state.
          </p>
        </div>
        <div className="grid gap-4 rounded-[2rem] bg-white/48 p-6 shadow-[0_12px_24px_rgba(186,141,107,0.05)]">
          {activityFeed.map((entry) => (
            <div
              key={entry}
              className="rounded-2xl bg-[color:var(--surface-2)] px-4 py-3 font-mono text-sm text-text-secondary"
            >
              {entry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
