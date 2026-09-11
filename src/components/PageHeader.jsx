import React from 'react';

/**
 * Image-led page masthead used by every route except Home, which has its own hero.
 */
const HERO_VARIANTS = {
  advisory: {
    imageClass: 'object-[62%_center] sm:object-center',
    overlayClass: 'bg-[linear-gradient(90deg,rgba(8,15,28,0.98)_0%,rgba(8,15,28,0.88)_42%,rgba(8,15,28,0.48)_72%,rgba(8,15,28,0.7)_100%)]',
  },
  hospitality: {
    imageClass: 'object-center',
    overlayClass: 'bg-[linear-gradient(90deg,rgba(7,20,15,0.98)_0%,rgba(7,20,15,0.86)_42%,rgba(7,20,15,0.45)_74%,rgba(7,20,15,0.64)_100%)]',
  },
  entertainment: {
    imageClass: 'object-[67%_28%] sm:object-[67%_28%]',
    overlayClass: 'bg-[linear-gradient(90deg,rgba(5,17,18,0.98)_0%,rgba(5,17,18,0.88)_46%,rgba(5,17,18,0.46)_73%,rgba(5,17,18,0.68)_100%)]',
  },
};

export default function PageHeader({
  eyebrow,
  title,
  intro,
  image,
  variant = 'advisory',
}) {
  const heroVariant = HERO_VARIANTS[variant] || HERO_VARIANTS.advisory;

  return (
    <section className="relative isolate min-h-[25rem] overflow-hidden border-b border-gold-400/50 bg-navy-950 pb-16 pt-32 sm:min-h-[28rem] sm:pb-20 sm:pt-36 lg:min-h-[31rem] lg:pb-24">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 -z-20 h-full w-full object-cover ${heroVariant.imageClass}`}
      />
      <div className={`absolute inset-0 -z-10 ${heroVariant.overlayClass}`} aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-10 h-24 border-b border-ivory-300/80 bg-ivory-50/95 shadow-sm backdrop-blur-sm"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-40 w-1/2 bg-[radial-gradient(ellipse_at_bottom_left,rgba(196,166,89,0.2),transparent_68%)]"
      />

      <div className="container-page relative z-20 flex min-h-[17rem] items-end sm:min-h-[20rem] lg:min-h-[22rem]">
        <div className="max-w-3xl text-left">
        {eyebrow && (
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-300 sm:text-[11px]">
            <span className="h-px w-8 bg-gold-300" aria-hidden="true" />
            <span>{eyebrow}</span>
          </p>
        )}
        <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.04] tracking-tight text-ivory-50 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-base leading-7 text-ivory-100/85 sm:text-lg">
            {intro}
          </p>
        )}
        </div>
      </div>
    </section>
  );
}
