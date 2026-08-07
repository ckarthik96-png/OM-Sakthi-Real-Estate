'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { SEO_LOCATIONS } from '@/data/mockData';
import { MapPin, Building2, ChevronRight, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function LocationsDirectoryPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFB] flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Prestige-Style Header */}
        <section className="bg-[#0F172A] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#D4AF37] border border-[#D4AF37]/40 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bengaluru Micro-Market Directory</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Projects & Properties by <span className="gold-gradient-text">Location</span>
            </h1>
            <p className="text-slate-300 text-sm max-w-2xl font-light">
              Explore verified luxury villas, residential layout plots, and smart apartments across Sarjapur, Whitefield, Electronic City, and key Bengaluru corridors.
            </p>
          </div>
        </section>

        {/* Grid of 18 SEO Locations (Prestige Style Cards) */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {SEO_LOCATIONS.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0F4C81] transition duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={loc.image} 
                      alt={loc.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    <div className="absolute top-4 left-4 bg-[#0F4C81] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                      {loc.avgPricePerSqFt}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-extrabold tracking-tight group-hover:text-[#D4AF37] transition">{loc.name}</h3>
                      <p className="text-xs text-slate-300 font-light truncate">{loc.tagline}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {loc.overview}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-bold text-[#0F4C81]">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> Explore 6+ Projects
                      </span>
                      <span className="flex items-center gap-1 group-hover:translate-x-1 transition">
                        View All <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-10 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          © {new Date().getFullYear()} OM Sakthi Real Estate. All 18 Location Portals RERA Compliant.
        </div>
      </footer>
    </div>
  );
}
