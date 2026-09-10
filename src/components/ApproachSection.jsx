import React from 'react';
import { APPROACH_PILLARS } from '../data/content';

export default function ApproachSection() {
  return (
    <section className="border-t border-ivory-400 bg-ivory-200 py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <div className="text-center">
          <p className="eyebrow eyebrow-rule">
            <span>Governance &amp; Engagement</span>
          </p>
          <h2 className="mt-5 font-serif text-2xl font-bold tracking-tight text-navy-800 sm:text-3xl">
            Our Approach &amp; Principles
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-stone-500">
            Grow Consultants approaches every client relationship with three
            non-negotiable operational priorities.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {APPROACH_PILLARS.map((pillar, index) => (
            <div key={pillar.title} className="border-t-2 border-gold-500 pt-5">
              <p className="font-serif text-base font-bold text-gold-500">
                {['I', 'II', 'III'][index]}
              </p>
              <h3 className="mt-2 font-sans text-lg font-bold leading-snug text-navy-800">
                {pillar.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-stone-500">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
