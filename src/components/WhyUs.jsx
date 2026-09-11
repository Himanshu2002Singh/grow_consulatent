import React from 'react';
import { BadgeCheck, Handshake, Landmark, Scale, ShieldCheck, Target } from 'lucide-react';
import { WHY_US_POINTS } from '../data/content';

const POINT_ICONS = [Target, Landmark, Scale, BadgeCheck, ShieldCheck, Handshake];

export default function WhyUs() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="grid items-stretch overflow-hidden border border-ivory-300 bg-forest-950 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 text-ivory-50 sm:p-12">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-300">
              <span className="h-px w-8 bg-gold-300" aria-hidden="true" />
              The Grow difference
            </p>
            <h2 className="mt-5 max-w-xl font-serif text-3xl font-semibold leading-[1.08] sm:text-4xl">
              Sector specificity gives every capital conversation more context.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-ivory-100/80">
              We focus on how hospitality operators and live performers actually
              generate revenue. That lets us prepare a clear, limited and commercially
              grounded advisory engagement.
            </p>
            <p className="mt-8 border-l-2 border-gold-400 pl-5 text-sm leading-6 text-ivory-100/70">
              No lending, no management rights, and no guarantee of a third-party
              outcome - just considered structuring and facilitation.
            </p>
          </div>
          <figure className="relative min-h-[20rem] overflow-hidden lg:min-h-full">
            <img
              src="/images/why-strategy.webp"
              alt="Illustrative strategy discussion"
              className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
              loading="lazy"
              decoding="async"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-l from-transparent to-forest-950/30" />
            <figcaption className="absolute inset-x-0 bottom-0 p-7 text-xs leading-5 text-ivory-100/70">
              Illustrative strategy environment
            </figcaption>
          </figure>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US_POINTS.map((point, index) => {
            const Icon = POINT_ICONS[index];
            return (
              <article key={point.title} className="group border border-ivory-300 bg-ivory-50 p-6 shadow-paper transition-transform duration-300 hover:-translate-y-1 hover:shadow-paper-lg sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-300 bg-ivory-100 text-gold-600">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span className="font-serif text-lg font-semibold text-gold-500">0{index + 1}</span>
                </div>
                <h2 className="mt-6 font-serif text-2xl font-semibold leading-snug text-navy-800">
                  {point.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-stone-500">{point.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
