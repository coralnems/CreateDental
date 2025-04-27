export interface Testimonial {
  id: number;
  name: string;
  text: string;
  imageUrl: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jennifer Smith",
    text: "I've been coming to DentalCare for over 5 years now, and I couldn't be happier with the service. Dr. Johnson and her team always make me feel comfortable and well-cared for. My smile has never looked better!",
    imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    rating: 5
  },
  {
    id: 2,
    name: "Robert Davis",
    text: "As someone who used to be terrified of dental visits, I can't recommend DentalCare enough. They took the time to address all my concerns and made sure I was comfortable throughout my treatment. The results of my smile makeover are amazing!",
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    rating: 5
  },
  {
    id: 3,
    name: "Maria Garcia",
    text: "I brought my 5-year-old son here for his first dental check-up, and Dr. Rodriguez was fantastic with him. She made the experience fun and stress-free. Now he actually looks forward to his dental appointments!",
    imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    rating: 5
  },
  {
    id: 4,
    name: "David Kim",
    text: "I had Invisalign treatment with Dr. Chen, and the results exceeded my expectations. The entire process was smooth, and the staff was always helpful in answering my questions. I finally have the straight teeth I've always wanted!",
    imageUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    rating: 4
  },
  {
    id: 5,
    name: "Sarah Thompson",
    text: "After a dental emergency, I was seen the same day at DentalCare. Dr. Wilson was professional and efficient in addressing my issue. I'm grateful for their prompt care and will definitely continue coming here for all my dental needs.",
    imageUrl: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg",
    rating: 5
  }
];
