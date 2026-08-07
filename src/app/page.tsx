'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSearch from '@/components/HeroSearch';
import FeaturedProperties from '@/components/FeaturedProperties';
import AiPropertyAssistant from '@/components/AiPropertyAssistant';
import Link from 'next/link';
import { 
  Building2, ShieldCheck, FileCheck, Landmark, Home, 
  MapPin, CheckCircle2, Phone, Mail, Clock, Send, Star, ArrowRight, UserCheck
} from 'lucide-react';

export default function HomePage() {
  const [formData, setFormData] = useState({ name: '', phone: '', interest: 'Villas', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSearch />

        {/* Featured Listings Section */}
        <FeaturedProperties />

        {/* Why Choose Us */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[#0F4C81] text-xs font-bold uppercase tracking-wider bg-[#0F4C81]/10 px-3 py-1 rounded-full">
                Sarjapur Property Pioneers
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Why Choose OM Sakthi Real Estate?
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                We combine deep local market presence in Muthanallur Cross & Sarjapur with transparent legal verification and end-to-end guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-[#0F4C81] text-[#D4AF37] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">100% Legal & RERA Verified</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every plot, villa, and apartment listed goes through rigorous title verification, encumbrance check, and RERA compliance verification before showcase.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-[#0F4C81] text-[#D4AF37] flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Muthanallur & Sarjapur Experts</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Headquartered at Muthanallur Cross junction, our local agents hold decades of collective experience across Sarjapur, Dommasandra & Attibele corridors.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-[#0F4C81] text-[#D4AF37] flex items-center justify-center mb-4">
                  <Landmark className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Home Loan & Registration Support</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct tie-ups with SBI, HDFC, ICICI, and Axis Bank for instant home loan approvals and complete sub-registrar office registration assistance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Services */}
        <section id="services" className="py-16 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">
                End-To-End Real Estate Solutions
              </span>
              <h2 className="text-3xl font-extrabold mt-3 tracking-tight">
                Our Services & Consultation
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
              {[
                { title: 'Property Buying', desc: 'Villas, Flats & Plots' },
                { title: 'Property Selling', desc: 'Best Market Valuation' },
                { title: 'Rentals & Leasing', desc: 'Residential & Commercial' },
                { title: 'Legal Verification', desc: 'Title & EC Clearance' },
                { title: 'Home Loans', desc: 'Fast Bank Approvals' },
                { title: 'Investment Advisory', desc: 'High ROI Micro-markets' },
              ].map((srv, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37] transition">
                  <CheckCircle2 className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-white mb-1">{srv.title}</h4>
                  <p className="text-[11px] text-slate-400">{srv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Micro-locations Grid */}
        <section id="locations" className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Explore Prime Locations in Sarjapur Belt
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Discover high-appreciation residential hubs with excellent connectivity to IT corridors.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Muthanallur Cross', desc: 'Villa Hub & Main Junction', count: '14 Properties' },
                { name: 'Sarjapur Main Road', desc: 'High-rise & Gated Layouts', count: '28 Properties' },
                { name: 'Dommasandra Circle', desc: 'Rapidly Growing Market', count: '10 Properties' },
                { name: 'Attibele - Sarjapur Belt', desc: 'Farm Lands & Commercial Plots', count: '8 Properties' },
              ].map((loc, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#0F4C81] transition group">
                  <MapPin className="w-5 h-5 text-[#0F4C81] mb-3 group-hover:scale-110 transition" />
                  <h3 className="font-bold text-slate-900 text-base">{loc.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{loc.desc}</p>
                  <div className="mt-4 text-[11px] font-semibold text-[#0F4C81] bg-[#0F4C81]/10 px-2.5 py-1 rounded-md inline-block">
                    {loc.count}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Office Info */}
        <section id="contact" className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Office Details */}
              <div>
                <span className="text-[#0F4C81] text-xs font-bold uppercase tracking-wider bg-[#0F4C81]/10 px-3 py-1 rounded-full">
                  Visit Our Office
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-3 mb-6">
                  Get in Touch with Our Real Estate Experts
                </h2>
                
                <div className="space-y-6 text-sm text-slate-700">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0F4C81] text-white flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Head Office Address</h4>
                      <p className="text-slate-600 text-xs mt-0.5">
                        OM Sakthi Real Estate, Muthanallur Cross Junction, Sarjapur Main Road, Bengaluru, Karnataka - 562125
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0F4C81] text-white flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Phone & WhatsApp Hotline</h4>
                      <p className="text-slate-600 text-xs mt-0.5">+91 98450 12345 / +91 98450 67890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0F4C81] text-white flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Working Hours</h4>
                      <p className="text-slate-600 text-xs mt-0.5">Monday – Sunday: 9:00 AM – 8:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center justify-between">
                  <div>
                    <span className="font-bold block">Need an Agent for Site Visit?</span>
                    <span>Free doorstep pick & drop for genuine property buyers around Sarjapur.</span>
                  </div>
                  <a href="tel:+919845012345" className="bg-[#0F4C81] text-white font-bold px-3 py-2 rounded-lg text-xs shrink-0">
                    Call Now
                  </a>
                </div>
              </div>

              {/* Consultation / Site Visit Request Form */}
              <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Book a Free Property Site Visit</h3>
                <p className="text-xs text-slate-600 mb-6">Fill in your details and our Senior Property Advisor will get back to you within 30 minutes.</p>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-xs font-semibold text-center py-8">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    Thank you! Your request has been received. Our Sarjapur expert will call you shortly.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anand Kumar" 
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:ring-2 focus:ring-[#0F4C81] focus:outline-none" 
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98450 00000" 
                          className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:ring-2 focus:ring-[#0F4C81] focus:outline-none" 
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Property Type</label>
                        <select 
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:ring-2 focus:ring-[#0F4C81] focus:outline-none"
                        >
                          <option value="Villas">Villas</option>
                          <option value="Plots">Residential Plots</option>
                          <option value="Apartments">Apartments</option>
                          <option value="Commercial">Commercial</option>
                          <option value="Farm Lands">Farm Lands</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Message / Requirements (Optional)</label>
                      <textarea 
                        rows={3} 
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Mention preferred budget, BHK, or specific location around Sarjapur..."
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:ring-2 focus:ring-[#0F4C81] focus:outline-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-[#0F4C81] hover:bg-[#0A365C] text-white font-bold py-3 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-xs"
                    >
                      <Send className="w-4 h-4 text-[#D4AF37]" />
                      <span>Request Callback & Site Visit</span>
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>

      </main>

      <AiPropertyAssistant />

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="font-extrabold text-lg text-white mb-2 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#D4AF37]" />
              OM SAKTHI REAL ESTATE
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Sarjapur’s leading real estate agency specializing in luxury villas, residential plots, apartments, and commercial investments near Muthanallur Cross.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/properties" className="hover:text-[#D4AF37]">All Listings</Link></li>
              <li><Link href="/#services" className="hover:text-[#D4AF37]">Services & Legal Advice</Link></li>
              <li><Link href="/admin" className="hover:text-[#D4AF37]">CRM Admin Portal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-3">Key Locations</h4>
            <ul className="space-y-2">
              <li>Muthanallur Cross Junction</li>
              <li>Sarjapur Main Road</li>
              <li>Dommasandra Circle</li>
              <li>Attibele Industrial & Residential Belt</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-3">Office Address</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Muthanallur Cross Junction, Sarjapur Main Road, Bengaluru, KA 562125
            </p>
            <p className="mt-2 text-white font-semibold">+91 98450 12345</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-slate-900 text-center text-slate-500 text-[11px]">
          © {new Date().getFullYear()} OM Sakthi Real Estate. All rights reserved. Built for enterprise performance.
        </div>
      </footer>
    </div>
  );
}
