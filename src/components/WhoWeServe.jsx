import React, { useId, useState } from 'react';
import { ArrowUpRight, Building2, Mic2 } from 'lucide-react';
import { CLIENT_CATEGORIES } from '../data/content';

const CATEGORY_VISUALS = {
  hospitality: {
    image: '/images/who-venue.webp',
    alt: 'Illustrative hospitality venue in service',
    caption: 'For high-footfall hospitality businesses',
    icon: Building2,
  },
  artists: {
    image: '/images/stage-performance.webp',
    alt: 'Illustrative live musician performing to an audience',
    caption: 'For ticketed live entertainment',
    icon: Mic2,
  },
};

export default function WhoWeServe({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState(CLIENT_CATEGORIES[0].id);
  const baseId = useId();
  const selected =
    CLIENT_CATEGORIES.find((category) => category.id === activeTab) || CLIENT_CATEGORIES[0];
  const visual = CATEGORY_VISUALS[selected.id];
  const VisualIcon = visual.icon;

  return (
    <section className="section">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow eyebrow-rule"><span>Two distinct operating realities</span></p>
          <p className="mt-4 text-base leading-7 text-stone-500">
            Every opportunity begins with the commercial mechanics of the business,
            whether it is a venue with regular footfall or a tour with future dates.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Client categories"
          className="mt-10 grid overflow-hidden border border-ivory-300 bg-ivory-300 sm:grid-cols-2"
        >
          {CLIENT_CATEGORIES.map((category) => {
            const isActive = category.id === activeTab;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                id={`${baseId}-tab-${category.id}`}
                aria-selected={isActive}
                aria-controls={`${baseId}-panel-${category.id}`}
                onClick={() => setActiveTab(category.id)}
                className={`relative bg-ivory-50 px-5 py-5 text-left text-sm font-semibold transition-colors sm:px-7 sm:text-center ${
                  isActive
                    ? 'bg-forest-900 text-ivory-50'
                    : 'text-navy-800 hover:bg-ivory-200'
                }`}
              >
                <span className="block text-[10px] uppercase tracking-[0.2em] text-gold-500">
                  {isActive ? 'Selected profile' : 'Client profile'}
                </span>
                <span className="mt-1.5 block font-serif text-lg leading-tight">{category.title}</span>
                {isActive && <span aria-hidden="true" className="absolute inset-x-8 bottom-0 h-0.5 bg-gold-300" />}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`${baseId}-panel-${selected.id}`}
          aria-labelledby={`${baseId}-tab-${selected.id}`}
          className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-7">
            <p className="eyebrow">{selected.subtitle}</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.08] text-navy-800 sm:text-4xl">
              {selected.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-stone-500">{selected.description}</p>

            <div className="mt-8 border-t border-ivory-300 pt-6">
              <h3 className="eyebrow">Typical engagement profiles</h3>
              <ul className="mt-4 grid gap-x-7 gap-y-3 sm:grid-cols-2">
                {selected.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-6 text-navy-700">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button type="button" onClick={onOpenContact} className="btn group mt-9 bg-navy-800 text-ivory-50 hover:bg-forest-800">
              {selected.id === 'hospitality'
                ? 'Explore Financing for Your Venue'
                : 'Explore Financing for Your Tour'}
              <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>

          <aside className="lg:col-span-5">
            <figure className="relative min-h-[24rem] overflow-hidden shadow-paper-lg">
              <img
                src={visual.image}
                alt={visual.alt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-300/60 bg-forest-950/70 text-gold-300 backdrop-blur-sm">
                  <VisualIcon aria-hidden="true" className="h-5 w-5" />
                </div>
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-300">{visual.caption}</p>
                <p className="mt-2 font-serif text-xl leading-snug text-ivory-50">{selected.platformUse}</p>
              </figcaption>
            </figure>

            <div className="border border-t-0 border-ivory-300 bg-ivory-50 p-6">
              <h3 className="eyebrow">Facility application</h3>
              <dl className="mt-4 divide-y divide-ivory-300 border-y border-ivory-300 text-sm">
                {[
                  ['Target facility', selected.id === 'hospitality' ? 'Revenue Discounting' : 'Ticket Advance'],
                  ['Facilitation fee', 'Success-Based Only'],
                  ['Management rights', '100% Client Retained'],
                ].map(([term, value]) => (
                  <div key={term} className="flex justify-between gap-4 py-3">
                    <dt className="text-stone-500">{term}</dt>
                    <dd className="text-right font-semibold text-navy-800">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
