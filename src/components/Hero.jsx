import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BadgeCheck, Handshake, ShieldCheck } from 'lucide-react';
import { VALUE_BOXES, COMPANY_INFO } from '../data/content';

const ASSURANCES = [
  {
    title: 'Independent advisory',
    detail: 'We facilitate; we do not lend.',
    icon: ShieldCheck,
  },
  {
    title: 'Success-based',
    detail: 'Fee on actual receipt of funds.',
    icon: BadgeCheck,
  },
  {
    title: 'Commercially protected',
    detail: 'Exclusivity as standard.',
    icon: Handshake,
  },
];

export default function Hero({ onOpenContact }) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-950 pb-12 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36">
      <img
        src="/images/hero-advisory.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center] sm:object-center"
        fetchPriority="high"
        decoding="async"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,23,17,0.98)_0%,rgba(6,23,17,0.94)_35%,rgba(6,23,17,0.7)_57%,rgba(6,23,17,0.3)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_16%_84%,rgba(196,166,89,0.2),transparent_43%)]"
      />

      <div className="container-page relative z-10">
        <div className="grid items-end gap-10 lg:min-h-[26rem] lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-300 sm:text-[11px]">
              <span className="h-px w-8 bg-gold-300" aria-hidden="true" />
              Specialised financial structuring
            </p>

            <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.04] tracking-tight text-ivory-50 sm:text-5xl lg:text-6xl">
              Structured capital for hospitality, F&amp;B and live entertainment.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-ivory-100/85 sm:text-lg sm:leading-8">
              We help restaurants, bars, lounges, multi-outlet groups and performing
              artists unlock advances and revenue-discounting facilities linked to
              leading ticketing platforms.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onOpenContact}
                className="btn group bg-gold-400 px-6 text-navy-950 hover:bg-gold-300"
              >
                Talk to Us
                <ArrowUpRight size={17} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
              <Link
                to="/what-we-do"
                className="btn border border-ivory-50/70 bg-ivory-50/5 px-6 text-ivory-50 backdrop-blur-sm hover:border-gold-300 hover:bg-ivory-50/10 hover:text-gold-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          <aside className="hidden justify-self-end lg:block lg:max-w-sm">
            <div className="border border-ivory-50/20 bg-[#07140f]/80 p-7 shadow-[0_24px_60px_rgba(0,0,0,0.3)] backdrop-blur-md">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-300">
                A focused mandate
              </p>
              <h2 className="mt-4 font-serif text-2xl font-semibold leading-tight text-ivory-50">
                Capital aligned with the rhythm of your business.
              </h2>
              <p className="mt-4 text-sm leading-6 text-ivory-100/75">
                From booking flows to upcoming shows, we help turn proven revenue
                signals into well-structured conversations with relevant platforms.
              </p>
              <div className="mt-6 border-t border-ivory-50/15 pt-5 text-xs leading-5 text-ivory-100/60">
                Visuals are illustrative. Platform eligibility and terms remain
                subject to third-party assessment.
              </div>
            </div>
          </aside>
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden border border-ivory-50/20 bg-ivory-50/15 sm:grid-cols-3 lg:mt-16">
          {ASSURANCES.map(({ title, detail, icon: Icon }) => (
            <li key={title} className="flex gap-3 bg-[#0a2018]/90 px-5 py-5 backdrop-blur-sm sm:px-6">
              <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
              <div>
                <p className="text-sm font-semibold text-ivory-50">{title}</p>
                <p className="mt-1 text-xs leading-5 text-ivory-100/70">{detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="container-page relative z-10 mt-8 sm:mt-10">
        <div className="border border-ivory-300 bg-ivory-50/95 p-6 shadow-paper-lg backdrop-blur-sm sm:p-8">
          <div className="grid gap-7 md:grid-cols-3 md:gap-8">
            {VALUE_BOXES.map((box, index) => (
              <article key={box.id} className="border-l-2 border-gold-400 pl-4 sm:pl-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-600">
                  0{index + 1}
                </p>
                <h2 className="mt-2 font-serif text-xl font-semibold leading-snug text-navy-800">
                  {box.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-stone-500">{box.description}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-4xl border-t border-ivory-300 pt-6 text-center font-serif text-lg italic leading-relaxed text-navy-700 sm:text-xl">
            {COMPANY_INFO.shortIntro}
          </p>
        </div>
      </div>
    </section>
  );
}
