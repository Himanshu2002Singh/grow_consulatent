import React from 'react';
import { WHY_US_POINTS } from '../data/content';

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'];

export default function WhyUs() {
  return (
    <section className="section">
      <div className="container-page grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_US_POINTS.map((point, index) => (
          <div key={point.title} className="border-t-2 border-gold-500 pt-5">
            <p className="font-serif text-base font-bold text-gold-500">{ROMAN[index]}</p>
            <h2 className="mt-2 font-sans text-lg font-bold leading-snug text-navy-800">
              {point.title}
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-stone-500">{point.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
