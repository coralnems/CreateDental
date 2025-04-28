import Image from "next/image";
import Link from "next/link";
import TeamMember from "@/components/TeamMember";
import { teamMembers } from "@/data/team";
import { Award, Clock, HeartPulse, Stethoscope } from "lucide-react";
import heroStyles from "@/styles/hero.module.css";

export const metadata = {
  title: "About Us | DentalCare - Meet Our Expert Dental Team",
  description: "Learn about DentalCare's mission, values, and meet our experienced team of dental professionals dedicated to providing exceptional care in a comfortable environment.",
  keywords: "dental team, dentist profiles, dental clinic history, dental practice values, dental office tour, dental professionals",
  alternates: {
    canonical: "https://www.dentalcare.com/about",
  },
  openGraph: {
    title: "About Us | DentalCare - Meet Our Expert Dental Team",
    description: "Learn about DentalCare's mission, values, and meet our experienced team of dental professionals dedicated to providing exceptional care in a comfortable environment.",
    url: "https://www.dentalcare.com/about",
    type: "website",
    images: [
      {
        url: "https://images.pexels.com/photos/305566/pexels-photo-305566.jpeg",
        width: 1200,
        height: 630,
        alt: "DentalCare Team",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={heroStyles.heroBackgroundSmall}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About DentalCare</h1>
            <p className="text-xl text-blue-100">
              Providing exceptional dental care with a focus on patient comfort and the latest technology.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/305566/pexels-photo-305566.jpeg"
                  alt="DentalCare clinic"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010 by Dr. Sarah Johnson, DentalCare began with a simple mission: to provide exceptional dental care in a comfortable, patient-focused environment. What started as a small practice has grown into a comprehensive dental center serving thousands of patients in our community.
              </p>
              <p className="text-gray-600 mb-4">
                Our growth has been driven by our commitment to staying at the forefront of dental technology and techniques, while never losing sight of the personal touch that makes our practice special. We believe that building relationships with our patients is just as important as providing excellent clinical care.
              </p>
              <p className="text-gray-600">
                Today, our team of experienced dental professionals continues to uphold Dr. Johnson&apos;s vision, ensuring that every patient who walks through our doors receives the highest standard of care in a welcoming environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At DentalCare, our core values guide everything we do, from how we treat our patients to how we approach dental care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-4 rounded-full inline-flex justify-center items-center mb-6">
                <HeartPulse size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Patient-Centered Care</h3>
              <p className="text-gray-600">
                We put our patients&apos; needs first, listening to their concerns and working together to achieve optimal oral health.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-4 rounded-full inline-flex justify-center items-center mb-6">
                <Award size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from clinical care to patient communication and service.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-4 rounded-full inline-flex justify-center items-center mb-6">
                <Stethoscope size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Continuous Learning</h3>
              <p className="text-gray-600">
                We&apos;re committed to ongoing education and staying current with the latest advancements in dental care.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-4 rounded-full inline-flex justify-center items-center mb-6">
                <Clock size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Respect</h3>
              <p className="text-gray-600">
                We respect our patients&apos; time, preferences, and individuality, creating a welcoming environment for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our experienced team of dental professionals is dedicated to providing you with the highest quality care in a comfortable environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMember
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Facility Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Facility</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our modern dental clinic is designed with your comfort in mind, featuring state-of-the-art equipment and a welcoming atmosphere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg"
                alt="Reception area"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg"
                alt="Treatment room"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg"
                alt="Dental equipment"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg"
                alt="Consultation room"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.pexels.com/photos/305566/pexels-photo-305566.jpeg"
                alt="Waiting area"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.pexels.com/photos/3845727/pexels-photo-3845727.jpeg"
                alt="Dental technology"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the DentalCare Difference?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule your appointment today and see why our patients choose us for their dental care needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/appointment"
              className="bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300"
            >
              Book an Appointment
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
