import React from 'react';
import { PLATFORMS } from '../data/content';

/**
 * Continuous logo marquee.
 *
 * The track holds the platform list twice and slides left by exactly 50% of its
 * own width, so the second copy lands where the first began and the loop is
 * seamless. Hovering pauses it; `prefers-reduced-motion` stops it outright
 * (handled in index.css), which leaves the first copy legible and static.
 */
function PlatformItem({ platform }) {
  // Brand file missing — keep the row rhythm with a monogram tile.
  if (!platform.logo) {
    return (
      <>
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-navy-800 font-serif text-lg font-bold text-ivory-50 sm:h-12 sm:w-12"
        >
          {platform.name.charAt(0)}
        </span>
        <span className="font-serif text-xl font-semibold text-navy-800">
          {platform.name}
        </span>
      </>
    );
  }

  // The artwork already carries the brand name — show it on its own.
  if (platform.wordmark) {
    return (
      <img
        src={platform.logo}
        alt={platform.name}
        className="h-10 w-auto shrink-0 object-contain sm:h-12"
        loading="lazy"
      />
    );
  }

  // Glyph-only mark: pair it with the platform name.
  return (
    <>
      <img
        src={platform.logo}
        alt=""
        aria-hidden="true"
        className="h-9 w-9 shrink-0 object-contain sm:h-11 sm:w-11"
        loading="lazy"
      />
      <span className="font-serif text-xl font-semibold text-navy-800">
        {platform.name}
      </span>
    </>
  );
}

function Track({ ariaHidden }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-14 pr-14 sm:gap-20 sm:pr-20"
      aria-hidden={ariaHidden || undefined}
    >
      {PLATFORMS.map((platform) => (
        <li key={platform.name} className="flex items-center gap-3 whitespace-nowrap">
          <PlatformItem platform={platform} />
        </li>
      ))}
    </ul>
  );
}

export default function PlatformTicker() {
  return (
    <section className="border-y border-ivory-400 bg-ivory-200 py-12 sm:py-14">
      <div className="container-page">
        <p className="eyebrow text-center">Platforms We Facilitate Funding Through</p>
      </div>

      <div className="marquee-mask group mt-7 overflow-hidden">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          <Track />
          {/* Duplicate copy: the seam the animation loops across. */}
          <Track ariaHidden />
        </div>
      </div>

      <div className="container-page">
        <p className="mt-7 text-center text-xs leading-relaxed text-stone-400">
          Illustrative examples of third-party ticketing and distribution platforms.
          Named platforms are not exclusive partners of Grow Consultants.
        </p>
      </div>
    </section>
  );
}
