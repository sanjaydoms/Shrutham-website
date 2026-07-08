import React, { useState, useEffect } from 'react';
import { Star, MessageSquarePlus, Check, Sparkles } from 'lucide-react';
import { Review } from '../types';

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [filterType, setFilterType] = useState('All');
  
  // review creator form
  const [showForm, setShowForm] = useState(false);
  const [formName, setFormName] = useState('');
  const [formRole, setFormRole] = useState('');
  const [formText, setFormText] = useState('');
  const [formStars, setFormStars] = useState(5);
  const [formType, setFormType] = useState('Weddings');
  const [successMsg, setSuccessMsg] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const initialReviews: Review[] = [
    {
      id: 'r1',
      name: 'Sanjay & Ananya K.',
      role: 'Wedding Client',
      stars: 5,
      text: "Shrutham Convention exceeded all our expectations for our wedding. The pillar-free hall made the decor look absolutely majestic, and our guests had no trouble arriving from Gachibowli.",
      eventType: 'Weddings'
    },
    {
      id: 'r2',
      name: 'Meera R.',
      role: 'Event Director',
      stars: 5,
      text: "The corporate conference we hosted at Shrutham was flawless. The venue's state-of-the-art AV equipment and professional event management team made all the difference.",
      eventType: 'Conferences'
    },
    {
      id: 'r3',
      name: 'Rajesh G.',
      role: 'Exhibitor',
      stars: 5,
      text: "We hosted a grand exhibition for up to 3,000 guests, and the layout handled the crowd effortlessly. Ample parking space and easy access from ORR Exit 15 are huge pluses.",
      eventType: 'Launches'
    }
  ];

  // Load reviews
  useEffect(() => {
    try {
      const stored = localStorage.getItem('shrutham_reviews');
      if (stored) {
        setReviews(JSON.parse(stored));
      } else {
        setReviews(initialReviews);
        localStorage.setItem('shrutham_reviews', JSON.stringify(initialReviews));
      }
    } catch (e) {
      setReviews(initialReviews);
    }
  }, []);

  const handleCreateReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formRole || !formText) {
      setFormError('Please fill out all fields to submit your recommendation letter.');
      return;
    }
    setFormError(null);

    const newReview: Review = {
      id: 'rev-' + Date.now(),
      name: formName,
      role: formRole,
      stars: formStars,
      text: formText,
      eventType: formType
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    try {
      localStorage.setItem('shrutham_reviews', JSON.stringify(updatedReviews));
    } catch (err) {}

    // Reset status
    setFormName('');
    setFormRole('');
    setFormText('');
    setFormStars(5);
    setFormError(null);
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
      setShowForm(false);
    }, 2500);
  };

  const filteredReviews = reviews.filter((rev) => {
    if (filterType === 'All') return true;
    return rev.eventType === filterType;
  });

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-chalk border-b border-[#5c0202]/15" aria-labelledby="testimonials-heading">
      <div className="site-container px-6 md:px-12 lg:px-16 xl:px-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <span className="inline-block px-4 py-1.5 bg-[#5c0202] text-white text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase font-body rounded-[2px] mb-4">
              Testimonials
            </span>
            <h2 id="testimonials-heading" className="font-display text-4xl sm:text-5xl font-light text-obsidian tracking-tight leading-tight">
              What Our Happy Hosts Say
            </h2>
          </div>

          <div className="flex flex-wrap gap-2.5 mt-6 md:mt-0 font-body items-center">
            {['All', 'Weddings', 'Conferences', 'Launches'].map((tag) => (
              <button
                key={tag}
                onClick={() => setFilterType(tag)}
                className={`px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-[2px] cursor-pointer transition-colors ${
                  filterType === tag
                    ? 'bg-[#5c0202] text-white font-bold hover:bg-[#7a0303]'
                    : 'bg-white text-mid border border-[#5c0202]/10 hover:border-[#5c0202]/35'
                }`}
              >
                {tag}
              </button>
            ))}

            <button
              onClick={() => {
                setShowForm(!showForm);
                setSuccessMsg(false);
              }}
              className="btn-slide-crimson px-3.5 py-1.5 text-white text-xs font-semibold tracking-wider uppercase rounded-[2px] transition-all flex items-center gap-1.5 cursor-pointer ml-2 shadow-sm"
            >
              <MessageSquarePlus size={13} className="text-white" /> Write Review
            </button>
          </div>
        </div>

        {/* Floating creator form overlay */}
        {showForm && (
          <div className="bg-white p-6 md:p-8 border border-[#5c0202]/35 rounded-[2px] shadow-2xl max-w-xl mx-auto mb-12 animate-fade-in font-body">
            {successMsg ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                  <Check size={24} />
                </div>
                <h4 className="font-display text-2xl text-obsidian">Review Added Successfully</h4>
                <p className="text-xs text-mid mt-1">Thank you! Your testimonial has been logged securely onto our board.</p>
              </div>
            ) : (
              <form onSubmit={handleCreateReview} className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-[#5c0202]/10">
                  <span className="text-xs font-bold tracking-wider uppercase text-[#5c0202]">Record Your Experience</span>
                  <button 
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="text-gray-400 hover:text-gray-600 text-xs font-mono font-bold cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase text-mid mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Chandra"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full bg-chalk px-3 py-2 text-xs text-obsidian border border-[#5c0202]/15 focus:border-[#5c0202] outline-none rounded-[2px]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase text-mid mb-1">Designation &amp; Event Scope</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Director, Zenith Biotech Corp"
                      value={formRole}
                      onChange={(e) => setFormRole(e.target.value)}
                      className="w-full bg-chalk px-3 py-2 text-xs text-obsidian border border-[#5c0202]/15 focus:border-[#5c0202] outline-none rounded-[2px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase text-mid mb-1">Rating Stars</label>
                    <select
                      value={formStars}
                      onChange={(e) => setFormStars(Number(e.target.value))}
                      className="w-full bg-chalk px-3 py-2 text-xs text-obsidian border border-[#5c0202]/15 focus:border-[#5c0202] outline-none rounded-[2px]"
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ (5 Stars Excellent)</option>
                      <option value={4}>⭐⭐⭐⭐ (4 Stars Very Good)</option>
                      <option value={3}>⭐⭐⭐ (3 Stars Satisfactory)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase text-mid mb-1">Event Type</label>
                    <select
                      value={formType}
                      onChange={(e) => setFormType(e.target.value)}
                      className="w-full bg-chalk px-3 py-2 text-xs text-obsidian border border-[#5c0202]/15 focus:border-[#5c0202] outline-none rounded-[2px]"
                    >
                      <option value="Weddings">Weddings</option>
                      <option value="Conferences">Conferences</option>
                      <option value="Launches">Launches</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-mid mb-1">Your Review message</label>
                  <textarea
                    required
                    placeholder="Describe your guests' experience, catering standard, audio layout, or helpful valet details..."
                    value={formText}
                    onChange={(e) => setFormText(e.target.value)}
                    rows={3}
                    className="w-full bg-chalk px-3 py-2 text-xs text-obsidian border border-[#5c0202]/15 focus:border-[#5c0202] outline-none rounded-[2px] resize-none"
                  />
                </div>

                {formError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-xs py-2 px-3 rounded-[2px] mb-3 text-left font-light">
                    {formError}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-slide-crimson w-full py-3 text-white text-xs font-bold tracking-widest uppercase rounded-[2px] cursor-pointer"
                >
                  Publish testimonies
                </button>
              </form>
            )}
          </div>
        )}

        {/* Reviews Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-8 md:p-10 border border-[#5c0202]/15 rounded-[2px] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
            >
              {/* Giant quote mark representation */}
              <span
                className="absolute top-4 right-6 font-display font-light text-7xl text-[#5c0202]/10 select-none leading-none pointer-events-none"
                aria-hidden="true"
              >
                “
              </span>

              <div className="relative z-10">
                {/* Stars ratings */}
                <div className="flex gap-1 text-[#5c0202] text-xs font-semibold mb-6">
                  {Array.from({ length: rev.stars }).map((_, i) => (
                    <Star key={i} size={13} className="fill-[#5c0202] stroke-[#5c0202]" />
                  ))}
                </div>

                <p className="font-display text-lg font-normal text-obsidian italic leading-relaxed mb-8">
                  "{rev.text}"
                </p>
              </div>

              <div className="border-t border-[#5c0202]/10 pt-4 mt-auto">
                <div className="font-body text-xs font-bold text-obsidian">{rev.name}</div>
                <div className="font-body text-[10px] text-mid tracking-wide leading-relaxed uppercase mt-1">
                  {rev.role}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
