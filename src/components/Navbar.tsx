import { useState } from 'react';
import { Phone, Calendar, Menu, X, Clock, MapPin, ShieldCheck } from 'lucide-react';
import { HOSPITAL_CONTACT } from '../data/hospitalData';

interface NavbarProps {
  onOpenBooking: (doctorName?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Specialties', href: '#specialties' },
    { label: 'Consultants', href: '#consultants' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Tools', href: '#calculators' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top 24/7 Critical Emergency Strip */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-4 truncate">
            <span className="flex items-center gap-1.5 text-rose-400 font-medium shrink-0">
              <span className="inline-block w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>24×7 Emergency</span>
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:flex items-center gap-1 text-slate-300 truncate">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">Bazar Ghat Cross Roads, Red Hills, Hyderabad</span>
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300 shrink-0">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Est. 1989 · 35 Beds
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-xs shrink-0">
            <a
              href={`tel:${HOSPITAL_CONTACT.phones[0].raw}`}
              className="flex items-center gap-1 text-rose-300 hover:text-white font-semibold transition-colors py-0.5 px-1.5 rounded bg-rose-950/60 sm:bg-transparent"
            >
              <Phone className="w-3 h-3 text-rose-400" />
              <span>040-6673 2786</span>
            </a>
            <span className="hidden sm:inline text-slate-600">/</span>
            <a
              href={`tel:${HOSPITAL_CONTACT.phones[2].raw}`}
              className="hidden md:flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <span>040-2330 8786</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar - Follows strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Zone 1: Single element wordmark brand lockup */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0">
            <img
              src="/images/logo.png"
              alt="Nisa Hospital Logo"
              className="h-9 sm:h-12 w-auto object-contain shrink-0"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback styling if image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="min-w-0">
              <span className="text-lg sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-rose-900 transition-colors font-serif block truncate">
                Nisa Hospital
              </span>
              <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 tracking-wider uppercase truncate">
                Women's Healthcare & Maternity · Est. 1989
              </p>
            </div>
          </a>

          {/* Zone 2: Clean 4-6 text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-rose-800 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-rose-700 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={`tel:${HOSPITAL_CONTACT.phones[0].raw}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-rose-800 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-lg transition-colors whitespace-nowrap min-h-[40px]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Emergency 24×7</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 text-xs font-semibold text-white bg-rose-700 hover:bg-rose-800 active:bg-rose-900 rounded-lg shadow-sm transition-all whitespace-nowrap min-h-[40px]"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 lg:hidden text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-rose-800 hover:bg-rose-50 rounded-lg transition-colors min-h-[44px] flex items-center"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-1 space-y-2">
              <a
                href={`tel:${HOSPITAL_CONTACT.phones[0].raw}`}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-rose-800 bg-rose-50 border border-rose-200 rounded-xl min-h-[44px]"
              >
                <Phone className="w-4 h-4" />
                <span>Call Emergency: 040-6673 2786</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-sm font-semibold text-white bg-rose-700 hover:bg-rose-800 rounded-xl text-center min-h-[44px]"
              >
                Book Consultation Online
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
