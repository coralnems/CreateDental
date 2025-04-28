"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface TestimonialItem {
  id: number;
  name: string;
  text: string;
  imageUrl: string;
  rating: number;
}

interface TestimonialProps {
  testimonials: TestimonialItem[];
}

const Testimonial = ({ testimonials }: TestimonialProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!testimonials.length) return null;

  return (
    <div className="relative w-full max-w-4xl mx-auto py-8">
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
            <Image
              src={testimonials[currentIndex].imageUrl}
              alt={testimonials[currentIndex].name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <div className="flex mb-2">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-4">&quot;{testimonials[currentIndex].text}&quot;</p>
            <p className="font-semibold text-blue-800">{testimonials[currentIndex].name}</p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        type="button"
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition duration-300"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={24} className="text-blue-600" />
      </button>
      <button
        type="button"
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition duration-300"
        aria-label="Next testimonial"
      >
        <ChevronRight size={24} className="text-blue-600" />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4">
        {testimonials.map((testimonial, index) => (
          <button
            type="button"
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1} - ${testimonial.name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
