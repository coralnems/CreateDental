export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "general",
    title: "General Dentistry",
    shortDescription: "Comprehensive check-ups, cleanings, and preventative care for the whole family.",
    fullDescription: "Our general dentistry services focus on maintaining your oral health through regular check-ups, professional cleanings, and preventative treatments. We use state-of-the-art technology to detect issues early and provide effective solutions to keep your smile healthy.",
    imageUrl: "https://julioperales.com/images/dental_room.jpg",
    features: [
      "Comprehensive dental exams",
      "Professional teeth cleaning",
      "Digital X-rays",
      "Fluoride treatments",
      "Dental sealants",
      "Oral cancer screenings",
      "Treatment for gum disease"
    ]
  },
  {
    id: "crowns",
    title: "Dental Crowns",
    shortDescription: "Experience the perfect blend of durability and aesthetics with our custom-made dental crowns.",
    fullDescription: "Our dental crown services provide a lasting solution for a radiant, functional smile. Whether you need to restore a damaged tooth or enhance your smile's appearance, our custom-made crowns are designed to look natural while providing the strength and protection your teeth need.",
    imageUrl: "https://julioperales.com/images/dental.png",
    features: [
      "Custom-made dental crowns",
      "Natural-looking appearance",
      "Durable materials",
      "Protection for damaged teeth",
      "Restoration of tooth function",
      "Improved smile aesthetics",
      "Long-lasting results"
    ]
  },
  {
    id: "implants",
    title: "Dental Implants",
    shortDescription: "Rediscover the joy of a complete, natural-looking smile with our state-of-the-art dental implants.",
    fullDescription: "Our dental implant services provide a permanent solution for missing teeth. Implants look, feel, and function like natural teeth, helping to preserve your jawbone and facial structure while restoring your smile.",
    imageUrl: "https://julioperales.com/images/dentista.jpg",
    features: [
      "Single tooth implants",
      "Multiple tooth implants",
      "Full arch replacements",
      "Implant-supported dentures",
      "3D imaging and planning",
      "Bone grafting when necessary",
      "Long-term implant care"
    ]
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    shortDescription: "Say goodbye to tooth pain and save your natural smile with our gentle, efficient root canal treatment.",
    fullDescription: "Our root canal treatments are designed to relieve pain and save your natural tooth when the pulp inside becomes infected or inflamed. Using advanced techniques and technology, we make the procedure as comfortable as possible while effectively treating the problem.",
    imageUrl: "https://julioperales.com/images/perales_3.png",
    features: [
      "Pain relief",
      "Preservation of natural tooth",
      "Treatment of infected pulp",
      "Prevention of tooth loss",
      "Advanced techniques for comfort",
      "Restoration of tooth function",
      "Follow-up care"
    ]
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    shortDescription: "Unleash the power of a sparkling smile with our meticulous dental cleanings.",
    fullDescription: "Our deep cleaning services go beyond regular cleanings to remove plaque and tartar buildup below the gumline. This thorough cleaning helps prevent gum disease and promotes overall oral health, giving you a fresh, clean smile.",
    imageUrl: "https://julioperales.com/images/inside.jpg",
    features: [
      "Removal of plaque and tartar",
      "Cleaning below the gumline",
      "Prevention of gum disease",
      "Fresher breath",
      "Healthier gums",
      "Reduced risk of tooth loss",
      "Improved overall oral health"
    ]
  },
  {
    id: "braces",
    title: "Braces Treatment",
    shortDescription: "Transform your smile into a masterpiece with our cutting-edge braces treatment.",
    fullDescription: "Our orthodontic treatments help align your teeth and correct bite issues for improved oral health and a more confident smile. We offer traditional braces as well as clear aligner options to suit your lifestyle and preferences.",
    imageUrl: "https://julioperales.com/images/team.jpg",
    features: [
      "Traditional metal braces",
      "Ceramic braces",
      "Clear aligners",
      "Retainers",
      "Bite correction",
      "Personalized treatment plans",
      "Post-treatment care"
    ]
  },
  {
    id: "dental-surgery",
    title: "Dental Surgery",
    shortDescription: "Improve your oral health with our innovative dental surgery solutions.",
    fullDescription: "Our dental surgery services are designed to address more complex dental issues that require surgical intervention. From wisdom teeth extraction to corrective jaw surgery, our experienced team ensures your comfort while providing effective solutions for your dental needs.",
    imageUrl: "https://julioperales.com/images/saul_3.png",
    features: [
      "Wisdom teeth extraction",
      "Surgical tooth removal",
      "Bone grafting",
      "Gum surgery",
      "Corrective jaw procedures",
      "Pre-implant surgery",
      "Comfortable surgical experience"
    ]
  }
];
