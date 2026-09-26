import React from 'react';
import { ChevronRight, Award, Stethoscope, UserRound } from 'lucide-react';
import { DOCTORS, Doctor } from '../data/clinicData';

interface DoctorsSectionProps {
  onSelectDoctor: (doctor: Doctor) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onSelectDoctor }) => {
  return (
    <section id="specialists" className="py-14 sm:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 space-y-2 sm:space-y-3">
          <div className="text-xs font-bold tracking-wider uppercase text-teal-700">
            Medical Faculty & Consultants
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight break-words">
            Meet Our Specialists
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Experienced medical practitioners holding MD, MS, and surgical fellowship qualifications providing dedicated outpatient care at Triveni Healthcare, Gwalior.
          </p>
        </div>

        {/* Doctor Cards Grid - 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {DOCTORS.map((doctor) => {
            const initials = doctor.name
              .replace('Dr. ', '')
              .split(' ')
              .map((n) => n[0])
              .join('');

            return (
              <div
                key={doctor.id}
                className="group bg-slate-50/70 rounded-3xl border border-slate-200/90 overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-md hover:border-teal-200 hover:bg-white transition-all duration-200"
              >
                {/* Doctor Visual Header Card (Clean Neutral Placeholder) */}
                <div className="p-5 sm:p-6 pb-4">
                  {/* Clean Neutral Placeholder Area - No fake human photos */}
                  <div className="mb-4">
                    <div className="w-full h-32 rounded-2xl bg-gradient-to-br from-slate-100 via-teal-50/40 to-slate-100 border border-slate-200/80 flex flex-col items-center justify-center text-center p-3 relative overflow-hidden">
                      <div className="w-12 h-12 rounded-xl bg-teal-700 text-white flex items-center justify-center font-bold text-base shadow-xs mb-1.5">
                        {initials}
                      </div>
                      <div className="text-[11px] font-semibold text-slate-700">
                        {doctor.name}
                      </div>
                      <div className="text-[10px] text-teal-700 font-medium">
                        {doctor.degree}
                      </div>
                      <span className="absolute top-2 right-2 text-[9px] font-semibold text-slate-500 bg-white/95 px-1.5 py-0.5 rounded border border-slate-200/60 shadow-2xs">
                        Specialist
                      </span>
                    </div>
                  </div>

                  {/* Doctor Info: Name, Degree & Specialization */}
                  <div className="space-y-2 mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-teal-800 transition-colors leading-snug">
                      {doctor.name}
                    </h3>

                    {/* Qualification */}
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-100/90 px-2.5 py-1 rounded-lg">
                      <Award className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                      <span>{doctor.degree}</span>
                    </div>

                    {/* Specialization (English & Hindi) */}
                    <div className="pt-1.5 space-y-1">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Specialization
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {doctor.specialty}
                      </p>
                      <p className="text-xs font-medium text-teal-700">
                        {doctor.hindiTitle}
                      </p>
                    </div>
                  </div>

                  {/* Discipline / Department Badge */}
                  <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span className="truncate">{doctor.department}</span>
                    <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded shrink-0">
                      OPD
                    </span>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-4 pt-3 bg-white border-t border-slate-100 mt-auto">
                  <button
                    type="button"
                    onClick={() => onSelectDoctor(doctor)}
                    className="w-full inline-flex items-center justify-between px-3 py-2.5 text-xs font-semibold text-slate-700 hover:text-teal-800 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
                  >
                    <span>View Specialist Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
