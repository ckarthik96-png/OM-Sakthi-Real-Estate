'use client';

import React, { useState } from 'react';
import { Search, MapPin, Home, IndianRupee, Layers, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HeroSearch() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'buy' | 'rent' | 'lease' | 'plots'>('buy');
  const [location, setLocation] = useState('Muthanallur Cross');
  const [propertyType, setPropertyType] = useState('All');
  const [budget, setBudget] = useState('All');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/properties?location=${encodeURIComponent(location)}&type=${encodeURIComponent(propertyType)}&budget=${encodeURIComponent(budget)}`);
  };

  return (
    <div className="relative min-h-[640px] bg-[#0F172A] flex items-center justify-center overflow-hidden">
      {/* Autoplay Full-Screen Background Video Banner Mockup */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80" 
          alt="Cinematic Sarjapur Real Estate"
          className="w-full h-full object-cover opacity-35 scale-105 transition-transform duration-10000"
        />
        {/* Dark Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/75 to-[#0F172A]/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white py-20">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-6 shadow-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Sarjapur & Muthanallur Cross Flagship Platform</span>
        </div>

        {/* Cinematic Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
          Find Your Dream Property with <br className="hidden sm:inline" />
          <span className="gold-gradient-text">
            OM Sakthi Real Estate
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Trusted local experts for buying, selling, renting, leasing, and investing in luxury villas, residential plots, smart apartments, and commercial spaces.
        </p>

        {/* Property Multi-Parameter Search Glass Box */}
        <div className="glass-panel p-4 sm:p-5 rounded-2xl shadow-2xl text-slate-800 max-w-4xl mx-auto border border-white/50">
          
          {/* Tabs */}
          <div className="flex gap-2 border-b border-slate-200/80 pb-3.5 mb-4 text-xs font-bold uppercase tracking-wider overflow-x-auto">
            <button
              type="button"
              onClick={() => { setActiveTab('buy'); setPropertyType('All'); }}
              className={`px-4 py-2 rounded-xl transition ${activeTab === 'buy' ? 'bg-[#0F4C81] text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              Buy Property
            </button>
            <button
              type="button"
              onClick={() => { setActiveTab('rent'); setPropertyType('Rentals'); }}
              className={`px-4 py-2 rounded-xl transition ${activeTab === 'rent' ? 'bg-[#0F4C81] text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              Rent House
            </button>
            <button
              type="button"
              onClick={() => { setActiveTab('lease'); setPropertyType('Lease House'); }}
              className={`px-4 py-2 rounded-xl transition ${activeTab === 'lease' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              Lease House (Zero Rent)
            </button>
            <button
              type="button"
              onClick={() => { setActiveTab('plots'); setPropertyType('Plots'); }}
              className={`px-4 py-2 rounded-xl transition ${activeTab === 'plots' ? 'bg-[#0F4C81] text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              Plots / Land
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
            
            {/* Location Select */}
            <div>
              <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#0F4C81]" /> Locality
              </label>
              <select 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 font-bold focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
              >
                <option value="All Locations">All Sarjapur Locations</option>
                <option value="Muthanallur Cross">Muthanallur Cross</option>
                <option value="Sarjapur Road">Sarjapur Main Road</option>
                <option value="Dommasandra">Dommasandra Circle</option>
                <option value="Attibele">Attibele Belt</option>
                <option value="Electronic City">Electronic City</option>
                <option value="Whitefield">Whitefield</option>
              </select>
            </div>

            {/* Property Type Select */}
            <div>
              <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Home className="w-3 h-3 text-[#0F4C81]" /> Property Category
              </label>
              <select 
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 font-bold focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
              >
                <option value="All">All Categories</option>
                <option value="Villas">Villas</option>
                <option value="Apartments">Apartments</option>
                <option value="Plots">Residential Plots</option>
                <option value="Lease House">Lease House</option>
                <option value="Commercial">Commercial</option>
                <option value="Farm Lands">Farm Lands</option>
              </select>
            </div>

            {/* Budget Range */}
            <div>
              <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                <IndianRupee className="w-3 h-3 text-[#0F4C81]" /> Budget Range
              </label>
              <select 
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 font-bold focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
              >
                <option value="All">Any Budget</option>
                <option value="under-50l">Under ₹50 Lakhs</option>
                <option value="50l-1cr">₹50 L - ₹1 Cr</option>
                <option value="1cr-2cr">₹1 Cr - ₹2 Cr</option>
                <option value="2cr-plus">₹2 Cr +</option>
              </select>
            </div>

            {/* Search Submit */}
            <div className="flex items-end">
              <button 
                type="submit"
                className="w-full gold-gradient-button py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider font-extrabold shadow-md flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4 text-slate-900" />
                <span>Search Properties</span>
              </button>
            </div>
          </form>

        </div>

      </div>
    </div>
  );
}
