"use client";

import { useState } from "react";
import {
  FaCookie,
  FaShieldAlt,
  FaCog,
  FaChartBar,
  FaUser,
  FaToggleOn,
  FaToggleOff,
  FaInfoCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { MdSecurity, MdAnalytics, MdPerson } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

const Cookies = () => {
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
    preferences: true,
  });

  const handleToggle = (type: string) => {
    if (type === "necessary") return; // Cannot disable necessary cookies
    setCookieSettings((prev) => ({
      ...prev,
      [type]: !prev[type as keyof typeof prev],
    }));
  };

  const cookieTypes = [
    {
      id: "necessary",
      name: "Necessary Cookies",
      description:
        "Essential for the website to function properly. These cookies enable basic features like page navigation and access to secure areas.",
      examples: [
        "Session management",
        "Security authentication",
        "Load balancing",
        "Form submission data",
      ],
      canDisable: false,
      icon: FaShieldAlt,
      color: "from-green-500 to-emerald-600",
      duration: "Session or up to 1 year",
    },
    {
      id: "analytics",
      name: "Analytics Cookies",
      description:
        "Help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      examples: [
        "Page views and traffic sources",
        "Time spent on pages",
        "Click tracking",
        "Error reporting",
      ],
      canDisable: true,
      icon: FaChartBar,
      color: "from-blue-500 to-indigo-600",
      duration: "Up to 2 years",
    },
    {
      id: "marketing",
      name: "Marketing Cookies",
      description:
        "Used to track visitors across websites to display relevant advertisements and marketing content.",
      examples: [
        "Ad personalization",
        "Retargeting campaigns",
        "Social media integration",
        "Third-party advertising",
      ],
      canDisable: true,
      icon: MdPerson,
      color: "from-purple-500 to-pink-600",
      duration: "Up to 1 year",
    },
    {
      id: "preferences",
      name: "Preference Cookies",
      description:
        "Remember your choices and preferences to provide a more personalized experience.",
      examples: [
        "Language preferences",
        "Theme settings",
        "Layout preferences",
        "Accessibility settings",
      ],
      canDisable: true,
      icon: FaCog,
      color: "from-amber-500 to-orange-600",
      duration: "Up to 1 year",
    },
  ];

  const thirdPartyServices = [
    {
      service: "Google Analytics",
      purpose: "Website analytics and performance monitoring",
      cookiesUsed: "_ga, _gid, _gat",
      optOut: "https://tools.google.com/dlpage/gaoptout",
    },
    {
      service: "Stripe",
      purpose: "Payment processing and fraud prevention",
      cookiesUsed: "__stripe_mid, __stripe_sid",
      optOut: "Required for payment functionality",
    },
    {
      service: "Sanity CMS",
      purpose: "Content management and delivery",
      cookiesUsed: "sanity-session, sanity-csrf",
      optOut: "Essential for content delivery",
    },
    {
      service: "Vercel",
      purpose: "Website hosting and performance optimization",
      cookiesUsed: "__vercel_live_token",
      optOut: "Essential for website functionality",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 py-24 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaCookie className="text-white text-3xl" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Cookie Policy
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 max-w-2xl mx-auto font-medium">
              How we use cookies to enhance your browsing experience
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Last Updated */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-700">
            <FaInfoCircle />
            <span>Last updated: August 13, 2025</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            What Are{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Cookies?
            </span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Cookies are small text files that are stored on your device when you
            visit our website. They help us provide you with a better browsing
            experience by remembering your preferences, improving site
            performance, and enabling certain functionalities.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            We use both session cookies (which expire when you close your
            browser) and persistent cookies (which remain on your device for a
            specified period). You have full control over which cookies you
            accept through your browser settings and our cookie preference
            center below.
          </p>
        </div>

        {/* Cookie Settings */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Cookie{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Settings
            </span>
          </h2>

          <div className="space-y-6">
            {cookieTypes.map((type) => (
              <div
                key={type.id}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center`}
                    >
                      <type.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {type.name}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <span>Duration: {type.duration}</span>
                        {!type.canDisable && (
                          <>
                            <span>•</span>
                            <span className="text-green-600 dark:text-green-400 font-semibold">
                              Always Active
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleToggle(type.id)}
                    disabled={!type.canDisable}
                    className={`text-3xl transition-colors duration-200 ${
                      type.canDisable
                        ? "hover:scale-110 cursor-pointer"
                        : "cursor-not-allowed opacity-50"
                    }`}
                  >
                    {cookieSettings[type.id as keyof typeof cookieSettings] ? (
                      <FaToggleOn
                        className={`${type.canDisable ? "text-green-500" : "text-gray-400"}`}
                      />
                    ) : (
                      <FaToggleOff className="text-gray-400" />
                    )}
                  </button>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {type.description}
                </p>

                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                    Examples:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {type.examples.map((example, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-xl text-sm text-gray-700 dark:text-gray-300"
                      >
                        • {example}
                      </div>
                    ))}
                  </div>
                </div>

                {!type.canDisable && (
                  <div className="mt-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-2xl p-4">
                    <div className="flex items-center space-x-2">
                      <FaShieldAlt className="text-green-600 dark:text-green-400" />
                      <span className="text-green-800 dark:text-green-200 text-sm font-semibold">
                        These cookies are essential for the website to function
                        and cannot be disabled.
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Save Settings Button */}
          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              <IoMdSettings className="inline-block mr-2" />
              Save Cookie Preferences
            </button>
          </div>
        </div>

        {/* Third-Party Services */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Third-Party{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {thirdPartyServices.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.service}
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Purpose:{" "}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {service.purpose}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Cookies Used:{" "}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 font-mono text-sm">
                      {service.cookiesUsed}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Opt-out:{" "}
                    </span>
                    {service.optOut.startsWith("http") ? (
                      <a
                        href={service.optOut}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        Available here
                      </a>
                    ) : (
                      <span className="text-gray-700 dark:text-gray-300">
                        {service.optOut}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Managing Cookies */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 border border-amber-200 dark:border-amber-700 rounded-3xl p-8 mb-12">
          <div className="flex items-start space-x-4">
            <FaExclamationTriangle className="text-amber-600 dark:text-amber-400 text-2xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-4">
                Managing Your Cookie Preferences
              </h3>
              <div className="space-y-4 text-amber-800 dark:text-amber-200 leading-relaxed">
                <p>
                  <strong>Browser Settings:</strong> You can control cookies
                  through your browser settings. Most browsers allow you to
                  block or delete cookies, though this may affect website
                  functionality.
                </p>
                <p>
                  <strong>Opt-out Tools:</strong> Many advertising networks
                  provide opt-out tools for targeted advertising. Visit the
                  Digital Advertising Alliance's opt-out page for more
                  information.
                </p>
                <p>
                  <strong>Mobile Devices:</strong> Mobile devices may have
                  additional privacy settings for apps and browsers. Check your
                  device settings for cookie and tracking preferences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Protection */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "GDPR Compliance",
              description:
                "We comply with EU data protection regulations and respect your privacy rights.",
              icon: MdSecurity,
            },
            {
              title: "Data Minimization",
              description:
                "We only collect and process data that is necessary for our services.",
              icon: FaShieldAlt,
            },
            {
              title: "Transparent Control",
              description:
                "You have full control over your cookie preferences and can change them anytime.",
              icon: FaCog,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 text-center shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <item.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FaUser className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Questions About Our Cookie Policy?
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto font-medium">
            If you have any questions about our use of cookies or data privacy
            practices, please don't hesitate to contact us.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="mailto:privacy@luxuryhotel.com"
              className="flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <MdSecurity />
              <span className="font-semibold">privacy@luxuryhotel.com</span>
            </a>

            <a
              href="/terms"
              className="flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <FaInfoCircle />
              <span className="font-semibold">Terms of Service</span>
            </a>
          </div>

          <div className="mt-8 text-center">
            <p className="text-blue-100 text-sm">
              This cookie policy is part of our comprehensive privacy policy and
              terms of service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
