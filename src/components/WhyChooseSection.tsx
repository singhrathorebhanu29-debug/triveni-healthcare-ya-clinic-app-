import React from 'react';
import { Layers, UserCheck, CalendarCheck, HeartHandshake, PhoneCall } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface WhyChooseSectionProps {
  onOpenBooking?: () => void;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = () => {
  const points = [
    {
      title: 'Multiple Medical Specialities',
      description:
        'Access qualified care in Respiratory Medicine, Laparoscopic Surgery, Oncology, and Women’s Health in a single clinic location.',
      icon: Layers,
    },
    {
      title: 'Specialist Consultations',
      description:
        'Direct outpatient consultations with experienced MD, MS, and fellowship-credentialed practitioners dedicated to evidence-based practice.',
      icon: UserCheck,
    },
    {
      title: 'Convenient OPD Consultation',
      description:
        'Organized appointment scheduling designed to minimize waiting times and provide dedicated consultation slots for thorough assessment.',
      icon: CalendarCheck,
    },
    {
      title: 'Patient-Focused Healthcare',
      description:
        'A supportive, ethical environment where patients receive attentive evaluations and transparent explanations regarding their health.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="why-us" className="py-14 sm:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 space-y-2 sm:space-y-3">
          <div className="text-xs font-bold tracking-wider uppercase text-teal-700">
            Our Healthcare Principles
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight break-words">
            Why Choose Triveni Healthcare
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Committed to ethical medical practice, dedicated specialist consultations, and a patient-first outpatient experience in Gwalior.
          </p>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-5 sm:p-7 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-teal-200 hover:shadow-xs transition-all"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 text-teal-700">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="space-y-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Prompt Banner */}
        <div className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-teal-800 to-teal-900 text-white flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight">
              Consult with Experienced Specialists Today
            </h3>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
              Appointments can be scheduled online or by calling our clinic reception at {CLINIC_INFO.phones[0].display}.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${CLINIC_INFO.phones[0].raw}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-teal-950 bg-teal-100 hover:bg-white rounded-xl transition-colors text-center"
            >
              <PhoneCall className="w-4 h-4 text-teal-800" />
              <span>Call Reception</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-600 rounded-xl transition-colors text-center"
            >
              <span>View Location & Contact</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
