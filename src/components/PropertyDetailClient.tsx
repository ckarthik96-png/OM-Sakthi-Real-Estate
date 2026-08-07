'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import AiPropertyAssistant from '@/components/AiPropertyAssistant';
import InteractiveMediaViewer from '@/components/InteractiveMediaViewer';
import Link from 'next/link';
import { Property } from '@/data/mockData';
import { 
  MapPin, Bed, Bath, Maximize, ShieldCheck, CheckCircle2, 
  Calculator, Phone, Calendar, ArrowLeft, Download, FileText,
  Layers, Compass, Award, CheckSquare, Send, Check
} from 'lucide-react';

export default function PropertyDetailClient({ property }: { property: Property }) {
  // Navigation Tabs state (Prestige Group Pattern)
  const [activeTab, setActiveTab] = useState<'about' | 'plans' | 'amenities' | 'location' | 'gallery'>('about');

  // Contact Form state
  const [leadForm, setLeadForm] = useState({ mobile: '', email: '', whatsapp: true });
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // Financial Calculators state
  const [loanAmount, setLoanAmount] = useState<number>(property.numericPrice * 0.8);
  const [tenureYears, setTenureYears] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(8.5);

  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const stampDuty = Math.round(property.numericPrice * 0.056);
  const registrationFee = Math.round(property.numericPrice * 0.01);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSubmitted(true);
    setTimeout(() => setLeadSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFB] flex flex-col font-sans">
      <Navbar />

      {/* Prestige-Style Floating Sticky Sub-Header Tabs */}
      <div className="bg-white border-b border-slate-200 sticky top-[73px] z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2.5">
          
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('about')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition uppercase tracking-wider ${
                activeTab === 'about' ? 'bg-[#0F4C81] text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab('plans')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition uppercase tracking-wider ${
                activeTab === 'plans' ? 'bg-[#0F4C81] text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Plans & Blueprint
            </button>
            <button
              onClick={() => setActiveTab('amenities')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition uppercase tracking-wider ${
                activeTab === 'amenities' ? 'bg-[#0F4C81] text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Amenities
            </button>
            <button
              onClick={() => setActiveTab('location')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition uppercase tracking-wider ${
                activeTab === 'location' ? 'bg-[#0F4C81] text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Location Map
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition uppercase tracking-wider ${
                activeTab === 'gallery' ? 'bg-[#0F4C81] text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Virtual 3D Gallery
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+919845012345" className="text-slate-800 font-bold text-xs flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#D4AF37]" /> +91 98450 12345
            </a>
            <a href="#lead-form" className="gold-gradient-button px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-extrabold shadow-md">
              Enquire Now
            </a>
          </div>

        </div>
      </div>

      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Navigation */}
          <Link 
            href="/properties" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F4C81] hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Verified Properties Catalog
          </Link>

          {/* Title & Price Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#0F4C81] text-white text-xs font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">
                  {property.category}
                </span>
                <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-0.5 rounded-full">
                  {property.status}
                </span>
                {property.reraId && (
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-0.5 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> RERA Approved
                  </span>
                )}
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {property.title}
              </h1>
              <p className="text-slate-600 text-xs sm:text-sm flex items-center gap-1 mt-1 font-medium">
                <MapPin className="w-4 h-4 text-[#0F4C81]" /> {property.address}
              </p>
            </div>

            <div className="text-left md:text-right bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <span className="text-[11px] text-slate-500 font-extrabold block uppercase tracking-wider">Indicative Pricing</span>
              <span className="text-2xl sm:text-4xl font-extrabold text-[#0F4C81]">
                {property.price}
              </span>
            </div>
          </div>

          {/* Main 2-Column Split: Content vs Prestige Style Lead Form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Left 2 Columns: Prestige Content Section */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Media Showcase (Photos, 3D Tour, Drone Video) */}
              <InteractiveMediaViewer 
                heroImage={property.image}
                galleryImages={property.gallery}
                title={property.title}
              />

              {/* Section 1: About Property (Prestige Style Editorial Typography) */}
              <section id="about" className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold text-[#0F4C81] uppercase tracking-wider">Overview & Vision</span>
                  <h2 className="text-2xl font-extrabold text-slate-900 mt-1">About {property.title}</h2>
                </div>

                <div className="space-y-5 text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-[#0F4C81] text-sm uppercase tracking-wide">SCULPT A BRILLIANT FUTURE</h4>
                    <p>
                      It’s time to unveil a future shimmering with promise, in which your lifestyle aspirations and investment goals come together in perfect harmony. Welcome to <strong>{property.title}</strong>, a brilliant planned plotted and luxury development, designed for those who know that tomorrow begins with the choices they make today. Discover a brighter, better life. A life close to nature, close to convenience, and closer still to the dreams you see in your own crystal ball.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-extrabold text-[#0F4C81] text-sm uppercase tracking-wide">LIVE IN A SPARKLING SETTING</h4>
                    <p>
                      Located in the fast-evolving Sarjapur growth corridor near Muthanallur Cross, close to NH44 / Hosur Expressway and just a short drive from key IT hubs, <strong>{property.title}</strong> places you at the heart of Bengaluru’s growth corridor where the future is taking shape. Premier international schools, colleges, tech parks, and leisure resorts emerge into view, signs of a vibrant tomorrow where every convenience is within your reach.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-extrabold text-[#0F4C81] text-sm uppercase tracking-wide">SCRIPT EVERY FACET OF YOUR STORY</h4>
                    <p>
                      Shape your home, design your lifestyle, script your story, exactly as you have always imagined it. Choose from thoughtfully laid out premium units in 60x40 sq.ft and 50x80 sq.ft configurations. Or, if your lifestyle demands more space, opt for one of a select number of larger custom plots. {property.title} opens the door to the future you have dreamed of, where you can live life as large as you want to.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-extrabold text-[#0F4C81] text-sm uppercase tracking-wide">CHISEL ON NATURE’S CRYSTAL</h4>
                    <p>
                      At the very heart of the development lies a massive central park, its refreshing, green soul. Look anywhere and nature smiles at you in the form of flowering gardens and vast lawns, social spaces, and shaded seating.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-extrabold text-[#0F4C81] text-sm uppercase tracking-wide">CARVE A LIFE OF MYRIAD POSSIBILITIES</h4>
                    <p>
                      At {property.title}, moments can linger and stretch as you relax in nature’s green embrace, or commune with your inner self on the yoga deck. Or life can pick up its pace and set the adrenaline flowing in the modern clubhouse with amenities such as pickleball, badminton, snooker, table tennis, a party hall, and more.
                    </p>
                  </div>
                </div>

                {property.reraId && (
                  <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <strong>RERA Registration No:</strong> {property.reraId}
                    </span>
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full">100% RERA Verified</span>
                  </div>
                )}
              </section>

              {/* Section 2: Plans & Blueprint (Prestige Style Cards) */}
              <section id="plans" className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold text-[#0F4C81] uppercase tracking-wider">Architectural Blueprint</span>
                  <h2 className="text-2xl font-extrabold text-slate-900 mt-1">Plans & Blueprint</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Master Plan Card */}
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 group">
                    <div className="relative h-56 rounded-xl overflow-hidden mb-3 bg-slate-900">
                      <img 
                        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" 
                        alt="Master Plan Blueprint" 
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-[#0F4C81] text-white text-[10px] font-extrabold px-2.5 py-1 rounded uppercase">
                        Master Plan
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">Sanctioned Master Plan Blueprint</h4>
                    <p className="text-xs text-slate-500 mt-1">BMRDA approved layout with asphalt roads, parks & clubhouse area.</p>
                  </div>

                  {/* Location Map Card */}
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 group">
                    <div className="relative h-56 rounded-xl overflow-hidden mb-3 bg-slate-900">
                      <img 
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                        alt="Location Map" 
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-amber-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded uppercase">
                        Location Map
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">Location Connectivity Blueprint</h4>
                    <p className="text-xs text-slate-500 mt-1">Direct access to Sarjapur Main Road, NH44 & Metro Corridor.</p>
                  </div>
                </div>
              </section>

              {/* Section 3: Amenities Grid (Prestige Crystal Lawns 20 Amenities) */}
              <section id="amenities" className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold text-[#0F4C81] uppercase tracking-wider">Lifestyle Amenities</span>
                  <h2 className="text-2xl font-extrabold text-slate-900 mt-1">Amenities</h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                  {[
                    'Pedestrian Pathway',
                    'Water Feature & Bubbler Fountain',
                    'Amphitheatre',
                    'Yoga Lawn',
                    'Camp Fire',
                    'Sit Outs & Gazebos',
                    'Discovery Garden',
                    'Multipurpose Court',
                    'Kids Playground',
                    'Rock Climbing',
                    'Senior Citizen Area',
                    'Basketball Court',
                    'Joggers Park',
                    'Clubhouse',
                    'Outdoor Gyms',
                    'Reflexology Pathway',
                    'Pet Park',
                    'Yoga & Meditation Deck',
                    'Orchard',
                    'Miyawaki Greens'
                  ].map((amenityName, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center hover:border-[#0F4C81] hover:shadow-md transition group">
                      <div className="w-10 h-10 rounded-xl bg-[#0F4C81]/10 text-[#0F4C81] flex items-center justify-center mx-auto mb-2 group-hover:bg-[#0F4C81] group-hover:text-white transition">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-xs text-slate-800 block leading-tight">{amenityName}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: Financial & Loan Calculators */}
              <section className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-4">
                  <Calculator className="w-6 h-6 text-[#0F4C81]" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Home Loan EMI & Statutory Calculator</h3>
                    <p className="text-xs text-slate-500">Calculate instant monthly EMI and Karnataka registration costs.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Loan Amount (₹)</label>
                    <input 
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Tenure (Years)</label>
                    <input 
                      type="number"
                      value={tenureYears}
                      onChange={(e) => setTenureYears(Number(e.target.value))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Interest Rate (%)</label>
                    <input 
                      type="number"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold"
                    />
                  </div>
                </div>

                <div className="bg-slate-950 text-white p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">Estimated Monthly EMI</span>
                    <span className="text-3xl font-extrabold text-[#D4AF37]">₹ {emi.toLocaleString('en-IN')} / mo</span>
                  </div>
                  <div className="text-right text-xs text-slate-400">
                    Approved Banks:<br />
                    <span className="text-white font-bold">SBI • HDFC • ICICI • Axis Bank</span>
                  </div>
                </div>

                {/* Karnataka Stamp Duty */}
                <div className="grid grid-cols-2 gap-4 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div>
                    <span className="text-slate-500 block">Stamp Duty (5.6% KA)</span>
                    <span className="font-bold text-slate-900 text-sm">₹ {stampDuty.toLocaleString('en-IN')}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Registration Fee (1.0% KA)</span>
                    <span className="font-bold text-slate-900 text-sm">₹ {registrationFee.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </section>

            </div>

            {/* Right Column: Prestige Group OTP Lead Verification Form */}
            <div id="lead-form" className="space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl sticky top-28">
                
                <div className="border-b border-slate-200 pb-4 mb-6">
                  <span className="text-[10px] font-extrabold bg-[#0F4C81] text-white px-2.5 py-0.5 rounded uppercase tracking-wider">
                    Official Developer Inquiry
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-2">Book Site Visit & E-Brochure</h3>
                  <p className="text-xs text-slate-500 mt-1">Get instant price sheet and doorstep pick-up from Muthanallur Cross HQ.</p>
                </div>

                {leadSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center text-xs space-y-2">
                    <Check className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="font-bold text-sm">Inquiry Submitted Successfully!</h4>
                    <p>Our Senior Advisor for {property.title} will send the PDF E-Brochure and call you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Mobile Number *</label>
                      <input 
                        type="tel"
                        required
                        value={leadForm.mobile}
                        onChange={(e) => setLeadForm({ ...leadForm, mobile: e.target.value })}
                        placeholder="+91 98450 00000"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <input 
                        type="checkbox"
                        id="whatsapp"
                        checked={leadForm.whatsapp}
                        onChange={(e) => setLeadForm({ ...leadForm, whatsapp: e.target.checked })}
                        className="w-4 h-4 rounded text-[#0F4C81]"
                      />
                      <label htmlFor="whatsapp" className="text-slate-600 font-medium">
                        Do you have WhatsApp activated on this number?
                      </label>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Your Email Address *</label>
                      <input 
                        type="email"
                        required
                        value={leadForm.email}
                        onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
                      />
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                      <span className="font-bold text-slate-700 block">Verify with:</span>
                      <div className="flex items-center gap-4">
                        <label className="flex items-center gap-1.5 font-semibold text-slate-800">
                          <input type="radio" name="verify" defaultChecked /> Mobile OTP
                        </label>
                        <label className="flex items-center gap-1.5 font-semibold text-slate-800">
                          <input type="radio" name="verify" /> WhatsApp URL
                        </label>
                      </div>
                    </div>

                    <p className="text-[10px] text-slate-400 leading-normal">
                      I confirm that I am 18 years of age or older and agree to receive updates regarding {property.title} as per RERA terms.
                    </p>

                    <button
                      type="submit"
                      className="w-full gold-gradient-button py-3 rounded-xl uppercase tracking-wider font-extrabold shadow-md flex items-center justify-center gap-2 text-xs"
                    >
                      <Send className="w-4 h-4 text-slate-900" />
                      <span>Send OTP & Download Brochure</span>
                    </button>
                  </form>
                )}

                <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                  <a
                    href={`https://wa.me/919845012345?text=Hi%20OM%20Sakthi,%20I%20want%20details%20for%20${encodeURIComponent(property.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl transition text-xs flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Instant WhatsApp Inquiry</span>
                  </a>

                  <a
                    href="tel:+919845012345"
                    className="w-full bg-[#0F4C81] hover:bg-[#0A365C] text-white font-bold py-2.5 rounded-xl transition text-xs flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <span>Call Senior Advisor</span>
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </main>

      <AiPropertyAssistant />
    </div>
  );
}
