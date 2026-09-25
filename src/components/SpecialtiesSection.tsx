import { useState } from 'react';
import { 
  HeartHandshake, 
  Baby, 
  Stethoscope, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  Calendar, 
  ChevronRight, 
  CheckCircle2, 
  PhoneCall, 
  Clock,
  Layers
} from 'lucide-react';
import { SERVICES_DATA, ServiceDetail } from '../data/hospitalData';

interface SpecialtiesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string, doctorName?: string) => void;
}

export default function SpecialtiesSection({ onSelectServiceForBooking }: SpecialtiesSectionProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);

  const activeService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  // Specific service icons
  const getIcon = (id: string) => {
    switch (id) {
      case 'obstetrics':
        return HeartHandshake;
      case 'gynecology':
        return Stethoscope;
      case 'pediatrics-nicu':
        return Baby;
      case 'cancer-wellness':
        return Sparkles;
      case 'radiology-ultrasound':
        return Activity;
      case 'general-surgery':
        return ShieldCheck;
      case 'emergency-ambulance':
        return PhoneCall;
      default:
        return Stethoscope;
    }
  };

  return (
    <section id="specialties" className="py-16 sm:py-20 bg-[#fafaf7] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold text-rose-800 tracking-wider uppercase mb-2">
            Clinical Services & Departments
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif" style={{ textWrap: 'balance' }}>
            Comprehensive Women's Healthcare, Maternity & Pediatric Specialties
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            From routine prenatal assessments and painless normal deliveries to Level II neonatal intensive care and laparoscopic surgeries.
          </p>
        </div>

        {/* Mobile Horizontal Service Selector */}
        <div className="lg:hidden flex overflow-x-auto pb-3 mb-4 gap-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {SERVICES_DATA.map((service, idx) => {
            const isSelected = service.id === selectedServiceId;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setSelectedServiceId(service.id)}
                className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border min-h-[44px] flex items-center gap-1.5 shrink-0 ${
                  isSelected
                    ? 'bg-rose-700 text-white border-rose-800 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                <span className="opacity-70 font-mono text-[11px]">0{idx + 1}.</span>
                <span>{service.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Master-Detail Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Desktop Left Column: Interactive Service Selector */}
          <div className="hidden lg:block lg:col-span-5 space-y-2">
            {SERVICES_DATA.map((service, idx) => {
              const Icon = getIcon(service.id);
              const isSelected = service.id === selectedServiceId;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all flex items-start gap-4 border min-h-[44px] ${
                    isSelected
                      ? 'bg-white border-rose-700 shadow-md ring-1 ring-rose-700/20'
                      : 'bg-white/70 hover:bg-white border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-lg shrink-0 transition-colors ${
                      isSelected ? 'bg-rose-700 text-white' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono text-slate-600">
                        0{idx + 1}.
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isSelected ? 'text-rose-700 translate-x-1' : 'text-slate-600'
                        }`}
                      />
                    </div>
                    <h3 className={`text-sm font-bold truncate mt-0.5 ${isSelected ? 'text-rose-900' : 'text-slate-900'}`}>
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-1">
                      {service.summary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Clinical Deep-Dive Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm sticky top-28">
            <div className="space-y-6">
              {/* Card Header */}
              <div className="border-b border-slate-100 pb-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-800 mb-1.5">
                  <Layers className="w-4 h-4" />
                  <span>Department Overview</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">
                  {activeService.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                  {activeService.description}
                </p>
              </div>

              {/* Lead Doctor Badge */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    Department Head / Lead Consultant
                  </span>
                  <div className="text-sm font-bold text-slate-900">
                    {activeService.leadDoctor}
                  </div>
                </div>
                <span className="text-xs font-medium text-rose-800 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
                  Daily OPD & 24/7 On-Call
                </span>
              </div>

              {/* Clinical Procedures & Capabilities */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Key Procedures & Clinical Offerings
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-[#fafaf7] border border-slate-200/60 text-xs text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => onSelectServiceForBooking(activeService.title, activeService.leadDoctor)}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-white bg-rose-700 hover:bg-rose-800 rounded-xl shadow-sm transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Consultation for {activeService.title}</span>
                </button>

                <a
                  href="#consultants"
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline underline-offset-4"
                >
                  View Consultant Credentials →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
