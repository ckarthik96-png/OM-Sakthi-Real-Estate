'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import LuxuryPropertyCard from '@/components/LuxuryPropertyCard';
import PropertyComparisonModal from '@/components/PropertyComparisonModal';
import { SEO_LOCATIONS, MOCK_PROPERTIES, LocationSEO } from '@/data/mockData';
import { MapPin, Building2, Sparkles, Filter, ChevronRight, CheckCircle2, Phone } from 'lucide-react';

interface LocationClientProps {
  location: LocationSEO;
}

export default function LocationDetailClient({ location }: LocationClientProps) {
  // Filter properties matching this location (or fallback to matching slug / location name)
  const locationProperties = MOCK_PROPERTIES.filter(
    p => p.localitySlug === location.slug || p.location.toLowerCase().includes(location.name.toLowerCase())
  );

  // If fewer than 6, append default properties so user always sees 5-6 rich items like Prestige Group
  const displayProperties = locationProperties.length >= 5 
    ? locationProperties 
    : [...locationProperties, ...MOCK_PROPERTIES.slice(0, 6 - locationProperties.length)];

  return (
    <div className="min-h-screen bg-[#FAFAFB] flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Prestige-Style Hero Banner for Location */}
        <section className="relative bg-[#0F172A] text-white py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30">
            <img 
              src={location.image} 
              alt={location.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link href="/locations" className="hover:underline">Locations</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-white">{location.name}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>Sarjapur Micro-Market Portfolio</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Properties in <span className="gold-gradient-text">{location.name}</span>, Bengaluru
            </h1>

            <p className="text-slate-300 text-sm sm:text-base max-w-3xl font-light leading-relaxed mb-8">
              {location.overview}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl pt-6 border-t border-white/10 text-center sm:text-left">
              <div>
                <span className="text-xs text-slate-400 block uppercase font-bold">Avg. Property Price</span>
                <span className="text-lg font-extrabold text-[#D4AF37]">{location.avgPricePerSqFt}</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 block uppercase font-bold">Verified Projects</span>
                <span className="text-lg font-extrabold text-white">{displayProperties.length}+ Listed</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 block uppercase font-bold">RERA Clearance</span>
                <span className="text-lg font-extrabold text-emerald-400">100% Legal</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 block uppercase font-bold">Local Office</span>
                <span className="text-lg font-extrabold text-white">Muthanallur HQ</span>
              </div>
            </div>
          </div>
        </section>

        {/* Location Selector Pills Bar (Prestige Group Style) */}
        <section className="bg-white border-b border-slate-200 sticky top-[73px] z-40 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar text-xs font-bold">
              <span className="text-slate-500 uppercase tracking-wider shrink-0 flex items-center gap-1 mr-2">
                <Filter className="w-3.5 h-3.5 text-[#0F4C81]" /> Micro-Markets:
              </span>
              {SEO_LOCATIONS.map((loc) => {
                const isActive = loc.slug === location.slug;
                return (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className={`px-4 py-2 rounded-full shrink-0 transition ${
                      isActive 
                        ? 'bg-[#0F4C81] text-white font-extrabold shadow-sm border border-[#0F4C81]' 
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {loc.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Property Showcase Grid (5 to 6 Items as requested) */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <span className="text-xs font-bold text-[#0F4C81] uppercase tracking-wider bg-[#0F4C81]/10 px-3 py-1 rounded-full">
                  Curated Catalog ({displayProperties.length} Projects)
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  Featured Residential & Commercial Projects in {location.name}
                </h2>
              </div>

              <a href="#site-visit" className="gold-gradient-button px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-extrabold shadow-md shrink-0">
                Book Site Visit in {location.name}
              </a>
            </div>

            {/* Prestige-Style Grid of 5-6 Detailed Property Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayProperties.map((prop) => (
                <LuxuryPropertyCard key={prop.id} property={prop} />
              ))}
            </div>

            {/* Why Invest in Location Section */}
            <div className="mt-16 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-[#0F4C81]" /> Why Invest in Real Estate in {location.name}?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 leading-relaxed">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">High Capital Appreciation</h4>
                  <p>Consistently high year-on-year land value appreciation driven by IT park expansion and Metro rail development.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Top Educational Hubs</h4>
                  <p>Surrounded by international schools including Greenwood High, DPS, Inventure Academy, and TISB.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Verified RERA Titles</h4>
                  <p>Every listing in {location.name} has passed strict 30-year legal encumbrance checks by senior high court advocates.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <div className="font-extrabold text-white text-base">OM SAKTHI REAL ESTATE • {location.name.toUpperCase()}</div>
            <p className="text-slate-500 text-xs mt-1">Muthanallur Cross Junction, Sarjapur Main Road, Bengaluru - 562125</p>
          </div>
          <a href="tel:+919845012345" className="text-white font-bold flex items-center gap-2 bg-[#0F4C81] px-4 py-2 rounded-xl">
            <Phone className="w-4 h-4 text-[#D4AF37]" /> +91 98450 12345
          </a>
        </div>
      </footer>
    </div>
  );
}
