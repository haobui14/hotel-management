"use client";

import { useState } from "react";
import {
  FaUtensils,
  FaWineGlass,
  FaClock,
  FaStar,
  FaMapMarkerAlt,
  FaPhone,
  FaCalendarAlt,
  FaConciergeBell,
  FaHeart,
  FaFire,
  FaLeaf,
} from "react-icons/fa";
import { GiChefToque, GiWineBottle, GiCakeSlice } from "react-icons/gi";
import { MdRestaurant, MdRoom, MdLocalBar } from "react-icons/md";

const Dining = () => {
  const [activeRestaurant, setActiveRestaurant] = useState(0);

  const restaurants = [
    {
      name: "Le Jardin",
      type: "Fine Dining",
      cuisine: "French Contemporary",
      description:
        "Experience the pinnacle of culinary artistry with our Michelin-starred French cuisine, featuring seasonal ingredients and innovative techniques.",
      chef: "Chef Marcel Dubois",
      rating: 5,
      priceRange: "$$$$",
      hours: "6:00 PM - 11:00 PM",
      reservations: "Required",
      dress: "Formal",
      specialties: [
        "Truffle-infused dishes",
        "Seasonal tasting menus",
        "Artisanal cheese selection",
        "Premium wine pairings",
      ],
      ambiance: "Elegant & Intimate",
      capacity: "60 seats",
      features: ["Private dining", "Chef's table", "Wine cellar"],
      image: "/images/restaurant-fine.jpg",
      color: "from-amber-600 to-orange-600",
    },
    {
      name: "Azure Terrace",
      type: "Rooftop Dining",
      cuisine: "Mediterranean Fusion",
      description:
        "Dine under the stars with panoramic city views while enjoying fresh Mediterranean flavors with modern twists.",
      chef: "Chef Elena Rosso",
      rating: 4.8,
      priceRange: "$$$",
      hours: "5:30 PM - 12:00 AM",
      reservations: "Recommended",
      dress: "Smart Casual",
      specialties: [
        "Fresh seafood",
        "Grilled specialties",
        "Craft cocktails",
        "Sunset dining",
      ],
      ambiance: "Romantic & Scenic",
      capacity: "120 seats",
      features: ["Outdoor terrace", "Bar seating", "Live music"],
      image: "/images/restaurant-rooftop.jpg",
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "The Hearth",
      type: "Casual Dining",
      cuisine: "Modern American",
      description:
        "A warm, inviting space serving comfort food elevated with gourmet touches and locally-sourced ingredients.",
      chef: "Chef David Thompson",
      rating: 4.6,
      priceRange: "$$",
      hours: "7:00 AM - 10:00 PM",
      reservations: "Walk-ins Welcome",
      dress: "Casual",
      specialties: [
        "Farm-to-table cuisine",
        "Artisanal burgers",
        "Craft beer selection",
        "Homemade desserts",
      ],
      ambiance: "Cozy & Relaxed",
      capacity: "150 seats",
      features: ["All-day dining", "Family-friendly", "Outdoor patio"],
      image: "/images/restaurant-casual.jpg",
      color: "from-green-600 to-emerald-600",
    },
    {
      name: "Sakura",
      type: "Sushi & Japanese",
      cuisine: "Authentic Japanese",
      description:
        "Traditional Japanese dining experience featuring the freshest sashimi, expertly crafted sushi, and authentic kaiseki meals.",
      chef: "Chef Takeshi Yamamoto",
      rating: 4.9,
      priceRange: "$$$",
      hours: "6:00 PM - 10:30 PM",
      reservations: "Required",
      dress: "Smart Casual",
      specialties: [
        "Omakase experience",
        "Premium sashimi",
        "Traditional kaiseki",
        "Sake pairings",
      ],
      ambiance: "Zen & Authentic",
      capacity: "40 seats",
      features: ["Sushi counter", "Tatami rooms", "Sake bar"],
      image: "/images/restaurant-japanese.jpg",
      color: "from-red-600 to-pink-600",
    },
  ];

  const diningExperiences = [
    {
      title: "Chef's Table Experience",
      description: "Intimate 8-course tasting menu with wine pairings",
      price: "$295 per person",
      duration: "3-4 hours",
      icon: GiChefToque,
      color: "from-purple-600 to-indigo-600",
    },
    {
      title: "Wine Cellar Dinner",
      description: "Private dining in our temperature-controlled wine cellar",
      price: "$450 per person",
      duration: "4 hours",
      icon: GiWineBottle,
      color: "from-red-600 to-rose-600",
    },
    {
      title: "Room Service Luxury",
      description: "24/7 gourmet dining delivered to your suite",
      price: "Menu pricing + service",
      duration: "Available 24/7",
      icon: MdRoom,
      color: "from-amber-600 to-orange-600",
    },
    {
      title: "Private Chef Service",
      description: "Personal chef for intimate celebrations",
      price: "$800 per event",
      duration: "4 hours",
      icon: FaConciergeBell,
      color: "from-green-600 to-teal-600",
    },
  ];

  const dietaryOptions = [
    {
      name: "Vegetarian",
      icon: FaLeaf,
      description: "Plant-based options available at all venues",
    },
    {
      name: "Vegan",
      icon: FaHeart,
      description: "Dedicated vegan menus with creative dishes",
    },
    {
      name: "Gluten-Free",
      icon: FaFire,
      description: "Carefully prepared gluten-free alternatives",
    },
    {
      name: "Keto/Low-Carb",
      icon: FaUtensils,
      description: "High-protein, low-carb meal options",
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
              <FaUtensils className="text-white text-3xl" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Fine Dining
            </h1>
            <p className="text-xl md:text-2xl text-amber-50 max-w-2xl mx-auto font-medium">
              Exquisite culinary experiences crafted by world-renowned chefs
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Restaurant Selection */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Restaurants
            </span>
          </h2>

          {/* Restaurant Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            {restaurants.map((restaurant, index) => (
              <button
                key={index}
                onClick={() => setActiveRestaurant(index)}
                className={`mx-2 mb-4 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeRestaurant === index
                    ? `bg-gradient-to-r ${restaurant.color} text-white shadow-lg`
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:shadow-md"
                }`}
              >
                {restaurant.name}
              </button>
            ))}
          </div>

          {/* Active Restaurant Details */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Restaurant Image */}
              <div
                className={`bg-gradient-to-br ${restaurants[activeRestaurant].color} p-8 lg:p-12 text-white`}
              >
                <div className="h-full flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="inline-block bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      {restaurants[activeRestaurant].type}
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-2">
                      {restaurants[activeRestaurant].name}
                    </h3>
                    <p className="text-xl opacity-90 mb-4">
                      {restaurants[activeRestaurant].cuisine}
                    </p>
                    <div className="flex items-center space-x-2 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-lg ${
                            i < Math.floor(restaurants[activeRestaurant].rating)
                              ? "text-yellow-300"
                              : "text-white/30"
                          }`}
                        />
                      ))}
                      <span className="font-semibold ml-2">
                        {restaurants[activeRestaurant].rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-lg opacity-90 leading-relaxed">
                    {restaurants[activeRestaurant].description}
                  </p>
                </div>
              </div>

              {/* Restaurant Info */}
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  {/* Chef Info */}
                  <div className="flex items-center space-x-3">
                    <GiChefToque className="text-2xl text-amber-600" />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {restaurants[activeRestaurant].chef}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Executive Chef
                      </div>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-center space-x-3">
                    <FaClock className="text-2xl text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {restaurants[activeRestaurant].hours}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Operating Hours
                      </div>
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl text-green-600">$</span>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {restaurants[activeRestaurant].priceRange}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Price Range
                      </div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                      Signature Specialties
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {restaurants[activeRestaurant].specialties.map(
                        (specialty, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-lg text-sm"
                          >
                            {specialty}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Reservation Button */}
                  <button
                    className={`w-full bg-gradient-to-r ${restaurants[activeRestaurant].color} text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    <FaCalendarAlt className="inline-block mr-2" />
                    Make Reservation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Dining Experiences */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Exclusive{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {diningExperiences.map((experience, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${experience.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <experience.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {experience.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {experience.description}
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">
                      Price:
                    </span>
                    <span className="font-bold text-gray-900 dark:text-white">
                      {experience.price}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">
                      Duration:
                    </span>
                    <span className="font-bold text-gray-900 dark:text-white">
                      {experience.duration}
                    </span>
                  </div>
                </div>
                <button
                  className={`w-full bg-gradient-to-r ${experience.color} text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300`}
                >
                  Reserve Experience
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Dietary Accommodations */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Dietary{" "}
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Accommodations
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dietaryOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <option.icon className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {option.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact for Reservations */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FaPhone className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Ready to Dine?</h2>
          <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto font-medium">
            Contact our dining reservations team to secure your table at any of
            our exceptional restaurants
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
              href="mailto:dining@luxuryhotel.com"
              className="flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <MdRestaurant />
              <span className="font-semibold">dining@luxuryhotel.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dining;
