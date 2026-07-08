import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, ChevronRight, FileText, Sparkles, Building, Calendar, Users, Phone, Clock, MapPin, Heart, HelpCircle } from 'lucide-react';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  eventType: string;
  preferredDate: string;
  alternateDate: string;
  guestCount: string;
  eventDuration: string;
  preferredTime: string;
  requirements: string[];
  budgetRange: string;
  additionalInfo: string;
  customBudget?: string;
  budgetPriority?: string;
}

export default function RequestProposal() {
  // Page level SEO setup
  useEffect(() => {
    document.title = "Request a Proposal | Shrutham Convention, Hyderabad";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Request a personalized proposal and event estimate at Shrutham Convention, Hyderabad. Learn about our packages, premium catering, and custom décor.");
    }
  }, []);

  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    eventType: 'Wedding',
    preferredDate: '',
    alternateDate: '',
    guestCount: '',
    eventDuration: '',
    preferredTime: '',
    requirements: ['Convention Hall'],
    budgetRange: '₹10–20 Lakhs',
    additionalInfo: '',
    customBudget: '',
    budgetPriority: '',
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRequirementToggle = (req: string) => {
    setFormData(prev => {
      const current = prev.requirements;
      if (current.includes(req)) {
        return { ...prev, requirements: current.filter(r => r !== req) };
      } else {
        return { ...prev, requirements: [...current, req] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const requirementOptions = [
    'Convention Hall',
    'Catering Services',
    'Stage Decoration',
    'Floral Decoration',
    'Lighting & Sound',
    'Photography & Videography',
    'LED Wall & AV Setup',
    'Entertainment',
    'Bridal & Groom Rooms',
    'Valet Parking',
    'Custom Event Planning'
  ];

  const budgetOptions = [
    'Below ₹5 Lakhs',
    '₹5–10 Lakhs',
    '₹10–20 Lakhs',
    'Above ₹20 Lakhs',
    'Prefer to Discuss'
  ];

  return (
    <div className="bg-[#FCFAF5] min-h-screen text-slate-custom font-body py-12 md:py-20 animate-fade-in">
      <div className="site-container px-6 md:px-12">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase text-[#5c0202] font-semibold tracking-widest block mb-2">
            Let's Bring Your Celebration to Life
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#2D2A26] tracking-wide mb-4">
            Request a Proposal
          </h1>
          <div className="h-[2px] w-16 bg-[#5c0202] mx-auto my-4" />
          <p className="text-xs sm:text-[14px] text-slate-custom/75 font-light leading-relaxed max-w-2xl mx-auto">
            Every celebration is unique, and so is every proposal we create. Share your event details with us, and our team will prepare a personalized quotation tailored to your requirements, preferences, and budget.
          </p>
          <p className="text-xs sm:text-[13px] text-slate-custom/60 font-light mt-3">
            Whether you're planning a wedding, reception, engagement, corporate event, birthday celebration, or any special occasion, we're here to help you create an unforgettable experience.
          </p>
        </div>

        {isSubmitted ? (
          <div className="max-w-2xl mx-auto bg-white border border-[#5c0202]/20 p-8 md:p-12 text-center rounded-[2px] shadow-md animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#5c0202]/10 text-[#5c0202] mb-6">
              <CheckCircle2 size={32} className="stroke-[1.5]" />
            </div>
            <h2 className="font-display text-3xl font-light text-obsidian mb-3">Proposal Request Submitted</h2>
            <p className="text-[#5c0202] font-semibold text-xs tracking-widest uppercase mb-6">
              PROPOSAL ID: SH-{Math.floor(100000 + Math.random() * 900000)}
            </p>
            <p className="text-xs sm:text-sm text-slate-custom/75 font-light leading-relaxed mb-8 max-w-md mx-auto">
              Thank you, <strong>{formData.fullName}</strong>. Your request for a customized proposal for your upcoming <strong>{formData.eventType}</strong> on <strong>{formData.preferredDate || 'TBD'}</strong> has been received. Our event consultants are reviewing your requirements.
            </p>
            
            <div className="bg-[#FCFAF5] p-6 rounded-[2px] border border-gold/10 text-left mb-8 text-xs font-light space-y-2">
              <h4 className="font-semibold text-obsidian uppercase tracking-wider mb-2">Submitted Request Details:</h4>
              <p>• Event Type: <strong>{formData.eventType}</strong></p>
              <p>• Preferred Date: <strong>{formData.preferredDate || 'TBD'}</strong></p>
              <p>• Estimated Guests: <strong>{formData.guestCount || 'TBD'}</strong></p>
              <p>• Budget Range: <strong>{formData.budgetRange}</strong></p>
              {formData.customBudget && <p>• Custom Target Budget: <strong>₹{formData.customBudget}</strong></p>}
              {formData.budgetPriority && <p>• Budget Priority Allocation: <strong className="uppercase">{formData.budgetPriority}</strong></p>}
              <p>• Selected Requirements: <strong>{formData.requirements.join(', ') || 'None selected'}</strong></p>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: '',
                  email: '',
                  phone: '',
                  city: '',
                  eventType: 'Wedding',
                  preferredDate: '',
                  alternateDate: '',
                  guestCount: '',
                  eventDuration: '',
                  preferredTime: '',
                  requirements: ['Convention Hall'],
                  budgetRange: '₹10–20 Lakhs',
                  additionalInfo: '',
                  customBudget: '',
                  budgetPriority: '',
                });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#5c0202] hover:text-[#7a0303] uppercase tracking-wider underline cursor-pointer bg-transparent border-none"
            >
              Submit Another Proposal Request
            </button>
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Form Info & Why Us */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
              
              {/* Ready to Start Planning */}
              <div className="bg-white border border-gold/10 p-6 md:p-8 rounded-[2px] shadow-xs">
                <span className="text-[9px] uppercase tracking-widest text-[#5c0202] font-semibold block mb-1">
                  Ready to Start Planning?
                </span>
                <h3 className="font-display text-2xl font-light text-obsidian mb-4">
                  Let's create something extraordinary.
                </h3>
                <p className="text-xs text-slate-custom/70 leading-relaxed font-light mb-4">
                  Complete the form, and let us create a personalized proposal for your special occasion.
                </p>
                <p className="text-xs font-medium text-[#5c0202] tracking-wider uppercase border-l-2 border-[#5c0202] pl-3">
                  Your perfect celebration begins with a conversation.
                </p>
              </div>

              {/* What Happens Next */}
              <div className="bg-[#5c0202] text-white p-6 md:p-8 rounded-[2px] shadow-sm relative overflow-hidden">
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/5 rounded-full blur-xl" />
                <h4 className="font-display text-xl font-light mb-4 border-b border-white/10 pb-2">What Happens Next?</h4>
                <p className="text-xs text-white/80 leading-relaxed font-light mb-6">
                  Once we receive your request, our event consultants will guide you through the process step-by-step:
                </p>
                <ul className="space-y-4 text-xs font-light text-white/90">
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="block font-medium">Review your requirements</strong>
                      <span className="text-white/70">We analyze your guest count, layout desires, and chosen services.</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="block font-medium">Contact you within 24 hours</strong>
                      <span className="text-white/70">A dedicated consultant reaches out to refine any pending details.</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="block font-medium">Share customized proposal</strong>
                      <span className="text-white/70">Receive detailed packages, customizable layouts, and transparent pricing.</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="block font-medium">Schedule a venue visit</strong>
                      <span className="text-white/70">Tour our magnificent spaces in Hyderabad first-hand and finalize plans.</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Why Choose Shrutham */}
              <div className="bg-white border border-gold/10 p-6 md:p-8 rounded-[2px] shadow-xs">
                <h4 className="font-display text-lg font-light text-obsidian mb-4 border-b border-gray-100 pb-2 uppercase tracking-wide">
                  Why Choose Shrutham Convention?
                </h4>
                <ul className="space-y-3 text-xs font-light text-slate-custom/80">
                  <li className="flex gap-2.5 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5c0202] mt-1.5 shrink-0" />
                    <span><strong>Elegant venue</strong> tailored for every scale of celebration.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5c0202] mt-1.5 shrink-0" />
                    <span><strong>Spacious event halls</strong> loaded with modern infrastructure & acoustic soundproofing.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5c0202] mt-1.5 shrink-0" />
                    <span><strong>Premium catering</strong> and flexible outside vendor alignment.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5c0202] mt-1.5 shrink-0" />
                    <span><strong>Ample parking facilities</strong> with dedicated valet coordination for 1,000+ cars.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5c0202] mt-1.5 shrink-0" />
                    <span><strong>Customized décor</strong> and support from experienced project coordinators.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Column: The Interactive Proposal Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 bg-white border border-gold/15 p-6 sm:p-10 rounded-[2px] shadow-sm space-y-8">
              
              {/* Introduction header in Form */}
              <div>
                <h2 className="font-display text-2xl font-light text-[#2D2A26] mb-1">Tell Us About Your Event</h2>
                <p className="text-xs text-slate-custom/60 font-light">
                  Please provide a few details so we can prepare the most suitable proposal for you.
                </p>
                <div className="h-[1px] bg-gray-100 w-full mt-4" />
              </div>

              {/* Section 1: Event Information */}
              <div className="space-y-5">
                <span className="text-[10px] uppercase text-[#5c0202] font-bold tracking-widest block mb-2 border-b border-gold/10 pb-1">
                  1. Event Information
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase text-slate-custom/70 font-semibold tracking-wider mb-1.5">
                      Event Type
                    </label>
                    <select 
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-gold/20 p-2.5 rounded-[2px] focus:outline-none focus:border-[#5c0202] text-xs font-light"
                    >
                      <option value="Wedding">Wedding</option>
                      <option value="Reception">Reception</option>
                      <option value="Engagement">Engagement</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Birthday Celebration">Birthday Celebration</option>
                      <option value="Sangeet / Mehendi">Sangeet / Mehendi</option>
                      <option value="Concert / Live Event">Concert / Live Event</option>
                      <option value="Special Occasion">Special Occasion</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase text-slate-custom/70 font-semibold tracking-wider mb-1.5">
                      Number of Guests
                    </label>
                    <select 
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white border border-gold/20 p-2.5 rounded-[2px] focus:outline-none focus:border-[#5c0202] text-xs font-light"
                    >
                      <option value="">Select Guests...</option>
                      <option value="Below 200">Below 200</option>
                      <option value="200–500">200–500</option>
                      <option value="500–1000">500–1,000</option>
                      <option value="1000–2000">1,000–2,000</option>
                      <option value="Above 2000">Above 2,000</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase text-slate-custom/70 font-semibold tracking-wider mb-1.5">
                      Preferred Event Date
                    </label>
                    <input 
                      type="date" 
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white border border-gold/20 p-2.5 rounded-[2px] focus:outline-none focus:border-[#5c0202] text-xs font-light"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase text-slate-custom/70 font-semibold tracking-wider mb-1.5">
                      Alternate Date (Optional)
                    </label>
                    <input 
                      type="date" 
                      name="alternateDate"
                      value={formData.alternateDate}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-gold/20 p-2.5 rounded-[2px] focus:outline-none focus:border-[#5c0202] text-xs font-light"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase text-slate-custom/70 font-semibold tracking-wider mb-1.5">
                      Event Duration
                    </label>
                    <input 
                      type="text" 
                      name="eventDuration"
                      value={formData.eventDuration}
                      onChange={handleInputChange}
                      placeholder="e.g. 1 Day, 2 Days, Half Day"
                      className="w-full bg-white border border-gold/20 p-2.5 rounded-[2px] focus:outline-none focus:border-[#5c0202] text-xs font-light"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase text-slate-custom/70 font-semibold tracking-wider mb-1.5">
                      Preferred Time
                    </label>
                    <select 
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-gold/20 p-2.5 rounded-[2px] focus:outline-none focus:border-[#5c0202] text-xs font-light"
                    >
                      <option value="">Select Time Slot...</option>
                      <option value="Morning (9 AM - 3 PM)">Morning (9 AM - 3 PM)</option>
                      <option value="Evening (5 PM - Midnight)">Evening (5 PM - Midnight)</option>
                      <option value="Full Day Event">Full Day Event</option>
                      <option value="Multiple Slots">Multiple Slots</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 2: Your Details */}
              <div className="space-y-5 pt-3">
                <span className="text-[10px] uppercase text-[#5c0202] font-bold tracking-widest block mb-2 border-b border-gold/10 pb-1">
                  2. Your Details
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase text-slate-custom/70 font-semibold tracking-wider mb-1.5">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Anand Satyanarayana"
                      className="w-full bg-white border border-gold/20 p-2.5 rounded-[2px] focus:outline-none focus:border-[#5c0202] text-xs font-light"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase text-slate-custom/70 font-semibold tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. anand@example.com"
                      className="w-full bg-white border border-gold/20 p-2.5 rounded-[2px] focus:outline-none focus:border-[#5c0202] text-xs font-light"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase text-slate-custom/70 font-semibold tracking-wider mb-1.5">
                      Mobile Number
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. +91 99899 12224"
                      className="w-full bg-white border border-gold/20 p-2.5 rounded-[2px] focus:outline-none focus:border-[#5c0202] text-xs font-light"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase text-slate-custom/70 font-semibold tracking-wider mb-1.5">
                      City
                    </label>
                    <input 
                      type="text" 
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Hyderabad"
                      className="w-full bg-white border border-gold/20 p-2.5 rounded-[2px] focus:outline-none focus:border-[#5c0202] text-xs font-light"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Event Requirements */}
              <div className="space-y-4 pt-3">
                <span className="text-[10px] uppercase text-[#5c0202] font-bold tracking-widest block mb-2 border-b border-gold/10 pb-1">
                  3. Event Requirements
                </span>
                <p className="text-[11px] text-slate-custom/60 font-light mb-2">
                  Select the services you're interested in:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 bg-[#FCFAF5] p-5 border border-gold/10 rounded-[2px]">
                  {requirementOptions.map((req) => (
                    <label key={req} className="flex items-center gap-3 cursor-pointer select-none text-xs font-light py-1 text-slate-custom/85 hover:text-obsidian">
                      <input 
                        type="checkbox"
                        checked={formData.requirements.includes(req)}
                        onChange={() => handleRequirementToggle(req)}
                        className="w-4 h-4 rounded-[2px] border-gold/30 accent-[#5c0202] shrink-0"
                      />
                      <span>{req}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Section 4: Budget Range */}
              <div className="space-y-4 pt-3">
                <span className="text-[10px] uppercase text-[#5c0202] font-bold tracking-widest block mb-2 border-b border-gold/10 pb-1">
                  4. Budget Range & Plan
                </span>
                <p className="text-[11px] text-slate-custom/60 font-light mb-2">
                  Help us recommend the best package for your event, or specify your target budget below.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {budgetOptions.map((option) => (
                    <label 
                      key={option} 
                      className={`flex items-center justify-center border p-3 rounded-[2px] cursor-pointer select-none text-center transition-all ${
                        formData.budgetRange === option 
                          ? 'bg-[#5c0202] text-white border-[#5c0202]' 
                          : 'bg-white border-gold/20 text-slate-custom hover:border-gold/60'
                      }`}
                    >
                      <input 
                        type="radio"
                        name="budgetRange"
                        value={option}
                        checked={formData.budgetRange === option}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className="text-[11px] font-medium tracking-wide">{option}</span>
                    </label>
                  ))}
                </div>

                {/* Custom Budget Plan Box */}
                <div className="mt-4 p-5 bg-[#FCFAF5] border border-gold/15 rounded-[2px] space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="block text-[10px] uppercase text-slate-custom/75 font-semibold tracking-wider">
                      Or Specify Target Budget (Optional)
                    </label>
                    <span className="text-[9px] text-[#5c0202] font-bold tracking-widest uppercase">Custom Plan</span>
                  </div>
                  
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-slate-custom/50 font-medium">₹</span>
                    <input 
                      type="text"
                      name="customBudget"
                      value={formData.customBudget || ''}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9,]/g, '');
                        setFormData(prev => ({ ...prev, customBudget: val }));
                      }}
                      placeholder="e.g. 12,50,000"
                      className="w-full bg-white border border-gold/20 pl-7 pr-3 py-2 rounded-[2px] focus:outline-none focus:border-[#5c0202] text-xs font-light"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[9px] uppercase text-slate-custom/65 font-semibold tracking-wider">
                      Budget Priority Allocation
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        { label: 'Decor Heavy', val: 'decor' },
                        { label: 'Catering Premium', val: 'catering' },
                        { label: 'Sound & Experience', val: 'experience' },
                      ].map((prio) => (
                        <button
                          type="button"
                          key={prio.val}
                          onClick={() => {
                            setFormData(prev => ({
                              ...prev,
                              budgetPriority: prev.budgetPriority === prio.val ? '' : prio.val
                            }));
                          }}
                          className={`text-[9px] py-2 px-2 border rounded-[2px] transition-all text-center uppercase tracking-wider font-semibold ${
                            formData.budgetPriority === prio.val
                              ? 'bg-[#5c0202] text-white border-[#5c0202]'
                              : 'bg-white border-gold/15 text-slate-custom/70 hover:border-gold/40'
                          }`}
                        >
                          {prio.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: Additional Information */}
              <div className="space-y-3 pt-3">
                <span className="text-[10px] uppercase text-[#5c0202] font-bold tracking-widest block border-b border-gold/10 pb-1">
                  5. Additional Information
                </span>
                <p className="text-[11px] text-slate-custom/60 font-light">
                  Tell us about your vision, theme, special requests, cultural traditions, or any other details that will help us create the perfect proposal.
                </p>
                <textarea 
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full bg-white border border-gold/20 p-3 rounded-[2px] focus:outline-none focus:border-[#5c0202] text-xs font-light leading-relaxed"
                  placeholder="Describe your event, preferred décor style, catering preferences, or any special requirements..."
                />
              </div>

              {/* Submit button container */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#5c0202] hover:bg-[#7a0303] text-white font-semibold text-[11px] tracking-widest uppercase px-6 py-4 rounded-[2px] transition-all cursor-pointer shadow-sm hover:shadow-md"
                >
                  Submit Proposal Request <Send size={12} />
                </button>
              </div>

            </form>

          </div>
        )}

      </div>
    </div>
  );
}

