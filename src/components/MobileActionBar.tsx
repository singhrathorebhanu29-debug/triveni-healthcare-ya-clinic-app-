import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface MobileActionBarProps {
  onOpenBooking: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenBooking }) => {
  return (
    <aside aria-label="Quick contact actions" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-lg">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${CLINIC_INFO.phones[0].raw}`}
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-slate-800 bg-slate-100 active:bg-slate-200 rounded-xl transition-colors whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5 text-orange-600" />
          <span>Call Clinic</span>
        </a>

        <a
          href="#contact"
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-white bg-teal-700 active:bg-teal-800 rounded-xl shadow-xs transition-colors whitespace-nowrap"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Appointment</span>
        </a>
      </div>
    </aside>
  );
};
