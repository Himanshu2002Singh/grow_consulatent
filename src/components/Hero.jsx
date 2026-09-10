import React from 'react';
import { Link } from 'react-router-dom';
import { VALUE_BOXES, COMPANY_INFO } from '../data/content';

const ASSURANCES = [
  ['Not a lender', 'Independent facilitator only'],
  ['Success-based', 'Fee on receipt of funds'],
  ['Protected', 'Exclusivity as standard'],
];

export default function Hero({ onOpenContact }) {
  return (
    <section className="pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div className="container-page text-center">
        <p className="eyebrow eyebrow-rule">
          <span>Specialised Financial Structuring</span>
        </p>

        <h1 className="mx-auto mt-7 max-w-4xl font-serif text-4xl font-bold leading-[1.12] tracking-tight text-navy-800 sm:text-5xl lg:text-6xl">
          Structured capital for hospitality, F&amp;B and live entertainment.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-stone-500 sm:text-lg">
          We help restaurants, bars, lounges, multi-outlet groups and performing
          artists unlock advances and revenue-discounting facilities linked to
          leading ticketing platforms.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button type="button" onClick={onOpenContact} className="btn-primary w-full sm:w-auto">
            Talk to Us
          </button>
          <Link to="/what-we-do" className="btn-ghost w-full sm:w-auto">
            Explore Our Services
          </Link>
        </div>

        <ul className="mt-12 flex flex-col items-center justify-center divide-y divide-ivory-400 sm:flex-row sm:divide-x sm:divide-y-0">
          {ASSURANCES.map(([title, detail]) => (
            <li key={title} className="w-full px-8 py-4 sm:w-auto sm:py-0">
              <p className="font-serif text-base font-bold text-navy-800">{title}</p>
              <p className="mt-0.5 text-xs text-stone-500">{detail}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="container-page mt-16 sm:mt-20">
        <div className="grid gap-8 sm:grid-cols-3 sm:gap-10">
          {VALUE_BOXES.map((box, index) => (
            <div key={box.id} className="border-t-2 border-gold-500 pt-5">
              <p className="font-serif text-base font-bold text-gold-500">
                {['I', 'II', 'III'][index]}
              </p>
              <h2 className="mt-2 font-sans text-lg font-bold leading-snug text-navy-800">
                {box.title}
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-stone-500">
                {box.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-3xl border-l-2 border-gold-300 pl-5 text-center font-serif text-lg italic leading-relaxed text-navy-700 sm:text-xl">
          {COMPANY_INFO.shortIntro}
        </p>
      </div>
    </section>
  );
}
