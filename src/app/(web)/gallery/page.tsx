"use client";

import { useState } from "react";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { MdClose } from "react-icons/md";

// Gallery images data
const galleryImages = [
  {
    id: 1,
    src: "/images/gallery-1.webp",
    alt: "Luxury Hotel Lobby",
    title: "Grand Lobby",
    description:
      "Our stunning grand lobby welcomes guests with marble floors and crystal chandeliers",
    category: "lobby",
  },
  {
    id: 2,
    src: "/images/gallery-2.webp",
    alt: "Luxury Hotel Room",
    title: "Executive Suite",
    description:
      "Spacious executive suites with panoramic city views and premium amenities",
    category: "rooms",
  },
  {
    id: 3,
    src: "/images/gallery-3.webp",
    alt: "Hotel Restaurant",
    title: "Fine Dining Restaurant",
    description: "Award-winning cuisine served in an elegant atmosphere",
    category: "dining",
  },
  {
    id: 4,
    src: "/images/hero-1.jpeg",
    alt: "Hotel Exterior",
    title: "Hotel Exterior",
    description: "Beautiful architectural design with modern luxury aesthetics",
    category: "exterior",
  },
  {
    id: 5,
    src: "/images/hero-2.jpeg",
    alt: "Spa & Wellness",
    title: "Luxury Spa",
    description: "Relax and rejuvenate in our world-class spa facilities",
    category: "spa",
  },
  {
    id: 6,
    src: "/images/hero-3.jpeg",
    alt: "Pool Area",
    title: "Rooftop Pool",
    description: "Infinity pool with breathtaking views of the city skyline",
    category: "amenities",
  },
];

const categories = [
  { id: "all", name: "All", count: galleryImages.length },
  {
    id: "lobby",
    name: "Lobby",
    count: galleryImages.filter((img) => img.category === "lobby").length,
  },
  {
    id: "rooms",
    name: "Rooms",
    count: galleryImages.filter((img) => img.category === "rooms").length,
  },
  {
    id: "dining",
    name: "Dining",
    count: galleryImages.filter((img) => img.category === "dining").length,
  },
  {
    id: "exterior",
    name: "Exterior",
    count: galleryImages.filter((img) => img.category === "exterior").length,
  },
  {
    id: "spa",
    name: "Spa",
    count: galleryImages.filter((img) => img.category === "spa").length,
  },
  {
    id: "amenities",
    name: "Amenities",
    count: galleryImages.filter((img) => img.category === "amenities").length,
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(
        (img) => img.id === selectedImage
      );
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(
        (img) => img.id === selectedImage
      );
      const prevIndex =
        currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
      setSelectedImage(filteredImages[prevIndex].id);
    }
  };

  const currentImage = selectedImage
    ? galleryImages.find((img) => img.id === selectedImage)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Gallery
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 max-w-2xl mx-auto">
              Discover the luxury and elegance that awaits you at our hotel
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Luxury Spaces
            </span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg scale-105 border-transparent"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-amber-50 hover:border-amber-300"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => openLightbox(image.id)}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {image.title}
                    </h3>
                    <p className="text-amber-100 text-sm">
                      {image.description}
                    </p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold capitalize">
                  {image.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-3xl shadow-lg border border-amber-100 p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">5 Star</h3>
              <p className="text-gray-600">Luxury Rating</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">200+</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Rooms</h3>
              <p className="text-gray-600">Luxury Suites</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">24/7</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Service</h3>
              <p className="text-gray-600">Concierge Available</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">10+</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Years</h3>
              <p className="text-gray-600">Excellence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && currentImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
            >
              <MdClose size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
            >
              <FaChevronLeft size={20} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
            >
              <FaChevronRight size={20} />
            </button>

            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
              <h3 className="text-white text-2xl font-bold mb-2">
                {currentImage.title}
              </h3>
              <p className="text-amber-100">{currentImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
