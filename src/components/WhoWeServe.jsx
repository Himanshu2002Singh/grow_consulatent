import React, { useId, useState } from 'react';
import { CLIENT_CATEGORIES } from '../data/content';

export default function WhoWeServe({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState(CLIENT_CATEGORIES[0].id);
  const baseId = useId();
  const selected =
    CLIENT_CATEGORIES.find((c) => c.id === activeTab) || CLIENT_CATEGORIES[0];

  return (
    <section className="section">
      <div className="container-page">
        <div role="tablist" aria-label="Client categories" className="flex flex-col border-b border-ivory-400 sm:flex-row">
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
                className={`-mb-px border-b-2 px-1 py-4 text-left text-sm font-semibold transition-colors sm:px-6 sm:text-center ${
                  isActive
                    ? 'border-gold-500 text-navy-800'
                    : 'border-transparent text-stone-500 hover:text-navy-800'
                }`}
              >
                {category.title}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`${baseId}-panel-${selected.id}`}
          aria-labelledby={`${baseId}-tab-${selected.id}`}
          className="grid gap-10 pt-10 lg:grid-cols-12 lg:gap-16"
        >
          <div className="space-y-5 lg:col-span-7">
            <p className="eyebrow">{selected.subtitle}</p>
            <h2 className="font-serif text-2xl font-bold leading-tight text-navy-800 sm:text-3xl">
              {selected.title}
            </h2>
            <p className="text-base leading-relaxed text-stone-500">
              {selected.description}
            </p>

            <div className="pt-2">
              <h3 className="eyebrow">Typical Engagement Profiles</h3>
              <ul className="mt-3 space-y-2.5">
                {selected.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-navy-700">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button type="button" onClick={onOpenContact} className="btn-primary mt-2">
              {selected.id === 'hospitality'
                ? 'Explore Financing for Your Venue'
                : 'Explore Financing for Your Tour'}
            </button>
          </div>

          <aside className="lg:col-span-5">
            <div className="card">
              <h3 className="eyebrow">Facility Application</h3>
              <p className="mt-3 font-serif text-lg leading-relaxed text-navy-800">
                {selected.platformUse}
              </p>
              <dl className="mt-6 divide-y divide-ivory-300 border-t border-ivory-300 text-sm">
                {[
                  ['Target Facility', selected.id === 'hospitality' ? 'Revenue Discounting' : 'Ticket Advance'],
                  ['Facilitation Fee', 'Success-Based Only'],
                  ['Management Rights', '100% Client Retained'],
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
