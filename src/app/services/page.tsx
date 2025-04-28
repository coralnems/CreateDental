import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { Check } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import heroStyles from "@/styles/hero.module.css";

export const metadata = {
  title: "Our Services | DentalCare - Comprehensive Dental Treatments",
  description: "Explore our comprehensive range of dental services from general check-ups to advanced cosmetic procedures, orthodontics, pediatric dentistry, and emergency care.",
  keywords: "dental services, general dentistry, cosmetic dentistry, orthodontics, dental implants, pediatric dentistry, emergency dental care, teeth whitening, dental check-ups",
  alternates: {
    canonical: "https://www.dentalcare.com/services",
  },
  openGraph: {
    title: "Our Services | DentalCare - Comprehensive Dental Treatments",
    description: "Explore our comprehensive range of dental services from general check-ups to advanced cosmetic procedures, orthodontics, pediatric dentistry, and emergency care.",
    url: "https://www.dentalcare.com/services",
    type: "website",
    images: [
      {
        url: "https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg",
        width: 1200,
        height: 630,
        alt: "DentalCare Services",
      },
    ],
  },
};

export default function ServicesPage() {
  // WebPage schema data
  const webPageSchema = {
    name: "Dental Services | DentalCare",
    description: "Explore our comprehensive range of dental services from general check-ups to advanced cosmetic procedures.",
    url: "https://www.dentalcare.com/services",
    websiteName: "DentalCare",
    websiteUrl: "https://www.dentalcare.com",
  };

  return (
    <>
      <SchemaMarkup type="WebPage" data={webPageSchema} />
      {/* Hero Section */}
      <section className={heroStyles.heroBackgroundSmall}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Dental Services</h1>
            <p className="text-xl text-blue-100">
              We offer a comprehensive range of dental services to meet the needs of your entire family, from routine check-ups to advanced cosmetic procedures.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900">Comprehensive Dental Care</h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              At DentalCare, we&apos;re committed to providing exceptional dental services in a comfortable environment. Our experienced team uses the latest technology to ensure you receive the best possible care.
            </p>
          </div>

          {/* Services List */}
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center scroll-mt-24`}
              >
                <div className="md:w-1/2">
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-3xl font-bold text-blue-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.fullDescription}</p>

                  <h4 className="text-xl font-semibold text-blue-700 mb-4">What We Offer:</h4>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/appointment"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    Book an Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Have Questions About Our Services?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our team is ready to answer any questions you may have about our dental services or to schedule your appointment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300"
            >
              Contact Us
            </Link>
            <Link
              href="/appointment"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition duration-300"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
