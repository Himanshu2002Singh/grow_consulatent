import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/content';

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'];

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="container-page">
        <ol className="divide-y divide-ivory-400 border-y border-ivory-400">
          {HOW_IT_WORKS_STEPS.map((item, index) => (
            <li key={item.step} className="grid gap-4 py-8 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-3">
                <p className="font-serif text-base font-bold text-gold-500">
                  {ROMAN[index]}
                </p>
                <h2 className="mt-1.5 font-sans text-lg font-bold leading-snug text-navy-800">
                  {item.title}
                </h2>
                {item.step === 5 && (
                  <p className="mt-2 inline-block border border-gold-400 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold-600">
                    Success fee due
                  </p>
                )}
              </div>
              <p className="text-base leading-relaxed text-stone-500 md:col-span-9">
                {item.desc}
              </p>
            </li>
          ))}
        </ol>

        <aside className="mt-12 border-l-2 border-gold-500 bg-ivory-200 p-6 sm:p-8">
          <h2 className="eyebrow">Success-Based Fee Alignment</h2>
          <p className="mt-3 text-sm leading-relaxed text-navy-700">
            Grow Consultants stays involved until the transaction is concluded.
            Our success fee is payable strictly upon actual receipt of funds by
            the client. We do not charge upfront retainers for platform
            facilitation.
          </p>
        </aside>
      </div>
    </section>
  );
}
