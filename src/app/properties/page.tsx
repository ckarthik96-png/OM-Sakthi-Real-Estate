'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import AiPropertyAssistant from '@/components/AiPropertyAssistant';
import Link from 'next/link';
import { MOCK_PROPERTIES } from '@/data/mockData';
import { Search, MapPin, Maximize, Bed, Tag, Filter } from 'lucide-react';

export default function PropertiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLocation, setSelectedLocation] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Villas', 'Plots', 'Apartments', 'Commercial', 'Farm Lands', 'Lease House'];
  const locations = [
    'All', 
    'Muthanallur Cross', 
    'Sarjapur Road', 
    'Dommasandra', 
    'Attibele', 
    'Chandapura', 
    'Electronic City', 
    'Whitefield', 
    'Varthur', 
    'Bellandur', 
    'HSR Layout'
  ];

  const filteredProperties = MOCK_PROPERTIES.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesLocation = selectedLocation === 'All' || 
                            p.location.toLowerCase().includes(selectedLocation.toLowerCase()) ||
                            p.address.toLowerCase().includes(selectedLocation.toLowerCase());
    const matchesQuery = searchQuery === '' || 
                         p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLocation && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Properties in Sarjapur & Muthanallur Cross
            </h1>
            <p className="text-slate-600 text-sm mt-1">
              Browse verified plots, luxury villas, smart apartments, and commercial spaces with instant site visit scheduling.
            </p>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="bg-white p-4 rounded-2xl shadow-xs border border-slate-200 mb-8 space-y-4">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, features, or area..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-slate-100">
              
              {/* Categories */}
              <div className="flex items-center gap-2 overflow-x-auto text-xs pb-1 sm:pb-0">
                <span className="font-bold text-slate-500 flex items-center gap-1 shrink-0">
                  <Filter className="w-3.5 h-3.5 text-[#0F4C81]" /> Type:
                </span>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition shrink-0 ${
                      selectedCategory === cat 
                        ? 'bg-[#0F4C81] text-white shadow-xs' 
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Location Select */}
              <div className="flex items-center gap-2 text-xs">
                <span className="font-bold text-slate-500 shrink-0">Location:</span>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                >
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

            </div>

          </div>

          {/* Results Info */}
          <div className="mb-6 text-xs text-slate-500 font-semibold">
            Showing {filteredProperties.length} verified listings
          </div>

          {/* Property Cards */}
          {filteredProperties.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center text-slate-500 border border-slate-200">
              No properties found matching your criteria. Try resetting filters.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map(property => (
                <div 
                  key={property.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition duration-300 border border-slate-200 flex flex-col group"
                >
                  <div className="relative h-60 overflow-hidden bg-slate-200">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      <span className="bg-[#0F4C81] text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                        {property.category}
                      </span>
                      <span className="bg-amber-400 text-slate-900 text-xs font-bold px-2.5 py-1 rounded-md">
                        {property.status}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-base font-bold px-3 py-1 rounded-xl">
                      {property.price}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-slate-500 text-xs mb-2">
                        <MapPin className="w-3.5 h-3.5 text-[#0F4C81]" />
                        <span>{property.location}</span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#0F4C81] transition">
                        {property.title}
                      </h3>

                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-2 mb-4">
                        {property.description}
                      </p>
                    </div>

                    <div>
                      <div className="grid grid-cols-2 gap-3 py-3 border-t border-b border-slate-100 text-slate-700 text-xs font-medium mb-6">
                        <div className="flex items-center gap-1.5">
                          <Maximize className="w-4 h-4 text-[#0F4C81]" />
                          <span>{property.areaSqFt} sq.ft</span>
                        </div>
                        {property.bedrooms ? (
                          <div className="flex items-center gap-1.5">
                            <Bed className="w-4 h-4 text-[#0F4C81]" />
                            <span>{property.bedrooms} BHK</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                            <span>Clear Title</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-3">
                        <Link
                          href={`/properties/${property.id}`}
                          className="w-full text-center bg-[#0F4C81] hover:bg-[#0A365C] text-white font-semibold py-2.5 rounded-xl transition text-xs"
                        >
                          View Full Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </main>

      <AiPropertyAssistant />
    </div>
  );
}
