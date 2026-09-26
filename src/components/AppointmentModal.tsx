import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, CheckCircle2, Clock, User, AlertCircle, MessageSquare } from 'lucide-react';
import { CLINIC_INFO, DOCTORS, SPECIALITIES } from '../data/clinicData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoctor?: string;
  initialSpecialty?: string;
  initialDate?: string;
  initialSession?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialDoctor = '',
  initialSpecialty = '',
  initialDate = '',
  initialSession = 'Morning OPD',
}) => {
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [doctor, setDoctor] = useState(initialDoctor);
  const [specialty, setSpecialty] = useState(initialSpecialty);
  const [date, setDate] = useState(initialDate || new Date().toISOString().split('T')[0]);
  const [session, setSession] = useState(initialSession || 'Morning OPD');
  const [patientNotes, setPatientNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string; doctor?: string }>({});

  useEffect(() => {
    if (isOpen) {
      if (initialDoctor) setDoctor(initialDoctor);
      if (initialSpecialty) setSpecialty(initialSpecialty);
      if (initialDate) setDate(initialDate);
      if (initialSession) setSession(initialSession);
      setIsSubmitted(false);
      setErrors({});
    }
  }, [isOpen, initialDoctor, initialSpecialty, initialDate, initialSession]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { name?: string; phone?: string; doctor?: string } = {};
    if (!patientName.trim()) {
      newErrors.name = 'Please enter patient name.';
    }
    const cleanPhone = patientPhone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit mobile number.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate reference code
    const randomCode = 'TH-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomCode);
    setIsSubmitted(true);
  };

  const handleWhatsAppShare = () => {
    const message = `Hello Triveni Healthcare,\n\nHere are my appointment request details:\n• Patient Name: ${patientName}\n• Doctor / Department: ${doctor || specialty || 'Specialist OPD'}\n• Requested Date: ${date}\n• Requested Slot: ${session}\n• Patient Contact Number: ${patientPhone}\n• Appointment Reference Number: ${bookingRef}\n\nPlease confirm my OPD consultation appointment.`;
    window.open(
      `https://wa.me/918103298789?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-700 text-white flex items-center justify-center font-bold text-xs">
              TH
            </div>
            <div>
              <h3 id="booking-modal-title" className="text-base font-bold text-slate-900">
                Book OPD Consultation
              </h3>
              <p className="text-[11px] text-slate-500">Triveni Healthcare · Gwalior</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-slate-900">
                  Appointment Request Received
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-800">{patientName}</strong>. Your consultation request has been registered under reference:
                </p>
                <div className="inline-block px-4 py-1.5 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 font-mono font-bold text-lg">
                  {bookingRef}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-left text-xs space-y-2 text-slate-700">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Doctor / Department:</span>
                  <span className="font-semibold text-slate-900">{doctor || specialty || 'Specialist OPD'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Requested Date & Slot:</span>
                  <span className="font-semibold text-slate-900">{date} · {session}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Patient Contact:</span>
                  <span className="font-semibold text-slate-900">{patientPhone}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Clinic Location:</span>
                  <span className="font-semibold text-slate-900">Bahodapur, Anand Nagar, Gwalior</span>
                </div>
              </div>

              <p className="text-xs text-slate-500">
                Our clinic reception will call you at <strong className="text-slate-700">{patientPhone}</strong> to confirm your slot time and doctor availability.
              </p>

              <div className="space-y-3 pt-2">
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

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${CLINIC_INFO.phones[0].raw}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-xl transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Reception Now</span>
                  </a>

                  <button
                    onClick={onClose}
                    className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Doctor Selection */}
                <div className="space-y-1">
                  <label htmlFor="modal-doctor" className="block text-xs font-semibold text-slate-700">
                    Preferred Doctor
                  </label>
                  <select
                    id="modal-doctor"
                    value={doctor}
                    onChange={(e) => {
                      setDoctor(e.target.value);
                      const found = DOCTORS.find((d) => d.name === e.target.value);
                      if (found) setSpecialty(found.department);
                    }}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-teal-600 focus:bg-white"
                  >
                    <option value="">Any Available Specialist</option>
                    {DOCTORS.map((doc) => (
                      <option key={doc.id} value={doc.name}>
                        {doc.name} ({doc.degree})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Speciality Selection */}
                <div className="space-y-1">
                  <label htmlFor="modal-specialty" className="block text-xs font-semibold text-slate-700">
                    Medical Speciality
                  </label>
                  <select
                    id="modal-specialty"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-teal-600 focus:bg-white"
                  >
                    <option value="">Select Speciality</option>
                    {SPECIALITIES.map((spec) => (
                      <option key={spec.id} value={spec.name}>
                        {spec.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Date */}
                <div className="space-y-1">
                  <label htmlFor="modal-date" className="block text-xs font-semibold text-slate-700">
                    Preferred Date
                  </label>
                  <input
                    id="modal-date"
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-teal-600 focus:bg-white"
                    required
                  />
                </div>

                {/* Shift / OPD Slot */}
                <div className="space-y-1">
                  <label htmlFor="modal-shift" className="block text-xs font-semibold text-slate-700">
                    OPD Shift
                  </label>
                  <select
                    id="modal-shift"
                    value={session}
                    onChange={(e) => setSession(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-teal-600 focus:bg-white"
                  >
                    <option value="Morning OPD">Morning OPD Consultation</option>
                    <option value="Evening OPD">Evening OPD Consultation</option>
                  </select>
                </div>
              </div>

              {/* Patient Name */}
              <div className="space-y-1">
                <label htmlFor="modal-patient-name" className="block text-xs font-semibold text-slate-700">
                  Patient Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="modal-patient-name"
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className={`w-full bg-slate-50 border ${
                    errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                  } rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:border-teal-600 focus:bg-white`}
                />
                {errors.name && <p className="text-[11px] text-rose-500">{errors.name}</p>}
              </div>

              {/* Patient Phone */}
              <div className="space-y-1">
                <label htmlFor="modal-patient-phone" className="block text-xs font-semibold text-slate-700">
                  Mobile Number <span className="text-rose-500">*</span>
                </label>
                <input
                  id="modal-patient-phone"
                  type="tel"
                  placeholder="e.g. 8103298789"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  className={`w-full bg-slate-50 border ${
                    errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                  } rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:border-teal-600 focus:bg-white`}
                />
                {errors.phone && <p className="text-[11px] text-rose-500">{errors.phone}</p>}
              </div>

              {/* Notes / Symptoms */}
              <div className="space-y-1">
                <label htmlFor="modal-patient-notes" className="block text-xs font-semibold text-slate-700">
                  Symptoms or Health Concern (Optional)
                </label>
                <textarea
                  id="modal-patient-notes"
                  rows={2}
                  placeholder="Brief note about the health issue or symptoms..."
                  value={patientNotes}
                  onChange={(e) => setPatientNotes(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:border-teal-600 focus:bg-white resize-none"
                />
              </div>

              <div className="p-3 rounded-xl bg-teal-50/60 border border-teal-100 text-[11px] text-teal-900">
                Consultations are held at <strong>Bahodapur, Anand Nagar, Gwalior</strong>. For exact OPD timing on your chosen date, reception will reach out by phone.
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 rounded-xl shadow-xs transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Confirm Appointment Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
