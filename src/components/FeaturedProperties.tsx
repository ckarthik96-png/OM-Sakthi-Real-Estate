'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Bed, Maximize, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { MOCK_PROPERTIES } from '@/data/mockData';

export default function FeaturedProperties() {
  const featured = MOCK_PROPERTIES.filter(p => p.featured);

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F4C81] mb-2 bg-[#0F4C81]/10 px-3 py-1 rounded-full">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Verified & Exclusive Listings</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Properties in Sarjapur & Muthanallur
            </h2>
          </div>
          
          <Link 
            href="/properties"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 font-semibold text-[#0F4C81] hover:text-[#0A365C] group transition"
          >
            <span>View All Listings ({MOCK_PROPERTIES.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((property) => (
            <div 
              key={property.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-slate-100 flex flex-col group"
            >
              {/* Image & Badge Container */}
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  <span className="bg-[#0F4C81] text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow-xs">
                    {property.category}
                  </span>
                  <span className="bg-amber-400 text-slate-900 text-xs font-bold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {property.status}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-lg font-bold px-3 py-1 rounded-xl">
                  {property.price}
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-slate-500 text-xs mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#0F4C81]" />
                    <span>{property.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0F4C81] transition line-clamp-1">
                    {property.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-2 mb-6">
                    {property.description}
                  </p>
                </div>

                {/* Specs footer */}
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
                      <div className="flex items-center gap-1.5 text-emerald-600">
                        <ShieldCheck className="w-4 h-4" />
                        <span>RERA Approved</span>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/properties/${property.id}`}
                      className="w-full text-center bg-slate-100 hover:bg-[#0F4C81] hover:text-white text-slate-800 font-semibold py-2.5 rounded-xl transition text-sm"
                    >
                      View Details
                    </Link>
                    <a
                      href={`https://wa.me/919845012345?text=Hi%20OM%20Sakthi%20Real%20Estate,%20I%20am%20interested%20in%20${encodeURIComponent(property.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-3 py-2.5 rounded-xl transition text-xs flex items-center justify-center shrink-0"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
