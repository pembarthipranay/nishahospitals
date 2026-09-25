export interface Doctor {
  id: string;
  name: string;
  degrees: string;
  role: string;
  department: string;
  experience: string;
  education: string;
  bio: string;
  specialties: string[];
  opdTimings: string;
  image?: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  category: 'maternity' | 'pediatrics' | 'surgery' | 'diagnostics' | 'emergency';
  summary: string;
  description: string;
  highlights: string[];
  leadDoctor: string;
}

export interface FacilityFloor {
  floor: string;
  title: string;
  description: string;
  features: string[];
  photos: string[];
}

export interface PatientReview {
  id: string;
  name: string;
  source: string;
  rating: number;
  date: string;
  comment: string;
  treatment: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: 'exterior' | 'maternity' | 'nicu' | 'ot' | 'inpatient' | 'diagnostics';
  description: string;
}

export const HOSPITAL_CONTACT = {
  name: "Nisa Hospital",
  tagline: "Advanced Maternity & Women's Healthcare Center",
  established: 1989,
  founder: "Dr. Farida S. Arastu (MD, DGO, Osmania '72)",
  bedCapacity: "35 Beds",
  deliveriesCount: "30,000+",
  rating: 4.2,
  reviewsCount: 500,
  address: {
    line1: "11-5-57 & 80-83, Bazar Ghat Cross Roads",
    line2: "Red Hills, Lakdikapul (near Seetharambagh)",
    landmark: "Beside Signal, Near Nagina Hotel & Famous Flower Shop",
    city: "Hyderabad",
    state: "Telangana",
    pin: "500004",
  },
  phones: [
    { label: "Emergency & Reception 1", number: "+91 40 6673 2786", raw: "+914066732786" },
    { label: "Emergency & Reception 2", number: "+91 40 6673 2787", raw: "+914066732787" },
    { label: "Enquiries Line 1", number: "040 2330 8786", raw: "04023308786" },
    { label: "Enquiries Line 2", number: "040 2330 8785", raw: "04023308785" },
  ],
  ambulance: "+91 40 6673 2786",
  email: "info@nisahospital.in",
  website: "www.nisahospital.in",
  workingHours: "24 Hours Open (Emergency, Labor Rooms, NICU, Lab & Pharmacy 24×7)",
  opdHours: "Monday – Saturday: 10:00 AM – 2:00 PM & 6:00 PM – 9:00 PM",
};

export const DOCTORS_DATA: Doctor[] = [
  {
    id: "dr-farida-arastu",
    name: "Dr. Farida S. Arastu",
    degrees: "MD, DGO",
    role: "Founder & Chief Obstetrician & Gynecologist",
    department: "Obstetrics & Gynecology",
    experience: "35+ Years Experience",
    education: "Osmania Medical College (First Entrance Batch 1972, DGO & MD); FMH Consultant (4 years); Medical Consultant Mecca, Saudi Arabia; Princess Durreshawar Hospital",
    bio: "Dr. Farida S. Arastu completed her DGO and MD from the prestigious Osmania Medical College. After gaining international clinical experience in Saudi Arabia and leading hospitals in Hyderabad, she founded Nisa Hospital in 1989 as a 5-bed maternity clinic. Over the past 35 years, her humane, patient-first approach and mastery of natural childbirth and high-risk pregnancy have helped deliver more than 30,000 healthy babies.",
    specialties: [
      "High-Risk Pregnancy Management",
      "Natural & Normal Childbirth Advocacy",
      "Elective & Emergency Obstetric Care",
      "Infertility Evaluation & Treatment",
      "Complex Gynecological Surgeries",
      "Lactation & Postnatal Care",
    ],
    opdTimings: "Mon – Sat: 11:00 AM – 2:00 PM & 6:30 PM – 8:30 PM",
  },
  {
    id: "dr-tahera-arastu",
    name: "Dr. Tahera K. Arastu",
    degrees: "DGO, DNB (OBGYN)",
    role: "Senior Consultant Obstetrician & Gynecologist",
    department: "Obstetrics & Gynecology",
    experience: "20+ Years Experience",
    education: "Surat Medical College (Gold Medalist & State Topper); DNB Muslim Maternity Hospital Chaderghat; FOGSI Certified Ultrasound & Laparoscopy",
    bio: "Dr. Tahera K. Arastu is an academic gold medalist and state topper who completed her DGO at Surat Medical College and DNB from Muslim Maternity Hospital. With specialized FOGSI certification in advanced ultrasound imaging and laparoscopic gynecology, she provides compassionate, evidence-based maternity and minimally invasive surgical care.",
    specialties: [
      "Minimally Invasive Laparoscopic Surgery",
      "FOGSI-Certified Obstetric Ultrasound",
      "Antenatal & Perinatal Care",
      "Hysteroscopy & Endometriosis Treatment",
      "Painless Delivery & Labor Management",
      "Adolescent & Menopausal Healthcare",
    ],
    opdTimings: "Mon – Sat: 10:00 AM – 1:30 PM & 6:00 PM – 9:00 PM",
  },
  {
    id: "dr-husain-arastu",
    name: "Dr. K. Husain Arastu",
    degrees: "MD (Pediatrics)",
    role: "Consultant Pediatrician & Neonatologist",
    department: "Pediatrics & Neonatal Care",
    experience: "15+ Years Experience (Joined Nisa 2010)",
    education: "MD Pediatrics from KIMS (2009); Specialized Training in Neonatal Intensive Care",
    bio: "Dr. K. Husain Arastu is an experienced pediatrician and neonatologist leading the Level II Neonatal ICU (NICU) at Nisa Hospital. He provides 24/7 resuscitation, care for premature infants, neonatal jaundice management, child developmental checks, and routine pediatric immunizations.",
    specialties: [
      "Level II Neonatal Intensive Care (NICU)",
      "Preterm Infant Stabilization & Resuscitation",
      "Comprehensive Vaccine Clinic (IAP Schedule)",
      "Pediatric Nutrition & Growth Monitoring",
      "Infectious Disease & Childhood Illness Management",
      "Newborn Screening & Follow-up",
    ],
    opdTimings: "Mon – Sat: 11:30 AM – 2:00 PM & 7:00 PM – 9:30 PM (24/7 on call for NICU)",
  },
  {
    id: "dr-alka-prasad",
    name: "Dr. Alka Prasad",
    degrees: "DMRD",
    role: "Consultant Radiologist",
    department: "Imaging & Radiology",
    experience: "20+ Years Experience",
    education: "DMRD; Advanced Fellowship in Fetal Medicine & Obstetric Ultrasound",
    bio: "Dr. Alka Prasad is a seasoned consultant radiologist leading the ultrasound diagnostics unit. She specializes in 4D fetal scans, early pregnancy viability assessments, first-trimester NT scans, second-trimester anomaly (TIFFA) scans, and fetal Doppler studies.",
    specialties: [
      "4D Fetal Ultrasound Scanning",
      "Second Trimester Anomaly (TIFFA) Scans",
      "Fetal Echocardiography & Color Doppler",
      "Early Pregnancy Assessment & Nuchal Translucency (NT)",
      "Pelvic & Transvaginal (TVS) Sonography",
      "Breast & Follicular Ultrasound Studies",
    ],
    opdTimings: "Mon – Sat: 10:30 AM – 1:30 PM & by appointment",
  },
  {
    id: "dr-hk-patel",
    name: "Dr. H. K. Patel",
    degrees: "MS, FICS",
    role: "Senior Consultant General Surgeon",
    department: "General Surgery",
    experience: "30+ Years Experience",
    education: "MS (General Surgery), Fellow of the International College of Surgeons (FICS)",
    bio: "Dr. H. K. Patel brings three decades of surgical mastery, performing comprehensive general, abdominal, and gynecological surgical interventions at Nisa Hospital's modern modular operation theater suite.",
    specialties: [
      "General & Laparoscopic Abdominal Surgery",
      "Hernia, Appendix & Gallbladder Procedures",
      "Surgical Management of Breast Conditions",
      "Emergency Trauma & Abdominal Interventions",
      "Post-Surgical Inpatient Rehabilitation",
    ],
    opdTimings: "Mon – Fri: 12:00 PM – 2:00 PM & by surgical schedule",
  },
  {
    id: "dr-ather-parvez",
    name: "Dr. Ather Parvez",
    degrees: "MD (Anesthesia)",
    role: "Senior Consultant Anesthesiologist",
    department: "Anesthesiology & Critical Care",
    experience: "35+ Years Experience (With Nisa Since Inception)",
    education: "MD Anesthesia from Osmania Medical College",
    bio: "Dr. Ather Parvez has been an integral pillar of Nisa Hospital since its founding in 1989. An alumnus of Osmania Medical College, he leads anesthetic care for obstetric emergencies, labor analgesia (epidurals), and complex surgical procedures with an impeccable patient safety record.",
    specialties: [
      "Obstetric Anesthesia & Emergency Cesarean Support",
      "Painless Delivery / Labor Epidural Analgesia",
      "Pediatric & Neonatal Surgical Anesthesia",
      "Critical Care Resuscitation & Airway Management",
      "Post-Operative Acute Pain Relief",
    ],
    opdTimings: "On-site 24/7 for obstetric labor and emergency surgeries",
  },
];

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "obstetrics",
    title: "Obstetrics & Maternity Care",
    category: "maternity",
    summary: "Complete prenatal, labor, natural childbirth, and postnatal care backed by 35 years of clinical trust.",
    description: "Nisa Hospital is renowned across Hyderabad for prioritizing safe, natural childbirth. Founded by Dr. Farida S. Arastu, our team provides personalized maternal care through comprehensive antenatal clinics, fetal monitoring, comfortable labor suites, and 24x7 emergency cesarean capabilities.",
    highlights: [
      "Antenatal Clinics & Trimester-wise Monitoring",
      "Dedicated, Fully-Equipped First-Floor Labor & Delivery Suites",
      "Promotion & Support for Normal Childbirth",
      "Painless Labor (Epidural Analgesia) Options",
      "High-Risk Pregnancy & Pre-eclampsia Management",
      "Breastfeeding Education & Lactation Counseling",
      "Postnatal Recovery & Newborn Rooming-in",
    ],
    leadDoctor: "Dr. Farida S. Arastu (MD, DGO) & Dr. Tahera K. Arastu (DGO, DNB)",
  },
  {
    id: "gynecology",
    title: "Gynecology & Laparoscopy",
    category: "surgery",
    summary: "Minimally invasive laparoscopic surgeries, routine gynecologic treatments, and reproductive healthcare.",
    description: "Our gynecological department provides diagnosis and treatment for women across all stages of life, from adolescent menstrual health to complex surgical interventions and menopausal well-being.",
    highlights: [
      "Minimally Invasive Laparoscopic & Hysteroscopic Surgeries",
      "Fibroid, Ovarian Cyst, and Endometriosis Treatment",
      "Infertility Evaluation & Follicular Monitoring",
      "Menstrual Irregularities & PCOD Management",
      "Pelvic Organ Prolapse & Uterine Surgeries",
      "Contraception & Family Planning Counseling",
    ],
    leadDoctor: "Dr. Tahera K. Arastu, DGO, DNB (Gold Medalist)",
  },
  {
    id: "pediatrics-nicu",
    title: "Pediatrics & Level II NICU",
    category: "pediatrics",
    summary: "Dedicated Level II Neonatal Intensive Care Unit adjacent to labor rooms, plus outpatient children's clinic.",
    description: "Headed by Dr. K. Husain Arastu, our pediatric and neonatology service ensures newborn babies receive immediate, specialized care from birth. Our Level II NICU is equipped with modern incubators, phototherapy, and cardiorespiratory monitors.",
    highlights: [
      "Level II Neonatal Intensive Care Unit (NICU)",
      "Immediate Newborn Resuscitation & Radiant Warmers",
      "Phototherapy for Neonatal Hyperbilirubinemia (Jaundice)",
      "Daily Outpatient Children's Clinic",
      "Comprehensive Pediatric Immunization & Vaccine Clinic",
      "Childhood Nutrition & Growth Assessment",
    ],
    leadDoctor: "Dr. K. Husain Arastu, MD (Pediatrics)",
  },
  {
    id: "cancer-wellness",
    title: "Women's Cancer Screening & Wellness",
    category: "diagnostics",
    summary: "Proactive early detection screening for breast and cervical cancers, plus nutrition and lifestyle counseling.",
    description: "Early detection saves lives. Nisa Hospital provides dedicated cancer screening protocols for women, including clinical breast examinations, Pap smears, and pelvic sonography.",
    highlights: [
      "Breast Clinic & Clinical Breast Examination",
      "Cervical Cancer Screening (Pap Smear & HPV Testing)",
      "Ovarian Cancer Screening & Pelvic Sonography",
      "Dedicated Women's Nutrition & Dietetics Counseling",
      "Menopausal Health & Bone Density Guidance",
    ],
    leadDoctor: "Dr. Farida S. Arastu & Dr. Alka Prasad",
  },
  {
    id: "radiology-ultrasound",
    title: "4D Ultrasound & Radiology",
    category: "diagnostics",
    summary: "In-house advanced 4D fetal ultrasound, anomaly scans, and obstetric imaging led by Dr. Alka Prasad.",
    description: "Accurate imaging is central to obstetric safety. Our diagnostic unit is equipped with advanced sonography machines capable of high-definition 4D real-time fetal imaging and color Doppler studies.",
    highlights: [
      "4D Real-Time Fetal Sonography",
      "Targeted Imaging for Fetal Anomalies (TIFFA / Anomaly Scan)",
      "Nuchal Translucency (NT) & Early Pregnancy Scans",
      "Obstetric & Gynecological Color Doppler Studies",
      "Transvaginal & Pelvic Ultrasound",
    ],
    leadDoctor: "Dr. Alka Prasad, DMRD",
  },
  {
    id: "general-surgery",
    title: "General & Laparoscopic Surgery",
    category: "surgery",
    summary: "Elective and emergency surgical procedures performed in sterile, state-of-the-art operating theaters.",
    description: "Led by Dr. H. K. Patel, our surgical unit provides care for acute and elective surgical conditions supporting women and families.",
    highlights: [
      "Minimally Invasive Abdominal Surgery",
      "Hernia Repair & Appendectomy",
      "Gallbladder Surgery (Cholecystectomy)",
      "Benign Breast Lump Excision",
      "Pre- and Post-Operative Critical Care Monitoring",
    ],
    leadDoctor: "Dr. H. K. Patel, MS, FICS",
  },
  {
    id: "emergency-ambulance",
    title: "24×7 Emergency & Ambulance Service",
    category: "emergency",
    summary: "Round-the-clock obstetric emergency reception, dedicated on-call ambulance, 24-hour pharmacy & lab.",
    description: "Medical emergencies don't watch the clock. Our 24-hour emergency room at Bazarghat Cross Roads is staffed with doctors and nurses ready for prompt admissions, labor onset, and surgical stabilization.",
    highlights: [
      "24/7 Obstetric & Gynecological Emergency Admission",
      "24-Hour On-Call Ambulance Service",
      "24-Hour Inpatient & Outpatient Pharmacy",
      "24-Hour Pathology Laboratory for Urgent Diagnostic Tests",
      "Dedicated Nursing Station on Every Inpatient Floor",
    ],
    leadDoctor: "Dr. Ather Parvez & On-Duty Emergency Medical Officers",
  },
];

export const HOSPITAL_FACILITIES: FacilityFloor[] = [
  {
    floor: "Ground Floor",
    title: "Outpatient Department & Emergency Reception",
    description: "Welcoming reception and triage zone featuring 4 consultation rooms, emergency stabilization beds, and the advanced 4D ultrasound imaging center.",
    features: [
      "4 Outpatient Consultation Chambers for Specialists",
      "24/7 Emergency Triage & Treatment Area",
      "Advanced 4D Ultrasound & Diagnostic Sonography Suite",
      "Central Patient Registration, Billing & Enquiry Desk",
      "Spacious Patient Waiting Hall & Restrooms",
    ],
    photos: ["/images/large/gallery_img1.jpg", "/images/large/gallery_img2.jpg", "/images/large/gallery_img7.jpg"],
  },
  {
    floor: "First Floor",
    title: "Labor Suites, Operating Theaters & Level II NICU",
    description: "The core clinical critical-care hub. Contains fully equipped delivery suites, advanced sterile operating theaters, Level II NICU, and round-the-clock pharmacy and lab.",
    features: [
      "Modern Labor & Delivery Rooms with Continuous Fetal Heart Monitoring",
      "Major & Minor Surgical Operating Theaters with HEPA Air Flow",
      "Level II Neonatal Intensive Care Unit (NICU) with Incubators & Phototherapy",
      "24/7 Fully Stocked Inpatient & Outpatient Pharmacy",
      "24/7 Clinical Pathology Laboratory for Rapid Blood & Bio Tests",
    ],
    photos: ["/images/large/gallery_img3.jpg", "/images/large/gallery_img4.jpg", "/images/large/gallery_img5.jpg", "/images/large/gallery_img6.jpg"],
  },
  {
    floor: "Second & Third Floors",
    title: "35-Bed Inpatient Wards & Private Suites",
    description: "Comfortable, sanitized patient accommodations with 24-hour nursing supervision, dedicated pantries, and calm prayer rooms on each floor.",
    features: [
      "35-Bed Capacity across Private Rooms, Semi-Private Rooms & Sharing Wards",
      "Dedicated 24/7 Nursing Station on Each Floor",
      "Pantry & Nutrition Support on Both Inpatient Floors",
      "Quiet Prayer Room / Namaz Facility on Each Floor",
      "Elevator & Wide Stretcher Accessibility",
    ],
    photos: ["/images/large/gallery_img8.jpg", "/images/large/gallery_img9.jpg", "/images/large/gallery_img10.jpg", "/images/large/gallery_img14.jpg"],
  },
  {
    floor: "24/7 Rapid Response",
    title: "Emergency Ambulance & Transport",
    description: "Dedicated emergency ambulance vehicle on standby 24 hours a day for immediate maternal transfer and critical patient admissions.",
    features: [
      "24/7 On-Call Ambulance Dispatch",
      "Equipped with Oxygen Support & Emergency Resuscitation Kit",
      "Direct Ramp & Stretcher Access from Bazarghat Cross Roads",
      "Direct Line: +91 40 6673 2786 / 6673 2787",
    ],
    photos: ["/images/large/gallery_img1.jpg"],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "g1", src: "/images/large/gallery_img1.jpg", title: "Hospital Entrance & Facade", category: "exterior", description: "Nisa Hospital building located at Bazarghat Cross Roads, Red Hills, Hyderabad." },
  { id: "g2", src: "/images/large/gallery_img2.jpg", title: "Reception & Waiting Area", category: "inpatient", description: "Ground floor reception, inquiry desk, and comfortable patient waiting lounge." },
  { id: "g3", src: "/images/large/gallery_img3.jpg", title: "Labor & Delivery Suite", category: "maternity", description: "First-floor specialized delivery suite equipped with fetal heart monitors and emergency resuscitation." },
  { id: "g4", src: "/images/large/gallery_img4.jpg", title: "Level II Neonatal ICU (NICU)", category: "nicu", description: "State-of-the-art neonatal incubators, warmers, and phototherapy units for newborn care." },
  { id: "g5", src: "/images/large/gallery_img5.jpg", title: "Advanced Operation Theater", category: "ot", description: "Sterile surgical theater with modern anesthesia workstations and laparoscopic equipment." },
  { id: "g6", src: "/images/large/gallery_img6.jpg", title: "Surgical Scrub & Prep Area", category: "ot", description: "Sterile preparation zone adjacent to the primary operating theater." },
  { id: "g7", src: "/images/large/gallery_img7.jpg", title: "Doctor's Consultation Room", category: "exterior", description: "Private ground-floor examination chamber for confidential obstetric and gynecological consultations." },
  { id: "g8", src: "/images/large/gallery_img8.jpg", title: "Private Patient Suite", category: "inpatient", description: "Air-conditioned private inpatient room with patient bed, attendant couch, and attached washroom." },
  { id: "g9", src: "/images/large/gallery_img9.jpg", title: "Inpatient Recovery Ward", category: "inpatient", description: "Well-ventilated, hygienic 35-bed inpatient ward with 24/7 nursing supervision." },
  { id: "g10", src: "/images/large/gallery_img10.jpg", title: "Nursing Station (2nd Floor)", category: "inpatient", description: "Central nursing station monitoring patient vitals and medication schedules." },
  { id: "g11", src: "/images/large/gallery_img11.jpg", title: "4D Ultrasound Diagnostic Unit", category: "diagnostics", description: "High-resolution sonography suite for antenatal anomaly scans and fetal wellbeing." },
  { id: "g12", src: "/images/large/gallery_img12.jpg", title: "24-Hour Pathology Laboratory", category: "diagnostics", description: "In-house lab delivering timely blood counts, biochemical panels, and urgent reports." },
  { id: "g13", src: "/images/large/gallery_img13.jpg", title: "24-Hour Inpatient Pharmacy", category: "diagnostics", description: "Round-the-clock pharmacy stocked with essential maternal, pediatric, and surgical medications." },
  { id: "g14", src: "/images/large/gallery_img14.jpg", title: "Patient Room Corridor", category: "inpatient", description: "Sanitized corridors with stretcher lift access, emergency exits, and pantry areas." },
  { id: "g15", src: "/images/large/gallery_img15.jpg", title: "Neonatal Radiant Warmer", category: "nicu", description: "Specialized warming and observation unit inside the Level II NICU." },
  { id: "g16", src: "/images/large/gallery_img16.jpg", title: "Maternity Ward Bed & Monitoring", category: "maternity", description: "Postnatal recovery bed with bedside monitoring for mother and newborn." },
  { id: "g17", src: "/images/large/gallery_img17.jpg", title: "Prayer Hall & Quiet Space", category: "inpatient", description: "Dedicated prayer room on inpatient floors for patients and visiting family members." },
  { id: "g18", src: "/images/large/gallery_img18.jpg", title: "Emergency Examination Bay", category: "exterior", description: "Ground-floor emergency triage unit for acute maternal and surgical admissions." },
  { id: "g19", src: "/images/large/gallery_img19.jpg", title: "Vaccination & Pediatric Clinic", category: "nicu", description: "Comfortable clinical space dedicated to infant immunization and developmental checks." },
  { id: "g20", src: "/images/large/gallery_img20.jpg", title: "Consultation Chamber 2", category: "exterior", description: "Senior OBGYN consultation room with patient examination couch and diagnostic equipment." },
];

export const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: "rev-1",
    name: "Ayesha Fatima",
    source: "Verified Patient Review (Justdial & Google)",
    rating: 5,
    date: "Recent Patient",
    comment: "Both Dr. Farida and Dr. Tahera took excellent care of me during my pregnancy and delivery. They strongly encourage normal delivery and explain everything with patience. The nursing staff is very supportive and attentive day and night.",
    treatment: "Maternity & Normal Delivery",
  },
  {
    id: "rev-2",
    name: "Mohammed Rizwan",
    source: "Google Review",
    rating: 5,
    date: "Verified Family",
    comment: "Nisa Hospital is one of the best maternity hospitals in Bazarghat and Lakdikapul. Dr. Fareeda is very professional with 35+ years of experience. Our baby boy was delivered safely without any stress. The hospital is budget friendly and affordable.",
    treatment: "Safe Childbirth & Neonatal Care",
  },
  {
    id: "rev-3",
    name: "Syeda Kaneez Begum",
    source: "Practo / Justdial Review",
    rating: 5,
    date: "Verified Patient",
    comment: "Dr. Tahera Arastu is an exceptional doctor. Her diagnosis is precise and she makes the patient feel very comfortable. The Level II NICU gave us total peace of mind for our newborn. Clean rooms, helpful nurses, and 24-hour pharmacy right inside.",
    treatment: "High-Risk Pregnancy & Pediatric Care",
  },
  {
    id: "rev-4",
    name: "K. Anuradha",
    source: "Healthcare Portal Review",
    rating: 4,
    date: "Verified Patient",
    comment: "We traveled from Mehdipatnam because of Dr. Farida's stellar reputation. The care was excellent and the medical charges were very reasonable compared to corporate hospitals. Only advice is to take auto/cab as street parking for cars can get tight during peak hours.",
    treatment: "Obstetrics Consultation & Delivery",
  },
  {
    id: "rev-5",
    name: "Zainab Sultana",
    source: "Verified Family Review",
    rating: 5,
    date: "Verified Patient",
    comment: "My mother underwent surgery under Dr. H. K. Patel and Dr. Tahera Arastu. Everything was explained clearly beforehand. Dr. Ather Parvez in anesthesia made sure there was zero pain. Great post-op care by the nursing team.",
    treatment: "Gynecological Surgery",
  },
  {
    id: "rev-6",
    name: "Dr. S. M. Quadri",
    source: "Medical Colleague & Patient Relative",
    rating: 5,
    date: "Verified Review",
    comment: "Having observed hospitals across Hyderabad, Nisa Hospital stands out for clinical ethics. They never push unnecessary cesareans. Founded in 1989, their track record of 30,000+ safe deliveries speaks for itself.",
    treatment: "Obstetric Care & Delivery",
  },
];

export const VACCINE_SCHEDULE = [
  { age: "At Birth", vaccines: ["BCG", "OPV 0", "Hepatitis B 1"], notes: "Administered immediately in Level II NICU / nursery before discharge" },
  { age: "6 Weeks", vaccines: ["DTwP / DTaP 1", "IPV 1", "Hep B 2", "Hib 1", "Rotavirus 1", "PCV 1"], notes: "First primary series clinic check" },
  { age: "10 Weeks", vaccines: ["DTwP / DTaP 2", "IPV 2", "Hib 2", "Rotavirus 2", "PCV 2"], notes: "Second dose assessment" },
  { age: "14 Weeks", vaccines: ["DTwP / DTaP 3", "IPV 3", "Hib 3", "Rotavirus 3", "PCV 3"], notes: "Third primary booster series" },
  { age: "6 Months", vaccines: ["Influenza (Flu) Dose 1", "OPV 1"], notes: "Annual pediatric influenza protection" },
  { age: "9 Months", vaccines: ["MMR 1 (Measles, Mumps, Rubella)", "OPV 2"], notes: "Vital viral immunization milestone" },
  { age: "12 Months", vaccines: ["Hepatitis A Dose 1", "JE (if endemic)"], notes: "One-year milestone health review" },
  { age: "15 Months", vaccines: ["MMR 2", "Varicella (Chickenpox) 1", "PCV Booster"], notes: "Comprehensive toddler booster" },
  { age: "18 Months", vaccines: ["DTwP / DTaP Booster 1", "IPV Booster 1", "Hib Booster 1", "Hep A 2"], notes: "1.5 year booster assessment" },
  { age: "4 - 5 Years", vaccines: ["DTwP / DTaP Booster 2", "OPV 3", "MMR 3", "Varicella 2"], notes: "Pre-school comprehensive immunization" },
];
