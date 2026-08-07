'use client';

import React, { useState } from 'react';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

interface PanoramaViewer360Props {
  initialRoom?: 'living' | 'master' | 'balcony';
  title?: string;
}

const ROOM_IMAGES = {
  living: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
  master: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80",
  balcony: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80"
};

export default function PanoramaViewer360({
  initialRoom = 'living',
  title = "4 BHK Ultra-Luxury Villa Interior"
}: PanoramaViewer360Props) {
  const [activeRoom, setActiveRoom] = useState<'living' | 'master' | 'balcony'>(initialRoom);

  return (
    <div className="bg-slate-950 rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl relative">
      
      {/* Header Bar */}
      <div className="bg-slate-900/90 backdrop-blur-md p-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-white">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
            <ImageIcon className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-extrabold text-sm flex items-center gap-1.5">
              Architectural Villa Gallery <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            </h4>
            <p className="text-[11px] text-slate-400">High-resolution interior photography of {title}</p>
          </div>
        </div>

        {/* Room Switcher Pills */}
        <div className="flex items-center gap-1.5 text-xs font-bold bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveRoom('living')}
            className={`px-4 py-1.5 rounded-lg transition ${activeRoom === 'living' ? 'bg-[#0F4C81] text-white shadow-xs' : 'text-slate-400 hover:text-white'}`}
          >
            Living Foyer
          </button>
          <button
            onClick={() => setActiveRoom('master')}
            className={`px-4 py-1.5 rounded-lg transition ${activeRoom === 'master' ? 'bg-[#0F4C81] text-white shadow-xs' : 'text-slate-400 hover:text-white'}`}
          >
            Master Suite
          </button>
          <button
            onClick={() => setActiveRoom('balcony')}
            className={`px-4 py-1.5 rounded-lg transition ${activeRoom === 'balcony' ? 'bg-[#0F4C81] text-white shadow-xs' : 'text-slate-400 hover:text-white'}`}
          >
            Sky Balcony
          </button>
        </div>
      </div>

      {/* Clean High-Resolution Image Viewport */}
      <div className="relative w-full h-[450px] sm:h-[550px] bg-slate-900 overflow-hidden">
        <img 
          src={ROOM_IMAGES[activeRoom]} 
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
        />
        
        {/* Dark Gradient Bottom Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
        
        <div className="absolute bottom-6 left-6 text-white pointer-events-none">
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">Architectural View</span>
          <h3 className="text-xl font-extrabold capitalize">{activeRoom} Viewpoint</h3>
        </div>
      </div>

    </div>
  );
}
