"use client";

import { useState } from "react";
import {
  FaHeadset,
  FaEnvelope,
  FaPhone,
  FaComments,
  FaClock,
  FaMapMarkerAlt,
  FaQuestionCircle,
  FaHandsHelping,
  FaUsers,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { MdLiveHelp, MdSupportAgent, MdContactSupport } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

const Support = () => {
  const [activeTab, setActiveTab] = useState("contact");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const supportOptions = [
    {
      id: "phone",
      title: "Phone Support",
      description: "Speak directly with our support specialists",
      icon: FaPhone,
      contact: "+1 (555) 123-4567",
      availability: "24/7 Available",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: "email",
      title: "Email Support",
      description: "Send us detailed questions and feedback",
      icon: FaEnvelope,
      contact: "support@luxuryhotel.com",
      availability: "Response within 2 hours",
      color: "from-orange-500 to-red-600",
    },
    {
      id: "live-chat",
      title: "Live Chat",
      description: "Instant messaging with our team",
      icon: FaComments,
      contact: "Start Chat Now",
      availability: "Available 24/7",
      color: "from-rose-500 to-pink-600",
    },
    {
      id: "concierge",
      title: "Concierge Desk",
      description: "In-person assistance during your stay",
      icon: RiCustomerService2Fill,
      contact: "Hotel Lobby",
      availability: "24 hours daily",
      color: "from-amber-500 to-orange-600",
    },
  ];

  const departments = [
    {
      name: "Reservations",
      description: "Booking assistance and modifications",
      extension: "ext. 1",
      hours: "24/7",
    },
    {
      name: "Guest Services",
      description: "In-room services and amenities",
      extension: "ext. 2",
      hours: "6:00 AM - 12:00 AM",
    },
    {
      name: "Concierge",
      description: "Local recommendations and arrangements",
      extension: "ext. 3",
      hours: "24/7",
    },
    {
      name: "Housekeeping",
      description: "Room cleaning and maintenance",
      extension: "ext. 4",
      hours: "8:00 AM - 10:00 PM",
    },
    {
      name: "Dining",
      description: "Restaurant reservations and room service",
      extension: "ext. 5",
      hours: "6:00 AM - 2:00 AM",
    },
    {
      name: "Spa & Wellness",
      description: "Spa bookings and wellness services",
      extension: "ext. 6",
      hours: "6:00 AM - 10:00 PM",
    },
  ];

  const faqData = [
    {
      question: "How can I modify or cancel my reservation?",
      answer:
        "You can modify or cancel your reservation up to 24 hours before check-in through our website, mobile app, or by calling our reservations team directly. Some special rate bookings may have different policies.",
    },
    {
      question: "What are your check-in and check-out times?",
      answer:
        "Standard check-in time is 3:00 PM and check-out time is 12:00 PM. Early check-in and late check-out may be available upon request and subject to availability.",
    },
    {
      question: "Do you offer airport transportation?",
      answer:
        "Yes, we provide luxury airport shuttle service. Please contact our concierge at least 24 hours in advance to arrange pickup. Additional charges may apply based on distance and vehicle type.",
    },
    {
      question: "What dining options are available?",
      answer:
        "We offer fine dining restaurants, casual cafes, room service, and special dietary accommodations. Our culinary team can cater to various dietary restrictions with advance notice.",
    },
    {
      question: "Are pets allowed at the hotel?",
      answer:
        "Yes, we welcome well-behaved pets in designated pet-friendly rooms. A pet fee applies, and advance notice is required. Please review our pet policy for complete details.",
    },
    {
      question: "What amenities are included in my stay?",
      answer:
        "All rooms include complimentary WiFi, fitness center access, and basic toiletries. Premium rooms may include additional amenities like spa access, premium dining credits, and concierge services.",
    },
  ];

  const tabs = [
    { id: "contact", label: "Contact Us", icon: MdContactSupport },
    { id: "departments", label: "Departments", icon: FaUsers },
    { id: "faq", label: "FAQ", icon: FaQuestionCircle },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-600 via-orange-600 to-red-500 py-24 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaHeadset className="text-white text-3xl" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Customer Support
            </h1>
            <p className="text-xl md:text-2xl text-amber-50 max-w-2xl mx-auto font-medium">
              We&apos;re here to help 24/7 with exceptional service and support
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Support Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Response Time", value: "< 2 mins", icon: FaClock },
            {
              label: "Satisfaction Rate",
              value: "99.8%",
              icon: FaHandsHelping,
            },
            { label: "Languages", value: "15+", icon: MdLiveHelp },
            { label: "Availability", value: "24/7", icon: MdSupportAgent },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="text-white text-xl" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 mx-2 mb-2 rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-600"
              }`}
            >
              <tab.icon className="text-lg" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Contact Us Tab */}
        {activeTab === "contact" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option) => (
              <div
                key={option.id}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 text-center group h-full flex flex-col"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <option.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm flex-grow min-h-[2.5rem] flex items-center justify-center">
                  {option.description}
                </p>
                <div className="space-y-2 mb-6">
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {option.contact}
                  </div>
                  <div className="text-sm text-green-600 dark:text-green-400">
                    {option.availability}
                  </div>
                </div>
                <button
                  className={`w-full bg-gradient-to-r ${option.color} text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 mt-auto`}
                >
                  Contact Now
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Departments Tab */}
        {activeTab === "departments" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {dept.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {dept.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Extension:
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {dept.extension}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Hours:
                    </span>
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      {dept.hours}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === "faq" && (
          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 rounded-2xl"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <FaChevronUp className="text-gray-500 dark:text-gray-400" />
                  ) : (
                    <FaChevronDown className="text-gray-500 dark:text-gray-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Emergency Contact */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FaPhone className="text-white text-2xl animate-pulse" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Emergency Support</h2>
          <p className="text-xl text-red-50 mb-8 max-w-2xl mx-auto font-medium">
            For urgent matters requiring immediate assistance, contact our
            emergency hotline
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a
              href="tel:+15551234567"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-xl px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              📞 Emergency: +1 (555) 911-HELP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
