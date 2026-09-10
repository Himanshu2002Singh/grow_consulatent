import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/content';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="section border-t border-ivory-400">
      <div className="container-page max-w-3xl">
        <div className="text-center">
          <p className="eyebrow eyebrow-rule">
            <span>Frequently Asked Questions</span>
          </p>
          <h2 className="mt-5 font-serif text-2xl font-bold tracking-tight text-navy-800 sm:text-3xl">
            Common Questions &amp; Clarifications
          </h2>
        </div>

        <dl className="mt-10 divide-y divide-ivory-400 border-y border-ivory-400">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={faq.q}>
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="font-sans text-base font-bold text-navy-800">
                      {faq.q}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 text-gold-500 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </dt>
                {isOpen && (
                  <dd className="pb-6 pr-10 text-sm leading-relaxed text-stone-500">
                    {faq.a}
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
