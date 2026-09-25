import { useState } from 'react';
import { Building, ShieldCheck, CheckCircle2, ChevronRight, Activity, Clock, Compass } from 'lucide-react';
import { HOSPITAL_FACILITIES } from '../data/hospitalData';

export default function FacilitiesSection() {
  const [activeFloorIndex, setActiveFloorIndex] = useState(1); // Default to First Floor (Labor & NICU)

  const currentFloor = HOSPITAL_FACILITIES[activeFloorIndex];

  return (
    <section id="facilities" className="py-16 sm:py-20 bg-[#fafaf7] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold text-rose-800 tracking-wider uppercase mb-2">
            Infrastructure & Facilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif" style={{ textWrap: 'balance' }}>
            Built Specifically for Maternal Safety & Newborn Comfort
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A purposeful 35-bed architectural layout designed so that emergency labor suites, neonatal intensive care, operating theaters, and 24/7 diagnostics operate seamlessly side-by-side.
          </p>
        </div>

        {/* Floor-by-Floor Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
          {HOSPITAL_FACILITIES.map((facility, index) => (
            <button
              key={facility.floor}
              type="button"
              onClick={() => setActiveFloorIndex(index)}
              className={`p-3 sm:p-4 rounded-xl text-left border transition-all min-h-[44px] ${
                activeFloorIndex === index
                  ? 'bg-rose-900 text-white border-rose-950 shadow-md ring-2 ring-rose-200'
                  : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider opacity-80 mb-0.5 sm:mb-1">
                {facility.floor}
              </div>
              <div className="text-xs sm:text-sm font-bold line-clamp-1">
                {facility.title.split('&')[0]}
              </div>
            </button>
          ))}
        </div>

        {/* Active Floor Showcase Card */}
        <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left Column: Floor Specs */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-800 font-mono">
                  {currentFloor.floor} Architecture
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 font-serif mt-1">
                  {currentFloor.title}
                </h3>
                <p className="text-xs sm:text-base text-slate-600 mt-2 sm:mt-3 leading-relaxed">
                  {currentFloor.description}
                </p>
              </div>

              {/* Floor Features List */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Facilities On This Level
                </h4>
                <div className="space-y-2">
                  {currentFloor.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Facilities Notice */}
              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0" />
                <span>
                  Nursing stations and quiet prayer rooms / namaz facilities are dedicated on each inpatient floor for family comfort.
                </span>
              </div>
            </div>

            {/* Right Column: Actual Real Photos of This Floor */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-slate-200 shadow-inner">
                <img
                  src={currentFloor.photos[0]}
                  alt={currentFloor.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-semibold text-white">
                    Actual Photo: {currentFloor.title}
                  </span>
                </div>
              </div>

              {/* Secondary photos if available */}
              {currentFloor.photos.length > 1 && (
                <div className="grid grid-cols-2 gap-2">
                  {currentFloor.photos.slice(1, 3).map((photo, i) => (
                    <div key={photo} className="relative aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                      <img
                        src={photo}
                        alt={`${currentFloor.title} detail ${i + 1}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
