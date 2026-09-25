import { useState, useId } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Send, CheckCircle2, ShieldAlert } from 'lucide-react';
import { HOSPITAL_CONTACT } from '../data/hospitalData';

export default function ContactSection() {
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Maternity Consultation',
    message: '',
  });

  const nameInputId = useId();
  const phoneInputId = useId();
  const emailInputId = useId();
  const subjectSelectId = useId();
  const messageTextareaId = useId();

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setInquirySent(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#fafaf7] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold text-rose-800 tracking-wider uppercase mb-2">
            Find & Contact Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif" style={{ textWrap: 'balance' }}>
            Convenient Location in Red Hills, Bazarghat, Hyderabad
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Centrally situated at Bazar Ghat Cross Roads near Lakdikapul, connecting Nampally, Seetharambagh, and Mehdipatnam. 24×7 emergency admissions open round-the-clock.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards & Emergency Info */}
          <div className="lg:col-span-5 space-y-4">
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-rose-50 text-rose-700 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                    Hospital Address
                  </h3>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    {HOSPITAL_CONTACT.address.line1}
                  </p>
                  <p className="text-xs text-slate-600">
                    {HOSPITAL_CONTACT.address.line2}
                  </p>
                  <p className="text-xs text-rose-900 font-semibold mt-1">
                    Landmark: {HOSPITAL_CONTACT.address.landmark}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {HOSPITAL_CONTACT.address.city}, {HOSPITAL_CONTACT.address.state} - {HOSPITAL_CONTACT.address.pin}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="https://maps.google.com/?q=Nisa+Hospital+Bazar+Ghat+Cross+Roads+Hyderabad"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-800 hover:text-rose-900"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct Phone Numbers */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-rose-50 text-rose-700 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                    Direct Phone Lines
                  </h3>
                  <p className="text-xs text-slate-500">
                    Emergency, Reception & Inpatient Services
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                {HOSPITAL_CONTACT.phones.map((p) => (
                  <a
                    key={p.number}
                    href={`tel:${p.raw}`}
                    className="p-2.5 rounded-lg bg-slate-50 hover:bg-rose-50 border border-slate-200/80 hover:border-rose-200 transition-colors flex flex-col"
                  >
                    <span className="text-[11px] text-slate-500 truncate">{p.label}</span>
                    <span className="font-bold text-slate-900 mt-0.5">{p.number}</span>
                  </a>
                ))}
              </div>

              <div className="p-3 rounded-lg bg-rose-50 text-xs text-rose-900 flex items-center justify-between">
                <span className="font-semibold">24×7 Ambulance Hotline:</span>
                <a href="tel:+914066732786" className="font-bold underline">
                  040-6673 2786
                </a>
              </div>
            </div>

            {/* Email & Timings */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3 text-xs">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-rose-50 text-rose-700 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                    Operating Hours
                  </h3>
                  <p className="font-bold text-slate-900 mt-0.5">
                    {HOSPITAL_CONTACT.workingHours}
                  </p>
                </div>
              </div>
              <p className="text-slate-600">
                <strong>General OPD Hours:</strong> {HOSPITAL_CONTACT.opdHours}
              </p>
              <div className="flex items-center gap-2 pt-2 border-t border-slate-100 text-slate-700">
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Official Email: <strong className="text-slate-900">info@nisahospital.in</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps & Interactive Inquiry Form */}
          <div className="lg:col-span-7 space-y-6">
            {/* Interactive Map Embed */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
              <div className="p-3 bg-slate-900 text-white flex items-center justify-between text-xs px-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-400" />
                  <span className="font-bold">Bazar Ghat Cross Roads, Red Hills, Hyderabad</span>
                </div>
                <span className="text-slate-400 text-[11px]">Pin: 500004</span>
              </div>
              <div className="relative aspect-[16/9] w-full bg-slate-100">
                <iframe
                  title="Nisa Hospital Hyderabad Location Map"
                  src="https://maps.google.com/maps?q=11-5-57+Bazar+Ghat+Cross+Roads+Hyderabad+500004&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Quick Online Inquiry Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <div className="border-b border-slate-100 pb-4 mb-5">
                <h3 className="text-lg font-bold text-slate-900 font-serif">
                  Send a Direct Query or Admission Inquiry
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Our front-desk team replies promptly to maternal admission and service inquiries.
                </p>
              </div>

              {inquirySent ? (
                <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-slate-900">
                    Query Submitted Successfully
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you, {formData.name}. Our patient coordinator will contact you at {formData.phone} shortly. For immediate medical emergencies, please call 040-6673 2786.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setInquirySent(false);
                      setFormData({ name: '', phone: '', email: '', subject: 'Maternity Consultation', message: '' });
                    }}
                    className="px-4 py-2 text-xs font-semibold text-emerald-800 bg-white border border-emerald-300 rounded-lg hover:bg-emerald-50"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor={nameInputId} className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        id={nameInputId}
                        type="text"
                        required
                        placeholder="e.g. Mohammed Farooq"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2.5 text-base sm:text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-rose-700 min-h-[44px]"
                      />
                    </div>
                    <div>
                      <label htmlFor={phoneInputId} className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Contact Phone Number *
                      </label>
                      <input
                        id={phoneInputId}
                        type="tel"
                        required
                        placeholder="+91 98XXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2.5 text-base sm:text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-rose-700 min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor={emailInputId} className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        id={emailInputId}
                        type="email"
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2.5 text-base sm:text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-rose-700 min-h-[44px]"
                      />
                    </div>
                    <div>
                      <label htmlFor={subjectSelectId} className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Inquiry Category
                      </label>
                      <select
                        id={subjectSelectId}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3 py-2.5 text-base sm:text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-rose-700 min-h-[44px]"
                      >
                        <option value="Maternity Consultation">Maternity & Delivery Packages</option>
                        <option value="Gynecology Surgery">Gynecological Surgery & Laparoscopy</option>
                        <option value="Pediatrics & NICU">Pediatrics & Level II NICU</option>
                        <option value="Ultrasound Scan">4D Ultrasound & Anomaly Scan</option>
                        <option value="General Query">General Hospital Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor={messageTextareaId} className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Query Details
                    </label>
                    <textarea
                      id={messageTextareaId}
                      rows={3}
                      placeholder="Describe your inquiry, anticipated delivery date, or symptoms..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2.5 text-base sm:text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-rose-700"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                    <span className="text-[11px] text-slate-500">
                      Emergency? Please call 040-6673 2786 directly.
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-1.5 px-6 py-3 text-xs font-bold text-white bg-rose-700 hover:bg-rose-800 rounded-xl shadow-xs transition-colors min-h-[44px]"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
