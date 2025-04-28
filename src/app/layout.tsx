import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import ChatWidget from "@/components/WhatsAppChat";

export const metadata: Metadata = {
  title: "Creative Smile Dental - Professional Dental Services | Family & Cosmetic Dentistry",
  description: "Creative Smile Dental provides exceptional dental services for the whole family. From general check-ups to cosmetic procedures, our experienced team is here to help you achieve your best smile.",
  keywords: "dental care, dentist, dental clinic, family dentistry, cosmetic dentistry, dental implants, teeth whitening, orthodontics, emergency dental care",
  authors: [{ name: "Creative Smile Dental Team" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.creativesmiledental.com",
  },
  openGraph: {
    type: "website",
    url: "https://www.creativesmiledental.com",
    title: "Creative Smile Dental - Professional Dental Services | Family & Cosmetic Dentistry",
    description: "Creative Smile Dental provides exceptional dental services for the whole family. From general check-ups to cosmetic procedures, our experienced team is here to help you achieve your best smile.",
    siteName: "Creative Smile Dental",
    images: [
      {
        url: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg",
        width: 1200,
        height: 630,
        alt: "DentalCare Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Smile Dental - Professional Dental Services | Family & Cosmetic Dentistry",
    description: "Creative Smile Dental provides exceptional dental services for the whole family. From general check-ups to cosmetic procedures, our experienced team is here to help you achieve your best smile.",
    images: ["https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dentalClinicSchema = {
    name: "Creative Smile Dental",
    image: "https://images.pexels.com/photos/305566/pexels-photo-305566.jpeg",
    url: "https://www.creativesmiledental.com",
    telephone: "+528999371049",
    priceRange: "$$",
    address: {
      streetAddress: "326X+2H Nuevo Progreso",
      addressLocality: "Nuevo Progreso",
      addressRegion: "Tamaulipas",
      postalCode: "88810",
      addressCountry: "MX",
    },
    geo: {
      latitude: "26.0614",
      longitude: "-98.2783",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "00:00",
        closes: "00:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/creativesmiledental",
      "https://www.instagram.com/creativesmiledental",
      "https://julioperales.com",
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.creativesmiledental.com" />
        <SchemaMarkup type="DentalClinic" data={dentalClinicSchema} />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ChatWidget
          phoneNumber="+528999371049"
          telegramUsername="creativesmiledental"
          message="Hello Dr. Perales, I'd like to schedule an appointment at Creative Smile Dental. My name is: [Your Name]"
          autoOpen={true}
          autoOpenDelay={5000}
        />
      </body>
    </html>
  );
}
