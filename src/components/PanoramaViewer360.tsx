'use client';

import React, { useState } from 'react';
import { Compass, RotateCw, Sparkles, Move, ZoomIn, ZoomOut, ChevronRight } from 'lucide-react';

interface PanoramaViewer360Props {
  initialRoom?: 'living' | 'master' | 'balcony';
  title?: string;
}

const ROOM_DATA = {
  living: {
    name: "Front Living Room Foyer",
    tagline: "Double Height Ceiling & Traditional Teakwood Decor",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
    description: "Spacious Indian luxury living foyer with double height ceiling, brass floor lamps, and natural sunlight."
  },
  master: {
    name: "Master Bedroom Suite",
    tagline: "Indian Teak Wood King Bed & Brass Wall Lamps",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=2000&q=80",
    description: "Authentic Indian master bedroom suite crafted with solid teak wood furniture, wooden flooring, and warm ambient brass lighting."
  },
  balcony: {
    name: "Back Side Balcony Garden",
    tagline: "Teakwood Seating Overlooking Sarjapur Greenery",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80",
    description: "Private back side villa balcony featuring teakwood garden lounge chairs, terracotta potted tropical plants, and evening mood lamps."
  }
};

export default function PanoramaViewer360({
  initialRoom = 'living',
  title = "4 BHK Ultra-Luxury Villa Interior"
}: PanoramaViewer360Props) {
  const [activeRoom, setActiveRoom] = useState<'living' | 'master' | 'balcony'>(initialRoom);
  const [posX, setPosX] = useState(50);
  const [zoom, setZoom] = useState(100);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = (e.clientX - startX) * 0.12;
    // Smooth 180° rotation bounds (0% to 100%)
    setPosX(prev => Math.min(Math.max(prev - deltaX, 0), 100));
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const currentRoom = ROOM_DATA[activeRoom];

  return (
    <div className="bg-slate-950 rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl relative">
      
      {/* 180° Control Bar Header */}
      <div className="bg-slate-900/90 backdrop-blur-md p-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-white z-20 relative">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
            <RotateCw className="w-4 h-4 animate-spin-slow" />
          </div>
          <div>
            <h4 className="font-extrabold text-sm flex items-center gap-1.5">
              180° Full-House Panoramic Tour <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            </h4>
            <p className="text-[11px] text-slate-400">Click & Drag cursor left/right to rotate across Front Living, Master Suite & Back Balcony</p>
          </div>
        </div>

        {/* Room Switcher Pills */}
        <div className="flex items-center gap-1.5 text-xs font-bold bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => { setActiveRoom('living'); setPosX(50); }}
            className={`px-3.5 py-1.5 rounded-lg transition ${activeRoom === 'living' ? 'bg-[#0F4C81] text-white shadow-xs' : 'text-slate-400 hover:text-white'}`}
          >
            Front Living Room
          </button>
          <button
            onClick={() => { setActiveRoom('master'); setPosX(50); }}
            className={`px-3.5 py-1.5 rounded-lg transition ${activeRoom === 'master' ? 'bg-[#0F4C81] text-white shadow-xs' : 'text-slate-400 hover:text-white'}`}
          >
            Master Suite
          </button>
          <button
            onClick={() => { setActiveRoom('balcony'); setPosX(50); }}
            className={`px-3.5 py-1.5 rounded-lg transition ${activeRoom === 'balcony' ? 'bg-[#0F4C81] text-white shadow-xs' : 'text-slate-400 hover:text-white'}`}
          >
            Back Side Balcony
          </button>
        </div>
      </div>

      {/* 180° Panoramic Canvas Viewport */}
      <div 
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="relative w-full h-[450px] sm:h-[550px] bg-slate-950 overflow-hidden cursor-grab active:cursor-grabbing select-none"
      >
        <div 
          className="w-full h-full transition-all duration-75 ease-out"
          style={{
            backgroundImage: `url(${currentRoom.image})`,
            backgroundSize: `${zoom}% 100%`,
            backgroundPosition: `${posX}% center`,
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Room Overview Title Card Overlay */}
        <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md bg-slate-900/90 backdrop-blur-md p-5 rounded-2xl border border-white/20 text-white z-10 shadow-xl">
          <span className="text-[10px] font-extrabold text-[#D4AF37] uppercase tracking-wider block mb-1">
            Authentic Indian Luxury Villa Style
          </span>
          <h3 className="text-lg font-bold text-white mb-1">{currentRoom.name}</h3>
          <p className="text-xs text-slate-300 font-light leading-relaxed">{currentRoom.description}</p>
        </div>

        {/* Drag Instruction Badge */}
        <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 text-[#D4AF37] text-xs font-bold flex items-center gap-2 pointer-events-none z-10">
          <Move className="w-4 h-4 animate-bounce text-[#D4AF37]" />
          <span>Drag Mouse Left / Right to Rotate 180° Sweep</span>
        </div>

        {/* Zoom Controls Overlay */}
        <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md p-1.5 rounded-xl border border-white/20 text-white text-xs z-10">
          <button 
            onClick={() => setZoom(prev => Math.min(prev + 20, 160))}
            className="p-2 hover:bg-white/10 rounded-lg text-[#D4AF37]"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setZoom(prev => Math.max(prev - 20, 100))}
            className="p-2 hover:bg-white/10 rounded-lg text-[#D4AF37]"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
        </div>

        {/* Floating Compass Indicator */}
        <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md p-2.5 rounded-full border border-[#D4AF37]/50 text-[#D4AF37] pointer-events-none z-10">
          <Compass className="w-6 h-6 animate-pulse" />
        </div>
      </div>

    </div>
  );
}
