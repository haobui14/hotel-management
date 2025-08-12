"use client";

import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import { MdEmail, MdPerson, MdMessage, MdLocationOn } from "react-icons/md";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Thank you! Your message has been sent successfully.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 max-w-2xl mx-auto">
              Get in touch with our luxury hotel team for reservations and
              inquiries
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Send us a{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Message
                </span>
              </h2>
              <p className="text-gray-600 text-lg">
                We&apos;d love to hear from you. Send us a message and
                we&apos;ll respond as soon as possible.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 space-y-6"
            >
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Full Name *
                  </label>
                  <div className="relative group">
                    <MdPerson
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 group-focus-within:text-amber-600 transition-colors"
                      size={20}
                    />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 hover:bg-gray-50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Email Address *
                  </label>
                  <div className="relative group">
                    <MdEmail
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 group-focus-within:text-amber-600 transition-colors"
                      size={20}
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 hover:bg-gray-50"
                    />
                  </div>
                </div>
              </div>

              {/* Phone and Subject Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Phone Number
                  </label>
                  <div className="relative group">
                    <FaPhone
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 group-focus-within:text-amber-600 transition-colors"
                      size={16}
                    />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 hover:bg-gray-50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 text-gray-900 hover:bg-gray-50"
                  >
                    <option value="">Select a subject</option>
                    <option value="reservation">Room Reservation</option>
                    <option value="event">Event Booking</option>
                    <option value="dining">Restaurant Inquiry</option>
                    <option value="spa">Spa Services</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Message *
                </label>
                <div className="relative group">
                  <MdMessage
                    className="absolute left-4 top-4 text-amber-500 group-focus-within:text-amber-600 transition-colors"
                    size={20}
                  />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message"
                    required
                    rows={6}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 hover:bg-gray-50 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-amber-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-xl"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    Sending Message...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <FaPaperPlane className="mr-3" />
                    Send Message
                  </div>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Get in{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Touch
                </span>
              </h2>
              <p className="text-gray-600 text-lg">
                Visit us or contact us through any of the following methods.
                We&apos;re here to make your stay unforgettable.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      123 Luxury Avenue
                      <br />
                      Golden District, City 12345
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-600 mb-1">
                      Main:{" "}
                      <a
                        href="tel:+1234567890"
                        className="text-amber-600 hover:text-amber-700 transition-colors"
                      >
                        +1 (234) 567-8900
                      </a>
                    </p>
                    <p className="text-gray-600">
                      Reservations:{" "}
                      <a
                        href="tel:+1234567891"
                        className="text-amber-600 hover:text-amber-700 transition-colors"
                      >
                        +1 (234) 567-8901
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Email
                    </h3>
                    <p className="text-gray-600 mb-1">
                      General:{" "}
                      <a
                        href="mailto:info@luxuryhotel.com"
                        className="text-amber-600 hover:text-amber-700 transition-colors"
                      >
                        info@luxuryhotel.com
                      </a>
                    </p>
                    <p className="text-gray-600">
                      Reservations:{" "}
                      <a
                        href="mailto:bookings@luxuryhotel.com"
                        className="text-amber-600 hover:text-amber-700 transition-colors"
                      >
                        bookings@luxuryhotel.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Hours
                    </h3>
                    <div className="text-gray-600">
                      <p className="mb-1">Front Desk: 24/7</p>
                      <p className="mb-1">Restaurant: 6:00 AM - 11:00 PM</p>
                      <p className="mb-1">Spa: 9:00 AM - 9:00 PM</p>
                      <p>Pool: 6:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Location</h3>
              <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MdLocationOn className="text-amber-600 text-6xl mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Interactive Map</p>
                  <p className="text-sm text-gray-500">
                    Map integration coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 bg-white rounded-3xl shadow-lg border border-amber-100 p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <FaCheckCircle className="text-amber-500 mr-3" />
                What are your check-in/check-out times?
              </h3>
              <p className="text-gray-600 mb-6">
                Check-in is at 3:00 PM and check-out is at 12:00 PM. Early
                check-in and late check-out are available upon request.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <FaCheckCircle className="text-amber-500 mr-3" />
                Do you offer airport transportation?
              </h3>
              <p className="text-gray-600 mb-6">
                Yes, we provide complimentary airport shuttle service. Please
                contact us to arrange pickup times.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <FaCheckCircle className="text-amber-500 mr-3" />
                What dining options are available?
              </h3>
              <p className="text-gray-600 mb-6">
                We have a fine dining restaurant, casual café, rooftop bar, and
                24-hour room service available.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <FaCheckCircle className="text-amber-500 mr-3" />
                What is your cancellation policy?
              </h3>
              <p className="text-gray-600 mb-6">
                Free cancellation up to 24 hours before check-in. Late
                cancellations may incur charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
