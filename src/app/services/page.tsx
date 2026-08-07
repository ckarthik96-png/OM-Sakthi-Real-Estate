'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import AiPropertyAssistant from '@/components/AiPropertyAssistant';
import { ALL_SERVICES, LEASE_VS_RENT_DATA, SEO_LOCATIONS } from '@/data/mockData';
import { 
  Building2, Home, Landmark, ShieldCheck, FileText, CheckCircle2, 
  HelpCircle, MapPin, Calculator, PhoneCall, Scale, ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Banner */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#0F4C81] text-xs font-bold uppercase tracking-wider bg-[#0F4C81]/10 px-3 py-1 rounded-full">
              Complete Real Estate Ecosystem
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Our Comprehensive Property Services
            </h1>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Your Trusted Partner for Buying, Selling, Renting, Leasing & Property Investments across Sarjapur, Muthanallur Cross, and Greater Bengaluru.
            </p>
          </div>

          {/* Service Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {Object.entries(ALL_SERVICES).map(([key, cat]) => (
              <div key={key} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-[#0F4C81] text-[#D4AF37] flex items-center justify-center mb-4">
                  {key === 'residential' ? <Home className="w-5 h-5" /> :
                   key === 'land' ? <MapPin className="w-5 h-5" /> :
                   key === 'commercial' ? <Building2 className="w-5 h-5" /> :
                   key === 'legal' ? <Scale className="w-5 h-5" /> :
                   key === 'financial' ? <Calculator className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{cat.title}</h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0F4C81] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Feature Highlight: Lease House vs Rent House Section */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm mb-16">
            <div className="max-w-3xl mb-8">
              <span className="text-amber-700 text-xs font-bold uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full">
                Knowledge Base & Guidance
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                Lease House vs. Rent House: What’s the Difference?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Understanding occupancy contracts to choose the best financial option for your stay in Sarjapur.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h3 className="text-lg font-bold text-[#0F4C81] mb-2">What is a Lease House?</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  A lease house requires a **large refundable security deposit upfront** (typically ₹5 Lakhs to ₹50 Lakhs+) for an agreed duration of 1 to 3 years. The tenant pays **zero or very low monthly rent**, and the full amount is returned at contract end.
                </p>
                <div className="text-xs font-semibold text-slate-700 space-y-1">
                  ✓ Large refundable upfront payment <br />
                  ✓ Zero or minimal monthly rent <br />
                  ✓ Registered 1–3 year Lease Deed
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h3 className="text-lg font-bold text-[#0F4C81] mb-2">What is a Rent House?</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  A rental house requires a **monthly rent payment** along with a small refundable security deposit (2 to 10 months). Rental agreements are standard for 11 months and offer high flexibility.
                </p>
                <div className="text-xs font-semibold text-slate-700 space-y-1">
                  ✓ Monthly rent payments <br />
                  ✓ Lower initial security deposit <br />
                  ✓ 11-month renewable agreement
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#0F4C81] text-white font-bold uppercase">
                  <tr>
                    <th className="py-3 px-4 rounded-tl-xl">Feature</th>
                    <th className="py-3 px-4">Rent House</th>
                    <th className="py-3 px-4 rounded-tr-xl">Lease House</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-slate-50">
                  {LEASE_VS_RENT_DATA.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-100">
                      <td className="py-3 px-4 font-bold text-slate-900">{row.feature}</td>
                      <td className="py-3 px-4 text-slate-700">{row.rent}</td>
                      <td className="py-3 px-4 font-semibold text-[#0F4C81]">{row.lease}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SEO Locations Spotlight */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Property Services Across Key Sarjapur & Bengaluru Locations
              </h2>
              <p className="text-xs text-slate-600 mt-1">Direct advisory and verified listings in 18 top micro-markets.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-center">
              {SEO_LOCATIONS.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/properties?location=${encodeURIComponent(loc.name)}`}
                  className="bg-white p-3 rounded-xl border border-slate-200 hover:border-[#0F4C81] hover:shadow-xs transition group"
                >
                  <MapPin className="w-4 h-4 text-[#0F4C81] mx-auto mb-1 group-hover:scale-110 transition" />
                  <h4 className="font-bold text-xs text-slate-900">{loc.name}</h4>
                  <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">{loc.tagline}</p>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>

      <AiPropertyAssistant />
    </div>
  );
}
