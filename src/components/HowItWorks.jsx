import React from 'react';
import { BadgeCheck, FileCheck2, Handshake, SearchCheck, ShieldCheck, Waypoints } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/content';

const STEP_ICONS = [SearchCheck, Waypoints, Handshake, FileCheck2, BadgeCheck, ShieldCheck];

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="grid overflow-hidden border border-ivory-300 bg-ivory-100 lg:grid-cols-[0.92fr_1.08fr]">
          <figure className="relative min-h-[20rem] lg:min-h-full">
            <img
              src="/images/process-review.webp"
              alt="Illustrative commercial planning discussion"
              className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
              loading="lazy"
              decoding="async"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,23,17,0.94),rgba(6,23,17,0.06)_75%)]" />
            <figcaption className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-300">A transparent process</p>
              <p className="mt-3 font-serif text-2xl font-semibold leading-tight text-ivory-50">
                The aim is a well-prepared decision, not a rushed promise.
              </p>
            </figcaption>
          </figure>
          <div className="p-7 sm:p-10 lg:p-12">
            <p className="eyebrow">From first discussion to closing</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.08] text-navy-800 sm:text-4xl">
              A clear commercial sequence from start to finish.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-stone-500">
              Each phase helps establish fit, protect the introduction and keep the
              client fully informed before any third-party facility is considered.
            </p>
            <p className="mt-7 border-l-2 border-gold-400 pl-5 text-sm leading-6 text-navy-700">
              Grow Consultants supports coordination and structuring. Final approval,
              funding amount and commercial terms always rest with the relevant platform.
            </p>
          </div>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {HOW_IT_WORKS_STEPS.map((item, index) => {
            const Icon = STEP_ICONS[index];
            return (
              <li key={item.step} className="relative border border-ivory-300 bg-ivory-50 p-6 shadow-paper sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-300 bg-ivory-100 text-gold-600">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <p className="font-serif text-2xl font-semibold text-gold-500">0{item.step}</p>
                </div>
                <h2 className="mt-6 font-serif text-xl font-semibold leading-snug text-navy-800">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-stone-500">{item.desc}</p>
                {item.step === 5 && (
                  <p className="mt-5 inline-block border border-gold-400 bg-gold-300/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-600">
                    Success fee due only on actual receipt
                  </p>
                )}
              </li>
            );
          })}
        </ol>

        <aside className="mt-12 border-l-2 border-gold-500 bg-forest-950 px-6 py-7 sm:px-8 sm:py-9">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-300">
            Success-Based Fee Alignment
          </h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-ivory-100/85">
            Grow Consultants stays involved until the transaction is concluded. Our
            success fee is payable strictly upon actual receipt of funds by the client.
            We do not charge upfront retainers for platform facilitation.
          </p>
        </aside>
      </div>
    </section>
  );
}
