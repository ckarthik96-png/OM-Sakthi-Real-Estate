'use client';

import React from 'react';
import { X, Check, ArrowRight, ShieldCheck, MapPin, Maximize, Bed, IndianRupee } from 'lucide-react';
import { Property } from '@/data/mockData';

interface PropertyComparisonModalProps {
  properties: Property[];
  onClose: () => void;
  onRemove: (id: string) => void;
}

export default function PropertyComparisonModal({ properties, onClose, onRemove }: PropertyComparisonModalProps) {
  if (properties.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-5xl w-full shadow-2xl overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#0F4C81] text-white p-5 flex justify-between items-center">
          <div>
            <span className="text-[10px] font-extrabold bg-[#D4AF37] text-slate-900 px-2.5 py-0.5 rounded uppercase tracking-wider">
              Side-By-Side Comparison
            </span>
            <h2 className="text-xl font-extrabold mt-1">Comparing {properties.length} Properties</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-slate-200 hover:text-white transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Comparison Table */}
        <div className="p-6 overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-800">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-3 px-4 w-40 font-extrabold text-slate-500 uppercase tracking-wider">Attribute</th>
                {properties.map(p => (
                  <th key={p.id} className="py-3 px-4 min-w-[220px]">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-extrabold text-sm text-slate-900 line-clamp-1">{p.title}</span>
                      <button onClick={() => onRemove(p.id)} className="text-rose-600 hover:text-rose-800 p-1">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <img src={p.image} alt={p.title} className="w-full h-28 object-cover rounded-xl border border-slate-200" />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              <tr>
                <td className="py-3 px-4 font-bold text-slate-500">Price</td>
                {properties.map(p => (
                  <td key={p.id} className="py-3 px-4 font-extrabold text-[#0F4C81] text-sm">{p.price}</td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-500">Category</td>
                {properties.map(p => (
                  <td key={p.id} className="py-3 px-4"><span className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded font-bold">{p.category}</span></td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-500">Locality</td>
                {properties.map(p => (
                  <td key={p.id} className="py-3 px-4">{p.location}</td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-500">Super Area</td>
                {properties.map(p => (
                  <td key={p.id} className="py-3 px-4 font-bold">{p.areaSqFt} sq.ft</td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-500">Bedrooms / BHK</td>
                {properties.map(p => (
                  <td key={p.id} className="py-3 px-4">{p.bedrooms ? `${p.bedrooms} BHK` : 'N/A (Plot)'}</td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-500">Possession Status</td>
                {properties.map(p => (
                  <td key={p.id} className="py-3 px-4"><span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-bold">{p.status}</span></td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-500">Developer</td>
                {properties.map(p => (
                  <td key={p.id} className="py-3 px-4">{p.builder}</td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-500">RERA Registered</td>
                {properties.map(p => (
                  <td key={p.id} className="py-3 px-4">
                    {p.reraId ? (
                      <span className="text-emerald-700 font-bold flex items-center gap-1">
                        <Check className="w-4 h-4" /> Yes
                      </span>
                    ) : (
                      <span className="text-slate-400">Verified Title</span>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#0F4C81] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-xs"
          >
            Close Comparison
          </button>
        </div>

      </div>
    </div>
  );
}
