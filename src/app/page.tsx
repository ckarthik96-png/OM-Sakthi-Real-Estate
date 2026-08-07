'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSearch from '@/components/HeroSearch';
import FeaturedProperties from '@/components/FeaturedProperties';
import AiPropertyAssistant from '@/components/AiPropertyAssistant';
import Link from 'next/link';
import { 
  Building2, ShieldCheck, Landmark, MapPin, CheckCircle2, 
  Phone, Mail, Clock, Send, ArrowRight, Award, Compass, Sparkles, TrendingUp
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
    <div className="min-h-screen bg-[#FAFAFB] flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Act 1: Cinematic Full-Screen Hero */}
        <HeroSearch />

        {/* Act 2: DLF-Style Corporate Brand Statement & Market Metrics */}
        <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The Benchmark of Luxury & Trust</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
                  Redefining Real Estate Excellence in <span className="gold-gradient-text">Sarjapur & Muthanallur</span>
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-8 font-light">
                  OM Sakthi Real Estate brings an enterprise-grade digital flagship portal for luxury homebuyers, land investors, and corporate tenants. Combining complete RERA legal due diligence with personal relationship advisory.
                </p>

                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800 text-center">
                  <div>
                    <span className="text-2xl sm:text-4xl font-extrabold text-[#D4AF37] block">15+</span>
                    <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Years Excellence</span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-4xl font-extrabold text-white block">100%</span>
                    <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">RERA Verified</span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-4xl font-extrabold text-[#D4AF37] block">₹500Cr+</span>
                    <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Assets Advised</span>
                  </div>
                </div>
              </div>

              {/* DLF Style Luxury Interior Showcase */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
                  alt="DLF Style Modern Interior"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-1">Architectural Benchmark</span>
                  <h4 className="text-lg font-bold text-white">4 BHK Ultra-Luxury Independent Villas</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Act 3: Featured Luxury Property Portfolios */}
        <FeaturedProperties />

        {/* Act 4: Why Choose OM Sakthi */}
        <section className="py-20 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[#0F4C81] text-xs font-extrabold uppercase tracking-wider bg-[#0F4C81]/10 px-3.5 py-1 rounded-full">
                Sarjapur Property Pioneers
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Why Choose OM Sakthi Real Estate?
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                We combine deep local market presence in Muthanallur Cross & Sarjapur with transparent legal verification and end-to-end guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:shadow-xl transition duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-[#0F4C81] text-[#D4AF37] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">100% Legal & RERA Verified</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every plot, villa, and apartment listed goes through rigorous title verification, encumbrance check, and RERA compliance verification before showcase.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:shadow-xl transition duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-[#0F4C81] text-[#D4AF37] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Muthanallur & Sarjapur Experts</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Headquartered at Muthanallur Cross junction, our local agents hold decades of collective experience across Sarjapur, Dommasandra & Attibele corridors.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:shadow-xl transition duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-[#0F4C81] text-[#D4AF37] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition">
                  <Landmark className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Home Loan & Registration Support</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct tie-ups with SBI, HDFC, ICICI, and Axis Bank for instant home loan approvals and complete sub-registrar office registration assistance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Act 5: Doorstep Site Visit Appointment Scheduler */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              <div>
                <span className="text-[#0F4C81] text-xs font-bold uppercase tracking-wider bg-[#0F4C81]/10 px-3 py-1 rounded-full">
                  Visit Our HQ
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-6">
                  Schedule a Doorstep Site Visit
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
                </div>

                <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center justify-between">
                  <div>
                    <span className="font-bold block">Need an Agent Pick-up?</span>
                    <span>Free doorstep pick & drop for genuine property buyers around Sarjapur.</span>
                  </div>
                  <a href="tel:+919845012345" className="bg-[#0F4C81] text-white font-bold px-3 py-2 rounded-lg text-xs shrink-0">
                    Call Now
                  </a>
                </div>
              </div>

              {/* Consultation / Site Visit Request Form */}
              <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Book a Private Site Visit</h3>
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
                      <label className="block text-xs font-bold text-slate-700 mb-1">Message / Requirements</label>
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
                      className="w-full gold-gradient-button py-3 rounded-xl shadow-md flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-extrabold"
                    >
                      <Send className="w-4 h-4 text-slate-900" />
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

      {/* Act 6: Luxury DLF-Style Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="font-extrabold text-xl text-white mb-3 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-[#D4AF37]" />
              OM SAKTHI REAL ESTATE
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Sarjapur’s leading luxury real estate flagship platform specializing in villas, plots, smart apartments, and commercial investments near Muthanallur Cross.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Quick Portals</h4>
            <ul className="space-y-2.5">
              <li><Link href="/properties" className="hover:text-[#D4AF37] transition">All Verified Listings</Link></li>
              <li><Link href="/services" className="hover:text-[#D4AF37] transition">Services & Legal Advice</Link></li>
              <li><Link href="/admin" className="hover:text-[#D4AF37] transition">CRM & Agent Portal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Sarjapur Corridors</h4>
            <ul className="space-y-2.5">
              <li>Muthanallur Cross Junction</li>
              <li>Sarjapur Main Road</li>
              <li>Dommasandra Circle</li>
              <li>Attibele Industrial Belt</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Headquarters</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Muthanallur Cross Junction, Sarjapur Main Road, Bengaluru, KA 562125
            </p>
            <p className="mt-3 text-white font-extrabold text-sm">+91 98450 12345</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-900 text-center text-slate-500 text-[11px]">
          © {new Date().getFullYear()} OM Sakthi Real Estate. Built per Master Project Bible v1.0 specifications.
        </div>
      </footer>
    </div>
  );
}
