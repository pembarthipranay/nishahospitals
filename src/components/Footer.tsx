import { MapPin, Phone, Mail, Clock, Heart, Award, ArrowUp } from 'lucide-react';
import { HOSPITAL_CONTACT } from '../data/hospitalData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Brand & Origin */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Nisa Hospital Logo"
                className="h-10 w-auto object-contain brightness-110"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="text-lg font-bold text-white font-serif tracking-tight">
                  Nisa Hospital
                </span>
                <p className="text-[11px] text-slate-500">
                  Established 1989 · Hyderabad, Telangana
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Founded by Dr. Farida S. Arastu (MD, DGO, Osmania ’72). A specialized 35-bed maternity, gynecology, and neonatal healthcare institution serving families with clinical ethics and compassionate care for over 35 years.
            </p>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-[11px] space-y-1">
              <div className="font-semibold text-rose-400">24×7 Emergency & Maternity Admission:</div>
              <div className="font-mono text-white text-xs font-bold">+91 40 6673 2786 / 6673 2787</div>
            </div>
          </div>

          {/* Col 2: Clinical Specialties */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Departments
            </h4>
            <ul className="space-y-2">
              <li><a href="#specialties" className="hover:text-white transition-colors">Obstetrics & Maternity</a></li>
              <li><a href="#specialties" className="hover:text-white transition-colors">Gynecology & Laparoscopy</a></li>
              <li><a href="#specialties" className="hover:text-white transition-colors">Pediatrics & Level II NICU</a></li>
              <li><a href="#specialties" className="hover:text-white transition-colors">4D Ultrasound & Radiology</a></li>
              <li><a href="#specialties" className="hover:text-white transition-colors">General Surgery</a></li>
              <li><a href="#specialties" className="hover:text-white transition-colors">Women's Cancer Screening</a></li>
              <li><a href="#specialties" className="hover:text-white transition-colors">24-Hour Pharmacy & Lab</a></li>
            </ul>
          </div>

          {/* Col 3: Medical Leadership */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Lead Consultants
            </h4>
            <ul className="space-y-2">
              <li><a href="#consultants" className="hover:text-white transition-colors">Dr. Farida S. Arastu (MD, DGO)</a></li>
              <li><a href="#consultants" className="hover:text-white transition-colors">Dr. Tahera K. Arastu (DGO, DNB)</a></li>
              <li><a href="#consultants" className="hover:text-white transition-colors">Dr. K. Husain Arastu (MD Pead.)</a></li>
              <li><a href="#consultants" className="hover:text-white transition-colors">Dr. Alka Prasad (DMRD)</a></li>
              <li><a href="#consultants" className="hover:text-white transition-colors">Dr. H. K. Patel (MS, FICS)</a></li>
              <li><a href="#consultants" className="hover:text-white transition-colors">Dr. Ather Parvez (MD Anesthesia)</a></li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Location & Details
            </h4>
            <div className="space-y-2 text-slate-400">
              <p className="leading-snug">
                11-5-57 & 80-83, Bazar Ghat Cross Roads, Red Hills, Lakdikapul, Hyderabad 500004
              </p>
              <p className="text-[11px] text-rose-400">
                Landmark: Beside Signal, near Nagina Hotel
              </p>
              <p>Email: info@nisahospital.in</p>
              <p>Website: www.nisahospital.in</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4">
          <div className="text-[11px] text-slate-500">
            © 1989 – {new Date().getFullYear()} Nisa Hospital. All rights reserved. 35-Bed Specialized Women’s Healthcare Center.
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <a href="#about" className="text-slate-500 hover:text-slate-300">About Us</a>
            <a href="#contact" className="text-slate-500 hover:text-slate-300">Directions & Parking</a>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
