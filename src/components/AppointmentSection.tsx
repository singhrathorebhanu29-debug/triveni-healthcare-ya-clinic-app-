import React, { useState } from 'react';
import { MapPin, Phone, Calendar, Clock, Navigation, CheckCircle2, Copy, Check, MessageSquare } from 'lucide-react';
import { CLINIC_INFO, DOCTORS, SPECIALITIES } from '../data/clinicData';

interface AppointmentSectionProps {
  onOpenBooking: (doctorName?: string, department?: string) => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ onOpenBooking }) => {
  const [copied, setCopied] = useState(false);
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [session, setSession] = useState('Morning OPD');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLINIC_INFO.location.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !patientPhone.trim()) return;

    const ref = 'TH-' + Math.floor(100000 + Math.random() * 900000);
    setBookingCode(ref);
    setIsSuccess(true);
  };

  const handleWhatsAppShare = () => {
    const message = `Hello Triveni Healthcare,\n\nHere are my appointment request details:\n• Patient Name: ${patientName}\n• Doctor / Department: ${doctor || 'General Specialist OPD'}\n• Requested Date: ${date}\n• Requested Slot: ${session}\n• Patient Contact Number: ${patientPhone}\n• Appointment Reference Number: ${bookingCode}\n\nPlease confirm my OPD consultation appointment.`;
    window.open(
      `https://wa.me/918103298789?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-[#F8FAF9] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 space-y-2 sm:space-y-3">
          <div className="text-xs font-bold tracking-wider uppercase text-teal-700">
            Consultation & Location
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight break-words">
            Contact & Appointment Booking
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Schedule an OPD consultation with our specialist doctors or connect with the reception desk for clinic inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column (5 cols): Official Clinic Contact & Location Cards */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-2xs space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Clinic Location
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {CLINIC_INFO.name}
                </h3>
                <p className="text-xs text-slate-500">
                  {CLINIC_INFO.businessType}
                </p>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-1 flex-1 min-w-0">
                  <div className="text-xs font-bold text-slate-900">Clinic Address</div>
                  <p className="text-xs text-slate-700 leading-relaxed break-words font-medium">
                    {CLINIC_INFO.location.fullAddress}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <button
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-md transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copied ? 'Copied' : 'Copy Address'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Responsive Google Maps Embed */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Clinic Map Location
                </div>
                <div className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-slate-200 shadow-2xs bg-slate-100">
                  <iframe
                    title="Triveni Healthcare Location Map"
                    src={CLINIC_INFO.location.embedMapUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Prominent Clear Get Directions Button */}
                <a
                  href={CLINIC_INFO.location.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 rounded-xl transition-all shadow-xs text-center"
                >
                  <Navigation className="w-4 h-4 text-teal-200 shrink-0" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Phone Numbers with Tap-to-Call Buttons */}
              <div className="space-y-2.5 pt-1">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Phone / Appointment Lines
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {CLINIC_INFO.phones.map((phone) => (
                    <a
                      key={phone.raw}
                      href={`tel:${phone.raw}`}
                      className="flex items-center gap-2.5 p-3 rounded-2xl bg-teal-50/70 border border-teal-100 hover:bg-teal-100/70 hover:border-teal-200 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-xl bg-teal-700 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] text-teal-800 font-medium">Direct Line</div>
                        <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-teal-900 truncate">
                          {phone.display}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Timings & OPD Notice */}
            <div className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/80 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Clock className="w-4 h-4 text-teal-700 shrink-0" />
                <span>OPD Consultation Schedule</span>
              </div>
              <p className="leading-relaxed">
                Consultations are conducted daily during designated Morning and Evening OPD sessions at Bahodapur, Anand Nagar, Gwalior. Telephone verification or scheduled appointment is recommended.
              </p>
            </div>
          </div>

          {/* Right Column (7 cols): Interactive OPD Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-200/90 shadow-sm">
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-100">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    Online OPD Booking & Enquiry
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Submit your details and our reception desk will contact you to confirm.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>

              {isSuccess ? (
                <div className="py-8 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-2xl font-bold text-slate-900">
                      Consultation Request Confirmed
                    </h4>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto">
                      Your appointment slot request has been logged. Booking code:
                    </p>
                    <div className="inline-block px-4 py-1.5 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 font-mono font-bold text-lg mt-2">
                      {bookingCode}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-left text-xs space-y-2 max-w-md mx-auto text-slate-700">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Patient:</span>
                      <span className="font-semibold text-slate-900">{patientName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Doctor / Focus:</span>
                      <span className="font-semibold text-slate-900">{doctor || 'General Specialist OPD'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Scheduled Date:</span>
                      <span className="font-semibold text-slate-900">{date} ({session})</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2 max-w-md mx-auto">
                    <button
                      type="button"
                      onClick={handleWhatsAppShare}
                      className="w-full inline-flex items-center justify-center gap-2 px-3 sm:px-5 py-3 text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] rounded-xl shadow-md transition-all hover:shadow-lg cursor-pointer text-center"
                    >
                      <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.889-9.885 9.889m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      <span>Send Appointment Details on WhatsApp</span>
                    </button>

                    <div className="flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-3">
                      <a
                        href={`tel:${CLINIC_INFO.phones[0].raw}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-xl text-center"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call Reception ({CLINIC_INFO.phones[0].display})</span>
                      </a>

                      <button
                        onClick={() => setIsSuccess(false)}
                        className="px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl text-center"
                      >
                        Book Another Appointment
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Doctor Selector */}
                    <div className="space-y-1.5">
                      <label htmlFor="apt-doctor" className="block text-xs font-semibold text-slate-700">
                        Choose Specialist Doctor
                      </label>
                      <select
                        id="apt-doctor"
                        value={doctor}
                        onChange={(e) => setDoctor(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-teal-600 focus:bg-white transition-all"
                      >
                        <option value="">Any Specialist Doctor</option>
                        {DOCTORS.map((doc) => (
                          <option key={doc.id} value={doc.name}>
                            {doc.name} – {doc.specialty}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Date */}
                    <div className="space-y-1.5">
                      <label htmlFor="apt-date" className="block text-xs font-semibold text-slate-700">
                        Appointment Date
                      </label>
                      <input
                        id="apt-date"
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-teal-600 focus:bg-white transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Shift */}
                    <div className="space-y-1.5">
                      <label htmlFor="apt-shift" className="block text-xs font-semibold text-slate-700">
                        Preferred OPD Shift
                      </label>
                      <select
                        id="apt-shift"
                        value={session}
                        onChange={(e) => setSession(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-teal-600 focus:bg-white transition-all"
                      >
                        <option value="Morning OPD">Morning OPD Consultation</option>
                        <option value="Evening OPD">Evening OPD Consultation</option>
                      </select>
                    </div>

                    {/* Contact Phone */}
                    <div className="space-y-1.5">
                      <label htmlFor="apt-phone" className="block text-xs font-semibold text-slate-700">
                        Patient Mobile Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="apt-phone"
                        type="tel"
                        placeholder="e.g. 8103298789"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-teal-600 focus:bg-white transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Patient Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="apt-name" className="block text-xs font-semibold text-slate-700">
                      Patient Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="apt-name"
                      type="text"
                      placeholder="e.g. Ramesh Chandra"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-teal-600 focus:bg-white transition-all"
                      required
                    />
                  </div>

                  {/* Health Concern */}
                  <div className="space-y-1.5">
                    <label htmlFor="apt-notes" className="block text-xs font-semibold text-slate-700">
                      Health Concern / Reason for Visit (Optional)
                    </label>
                    <textarea
                      id="apt-notes"
                      rows={3}
                      placeholder="e.g. Consultation for persistent cough, gallbladder scan review, etc."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-teal-600 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-xs sm:text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 rounded-xl shadow-xs transition-colors"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Submit Appointment Request</span>
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
};
