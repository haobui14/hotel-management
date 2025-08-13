"use client";

import { useState } from "react";
import {
  FaSpa,
  FaLeaf,
  FaHeart,
  FaClock,
  FaPhone,
  FaCalendarAlt,
  FaGem,
  FaUsers,
  FaWater,
} from "react-icons/fa";
import { GiFlowers, GiLotusFlower } from "react-icons/gi";
import { MdSpa, MdLocalFlorist, MdSelfImprovement } from "react-icons/md";

const Spa = () => {
  const [activeCategory, setActiveCategory] = useState("massage");

  const treatmentCategories = [
    { id: "massage", label: "Massage Therapy", icon: FaSpa },
    { id: "facial", label: "Facial Treatments", icon: GiFlowers },
    { id: "body", label: "Body Treatments", icon: MdSpa },
    { id: "wellness", label: "Wellness Programs", icon: MdSelfImprovement },
  ];

  const treatments = {
    massage: [
      {
        name: "Signature Swedish Massage",
        duration: "60/90 minutes",
        price: "$180/$240",
        description:
          "Classic relaxation massage using long, flowing strokes to ease tension and promote deep relaxation.",
        benefits: [
          "Stress relief",
          "Improved circulation",
          "Muscle relaxation",
          "Better sleep",
        ],
      },
      {
        name: "Deep Tissue Massage",
        duration: "75/90 minutes",
        price: "$200/$260",
        description:
          "Therapeutic massage targeting deep muscle layers to release chronic tension and knots.",
        benefits: [
          "Pain relief",
          "Improved mobility",
          "Reduced inflammation",
          "Athletic recovery",
        ],
      },
      {
        name: "Hot Stone Therapy",
        duration: "90 minutes",
        price: "$280",
        description:
          "Luxurious treatment combining heated basalt stones with massage techniques for ultimate relaxation.",
        benefits: [
          "Deep muscle relaxation",
          "Improved circulation",
          "Stress reduction",
          "Mental clarity",
        ],
      },
      {
        name: "Couples Massage",
        duration: "60/90 minutes",
        price: "$380/$480",
        description:
          "Intimate spa experience for two in our private couples suite with champagne service.",
        benefits: [
          "Shared relaxation",
          "Bonding experience",
          "Romantic ambiance",
          "Stress relief for both",
        ],
      },
    ],
    facial: [
      {
        name: "Luxury Anti-Aging Facial",
        duration: "75 minutes",
        price: "$220",
        description:
          "Advanced treatment using premium skincare products to reduce signs of aging and restore radiance.",
        benefits: [
          "Reduced fine lines",
          "Improved skin texture",
          "Increased firmness",
          "Glowing complexion",
        ],
      },
      {
        name: "Hydrating Botanical Facial",
        duration: "60 minutes",
        price: "$160",
        description:
          "Nourishing facial using organic botanical extracts to deeply hydrate and revitalize skin.",
        benefits: [
          "Deep hydration",
          "Natural glow",
          "Skin barrier repair",
          "Antioxidant protection",
        ],
      },
      {
        name: "Gentleman's Facial",
        duration: "60 minutes",
        price: "$140",
        description:
          "Tailored facial treatment designed specifically for men's skin needs and concerns.",
        benefits: [
          "Deep cleansing",
          "Razor burn relief",
          "Oil control",
          "Skin conditioning",
        ],
      },
      {
        name: "Express Glow Facial",
        duration: "30 minutes",
        price: "$90",
        description:
          "Quick yet effective treatment perfect for busy schedules, delivering instant radiance.",
        benefits: [
          "Instant glow",
          "Quick refresher",
          "Skin brightening",
          "Minimal downtime",
        ],
      },
    ],
    body: [
      {
        name: "Himalayan Salt Body Scrub",
        duration: "45 minutes",
        price: "$150",
        description:
          "Exfoliating treatment using pink Himalayan salt to reveal smooth, glowing skin.",
        benefits: [
          "Smooth skin",
          "Improved texture",
          "Detoxification",
          "Increased circulation",
        ],
      },
      {
        name: "Aromatherapy Body Wrap",
        duration: "60 minutes",
        price: "$190",
        description:
          "Therapeutic wrap treatment using essential oils to detoxify and nourish the skin.",
        benefits: [
          "Detoxification",
          "Skin nourishment",
          "Stress relief",
          "Improved skin tone",
        ],
      },
      {
        name: "Gold Radiance Treatment",
        duration: "90 minutes",
        price: "$350",
        description:
          "Luxurious full-body treatment featuring 24k gold-infused products for ultimate indulgence.",
        benefits: [
          "Anti-aging effects",
          "Skin brightening",
          "Luxury experience",
          "Increased firmness",
        ],
      },
      {
        name: "Detox Mud Wrap",
        duration: "75 minutes",
        price: "$220",
        description:
          "Purifying treatment using mineral-rich mud to draw out toxins and refine skin texture.",
        benefits: [
          "Deep detoxification",
          "Pore refinement",
          "Skin purification",
          "Mineral nourishment",
        ],
      },
    ],
    wellness: [
      {
        name: "Meditation & Mindfulness Session",
        duration: "45 minutes",
        price: "$80",
        description:
          "Guided meditation session in our tranquil wellness pavilion for mental clarity and peace.",
        benefits: [
          "Stress reduction",
          "Mental clarity",
          "Emotional balance",
          "Improved focus",
        ],
      },
      {
        name: "Yoga & Stretching Class",
        duration: "60 minutes",
        price: "$60",
        description:
          "Personalized yoga session focusing on flexibility, strength, and inner harmony.",
        benefits: [
          "Increased flexibility",
          "Better posture",
          "Stress relief",
          "Mind-body connection",
        ],
      },
      {
        name: "Wellness Consultation",
        duration: "30 minutes",
        price: "$100",
        description:
          "One-on-one consultation with our wellness expert to create a personalized health plan.",
        benefits: [
          "Personalized guidance",
          "Goal setting",
          "Health optimization",
          "Lifestyle improvement",
        ],
      },
      {
        name: "Sound Healing Therapy",
        duration: "60 minutes",
        price: "$120",
        description:
          "Therapeutic session using sound bowls and frequencies to promote deep relaxation and healing.",
        benefits: [
          "Deep relaxation",
          "Energy alignment",
          "Stress relief",
          "Spiritual wellness",
        ],
      },
    ],
  };

  const spaFacilities = [
    {
      name: "Relaxation Lounge",
      description: "Peaceful area with comfortable seating and herbal teas",
      icon: GiLotusFlower,
      color: "from-purple-500 to-pink-600",
    },
    {
      name: "Steam Room",
      description: "Eucalyptus-infused steam room for detoxification",
      icon: FaWater,
      color: "from-blue-500 to-cyan-600",
    },
    {
      name: "Vitality Pool",
      description: "Hydrotherapy pool with therapeutic jets",
      icon: MdSpa,
      color: "from-teal-500 to-blue-600",
    },
    {
      name: "Couples Suites",
      description: "Private treatment rooms for intimate experiences",
      icon: FaUsers,
      color: "from-rose-500 to-pink-600",
    },
    {
      name: "Meditation Garden",
      description: "Outdoor sanctuary for reflection and peace",
      icon: MdLocalFlorist,
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Wellness Boutique",
      description: "Premium skincare and wellness products",
      icon: FaGem,
      color: "from-amber-500 to-orange-600",
    },
  ];

  const spaPackages = [
    {
      name: "Ultimate Relaxation Day",
      duration: "4 hours",
      price: "$450",
      includes: [
        "90-min massage",
        "Facial treatment",
        "Body scrub",
        "Lunch",
        "Facility access",
      ],
      description: "Complete day of pampering and relaxation",
    },
    {
      name: "Couples Retreat",
      duration: "3 hours",
      price: "$650",
      includes: [
        "Couples massage",
        "Private suite",
        "Champagne",
        "Light refreshments",
        "Rose petal bath",
      ],
      description: "Romantic spa experience for two",
    },
    {
      name: "Bridal Bliss Package",
      duration: "5 hours",
      price: "$550",
      includes: [
        "Bridal facial",
        "Manicure/Pedicure",
        "Hair styling",
        "Makeup touch-up",
        "Bridal suite",
      ],
      description: "Perfect preparation for your special day",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-rose-500 to-pink-600 py-24 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaSpa className="text-white text-3xl" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Spa & Wellness
            </h1>
            <p className="text-xl md:text-2xl text-rose-50 max-w-2xl mx-auto font-medium">
              Indulge in ultimate relaxation and rejuvenation at our world-class
              spa
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Spa Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Treatment Rooms", value: "12", icon: MdSpa },
            { label: "Expert Therapists", value: "20+", icon: FaUsers },
            { label: "Operating Hours", value: "6AM-10PM", icon: FaClock },
            { label: "Wellness Programs", value: "8", icon: MdSelfImprovement },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3">
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

        {/* Treatment Categories */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Spa{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Treatments
            </span>
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            {treatmentCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 mx-2 mb-4 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:shadow-md"
                }`}
              >
                <category.icon className="text-lg" />
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Treatment List */}
          <div className="grid md:grid-cols-2 gap-8">
            {treatments[activeCategory as keyof typeof treatments].map(
              (treatment, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {treatment.name}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        {treatment.price}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {treatment.duration}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {treatment.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                      Benefits:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {treatment.benefits.map((benefit, bIndex) => (
                        <div
                          key={bIndex}
                          className="bg-purple-50 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-3 py-2 rounded-lg text-sm"
                        >
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300">
                    Book Treatment
                  </button>
                </div>
              )
            )}
          </div>
        </div>

        {/* Spa Facilities */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Luxury{" "}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Facilities
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaFacilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 text-center shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${facility.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <facility.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {facility.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Spa Packages */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Signature{" "}
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Packages
            </span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {spaPackages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {pkg.description}
                </p>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-bold text-rose-600 dark:text-rose-400">
                    {pkg.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {pkg.duration}
                  </span>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                    Package Includes:
                  </h4>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, iIndex) => (
                      <li key={iIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300">
                  Book Package
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Section */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FaCalendarAlt className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Ready to Relax?</h2>
          <p className="text-xl text-purple-50 mb-8 max-w-2xl mx-auto font-medium">
            Book your spa experience today and embark on a journey of ultimate
            relaxation and rejuvenation
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
              <FaCalendarAlt />
              <span className="font-semibold">Book Online</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spa;
