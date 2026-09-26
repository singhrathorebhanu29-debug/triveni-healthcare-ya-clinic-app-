import React from 'react';
import { Phone, Calendar, ArrowRight, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO, DOCTORS } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden w-full max-w-full pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 bg-gradient-to-b from-[#F0FDF9]/80 via-white to-[#F8FAF9]">
      {/* Decorative architectural background subtle radial lights */}
      <div className="absolute top-0 right-1/4 w-80 h-80 sm:w-96 sm:h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-60 h-60 sm:w-72 sm:h-72 bg-orange-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Grid: Headline, Lead & Visual Carrier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center mb-8 sm:mb-12">
          {/* Left Column (7 cols): Hero Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            {/* Location & Trust kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-200/60 px-3 py-1.5 rounded-full max-w-full">
              <MapPin className="w-3.5 h-3.5 text-teal-700 shrink-0" />
              <span className="truncate">Bahodapur, Anand Nagar, Gwalior</span>
            </div>

            {/* Tagline & Main Headline */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] break-words">
                Compassionate Care.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-800 to-emerald-900">
                  Modern Medicine.
                </span>
              </h1>
              <p className="text-sm sm:text-lg font-medium text-slate-700">
                Multi-Speciality Healthcare Clinic in Gwalior
              </p>
            </div>

            {/* Short professional introduction */}
            <p className="text-xs sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Triveni Healthcare provides outpatient consultations through experienced specialists in Chest & Respiratory Medicine, General & Laparoscopic Surgery, Cancer Care, and Women’s Health.
            </p>

            {/* Key Clinic Signals */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 pt-1 pb-1">
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-700 shrink-0" />
                <span>Experienced Specialists</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-700 shrink-0" />
                <span>OPD Consultation</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-medium text-slate-700 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-700 shrink-0" />
                <span>Pharmacy & Day-care</span>
              </div>
            </div>

            {/* Primary Action Buttons - 1 Main Book Appointment + Call Now */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 text-center"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Book Appointment</span>
              </a>

              <a
                href={`tel:${CLINIC_INFO.phones[0].raw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-slate-800 bg-white hover:bg-orange-50/80 active:bg-orange-100 border border-slate-200 hover:border-orange-300 rounded-xl shadow-xs transition-all text-center"
              >
                <Phone className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Call Now ({CLINIC_INFO.phones[0].display})</span>
              </a>
            </div>

            {/* Alternate phone line note */}
            <p className="text-[11px] sm:text-xs text-slate-500 pt-1">
              Helpline numbers:{' '}
              <a href={`tel:${CLINIC_INFO.phones[0].raw}`} className="font-semibold text-slate-700 hover:text-teal-700 underline decoration-slate-300">
                {CLINIC_INFO.phones[0].display}
              </a>
              {' '}/ {' '}
              <a href={`tel:${CLINIC_INFO.phones[1].raw}`} className="font-semibold text-slate-700 hover:text-teal-700 underline decoration-slate-300">
                {CLINIC_INFO.phones[1].display}
              </a>
            </p>
          </div>

          {/* Right Column (5 cols): Dignified Visual Clinic Composition */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl bg-gradient-to-b from-white to-slate-50 border border-slate-200/90 shadow-xl overflow-hidden p-4 sm:p-7">
              {/* Top Accent Ribbon */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-600 via-teal-700 to-orange-500" />

              {/* Clinic Badge */}
              <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-slate-100">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 6v12m-6-6h12" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-bold text-slate-900 text-sm sm:text-base truncate">TRIVENI HEALTHCARE</h2>
                    <p className="text-xs text-slate-500 truncate">Bahodapur, Anand Nagar, Gwalior</p>
                  </div>
                </div>
                <div className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-emerald-50 text-emerald-800 text-[10px] sm:text-[11px] font-semibold rounded-md border border-emerald-200/80 shrink-0">
                  Open Today
                </div>
              </div>

              {/* Consultation Departments Highlights */}
              <div className="py-4 sm:py-5 space-y-3">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Specialist OPD Consultants
                </div>
                <div className="space-y-2">
                  {DOCTORS.map((doc) => {
                    const initials = doc.name.replace('Dr. ', '').split(' ').map((n) => n[0]).join('');
                    return (
                      <div key={doc.id} className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-slate-50/80 border border-slate-100">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-7 h-7 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center text-xs font-bold shrink-0">
                            {initials}
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs sm:text-sm font-semibold text-slate-800 truncate">{doc.name}</div>
                            <div className="text-[11px] text-slate-500 truncate">{doc.specialty} · {doc.degree}</div>
                          </div>
                        </div>
                        <span className="text-[11px] font-medium text-teal-700 shrink-0 ml-2">OPD</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Quick Help Card */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1.5 font-medium truncate">
                  <Clock className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                  <span>OPD Consultation</span>
                </span>
                <a
                  href="#contact"
                  className="font-semibold text-teal-700 hover:text-teal-800 inline-flex items-center gap-1 shrink-0"
                >
                  <span>View Location</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
