'use client';

import React, { useState, useRef } from 'react';
import { Compass, RotateCw, Sparkles, Maximize2, Move, ZoomIn, ZoomOut } from 'lucide-react';

interface PanoramaViewer360Props {
  imageSrc?: string;
  title?: string;
}

export default function PanoramaViewer360({ 
  imageSrc = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
  title = "4 BHK Ultra-Luxury Villa Interior"
}: PanoramaViewer360Props) {
  const [posX, setPosX] = useState(50);
  const [posY, setPosY] = useState(50);
  const [zoom, setZoom] = useState(100);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [room, setRoom] = useState<'living' | 'master' | 'balcony'>('living');

  const containerRef = useRef<HTMLDivElement>(null);

  const rooms = {
    living: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
    master: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80",
    balcony: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80"
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = (e.clientX - startX) * 0.15;
    const deltaY = (e.clientY - startY) * 0.15;
    
    setPosX(prev => (prev + deltaX + 100) % 100);
    setPosY(prev => Math.min(Math.max(prev + deltaY, 20), 80));
    setStartX(e.clientX);
    setStartY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="bg-slate-950 rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl relative">
      
      {/* 360 Control Bar Header */}
      <div className="bg-slate-900/90 backdrop-blur-md p-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-white">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
            <RotateCw className="w-4 h-4 animate-spin-slow" />
          </div>
          <div>
            <h4 className="font-extrabold text-sm flex items-center gap-1.5">
              360° Interactive 3D Virtual Tour <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            </h4>
            <p className="text-[11px] text-slate-400">Click & Drag to explore room in 360 degrees</p>
          </div>
        </div>

        {/* Room Switcher Pills */}
        <div className="flex items-center gap-1.5 text-xs font-bold bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setRoom('living')}
            className={`px-3 py-1 rounded-lg transition ${room === 'living' ? 'bg-[#0F4C81] text-white shadow-xs' : 'text-slate-400 hover:text-white'}`}
          >
            Living Foyer
          </button>
          <button
            onClick={() => setRoom('master')}
            className={`px-3 py-1 rounded-lg transition ${room === 'master' ? 'bg-[#0F4C81] text-white shadow-xs' : 'text-slate-400 hover:text-white'}`}
          >
            Master Bedroom
          </button>
          <button
            onClick={() => setRoom('balcony')}
            className={`px-3 py-1 rounded-lg transition ${room === 'balcony' ? 'bg-[#0F4C81] text-white shadow-xs' : 'text-slate-400 hover:text-white'}`}
          >
            Sky Balcony
          </button>
        </div>
      </div>

      {/* 360 Interactive Viewport Area */}
      <div 
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="w-full h-[420px] sm:h-[520px] cursor-grab active:cursor-grabbing relative overflow-hidden select-none"
      >
        <div 
          className="w-[140%] h-[140%] -ml-[20%] -mt-[20%] transition-transform duration-75"
          style={{
            backgroundImage: `url(${rooms[room]})`,
            backgroundSize: `${zoom}% auto`,
            backgroundPosition: `${posX}% ${posY}%`,
          }}
        />

        {/* Drag Instruction Overlay Badge */}
        <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 text-[#D4AF37] text-xs font-bold flex items-center gap-2 pointer-events-none">
          <Move className="w-4 h-4" />
          <span>Click & Drag Cursor to View 360°</span>
        </div>

        {/* Zoom Controls Overlay */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md p-1.5 rounded-xl border border-white/20 text-white text-xs">
          <button 
            onClick={() => setZoom(prev => Math.min(prev + 15, 160))}
            className="p-1.5 hover:bg-white/10 rounded-lg"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setZoom(prev => Math.max(prev - 15, 85))}
            className="p-1.5 hover:bg-white/10 rounded-lg"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
        </div>

        {/* Floating Compass Indicator */}
        <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md p-2 rounded-full border border-[#D4AF37]/50 text-[#D4AF37] pointer-events-none">
          <Compass className="w-6 h-6 animate-pulse" />
        </div>
      </div>

    </div>
  );
}
