"use client";

import { useState } from "react";
import {
  FaDumbbell,
  FaRunning,
  FaSwimmer,
  FaClock,
  FaPhone,
  FaCalendarAlt,
  FaUsers,
  FaHeart,
  FaChartLine,
} from "react-icons/fa";
import { GiMuscleUp, GiWeightLiftingUp, GiJumpingRope } from "react-icons/gi";
import { MdFitnessCenter, MdPool, MdSelfImprovement } from "react-icons/md";
import { IoMdBody } from "react-icons/io";

const Fitness = () => {
  const [activeSection, setActiveSection] = useState("equipment");

  const fitnessAreas = [
    {
      name: "Cardio Zone",
      description: "Premium cardio equipment with entertainment systems",
      equipment: [
        "Treadmills",
        "Ellipticals",
        "Stationary Bikes",
        "Rowing Machines",
      ],
      icon: FaRunning,
      color: "from-red-500 to-orange-600",
    },
    {
      name: "Strength Training",
      description: "Professional-grade strength equipment and free weights",
      equipment: [
        "Free Weights",
        "Cable Machines",
        "Smith Machine",
        "Power Racks",
      ],
      icon: GiWeightLiftingUp,
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "Functional Fitness",
      description: "Open space for functional movements and flexibility",
      equipment: [
        "TRX Systems",
        "Kettlebells",
        "Medicine Balls",
        "Resistance Bands",
      ],
      icon: GiJumpingRope,
      color: "from-green-500 to-teal-600",
    },
    {
      name: "Swimming Pool",
      description: "Olympic-sized pool for swimming and aqua fitness",
      equipment: ["Lap Lanes", "Aqua Equipment", "Pool Noodles", "Kickboards"],
      icon: FaSwimmer,
      color: "from-cyan-500 to-blue-600",
    },
  ];

  const personalTraining = [
    {
      name: "Personal Training Session",
      duration: "60 minutes",
      price: "$120",
      description: "One-on-one training with certified fitness professionals",
      benefits: [
        "Customized workout plan",
        "Proper form guidance",
        "Goal achievement",
        "Motivation",
      ],
    },
    {
      name: "Couples Training",
      duration: "60 minutes",
      price: "$180",
      description:
        "Partner workouts designed to motivate and challenge both participants",
      benefits: [
        "Shared fitness goals",
        "Partner motivation",
        "Fun workouts",
        "Relationship bonding",
      ],
    },
    {
      name: "Small Group Training",
      duration: "45 minutes",
      price: "$60 per person",
      description:
        "Semi-private sessions with 3-4 participants for social motivation",
      benefits: [
        "Cost-effective",
        "Social interaction",
        "Group motivation",
        "Varied workouts",
      ],
    },
    {
      name: "Fitness Assessment",
      duration: "45 minutes",
      price: "$80",
      description:
        "Comprehensive evaluation of your current fitness level and goals",
      benefits: [
        "Body composition analysis",
        "Fitness benchmarking",
        "Goal setting",
        "Program design",
      ],
    },
  ];

  const groupClasses = [
    {
      name: "High-Intensity Interval Training (HIIT)",
      time: "7:00 AM, 6:00 PM",
      duration: "45 minutes",
      level: "All Levels",
      description:
        "Dynamic workouts combining strength and cardio for maximum results",
    },
    {
      name: "Vinyasa Yoga",
      time: "8:00 AM, 7:00 PM",
      duration: "60 minutes",
      level: "Beginner to Advanced",
      description:
        "Flow-based yoga practice focusing on breath and movement connection",
    },
    {
      name: "Pilates Core",
      time: "9:00 AM, 5:00 PM",
      duration: "50 minutes",
      level: "All Levels",
      description:
        "Core-focused exercises to improve strength, flexibility, and posture",
    },
    {
      name: "Aqua Fitness",
      time: "10:00 AM, 4:00 PM",
      duration: "45 minutes",
      level: "All Levels",
      description:
        "Low-impact water-based exercises perfect for all fitness levels",
    },
    {
      name: "Strength & Conditioning",
      time: "6:30 AM, 5:30 PM",
      duration: "55 minutes",
      level: "Intermediate to Advanced",
      description:
        "Comprehensive strength training with progressive overload principles",
    },
    {
      name: "Meditation & Mindfulness",
      time: "7:30 AM, 8:00 PM",
      duration: "30 minutes",
      level: "All Levels",
      description:
        "Guided meditation sessions for mental wellness and stress relief",
    },
  ];

  const wellnessPrograms = [
    {
      name: "28-Day Transformation",
      duration: "4 weeks",
      price: "$480",
      includes: [
        "Personal training sessions",
        "Nutrition consultation",
        "Body composition tracking",
        "Meal planning",
      ],
      description:
        "Comprehensive program designed to jumpstart your fitness journey",
    },
    {
      name: "Executive Wellness",
      duration: "12 weeks",
      price: "$1200",
      includes: [
        "Flexible training schedule",
        "Stress management",
        "Executive health screening",
        "Lifestyle coaching",
      ],
      description:
        "Tailored program for busy professionals seeking optimal health",
    },
    {
      name: "Athletic Performance",
      duration: "8 weeks",
      price: "$800",
      includes: [
        "Sport-specific training",
        "Performance testing",
        "Recovery protocols",
        "Nutrition optimization",
      ],
      description: "Elite program for athletes looking to enhance performance",
    },
  ];

  const sections = [
    { id: "equipment", label: "Equipment & Facilities", icon: MdFitnessCenter },
    { id: "training", label: "Personal Training", icon: GiMuscleUp },
    { id: "classes", label: "Group Classes", icon: FaUsers },
    { id: "programs", label: "Wellness Programs", icon: FaChartLine },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 to-green-600 py-24 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaDumbbell className="text-white text-3xl" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Fitness Center
            </h1>
            <p className="text-xl md:text-2xl text-emerald-50 max-w-2xl mx-auto font-medium">
              State-of-the-art facilities and expert guidance for your wellness
              journey
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Fitness Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            {
              label: "Equipment Stations",
              value: "50+",
              icon: MdFitnessCenter,
            },
            { label: "Certified Trainers", value: "15", icon: IoMdBody },
            { label: "Group Classes", value: "25+", icon: FaUsers },
            { label: "Operating Hours", value: "5AM-11PM", icon: FaClock },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
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

        {/* Section Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center space-x-2 mx-2 mb-4 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:shadow-md"
              }`}
            >
              <section.icon className="text-lg" />
              <span>{section.label}</span>
            </button>
          ))}
        </div>

        {/* Equipment & Facilities */}
        {activeSection === "equipment" && (
          <div className="grid md:grid-cols-2 gap-8">
            {fitnessAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`bg-gradient-to-r ${area.color} p-8 text-white`}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center mr-4">
                      <area.icon className="text-white text-xl" />
                    </div>
                    <h3 className="text-2xl font-bold">{area.name}</h3>
                  </div>
                  <p className="text-lg opacity-90">{area.description}</p>
                </div>
                <div className="p-8">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4">
                    Available Equipment:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {area.equipment.map((item, eIndex) => (
                      <div
                        key={eIndex}
                        className="bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Personal Training */}
        {activeSection === "training" && (
          <div className="grid md:grid-cols-2 gap-8">
            {personalTraining.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {service.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {service.duration}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                    Benefits:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.benefits.map((benefit, bIndex) => (
                      <div
                        key={bIndex}
                        className="bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-2 rounded-lg text-sm"
                      >
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300">
                  Book Session
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Group Classes */}
        {activeSection === "classes" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groupClasses.map((classItem, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {classItem.name}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Times:
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {classItem.time}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Duration:
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {classItem.duration}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Level:
                    </span>
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      {classItem.level}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                  {classItem.description}
                </p>
                <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300">
                  Join Class
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Wellness Programs */}
        {activeSection === "programs" && (
          <div className="grid lg:grid-cols-3 gap-8">
            {wellnessPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {program.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {program.description}
                </p>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    {program.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {program.duration}
                  </span>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                    Program Includes:
                  </h4>
                  <ul className="space-y-2">
                    {program.includes.map((item, iIndex) => (
                      <li key={iIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300">
                  Start Program
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FaHeart className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Start Your Fitness Journey Today
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto font-medium">
            Join our fitness center and experience world-class facilities,
            expert guidance, and a supportive community
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
              <span className="font-semibold">Schedule Visit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitness;
