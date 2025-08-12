"use client";

import Image from "next/image";
import {
  FaStar,
  FaUsers,
  FaAward,
  FaHeart,
  FaShieldAlt,
  FaLeaf,
} from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const About = () => {
  const stats = [
    {
      icon: FaStar,
      number: "5",
      label: "Star Rating",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: FaUsers,
      number: "50K+",
      label: "Happy Guests",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: FaAward,
      number: "25+",
      label: "Awards Won",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FaHeart,
      number: "99%",
      label: "Satisfaction",
      color: "from-pink-500 to-red-500",
    },
  ];

  const values = [
    {
      icon: FaShieldAlt,
      title: "Trust & Security",
      description:
        "Your safety and security are our top priorities. We maintain the highest standards of service and protection.",
    },
    {
      icon: FaHeart,
      title: "Exceptional Service",
      description:
        "Our dedicated team goes above and beyond to ensure every guest feels welcomed and valued.",
    },
    {
      icon: FaLeaf,
      title: "Sustainability",
      description:
        "We're committed to environmental responsibility and sustainable luxury practices.",
    },
    {
      icon: FaAward,
      title: "Excellence",
      description:
        "We strive for perfection in every detail, from room amenities to dining experiences.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "General Manager",
      image: "/images/hero-1.jpeg",
      bio: "With over 15 years in luxury hospitality, Sarah leads our team with passion and dedication.",
    },
    {
      name: "Michael Chen",
      role: "Head Chef",
      image: "/images/hero-2.jpeg",
      bio: "Award-winning chef bringing innovative cuisine and exceptional dining experiences.",
    },
    {
      name: "Emily Rodriguez",
      role: "Concierge Director",
      image: "/images/hero-3.jpeg",
      bio: "Ensuring every guest request is handled with care and attention to detail.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About Our <span className="text-amber-200">Legacy</span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 leading-relaxed">
              Discover the story behind our luxury hotel and the passion that
              drives us to create unforgettable experiences for every guest.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Story Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">
                Our{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Story
                </span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in 2014, our luxury hotel has been a beacon of
                  elegance and hospitality in the heart of the city. What
                  started as a vision to create the perfect blend of modern
                  luxury and timeless comfort has evolved into a world-class
                  destination.
                </p>
                <p>
                  Our commitment to excellence is reflected in every detail,
                  from our meticulously designed rooms to our award-winning
                  dining experiences. We believe that luxury is not just about
                  premium amenities, but about creating meaningful connections
                  and unforgettable moments.
                </p>
                <p>
                  Today, we continue to set new standards in hospitality,
                  combining cutting-edge technology with personalized service to
                  exceed our guests&apos; expectations at every turn.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/gallery-1.webp"
                  alt="Hotel Interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl">
                <FaHeart className="text-white text-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20 bg-white rounded-3xl shadow-lg border border-amber-100 p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <stat.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            These core principles guide everything we do and shape the
            exceptional experiences we create.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Our passionate team of hospitality professionals is dedicated to
            making your stay extraordinary.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto text-amber-100">
            &ldquo;To create extraordinary experiences that exceed expectations,
            foster meaningful connections, and set the standard for luxury
            hospitality. Every guest is not just a visitor, but a valued member
            of our extended family.&rdquo;
          </p>
          <div className="mt-8 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full">
            <FaHeart className="text-amber-200" />
            <span className="font-semibold">
              Hospitality Excellence Since 2014
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
