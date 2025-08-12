import Link from "next/link";
import { BiMessageDetail } from "react-icons/bi";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="text-2xl sm:text-3xl font-black text-amber-400 mb-4 sm:mb-6 block"
            >
              Luxury Hotel
            </Link>
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Experience unparalleled luxury and comfort in our world-class
              hotel. Creating memorable moments for discerning travelers since
              1995.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-amber-500 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
              >
                <FaFacebookF className="text-white text-sm sm:text-base" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-amber-500 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
              >
                <FaTwitter className="text-white text-sm sm:text-base" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-amber-500 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
              >
                <FaInstagram className="text-white text-sm sm:text-base" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-amber-500 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
              >
                <FaLinkedinIn className="text-white text-sm sm:text-base" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-amber-400 mb-4 sm:mb-6">
              Contact Info
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <BsFillSendFill className="text-amber-400 mt-1 mr-3 flex-shrink-0 text-sm sm:text-base" />
                <div>
                  <p className="text-gray-300 text-sm sm:text-base">
                    123 Luxury Avenue
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Downtown, City 12345
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <BsTelephoneOutbound className="text-amber-400 mr-3 flex-shrink-0 text-sm sm:text-base" />
                <p className="text-gray-300 text-sm sm:text-base">
                  +1 (555) 123-4567
                </p>
              </div>
              <div className="flex items-center">
                <BiMessageDetail className="text-amber-400 mr-3 flex-shrink-0 text-sm sm:text-base" />
                <p className="text-gray-300 text-sm sm:text-base break-all sm:break-normal">
                  reservations@luxuryhotel.com
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-amber-400 mb-4 sm:mb-6">
              Quick Links
            </h4>
            <div className="space-y-2 sm:space-y-3">
              <Link
                href="/about"
                className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base"
              >
                Our Story
              </Link>
              <Link
                href="/contact"
                className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base"
              >
                Get in Touch
              </Link>
              <Link
                href="/privacy"
                className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base"
              >
                Terms of Service
              </Link>
              <Link
                href="/support"
                className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base"
              >
                Customer Support
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-amber-400 mb-4 sm:mb-6">
              Our Services
            </h4>
            <div className="space-y-2 sm:space-y-3">
              <Link
                href="/dining"
                className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base"
              >
                Fine Dining
              </Link>
              <Link
                href="/spa"
                className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base"
              >
                Spa & Wellness
              </Link>
              <Link
                href="/fitness"
                className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base"
              >
                Fitness Center
              </Link>
              <Link
                href="/events"
                className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base"
              >
                Event Spaces
              </Link>
              <Link
                href="/concierge"
                className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base"
              >
                Concierge Services
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h5 className="text-lg sm:text-xl font-semibold text-amber-400 mb-2">
                Stay Updated
              </h5>
              <p className="text-gray-300 text-sm sm:text-base">
                Subscribe to receive exclusive offers and updates
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md lg:max-w-none lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-sm sm:text-base"
              />
              <button className="px-4 sm:px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 whitespace-nowrap text-sm sm:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © 2025 Luxury Hotel. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
