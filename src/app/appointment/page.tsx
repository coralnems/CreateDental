import Link from "next/link";
import { Check } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import heroStyles from "@/styles/hero.module.css";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata = {
  title: "Book an Appointment | Creative Smile Dental - Easy Online Scheduling",
  description: "Schedule your dental appointment with Dr. Julio Perales and our experienced team at Creative Smile Dental. We offer convenient online booking for all our dental services.",
  keywords: "dental appointment, book dentist, schedule dental visit, dental booking, dental consultation, emergency dental appointment, Creative Smile Dental, Nuevo Progreso",
  alternates: {
    canonical: "https://www.creativesmiledental.com/appointment",
  },
  openGraph: {
    title: "Book an Appointment | Creative Smile Dental - Easy Online Scheduling",
    description: "Schedule your dental appointment with Dr. Julio Perales and our experienced team at Creative Smile Dental. We offer convenient online booking for all our dental services.",
    url: "https://www.creativesmiledental.com/appointment",
    type: "website",
    images: [
      {
        url: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg",
        width: 1200,
        height: 630,
        alt: "Creative Smile Dental Appointment Booking",
      },
    ],
  },
};

export default function AppointmentPage() {
  // FAQ schema data
  const faqSchema = {
    questions: [
      {
        question: "How early should I arrive for my appointment?",
        answer: "We recommend arriving 15 minutes before your scheduled appointment time, especially for new patients who may need to complete paperwork."
      },
      {
        question: "What should I bring to my first appointment?",
        answer: "Please bring your ID, insurance card, completed new patient forms (if you downloaded them), a list of current medications, and your dental history."
      },
      {
        question: "How do I reschedule or cancel an appointment?",
        answer: "You can reschedule or cancel your appointment by calling our office at +528999371049. We appreciate at least 24 hours&apos; notice for any changes."
      },
      {
        question: "Do you offer emergency dental services?",
        answer: "Yes, we provide emergency dental care. If you&apos;re experiencing a dental emergency, please call our office immediately, and we&apos;ll do our best to see you as soon as possible."
      }
    ]
  };

  return (
    <>
      <SchemaMarkup type="FAQPage" data={faqSchema} />
      {/* Hero Section */}
      <section className={heroStyles.heroBackgroundXSmall}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Appointment</h1>
            <p className="text-xl text-blue-100">
              Schedule your visit with our experienced dental team. We&apos;re here to help you achieve your best smile.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Booking Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Booking Form */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Schedule Your Visit</h2>

              {/* Interactive appointment booking form with calendar integration */}
              <AppointmentForm />
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* What to Expect */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Confirmation of your appointment within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Reminder call or text the day before your appointment</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Paperwork can be completed online before your visit</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Friendly staff to guide you through your visit</span>
                  </li>
                </ul>
              </div>

              {/* New Patient Information */}
              <div className="bg-blue-900 text-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">New Patient?</h3>
                <p className="mb-6">
                  First-time patients can save time by downloading and completing our new patient forms before their appointment.
                </p>
                <a
                  href="#"
                  className="block bg-white text-blue-900 text-center px-6 py-3 rounded-md hover:bg-blue-100 transition duration-300 mb-4"
                >
                  Download New Patient Forms
                </a>
                <p className="text-sm text-blue-200">
                  If you have any questions before your appointment, please don&apos;t hesitate to <Link href="/contact" className="underline hover:text-white">contact us</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Insurance & Payment Options</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We accept most major insurance plans and offer flexible payment options to make dental care accessible to all our patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
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

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Payment Options</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Cash</li>
                <li>Credit Cards (Visa, MasterCard, American Express, Discover)</li>
                <li>Personal Checks</li>
                <li>CareCredit Financing</li>
                <li>In-House Payment Plans</li>
              </ul>
              <p className="mt-4 text-gray-600">
                We&apos;re committed to helping you find the financial solution that works best for your budget. Ask our team about our financing options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about appointments at DentalCare.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">How early should I arrive for my appointment?</h3>
              <p className="text-gray-600">
                We recommend arriving 15 minutes before your scheduled appointment time, especially for new patients who may need to complete paperwork.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">What should I bring to my first appointment?</h3>
              <p className="text-gray-600">
                Please bring your ID, insurance card, completed new patient forms (if you downloaded them), a list of current medications, and your dental history.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">How do I reschedule or cancel an appointment?</h3>
              <p className="text-gray-600">
                You can reschedule or cancel your appointment by calling our office at +528999371049. We appreciate at least 24 hours&apos; notice for any changes.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Do you offer emergency dental services?</h3>
              <p className="text-gray-600">
                Yes, we provide emergency dental care. If you&apos;re experiencing a dental emergency, please call our office immediately, and we&apos;ll do our best to see you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
