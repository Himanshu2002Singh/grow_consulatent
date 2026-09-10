import React from 'react';

/**
 * Centred page masthead used by every route except Home, which has its own hero.
 */
export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <section className="border-b border-ivory-400 bg-ivory-200 pb-14 pt-32 sm:pb-16 sm:pt-36">
      <div className="container-page text-center">
        {eyebrow && (
          <p className="eyebrow eyebrow-rule">
            <span>{eyebrow}</span>
          </p>
        )}
        <h1 className="mx-auto mt-5 max-w-3xl font-serif text-3xl font-bold leading-tight tracking-tight text-navy-800 sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-stone-500">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
