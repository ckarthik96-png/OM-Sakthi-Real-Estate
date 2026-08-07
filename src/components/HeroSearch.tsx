'use client';

import React, { useState } from 'react';
import { Search, MapPin, Home, IndianRupee, Layers } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HeroSearch() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'buy' | 'rent' | 'plots'>('buy');
  const [location, setLocation] = useState('Muthanallur Cross');
  const [propertyType, setPropertyType] = useState('All');
  const [budget, setBudget] = useState('All');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/properties?location=${encodeURIComponent(location)}&type=${encodeURIComponent(propertyType)}&budget=${encodeURIComponent(budget)}`);
  };

  return (
    <div className="relative min-h-[580px] bg-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 scale-105 transition-transform duration-10000"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/60" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white py-16">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-6">
          <MapPin className="w-3.5 h-3.5" />
          <span>Sarjapur & Muthanallur Cross Real Estate Specialists</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
          Find Your Dream Property with <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-[#D4AF37]">
            OM Sakthi Real Estate
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          Trusted experts for buying, selling, renting, and investing in premium villas, plots, apartments, and commercial spaces across Sarjapur, Muthanallur Cross, and Dommasandra.
        </p>

        {/* Property Search Box */}
        <div className="glass-panel p-3 sm:p-4 rounded-2xl shadow-2xl text-slate-800 max-w-4xl mx-auto border border-white/40">
          
          {/* Tabs */}
          <div className="flex gap-2 border-b border-slate-200/80 pb-3 mb-4 text-xs sm:text-sm font-semibold">
            <button
              onClick={() => setActiveTab('buy')}
              className={`px-4 py-2 rounded-lg transition ${activeTab === 'buy' ? 'bg-[#0F4C81] text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              Buy Property
            </button>
            <button
              onClick={() => setActiveTab('rent')}
              className={`px-4 py-2 rounded-lg transition ${activeTab === 'rent' ? 'bg-[#0F4C81] text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              Rent / Lease House
            </button>
            <button
              onClick={() => setActiveTab('plots')}
              className={`px-4 py-2 rounded-lg transition ${activeTab === 'plots' ? 'bg-[#0F4C81] text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              Plots / Land
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
            
            {/* Location Select */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#0F4C81]" /> Location
              </label>
              <select 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
              >
                <option value="All Locations">All Locations</option>
                <option value="Muthanallur Cross">Muthanallur Cross</option>
                <option value="Sarjapur Road">Sarjapur Road</option>
                <option value="Dommasandra">Dommasandra</option>
                <option value="Attibele">Attibele</option>
                <option value="Varthur">Varthur</option>
              </select>
            </div>

            {/* Type Select */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Home className="w-3 h-3 text-[#0F4C81]" /> Property Type
              </label>
              <select 
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
              >
                <option value="All">All Types</option>
                <option value="Villas">Villas</option>
                <option value="Apartments">Apartments</option>
                <option value="Plots">Residential Plots</option>
                <option value="Lease House">Lease House</option>
                <option value="Commercial">Commercial</option>
                <option value="Farm Lands">Farm Lands</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                <IndianRupee className="w-3 h-3 text-[#0F4C81]" /> Budget Range
              </label>
              <select 
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
              >
                <option value="All">Any Budget</option>
                <option value="under-50l">Under ₹50 Lakhs</option>
                <option value="50l-1cr">₹50 L - ₹1 Cr</option>
                <option value="1cr-2cr">₹1 Cr - ₹2 Cr</option>
                <option value="2cr-plus">₹2 Cr +</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex items-end">
              <button 
                type="submit"
                className="w-full bg-[#0F4C81] hover:bg-[#0A365C] text-white font-semibold py-2.5 px-4 rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 text-sm"
              >
                <Search className="w-4 h-4 text-[#D4AF37]" />
                <span>Search Properties</span>
              </button>
            </div>
          </form>

        </div>

      </div>
    </div>
  );
}
