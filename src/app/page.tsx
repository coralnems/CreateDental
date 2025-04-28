import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import Testimonial from "@/components/Testimonial";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { ArrowRight, Calendar, Clock, MapPin, Phone, Shield, Star, Users } from "lucide-react";
import heroStyles from "@/styles/hero.module.css";

export default function Home() {
  // Display only the first 3 services on the homepage
  const featuredServices = services.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className={heroStyles.heroBackground}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Your Brightest Smile Starts Here</h1>
            <p className="text-xl mb-8 text-blue-100">Exceptional dental care for the whole family with a focus on comfort and the latest technology.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/appointment" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 text-center">
                Book an Appointment
              </Link>
              <Link href="/services" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition duration-300 text-center">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Phone size={24} className="mr-3 text-blue-300" />
              <div>
                <p className="font-semibold">Call Us</p>
                <p>(956) 275-2492</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin size={24} className="mr-3 text-blue-300" />
              <div>
                <p className="font-semibold">Location</p>
                <p>326X+2H Nuevo Progreso, Tamaulipas, 88810 Nuevo Progreso, Mexico</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock size={24} className="mr-3 text-blue-300" />
              <div>
                <p className="font-semibold">Hours</p>
                <p>Mon-Fri: 8am-6pm, Sat: 9am-4pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We offer a comprehensive range of dental services to meet the needs of your entire family, from routine check-ups to advanced cosmetic procedures.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                imageUrl={service.imageUrl}
                linkUrl={`/services#${service.id}`}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300">
              View All Services <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/305566/pexels-photo-305566.jpeg"
                  alt="Modern dental clinic"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-blue-900">Why Choose DentalCare?</h2>
              <p className="text-gray-600 mb-8">
                At DentalCare, we combine advanced technology with compassionate care to provide an exceptional dental experience. Our team is dedicated to your comfort and long-term oral health.
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Users size={24} className="text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-800">Experienced Team</h3>
                    <p className="text-gray-600">Our dentists and staff have years of experience and stay current with the latest dental techniques.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Star size={24} className="text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-800">Comprehensive Care</h3>
                    <p className="text-gray-600">From preventative check-ups to advanced procedures, we provide all the dental services your family needs.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Shield size={24} className="text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-800">Patient Comfort</h3>
                    <p className="text-gray-600">We prioritize your comfort with amenities and techniques designed to make your visit stress-free.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/about" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 inline-block">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">What Our Patients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Don&apos;t just take our word for it. Here&apos;s what our patients have to say about their experience at DentalCare.</p>
          </div>

          <Testimonial testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Schedule Your Visit?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step toward a healthier smile today. Our friendly team is ready to assist you with any questions or to schedule your appointment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/appointment" className="bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">
              Book an Appointment
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Latest From Our Blog</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Stay informed with the latest dental health tips and news from our expert team.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg"
                  alt="Dental health tips"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar size={16} className="mr-1" />
                  <span>June 15, 2023</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-800">10 Essential Tips for Maintaining Healthy Teeth</h3>
                <p className="text-gray-600 mb-4">Discover the best practices for keeping your oral health in top condition with these expert-recommended tips.</p>
                <Link
                  href="/blog/tips-for-maintaining-healthy-teeth"
                  className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
                >
                  Read More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg"
                  alt="Dental implants"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar size={16} className="mr-1" />
                  <span>May 22, 2023</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-800">Understanding Dental Implants: Benefits and Procedure</h3>
                <p className="text-gray-600 mb-4">Learn everything you need to know about dental implants and how they can restore your smile and confidence.</p>
                <Link
                  href="/blog/understanding-dental-implants"
                  className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
                >
                  Read More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg"
                  alt="Orthodontic options"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar size={16} className="mr-1" />
                  <span>April 10, 2023</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-800">Orthodontic Options for Adults: It&apos;s Never Too Late</h3>
                <p className="text-gray-600 mb-4">Explore the various orthodontic treatments available for adults looking to straighten their teeth and improve their smile.</p>
                <Link
                  href="/blog/orthodontic-options-for-adults"
                  className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300">
              View All Blog Posts <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
