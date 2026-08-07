'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import AiPropertyAssistant from '@/components/AiPropertyAssistant';
import Link from 'next/link';
import { Property } from '@/data/mockData';
import { 
  MapPin, Bed, Bath, Maximize, ShieldCheck, CheckCircle2, 
  Calculator, Phone, Calendar, ArrowLeft, Download
} from 'lucide-react';

export default function PropertyDetailClient({ property }: { property: Property }) {
  // EMI Calculator state
  const [loanAmount, setLoanAmount] = useState<number>(property.numericPrice * 0.8);
  const [tenureYears, setTenureYears] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(8.5);

  // EMI Formula Calculation
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back link */}
          <Link 
            href="/properties" 
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F4C81] hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Properties
          </Link>

          {/* Header Title & Price */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#0F4C81] text-white text-xs font-semibold px-2.5 py-0.5 rounded-md">
                  {property.category}
                </span>
                <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-0.5 rounded-md">
                  {property.status}
                </span>
                {property.reraId && (
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-0.5 rounded-md flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> RERA Registered
                  </span>
                )}
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {property.title}
              </h1>
              <p className="text-slate-600 text-xs sm:text-sm flex items-center gap-1 mt-1">
                <MapPin className="w-4 h-4 text-[#0F4C81]" /> {property.address}
              </p>
            </div>

            <div className="text-left md:text-right">
              <span className="text-xs text-slate-500 font-semibold block">Indicative Price</span>
              <span className="text-2xl sm:text-4xl font-extrabold text-[#0F4C81]">
                {property.price}
              </span>
            </div>
          </div>

          {/* Gallery View */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
            <div className="lg:col-span-2 h-[340px] sm:h-[450px] rounded-2xl overflow-hidden shadow-md">
              <img 
                src={property.image} 
                alt={property.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {property.gallery.slice(0, 2).map((img, idx) => (
                <div key={idx} className="h-[160px] sm:h-[215px] rounded-2xl overflow-hidden shadow-sm">
                  <img src={img} alt="Gallery view" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Main Details */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Specs Overview Box */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div>
                  <span className="text-xs text-slate-500 block font-medium">Super Area</span>
                  <span className="text-lg font-bold text-slate-900 flex items-center justify-center gap-1 mt-0.5">
                    <Maximize className="w-4 h-4 text-[#0F4C81]" /> {property.areaSqFt} sq.ft
                  </span>
                </div>
                {property.bedrooms && (
                  <div>
                    <span className="text-xs text-slate-500 block font-medium">Bedrooms</span>
                    <span className="text-lg font-bold text-slate-900 flex items-center justify-center gap-1 mt-0.5">
                      <Bed className="w-4 h-4 text-[#0F4C81]" /> {property.bedrooms} BHK
                    </span>
                  </div>
                )}
                {property.bathrooms && (
                  <div>
                    <span className="text-xs text-slate-500 block font-medium">Bathrooms</span>
                    <span className="text-lg font-bold text-slate-900 flex items-center justify-center gap-1 mt-0.5">
                      <Bath className="w-4 h-4 text-[#0F4C81]" /> {property.bathrooms} Baths
                    </span>
                  </div>
                )}
                <div>
                  <span className="text-xs text-slate-500 block font-medium">Developer</span>
                  <span className="text-sm font-bold text-slate-900 block mt-1">{property.builder}</span>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                <h3 className="text-lg font-bold text-slate-900 mb-3">About Property</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{property.description}</p>
                {property.reraId && (
                  <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
                    <span className="font-bold text-slate-700">RERA Registration No:</span> {property.reraId}
                  </div>
                )}
              </div>

              {/* Key Amenities */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Amenities & Highlights</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {property.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-[#0F4C81]" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* EMI Calculator Component */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 mb-4">
                  <Calculator className="w-5 h-5 text-[#0F4C81]" />
                  <h3 className="text-lg font-bold text-slate-900">Home Loan EMI Calculator</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Loan Amount (₹)</label>
                    <input 
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Tenure (Years)</label>
                    <input 
                      type="number"
                      value={tenureYears}
                      onChange={(e) => setTenureYears(Number(e.target.value))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Interest Rate (%)</label>
                    <input 
                      type="number"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold"
                    />
                  </div>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Estimated Monthly EMI</span>
                    <span className="text-2xl font-extrabold text-[#D4AF37]">₹ {emi.toLocaleString('en-IN')} / month</span>
                  </div>
                  <span className="text-[11px] text-slate-400 text-right">
                    Pre-approved banking partners:<br /><span className="font-bold text-white">SBI • HDFC • ICICI</span>
                  </span>
                </div>
              </div>

            </div>

            {/* Right Sidebar: Contact & Site Visit Box */}
            <div className="space-y-6">
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md sticky top-24">
                <h3 className="text-lg font-bold text-slate-900 mb-1">Schedule Site Visit</h3>
                <p className="text-xs text-slate-500 mb-4">Direct visit from our Muthanallur Cross office.</p>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/919845012345?text=Hi%20OM%20Sakthi,%20I%20want%20to%20schedule%20a%20site%20visit%20for%20${encodeURIComponent(property.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition text-xs flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Instant WhatsApp Enquiry</span>
                  </a>

                  <a
                    href="tel:+919845012345"
                    className="w-full bg-[#0F4C81] hover:bg-[#0A365C] text-white font-bold py-3 rounded-xl transition text-xs flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <span>Call Senior Advisor</span>
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 space-y-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#0F4C81]" />
                    <span>Site Visit Available 7 Days a Week</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-[#0F4C81]" />
                    <button 
                      onClick={() => alert("Brochure download link sent to your registered WhatsApp!")}
                      className="text-[#0F4C81] font-semibold underline"
                    >
                      Download E-Brochure (PDF)
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </main>

      <AiPropertyAssistant />
    </div>
  );
}
