import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | DentalCare",
  description: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
  robots: "noindex, nofollow",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="text-center px-6 py-16 max-w-2xl">
        <h1 className="text-6xl font-bold text-blue-900 mb-6">404</h1>
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Go to Homepage
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
