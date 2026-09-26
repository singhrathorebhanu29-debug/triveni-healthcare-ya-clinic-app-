import React from 'react';
import { Stethoscope, Pill, BedDouble, Award, Check } from 'lucide-react';
import { FACILITIES } from '../data/clinicData';

export const FacilitiesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-teal-700" />;
      case 'Pill':
        return <Pill className="w-6 h-6 text-orange-600" />;
      case 'BedDouble':
        return <BedDouble className="w-6 h-6 text-teal-700" />;
      case 'Award':
        return <Award className="w-6 h-6 text-emerald-700" />;
      default:
        return <Stethoscope className="w-6 h-6 text-teal-700" />;
    }
  };

  return (
    <section id="facilities" className="py-14 sm:py-20 bg-[#F8FAF9] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 space-y-2 sm:space-y-3">
          <div className="text-xs font-bold tracking-wider uppercase text-teal-700">
            Comprehensive Infrastructure
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight break-words">
            Healthcare Facilities
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Built to provide a comfortable, clean, and organized clinical environment for outpatients and their families in Gwalior.
          </p>
        </div>

        {/* 4 Core Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-teal-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-4 sm:mb-6">
                  {getIcon(facility.iconName)}
                </div>

                <div className="text-xs font-semibold text-teal-800 uppercase tracking-wide mb-1">
                  {facility.highlight}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
                  {facility.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>

              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-teal-800">
                <Check className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                <span>Available at Bahodapur Clinic</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
