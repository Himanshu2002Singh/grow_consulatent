import React from 'react';
import { SERVICES, MANDATORY_DISCLAIMER } from '../data/content';

export default function ServicesSection({ onOpenContact }) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="divide-y divide-ivory-400 border-y border-ivory-400">
          {SERVICES.map((service) => (
            <article key={service.id} className="grid gap-5 py-9 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-4">
                <p className="font-serif text-base font-bold text-gold-500">{service.num}</p>
                <h2 className="mt-2 font-sans text-xl font-bold leading-snug text-navy-800">
                  {service.title}
                </h2>
              </div>

              <div className="space-y-4 md:col-span-8">
                <p className="text-base leading-relaxed text-stone-500">
                  {service.description}
                </p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2.5 text-sm leading-relaxed text-navy-700"
                    >
                      <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="text-sm font-semibold text-gold-600 underline-offset-4 transition-colors hover:text-navy-800 hover:underline"
                >
                  Discuss this requirement
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Required on the services page — see the client content brief. */}
        <aside className="mt-12 border-l-2 border-gold-500 bg-ivory-200 p-6 sm:p-8">
          <h2 className="eyebrow">{MANDATORY_DISCLAIMER.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-navy-700">
            {MANDATORY_DISCLAIMER.text}
          </p>
        </aside>
      </div>
    </section>
  );
}
