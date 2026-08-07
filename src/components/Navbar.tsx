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
              HQ: Muthanallur Cross, Sarjapur Road, Bengaluru
            </span>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:flex items-center gap-2 text-slate-200">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              RERA Verified Real Estate Partner
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs sm:text-sm">
            <a href="tel:+919845012345" className="flex items-center gap-2 hover:text-[#D4AF37] transition font-bold">
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>+91 98450 12345</span>
            </a>
            <a href="mailto:info@omsakthirealestate.com" className="hidden sm:flex items-center gap-2 hover:text-[#D4AF37] transition font-medium">
              <Mail className="w-4 h-4 text-[#D4AF37]" />
              <span>info@omsakthirealestate.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphism Navigation Bar */}
      <div className="glass-panel border-b border-slate-200/80 shadow-xs">
        <div className="w-full px-6 lg:px-12 py-4 flex justify-between items-center">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0F4C81] to-[#0A365C] flex items-center justify-center text-[#D4AF37] shadow-md group-hover:scale-105 transition duration-300 border border-[#D4AF37]/30">
              <Building2 className="w-7 h-7 text-[#D4AF37]" />
            </div>
            <div>
              <div className="font-extrabold text-2xl text-[#0F4C81] tracking-tight flex items-center gap-2">
                OM SAKTHI <span className="text-[#0F172A] font-bold text-xs bg-[#D4AF37] px-2.5 py-0.5 rounded shadow-xs">REAL ESTATE</span>
              </div>
              <p className="text-[11px] text-slate-500 font-bold tracking-wide uppercase">YOUR TRUSTED PROPERTY PARTNER • SARJAPUR</p>
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
    </header>
  );
}
