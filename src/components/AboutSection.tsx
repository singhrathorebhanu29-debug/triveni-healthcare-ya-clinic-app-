import React from 'react';
import { MapPin, CheckCircle2, Clock, Users, Shield, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Mission & Narrative */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="text-xs font-bold tracking-wider uppercase text-teal-700">
              About Triveni Healthcare
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight break-words">
              Patient-Centered Healthcare in Bahodapur, Gwalior
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Triveni Healthcare is a multi-speciality healthcare clinic providing OPD consultation and healthcare services through experienced specialists. The clinic focuses on patient care across multiple medical specialities, offering accessible medical evaluations and clinical support under one roof.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900">Direct Specialist Consultation</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Patients consult directly with qualified MD and MS specialists in Respiratory Medicine, Laparoscopic Surgery, Oncology, and Women's Health.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900">Essential Clinic Support</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Equipped with an on-premises pharmacy dispensary and day-care observation facility for patient comfort.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900">Accessible Location</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Conveniently located at Bahodapur, Anand Nagar, Gwalior with dedicated appointment booking and inquiries.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-start gap-2.5 text-xs text-slate-500">
              <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
              <span className="break-words">{CLINIC_INFO.location.fullAddress}</span>
            </div>
          </div>

          {/* Right Column: Visual Highlights Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-slate-50 border border-slate-200/80 p-5 sm:p-7 space-y-5 shadow-sm">
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
                  Clinic Identity
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {CLINIC_INFO.name}
                </h3>
                <p className="text-xs sm:text-sm italic text-teal-700 font-medium">
                  “{CLINIC_INFO.tagline}”
                </p>
              </div>

              <div className="h-px bg-slate-200" />

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3.5 sm:p-4 bg-white rounded-2xl border border-slate-100">
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Specialities</div>
                  <div className="text-lg sm:text-xl font-bold text-slate-900 mt-1">4+ Areas</div>
                  <div className="text-[10px] sm:text-[11px] text-teal-700 mt-0.5 truncate">Chest, Surgery, Oncology, Gynae</div>
                </div>

                <div className="p-3.5 sm:p-4 bg-white rounded-2xl border border-slate-100">
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Clinical Services</div>
                  <div className="text-lg sm:text-xl font-bold text-slate-900 mt-1">OPD Care</div>
                  <div className="text-[10px] sm:text-[11px] text-teal-700 mt-0.5 truncate">Consultation & Day-care</div>
                </div>

                <div className="p-3.5 sm:p-4 bg-white rounded-2xl border border-slate-100">
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Specialist Doctors</div>
                  <div className="text-lg sm:text-xl font-bold text-slate-900 mt-1">MD & MS</div>
                  <div className="text-[10px] sm:text-[11px] text-teal-700 mt-0.5 truncate">Experienced Consultants</div>
                </div>

                <div className="p-3.5 sm:p-4 bg-white rounded-2xl border border-slate-100">
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Pharmacy Support</div>
                  <div className="text-lg sm:text-xl font-bold text-slate-900 mt-1">In-house</div>
                  <div className="text-[10px] sm:text-[11px] text-teal-700 mt-0.5 truncate">Prescription Dispensing</div>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-teal-50/70 border border-teal-100 text-xs text-teal-900 leading-relaxed">
                <span className="font-semibold text-teal-950">Ethical Healthcare Commitment:</span> Consultations are focused on thorough clinical evaluation, transparent medical guidance, and clear explanations for patients and their families.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
