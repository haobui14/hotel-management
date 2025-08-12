"use client";

import {
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaCookie,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { MdSecurity, MdPrivacyTip, MdInfo } from "react-icons/md";

const Privacy = () => {
  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: MdInfo,
      content: [
        "Personal information such as name, email address, phone number, and billing address when you make a reservation",
        "Account information when you create a user profile on our website",
        "Payment information necessary to process your bookings (processed securely through third-party payment processors)",
        "Usage data and preferences to improve your experience with our services",
        "Communication records when you contact our customer service team",
      ],
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: FaUserShield,
      content: [
        "Process your hotel reservations and provide requested services",
        "Communicate with you about your bookings, account, and our services",
        "Personalize your experience and provide tailored recommendations",
        "Improve our website, services, and customer experience",
        "Send promotional materials and special offers (with your consent)",
        "Comply with legal obligations and protect our rights and property",
      ],
    },
    {
      id: "information-sharing",
      title: "Information Sharing",
      icon: FaShieldAlt,
      content: [
        "We do not sell, trade, or rent your personal information to third parties",
        "We may share information with trusted service providers who assist in operating our business",
        "Information may be disclosed when required by law or to protect our rights",
        "Anonymous, aggregated data may be used for analytical and marketing purposes",
        "In the event of a business transfer, user information may be transferred as part of the transaction",
      ],
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: FaLock,
      content: [
        "We implement industry-standard security measures to protect your personal information",
        "All payment transactions are processed through secure, encrypted connections",
        "Access to personal information is restricted to authorized personnel only",
        "Regular security audits and updates ensure our systems remain secure",
        "We use firewalls, encryption, and secure servers to safeguard your data",
      ],
    },
    {
      id: "cookies",
      title: "Cookies and Tracking",
      icon: FaCookie,
      content: [
        "We use cookies to enhance your browsing experience and remember your preferences",
        "Analytics cookies help us understand how visitors use our website",
        "Marketing cookies may be used to show you relevant advertisements",
        "You can control cookie preferences through your browser settings",
        "Essential cookies are necessary for basic website functionality",
      ],
    },
    {
      id: "user-rights",
      title: "Your Rights",
      icon: MdPrivacyTip,
      content: [
        "Access and review the personal information we have about you",
        "Request corrections or updates to your personal information",
        "Request deletion of your personal information (subject to legal requirements)",
        "Opt-out of marketing communications at any time",
        "Data portability - request a copy of your data in a machine-readable format",
        "Lodge complaints with relevant data protection authorities",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div>
            <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaShieldAlt className="text-white text-3xl" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we protect and handle
              your information.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Last Updated */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold">
            <MdSecurity />
            <span>Last updated: August 12, 2025</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/20 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Privacy{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Commitment
            </span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Luxury Hotel, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website, make reservations, or use
            our services. Please read this policy carefully to understand our
            practices regarding your personal data and how we will treat it.
          </p>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                  <section.icon className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {section.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-600 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact for Privacy */}
        <div className="mt-16 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-3xl p-12 text-center text-white shadow-2xl">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FaEnvelope className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Questions About Privacy?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            If you have any questions about this Privacy Policy or our data
            practices, please don&apos;t hesitate to contact us.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="mailto:privacy@luxuryhotel.com"
              className="flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <FaEnvelope />
              <span className="font-semibold">privacy@luxuryhotel.com</span>
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

        {/* Compliance Notice */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <div className="flex items-start space-x-4">
            <MdSecurity className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Compliance & Regulations
              </h3>
              <p className="text-blue-800 leading-relaxed">
                Our privacy practices comply with applicable data protection
                laws including GDPR, CCPA, and other regional privacy
                regulations. We regularly review and update our policies to
                ensure continued compliance and protection of your personal
                information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
