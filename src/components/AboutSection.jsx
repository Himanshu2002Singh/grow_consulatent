import React from 'react';
import { Building2, Scale, ShieldCheck } from 'lucide-react';
import { ABOUT_CONTENT, COMPANY_INFO } from '../data/content';

const SNAPSHOT = [
  {
    title: 'Independent advisory model',
    detail: 'Pure transaction facilitator and consultant; we do not lend capital directly.',
    icon: ShieldCheck,
  },
  {
    title: 'Delhi registered headquarters',
    detail: 'Lalita Park, Laxmi Nagar, Delhi - 110092.',
    icon: Building2,
  },
  {
    title: 'Commercial deal protection',
    detail: 'Formal exclusivity and non-circumvention protocols protect client introductions.',
    icon: Scale,
  },
];

export default function AboutSection() {
  return (
    <section className="section overflow-hidden">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <figure className="relative order-2 overflow-hidden shadow-paper-lg lg:order-1 lg:col-span-5">
            <img
              src="/images/strategy-meeting.webp"
              alt="Illustrative discussion between hospitality leaders"
              className="h-[25rem] w-full object-cover object-[72%_center] sm:h-[31rem]"
              loading="lazy"
              decoding="async"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 text-ivory-50 sm:p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-300">
                Built around operating realities
              </p>
              <p className="mt-2 max-w-sm font-serif text-xl leading-snug">
                The right capital conversation starts with a clear view of the business behind it.
              </p>
            </figcaption>
          </figure>

          <div className="order-1 space-y-6 lg:order-2 lg:col-span-7">
            <p className="eyebrow">The Grow Consultants perspective</p>
            <h2 className="font-serif text-3xl font-semibold leading-[1.08] tracking-tight text-navy-800 sm:text-4xl">
              {ABOUT_CONTENT.title}
            </h2>
            <div className="space-y-4 text-base leading-7 text-stone-500">
              <p className="text-navy-700">{ABOUT_CONTENT.p1}</p>
              <p>{ABOUT_CONTENT.p2}</p>
              <p>{ABOUT_CONTENT.p3}</p>
            </div>

            <blockquote className="border-l-2 border-gold-400 bg-ivory-200/75 px-5 py-5 sm:px-6">
              <p className="eyebrow">Our guiding principle</p>
              <p className="mt-2 font-serif text-lg italic leading-relaxed text-navy-800 sm:text-xl">
                {ABOUT_CONTENT.principle}
              </p>
            </blockquote>
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-ivory-300 bg-ivory-300 md:grid-cols-3">
          {SNAPSHOT.map(({ title, detail, icon: Icon }) => (
            <article key={title} className="bg-ivory-50 px-6 py-7 sm:px-7">
              <Icon aria-hidden="true" className="h-5 w-5 text-gold-500" />
              <h3 className="mt-5 font-serif text-xl font-semibold leading-snug text-navy-800">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-stone-500">{detail}</p>
            </article>
          ))}
        </div>

        <aside className="mt-10 border border-ivory-300 bg-ivory-100 p-6 sm:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="eyebrow">Firm overview</p>
              <p className="mt-2 font-serif text-2xl font-semibold text-navy-800">
                {COMPANY_INFO.legalName}
              </p>
              <p className="mt-1 text-sm text-stone-500">{COMPANY_INFO.legalStatus}</p>
            </div>
            <div className="border-l-2 border-gold-400 pl-5 md:max-w-xs">
              <p className="eyebrow">Partners</p>
              <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
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
