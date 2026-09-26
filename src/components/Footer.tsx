import React from 'react';
import { Phone, MapPin, Instagram, Heart, ArrowUp } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1521] text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1 (5 cols): Brand & Location */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white font-bold text-sm">
                TH
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {CLINIC_INFO.name}
                </h3>
                <p className="text-[11px] text-teal-400 font-medium">
                  {CLINIC_INFO.tagline}
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
              Triveni Healthcare is a multi-speciality healthcare clinic providing OPD consultation and healthcare services through experienced specialists in Gwalior.
            </p>

            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
              <span>{CLINIC_INFO.location.fullAddress}</span>
            </div>
          </div>

          {/* Col 2 (3 cols): Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Clinic Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Triveni Healthcare
                </a>
              </li>
              <li>
                <a href="#specialities" className="hover:text-white transition-colors">
                  Our Specialities
                </a>
              </li>
              <li>
                <a href="#specialists" className="hover:text-white transition-colors">
                  Meet Our Specialists
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">
                  Healthcare Facilities
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 (4 cols): Direct Contact & Social */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Direct Contact Lines
            </div>

            <div className="space-y-2">
              {CLINIC_INFO.phones.map((phone) => (
                <div key={phone.raw} className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-teal-400" />
                  <a
                    href={`tel:${phone.raw}`}
                    className="font-semibold text-white hover:text-teal-400 transition-colors"
                  >
                    {phone.display}
                  </a>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <div className="text-xs font-semibold text-slate-400 mb-2">Connect With Us</div>
              <a
                href={CLINIC_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white transition-colors border border-slate-700/60"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span className="text-xs font-medium">@triveni_healthcare</span>
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} {CLINIC_INFO.name}. Multi-Speciality Healthcare Clinic, Gwalior. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-900 text-[10px] text-slate-400 leading-relaxed text-center">
          Notice: Triveni Healthcare provides scheduled outpatient specialist consultations. For critical emergencies, please proceed immediately to the nearest tertiary emergency hospital.
        </div>
      </div>
    </footer>
  );
};
