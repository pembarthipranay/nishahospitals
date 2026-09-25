import { useState, useId } from 'react';
import { Calendar, Baby, Activity, Heart, Clock, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { VACCINE_SCHEDULE } from '../data/hospitalData';

export default function CalculatorsSection() {
  const [activeTab, setActiveTab] = useState<'edd' | 'vaccine'>('edd');

  // EDD Calculator State
  const [lmpDate, setLmpDate] = useState<string>('2026-05-15');
  const [cycleLength, setCycleLength] = useState<number>(28);

  const lmpInputId = useId();
  const cycleSelectId = useId();

  // Calculate EDD using Naegele's Rule: LMP + 280 days + (cycleLength - 28)
  const calculateEDD = () => {
    if (!lmpDate) return null;
    const lmp = new Date(lmpDate);
    if (isNaN(lmp.getTime())) return null;

    const cycleAdjustment = (cycleLength - 28) * 24 * 60 * 60 * 1000;
    const edd = new Date(lmp.getTime() + 280 * 24 * 60 * 60 * 1000 + cycleAdjustment);

    const today = new Date('2026-09-25T08:28:05'); // Current date from environment metadata
    const diffTime = today.getTime() - lmp.getTime();
    const totalDays = Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24)));
    const weeks = Math.floor(totalDays / 7);
    const days = totalDays % 7;

    let trimester = 'First Trimester (Weeks 1 - 12)';
    if (weeks >= 13 && weeks <= 27) {
      trimester = 'Second Trimester (Weeks 13 - 27)';
    } else if (weeks >= 28) {
      trimester = 'Third Trimester (Weeks 28 - 40+)';
    }

    return {
      dueDateString: edd.toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      weeks,
      days,
      trimester,
      progressPercent: Math.min(100, Math.round((weeks / 40) * 100)),
    };
  };

  const eddResult = calculateEDD();

  return (
    <section id="calculators" className="py-16 sm:py-20 bg-[#fafaf7] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold text-rose-800 tracking-wider uppercase mb-2">
            Patient Health Utilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif" style={{ textWrap: 'balance' }}>
            Maternity Timeline & Pediatric Vaccine Planner
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Interactive clinical calculators aligned with standard obstetric protocols and the Indian Academy of Pediatrics (IAP) schedules offered at Nisa Hospital.
          </p>
        </div>

        {/* Tab Controls adhering to frontend design guidelines */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 p-1 bg-slate-200/80 rounded-xl mb-6 sm:mb-8 w-full sm:w-fit">
          <button
            type="button"
            onClick={() => setActiveTab('edd')}
            className={`flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 text-xs font-semibold rounded-lg transition-all min-h-[44px] ${
              activeTab === 'edd'
                ? 'bg-white text-rose-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Calendar className="w-4 h-4 text-rose-700 shrink-0" />
            <span>Pregnancy Due Date & Trimester Milestones</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('vaccine')}
            className={`flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 text-xs font-semibold rounded-lg transition-all min-h-[44px] ${
              activeTab === 'vaccine'
                ? 'bg-white text-rose-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Baby className="w-4 h-4 text-rose-700 shrink-0" />
            <span>Pediatric Vaccine Tracker</span>
          </button>
        </div>

        {/* Tab 1: EDD & Milestone Calculator */}
        {activeTab === 'edd' && (
          <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Input Form */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-5">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-serif">
                  Calculate Estimated Due Date (EDD)
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Based on your Last Menstrual Period (LMP) and average menstrual cycle.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor={lmpInputId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    First Day of Last Menstrual Period (LMP)
                  </label>
                  <input
                    id={lmpInputId}
                    type="date"
                    value={lmpDate}
                    onChange={(e) => setLmpDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-700/20 focus:border-rose-700 min-h-[44px]"
                  />
                </div>

                <div>
                  <label htmlFor={cycleSelectId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Average Menstrual Cycle Length
                  </label>
                  <select
                    id={cycleSelectId}
                    value={cycleLength}
                    onChange={(e) => setCycleLength(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-700/20 focus:border-rose-700 min-h-[44px]"
                  >
                    {[24, 25, 26, 27, 28, 29, 30, 31, 32, 35].map((days) => (
                      <option key={days} value={days}>
                        {days} Days {days === 28 ? '(Standard Average)' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-100 text-xs text-rose-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-rose-700" />
                  Clinical Advice from Dr. Farida S. Arastu:
                </span>
                <p className="text-slate-700 leading-relaxed">
                  Only ~5% of babies arrive precisely on their EDD; deliveries between 37 and 41 weeks are considered full-term. Regular fetal heart monitoring and 4D anomaly scans ensure optimal peace of mind.
                </p>
              </div>
            </div>

            {/* Results & Recommended Scan Timeline */}
            <div className="lg:col-span-7 space-y-6">
              {eddResult ? (
                <>
                  <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-4">
                    <span className="text-xs uppercase tracking-wider text-rose-400 font-semibold font-mono">
                      Estimated Due Date (Naegele's Formula)
                    </span>
                    <div className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
                      {eddResult.dueDateString}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-800 text-xs">
                      <div>
                        <span className="text-slate-400">Current Gestation:</span>
                        <div className="text-sm font-bold text-white font-mono tabular-nums">
                          {eddResult.weeks} Weeks, {eddResult.days} Days
                        </div>
                      </div>
                      <div>
                        <span className="text-slate-400">Trimester Stage:</span>
                        <div className="text-sm font-bold text-rose-300">
                          {eddResult.trimester.split('(')[0]}
                        </div>
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <span className="text-slate-400">Progress:</span>
                        <div className="text-sm font-bold text-white font-mono tabular-nums">
                          {eddResult.progressPercent}% Completed
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-rose-600 rounded-full transition-all duration-500"
                        style={{ width: `${eddResult.progressPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Scans Schedule at Nisa Hospital */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Recommended Obstetric Scans at Nisa Hospital (Dr. Alka Prasad)
                    </h4>
                    <div className="space-y-2 text-xs">
                      <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-start justify-between gap-3">
                        <div>
                          <span className="font-bold text-slate-900">6 – 8 Weeks: Early Dating & Viability Scan</span>
                          <p className="text-slate-600 mt-0.5">Confirms intrauterine pregnancy, heartbeat detection, and single/multiple gestation.</p>
                        </div>
                        <span className="px-2 py-1 rounded bg-white text-slate-700 font-mono text-[11px] border border-slate-200 shrink-0">1st Tri</span>
                      </div>

                      <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-start justify-between gap-3">
                        <div>
                          <span className="font-bold text-slate-900">11 – 13.6 Weeks: Nuchal Translucency (NT) & Dual Marker</span>
                          <p className="text-slate-600 mt-0.5">Crucial chromosomal screening and nasal bone visualization.</p>
                        </div>
                        <span className="px-2 py-1 rounded bg-white text-slate-700 font-mono text-[11px] border border-slate-200 shrink-0">1st Tri</span>
                      </div>

                      <div className="p-3 rounded-xl border border-rose-200 bg-rose-50/50 flex items-start justify-between gap-3">
                        <div>
                          <span className="font-bold text-rose-950">18 – 20 Weeks: TIFFA / Detailed Anomaly Scan (4D Ultrasound)</span>
                          <p className="text-rose-900 mt-0.5">Gold standard scan assessing every organ, spine, heart chambers, and placental location.</p>
                        </div>
                        <span className="px-2 py-1 rounded bg-rose-200/80 text-rose-900 font-mono text-[11px] font-bold shrink-0">2nd Tri</span>
                      </div>

                      <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-start justify-between gap-3">
                        <div>
                          <span className="font-bold text-slate-900">28 – 32 Weeks: Growth Scan & Fetal Doppler</span>
                          <p className="text-slate-600 mt-0.5">Monitors amniotic fluid index (AFI), fetal blood flow velocity, and estimated fetal weight.</p>
                        </div>
                        <span className="px-2 py-1 rounded bg-white text-slate-700 font-mono text-[11px] border border-slate-200 shrink-0">3rd Tri</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-sm text-slate-500 py-10 text-center">
                  Select a valid LMP date to view gestational calculations.
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Pediatric Vaccine Tracker */}
        {activeTab === 'vaccine' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-xl font-bold text-slate-900 font-serif">
                Comprehensive Pediatric Immunization Schedule (Indian Academy of Pediatrics)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Administered by <strong className="text-slate-900">Dr. K. Husain Arastu, MD (Pediatrics)</strong> at Nisa Hospital's daily Vaccine Clinic.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                    <th className="py-3 px-4 font-semibold">Recommended Age</th>
                    <th className="py-3 px-4 font-semibold">Vaccines Administered</th>
                    <th className="py-3 px-4 font-semibold hidden md:table-cell">Clinical Objective & Protection</th>
                    <th className="py-3 px-4 font-semibold text-right">Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {VACCINE_SCHEDULE.map((v) => (
                    <tr key={v.age} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900 whitespace-nowrap">
                        {v.age}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1.5">
                          {v.vaccines.map((vac) => (
                            <span
                              key={vac}
                              className="text-[11px] font-medium text-rose-900 bg-rose-50 px-2 py-0.5 rounded border border-rose-200/80 whitespace-nowrap"
                            >
                              {vac}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-slate-600 hidden md:table-cell">
                        {v.notes}
                      </td>
                      <td className="py-3 px-4 text-right text-slate-500 whitespace-nowrap">
                        Level II Nursery / OPD
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-slate-600">
                Vaccines are kept in uninterrupted cold-chain storage monitored 24×7.
              </span>
              <a
                href="tel:04066732786"
                className="font-bold text-rose-800 hover:text-rose-900 underline underline-offset-4"
              >
                Inquire Vaccine Availability: 040-6673 2786
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
