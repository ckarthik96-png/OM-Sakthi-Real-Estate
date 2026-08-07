'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { MOCK_LEADS, MOCK_PROPERTIES, Lead } from '@/data/mockData';
import { 
  Users, Building2, TrendingUp, Calendar, Phone, Mail, 
  MapPin, CheckCircle, Clock, Plus, Search, Filter, ShieldCheck 
} from 'lucide-react';

export default function AdminDashboardPage() {
  const [leads, setLeads] = useState<Lead[]>(MOCK_LEADS);
  const [activeTab, setActiveTab] = useState<'crm' | 'properties' | 'analytics'>('crm');
  const [leadFilter, setLeadFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredLeads = leads.filter(l => {
    const matchesStatus = leadFilter === 'All' || l.status === leadFilter;
    const matchesQuery = l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         l.phone.includes(searchQuery) ||
                         l.propertyInterest.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesQuery;
  });

  const updateLeadStatus = (leadId: string, newStatus: Lead['status']) => {
    setLeads(prev => prev.map(l => l.id === leadId ? { ...l, status: newStatus } : l));
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Banner */}
          <div className="bg-[#0F4C81] text-white p-6 rounded-2xl shadow-md mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-[#D4AF37] mb-2">
                <ShieldCheck className="w-4 h-4" /> Enterprise Real Estate CRM
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                OM Sakthi Admin Portal & Lead Pipeline
              </h1>
              <p className="text-slate-200 text-xs mt-1">
                Manage property inquiries, site visits, customer leads, and agent performance for Sarjapur & Muthanallur Cross office.
              </p>
            </div>

            <div className="flex gap-2">
              <button 
                onClick={() => setActiveTab('crm')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${activeTab === 'crm' ? 'bg-[#D4AF37] text-slate-900' : 'bg-white/10 hover:bg-white/20 text-white'}`}
              >
                Lead Pipeline
              </button>
              <button 
                onClick={() => setActiveTab('properties')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${activeTab === 'properties' ? 'bg-[#D4AF37] text-slate-900' : 'bg-white/10 hover:bg-white/20 text-white'}`}
              >
                Listings Manager
              </button>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0F4C81] flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-semibold block">Total Active Leads</span>
                <span className="text-2xl font-extrabold text-slate-900">{leads.length} Leads</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-semibold block">Site Visits Scheduled</span>
                <span className="text-2xl font-extrabold text-slate-900">
                  {leads.filter(l => l.status === 'Site Visit Scheduled').length} Visits
                </span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-semibold block">Live Listings</span>
                <span className="text-2xl font-extrabold text-slate-900">{MOCK_PROPERTIES.length} Properties</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-semibold block">Conversion Rate</span>
                <span className="text-2xl font-extrabold text-slate-900">24.5%</span>
              </div>
            </div>
          </div>

          {/* CRM Lead Pipeline View */}
          {activeTab === 'crm' && (
            <div className="bg-white rounded-2xl shadow-xs border border-slate-200 p-6">
              
              {/* Search & Status Filter */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 pb-4 border-b border-slate-100">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by buyer name, phone, property..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs focus:ring-2 focus:ring-[#0F4C81] focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs w-full sm:w-auto overflow-x-auto">
                  <span className="font-bold text-slate-500">Status:</span>
                  {['All', 'New', 'Site Visit Scheduled', 'Negotiation', 'Closed'].map(status => (
                    <button
                      key={status}
                      onClick={() => setLeadFilter(status)}
                      className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition ${
                        leadFilter === status ? 'bg-[#0F4C81] text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider text-[10px] border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Buyer Name</th>
                      <th className="py-3 px-4">Contact info</th>
                      <th className="py-3 px-4">Property Interest</th>
                      <th className="py-3 px-4">Budget</th>
                      <th className="py-3 px-4">Pipeline Status</th>
                      <th className="py-3 px-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredLeads.map(lead => (
                      <tr key={lead.id} className="hover:bg-slate-50/80 transition">
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          {lead.name}
                          <span className="block text-[10px] text-slate-400 font-normal">Recd: {lead.date}</span>
                        </td>
                        <td className="py-3.5 px-4 space-y-0.5">
                          <div className="flex items-center gap-1 text-slate-800 font-medium">
                            <Phone className="w-3 h-3 text-[#0F4C81]" /> {lead.phone}
                          </div>
                          <div className="flex items-center gap-1 text-slate-500 text-[11px]">
                            <Mail className="w-3 h-3 text-slate-400" /> {lead.email}
                          </div>
                        </td>
                        <td className="py-3.5 px-4 font-medium text-slate-900">
                          {lead.propertyInterest}
                          <span className="block text-[10px] text-slate-500">{lead.location}</span>
                        </td>
                        <td className="py-3.5 px-4 font-bold text-[#0F4C81]">
                          {lead.budget}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold inline-block ${
                            lead.status === 'New' ? 'bg-blue-100 text-blue-800' :
                            lead.status === 'Site Visit Scheduled' ? 'bg-amber-100 text-amber-900' :
                            lead.status === 'Negotiation' ? 'bg-purple-100 text-purple-900' : 'bg-emerald-100 text-emerald-900'
                          }`}>
                            {lead.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <select
                            value={lead.status}
                            onChange={(e) => updateLeadStatus(lead.id, e.target.value as Lead['status'])}
                            className="bg-white border border-slate-200 rounded-lg px-2 py-1 text-[11px] font-semibold text-slate-800 focus:ring-2 focus:ring-[#0F4C81]"
                          >
                            <option value="New">Mark New</option>
                            <option value="Site Visit Scheduled">Site Visit Scheduled</option>
                            <option value="Negotiation">Negotiation</option>
                            <option value="Closed">Closed / Deal Won</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          )}

          {/* Properties Management Tab */}
          {activeTab === 'properties' && (
            <div className="bg-white rounded-2xl shadow-xs border border-slate-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-900">Active Property Inventory</h3>
                <button 
                  onClick={() => alert("Add Property Modal opened! (Mock)")}
                  className="bg-[#0F4C81] text-white px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm"
                >
                  <Plus className="w-4 h-4 text-[#D4AF37]" /> Add New Listing
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {MOCK_PROPERTIES.map(prop => (
                  <div key={prop.id} className="p-4 rounded-xl border border-slate-200 flex gap-4 bg-slate-50">
                    <img src={prop.image} alt={prop.title} className="w-24 h-24 object-cover rounded-lg shrink-0" />
                    <div className="flex-1">
                      <span className="text-[10px] font-bold bg-[#0F4C81] text-white px-2 py-0.5 rounded">
                        {prop.category}
                      </span>
                      <h4 className="font-bold text-sm text-slate-900 mt-1 line-clamp-1">{prop.title}</h4>
                      <p className="text-xs text-[#0F4C81] font-extrabold mt-0.5">{prop.price}</p>
                      <p className="text-[11px] text-slate-500 mt-1">{prop.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
