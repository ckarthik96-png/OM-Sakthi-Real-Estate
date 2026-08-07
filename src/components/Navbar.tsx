'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Menu, X, Building2, ShieldCheck, UserCheck, Search, ChevronDown, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-[#0F4C81] text-white text-xs sm:text-sm py-2.5 px-6 lg:px-12 border-b border-white/10">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-5 flex-wrap">
            <span className="flex items-center gap-2 font-medium">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              HQ: No.29, 3rd Main Road, Arasappa Layout, Muthanallur Cross, Bengaluru - 562125
            </span>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:flex items-center gap-2 text-slate-200">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              RERA Verified Partner • Ramesh
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs sm:text-sm">
            <a href="tel:+918884903668" className="flex items-center gap-2 hover:text-[#D4AF37] transition font-bold">
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>+91 88849 03668 / 80957 34812</span>
            </a>
            <a href="mailto:ramesh@omsakthirealestate.com" className="hidden sm:flex items-center gap-2 hover:text-[#D4AF37] transition font-medium">
              <Mail className="w-4 h-4 text-[#D4AF37]" />
              <span>ramesh@omsakthirealestate.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphism Navigation Bar */}
      <div className="glass-panel border-b border-slate-200/80 shadow-xs">
        <div className="w-full px-6 lg:px-12 py-4 flex justify-between items-center">
          
          {/* Brand Logo - Premium Architectural Gold Crest Style */}
          <Link href="/" className="flex items-center gap-3.5 group select-none">
            {/* Architectural Gold Emblem Icon */}
            <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0B2545] via-[#134074] to-[#0B2545] flex items-center justify-center shadow-lg group-hover:shadow-amber-500/20 group-hover:scale-105 transition duration-300 border border-[#D4AF37]/50 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400/20 via-transparent to-transparent" />
              <Building2 className="w-7 h-7 text-[#EEB902] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
              <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300" />
            </div>

            {/* Typography & Metallic Gold Badge */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-black text-2xl tracking-tight text-[#0B2545] font-serif uppercase drop-shadow-xs">
                  OM SAKTHI
                </span>
                <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27] text-[#0F172A] font-black text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-md shadow-xs border border-amber-600/30">
                  REAL ESTATE
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] font-extrabold tracking-widest text-slate-500 uppercase">
                  TRUSTED PROPERTY PARTNER • MUTHANALLUR CROSS
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" title="RERA Active" />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm sm:text-base font-bold uppercase tracking-wider text-slate-800">
            <Link href="/" className="hover:text-[#0F4C81] transition py-1 border-b-2 border-transparent hover:border-[#0F4C81]">
              Home
            </Link>
            <Link href="/properties?type=Villas" className="hover:text-[#0F4C81] transition py-1 border-b-2 border-transparent hover:border-[#0F4C81]">
              Villas
            </Link>
            <Link href="/properties?type=Plots" className="hover:text-[#0F4C81] transition py-1 border-b-2 border-transparent hover:border-[#0F4C81]">
              Plots & Land
            </Link>
            <Link href="/properties?type=Apartments" className="hover:text-[#0F4C81] transition py-1 border-b-2 border-transparent hover:border-[#0F4C81]">
              Apartments
            </Link>
            <Link href="/properties?type=Lease%20House" className="hover:text-[#0F4C81] transition py-1 border-b-2 border-transparent hover:border-[#0F4C81] text-amber-700 font-extrabold">
              Lease House
            </Link>
            <Link href="/services" className="hover:text-[#0F4C81] transition py-1 border-b-2 border-transparent hover:border-[#0F4C81]">
              Services & Guidance
            </Link>
            <Link href="/admin" className="text-slate-700 bg-slate-100 hover:bg-[#0F4C81] hover:text-white px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold flex items-center gap-2 transition border border-slate-200">
              <UserCheck className="w-4 h-4 text-[#D4AF37]" />
              CRM Portal
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/919845012345"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold p-3 rounded-xl shadow-xs transition"
              title="WhatsApp Enquiry"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <Link 
              href="/#contact"
              className="gold-gradient-button px-5 py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider font-extrabold shadow-md"
            >
              Book Site Visit
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-xl">
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 font-semibold border-b border-slate-100 text-sm"
          >
            Home
          </Link>
          <Link 
            href="/properties" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 font-semibold border-b border-slate-100 text-sm"
          >
            Explore Properties
          </Link>
          <Link 
            href="/properties?type=Lease%20House" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-amber-800 font-bold border-b border-slate-100 text-sm"
          >
            Lease House Options
          </Link>
          <Link 
            href="/services" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 font-semibold border-b border-slate-100 text-sm"
          >
            Services & Legal Guidance
          </Link>
          <Link 
            href="/admin" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#0F4C81] font-extrabold border-b border-slate-100 text-sm"
          >
            Enterprise CRM & Admin Portal
          </Link>
          <Link 
            href="/#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center bg-[#0F4C81] text-white font-bold py-3 rounded-xl mt-4 text-xs uppercase tracking-wider shadow-md"
          >
            Schedule Doorstep Site Visit
          </Link>
        </div>
      )}

      {/* Floating Official WhatsApp Direct Chat Button (Fixed Bottom Left) */}
      <a
        href="https://wa.me/918884903668?text=Hi%20Ramesh%20(OM%20Sakthi%20Real%20Estate),%20I%20want%20property%20details%20and%20brochure."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:scale-110 transition duration-300 flex items-center gap-2.5 border-2 border-white/80 group"
        title="Chat with Ramesh on WhatsApp (+91 88849 03668)"
      >
        <img 
          src="/OM-Sakthi-Real-Estate/whatsapp_icon.png" 
          alt="WhatsApp Logo" 
          className="w-7 h-7 object-contain group-hover:rotate-12 transition duration-300"
          onError={(e) => { (e.target as HTMLImageElement).src = "/whatsapp_icon.png"; }}
        />
        <span className="hidden sm:inline font-black text-xs uppercase tracking-wider text-white">
          WhatsApp Ramesh
        </span>
      </a>
    </header>
  );
}
