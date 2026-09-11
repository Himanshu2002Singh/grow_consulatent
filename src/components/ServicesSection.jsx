import React from 'react';
import { ArrowUpRight, Handshake, LineChart, ShieldCheck, Waypoints } from 'lucide-react';
import { SERVICES, MANDATORY_DISCLAIMER } from '../data/content';

const SERVICE_ICONS = [Waypoints, Handshake, ShieldCheck, LineChart];

export default function ServicesSection({ onOpenContact }) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="grid overflow-hidden border border-ivory-300 bg-ivory-100 lg:grid-cols-2">
          <figure className="relative min-h-[20rem] lg:min-h-full">
            <img
              src="/images/bar-lounge.webp"
              alt="Illustrative premium hospitality venue during service"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,23,17,0.92),rgba(6,23,17,0.08)_70%)]" />
            <figcaption className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-300">
                Specialist, not generic
              </p>
              <p className="mt-3 max-w-md font-serif text-2xl font-semibold leading-tight text-ivory-50 sm:text-3xl">
                Advisory built for places and performances that create real footfall.
              </p>
            </figcaption>
          </figure>

          <div className="p-7 sm:p-10 lg:p-12">
            <p className="eyebrow">What we facilitate</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.08] text-navy-800 sm:text-4xl">
              A practical bridge between revenue and the right platform conversation.
            </h2>
            <p className="mt-5 text-base leading-7 text-stone-500">
              Our work is intentionally focused: understand the operating model,
              prepare a credible opportunity, and support a considered commercial
              process with relevant third-party platforms.
            </p>
            <div className="mt-8 border-l-2 border-gold-400 pl-5 text-sm leading-6 text-navy-700">
              We act as an independent consultant and facilitator. Any facility,
              approval and final commercial term remains a third-party decision.
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[index];
            return (
              <article
                key={service.id}
                className="group relative overflow-hidden border border-ivory-300 bg-ivory-50 p-7 shadow-paper transition-transform duration-300 hover:-translate-y-1 hover:shadow-paper-lg sm:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-300 bg-ivory-100 text-gold-600">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <p className="font-serif text-lg font-semibold text-gold-500">{service.num}</p>
                </div>
                <h2 className="mt-7 font-serif text-2xl font-semibold leading-tight text-navy-800">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-stone-500">{service.description}</p>
                <ul className="mt-6 grid gap-2.5 border-t border-ivory-300 pt-5 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-xs leading-5 text-navy-700">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 transition-colors hover:text-gold-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
                >
                  Discuss this requirement
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </article>
            );
          })}
        </div>

        <aside className="relative mt-12 overflow-hidden border-l-2 border-gold-500 bg-forest-950 px-6 py-7 text-ivory-50 sm:px-8 sm:py-9">
          <div aria-hidden="true" className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_right,rgba(196,166,89,0.18),transparent_70%)]" />
          <div className="relative max-w-4xl">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-300">
              {MANDATORY_DISCLAIMER.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-ivory-100/85">{MANDATORY_DISCLAIMER.text}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
