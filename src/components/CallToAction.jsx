import React from 'react';
import { Link } from 'react-router-dom';

/** Closing band reused at the foot of every content page. */
export default function CallToAction({ onOpenContact, image }) {
  return (
    <section className="relative isolate overflow-hidden border-y border-gold-500/25 bg-navy-950">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 z-0 bg-navy-950/70" aria-hidden="true" />
      <div
        className="absolute inset-0 z-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-950/70"
        aria-hidden="true"
      />

      <div className="container-page relative z-10 py-20 text-center sm:py-24">
        <h2 className="mx-auto max-w-2xl font-serif text-2xl font-bold leading-snug text-ivory-50 sm:text-3xl">
          Ready to explore structured funding through ticketing platforms?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ivory-300">
          Speak directly with our partners about your venue, your tour, or an
          existing platform arrangement.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onOpenContact}
            className="btn w-full bg-gold-500 text-navy-900 hover:bg-gold-400 sm:w-auto"
          >
            Talk to Us
          </button>
          <Link
            to="/contact"
            className="btn w-full border border-navy-600 text-ivory-50 hover:border-gold-400 hover:text-gold-300 sm:w-auto"
          >
            Contact the Office
          </Link>
        </div>
      </div>
    </section>
  );
}
