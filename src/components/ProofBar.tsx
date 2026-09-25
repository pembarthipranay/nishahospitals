import { Building2, Award, HeartPulse, Star, Clock } from 'lucide-react';
import { HOSPITAL_CONTACT } from '../data/hospitalData';

export default function ProofBar() {
  const metrics = [
    {
      figure: '1989',
      label: 'Year Established',
      detail: '35+ years serving Hyderabad families under Dr. Farida S. Arastu',
      icon: Clock,
    },
    {
      figure: '30,000+',
      label: 'Deliveries Conducted',
      detail: 'Pioneers in natural childbirth & high-risk obstetric safety',
      icon: HeartPulse,
    },
    {
      figure: '35 Beds',
      label: 'Hospital Capacity',
      detail: 'Labor suites, Level II NICU, private rooms & wards',
      icon: Building2,
    },
    {
      figure: '4.2 / 5.0',
      label: 'Patient Rating',
      detail: 'Over 500+ verified family reviews across Justdial & Google',
      icon: Star,
    },
    {
      figure: '24×7',
      label: 'Emergency Readiness',
      detail: 'Round-the-clock labor rooms, ambulance, pharmacy & lab',
      icon: Award,
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-8 sm:py-12 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-8">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className={`space-y-1 border-l border-slate-800 pl-3 sm:pl-4 ${
                  idx === 4 ? 'col-span-2 sm:col-span-1' : ''
                }`}
              >
                <div className="flex items-center gap-1.5 text-rose-400 mb-0.5">
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400 truncate">
                    {m.label}
                  </span>
                </div>
                <div className="text-xl sm:text-3xl font-extrabold text-white tracking-tight font-mono tabular-nums">
                  {m.figure}
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-snug">
                  {m.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
