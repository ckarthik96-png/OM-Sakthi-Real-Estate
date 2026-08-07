'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Menu, X, Building2, ShieldCheck, UserCheck } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      {/* Top Banner Bar */}
      <div className="bg-[#0F4C81] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              Office: Muthanallur Cross, Sarjapur Road, Bengaluru
            </span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span className="hidden md:flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              Verified Local Real Estate Partner
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:+919845000000" className="flex items-center gap-1.5 hover:text-[#D4AF37] transition">
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

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0F4C81] to-[#0A365C] flex items-center justify-center text-[#D4AF37] font-bold text-xl shadow-md group-hover:scale-105 transition">
            <Building2 className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <div>
            <div className="font-extrabold text-xl text-[#0F4C81] tracking-tight flex items-center gap-1">
              OM SAKTHI <span className="text-[#D4AF37] font-semibold text-sm bg-[#0F4C81]/10 px-2 py-0.5 rounded">REAL ESTATE</span>
            </div>
            <p className="text-[10px] text-slate-500 font-medium tracking-wide">YOUR TRUSTED PROPERTY PARTNER • SARJAPUR</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
          <Link href="/" className="hover:text-[#0F4C81] transition py-1 border-b-2 border-transparent hover:border-[#0F4C81]">
            Home
          </Link>
          <Link href="/properties" className="hover:text-[#0F4C81] transition py-1 border-b-2 border-transparent hover:border-[#0F4C81]">
            Properties
          </Link>
          <Link href="/services" className="hover:text-[#0F4C81] transition py-1 border-b-2 border-transparent hover:border-[#0F4C81]">
            Services & Guidance
          </Link>
          <Link href="/#locations" className="hover:text-[#0F4C81] transition py-1 border-b-2 border-transparent hover:border-[#0F4C81]">
            Popular Locations
          </Link>
          <Link href="/#about" className="hover:text-[#0F4C81] transition py-1 border-b-2 border-transparent hover:border-[#0F4C81]">
            About Us
          </Link>
          <Link href="/admin" className="text-slate-600 bg-slate-100 hover:bg-[#0F4C81] hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition">
            <UserCheck className="w-3.5 h-3.5" />
            CRM / Agent Admin
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link 
            href="#contact"
            className="bg-gradient-to-r from-[#D4AF37] to-[#B59325] hover:from-[#B59325] hover:to-[#96791E] text-slate-900 font-semibold px-4 py-2 rounded-xl text-sm shadow-sm hover:shadow-md transition duration-200"
          >
            Schedule Site Visit
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 font-medium border-b border-slate-100"
          >
            Home
          </Link>
          <Link 
            href="/properties" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 font-medium border-b border-slate-100"
          >
            Explore Properties
          </Link>
          <Link 
            href="/#services" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-800 font-medium border-b border-slate-100"
          >
            Our Services
          </Link>
          <Link 
            href="/admin" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#0F4C81] font-semibold border-b border-slate-100"
          >
            Admin Dashboard & CRM
          </Link>
          <Link 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center bg-[#0F4C81] text-white font-medium py-2.5 rounded-xl mt-4"
          >
            Schedule Site Visit
          </Link>
        </div>
      )}
    </header>
  );
}
