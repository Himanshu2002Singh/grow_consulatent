import React from 'react';
import { CircleCheck, LockKeyhole, Scale } from 'lucide-react';
import { APPROACH_PILLARS } from '../data/content';

const PILLAR_ICONS = [CircleCheck, LockKeyhole, Scale];
const PILLAR_IMAGES = [
  '/images/scope-documents.webp',
  '/images/protected-handshake.webp',
  '/images/client-decision.webp',
];

export default function ApproachSection() {
  return (
    <section id="approach" className="border-t border-ivory-400 bg-ivory-200 py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <header className="mx-auto max-w-3xl text-center">
          <p className="eyebrow eyebrow-rule justify-center">
            <span>Governance &amp; engagement</span>
          </p>
          <h2 className="mt-5 font-serif text-3xl font-semibold tracking-tight text-navy-800 sm:text-4xl">
            Our approach &amp; principles
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-stone-500">
            Grow Consultants approaches every client relationship with three
            non-negotiable operational priorities.
          </p>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {APPROACH_PILLARS.map((pillar, index) => {
            const Icon = PILLAR_ICONS[index];
            return (
              <article
                key={pillar.title}
                className="group overflow-hidden border border-ivory-300 bg-ivory-50 shadow-paper transition-shadow hover:shadow-paper-lg"
              >
                <div className="relative h-56 overflow-hidden bg-forest-950 sm:h-64 lg:h-80">
                  <img
                    src={PILLAR_IMAGES[index]}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-forest-950/55 via-transparent to-transparent"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <Icon aria-hidden="true" className="h-5 w-5 text-gold-600" />
                    <span className="font-serif text-lg font-semibold text-gold-500">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-semibold leading-snug text-navy-800">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-stone-500">{pillar.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
