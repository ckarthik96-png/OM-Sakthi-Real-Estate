'use client';

import React, { useState } from 'react';
import { Layers, Image as ImageIcon, Video, Compass, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

interface InteractiveMediaViewerProps {
  heroImage: string;
  galleryImages: string[];
  title: string;
}

export default function InteractiveMediaViewer({ heroImage, galleryImages, title }: InteractiveMediaViewerProps) {
  const [activeMode, setActiveMode] = useState<'photos' | 'virtual360' | 'video' | 'masterplan'>('photos');
  const [selectedPhoto, setSelectedPhoto] = useState<string>(heroImage);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-10">
      
      {/* Interactive Mode Navigation Bar */}
      <div className="bg-slate-900 text-white p-3 sm:p-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="bg-[#D4AF37] text-slate-900 text-[11px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
            Interactive Showcase
          </span>
          <h3 className="text-xs sm:text-sm font-bold text-slate-200 hidden sm:inline">{title}</h3>
        </div>

        {/* View Mode Tabs */}
        <div className="flex items-center gap-1.5 text-xs font-semibold">
          <button
            onClick={() => setActiveMode('photos')}
            className={`px-3 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
              activeMode === 'photos' ? 'bg-[#0F4C81] text-white shadow-xs' : 'text-slate-400 hover:text-white'
            }`}
          >
            <ImageIcon className="w-4 h-4 text-[#D4AF37]" />
            <span>Photos ({galleryImages.length + 1})</span>
          </button>

          <button
            onClick={() => setActiveMode('virtual360')}
            className={`px-3 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
              activeMode === 'virtual360' ? 'bg-[#0F4C81] text-white shadow-xs' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Compass className="w-4 h-4 text-[#D4AF37]" />
            <span>360° Tour</span>
          </button>

          <button
            onClick={() => setActiveMode('video')}
            className={`px-3 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
              activeMode === 'video' ? 'bg-[#0F4C81] text-white shadow-xs' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Video className="w-4 h-4 text-[#D4AF37]" />
            <span>Drone Video</span>
          </button>

          <button
            onClick={() => setActiveMode('masterplan')}
            className={`px-3 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
              activeMode === 'masterplan' ? 'bg-[#0F4C81] text-white shadow-xs' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4 text-[#D4AF37]" />
            <span>Master Plan</span>
          </button>
        </div>
      </div>

      {/* Media Viewer Area */}
      <div className="relative min-h-[380px] sm:min-h-[480px] bg-slate-950 flex items-center justify-center">
        
        {/* Photos Mode */}
        {activeMode === 'photos' && (
          <div className="w-full h-[380px] sm:h-[480px] relative">
            <img 
              src={selectedPhoto} 
              alt={title}
              className="w-full h-full object-cover animate-in fade-in duration-300"
            />
            {/* Gallery Thumbnail Bar */}
            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/85 backdrop-blur-md p-2 rounded-2xl border border-white/10 flex gap-2 overflow-x-auto">
              {[heroImage, ...galleryImages].map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPhoto(img)}
                  className={`w-16 h-12 rounded-xl overflow-hidden shrink-0 border-2 transition ${
                    selectedPhoto === img ? 'border-[#D4AF37] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 360° Virtual Tour Mockup Mode */}
        {activeMode === 'virtual360' && (
          <div className="w-full h-[380px] sm:h-[480px] relative bg-slate-900 flex flex-col items-center justify-center text-white p-6 text-center">
            <div className="w-20 h-20 rounded-full bg-[#0F4C81]/40 border-2 border-[#D4AF37] flex items-center justify-center mb-4 animate-pulse">
              <Compass className="w-10 h-10 text-[#D4AF37]" />
            </div>
            <h4 className="text-xl font-bold mb-1">360° Interactive Virtual Tour</h4>
            <p className="text-xs text-slate-400 max-w-md mb-6">
              Drag cursor to look around the villa living room and master suite layout.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-semibold text-[#D4AF37] border border-white/20">
              <Sparkles className="w-4 h-4" /> Drag to Pan 360° (Interactive Mode Enabled)
            </div>
          </div>
        )}

        {/* Drone Video Mode */}
        {activeMode === 'video' && (
          <div className="w-full h-[380px] sm:h-[480px] relative bg-slate-900 flex flex-col items-center justify-center text-white p-6 text-center">
            <div className="w-20 h-20 rounded-full bg-emerald-600/40 border-2 border-emerald-400 flex items-center justify-center mb-4">
              <Video className="w-10 h-10 text-emerald-400" />
            </div>
            <h4 className="text-xl font-bold mb-1">4K UHD Drone Aerial Tour</h4>
            <p className="text-xs text-slate-400 max-w-md mb-6">
              Full HD aerial footage of Sarjapur villa gated community and greenery.
            </p>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#0F4C81] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md hover:bg-[#0A365C] transition"
            >
              Play Fullscreen 4K Drone Video
            </a>
          </div>
        )}

        {/* Master Plan Mode */}
        {activeMode === 'masterplan' && (
          <div className="w-full h-[380px] sm:h-[480px] relative bg-slate-100 p-6 flex flex-col items-center justify-center text-slate-800 text-center">
            <div className="max-w-lg bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                <span className="font-extrabold text-sm text-[#0F4C81]">Architectural Master Plan</span>
                <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded">RERA Approved</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
                alt="Master Plan Blueprint"
                className="w-full h-48 object-cover rounded-xl mb-4 border border-slate-200"
              />
              <p className="text-xs text-slate-600 font-medium">
                Gated Layout Plot Nos. 1–48 with 40ft blacktop asphalt roads, underground cabling, and landscaped parks.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
