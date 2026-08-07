'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Scale } from 'lucide-react';
import { MOCK_PROPERTIES, Property } from '@/data/mockData';
import LuxuryPropertyCard from './LuxuryPropertyCard';
import PropertyComparisonModal from './PropertyComparisonModal';

export default function FeaturedProperties() {
  const featured = MOCK_PROPERTIES.filter(p => p.featured);
  const [comparedProperties, setComparedProperties] = useState<Property[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const handleAddToCompare = (property: Property) => {
    if (!comparedProperties.some(p => p.id === property.id)) {
      setComparedProperties(prev => [...prev, property]);
    }
    setIsCompareOpen(true);
  };

  const handleRemoveFromCompare = (id: string) => {
    setComparedProperties(prev => prev.filter(p => p.id !== id));
  };

  return (
    <section className="py-16 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0F4C81] mb-2 bg-[#0F4C81]/10 px-3 py-1 rounded-full">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Verified & Exclusive Sarjapur Listings</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Luxury Properties
            </h2>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            {comparedProperties.length > 0 && (
              <button
                onClick={() => setIsCompareOpen(true)}
                className="bg-[#D4AF37] text-slate-900 font-extrabold px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-md animate-bounce"
              >
                <Scale className="w-4 h-4" /> Compare ({comparedProperties.length})
              </button>
            )}

            <Link 
              href="/properties"
              className="inline-flex items-center gap-2 font-bold text-[#0F4C81] hover:text-[#0A365C] group transition text-sm"
            >
              <span>View All Listings ({MOCK_PROPERTIES.length})</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Property Grid using LuxuryPropertyCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((property) => (
            <LuxuryPropertyCard 
              key={property.id} 
              property={property}
              onCompare={handleAddToCompare}
            />
          ))}
        </div>

      </div>

      {/* Comparison Modal */}
      {isCompareOpen && (
        <PropertyComparisonModal
          properties={comparedProperties}
          onClose={() => setIsCompareOpen(false)}
          onRemove={handleRemoveFromCompare}
        />
      )}
    </section>
  );
}
