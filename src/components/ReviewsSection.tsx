import { Star, ShieldCheck, Heart, MessageSquare, ThumbsUp, Car } from 'lucide-react';
import { PATIENT_REVIEWS, HOSPITAL_CONTACT } from '../data/hospitalData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-8">
            <div className="text-xs font-semibold text-rose-800 tracking-wider uppercase mb-2">
              Patient Experiences & Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif" style={{ textWrap: 'balance' }}>
              Trusted by Generations of Families Across Hyderabad
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              Real feedback from mothers, fathers, and families who experienced our care firsthand at Bazar Ghat Cross Roads.
            </p>
          </div>

          {/* Aggregate Rating Scorecard */}
          <div className="lg:col-span-4 bg-rose-50/80 rounded-2xl p-5 border border-rose-200/80">
            <div className="flex items-center gap-3">
              <div className="text-3xl sm:text-4xl font-extrabold text-rose-950 font-serif">
                4.2
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <Star className="w-4 h-4 fill-amber-400/40 text-amber-400" />
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-0.5">
                  Based on 500+ Verified Reviews
                </div>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-rose-200/60 text-[11px] text-slate-600">
              Aggregated from Google Reviews, Justdial & Practo patient entries.
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PATIENT_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#fafaf7] rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-600 font-medium">
                    {rev.source.split('(')[0]}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed font-serif">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900">{rev.name}</div>
                  <div className="text-[11px] text-slate-500">{rev.treatment}</div>
                </div>
                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Verified Care
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Practical Visitor Notice on Parking */}
        <div className="mt-10 p-4 rounded-xl bg-slate-100 border border-slate-200 flex items-start sm:items-center gap-3 text-xs text-slate-600">
          <Car className="w-5 h-5 text-slate-500 shrink-0 mt-0.5 sm:mt-0" />
          <span>
            <strong className="text-slate-800">Visitor & Parking Advisory:</strong> Located beside Bazarghat Signal near Nagina Hotel. While two-wheeler parking and drop-off is straightforward, car parking along the main road can be crowded during peak evening OPD hours. Arriving by auto-rickshaw or app cab is highly recommended for routine visits.
          </span>
        </div>
      </div>
    </section>
  );
}
