"use client";

import { useState } from "react";
import {
  FaConciergeBell,
  FaMapMarkerAlt,
  FaUtensils,
  FaTicketAlt,
  FaCar,
  FaPhone,
  FaStar,
  FaClock,
  FaHeart,
} from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { MdSpa } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

const Concierge = () => {
  const [activeService, setActiveService] = useState("dining");

  const conciergeServices = {
    dining: {
      title: "Dining & Reservations",
      icon: FaUtensils,
      services: [
        {
          name: "Restaurant Reservations",
          description: "Secure tables at the city's most exclusive restaurants",
          features: [
            "Hard-to-get reservations",
            "Michelin-starred establishments",
            "Private dining rooms",
            "Special occasion arrangements",
          ],
          price: "Complimentary",
        },
        {
          name: "In-Room Dining Curation",
          description:
            "Custom menus from top local restaurants delivered to your room",
          features: [
            "Celebrity chef partnerships",
            "Wine pairing recommendations",
            "Dietary accommodation",
            "Late-night options",
          ],
          price: "Menu pricing + delivery",
        },
        {
          name: "Culinary Experiences",
          description:
            "Exclusive food tours and cooking classes with renowned chefs",
          features: [
            "Private market tours",
            "Hands-on cooking classes",
            "Wine tastings",
            "Farm-to-table experiences",
          ],
          price: "$200 - $500 per person",
        },
      ],
    },
    entertainment: {
      title: "Entertainment & Culture",
      icon: FaTicketAlt,
      services: [
        {
          name: "Theater & Show Tickets",
          description:
            "Premium seats for Broadway shows, concerts, and cultural events",
          features: [
            "VIP seating",
            "Meet & greet opportunities",
            "Backstage tours",
            "Last-minute availability",
          ],
          price: "Face value + service fee",
        },
        {
          name: "Private Tours & Experiences",
          description:
            "Customized cultural experiences and behind-the-scenes access",
          features: [
            "Museum private tours",
            "Art gallery openings",
            "Historical site access",
            "Expert guides",
          ],
          price: "$300 - $1,000 per group",
        },
        {
          name: "Nightlife Access",
          description:
            "VIP access to exclusive clubs, lounges, and entertainment venues",
          features: [
            "Skip-the-line access",
            "VIP table reservations",
            "Bottle service arrangements",
            "Private party coordination",
          ],
          price: "Varies by venue",
        },
      ],
    },
    transportation: {
      title: "Transportation & Travel",
      icon: FaCar,
      services: [
        {
          name: "Luxury Transportation",
          description: "Premium vehicles for airport transfers and city travel",
          features: [
            "Luxury sedan service",
            "SUV and limousine options",
            "Professional chauffeurs",
            "24/7 availability",
          ],
          price: "$80 - $200 per hour",
        },
        {
          name: "Private Aviation",
          description: "Helicopter tours and private jet arrangements",
          features: [
            "Helicopter city tours",
            "Private jet bookings",
            "Airport fast-track services",
            "Custom flight planning",
          ],
          price: "$500 - $5,000+",
        },
        {
          name: "Yacht & Boat Charters",
          description: "Luxury water experiences and private boat rentals",
          features: [
            "Private yacht charters",
            "Sunset cruises",
            "Fishing expeditions",
            "Water sports equipment",
          ],
          price: "$1,000 - $10,000+ per day",
        },
      ],
    },
    shopping: {
      title: "Shopping & Personal Services",
      icon: GiShoppingBag,
      services: [
        {
          name: "Personal Shopping",
          description: "Expert stylists and personal shopping services",
          features: [
            "Fashion consultant",
            "Designer boutique access",
            "Personal wardrobe curation",
            "Size and preference coordination",
          ],
          price: "$150 per hour + purchases",
        },
        {
          name: "Gift & Flower Services",
          description:
            "Thoughtful gifts and floral arrangements for special occasions",
          features: [
            "Custom gift baskets",
            "Luxury flower arrangements",
            "Jewelry consultation",
            "Special occasion planning",
          ],
          price: "$50 - $500+",
        },
        {
          name: "Luxury Item Procurement",
          description: "Access to exclusive items and limited edition products",
          features: [
            "Designer handbags",
            "Luxury watches",
            "Rare collectibles",
            "Custom items",
          ],
          price: "Item cost + 15% service fee",
        },
      ],
    },
  };

  const serviceCategories = [
    { id: "dining", label: "Dining & Reservations", icon: FaUtensils },
    {
      id: "entertainment",
      label: "Entertainment & Culture",
      icon: FaTicketAlt,
    },
    { id: "transportation", label: "Transportation & Travel", icon: FaCar },
    {
      id: "shopping",
      label: "Shopping & Personal Services",
      icon: GiShoppingBag,
    },
  ];

  const specialExperiences = [
    {
      name: "VIP City Tour",
      description:
        "Exclusive access to the city's hidden gems with expert guide",
      duration: "4-6 hours",
      group: "Up to 6 people",
      includes: [
        "Private guide",
        "Luxury transportation",
        "Exclusive access",
        "Refreshments",
      ],
      price: "$800 per group",
      icon: FaMapMarkerAlt,
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "Romantic Evening Package",
      description: "Curated romantic experience for special occasions",
      duration: "Full evening",
      group: "Couples",
      includes: [
        "Private dining",
        "Rose petal setup",
        "Champagne service",
        "Professional photography",
      ],
      price: "$1,200 per couple",
      icon: FaHeart,
      color: "from-pink-500 to-rose-600",
    },
    {
      name: "Wellness Retreat Day",
      description: "Complete day of relaxation and rejuvenation",
      duration: "8 hours",
      group: "Individual or couple",
      includes: [
        "Spa treatments",
        "Yoga session",
        "Healthy cuisine",
        "Meditation guidance",
      ],
      price: "$600 per person",
      icon: MdSpa,
      color: "from-green-500 to-emerald-600",
    },
  ];

  const testimonials = [
    {
      guest: "Victoria Hamilton",
      service: "Anniversary Celebration",
      rating: 5,
      comment:
        "The concierge team made our 25th anniversary absolutely magical. Every detail was perfect!",
    },
    {
      guest: "James Robertson",
      service: "Business Travel",
      rating: 5,
      comment:
        "Exceptional service! They secured impossible restaurant reservations and arranged seamless transportation.",
    },
    {
      guest: "Marie & Pierre Dubois",
      service: "Honeymoon Experience",
      rating: 5,
      comment:
        "Our honeymoon was elevated beyond our dreams. The personal touches made it truly unforgettable.",
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
              <FaConciergeBell className="text-white text-3xl" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Concierge Services
            </h1>
            <p className="text-xl md:text-2xl text-indigo-50 max-w-2xl mx-auto font-medium">
              Personalized luxury assistance to make your stay extraordinary
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Concierge Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Concierge Team", value: "8", icon: IoMdPerson },
            { label: "Partner Venues", value: "200+", icon: FaMapMarkerAlt },
            { label: "Languages Spoken", value: "12", icon: FaConciergeBell },
            { label: "Available", value: "24/7", icon: FaClock },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3">
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

        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveService(category.id)}
                className={`flex items-center space-x-2 mx-2 mb-4 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeService === category.id
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:shadow-md"
                }`}
              >
                <category.icon className="text-lg" />
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Service Details */}
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {
                  conciergeServices[
                    activeService as keyof typeof conciergeServices
                  ].title
                }
              </h3>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {conciergeServices[
                activeService as keyof typeof conciergeServices
              ].services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                >
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.name}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <h5 className="font-bold text-gray-900 dark:text-white mb-3">
                      Features:
                    </h5>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Pricing:
                      </span>
                      <span className="font-bold text-indigo-600 dark:text-indigo-400">
                        {service.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Special Experiences */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Signature{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {specialExperiences.map((experience, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`bg-gradient-to-r ${experience.color} p-6 text-white`}
                >
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center mb-4">
                    <experience.icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{experience.name}</h3>
                  <p className="text-lg opacity-90">{experience.description}</p>
                </div>
                <div className="p-8">
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Duration:
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {experience.duration}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Group Size:
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {experience.group}
                      </span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                      Includes:
                    </h4>
                    <ul className="space-y-2">
                      {experience.includes.map((item, iIndex) => (
                        <li key={iIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {experience.price}
                    </span>
                    <button
                      className={`bg-gradient-to-r ${experience.color} text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300`}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guest Testimonials */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Guest{" "}
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="font-bold text-gray-900 dark:text-white">
                    {testimonial.guest}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.service}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Concierge */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FaConciergeBell className="text-white text-2xl animate-bounce" />
          </div>
          <h2 className="text-3xl font-bold mb-4">How May We Assist You?</h2>
          <p className="text-xl text-indigo-50 mb-8 max-w-2xl mx-auto font-medium">
            Our dedicated concierge team is available 24/7 to fulfill your every
            request and create unforgettable experiences
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <FaPhone />
              <span className="font-semibold">+1 (234) 567-8900</span>
            </a>

            <button className="flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105">
              <FaConciergeBell />
              <span className="font-semibold">Request Service</span>
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-indigo-100">
              Available 24/7 in the hotel lobby • Extension 0 from any room •
              concierge@luxuryhotel.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concierge;
