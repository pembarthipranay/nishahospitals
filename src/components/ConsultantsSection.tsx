import { useState } from 'react';
import { Award, GraduationCap, Calendar, Clock, Stethoscope, ChevronRight, X, Check, ShieldCheck } from 'lucide-react';
import { DOCTORS_DATA, Doctor } from '../data/hospitalData';

interface ConsultantsSectionProps {
  onBookWithDoctor: (doctorName: string, department: string) => void;
}

export default function ConsultantsSection({ onBookWithDoctor }: ConsultantsSectionProps) {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  return (
    <section id="consultants" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold text-rose-800 tracking-wider uppercase mb-2">
            Panel of Consultants
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif" style={{ textWrap: 'balance' }}>
            Renowned Obstetricians, Surgeons & Specialists
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Our medical team combines prestigious training from Osmania Medical College, Surat Medical College, and KIMS with decades of dedicated bedside service in Hyderabad.
          </p>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DOCTORS_DATA.map((doc) => (
            <div
              key={doc.id}
              className="bg-[#fafaf7] rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Doctor Avatar Badge & Degrees */}
                <div className="flex items-start justify-between gap-3">
                  <div className="w-14 h-14 rounded-xl bg-rose-700 text-white flex items-center justify-center font-serif text-xl font-bold shadow-xs shrink-0">
                    {doc.name.split(' ').map((n) => n[0]).slice(1, 3).join('')}
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-rose-900 bg-rose-100/70 px-2.5 py-1 rounded-md">
                      {doc.degrees}
                    </span>
                    <p className="text-[11px] font-semibold text-slate-500 mt-1">
                      {doc.experience}
                    </p>
                  </div>
                </div>

                {/* Name & Role */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-serif leading-tight">
                    {doc.name}
                  </h3>
                  <p className="text-xs font-semibold text-rose-800 mt-0.5">
                    {doc.role}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Department: {doc.department}
                  </p>
                </div>

                {/* Education Highlight */}
                <div className="p-3 rounded-lg bg-white border border-slate-200/80 text-xs text-slate-600 space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                    <GraduationCap className="w-3.5 h-3.5 text-rose-700" />
                    <span>Education & Background</span>
                  </div>
                  <p className="text-[11px] leading-snug line-clamp-2">
                    {doc.education}
                  </p>
                </div>

                {/* Specialties preview */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Key Specialties
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {doc.specialties.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="text-[11px] text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200"
                      >
                        {s}
                      </span>
                    ))}
                    {doc.specialties.length > 3 && (
                      <span className="text-[11px] text-slate-500 py-0.5">
                        +{doc.specialties.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* OPD Timings */}
                <div className="flex items-center gap-1.5 text-xs text-slate-600 pt-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{doc.opdTimings}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedDoctor(doc)}
                  className="text-xs font-semibold text-slate-700 hover:text-slate-900 underline underline-offset-4 min-h-[44px] flex items-center"
                >
                  Full Bio & Credentials
                </button>

                <button
                  type="button"
                  onClick={() => onBookWithDoctor(doc.name, doc.department)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-rose-700 hover:bg-rose-800 rounded-xl shadow-xs transition-colors min-h-[44px]"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book OPD</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Doctor Bio Modal */}
        {selectedDoctor && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
            <div className="bg-white rounded-t-2xl sm:rounded-2xl max-w-xl w-full p-5 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-4 sm:space-y-5">
              <button
                type="button"
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-3.5 right-3.5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-rose-700 text-white flex items-center justify-center font-serif text-2xl font-bold shadow-sm shrink-0">
                  {selectedDoctor.name.split(' ').map((n) => n[0]).slice(1, 3).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-serif">
                    {selectedDoctor.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-bold text-rose-900 bg-rose-100 px-2 py-0.5 rounded">
                      {selectedDoctor.degrees}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {selectedDoctor.experience}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-rose-800 mt-1">
                    {selectedDoctor.role}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Biography & Clinical Experience
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedDoctor.bio}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Education & Qualifications
                </h4>
                <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  {selectedDoctor.education}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Clinical Expertise & Procedures
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedDoctor.specialties.map((spec) => (
                    <div key={spec} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-900">
                    OPD Consultation Hours
                  </span>
                  <p className="text-xs font-semibold text-slate-800">
                    {selectedDoctor.opdTimings}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedDoctor(null)}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const doc = selectedDoctor;
                    setSelectedDoctor(null);
                    onBookWithDoctor(doc.name, doc.department);
                  }}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-rose-700 hover:bg-rose-800 rounded-xl shadow-sm transition-all"
                >
                  Book Appointment with {selectedDoctor.name}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
