"use client";

import { motion, useReducedMotion } from "framer-motion";

import { experience } from "@/lib/constants";

export function ExperienceSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="zone-shell relative" id="experience">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-text-muted">Shipping Log</p>
            <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight text-text-primary sm:text-6xl">
              Experience is presented as shipped capability, not a dead resume shelf.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-text-secondary">
            The focus is on systems that were delivered, instrumented, and made usable. Titles matter less than how
            the product, model, and runtime actually held together.
          </p>
        </div>

        <div className="relative ml-3 border-l border-dashed border-white/12 pl-8 lg:ml-20 lg:pl-12">
          {experience.map((item, index) => (
            <motion.article
              key={item.title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={
                prefersReducedMotion ? { duration: 0 } : { duration: 0.65, ease: "easeOut", delay: index * 0.06 }
              }
              className="relative mb-6 command-panel rounded-[2rem] p-6"
            >
              <span className="absolute -left-[2.6rem] top-8 h-4 w-4 rounded-full border border-white/15 bg-[color:var(--curator-blue)] shadow-[0_0_24px_rgba(119,214,255,0.6)] lg:-left-[3.2rem]" />
              <div className="grid gap-4 lg:grid-cols-[140px_1fr] lg:items-start">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">{item.year}</p>
                <div>
                  <h3 className="font-display text-3xl text-text-primary">{item.title}</h3>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-text-secondary">{item.summary}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
