import { useState } from 'react';
import { Calendar, Phone, ShieldCheck, HeartPulse, Sparkles, MapPin, ArrowRight, Clock, Award } from 'lucide-react';
import { HOSPITAL_CONTACT } from '../data/hospitalData';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  // Gallery switcher using genuine hospital photos
  const heroSlides = [
    {
      src: '/images/virtual_gallery_banner.jpg',
      label: 'Nisa Hospital Maternity Center',
      tag: 'Official Website Banner',
      caption: 'Advanced Obstetric & Gynecological Care at Bazarghat Cross Roads, Hyderabad',
    },
    {
      src: '/images/large/gallery_img3.jpg',
      label: 'Labor & Delivery Suites',
      tag: '1st Floor Clinical Hub',
      caption: 'Continuous fetal heart monitoring, natural birth support & 24/7 surgical readiness',
    },
    {
      src: '/images/large/gallery_img4.jpg',
      label: 'Level II Neonatal ICU (NICU)',
      tag: 'Pediatrics & Newborn Care',
      caption: 'Led by Dr. K. Husain Arastu with advanced incubators & phototherapy units',
    },
    {
      src: '/images/large/gallery_img1.jpg',
      label: 'Hospital Infrastructure & 35-Bed Facility',
      tag: 'Bazar Ghat Cross Roads',
      caption: 'Established in 1989 by Dr. Farida S. Arastu with emergency admissions',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-rose-50/30 to-[#fafaf7] pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/70">
      {/* Subtle organic background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-rose-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-50/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & Value Proposition */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Trust Kicker - Zero pill, clean typography with subtle separator */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-rose-800 tracking-wide uppercase">
              <span>Established 1989</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Osmania Alumni Leadership</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>35-Bed Center</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2] font-serif" style={{ textWrap: 'balance' }}>
              Advanced Maternity, Women's Healthcare & 24×7 Neonatal Care in Hyderabad
            </h1>

            {/* Value Proposition Body */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Founded by <strong className="text-slate-900 font-semibold">Dr. Farida S. Arastu</strong> (MD, DGO, Osmania ’72), Nisa Hospital has provided compassionate, ethics-driven obstetric and gynecological care for over 35 years. From natural childbirth advocacy to our Level II NICU and laparoscopic surgery, we have guided over <strong className="text-slate-900 font-semibold">30,000 families</strong> safely into motherhood.
            </p>

            {/* Real Doctor Endorsement Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-rose-100 shadow-xs">
                <div className="p-2 rounded-lg bg-rose-50 text-rose-700 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Dr. Farida S. Arastu</h4>
                  <p className="text-[12px] text-slate-500 leading-snug">MD, DGO (Osmania '72) · 35+ Yrs Exp · Chief OBGYN & Founder</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-rose-100 shadow-xs">
                <div className="p-2 rounded-lg bg-rose-50 text-rose-700 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Dr. Tahera K. Arastu</h4>
                  <p className="text-[12px] text-slate-500 leading-snug">DGO, DNB · Gold Medalist & State Topper · Laparoscopy Specialist</p>
                </div>
              </div>
            </div>

            {/* CTAs & Emergency Contacts */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-rose-700 hover:bg-rose-800 active:bg-rose-900 rounded-xl shadow-md hover:shadow-lg transition-all whitespace-nowrap min-h-[44px]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Doctor Appointment</span>
              </button>

              <a
                href="#specialties"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-colors whitespace-nowrap min-h-[44px]"
              >
                <span>Explore 7 Specialties</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${HOSPITAL_CONTACT.phones[0].raw}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-rose-900 hover:bg-rose-100/60 rounded-xl transition-colors whitespace-nowrap min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-rose-700" />
                <span>Call Emergency: 040-6673 2786</span>
              </a>
            </div>

            {/* Key Clinical Capabilities Strip */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-5 text-xs text-slate-500 pt-2 border-t border-slate-200">
              <span className="flex items-center gap-1.5 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                Normal Childbirth Priority
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                Level II NICU On-Site
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                24×7 Pharmacy & Pathology Lab
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                4D Anomaly Scans
              </span>
            </div>
          </div>

          {/* Right Column: High-Fidelity Real Photo Showcase */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-2.5 sm:p-3 border border-slate-200/90 shadow-md">
              {/* Main Photo Display */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-slate-900">
                <img
                  src={heroSlides[activeSlide].src}
                  alt={heroSlides[activeSlide].label}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Safe fallback
                    (e.target as HTMLImageElement).src = '/images/large/gallery_img1.jpg';
                  }}
                />
                
                {/* Measured Scrim for Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                  <span className="text-[11px] font-semibold text-rose-300 tracking-wider uppercase mb-1">
                    {heroSlides[activeSlide].tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white font-serif leading-snug">
                    {heroSlides[activeSlide].label}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    {heroSlides[activeSlide].caption}
                  </p>
                </div>
              </div>

              {/* Interactive Thumbnail Switcher */}
              <div className="grid grid-cols-4 gap-2 mt-2.5">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={slide.label}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all aspect-[4/3] ${
                      activeSlide === idx
                        ? 'border-rose-700 ring-2 ring-rose-200'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={slide.src}
                      alt={slide.label}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>

              {/* Bottom Hospital Snapshot Card */}
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 px-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-700" />
                  <span>Bazarghat Cross Roads, Lakdikapul</span>
                </div>
                <div className="font-semibold text-slate-800">
                  Rating: <span className="text-amber-600">4.2 / 5.0</span> (500+ reviews)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
