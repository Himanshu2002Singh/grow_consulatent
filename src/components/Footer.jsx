import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../data/content';

export default function Footer() {
  const { registeredOffice: office } = COMPANY_INFO;

  return (
    <footer id="site-footer" className="relative isolate overflow-hidden border-t border-gold-400/50 bg-[#07140f] text-ivory-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_5%,rgba(196,166,89,0.16),transparent_26%),radial-gradient(circle_at_92%_42%,rgba(34,56,92,0.6),transparent_34%),linear-gradient(135deg,#07140f_0%,#0e1a2e_53%,#07110d_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent opacity-80"
      />

      <div className="container-page py-14 sm:py-16 lg:py-20">
        <div className="mb-12 flex flex-col gap-6 border-b border-ivory-100/15 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-300">
              <span className="h-px w-8 bg-gold-400" />
              Independent advisory. Clear commercial outcomes.
            </p>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-ivory-50 sm:text-4xl">
              Built for the businesses that bring people together.
            </h2>
          </div>
          <Link
            to="/contact"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-gold-300/70 bg-gold-400 px-5 py-3 text-sm font-semibold text-navy-950 transition-colors hover:border-gold-300 hover:bg-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300"
          >
            Start a conversation
            <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid gap-12 md:grid-cols-12 md:gap-8 lg:gap-12">
          <section className="space-y-5 md:col-span-5" aria-label="About Grow Consultants">
            <div className="relative w-fit rounded-sm border border-gold-500/80 bg-[#d9d4ca] px-3 pb-3 pt-1 shadow-[0_10px_26px_rgba(0,0,0,0.22)]">
              <img
                src="/brand/grow-consultants-lockup-transparent.webp"
                alt="Grow Consultants"
                className="relative h-auto w-[15rem] max-w-full object-contain drop-shadow-[0_4px_14px_rgba(0,0,0,0.3)] sm:w-[18rem]"
              />
            </div>
            <div>
              <p className="font-serif text-2xl font-semibold leading-tight text-ivory-50 sm:text-[1.65rem]">
                {COMPANY_INFO.legalName}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
                Specialised Financial Structuring
              </p>
            </div>
            <p className="max-w-md text-sm leading-7 text-ivory-100/75">
              {COMPANY_INFO.shortIntro}
            </p>
            <p className="max-w-md border-l-2 border-gold-400 pl-4 text-xs leading-6 text-ivory-100/70">
              Grow Consultants acts solely as an independent consultant and
              facilitator. We do not lend money, do not issue loans, and do not
              act as talent managers or booking agents.
            </p>
          </section>

          <nav className="md:col-span-3" aria-label="Footer">
            <h2 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-300">
              Navigation
            </h2>
            <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2 md:grid-cols-1">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-ivory-100/75 transition-colors hover:text-ivory-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300"
                  >
                    <span className="h-px w-0 bg-gold-300 transition-all group-hover:w-3" aria-hidden="true" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section className="md:col-span-4" aria-labelledby="office-heading">
            <h2 id="office-heading" className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-300">
              Registered Office
            </h2>
            <address className="space-y-1 text-sm not-italic leading-6 text-ivory-100/75">
              <p className="flex items-start gap-2.5">
                <MapPin size={16} aria-hidden="true" className="mt-1 shrink-0 text-gold-300" />
                <span>
                  {office.addressLine1}<br />
                  {office.area}<br />
                  {office.landmark}<br />
                  <span className="font-semibold text-ivory-50">{office.cityStateZip}</span>
                </span>
              </p>
            </address>
            <div className="mt-5 space-y-3 text-sm">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="group flex items-center gap-2.5 text-ivory-100/75 transition-colors hover:text-ivory-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300"
              >
                <Mail size={16} aria-hidden="true" className="shrink-0 text-gold-300" />
                <span className="border-b border-transparent group-hover:border-gold-300">{COMPANY_INFO.email}</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 text-ivory-100/75 transition-colors hover:text-ivory-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300"
              >
                <MessageCircle size={16} aria-hidden="true" className="shrink-0 text-gold-300" />
                <span className="border-b border-transparent group-hover:border-gold-300">{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </section>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ivory-100/15 pt-6 text-xs leading-relaxed text-ivory-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.
            Registered under the Indian Partnership Act, 1932.
          </p>
          <p className="font-medium uppercase tracking-[0.16em] text-gold-300/85">
            Delhi · India
          </p>
        </div>
      </div>
    </footer>
  );
}
