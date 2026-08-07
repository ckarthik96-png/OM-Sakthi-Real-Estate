'use client';

import React, { useState } from 'react';
import { Bot, X, Send, User, Sparkles, Building, PhoneCall } from 'lucide-react';
import { MOCK_PROPERTIES } from '@/data/mockData';

interface Message {
  sender: 'ai' | 'user';
  text: string;
}

export default function AiPropertyAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: 'Namaste! 🙏 I am your OM Sakthi AI Assistant. Looking for villas, plots, or apartments around Sarjapur or Muthanallur Cross? How can I help you today?'
    }
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInput('');

    // AI logic reply simulation
    setTimeout(() => {
      let reply = "Thank you for sharing. We have several verified properties in Sarjapur matching your interest!";
      const lower = userText.toLowerCase();

      if (lower.includes('villa') || lower.includes('villas')) {
        reply = `We highly recommend **OM Sakthi Grandeur Luxury Villas** at Muthanallur Cross! 4 BHK layout, 3200 sq.ft at ₹1.85 Cr. Would you like to schedule a site visit?`;
      } else if (lower.includes('plot') || lower.includes('land')) {
        reply = `We have BMRDA approved residential plots in **Sakthi Green Acres**, Sarjapur Road starting at ₹48.5 Lakhs with instant bank loan assistance.`;
      } else if (lower.includes('apartment') || lower.includes('flat') || lower.includes('bhk')) {
        reply = `Check out **Royal Palms High-Rise Apartments** in Dommasandra! 3 BHK smart homes with 30+ amenities priced at ₹95 Lakhs.`;
      } else if (lower.includes('contact') || lower.includes('call') || lower.includes('visit') || lower.includes('phone')) {
        reply = `Our office is located right at Muthanallur Cross, Sarjapur Road. You can reach our senior property consultant directly at **+91 98450 12345**.`;
      }

      setMessages(prev => [...prev, { sender: 'ai', text: reply }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Widget Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-[#0F4C81] to-[#0A365C] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition flex items-center gap-2 border-2 border-[#D4AF37]"
        >
          <Bot className="w-6 h-6 text-[#D4AF37]" />
          <span className="hidden sm:inline font-semibold text-xs pr-1">AI Property Assistant</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[520px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Chat Header */}
          <div className="bg-[#0F4C81] text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center">
                <Bot className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-bold text-sm flex items-center gap-1.5">
                  OM Sakthi AI Assistant <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                </h3>
                <p className="text-[11px] text-slate-300">Sarjapur & Muthanallur Advisory</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Suggestions */}
          <div className="bg-slate-50 px-3 py-2 border-b border-slate-100 flex gap-1.5 overflow-x-auto text-[11px]">
            <button 
              onClick={() => { setInput('Villas near Muthanallur Cross'); }}
              className="bg-white border border-slate-200 text-slate-700 px-2.5 py-1 rounded-full whitespace-nowrap hover:border-[#0F4C81]"
            >
              🏡 Villas near Muthanallur
            </button>
            <button 
              onClick={() => { setInput('Plots in Sarjapur Road'); }}
              className="bg-white border border-slate-200 text-slate-700 px-2.5 py-1 rounded-full whitespace-nowrap hover:border-[#0F4C81]"
            >
              📐 Plots in Sarjapur
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-full bg-[#0F4C81] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#0F4C81] text-white rounded-br-none font-medium'
                      : 'bg-slate-100 text-slate-800 rounded-bl-none border border-slate-200'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 border-t border-slate-200 bg-white flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about properties, prices, visits..."
              className="flex-1 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
            />
            <button
              type="submit"
              className="bg-[#0F4C81] text-white p-2 rounded-xl hover:bg-[#0A365C] transition shrink-0"
            >
              <Send className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
