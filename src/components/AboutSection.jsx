import React from 'react';
import { ABOUT_CONTENT, COMPANY_INFO } from '../data/content';

const SNAPSHOT = [
  ['Independent Advisory Model', 'Pure transaction facilitator and consultant; we do not lend capital directly.'],
  ['Delhi Registered Headquarters', 'Lalita Park, Laxmi Nagar, Delhi – 110092.'],
  ['Commercial Deal Protection', 'Formal exclusivity and non-circumvention protocols protecting client introductions.'],
];

export default function AboutSection() {
  return (
    <section className="section">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-5 lg:col-span-7">
          <h2 className="font-serif text-2xl font-bold leading-tight tracking-tight text-navy-800 sm:text-3xl">
            {ABOUT_CONTENT.title}
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-stone-500">
            <p className="text-navy-700">{ABOUT_CONTENT.p1}</p>
            <p>{ABOUT_CONTENT.p2}</p>
            <p>{ABOUT_CONTENT.p3}</p>
          </div>

          <blockquote className="border-l-2 border-gold-400 pl-5 pt-1">
            <p className="eyebrow">Our Guiding Principle</p>
            <p className="mt-2 font-serif text-lg italic leading-relaxed text-navy-800">
              {ABOUT_CONTENT.principle}
            </p>
          </blockquote>
        </div>

        <aside className="lg:col-span-5">
          <div className="card space-y-6">
            <div className="border-b border-ivory-300 pb-5">
              <p className="eyebrow">Firm Overview</p>
              <p className="mt-2 font-serif text-xl font-bold text-navy-800">
                {COMPANY_INFO.legalName}
              </p>
              <p className="mt-1 text-xs text-stone-500">{COMPANY_INFO.legalStatus}</p>
            </div>

            <dl className="space-y-4">
              {SNAPSHOT.map(([term, detail]) => (
                <div key={term}>
                  <dt className="text-sm font-bold text-navy-800">{term}</dt>
                  <dd className="mt-0.5 text-sm leading-relaxed text-stone-500">{detail}</dd>
                </div>
              ))}
            </dl>

            <div className="border-t border-ivory-300 pt-5">
              <p className="eyebrow">Partners</p>
              <ul className="mt-2.5 space-y-1">
                {COMPANY_INFO.partners.map((partner) => (
                  <li key={partner.name} className="font-serif text-base text-navy-800">
                    {partner.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
