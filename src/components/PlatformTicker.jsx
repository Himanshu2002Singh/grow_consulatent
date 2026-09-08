import React from 'react';
import { PLATFORMS } from '../data/content';
import { Ticket, ExternalLink, Layers } from 'lucide-react';

export default function PlatformTicker() {
  return (
    <section className="py-12 border-y border-slate-800/80 bg-slate-950/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-400 mb-1">
              <Layers className="w-3.5 h-3.5" />
              <span>Platform Ecosystem</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
              Representative Platforms We Facilitate With
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            *Platform names represent illustrative examples of third-party distribution & ticketing networks for which structured monetization and advance facilities are structured.
          </p>
        </div>

        {/* Platform Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
          {PLATFORMS.map((platform, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/80 hover:border-brand-500/40 rounded-xl p-3.5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <div>
                <span className="text-[10px] font-semibold text-brand-400 uppercase tracking-wider block mb-1">
                  {platform.tag}
                </span>
                <h3 className="font-heading font-bold text-sm text-slate-100 group-hover:text-white transition-colors">
                  {platform.name}
                </h3>
              </div>
              <p className="text-[11px] text-slate-500 mt-2 line-clamp-1">
                {platform.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
