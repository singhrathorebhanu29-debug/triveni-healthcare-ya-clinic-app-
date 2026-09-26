import React, { useState } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenBooking: (doctorName?: string, department?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow duration-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="flex items-center gap-2 sm:gap-2.5 text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-lg group min-w-0"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-teal-700 to-teal-800 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform duration-200 shrink-0">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 4v16m-8-8h16" />
            </svg>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-extrabold text-sm sm:text-lg tracking-tight text-slate-900 group-hover:text-teal-800 transition-colors truncate">
              {CLINIC_INFO.name}
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium text-teal-700 tracking-wide uppercase hidden sm:block truncate">
              Multi-Speciality Clinic · Gwalior
            </span>
          </div>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
          <a
            href="#about"
            className="hover:text-teal-800 transition-colors py-1 hover:border-b-2 hover:border-teal-700"
          >
            About
          </a>
          <a
            href="#specialities"
            className="hover:text-teal-800 transition-colors py-1 hover:border-b-2 hover:border-teal-700"
          >
            Specialities
          </a>
          <a
            href="#specialists"
            className="hover:text-teal-800 transition-colors py-1 hover:border-b-2 hover:border-teal-700"
          >
            Specialists
          </a>
          <a
            href="#facilities"
            className="hover:text-teal-800 transition-colors py-1 hover:border-b-2 hover:border-teal-700"
          >
            Facilities
          </a>
          <a
            href="#why-us"
            className="hover:text-teal-800 transition-colors py-1 hover:border-b-2 hover:border-teal-700"
          >
            Why Choose Us
          </a>
          <a
            href="#contact"
            className="hover:text-teal-800 transition-colors py-1 hover:border-b-2 hover:border-teal-700"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Direct Phone Action & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={`tel:${CLINIC_INFO.phones[0].raw}`}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 rounded-lg shadow-xs transition-colors whitespace-nowrap"
            title="Call Triveni Healthcare"
          >
            <Phone className="w-3.5 h-3.5 text-white" />
            <span className="hidden sm:inline">{CLINIC_INFO.phones[0].display}</span>
            <span className="sm:hidden text-xs">Call Clinic</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none shrink-0"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-sm font-semibold text-slate-700">
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-teal-50 hover:text-teal-800 transition-colors"
            >
              About Clinic
            </a>
            <a
              href="#specialities"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-teal-50 hover:text-teal-800 transition-colors"
            >
              Our Specialities
            </a>
            <a
              href="#specialists"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-teal-50 hover:text-teal-800 transition-colors"
            >
              Meet Our Specialists
            </a>
            <a
              href="#facilities"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-teal-50 hover:text-teal-800 transition-colors"
            >
              Healthcare Facilities
            </a>
            <a
              href="#why-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-teal-50 hover:text-teal-800 transition-colors"
            >
              Why Choose Us
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-teal-50 hover:text-teal-800 transition-colors"
            >
              Contact & Location
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-200/80 space-y-2">
            <div className="text-xs text-slate-500 font-medium px-3">Direct Phone Contact:</div>
            <div className="grid grid-cols-2 gap-2">
              {CLINIC_INFO.phones.map((phone) => (
                <a
                  key={phone.raw}
                  href={`tel:${phone.raw}`}
                  className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-700" />
                  <span>{phone.display}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
