'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, Phone, MapPin, Building, ExternalLink } from 'lucide-react';
import { MOCK_PROPERTIES, SEO_LOCATIONS } from '@/data/mockData';
import Link from 'next/link';

interface Message {
  sender: 'ai' | 'user';
  text: string;
  link?: { url: string; label: string };
  propertyCard?: any;
}

export default function AiPropertyAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: 'Namaste! 🙏 I am your OM Sakthi AI Property Advisor. Ask me anything about property prices, BMRDA plots, villas, lease houses, office address, or phone numbers in Sarjapur & Muthanallur Cross!'
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const processQuery = (query: string): Message => {
    const q = query.toLowerCase();

    // 1. Contact Info & Phone Numbers
    if (q.includes('phone') || q.includes('mobile') || q.includes('contact') || q.includes('call') || q.includes('number') || q.includes('whatapp') || q.includes('whatsapp') || q.includes('ramesh')) {
      return {
        sender: 'ai',
        text: `📍 **Office Contact & Phone Hotline**:\n\n👤 **Senior Property Consultant**: Ramesh\n📞 **Mobile Hotline**: +91 88849 03668 / +91 80957 34812\n📧 **Email**: ramesh@omsakthirealestate.com\n🏢 **Address**: No.29, 3rd Main Road, Arasappa Layout, Muthanallur Cross, Bengaluru - 562125.`,
        link: { url: 'https://wa.me/918884903668', label: 'Chat on WhatsApp with Ramesh' }
      };
    }

    // 2. Head Office Address & Location
    if (q.includes('address') || q.includes('office') || q.includes('hq') || q.includes('location') || q.includes('where') || q.includes('direction') || q.includes('map')) {
      return {
        sender: 'ai',
        text: `🏢 **OM Sakthi Head Office HQ**:\n\nNo.29, 3rd Main Road, Arasappa Layout, Muthanallur Cross Junction, Sarjapur Main Road, Bengaluru, Karnataka - 562125.\n\n📍 Landmark: Opposite Muthanallur Circle, Sarjapur Road.`,
        link: { url: '/#contact', label: 'Book Doorstep Pick-up & Site Visit' }
      };
    }

    // 3. Lease House / Deposit Options
    if (q.includes('lease') || q.includes('rent') || q.includes('refundable') || q.includes('deposit')) {
      const leaseHouse = MOCK_PROPERTIES.find(p => p.category === 'Lease House');
      return {
        sender: 'ai',
        text: `🏠 **Refundable Lease House Scheme**:\n\nWe offer registered 3-year lease homes with **100% refundable deposit** and ZERO monthly rent burden!\n\nFeatured Listing: **${leaseHouse?.title}** (${leaseHouse?.location})\nPrice Deposit: **${leaseHouse?.price}**`,
        link: { url: `/properties/${leaseHouse?.id}`, label: 'View Lease Villa Details' },
        propertyCard: leaseHouse
      };
    }

    // 4. Villas & Luxury Homes
    if (q.includes('villa') || q.includes('house') || q.includes('duplex') || q.includes('gated')) {
      const villa = MOCK_PROPERTIES.find(p => p.category === 'Villas');
      return {
        sender: 'ai',
        text: `🏡 **Luxury Gated Community Villas**:\n\nWe have premium 3 BHK & 4 BHK villas featuring private gardens, swimming pools, clubhouse, and 24/7 security near Muthanallur Cross & Sarjapur.\n\nTop Pick: **${villa?.title}**\nPrice: **${villa?.price}** (${villa?.areaSqFt} sq.ft)`,
        link: { url: `/properties/${villa?.id}`, label: 'Explore Villa Project' },
        propertyCard: villa
      };
    }

    // 5. Plots & Land / BMRDA
    if (q.includes('plot') || q.includes('land') || q.includes('bmrda') || q.includes('site') || q.includes('acre') || q.includes('layout')) {
      const plot = MOCK_PROPERTIES.find(p => p.category === 'Plots');
      return {
        sender: 'ai',
        text: `📐 **BMRDA Approved Residential Plots**:\n\nWe feature 30x40, 30x50 & 40x60 sites with 100% clear titles, asphalt roads, underground water/drainage, and instant bank loan clearance.\n\nFeatured Site: **${plot?.title}**\nPrice: **${plot?.price}**`,
        link: { url: `/properties/${plot?.id}`, label: 'View Plot Blueprint & Layout' },
        propertyCard: plot
      };
    }

    // 6. Apartments & Flats
    if (q.includes('apartment') || q.includes('flat') || q.includes('bhk') || q.includes('high rise') || q.includes('tower')) {
      const apt = MOCK_PROPERTIES.find(p => p.category === 'Apartments');
      return {
        sender: 'ai',
        text: `🏢 **Smart High-Rise Apartments**:\n\nExplore 2 & 3 BHK luxury apartments with 30+ lifestyle amenities, rooftop pools, and lake views in Dommasandra & Sarjapur.\n\nFeatured Project: **${apt?.title}**\nPrice: **${apt?.price}**`,
        link: { url: `/properties/${apt?.id}`, label: 'View Apartment Blueprint' },
        propertyCard: apt
      };
    }

    // 7. Commercial Showrooms & Offices
    if (q.includes('commercial') || q.includes('office') || q.includes('shop') || q.includes('retail') || q.includes('store') || q.includes('bank')) {
      const comm = MOCK_PROPERTIES.find(p => p.category === 'Commercial');
      return {
        sender: 'ai',
        text: `🏢 **Main Road Commercial Real Estate**:\n\nHigh footfall retail showrooms and plug-and-play IT office floors facing main junction corridors.\n\nFeatured Property: **${comm?.title}**\nPrice: **${comm?.price}**`,
        link: { url: `/properties/${comm?.id}`, label: 'View Commercial Space' },
        propertyCard: comm
      };
    }

    // 8. Specific Micro-Location Query Search
    const matchedLoc = SEO_LOCATIONS.find(l => q.includes(l.name.toLowerCase()) || q.includes(l.slug));
    if (matchedLoc) {
      return {
        sender: 'ai',
        text: `📍 **Properties in ${matchedLoc.name}**:\n\n${matchedLoc.overview}\n\nAvg. Price: **${matchedLoc.avgPricePerSqFt}**\nWe have 6 verified projects listed in ${matchedLoc.name}.`,
        link: { url: `/locations/${matchedLoc.slug}`, label: `Browse 6 Projects in ${matchedLoc.name}` }
      };
    }

    // 9. Home Loan & EMI Assistance
    if (q.includes('emi') || q.includes('loan') || q.includes('bank') || q.includes('interest') || q.includes('stamp') || q.includes('registration')) {
      return {
        sender: 'ai',
        text: `📊 **Home Loan & Legal Guidance**:\n\nWe provide 80% to 90% instant home loan approvals with **SBI, HDFC, ICICI & Axis Bank** at ~8.5% p.a.\n\nKarnataka Legal Costs:\n• Stamp Duty: ~5.6%\n• Registration Fee: ~1.0%\n\nCall Ramesh at **+91 88849 03668** for free bank valuation.`,
        link: { url: 'tel:+918884903668', label: 'Call Bank Valuation Expert' }
      };
    }

    // Default Fallback Search Across Entire Catalog
    const matchedProp = MOCK_PROPERTIES.find(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.address.toLowerCase().includes(q));
    if (matchedProp) {
      return {
        sender: 'ai',
        text: `✨ Found matching property: **${matchedProp.title}** (${matchedProp.location})\nCategory: **${matchedProp.category}** | Price: **${matchedProp.price}**\n\n${matchedProp.description}`,
        link: { url: `/OM-Sakthi-Real-Estate/properties/${matchedProp.id}`, label: 'View Complete Details' },
        propertyCard: matchedProp
      };
    }

    return {
      sender: 'ai',
      text: `Thank you for your question! 😊 OM Sakthi Real Estate features 50+ verified properties across Sarjapur, Muthanallur Cross, Dommasandra & 18 micro-locations.\n\nYou can speak directly with **Ramesh** at **+91 88849 03668 / 80957 34812** or visit our HQ at No.29 Arasappa Layout, Muthanallur Cross.`,
      link: { url: 'https://wa.me/918884903668', label: 'Connect on WhatsApp' }
    };
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInput('');

    setTimeout(() => {
      const response = processQuery(userText);
      setMessages(prev => [...prev, response]);
    }, 400);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Widget Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-[#0B2545] to-[#134074] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition flex items-center gap-2 border.2 border-[#D4AF37] group"
        >
          <div className="relative">
            <Bot className="w-6 h-6 text-[#EEB902]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
          </div>
          <span className="hidden sm:inline font-bold text-xs pr-1">AI Property Assistant</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[360px] sm:w-[420px] h-[560px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-[#0B2545] to-[#134074] text-white p-4 flex justify-between items-center border-b border-[#D4AF37]/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-400/20 border border-[#D4AF37] flex items-center justify-center">
                <Bot className="w-6 h-6 text-[#EEB902]" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm flex items-center gap-1.5 font-serif tracking-wide">
                  OM Sakthi AI Advisor <Sparkles className="w-3.5 h-3.5 text-[#EEB902]" />
                </h3>
                <p className="text-[11px] text-slate-300">RERA Verified • Sarjapur & Muthanallur HQ</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white p-1 rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Action Suggestion Chips */}
          <div className="bg-slate-50 px-3 py-2.5 border-b border-slate-200 flex gap-1.5 overflow-x-auto text-[11px] no-scrollbar">
            <button 
              onClick={() => { setInput('Villas near Muthanallur Cross'); }}
              className="bg-white border border-slate-200 text-slate-700 px-3 py-1 rounded-full whitespace-nowrap hover:border-[#0F4C81] font-semibold shrink-0"
            >
              🏡 Villas
            </button>
            <button 
              onClick={() => { setInput('BMRDA Plots in Sarjapur'); }}
              className="bg-white border border-slate-200 text-slate-700 px-3 py-1 rounded-full whitespace-nowrap hover:border-[#0F4C81] font-semibold shrink-0"
            >
              📐 Plots
            </button>
            <button 
              onClick={() => { setInput('Refundable Lease House'); }}
              className="bg-white border border-slate-200 text-slate-700 px-3 py-1 rounded-full whitespace-nowrap hover:border-[#0F4C81] font-semibold shrink-0 text-amber-800"
            >
              🔑 Lease House
            </button>
            <button 
              onClick={() => { setInput('Ramesh contact phone address'); }}
              className="bg-white border border-slate-200 text-slate-700 px-3 py-1 rounded-full whitespace-nowrap hover:border-[#0F4C81] font-semibold shrink-0"
            >
              📞 Contact Ramesh
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs bg-slate-50/50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-xl bg-[#0B2545] text-[#EEB902] flex items-center justify-center shrink-0 mt-0.5 shadow-xs border border-[#D4AF37]/40">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                
                <div className="flex flex-col gap-2 max-w-[82%]">
                  <div
                    className={`p-3.5 rounded-2xl whitespace-pre-line leading-relaxed shadow-xs ${
                      msg.sender === 'user'
                        ? 'bg-[#0B2545] text-white rounded-br-none font-medium'
                        : 'bg-white text-slate-800 rounded-bl-none border border-slate-200/80'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Optional Interactive Link Button */}
                  {msg.link && (
                    <a 
                      href={msg.link.url} 
                      target={msg.link.url.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#0F4C81] text-white text-[11px] font-bold px-3 py-1.5 rounded-xl hover:bg-[#0A365C] transition shadow-xs w-fit"
                    >
                      <span>{msg.link.label}</span>
                      <ExternalLink className="w-3 h-3 text-[#EEB902]" />
                    </a>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 border-t border-slate-200 bg-white flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about properties, prices, Ramesh contact..."
              className="flex-1 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#0B2545] font-medium"
            />
            <button
              type="submit"
              className="bg-[#0B2545] text-white p-2.5 rounded-xl hover:bg-[#134074] transition shrink-0 shadow-sm"
            >
              <Send className="w-4 h-4 text-[#EEB902]" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
