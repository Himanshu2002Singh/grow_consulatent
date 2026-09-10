import React, { useId, useState } from 'react';

// Indicative only: platforms typically size an advance at roughly 1.5x–3.5x
// the monthly platform run-rate. Nothing here is an offer or an approval.
const MIN_MULTIPLE = 1.5;
const MAX_MULTIPLE = 3.5;
const MIN_VOLUME = 5;
const MAX_VOLUME = 150;

const formatLakhs = (value) =>
  value >= 100 ? `₹${(value / 100).toFixed(2).replace(/\.00$/, '')} Cr` : `₹${value}L`;

export default function FundingCalculator({ onOpenContact }) {
  const [profileType, setProfileType] = useState('hospitality');
  const [monthlyVolume, setMonthlyVolume] = useState(25);
  const sliderId = useId();

  const minFacility = Math.round(monthlyVolume * MIN_MULTIPLE);
  const maxFacility = Math.round(monthlyVolume * MAX_MULTIPLE);

  return (
    <section className="border-t border-ivory-400 bg-ivory-200 py-16 sm:py-20">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-6 lg:col-span-7">
          <div>
            <p className="eyebrow">Indicative Facility Estimation</p>
            <h2 className="mt-3 font-serif text-2xl font-bold leading-tight text-navy-800 sm:text-3xl">
              Assess your platform financing potential
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone-500">
              A rough sense of the liquidity range that platform discounting
              facilities tend to support, based on your monthly run-rate.
            </p>
          </div>

          <fieldset>
            <legend className="eyebrow">1. Select your category</legend>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                ['hospitality', 'F&B / Hospitality Venue'],
                ['artist', 'Artist / Live Talent'],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={profileType === value}
                  onClick={() => setProfileType(value)}
                  className={`rounded-sm border px-4 py-3 text-sm font-semibold transition-colors ${
                    profileType === value
                      ? 'border-gold-500 bg-ivory-50 text-navy-800'
                      : 'border-ivory-400 text-stone-500 hover:border-gold-300 hover:text-navy-800'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </fieldset>

          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <label htmlFor={sliderId} className="eyebrow">
                {profileType === 'hospitality'
                  ? '2. Avg. monthly platform dining / table gross'
                  : '2. Avg. monthly ticketed show gross'}
              </label>
              <output htmlFor={sliderId} className="font-serif text-xl font-bold text-navy-800">
                {formatLakhs(monthlyVolume)} / mo
              </output>
            </div>
            <input
              id={sliderId}
              type="range"
              min={MIN_VOLUME}
              max={MAX_VOLUME}
              step="5"
              value={monthlyVolume}
              onChange={(e) => setMonthlyVolume(Number(e.target.value))}
              className="mt-4 w-full accent-gold-500"
            />
            <div className="mt-1.5 flex justify-between text-xs text-stone-400">
              <span>{formatLakhs(MIN_VOLUME)}</span>
              <span>{formatLakhs(MAX_VOLUME)}</span>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="border border-ivory-400 bg-ivory-50 p-7 sm:p-8">
            <p className="eyebrow">Estimated Indicative Facility</p>
            <p className="mt-3 font-serif text-3xl font-bold text-navy-800 sm:text-4xl">
              {formatLakhs(minFacility)} – {formatLakhs(maxFacility)}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-stone-500">
              Indicative advance against platform receivables and upcoming dates.
            </p>

            <ul className="mt-6 divide-y divide-ivory-300 border-y border-ivory-300 text-sm">
              {[
                'No dilution of equity or management control',
                'Settled via platform revenue deductions',
                'Facilitation fee payable on actual fund receipt',
              ].map((point) => (
                <li key={point} className="py-3 text-navy-700">
                  {point}
                </li>
              ))}
            </ul>

            <button type="button" onClick={onOpenContact} className="btn-primary mt-6 w-full">
              Discuss This Facility
            </button>

            <p className="mt-4 text-xs leading-relaxed text-stone-400">
              Illustrative estimate only. Not an offer of credit, a quotation, or
              an approval. Any facility is subject to third-party platform
              assessment, underwriting and terms.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
