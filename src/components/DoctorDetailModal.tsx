import React from 'react';
import { X, Calendar, Phone, Award, CheckCircle2, Stethoscope, Clock } from 'lucide-react';
import { Doctor, CLINIC_INFO } from '../data/clinicData';

interface DoctorDetailModalProps {
  doctor: Doctor | null;
  onClose: () => void;
  onBookAppointment: (doctorName: string, department: string) => void;
}

export const DoctorDetailModal: React.FC<DoctorDetailModalProps> = ({
  doctor,
  onClose,
  onBookAppointment,
}) => {
  if (!doctor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="doctor-modal-title"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-800">
            <Stethoscope className="w-4 h-4 text-teal-700" />
            <span>Consultant Specialist Profile</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Doctor Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-slate-100">
            {/* Clean Neutral Medical Placeholder Badge */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 text-white flex flex-col items-center justify-center shadow-md shrink-0">
              <span className="text-xl font-bold tracking-tight">
                {doctor.name.replace('Dr. ', '').split(' ').map((n) => n[0]).join('')}
              </span>
              <span className="text-[9px] text-teal-200 font-medium uppercase mt-0.5">
                Specialist
              </span>
            </div>

            <div className="space-y-1 min-w-0">
              <h3 id="doctor-modal-title" className="text-xl sm:text-2xl font-bold text-slate-900">
                {doctor.name}
              </h3>
              <div className="text-sm font-semibold text-teal-800">
                {doctor.specialty}
              </div>
              <div className="text-xs font-medium text-teal-600">
                {doctor.hindiTitle}
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 pt-0.5">
                <Award className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                <span>Qualification: <strong className="text-slate-800">{doctor.degree}</strong></span>
              </div>
            </div>
          </div>

          {/* Department & Clinic Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Department & Clinical Consultation
            </h4>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">Medical Discipline:</span>
                <span className="font-semibold text-slate-800">{doctor.department}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">Clinic:</span>
                <span className="font-semibold text-slate-800">{CLINIC_INFO.name}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Location:</span>
                <span className="font-semibold text-slate-800">Bahodapur, Anand Nagar, Gwalior</span>
              </div>
            </div>
          </div>

          {/* Consultation Note */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 space-y-1">
            <div className="font-semibold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-700" />
              <span>OPD Consultation Schedule</span>
            </div>
            <p className="text-[11px] text-amber-800 leading-relaxed">
              To verify today&apos;s OPD consultation availability for {doctor.name}, please contact the clinic reception at{' '}
              <a href={`tel:${CLINIC_INFO.phones[0].raw}`} className="underline font-bold">
                {CLINIC_INFO.phones[0].display}
              </a>{' '}
              or submit an appointment request.
            </p>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="px-5 sm:px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
          <a
            href={`tel:${CLINIC_INFO.phones[0].raw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors text-center"
          >
            <Phone className="w-3.5 h-3.5 text-teal-700 shrink-0" />
            <span>Call Clinic ({CLINIC_INFO.phones[0].display})</span>
          </a>

          <a
            href="#contact"
            onClick={() => {
              onClose();
              onBookAppointment(doctor.name, doctor.department);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-xl shadow-xs transition-colors text-center"
          >
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            <span>Consultation Booking</span>
          </a>
        </div>
      </div>
    </div>
  );
};
