export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  education: string[];
  specialties: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "dr-julio-perales",
    name: "Dr. Julio Perales",
    role: "Lead Dentist & Founder",
    bio: "Dr. Julio Perales is a distinguished dentist who earned his Doctor of Dental Surgery (D.D.S) degree from the prestigious Universidad México Americana del Norte, A.C (UNAM). With unwavering dedication and a commitment to excellence, Dr. Perales provides exceptional dental care in a comfortable environment.",
    imageUrl: "https://julioperales.com/images/dentista.jpg",
    education: [
      "Doctor of Dental Surgery (D.D.S), Universidad México Americana del Norte, A.C (UNAM)",
      "Advanced Training in Dental Implants",
      "Specialized in Cosmetic Dentistry"
    ],
    specialties: [
      "Dental Implants",
      "Root Canal Treatment",
      "Dental Crowns",
      "Cosmetic Dentistry"
    ]
  },
  {
    id: "dr-assistant-1",
    name: "Dr. Maria Gonzalez",
    role: "Associate Dentist",
    bio: "Dr. Maria Gonzalez works alongside Dr. Perales to provide comprehensive dental care. She specializes in cosmetic dentistry and is dedicated to helping patients achieve their perfect smile.",
    imageUrl: "https://julioperales.com/images/dental.png",
    education: [
      "Doctor of Dental Surgery, Universidad Autónoma de Nuevo León",
      "Advanced Training in Cosmetic Dentistry",
      "Certified in Dental Implant Procedures"
    ],
    specialties: [
      "Cosmetic Dentistry",
      "Dental Implants",
      "Smile Makeovers"
    ]
  },
  {
    id: "dental-hygienist",
    name: "Sofia Ramirez",
    role: "Dental Hygienist",
    bio: "Sofia Ramirez is our experienced dental hygienist who ensures patients receive thorough cleanings and proper oral hygiene education. Her gentle approach helps patients feel comfortable during their visits.",
    imageUrl: "https://julioperales.com/images/inside.jpg",
    education: [
      "Associate's Degree in Dental Hygiene, Universidad Autónoma de Tamaulipas",
      "Certified in Advanced Cleaning Techniques",
      "Continuing Education in Patient Care"
    ],
    specialties: [
      "Professional Teeth Cleaning",
      "Oral Hygiene Education",
      "Preventative Care"
    ]
  },
  {
    id: "office-manager",
    name: "Carlos Mendez",
    role: "Office Manager",
    bio: "Carlos Mendez ensures that Creative Smile Dental runs smoothly. He handles scheduling, insurance coordination, and makes sure every patient has a positive experience from the moment they contact our office.",
    imageUrl: "https://julioperales.com/images/front_clinic.png",
    education: [
      "Bachelor's in Business Administration",
      "Certified Dental Office Manager",
      "Training in Patient Relations and Dental Software"
    ],
    specialties: [
      "Patient Coordination",
      "Insurance Processing",
      "Office Management"
    ]
  }
];
