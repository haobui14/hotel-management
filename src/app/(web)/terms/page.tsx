"use client";

import {
  FaGavel,
  FaHandshake,
  FaShieldAlt,
  FaCreditCard,
  FaCalendarAlt,
  FaExclamationTriangle,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { MdPolicy, MdSecurity, MdInfo } from "react-icons/md";

const Terms = () => {
  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: FaHandshake,
      content: [
        "By accessing and using our website or services, you accept and agree to be bound by the terms and provision of this agreement.",
        "These Terms of Service constitute a legally binding agreement made between you and Luxury Hotel Management.",
        "If you do not agree to abide by the above, please do not use our services.",
        "We reserve the right to update and modify these terms at any time without prior notice.",
      ],
    },
    {
      id: "booking-policy",
      title: "Booking & Reservation Policy",
      icon: FaCalendarAlt,
      content: [
        "All reservations are subject to room availability and confirmation from our reservation team.",
        "A valid credit card is required to secure your reservation, even if payment is made by other means upon arrival.",
        "Room rates are subject to applicable taxes and may vary based on dates, availability, and booking method.",
        "Special requests (such as room location, bed type, or accessibility features) cannot be guaranteed but will be accommodated when possible.",
        "Check-in time is 3:00 PM and check-out time is 12:00 PM unless otherwise arranged.",
      ],
    },
    {
      id: "payment-terms",
      title: "Payment Terms & Conditions",
      icon: FaCreditCard,
      content: [
        "Payment is due at the time of booking or upon check-in, as specified in your reservation.",
        "We accept major credit cards, debit cards, and cash (subject to local regulations).",
        "All charges are in USD unless otherwise specified at the time of booking.",
        "Additional charges may apply for services such as room service, spa treatments, dining, or other amenities.",
        "Incidental charges will be authorized on your credit card upon check-in.",
      ],
    },
    {
      id: "cancellation",
      title: "Cancellation & Refund Policy",
      icon: FaExclamationTriangle,
      content: [
        "Standard reservations may be cancelled up to 24 hours before arrival without penalty.",
        "Special rate reservations may have different cancellation policies, which will be clearly stated at booking.",
        "No-shows will be charged for the full stay unless prior arrangements have been made.",
        "Refunds for cancelled reservations will be processed within 7-10 business days.",
        "During peak seasons or special events, stricter cancellation policies may apply.",
      ],
    },
    {
      id: "guest-conduct",
      title: "Guest Conduct & Responsibilities",
      icon: FaShieldAlt,
      content: [
        "Guests are expected to conduct themselves in a respectful manner towards other guests, staff, and property.",
        "Smoking is prohibited in all indoor areas. Designated smoking areas are available outdoors.",
        "Pets are allowed in designated pet-friendly rooms only, subject to additional fees and policies.",
        "Guests are responsible for any damages to hotel property during their stay.",
        "The hotel reserves the right to refuse service or remove guests who violate these terms.",
      ],
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: FaGavel,
      content: [
        "The hotel's liability is limited to the total amount paid by the guest for their stay.",
        "We are not responsible for loss, theft, or damage to personal belongings left in guest rooms or public areas.",
        "Guests are advised to use in-room safes or hotel safe deposit boxes for valuables.",
        "The hotel is not liable for any indirect, consequential, or punitive damages.",
        "Force majeure events may necessitate changes to reservations without liability to the hotel.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary via-teal-600 to-primary py-24 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaGavel className="text-white text-3xl" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-teal-50 max-w-2xl mx-auto font-medium">
              Legal terms and conditions for using our luxury hotel services
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Last Updated */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-teal-50 dark:bg-teal-900 text-teal-900 dark:text-teal-100 px-4 py-2 rounded-full text-sm font-semibold border border-teal-200 dark:border-teal-700">
            <MdSecurity />
            <span>Last updated: August 13, 2025</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Legal{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Agreement
            </span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Welcome to Luxury Hotel Management. These Terms of Service govern
            your use of our website, booking services, and hotel accommodations.
            By making a reservation or using our services, you agree to comply
            with and be bound by these terms and conditions. Please read them
            carefully before proceeding with your booking.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                  <section.icon className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {section.title}
                </h3>
              </div>{" "}
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 border border-red-200 dark:border-red-700 rounded-2xl p-8">
          <div className="flex items-start space-x-4">
            <FaExclamationTriangle className="text-red-600 dark:text-red-400 text-2xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mb-2">
                Important Notice
              </h3>
              <p className="text-red-800 dark:text-red-200 leading-relaxed">
                These terms are subject to change without notice. It is your
                responsibility to review these terms periodically for updates.
                Continued use of our services after changes constitutes
                acceptance of the modified terms. For questions about these
                terms, please contact our legal department.
              </p>
            </div>
          </div>
        </div>

        {/* Contact for Legal Issues */}
        <div className="mt-12 bg-gradient-to-r from-primary via-teal-600 to-primary rounded-3xl p-12 text-center text-white shadow-2xl">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FaEnvelope className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Legal Questions?</h2>
          <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto font-medium">
            If you have questions about these terms or need legal clarification,
            our legal team is here to help.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="mailto:legal@luxuryhotel.com"
              className="flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <FaEnvelope />
              <span className="font-semibold">legal@luxuryhotel.com</span>
            </a>

            <a
              href="tel:+1234567890"
              className="flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <FaPhone />
              <span className="font-semibold">+1 (234) 567-8900</span>
            </a>
          </div>
        </div>

        {/* Governing Law */}
        <div className="mt-12 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
          <div className="flex items-start space-x-4">
            <MdPolicy className="text-gray-600 dark:text-gray-400 text-2xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                Governing Law
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                These Terms of Service are governed by and construed in
                accordance with the laws of [State/Country], without regard to
                conflict of law principles. Any disputes arising from these
                terms shall be subject to the exclusive jurisdiction of the
                courts in [Jurisdiction].
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
