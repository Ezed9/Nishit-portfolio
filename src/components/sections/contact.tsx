import { activityFeed } from "@/lib/constants";

export function ContactSection() {
  return (
    <section className="border-t border-white/10" id="contact">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.35em] text-text-muted">Contact / Agent Activity</p>
          <h2 className="mt-4 font-display text-4xl text-text-primary">The delivery layer comes next.</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-text-secondary">
            This first pass sets up the contact section, activity feed, and agent framing. Form delivery and live
            external data are the next functional milestone.
          </p>
        </div>
        <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-base-secondary p-6">
          {activityFeed.map((entry) => (
            <div key={entry} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm text-text-secondary">
              {entry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
