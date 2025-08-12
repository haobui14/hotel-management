"use client";

import { FC } from "react";

const ServicesSection: FC = () => {
  const services = [
    {
      icon: "🏊‍♀️",
      title: "Pool & Spa",
      description:
        "Relax and rejuvenate in our world-class spa and infinity pool with stunning city views.",
    },
    {
      icon: "🍽️",
      title: "Fine Dining",
      description:
        "Experience culinary excellence with our award-winning restaurants and 24/7 room service.",
    },
    {
      icon: "🚗",
      title: "Valet Service",
      description:
        "Complimentary valet parking and concierge service to make your stay effortless.",
    },
    {
      icon: "🏋️‍♂️",
      title: "Fitness Center",
      description:
        "State-of-the-art fitness facilities and personal training available 24/7.",
    },
    {
      icon: "💼",
      title: "Business Center",
      description:
        "Fully equipped business center and meeting rooms for your professional needs.",
    },
    {
      icon: "🛎️",
      title: "Concierge",
      description:
        "Our dedicated concierge team is here to assist with all your local needs and reservations.",
    },
  ];

  return (
    <section className="py-16 pb-8 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Premium Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Discover our comprehensive range of luxury amenities and services
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-gray-300 dark:border-gray-600 hover:border-amber-400 dark:hover:border-amber-400 hover:bg-white dark:hover:bg-gray-700 relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-6 flex justify-start">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to experience luxury like never before?
          </p>
          <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Book Your Stay Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
