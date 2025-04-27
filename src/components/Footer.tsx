import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Creative Smile Dental</h3>
            <p className="mb-4 text-blue-100">
              Providing exceptional dental care for the whole family. Our mission is to help you achieve and maintain optimal oral health.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/dentalwebtechs" className="text-white hover:text-blue-300 transition duration-300" title="Follow us on Facebook" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/dentalwebtechs" className="text-white hover:text-blue-300 transition duration-300" title="Follow us on Twitter" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com/dentalwebtechs" className="text-white hover:text-blue-300 transition duration-300" title="Follow us on Instagram" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com/company/dentalwebtechs" className="text-white hover:text-blue-300 transition duration-300" title="Connect with us on LinkedIn" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-100 hover:text-white transition duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#general" className="text-blue-100 hover:text-white transition duration-300">
                  General Dentistry
                </Link>
              </li>
              <li>
                <Link href="/services#cosmetic" className="text-blue-100 hover:text-white transition duration-300">
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link href="/services#orthodontics" className="text-blue-100 hover:text-white transition duration-300">
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link href="/services#pediatric" className="text-blue-100 hover:text-white transition duration-300">
                  Pediatric Dentistry
                </Link>
              </li>
              <li>
                <Link href="/services#implants" className="text-blue-100 hover:text-white transition duration-300">
                  Dental Implants
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>326X+2H Nuevo Progreso, Tamaulipas, 88810 Nuevo Progreso, Tamps., Mexico</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>+01-956-275-2492</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>info@dentalwebtechs.com</span>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Creative Smile Dental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
