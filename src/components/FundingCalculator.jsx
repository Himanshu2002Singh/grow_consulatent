import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Sparkles, Building2, Mic2 } from 'lucide-react';

export default function FundingCalculator({ onOpenContact }) {
  const [profileType, setProfileType] = useState('hospitality');
  const [monthlyVolume, setMonthlyVolume] = useState(25); // in Lakhs
  const [timeHorizon, setTimeHorizon] = useState(6); // in Months

  // Estimated platform advance ratio ~ 2.5x to 4x monthly platform ticketed/dining volume
  const minFacility = Math.round(monthlyVolume * 1.5);
  const maxFacility = Math.round(monthlyVolume * 3.5);

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Configuration */}
            <div className="lg:col-span-7 space-y-6">
              <div className="glow-badge">
                <Calculator className="w-3.5 h-3.5" />
                <span>Interactive Facility Estimation</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
                Assess Your Platform Financing Potential
              </h2>

              <p className="text-xs sm:text-sm text-slate-300">
                Estimate the potential liquidity advance range accessible through structured platform discounting facilities based on your monthly run-rate.
              </p>

              {/* Profile Type Toggle */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  1. Select Your Category
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setProfileType('hospitality')}
                    className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                      profileType === 'hospitality'
                        ? 'bg-brand-600/20 border-brand-500 text-white'
                        : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Building2 className="w-4 h-4 text-brand-400" />
                    <span>F&B / Hospitality Venue</span>
                  </button>

                  <button
                    onClick={() => setProfileType('artist')}
                    className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                      profileType === 'artist'
                        ? 'bg-brand-600/20 border-brand-500 text-white'
                        : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Mic2 className="w-4 h-4 text-brand-400" />
                    <span>Artist / Live Talent</span>
                  </button>
                </div>
              </div>

              {/* Monthly Volume Slider */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="font-semibold text-slate-300">
                    {profileType === 'hospitality'
                      ? 'Avg. Monthly Platform Dining / Table Gross:'
                      : 'Avg. Monthly Ticketed Show Gross:'}
                  </span>
                  <span className="font-bold text-brand-400 text-base">
                    ₹{monthlyVolume} Lakhs / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  step="5"
                  value={monthlyVolume}
                  onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>₹5 Lakhs</span>
                  <span>₹75 Lakhs</span>
                  <span>₹1.5+ Crores</span>
                </div>
              </div>
            </div>

            {/* Right: Estimated Structured Facility Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-[#07152b] to-slate-950 p-6 sm:p-8 rounded-2xl border border-brand-500/30 shadow-glow-md relative">
              <span className="text-[11px] font-bold text-brand-400 uppercase tracking-widest block mb-1">
                Estimated Indicative Facility
              </span>

              <div className="my-4">
                <div className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
                  ₹{minFacility}L – ₹{maxFacility}L
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Indicative advance against platform receivables & upcoming dates.
                </p>
              </div>

              <div className="space-y-2.5 py-4 border-y border-slate-800/80 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>No Dilution of Equity or Management Control</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Settled via automated platform revenue deductions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Facilitation fee payable on actual fund receipt</span>
                </div>
              </div>

              <button
                onClick={onOpenContact}
                className="w-full mt-6 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 shadow-glow-sm flex items-center justify-center gap-2 transition-all"
              >
                <span>Structure This Facility</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-[10px] text-slate-500 block text-center mt-3">
                *Subject to third-party platform approval, underwriting & terms.
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
