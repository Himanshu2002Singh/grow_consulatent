import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, NAV_LINKS } from '../data/content';

export default function Footer() {
  const { registeredOffice: office } = COMPANY_INFO;

  return (
    <footer className="border-t border-ivory-400 bg-ivory-200">
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="space-y-4 md:col-span-5">
            <div>
              <p className="font-serif text-xl font-bold text-navy-800">
                {COMPANY_INFO.legalName}
              </p>
              <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-gold-500">
                Specialised Financial Structuring
              </p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-stone-500">
              {COMPANY_INFO.shortIntro}
            </p>
            <p className="max-w-sm border-l-2 border-gold-300 pl-4 text-xs leading-relaxed text-stone-500">
              Grow Consultants acts solely as an independent consultant and
              facilitator. We do not lend money, do not issue loans, and do not
              act as talent managers or booking agents.
            </p>
          </div>

          <nav className="space-y-3 md:col-span-3" aria-label="Footer">
            <h2 className="eyebrow">Navigation</h2>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-stone-500 transition-colors hover:text-gold-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3 md:col-span-4">
            <h2 className="eyebrow">Registered Office</h2>
            <address className="space-y-0.5 text-sm not-italic leading-relaxed text-stone-500">
              <p>{office.addressLine1}</p>
              <p>{office.area}</p>
              <p>{office.landmark}</p>
              <p className="font-semibold text-navy-800">{office.cityStateZip}</p>
            </address>
            <div className="space-y-1 pt-2 text-sm">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="block text-stone-500 transition-colors hover:text-gold-600"
              >
                {COMPANY_INFO.email}
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-stone-500 transition-colors hover:text-gold-600"
              >
                {COMPANY_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-ivory-400 pt-6">
          <p className="text-xs text-stone-400">
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.
            Registered under the Indian Partnership Act, 1932.
          </p>
        </div>
      </div>
    </footer>
  );
}
