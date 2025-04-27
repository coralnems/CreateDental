"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Creative Smile Dental
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">
              About Us
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Contact
            </Link>
          </div>

          {/* Appointment Button (Desktop) */}
          <div className="hidden md:block">
            <Link href="/appointment" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition duration-300">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition duration-300">
                Services
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">
                About Us
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition duration-300">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition duration-300">
                Contact
              </Link>
              <Link href="/appointment" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 inline-block text-center">
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
