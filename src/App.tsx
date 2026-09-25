import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProofBar from './components/ProofBar';
import AboutSection from './components/AboutSection';
import SpecialtiesSection from './components/SpecialtiesSection';
import ConsultantsSection from './components/ConsultantsSection';
import FacilitiesSection from './components/FacilitiesSection';
import VirtualGallery from './components/VirtualGallery';
import CalculatorsSection from './components/CalculatorsSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import { Phone, Calendar } from 'lucide-react';
import { HOSPITAL_CONTACT } from './data/hospitalData';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<string | undefined>(undefined);
  const [selectedDepartment, setSelectedDepartment] = useState<string | undefined>(undefined);

  const handleOpenBooking = (doctorName?: string, department?: string) => {
    setSelectedDoctor(doctorName);
    setSelectedDepartment(department);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setSelectedDoctor(undefined);
    setSelectedDepartment(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf7] text-slate-900 font-sans selection:bg-rose-100 selection:text-rose-900">
      {/* Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Claim-to-Proof Quantitative Metrics */}
        <ProofBar />

        {/* About Section - Heritage & Foundation */}
        <AboutSection />

        {/* Clinical Specialties & Departments */}
        <SpecialtiesSection
          onSelectServiceForBooking={(serviceTitle, leadDoc) =>
            handleOpenBooking(leadDoc?.includes('(') ? leadDoc.split('(')[0].trim() : leadDoc, serviceTitle)
          }
        />

        {/* Panel of Consultants */}
        <ConsultantsSection
          onBookWithDoctor={(doctorName, department) => handleOpenBooking(doctorName, department)}
        />

        {/* Hospital Facilities & Infrastructure */}
        <FacilitiesSection />

        {/* Virtual Photo Tour (Genuine Real Photos) */}
        <VirtualGallery />

        {/* Clinical Calculators: EDD & Pediatric Vaccine Planner */}
        <CalculatorsSection />

        {/* Patient Reviews & Reputation */}
        <ReviewsSection />

        {/* Contact, Directions, Map & Inquiries */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        preselectedDoctor={selectedDoctor}
        preselectedDepartment={selectedDepartment}
      />

      {/* Mobile Floating Quick Action (respecting <= 15% mobile sticky cap) */}
      <div className="lg:hidden fixed bottom-4 right-4 z-30 flex items-center gap-2">
        <a
          href={`tel:${HOSPITAL_CONTACT.phones[0].raw}`}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-rose-700 text-white shadow-xl hover:bg-rose-800 active:scale-95 transition-all border-2 border-white min-h-[48px]"
          aria-label="Call Hospital Emergency 040-6673 2786"
        >
          <Phone className="w-4 h-4 shrink-0" />
          <span className="text-xs font-bold">Emergency 24×7</span>
        </a>
      </div>
    </div>
  );
}
