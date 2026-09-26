export interface Doctor {
  id: string;
  name: string;
  degree: string;
  specialty: string;
  hindiTitle: string;
  department: string;
  gender: 'male' | 'female';
}

export interface Speciality {
  id: string;
  name: string;
  shortName: string;
  description: string;
  conditions: string[];
  leadDoctor?: string;
  iconName: string;
  isPediatric?: boolean;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  highlight: string;
  iconName: string;
}

export const CLINIC_INFO = {
  name: 'TRIVENI HEALTHCARE',
  tagline: 'Compassionate Care. Modern Medicine.',
  businessType: 'Multi-Speciality Healthcare Clinic',
  location: {
    addressLine1: 'Bahodapur, Anand Nagar',
    city: 'Gwalior',
    state: 'Madhya Pradesh',
    pincode: '474012',
    country: 'India',
    fullAddress: 'TRIVENI HEALTHCARE, Bahodapur, Anand Nagar, Gwalior, Madhya Pradesh 474012, India',
    mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=TRIVENI+HEALTHCARE,+Bahodapur,+Anand+Nagar,+Gwalior,+Madhya+Pradesh+474012',
    embedMapUrl: 'https://maps.google.com/maps?q=TRIVENI+HEALTHCARE,+Bahodapur,+Anand+Nagar,+Gwalior,+Madhya+Pradesh+474012&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  phones: [
    { display: '81032 98789', raw: '8103298789' },
    { display: '91112 03632', raw: '9111203632' },
  ],
  instagram: 'https://www.instagram.com/triveni_healthcare/',
  aboutText:
    'Triveni Healthcare is a multi-speciality healthcare clinic providing OPD consultation and healthcare services through experienced specialists in Gwalior. The clinic focuses on patient-centered clinical care across multiple medical specialities, ensuring thorough evaluation, accessible diagnosis, and ethical treatment guidance.',
};

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-gajendra-dhakad',
    name: 'Dr. Gajendra Dhakad',
    degree: 'MBBS, MD Paedia, AFIN',
    specialty: 'Child & Newborn Specialist / Pediatrician',
    hindiTitle: 'बाल एवं नवजात शिशु रोग विशेषज्ञ',
    department: 'Child & Newborn Care (Pediatrics)',
    gender: 'male',
  },
  {
    id: 'dr-laxmi-dhakad',
    name: 'Dr. Laxmi Dhakad',
    degree: 'MBBS, MS',
    specialty: 'Gynecologist & Obstetrician / Women & Pregnancy Specialist',
    hindiTitle: 'महिला एवं प्रसूति रोग विशेषज्ञ',
    department: "Women's Health & Pregnancy",
    gender: 'female',
  },
  {
    id: 'dr-mahendra-dhakad',
    name: 'Dr. Mahendra Dhakad',
    degree: 'MBBS, MD',
    specialty: 'Oncologist / Cancer Specialist',
    hindiTitle: 'कैंसर रोग विशेषज्ञ',
    department: 'Oncology / Cancer Care',
    gender: 'male',
  },
  {
    id: 'dr-pradeep-rathore',
    name: 'Dr. Pradeep Rathore',
    degree: 'MBBS, MS, F.M.A.S.',
    specialty: 'General & Laparoscopic Surgeon',
    hindiTitle: 'जनरल एवं लेप्रोस्कोपिक सर्जन',
    department: 'General & Laparoscopic Surgery',
    gender: 'male',
  },
  {
    id: 'dr-sachin-sharma',
    name: 'Dr. Sachin Sharma',
    degree: 'MBBS, MD',
    specialty: 'Chest & Respiratory / Pulmonology Specialist',
    hindiTitle: 'सांस एवं छाती रोग विशेषज्ञ',
    department: 'Chest & Respiratory / Pulmonology',
    gender: 'male',
  },
];

export const SPECIALITIES: Speciality[] = [
  {
    id: 'chest-respiratory',
    name: 'Chest & Respiratory Care',
    shortName: 'Pulmonology',
    description:
      'Dedicated diagnostic evaluation and outpatient therapy for acute and chronic conditions of the lungs and airway passages.',
    conditions: [
      'Asthma & Allergy',
      'COPD & Emphysema',
      'Chronic Cough & Breathlessness',
      'Pneumonia & Bronchitis',
      'Sleep Apnea & TB Care',
    ],
    leadDoctor: 'Dr. Sachin Sharma (MBBS, MD)',
    iconName: 'Wind',
  },
  {
    id: 'laparoscopic-surgery',
    name: 'General & Laparoscopic Surgery',
    shortName: 'Surgery',
    description:
      'Specialist surgical evaluation, minimally invasive laparoscopic opinions, and peri-operative consultation for abdominal and vascular conditions.',
    conditions: [
      'Gall Bladder Stones & Appendicitis',
      'Hernia & Hydrocele',
      'Kidney Stones & Intestinal Obstruction',
      'Piles, Fistula & Sinus',
      'Varicose Veins & Breast Lump Evaluation',
    ],
    leadDoctor: 'Dr. Pradeep Rathore (MBBS, MS, F.M.A.S.)',
    iconName: 'Activity',
  },
  {
    id: 'cancer-care',
    name: 'Cancer Care',
    shortName: 'Oncology',
    description:
      'Specialized cancer consultations, systemic chemotherapy protocols, radiotherapy guidance (IMRT, IGRT, VMAT), and early screening programs.',
    conditions: [
      'Chemotherapy Planning',
      'Radiotherapy (IMRT, IGRT, VMAT)',
      'Early Cancer Detection & Screening',
      'Comprehensive Cancer Consultations',
    ],
    leadDoctor: 'Dr. Mahendra Dhakad (MBBS, MD)',
    iconName: 'ShieldCheck',
  },
  {
    id: 'womens-health',
    name: "Women's Health & Pregnancy",
    shortName: 'Gynecology & Obstetrics',
    description:
      'Comprehensive outpatient care focusing on maternal health, pregnancy counseling, antenatal checkups, and general female wellness.',
    conditions: [
      'Pregnancy Care & Antenatal Checkups',
      "Women's Wellness Consultations",
      'Maternal Guidance & Care',
      'Gynecological Evaluations',
    ],
    leadDoctor: 'Dr. Laxmi Dhakad (MBBS, MS)',
    iconName: 'HeartHandshake',
  },
  {
    id: 'child-pediatric',
    name: 'Child / Pediatric Care',
    shortName: 'Pediatrics',
    description:
      'Dedicated outpatient clinical support and growth monitoring for infants and children in a friendly, gentle environment.',
    conditions: [
      'General Pediatric Consultations',
      'Infant & Child Wellness OPD',
      'Childhood Health Checkups',
      'Newborn Care & Development',
    ],
    leadDoctor: 'Dr. Gajendra Dhakad (MBBS, MD Paedia, AFIN)',
    iconName: 'Baby',
    isPediatric: true,
  },
];

export const FACILITIES: Facility[] = [
  {
    id: 'opd',
    title: 'OPD Consultation',
    description:
      'Scheduled outpatient appointments with experienced specialists across all major clinical departments in quiet, private consultation rooms.',
    highlight: 'Multi-Speciality Chambers',
    iconName: 'Stethoscope',
  },
  {
    id: 'pharmacy',
    title: 'Pharmacy Services',
    description:
      'In-house dispensary providing convenient access to genuine prescribed medications and clinical supplies right after your consultation.',
    highlight: 'Prescription Dispensary',
    iconName: 'Pill',
  },
  {
    id: 'daycare',
    title: 'Day-care Facility',
    description:
      'Comfortable short-stay beds for minor procedures, post-consultation recovery, observation, and medication administration.',
    highlight: 'Short-Stay Observation',
    iconName: 'BedDouble',
  },
  {
    id: 'specialists',
    title: 'Experienced Specialists',
    description:
      'Board-certified doctors holding MD, MS, and fellowship credentials committed to transparent discussions and ethical patient care.',
    highlight: 'Certified MD / MS Faculty',
    iconName: 'Award',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Multiple Medical Specialities',
    description:
      'Access chest medicine, general surgery, oncology, and women’s health under one roof in Bahodapur, Gwalior.',
  },
  {
    title: 'Specialist Consultations',
    description:
      'Direct one-on-one evaluations with experienced MD, MS, and FMAS credentialed practitioners.',
  },
  {
    title: 'Convenient OPD Consultation',
    description:
      'Streamlined appointment scheduling by phone or online booking to minimize patient waiting times.',
  },
  {
    title: 'Patient-Focused Healthcare',
    description:
      'Compassionate clinical interactions where treatments and diagnostics are clearly explained to patients and families.',
  },
];
