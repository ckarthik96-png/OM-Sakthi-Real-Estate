'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Menu, X, Building2, ShieldCheck, UserCheck, Search, ChevronDown, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-[#0F4C81] text-white text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              HQ: Muthanallur Cross, Sarjapur Road, Bengaluru
            </span>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-200">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              RERA Verified Real Estate Partner
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a href="tel:+919845012345" className="flex items-center gap-1.5 hover:text-[#D4AF37] transition font-semibold">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>+91 98450 12345</span>
            </a>
            <a href="mailto:info@omsakthirealestate.com" className="hidden sm:flex items-center gap-1.5 hover:text-[#D4AF37] transition">
              <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>info@omsakthirealestate.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphism Navigation Bar */}
      <div className="glass-panel border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0F4C81] to-[#0A365C] flex items-center justify-center text-[#D4AF37] shadow-md group-hover:scale-105 transition duration-300 border border-[#D4AF37]/30">
              <Building2 className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <div className="font-extrabold text-xl text-[#0F4C81] tracking-tight flex items-center gap-1.5">
                OM SAKTHI <span className="text-[#0F172A] font-semibold text-xs bg-[#D4AF37] px-2 py-0.5 rounded shadow-xs">REAL ESTATE</span>
              </div>
              <p className="text-[10px] text-slate-500 font-semibold tracking-wide uppercase">YOUR TRUSTED PROPERTY PARTNER • SARJAPUR</p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-slate-700">
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
            <Link href="/properties?type=Lease%20House" className="hover:text-[#0F4C81] transition py-1 border-b-2 border-transparent hover:border-[#0F4C81] text-amber-700 font-bold">
              Lease House
            </Link>
            <Link href="/services" className="hover:text-[#0F4C81] transition py-1 border-b-2 border-transparent hover:border-[#0F4C81]">
              Services & Guidance
            </Link>
            <Link href="/admin" className="text-slate-600 bg-slate-100 hover:bg-[#0F4C81] hover:text-white px-3 py-1.5 rounded-lg text-[11px] font-bold flex items-center gap-1.5 transition">
              <UserCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              CRM Portal
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/919845012345"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold p-2.5 rounded-xl shadow-xs transition"
              title="WhatsApp Enquiry"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <Link 
              href="/#contact"
              className="gold-gradient-button px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold shadow-md"
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
    </header>
  );
}
