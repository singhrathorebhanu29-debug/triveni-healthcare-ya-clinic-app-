import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SpecialitiesSection } from './components/SpecialitiesSection';
import { DoctorsSection } from './components/DoctorsSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { AppointmentSection } from './components/AppointmentSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { DoctorDetailModal } from './components/DoctorDetailModal';
import { Doctor } from './data/clinicData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingDoctor, setBookingDoctor] = useState('');
  const [bookingSpecialty, setBookingSpecialty] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingSession, setBookingSession] = useState('Morning OPD');
  const [activeDoctorModal, setActiveDoctorModal] = useState<Doctor | null>(null);

  const handleOpenBooking = (
    doctorName?: string,
    department?: string,
    preferredDate?: string,
    session?: string
  ) => {
    setBookingDoctor(doctorName || '');
    setBookingSpecialty(department || '');
    if (preferredDate) setBookingDate(preferredDate);
    if (session) setBookingSession(session);
    setIsBookingOpen(true);
  };

  const handleSelectDoctor = (doctor: Doctor) => {
    setActiveDoctorModal(doctor);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF9] text-slate-800 antialiased w-full max-w-full overflow-x-hidden">
      {/* Top Bar Navigation with Call Clinic Action */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {/* Hero Section with 1 Main Book Appointment CTA + Call Now */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* About Triveni Healthcare Section */}
        <AboutSection />

        {/* Our Specialities with Symptom & Condition Filter */}
        <SpecialitiesSection />

        {/* Meet Our Specialists (Doctors with clean verified placeholder) */}
        <DoctorsSection
          onSelectDoctor={handleSelectDoctor}
        />

        {/* Healthcare Facilities */}
        <FacilitiesSection />

        {/* Why Choose Us (Factual & Non-Exaggerated) */}
        <WhyChooseSection />

        {/* Contact & Location Section with Map + Appointment Request Form */}
        <AppointmentSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Appointment Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialDoctor={bookingDoctor}
        initialSpecialty={bookingSpecialty}
        initialDate={bookingDate}
        initialSession={bookingSession}
      />

      {/* Doctor Detailed Profile Modal */}
      <DoctorDetailModal
        doctor={activeDoctorModal}
        onClose={() => setActiveDoctorModal(null)}
        onBookAppointment={(docName, dept) => handleOpenBooking(docName, dept)}
      />
    </div>
  );
}
