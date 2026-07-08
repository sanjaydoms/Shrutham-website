import { useState, useEffect } from 'react';
import { Calendar, CheckCircle, Clock, Award, Users, Shield, ArrowRight, Download } from 'lucide-react';

interface ChecklistItem {
  id: string;
  task: string;
  category: 'venue' | 'vendors' | 'experience' | 'logistics';
  done: boolean;
}

export default function PlanningGuide() {
  const [activeTab, setActiveTab] = useState<'timeline' | 'checklist' | 'calculator'>('timeline');
  const [guestCount, setGuestCount] = useState<number>(500);
  const [eventDuration, setEventDuration] = useState<number>(1); // days
  const [needsAV, setNeedsAV] = useState<boolean>(true);
  const [needsVIP, setNeedsVIP] = useState<boolean>(true);

  // Dynamic SEO and Title tags setup
  useEffect(() => {
    document.title = "Event Planning Guide | Shrutham Convention, Hyderabad";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Plan your wedding or corporate event at Shrutham Convention with our step-by-step timeline, milestone checklist, and budget estimator. Start planning today.");
    }
  }, []);

  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    { id: '1', task: 'Finalize preferred dates & reserve main hall at Shrutham', category: 'venue', done: true },
    { id: '2', task: 'Approve maximum guest limit and draft invitation tiers', category: 'logistics', done: false },
    { id: '3', task: 'Register external culinary team and file FSSAI compliance with Shrutham', category: 'vendors', done: false },
    { id: '4', task: 'Confirm high-load electrical requirements (above 150 KVA) for sound system', category: 'venue', done: false },
    { id: '5', task: 'Draft seating choreography & assign designated VIP lounge suites', category: 'experience', done: false },
    { id: '6', task: 'Coordinate valet protocols and ingress schedule with ORR traffic concierge', category: 'logistics', done: false },
    { id: '7', task: 'Finalize stage layout, rigging points, and LED wall dimensions', category: 'venue', done: false },
    { id: '8', task: 'Schedule structural rehearsals and live acoustics sound check', category: 'experience', done: false },
  ]);

  const toggleChecklist = (id: string) => {
    setChecklist(checklist.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  // Luxury budget calculator estimates
  const baseVenueRate = 180000; // estimated starting luxury venue fee per day
  const avEstimate = needsAV ? Math.max(45000, guestCount * 80) : 0;
  const hospitalityEstimate = needsVIP ? 25000 : 0;
  const infrastructureLevy = 15000 * eventDuration;
  const totalEstimate = (baseVenueRate * eventDuration) + avEstimate + hospitalityEstimate + infrastructureLevy;

  return (
    <div className="bg-[#FCFAF5] min-h-screen text-slate-custom font-body py-12 md:py-20">
      <div className="site-container px-6 md:px-12">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase text-[#5c0202] font-semibold tracking-widest block mb-2">
            PREMIUM CONVENTION MANUAL
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#2D2A26] tracking-wide mb-4">
            The Planning Guide
          </h1>
          <div className="h-[2px] w-16 bg-[#5c0202] mx-auto my-4" />
          <p className="text-xs sm:text-[14px] text-slate-custom/75 font-light leading-relaxed">
            Our step-by-step master plan, interactive budget estimation, and logistical milestone checklist designed to streamline high-end weddings and corporate events.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center border-b border-gold/15 mb-12">
          <div className="flex gap-4 md:gap-10">
            <button
              onClick={() => setActiveTab('timeline')}
              className={`pb-4 text-xs font-bold tracking-widest uppercase cursor-pointer border-b-2 transition-all duration-300 focus:outline-none ${
                activeTab === 'timeline' 
                  ? 'border-[#5c0202] text-[#5c0202]' 
                  : 'border-transparent text-slate-custom/60 hover:text-[#5c0202]'
              }`}
            >
              Timeline Countdown
            </button>
            <button
              onClick={() => setActiveTab('checklist')}
              className={`pb-4 text-xs font-bold tracking-widest uppercase cursor-pointer border-b-2 transition-all duration-300 focus:outline-none ${
                activeTab === 'checklist' 
                  ? 'border-[#5c0202] text-[#5c0202]' 
                  : 'border-transparent text-slate-custom/60 hover:text-[#5c0202]'
              }`}
            >
              Milestone Checklist
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`pb-4 text-xs font-bold tracking-widest uppercase cursor-pointer border-b-2 transition-all duration-300 focus:outline-none ${
                activeTab === 'calculator' 
                  ? 'border-[#5c0202] text-[#5c0202]' 
                  : 'border-transparent text-slate-custom/60 hover:text-[#5c0202]'
              }`}
            >
              Budget Estimator
            </button>
          </div>
        </div>

        {/* Tab 1: Timeline */}
        {activeTab === 'timeline' && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center md:text-left">
              <h2 className="font-display text-2xl md:text-3xl font-light text-[#2D2A26] mb-6">Timeline Countdown</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Milestone 1 */}
              <div className="bg-white border border-gold/10 p-6 md:p-8 rounded-[2px] relative shadow-xs hover:border-[#5c0202]/30 transition-all">
                <span className="absolute -top-4 left-6 bg-[#5c0202] text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-[1px]">
                  12 - 9 MONTHS
                </span>
                <Clock className="text-[#5c0202] mb-4 mt-2" size={24} />
                <h3 className="font-display text-lg font-medium text-obsidian mb-2">Sovereign Foundation</h3>
                <p className="text-xs text-slate-custom/70 leading-relaxed font-light">
                  Lock in preferred seasonal dates and secure your seasonal date booking Hyderabad venue. Set up maximum occupancy ceilings, register primary decor ideas, and book event venue in advance with our premium coordination guide.
                </p>
              </div>

              {/* Milestone 2 */}
              <div className="bg-white border border-gold/10 p-6 md:p-8 rounded-[2px] relative shadow-xs hover:border-[#5c0202]/30 transition-all">
                <span className="absolute -top-4 left-6 bg-[#5c0202] text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-[1px]">
                  6 - 3 MONTHS
                </span>
                <Calendar className="text-[#5c0202] mb-4 mt-2" size={24} />
                <h3 className="font-display text-lg font-medium text-obsidian mb-2">Vendor Orchestration</h3>
                <p className="text-xs text-slate-custom/70 leading-relaxed font-light">
                  Submit external catering teams for FSSAI catering verification, ensure proper vendor compliance venue Hyderabad protocols, book high-speed event Wi-Fi setup parameters, and draft precise lighting schematics.
                </p>
              </div>

              {/* Milestone 3 */}
              <div className="bg-white border border-gold/10 p-6 md:p-8 rounded-[2px] relative shadow-xs hover:border-[#5c0202]/30 transition-all">
                <span className="absolute -top-4 left-6 bg-[#5c0202] text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-[1px]">
                  1 MONTH
                </span>
                <Shield className="text-[#5c0202] mb-4 mt-2" size={24} />
                <h3 className="font-display text-lg font-medium text-obsidian mb-2">Security & Layouts</h3>
                <p className="text-xs text-slate-custom/70 leading-relaxed font-light">
                  Finalize VIP security venue planning dropoff protocols, verify generator dual-feeds for event power backup planning, run valet traffic testing, and test heavy load crane points.
                </p>
              </div>

              {/* Milestone 4 */}
              <div className="bg-white border border-gold/10 p-6 md:p-8 rounded-[2px] relative shadow-xs hover:border-[#5c0202]/30 transition-all">
                <span className="absolute -top-4 left-6 bg-[#5c0202] text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-[1px]">
                  EVENT DAY
                </span>
                <Award className="text-[#5c0202] mb-4 mt-2" size={24} />
                <h3 className="font-display text-lg font-medium text-obsidian mb-2">Bespoke Execution</h3>
                <p className="text-xs text-slate-custom/70 leading-relaxed font-light">
                  Our dedicated relationship manager venue professionals execute custom protocols. Command center event management systems monitor real-time power, valet, and VIP lounge amenities for seamless event day coordination Hyderabad.
                </p>
              </div>
            </div>

            {/* Practical tips */}
            <div className="bg-white border border-[#5c0202]/15 p-8 rounded-[2px] shadow-xs mt-10">
              <h2 className="font-display text-xl md:text-2xl font-light text-[#2D2A26] mb-4">Luxe Pro Tips</h2>
              <ul className="space-y-3.5 text-xs font-light text-slate-custom/80 list-none pl-0">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-[#5c0202] rounded-full mt-1.5 shrink-0" />
                  <span><strong>Secure early power allocation:</strong> If utilizing mega LED panel event setup (above 1,000 sq ft) or extensive cold pyrotechnics venue elements, let our engineering unit know 30 days prior.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-[#5c0202] rounded-full mt-1.5 shrink-0" />
                  <span><strong>Logistics and Transit:</strong> Advise long-distance guests to use ORR Exit 15 Pedda Golconda directions to bypass city bottleneck zones entirely.</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 2: Checklist */}
        {activeTab === 'checklist' && (
          <div className="max-w-3xl mx-auto bg-white border border-gold/10 rounded-[2px] p-6 md:p-10 shadow-xs animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display text-2xl font-light text-obsidian">Logistical Milestones</h3>
              <span className="text-[10px] bg-gold-pale/60 text-[#5c0202] px-3 py-1 font-bold rounded-[1px]">
                {checklist.filter(i => i.done).length} OF {checklist.length} COMPLETE
              </span>
            </div>

            <div className="divide-y divide-gray-100">
              {checklist.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => toggleChecklist(item.id)}
                  className="flex items-start gap-4 py-4 cursor-pointer hover:bg-chalk/45 px-2 transition-colors duration-200"
                >
                  <button 
                    className={`mt-0.5 w-5 h-5 rounded-[2px] border flex items-center justify-center transition-all ${
                      item.done 
                        ? 'bg-[#5c0202] border-[#5c0202] text-white' 
                        : 'border-gold/30 hover:border-[#5c0202]'
                    }`}
                  >
                    {item.done && <CheckCircle size={12} className="stroke-[3]" />}
                  </button>
                  <div className="flex-1">
                    <p className={`text-xs sm:text-sm ${item.done ? 'line-through text-slate-custom/40 font-light' : 'text-slate-custom font-normal'}`}>
                      {item.task}
                    </p>
                    <span className="text-[9px] uppercase tracking-wider font-bold text-[#5c0202] mt-1 block">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Budget Calculator */}
        {activeTab === 'calculator' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 animate-fade-in">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 bg-white border border-gold/10 p-6 md:p-8 rounded-[2px] space-y-6 shadow-xs">
              <h3 className="font-display text-2xl font-light text-obsidian">Custom Event Metrics</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-[#5c0202]">
                  <span>Guest Capacity</span>
                  <span>{guestCount} Pax</span>
                </div>
                <input 
                  type="range" 
                  min={100} 
                  max={4000} 
                  step={50}
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full accent-[#5c0202]"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-[#5c0202]">
                  <span>Celebration Duration</span>
                  <span>{eventDuration} {eventDuration === 1 ? 'Day' : 'Days'}</span>
                </div>
                <input 
                  type="range" 
                  min={1} 
                  max={5} 
                  step={1}
                  value={eventDuration}
                  onChange={(e) => setEventDuration(Number(e.target.value))}
                  className="w-full accent-[#5c0202]"
                />
              </div>

              <div className="pt-2 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-semibold text-obsidian uppercase tracking-wide">Heavy Audio-Visual Rigging</h4>
                    <p className="text-[11px] text-slate-custom/60 font-light">Includes truss structure, laser presets & line array supports.</p>
                  </div>
                  <input 
                    type="checkbox"
                    checked={needsAV}
                    onChange={(e) => setNeedsAV(e.target.checked)}
                    className="w-4 h-4 accent-[#5c0202]"
                  />
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div>
                    <h4 className="text-xs font-semibold text-obsidian uppercase tracking-wide">VIP Lounge Suite Access</h4>
                    <p className="text-[11px] text-slate-custom/60 font-light">3 independent luxury suites for close families & crew.</p>
                  </div>
                  <input 
                    type="checkbox"
                    checked={needsVIP}
                    onChange={(e) => setNeedsVIP(e.target.checked)}
                    className="w-4 h-4 accent-[#5c0202]"
                  />
                </div>
              </div>
            </div>

            {/* Output Display */}
            <div className="lg:col-span-5 bg-white border border-[#5c0202]/25 p-6 md:p-8 rounded-[2px] shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-pale/20 rounded-full blur-xl" />
              
              <div>
                <span className="text-[9px] uppercase tracking-widest font-bold text-[#5c0202] block mb-2">Estimated Investment</span>
                <h4 className="font-display text-3xl font-light text-[#2D2A26] mb-6">
                  ₹{totalEstimate.toLocaleString('en-IN')}*
                </h4>

                <div className="space-y-3 border-t border-gray-100 pt-5 text-xs font-light text-slate-custom/80">
                  <div className="flex justify-between">
                    <span>Base Venue Hire ({eventDuration} day/s)</span>
                    <span className="font-medium text-obsidian">₹{(baseVenueRate * eventDuration).toLocaleString('en-IN')}</span>
                  </div>
                  {needsAV && (
                    <div className="flex justify-between">
                      <span>Audio-Visual Infrastructure Support</span>
                      <span className="font-medium text-obsidian">₹{avEstimate.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  {needsVIP && (
                    <div className="flex justify-between">
                      <span>VIP Luxury Suites & Grooming Areas</span>
                      <span className="font-medium text-obsidian">₹{hospitalityEstimate.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Infrastructure & Sanitation Levy</span>
                    <span className="font-medium text-obsidian">₹{infrastructureLevy.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#5c0202]/15">
                <button
                  onClick={() => {
                    window.location.hash = '#request-proposal';
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#5c0202] hover:bg-[#7a0303] text-white py-3.5 text-xs font-bold tracking-widest uppercase rounded-[2px] transition-all cursor-pointer"
                >
                  Apply & Lock Budget <ArrowRight size={12} />
                </button>
                <p className="text-[10px] text-slate-custom/50 text-center mt-3 italic font-light">
                  *Estimates are indicative starting prices. Standard luxury government levies apply.
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
