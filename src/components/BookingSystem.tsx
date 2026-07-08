import React, { useState, useEffect } from 'react';
import { Calendar, Users, Calculator, Trash2, CalendarDays, ClipboardCheck, Sparkles, AlertCircle, PhoneCall, HelpCircle } from 'lucide-react';
import { Inquiry } from '../types';

interface BookingSystemProps {
  initialEventType?: string;
  onSelectEventType: (typeName: string) => void;
}

export default function BookingSystem({ initialEventType, onSelectEventType }: BookingSystemProps) {
  const [activeTab, setActiveTab] = useState<'form' | 'dashboard'>('form');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [eventType, setEventType] = useState('Luxury Weddings');
  const [guestCount, setGuestCount] = useState<number>(300);
  const [cateringSelected, setCateringSelected] = useState<'external' | 'shrutham-premium' | 'none'>('shrutham-premium');
  const [notes, setNotes] = useState('');
  
  // Feedback
  const [ticketCreated, setTicketCreated] = useState<Inquiry | null>(null);
  const [filterType, setFilterType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle Initial Event Type changes from standard event cards
  useEffect(() => {
    if (initialEventType) {
      setEventType(initialEventType);
    }
  }, [initialEventType]);

  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  // Load inquiries from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('shrutham_inquiries');
      if (stored) {
        setInquiries(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error reading localStorage', e);
    }
  }, []);

  // Save inquiries
  const saveInquiriesToStorage = (updatedList: Inquiry[]) => {
    setInquiries(updatedList);
    try {
      localStorage.setItem('shrutham_inquiries', JSON.stringify(updatedList));
    } catch (e) {
      console.error('Error writing localStorage', e);
    }
  };

  // Dynamic cost estimates (Realistic Indian Rupees / USD estimates for high premium setup)
  const calculateFinancialBreakdown = () => {
    let baseRent = 250000; // standard premium hall base rate in INR (~$3000 USD equivalent)
    if (guestCount > 1500) {
      baseRent = 450000; 
    } else if (guestCount > 800) {
      baseRent = 350000;
    }

    let cateringPerHead = 0;
    if (cateringSelected === 'shrutham-premium') {
      cateringPerHead = 2200; // premium hospitality multi-cuisine menu per head
    } else if (cateringSelected === 'external') {
      cateringPerHead = 300; // basic utility cleanup tax per head
    }

    const cateringCost = guestCount * cateringPerHead;
    const taxes = Math.round((baseRent + cateringCost) * 0.18); // 18% standard GST
    const total = baseRent + cateringCost + taxes;

    return {
      baseRent,
      cateringCost,
      taxes,
      total
    };
  };

  const { baseRent, cateringCost, taxes, total } = calculateFinancialBreakdown();

  const handleCreateInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !date) {
      setFormError('Please fill out all required fields (Name, Email, Phone, and Event Date) to search availability and estimate details.');
      return;
    }
    setFormError(null);

    // Capture the booking inquiry
    const newInquiry: Inquiry = {
      id: 'SHR-' + Math.floor(100000 + Math.random() * 900000),
      name,
      email,
      phone,
      date,
      eventType,
      guestCount,
      cateringSelected,
      notes,
      status: 'Tour Scheduled', // Default to auto-scheduling a premium guided site tour
      createdAt: new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    const updatedInquiries = [newInquiry, ...inquiries];
    saveInquiriesToStorage(updatedInquiries);
    setTicketCreated(newInquiry);
    
    // Clear form inputs
    setName('');
    setEmail('');
    setPhone('');
    setDate('');
    setNotes('');
  };

  const handleDeleteInquiry = (id: string) => {
    const updated = inquiries.filter((inq) => inq.id !== id);
    saveInquiriesToStorage(updated);
    if (deleteConfirmId === id) {
      setDeleteConfirmId(null);
    }
  };

  const handleStatusChange = (id: string, newStatus: 'Inquired' | 'Confirmed' | 'Tour Scheduled' | 'Cancelled') => {
    const updated = inquiries.map((inq) => {
      if (inq.id === id) {
        return { ...inq, status: newStatus };
      }
      return inq;
    });
    saveInquiriesToStorage(updated);
  };

  const getFilteredInquiries = () => {
    return inquiries.filter((inq) => {
      const matchesSearch = 
        inq.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inq.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inq.id.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTag = filterType === 'All' || inq.eventType === filterType;
      return matchesSearch && matchesTag;
    });
  };

  const formatCurrency = (val: number) => {
    return '₹' + val.toLocaleString('en-IN');
  };

  const eventTypesList = [
    'Corporate Events',
    'Government Events',
    'Trade Exhibitions',
    'Product Launches',
    'Luxury Weddings',
    'Private Celebrations'
  ];

  return (
    <section id="booking-tool" className="relative z-10 py-20 md:py-28 bg-chalk border-b border-gold/15" aria-labelledby="booking-heading">
      <div className="site-container px-6 md:px-12">
        
        {/* Header segment */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gold/10 pb-8">
          <div>
            <span className="inline-block px-4 py-1.5 bg-[#5c0202] text-white text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase font-body rounded-[2px] mb-4">
              Bespoke Planner
            </span>
            <h2 id="booking-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-obsidian tracking-tight leading-tight">
              Auspicious Date Lookup &amp;<br />
              Estimate Calculator
            </h2>
          </div>


        </div>

        {/* Tab 1: Form and Estimate Engine */}
        {activeTab === 'form' && (
          <div className="max-w-3xl mx-auto w-full">
            
            {/* Form Column */}
            <div className="bg-white p-6 md:p-10 border border-gold/15 rounded-[2px] shadow-sm">
              
              {ticketCreated ? (
                <div className="text-center py-10 px-4 animate-fade-in font-body">
                  <div className="w-16 h-16 bg-gold/15 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ClipboardCheck size={32} className="text-gold" />
                  </div>
                  <h3 className="font-display text-3xl text-obsidian font-light mb-3">
                    Inquiry Logged Securely!
                  </h3>
                  <p className="text-sm text-mid max-w-md mx-auto mb-6">
                    Your exclusive guided tour has been recorded on our system. A Shrutham manager has been nominated to call you and verify your requested event variables.
                  </p>

                  <div className="bg-chalk p-6 rounded-[2px] border border-gold/25 max-w-sm mx-auto text-left space-y-3 mb-8">
                    <div className="flex justify-between border-b border-gold/10 pb-2">
                      <span className="text-[10px] uppercase text-mid tracking-widest">Inquiry Ticket ID</span>
                      <span className="text-xs font-bold text-obsidian font-mono">{ticketCreated.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-mid">Requested Date</span>
                      <span className="text-xs font-medium text-obsidian">{ticketCreated.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-mid">Category type</span>
                      <span className="text-xs font-medium text-obsidian">{ticketCreated.eventType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-mid">Expected Guests</span>
                      <span className="text-xs font-medium text-obsidian">{ticketCreated.guestCount} heads</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-gold/10 font-bold">
                      <span className="text-xs text-obsidian">Calculated Estimate</span>
                      <span className="text-xs text-gold">{formatCurrency(total)}</span>
                    </div>
                  </div>

                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => setActiveTab('dashboard')}
                      className="px-6 py-3 border border-obsidian/20 text-obsidian text-xs font-semibold tracking-widest uppercase rounded-[2px] cursor-pointer"
                    >
                      Inspect All on Board
                    </button>
                    <button
                      onClick={() => setTicketCreated(null)}
                      className="px-6 py-3 bg-gold hover:bg-gold-light text-white text-xs font-semibold tracking-widest uppercase rounded-[2px] cursor-pointer"
                    >
                      Inquire another date
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleCreateInquiry} className="space-y-6 font-body">
                  <div className="flex items-center gap-2 text-[#5c0202] font-medium text-xs uppercase tracking-widest mb-4">
                    <CalendarDays size={14} />
                    <span>Provide Venue &amp; Event Scope</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] tracking-widest uppercase text-mid mb-1.5 focus-within:text-gold block">
                        Your Full Name <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Aditya Panchadarla"
                        className="w-full bg-chalk px-4 py-3 text-sm text-obsidian border border-gold/10 hover:border-gold/25 focus:border-gold outline-none rounded-[2px] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-widest uppercase text-mid mb-1.5 focus-within:text-gold block">
                        Phone Number <span className="text-gold">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 99899 12224"
                        className="w-full bg-chalk px-4 py-3 text-sm text-obsidian border border-gold/10 hover:border-gold/25 focus:border-gold outline-none rounded-[2px] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] tracking-widest uppercase text-mid mb-1.5 focus-within:text-gold block">
                        Email Address <span className="text-gold">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. name@shrutham.com"
                        className="w-full bg-chalk px-4 py-3 text-sm text-obsidian border border-gold/10 hover:border-gold/25 focus:border-gold outline-none rounded-[2px] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-widest uppercase text-mid mb-1.5 focus-within:text-gold block">
                        Target Event Date <span className="text-gold">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={date}
                        className="w-full bg-chalk px-4 py-3 text-sm text-obsidian border border-gold/10 hover:border-gold/20 focus:border-gold outline-none rounded-[2px]"
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="h-[1px] bg-gold/10 w-full" aria-hidden="true" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] tracking-widest uppercase text-mid mb-1.5 focus-within:text-gold block">
                        Event Category offering
                      </label>
                      <select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="w-full bg-chalk px-4 py-3 text-sm text-obsidian border border-gold/10 focus:border-gold outline-none rounded-[2px]"
                      >
                        {eventTypesList.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] tracking-widest uppercase text-mid mb-1.5 focus-within:text-gold block">
                        Catering &amp; Culinary choice
                      </label>
                      <select
                        value={cateringSelected}
                        onChange={(e) => setCateringSelected(e.target.value as any)}
                        className="w-full bg-chalk px-4 py-3 text-sm text-obsidian border border-gold/10 focus:border-gold outline-none rounded-[2px]"
                      >
                        <option value="shrutham-premium">Shrutham Premium Multi-Cuisine Diner (2200/head)</option>
                        <option value="external">External Selected Culinary Vendor (300/head tax)</option>
                        <option value="none">No Diner Setup Needed (Bare Hall Only)</option>
                      </select>
                    </div>
                  </div>

                  {/* Guest count slider */}
                  <div>
                    <div className="flex justify-between text-[10px] tracking-widest uppercase text-mid mb-2.5">
                      <span>Expected Guests: {guestCount} Heads</span>
                      <span className="text-gold font-semibold">Max 3,500 Capacity</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="3500"
                      step="50"
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full accent-gold h-1.5 bg-chalk rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-mid/60 mt-1.5 font-light">
                      <span>50 Guests (Min tour limit)</span>
                      <span>1750 (Medium scale)</span>
                      <span>3,500 (Grand hall capacity)</span>
                    </div>
                  </div>

                  {/* Special requests/Notes */}
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase text-mid mb-1.5 focus-within:text-gold block">
                      Custom Requests / Special Protocol Requirements
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g., Backstage VIP green-room setup details, special floral entry gates..."
                      rows={3}
                      className="w-full bg-chalk px-4 py-3 text-sm text-obsidian border border-gold/10 hover:border-gold/25 focus:border-gold outline-none rounded-[2px] transition-colors resize-none"
                    />
                  </div>

                  {formError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-xs py-3 px-4 rounded-[2px] flex items-center gap-2 animate-fade-in font-light">
                      <AlertCircle size={15} className="shrink-0 text-red-600" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#5c0202] hover:bg-[#7a0303] text-white py-4 rounded-[2px] font-semibold text-xs tracking-widest uppercase shadow-lg duration-200 transition-all hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ClipboardCheck size={16} /> Request Enquiry
                    </button>
                    <div className="text-center text-[11px] text-mid/60 mt-3 flex items-center justify-center gap-1.5">
                      <AlertCircle size={12} className="text-gold" />
                      <span>Submitting logs the schedule locally. No immediate binding commitments.</span>
                    </div>
                  </div>
                </form>
              )}
            </div>

          </div>
        )}

        {/* Tab 2: organizer manager board */}
        {activeTab === 'dashboard' && (
          <div className="bg-white p-6 md:p-10 border border-gold/15 rounded-[2px] shadow-sm font-body">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="font-display text-2xl text-obsidian font-light">
                  Secured Tour &amp; Valuation Registry
                </h3>
                <p className="text-xs text-mid">
                  Track and verify all local site-visit inquiries saved privately in this browser sandbox.
                </p>
              </div>

              {/* Search bar */}
              <input
                type="text"
                placeholder="Search ticket, name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-chalk text-xs text-obsidian px-4 py-2.5 rounded-[2px] border border-gold/10 focus:border-gold outline-none w-full sm:max-w-xs transition-colors"
              />
            </div>

            {getFilteredInquiries().length === 0 ? (
              <div className="text-center py-16 border-2 border-dashed border-gold/10 rounded-[2px]">
                <Calendar className="mx-auto text-gold/30 mb-4" size={40} />
                <h4 className="font-display text-xl text-obsidian font-normal mb-1">
                  {inquiries.length === 0 ? 'No logged inquiries found' : 'No matches found'}
                </h4>
                <p className="text-xs text-mid max-w-sm mx-auto mb-6">
                  {inquiries.length === 0 
                    ? 'Submit a calculated estimate to automatically record a tour inquiry on this board.' 
                    : 'Adjust your search parameters or filter terms.'}
                </p>
                {inquiries.length === 0 && (
                  <button
                    onClick={() => setActiveTab('form')}
                    className="px-5 py-2.5 bg-gold hover:bg-gold-light text-white text-xs font-semibold tracking-wider uppercase rounded-[2px]"
                  >
                    Generate Estimate
                  </button>
                )}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="border-b border-gold/15 text-[10px] tracking-wider text-mid uppercase bg-chalk">
                      <th className="p-4 font-semibold">Inquiry Ticket ID</th>
                      <th className="p-4 font-semibold">Guest / Contact</th>
                      <th className="p-4 font-semibold">Event variables</th>
                      <th className="p-4 font-semibold">Requested Date</th>
                      <th className="p-4 font-semibold">Pricing Est.</th>
                      <th className="p-4 font-semibold">Status</th>
                      <th className="p-4 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gold/10 text-sm">
                    {getFilteredInquiries().map((inq) => {
                      // Recalculate unique total estimates for each list card
                      const base = inq.guestCount > 1500 ? 450000 : (inq.guestCount > 800 ? 350000 : 250000);
                      const headCost = inq.cateringSelected === 'shrutham-premium' ? 2200 : (inq.cateringSelected === 'external' ? 300 : 0);
                      const estimateVal = Math.round((base + (inq.guestCount * headCost)) * 1.18);

                      return (
                        <tr key={inq.id} className="hover:bg-chalk/45 transition-colors">
                          <td className="p-4">
                            <span className="font-mono font-bold text-xs text-obsidian block mb-1">
                              {inq.id}
                            </span>
                            <span className="text-[10px] text-mid text-transform uppercase">{inq.createdAt}</span>
                          </td>
                          <td className="p-4">
                            <div className="font-semibold text-obsidian">{inq.name}</div>
                            <div className="text-xs text-mid">{inq.email}</div>
                            <div className="text-xs text-mid">{inq.phone}</div>
                          </td>
                          <td className="p-4">
                            <div className="text-obsidian text-xs font-semibold">{inq.eventType}</div>
                            <div className="text-xs text-mid">{inq.guestCount} Guests · {inq.cateringSelected === 'shrutham-premium' ? 'Premium Catering' : inq.cateringSelected === 'external' ? 'External Catering' : 'Bare Rent'}</div>
                          </td>
                          <td className="p-4">
                            <span className="font-semibold text-obsidian">{inq.date}</span>
                          </td>
                          <td className="p-4 font-display font-semibold text-gold text-base">
                            {formatCurrency(estimateVal)}
                          </td>
                          <td className="p-4">
                            <select
                              value={inq.status}
                              onChange={(e) => handleStatusChange(inq.id, e.target.value as any)}
                              className="text-xs font-semibold bg-chalk text-obsidian px-2.5 py-1.5 rounded-[2px] border border-gold/15 outline-none font-bold"
                            >
                              <option value="Tour Scheduled">Tour Scheduled</option>
                              <option value="Inquired">Inquired</option>
                              <option value="Confirmed">Confirmed</option>
                              <option value="Cancelled">Cancelled</option>
                            </select>
                          </td>
                          <td className="p-4 text-right">
                            {deleteConfirmId === inq.id ? (
                              <div className="flex items-center justify-end gap-1.5">
                                <span className="text-[10px] text-red-600 font-medium font-body uppercase">Cancel?</span>
                                <button
                                  onClick={() => handleDeleteInquiry(inq.id)}
                                  className="text-white bg-red-600 hover:bg-red-700 font-semibold px-2 py-1 text-[10px] uppercase rounded-[2px] cursor-pointer"
                                >
                                  Yes
                                </button>
                                <button
                                  onClick={() => setDeleteConfirmId(null)}
                                  className="text-mid bg-chalk border border-gold/15 hover:bg-white font-semibold px-2 py-1 text-[10px] uppercase rounded-[2px] cursor-pointer"
                                >
                                  No
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => setDeleteConfirmId(inq.id)}
                                className="text-red-600 hover:text-red-800 p-2 border border-red-100 hover:border-red-200 rounded-[2px] cursor-pointer inline-flex items-center gap-1 hover:bg-red-50 transition-colors"
                                title="Delete inquiry"
                              >
                                <Trash2 size={13} />
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
