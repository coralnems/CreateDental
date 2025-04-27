import ContactForm from "@/components/ContactForm";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import heroStyles from "@/styles/hero.module.css";

export const metadata = {
  title: "Contact Us | DentalCare - Schedule Your Dental Appointment",
  description: "Get in touch with our dental team. We're here to answer your questions, address your concerns, and schedule your dental appointment.",
  keywords: "dental contact, dental appointment, dental clinic location, dental office hours, dental insurance, dental payment options",
  alternates: {
    canonical: "https://www.dentalcare.com/contact",
  },
  openGraph: {
    title: "Contact Us | DentalCare - Schedule Your Dental Appointment",
    description: "Get in touch with our dental team. We're here to answer your questions, address your concerns, and schedule your dental appointment.",
    url: "https://www.dentalcare.com/contact",
    type: "website",
    images: [
      {
        url: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg",
        width: 1200,
        height: 630,
        alt: "DentalCare Contact",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={heroStyles.heroBackgroundXSmall}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-blue-100">
              We're here to answer your questions and help you schedule your appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services or want to schedule an appointment? Contact us using the information below or fill out the form, and our team will get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MapPin size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-1">Our Location</h3>
                    <p className="text-gray-600">326X+2H Nuevo Progreso</p>
                    <p className="text-gray-600">Tamaulipas, 88810 Nuevo Progreso, Mexico</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Phone size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-1">Phone</h3>
                    <p className="text-gray-600">+01-956-275-2492</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-1">Email</h3>
                    <p className="text-gray-600">julioperales77@yahoo.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Clock size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-1">Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Sunday: 8:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Find Us</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're conveniently located in Nuevo Progreso, Tamaulipas, Mexico, just across the border from Progreso, Texas. Our clinic is easily accessible with ample parking nearby.
            </p>
          </div>

          <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.7023246141396!2d-98.27830182394826!3d26.061400097772193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866505e1b0f0e2c1%3A0x9e426df8a3a0d5e1!2sCreative%20Smile%20Dental!5e0!3m2!1sen!2sus!4v1718824531121!5m2!1sen!2sus"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              title="Creative Smile Dental Location Map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Insurance & Payment Options</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We accept most major insurance plans and offer flexible payment options to make dental care accessible to all our patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Accepted Insurance Plans</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Delta Dental</li>
                <li>Cigna</li>
                <li>Aetna</li>
                <li>MetLife</li>
                <li>Guardian</li>
                <li>United Healthcare</li>
                <li>Blue Cross Blue Shield</li>
                <li>And many more...</li>
              </ul>
              <p className="mt-4 text-gray-600">
                Please contact our office to verify your specific insurance coverage.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Payment Options</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Cash</li>
                <li>Credit Cards (Visa, MasterCard, American Express, Discover)</li>
                <li>Personal Checks</li>
                <li>CareCredit Financing</li>
                <li>In-House Payment Plans</li>
              </ul>
              <p className="mt-4 text-gray-600">
                We're committed to helping you find the financial solution that works best for your budget. Ask our team about our financing options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
