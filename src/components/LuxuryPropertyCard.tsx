'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Heart, Share2, Scale, MapPin, Maximize, Bed, Bath, 
  ShieldCheck, ArrowRight, MessageSquare, Check, Sparkles 
} from 'lucide-react';
import { Property } from '@/data/mockData';

interface LuxuryPropertyCardProps {
  property: Property;
  onCompare?: (property: Property) => void;
  isSaved?: boolean;
}

export default function LuxuryPropertyCard({ property, onCompare, isSaved = false }: LuxuryPropertyCardProps) {
  const [saved, setSaved] = useState(isSaved);
  const [copied, setCopied] = useState(false);

  const pricePerSqFt = Math.round(property.numericPrice / property.areaSqFt);

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(window.location.origin + `/properties/${property.id}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-500 border border-slate-200/80 flex flex-col group relative">
      
      {/* Image & Badges Container */}
      <div className="relative h-64 overflow-hidden bg-slate-900">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
        />
        
        {/* Dark Gradient Vignette for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="bg-[#0F4C81] text-white text-[11px] font-extrabold px-3 py-1 rounded-lg uppercase tracking-wider shadow-md">
            {property.category}
          </span>
          <span className="bg-[#D4AF37] text-slate-900 text-[11px] font-extrabold px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-slate-900" />
            {property.status}
          </span>
        </div>

        {/* Top Quick Actions (Save, Compare, Share) */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
          <button
            onClick={(e) => { e.preventDefault(); setSaved(!saved); }}
            className={`p-2 rounded-xl backdrop-blur-md border transition ${
              saved ? 'bg-rose-600 text-white border-rose-500' : 'bg-slate-900/60 text-white border-white/20 hover:bg-white hover:text-slate-900'
            }`}
            title="Save Property"
          >
            <Heart className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
          </button>

          {onCompare && (
            <button
              onClick={(e) => { e.preventDefault(); onCompare(property); }}
              className="p-2 rounded-xl bg-slate-900/60 text-white border border-white/20 hover:bg-white hover:text-slate-900 backdrop-blur-md transition"
              title="Add to Comparison"
            >
              <Scale className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={handleShare}
            className="p-2 rounded-xl bg-slate-900/60 text-white border border-white/20 hover:bg-white hover:text-slate-900 backdrop-blur-md transition"
            title="Share Link"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          </button>
        </div>

        {/* Price & Price per Sq.Ft Badge */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between z-10">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-300 block tracking-wider">Starting Price</span>
            <span className="text-2xl font-extrabold text-white tracking-tight drop-shadow-md">
              {property.price}
            </span>
          </div>
          <span className="text-[11px] font-extrabold text-[#D4AF37] bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
            ₹{pricePerSqFt.toLocaleString('en-IN')}/sq.ft
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#0F4C81]" />
            <span>{property.location}</span>
          </div>

          <h3 className="text-lg font-extrabold text-slate-900 mb-1 group-hover:text-[#0F4C81] transition line-clamp-1">
            {property.title}
          </h3>

          <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-4 font-normal">
            {property.tagline || property.description}
          </p>
        </div>

        {/* Specifications Grid */}
        <div>
          <div className="grid grid-cols-2 gap-3 py-3 border-t border-b border-slate-100 text-slate-700 text-xs font-semibold mb-5">
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
              <div className="flex items-center gap-1.5 text-emerald-600 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Clear Title</span>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            <Link
              href={`/properties/${property.id}`}
              className="flex-1 text-center bg-slate-100 hover:bg-[#0F4C81] hover:text-white text-slate-800 font-extrabold py-2.5 rounded-xl transition duration-200 text-xs uppercase tracking-wider"
            >
              View Details
            </Link>
            <a
              href={`https://wa.me/919845012345?text=Hi%20OM%20Sakthi,%20I%20am%20interested%20in%20${encodeURIComponent(property.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold p-2.5 rounded-xl transition shadow-xs flex items-center justify-center shrink-0"
              title="WhatsApp Enquiry"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
