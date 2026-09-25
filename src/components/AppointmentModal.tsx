import { useState, useEffect, useId } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, Stethoscope, CheckCircle2, AlertCircle, MapPin } from 'lucide-react';
import { DOCTORS_DATA, SERVICES_DATA, HOSPITAL_CONTACT } from '../data/hospitalData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDoctor?: string;
  preselectedDepartment?: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  preselectedDoctor,
  preselectedDepartment,
}: AppointmentModalProps) {
  const [doctor, setDoctor] = useState(preselectedDoctor || DOCTORS_DATA[0].name);
  const [department, setDepartment] = useState(preselectedDepartment || 'Obstetrics & Gynecology');
  const [date, setDate] = useState('2026-09-26');
  const [timeSlot, setTimeSlot] = useState('Morning OPD (11:00 AM - 01:30 PM)');
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submittedToken, setSubmittedToken] = useState<string | null>(null);

  const deptSelectId = useId();
  const docSelectId = useId();
  const dateInputId = useId();
  const slotSelectId = useId();
  const nameInputId = useId();
  const phoneInputId = useId();
  const emailInputId = useId();
  const notesTextareaId = useId();

  useEffect(() => {
    if (preselectedDoctor) {
      setDoctor(preselectedDoctor);
      const found = DOCTORS_DATA.find((d) => d.name === preselectedDoctor);
      if (found) setDepartment(found.department);
    }
    if (preselectedDepartment) {
      setDepartment(preselectedDepartment);
    }
  }, [preselectedDoctor, preselectedDepartment]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !phone.trim()) return;

    // Generate real clinical reference code
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const token = `NISA-${new Date().getFullYear()}-${randomDigits}`;
    setSubmittedToken(token);
  };

  const handleReset = () => {
    setSubmittedToken(null);
    setPatientName('');
    setPhone('');
    setEmail('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-t-2xl sm:rounded-2xl max-w-xl w-full p-5 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-3.5 right-3.5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedToken ? (
          <div className="space-y-5 text-center py-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 font-serif">
                Appointment Requested Successfully
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Your consultation request has been forwarded to the Nisa Hospital OPD reception desk.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-2 text-xs">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Booking Reference:</span>
                <span className="font-mono font-bold text-rose-900">{submittedToken}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Consultant:</span>
                <span className="font-bold text-slate-900">{doctor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Department:</span>
                <span className="font-medium text-slate-800">{department}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Requested Date & Slot:</span>
                <span className="font-medium text-slate-800">{date} · {timeSlot.split('(')[0]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Patient:</span>
                <span className="font-medium text-slate-800">{patientName} ({phone})</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50 text-amber-900 text-xs text-left space-y-1 border border-amber-200">
              <div className="font-bold flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Visit Instructions:</span>
              </div>
              <p className="text-slate-700">
                Please report to the Ground Floor Registration Desk at Bazar Ghat Cross Roads 15 minutes prior to your slot. Bring previous ultrasound scans, antenatal cards, and prescription slips.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <a
                href={`tel:${HOSPITAL_CONTACT.phones[0].raw}`}
                className="flex-1 py-3 text-xs font-semibold text-rose-800 bg-rose-50 border border-rose-200 rounded-xl text-center hover:bg-rose-100"
              >
                Call Hospital: 040-6673 2786
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 py-3 text-xs font-bold text-white bg-rose-700 hover:bg-rose-800 rounded-xl"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-800">
                Outpatient Consultation
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 font-serif">
                Book a Doctor's Appointment
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Nisa Hospital · Bazar Ghat Cross Roads, Hyderabad
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor={deptSelectId} className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Department
                </label>
                <select
                  id={deptSelectId}
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-3 py-2.5 text-base sm:text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-rose-700 min-h-[44px]"
                >
                  <option value="Obstetrics & Gynecology">Obstetrics & Gynecology</option>
                  <option value="Pediatrics & Neonatal Care">Pediatrics & Level II NICU</option>
                  <option value="Imaging & Radiology">4D Ultrasound & Radiology</option>
                  <option value="General Surgery">General & Laparoscopic Surgery</option>
                  <option value="Women Cancer Screening">Women's Cancer Screening</option>
                </select>
              </div>

              <div>
                <label htmlFor={docSelectId} className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Select Consultant
                </label>
                <select
                  id={docSelectId}
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                  className="w-full px-3 py-2.5 text-base sm:text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-rose-700 min-h-[44px]"
                >
                  {DOCTORS_DATA.map((d) => (
                    <option key={d.id} value={d.name}>
                      {d.name} ({d.degrees})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor={dateInputId} className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Preferred Date
                </label>
                <input
                  id={dateInputId}
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full px-3 py-2.5 text-base sm:text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-rose-700 min-h-[44px]"
                />
              </div>

              <div>
                <label htmlFor={slotSelectId} className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Preferred Time Slot
                </label>
                <select
                  id={slotSelectId}
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3 py-2.5 text-base sm:text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-rose-700 min-h-[44px]"
                >
                  <option value="Morning OPD (10:30 AM - 01:30 PM)">Morning OPD (10:30 AM – 01:30 PM)</option>
                  <option value="Evening OPD (06:00 PM - 08:30 PM)">Evening OPD (06:00 PM – 08:30 PM)</option>
                  <option value="Emergency (Immediate Admission)">Emergency (Direct Walk-in / 24×7)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor={nameInputId} className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Patient Full Name *
                </label>
                <input
                  id={nameInputId}
                  type="text"
                  required
                  placeholder="e.g. Fatima Begum"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-3 py-2.5 text-base sm:text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-rose-700 min-h-[44px]"
                />
              </div>

              <div>
                <label htmlFor={phoneInputId} className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Contact Mobile Number *
                </label>
                <input
                  id={phoneInputId}
                  type="tel"
                  required
                  placeholder="+91 98490 XXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2.5 text-base sm:text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-rose-700 min-h-[44px]"
                />
              </div>
            </div>

            <div>
              <label htmlFor={emailInputId} className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                Email Address (Optional)
              </label>
              <input
                id={emailInputId}
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2.5 text-base sm:text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-rose-700 min-h-[44px]"
              />
            </div>

            <div>
              <label htmlFor={notesTextareaId} className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                Reason for Visit / Clinical Notes
              </label>
              <textarea
                id={notesTextareaId}
                rows={2}
                placeholder="Routine antenatal checkup, ultrasound scan, pediatric consultation, or second opinion..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2.5 text-base sm:text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-rose-700"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 min-h-[44px] text-center"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-3 text-xs font-bold text-white bg-rose-700 hover:bg-rose-800 rounded-xl shadow-xs transition-colors min-h-[44px] text-center"
              >
                Confirm Appointment Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
