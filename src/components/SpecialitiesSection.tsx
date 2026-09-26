import React, { useState } from 'react';
import { Wind, Activity, ShieldCheck, HeartHandshake, Baby, ArrowRight, Search, Check } from 'lucide-react';
import { SPECIALITIES } from '../data/clinicData';

interface SpecialitiesSectionProps {
  onSelectSpeciality?: (specialityName: string) => void;
}

export const SpecialitiesSection: React.FC<SpecialitiesSectionProps> = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wind':
        return <Wind className="w-6 h-6 text-teal-700" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-orange-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-teal-700" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-rose-600" />;
      case 'Baby':
        return <Baby className="w-6 h-6 text-teal-700" />;
      default:
        return <Activity className="w-6 h-6 text-teal-700" />;
    }
  };

  const filteredSpecialities = SPECIALITIES.filter((item) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const nameMatch = item.name.toLowerCase().includes(query);
    const descMatch = item.description.toLowerCase().includes(query);
    const conditionMatch = item.conditions.some((c) => c.toLowerCase().includes(query));
    return nameMatch || descMatch || conditionMatch;
  });

  return (
    <section id="specialities" className="py-14 sm:py-20 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Quick Condition Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="space-y-2 sm:space-y-3 max-w-2xl">
            <div className="text-xs font-bold tracking-wider uppercase text-teal-700">
              Clinical Specialities
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight break-words">
              Specialized Care Across Medical Disciplines
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Outpatient consultations provided by experienced doctors across designated medical fields at Triveni Healthcare, Gwalior.
            </p>
          </div>

          {/* Quick search input */}
          <div className="w-full md:w-80">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search symptom or condition..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredSpecialities.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-md hover:border-teal-200 transition-all duration-200"
            >
              <div>
                {/* Header of Card */}
                <div className="flex items-center justify-between gap-4 mb-4 sm:mb-5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-teal-50 border border-teal-100/80 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    OPD Speciality
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-800 transition-colors">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 mb-4 sm:mb-5 leading-relaxed">
                  {item.description}
                </p>

                {/* Conditions / Focus Area */}
                <div className="mb-4 sm:mb-6">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 sm:mb-2.5">
                    {item.isPediatric ? 'Pediatric Scope' : 'Key Clinical Areas'}
                  </div>
                  <div className="space-y-1.5">
                    {item.conditions.map((cond, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />
                        <span className={searchQuery && cond.toLowerCase().includes(searchQuery.toLowerCase()) ? 'font-bold text-teal-800 bg-teal-50 px-1 rounded' : ''}>
                          {cond}
                        </span>
                      </div>
                    ))}
                  </div>

                  {item.isPediatric && (
                    <div className="mt-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-500">
                      Contact clinic directly for OPD schedule & pediatric consultation details.
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer / Lead Doctor (Informative only - no duplicate button) */}
              <div className="pt-4 border-t border-slate-100 mt-auto">
                {item.leadDoctor ? (
                  <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-slate-400 font-medium">Consultant: </span>
                    <span className="font-semibold text-slate-900">{item.leadDoctor}</span>
                  </div>
                ) : (
                  <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    OPD Consultation available at Bahodapur clinic
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredSpecialities.length === 0 && (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
            <p className="text-sm font-medium text-slate-600 mb-3">
              No specific specialty matched &ldquo;{searchQuery}&rdquo;.
            </p>
            <p className="text-xs text-slate-500 mb-4">
              Please contact our reception desk to confirm consultation availability for your symptoms.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-4 py-2 text-xs font-semibold text-teal-700 bg-teal-50 rounded-lg hover:bg-teal-100"
            >
              Reset Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
