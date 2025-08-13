"use client";

import { useState } from "react";
import {
  FaCalendarAlt,
  FaUsers,
  FaGem,
  FaHeart,
  FaBriefcase,
  FaGlassCheers,
  FaPhone,
  FaEnvelope,
  FaCrown,
  FaStar,
} from "react-icons/fa";
import { GiPartyFlags, GiBigDiamondRing, GiCakeSlice } from "react-icons/gi";
import { MdEvent, MdMeetingRoom, MdCorporateFare } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";

const Events = () => {
  const [activeVenue, setActiveVenue] = useState(0);

  const eventVenues = [
    {
      name: "Grand Ballroom",
      capacity: "300 guests",
      size: "4,500 sq ft",
      features: [
        "Crystal chandeliers",
        "Marble floors",
        "Built-in AV",
        "Dance floor",
      ],
      ideal: "Weddings, Galas, Large Celebrations",
      description:
        "Our crown jewel featuring soaring ceilings, elegant décor, and breathtaking city views.",
      layout: ["Theater: 300", "Banquet: 250", "Cocktail: 350", "U-Shape: 80"],
      image: "/images/ballroom.jpg",
      color: "from-amber-600 to-orange-600",
      pricing: "$5,000 - $15,000",
    },
    {
      name: "Executive Boardroom",
      capacity: "20 guests",
      size: "600 sq ft",
      features: [
        "Conference table",
        "Video conferencing",
        "Presentation screen",
        "Executive seating",
      ],
      ideal: "Board meetings, Executive retreats",
      description:
        "Sophisticated space designed for high-level corporate meetings and decision-making.",
      layout: ["Boardroom: 20", "U-Shape: 18", "Conference: 20"],
      image: "/images/boardroom.jpg",
      color: "from-blue-600 to-indigo-600",
      pricing: "$800 - $1,500",
    },
    {
      name: "Garden Pavilion",
      capacity: "150 guests",
      size: "2,000 sq ft",
      features: [
        "Outdoor terrace",
        "Garden views",
        "Retractable roof",
        "String lighting",
      ],
      ideal: "Garden parties, Cocktail receptions",
      description:
        "Charming outdoor venue surrounded by manicured gardens and natural beauty.",
      layout: ["Cocktail: 150", "Banquet: 120", "Theater: 100"],
      image: "/images/garden-pavilion.jpg",
      color: "from-green-600 to-emerald-600",
      pricing: "$3,000 - $8,000",
    },
    {
      name: "Intimate Salon",
      capacity: "50 guests",
      size: "800 sq ft",
      features: [
        "Fireplace",
        "Private bar",
        "Elegant furnishings",
        "Natural light",
      ],
      ideal: "Private dinners, Small celebrations",
      description:
        "Cozy and elegant space perfect for intimate gatherings and private events.",
      layout: ["Reception: 50", "Banquet: 40", "Theater: 45"],
      image: "/images/salon.jpg",
      color: "from-purple-600 to-pink-600",
      pricing: "$1,200 - $3,500",
    },
  ];

  const eventTypes = [
    {
      name: "Luxury Weddings",
      icon: FaHeart,
      description: "Create your dream wedding with our expert planning team",
      services: [
        "Bridal suite",
        "Floral arrangements",
        "Photography",
        "Custom catering",
      ],
      starting: "$15,000",
      color: "from-pink-500 to-rose-600",
    },
    {
      name: "Corporate Events",
      icon: FaBriefcase,
      description: "Professional meetings and corporate gatherings",
      services: [
        "AV equipment",
        "Catering options",
        "Event coordination",
        "Tech support",
      ],
      starting: "$2,500",
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "Social Celebrations",
      icon: GiPartyFlags,
      description: "Birthdays, anniversaries, and milestone celebrations",
      services: [
        "Custom decorations",
        "Entertainment",
        "Specialty cakes",
        "Photography",
      ],
      starting: "$5,000",
      color: "from-purple-500 to-indigo-600",
    },
    {
      name: "Galas & Fundraisers",
      icon: FaCrown,
      description: "Elegant charity events and formal gatherings",
      services: [
        "Silent auctions",
        "Live entertainment",
        "Formal dining",
        "VIP services",
      ],
      starting: "$8,000",
      color: "from-amber-500 to-orange-600",
    },
  ];

  const planningServices = [
    {
      service: "Full Event Planning",
      description: "Complete event management from concept to execution",
      includes: [
        "Venue coordination",
        "Vendor management",
        "Timeline creation",
        "Day-of coordination",
      ],
    },
    {
      service: "Catering Services",
      description: "Exquisite culinary experiences tailored to your event",
      includes: [
        "Custom menus",
        "Dietary accommodations",
        "Wine pairings",
        "Service staff",
      ],
    },
    {
      service: "Audio Visual Support",
      description: "Professional AV equipment and technical assistance",
      includes: [
        "Sound systems",
        "Projection screens",
        "Lighting design",
        "Technical support",
      ],
    },
    {
      service: "Décor & Florals",
      description: "Beautiful arrangements and event styling",
      includes: [
        "Floral centerpieces",
        "Linens & tableware",
        "Lighting design",
        "Custom decorations",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah & Michael Chen",
      event: "Wedding Reception",
      rating: 5,
      comment:
        "Our wedding at the Grand Ballroom was absolutely magical. The team exceeded every expectation!",
    },
    {
      name: "GlobalTech Corporation",
      event: "Annual Conference",
      rating: 5,
      comment:
        "Professional service and flawless execution. The Executive Boardroom was perfect for our board meeting.",
    },
    {
      name: "Emma Rodriguez",
      event: "50th Birthday Celebration",
      rating: 5,
      comment:
        "The Garden Pavilion provided the perfect setting for my celebration. Guests are still talking about it!",
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
              <MdEvent className="text-white text-3xl" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Event Spaces
            </h1>
            <p className="text-xl md:text-2xl text-amber-50 max-w-2xl mx-auto font-medium">
              Luxury venues and exceptional service for unforgettable occasions
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Event Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Event Spaces", value: "8", icon: MdMeetingRoom },
            { label: "Max Capacity", value: "350", icon: FaUsers },
            { label: "Events Hosted", value: "500+", icon: MdEvent },
            { label: "Planning Team", value: "12", icon: IoMdPeople },
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

        {/* Venue Showcase */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Venues
            </span>
          </h2>

          {/* Venue Selection */}
          <div className="flex flex-wrap justify-center mb-12">
            {eventVenues.map((venue, index) => (
              <button
                key={index}
                onClick={() => setActiveVenue(index)}
                className={`mx-2 mb-4 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeVenue === index
                    ? `bg-gradient-to-r ${venue.color} text-white shadow-lg`
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:shadow-md"
                }`}
              >
                {venue.name}
              </button>
            ))}
          </div>

          {/* Active Venue Details */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div
                className={`bg-gradient-to-br ${eventVenues[activeVenue].color} p-8 lg:p-12 text-white`}
              >
                <div className="h-full flex flex-col justify-center">
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                    {eventVenues[activeVenue].name}
                  </h3>
                  <p className="text-lg opacity-90 mb-6 leading-relaxed">
                    {eventVenues[activeVenue].description}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <FaUsers className="text-lg" />
                      <span>Capacity: {eventVenues[activeVenue].capacity}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaGem className="text-lg" />
                      <span>Size: {eventVenues[activeVenue].size}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaGlassCheers className="text-lg" />
                      <span>Starting: {eventVenues[activeVenue].pricing}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                      Ideal For:
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {eventVenues[activeVenue].ideal}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                      Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {eventVenues[activeVenue].features.map(
                        (feature, fIndex) => (
                          <div
                            key={fIndex}
                            className="bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-lg text-sm"
                          >
                            {feature}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                      Layout Options:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {eventVenues[activeVenue].layout.map((layout, lIndex) => (
                        <div
                          key={lIndex}
                          className="bg-amber-50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-3 py-2 rounded-lg text-sm"
                        >
                          {layout}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    className={`w-full bg-gradient-to-r ${eventVenues[activeVenue].color} text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all duration-300`}
                  >
                    <FaCalendarAlt className="inline-block mr-2" />
                    Check Availability
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Types */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Event{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Specialties
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {eventTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <type.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {type.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {type.description}
                </p>
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                    Services Include:
                  </h4>
                  <ul className="space-y-2">
                    {type.services.map((service, sIndex) => (
                      <li key={sIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {service}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    Starting {type.starting}
                  </span>
                  <button
                    className={`bg-gradient-to-r ${type.color} text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Planning Services */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Planning{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {planningServices.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.service}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.includes.map((item, iIndex) => (
                    <li key={iIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Client{" "}
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
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.event}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact for Events */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FaCalendarAlt className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Event?</h2>
          <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto font-medium">
            Let our expert event planning team help you create an unforgettable
            experience
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <FaPhone />
              <span className="font-semibold">+1 (234) 567-8900</span>
            </a>

            <a
              href="mailto:events@luxuryhotel.com"
              className="flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <FaEnvelope />
              <span className="font-semibold">events@luxuryhotel.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
