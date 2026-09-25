import { Check, Shield, Users, HeartHandshake, Award } from 'lucide-react';

export default function AboutSection() {
  const commitments = [
    {
      title: 'Natural Childbirth Advocacy',
      description: 'We believe normal delivery is the healthiest start for both mother and child. Cesareans are strictly performed when clinically mandated.',
    },
    {
      title: 'Dedicated Obstetric & Gynecologic Suites',
      description: 'First-floor labor suites with continuous cardiotocography (CTG) monitoring, supported by 24-hour in-house anesthesiology and pediatricians.',
    },
    {
      title: 'Level II Neonatal ICU (NICU)',
      description: 'Immediate care for preterm newborns, respiratory distress, and neonatal jaundice directly adjacent to the delivery room.',
    },
    {
      title: 'Ethical, Budget-Friendly Care',
      description: 'Providing world-class maternal healthcare with transparent, affordable pricing to ensure every family receives dignity and clinical excellence.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold text-rose-800 tracking-wider uppercase mb-2">
            Our Foundation & Mission
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif" style={{ textWrap: 'balance' }}>
            From a 5-Bed Clinic in 1989 to Hyderabad's Trusted 35-Bed Women’s Healthcare Center
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            In 1989, <strong className="text-slate-900 font-semibold">Dr. Farida S. Arastu</strong>—an alumna of the first-ever entrance batch of Osmania Medical College (1972)—founded Nisa Hospital with a singular dream: to provide compassionate, personalized maternity and nursing care to every mother.
          </p>
        </div>

        {/* Story Grid with Real Hospital History Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image Collage from Real Assets */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[16/10] bg-slate-100">
              <img
                src="/images/history_banner.jpg"
                alt="Nisa Hospital History & Clinical Heritage"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/large/gallery_img1.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex items-end p-5">
                <div className="text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-rose-300">Clinical Heritage</span>
                  <h3 className="text-lg font-bold font-serif">35 Years of Obstetric Leadership</h3>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-slate-200 aspect-[4/3] bg-slate-100">
                <img
                  src="/images/large/gallery_img7.jpg"
                  alt="Doctor's Consultation Chamber at Nisa Hospital"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-200 aspect-[4/3] bg-slate-100">
                <img
                  src="/images/large/gallery_img2.jpg"
                  alt="Ground Floor Hospital Reception and Waiting Lounge"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Milestones & Core Mission */}
          <div className="lg:col-span-6 space-y-6">
            <div className="prose prose-slate text-sm sm:text-base text-slate-600 space-y-4 leading-relaxed">
              <p>
                After completing her DGO and MD (Obstetrics and Gynecology) at Osmania Medical College, Dr. Farida served at FMH for four years, before practicing as a medical consultant in Mecca, Saudi Arabia, and later at Princess Durreshawar Hospital. Returning to Hyderabad, she opened Nisa as a dedicated 5-bed maternity home in Bazarghat.
              </p>
              <p>
                Today, Nisa Hospital has grown into a specialized 35-bed maternity and surgical center. Our medical family includes senior consultants in obstetrics, gynecology, pediatrics, neonatology, general surgery, radiology, and anesthesiology.
              </p>
            </div>

            {/* Core Commitments List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {commitments.map((c) => (
                <div key={c.title} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-rose-800 font-bold text-sm">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>{c.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-normal">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-rose-50/70 border border-rose-200/80">
              <p className="italic text-xs sm:text-sm text-slate-800 font-serif leading-relaxed">
                "Our guiding motto has always remained unchanged: providing the safest, most comforting care for every mother and newborn, without commercial compromise."
              </p>
              <p className="mt-2 text-xs font-bold text-rose-900">
                — Dr. Farida S. Arastu, MD, DGO (Founder)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
