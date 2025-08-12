import Image from "next/image";

const Gallery = () => {
  const galleryImages = [
    { src: "/images/hero-1.jpeg", alt: "Elegant Hotel Lobby" },
    { src: "/images/hero-2.jpeg", alt: "Luxurious Suite Interior" },
    { src: "/images/hero-3.jpeg", alt: "Premium Amenities" },
    { src: "/images/gallery-1.webp", alt: "Spa & Wellness Center" },
    { src: "/images/gallery-2.webp", alt: "Fine Dining Restaurant" },
    { src: "/images/gallery-3.webp", alt: "Rooftop Pool Area" },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-16 sm:pb-20">
      <div className="text-center mb-10 sm:mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
          Experience Our Gallery
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto">
          Discover the beauty and elegance that awaits you
        </p>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 auto-rows-fr">
        {/* Large featured image */}
        <div className="sm:col-span-2 sm:row-span-2 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl group relative">
          <Image
            alt={galleryImages[0].alt}
            className="img scale-animation group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover"
            src={galleryImages[0].src}
            width={600}
            height={600}
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Top right images */}
        <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl group relative aspect-square">
          <Image
            alt={galleryImages[1].alt}
            className="img scale-animation group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover"
            src={galleryImages[1].src}
            width={300}
            height={300}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 25vw, 16vw"
            loading="lazy"
          />
        </div>
        <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl group relative aspect-square">
          <Image
            alt={galleryImages[2].alt}
            className="img scale-animation group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover"
            src={galleryImages[2].src}
            width={300}
            height={300}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 25vw, 16vw"
            loading="lazy"
          />
        </div>

        {/* Bottom right images */}
        <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl group relative aspect-square">
          <Image
            alt={galleryImages[3].alt}
            className="img scale-animation group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover"
            src={galleryImages[3].src}
            width={300}
            height={300}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 25vw, 16vw"
            loading="lazy"
          />
        </div>
        <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl group relative aspect-square">
          <Image
            alt={galleryImages[4].alt}
            className="img scale-animation group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover"
            src={galleryImages[4].src}
            width={300}
            height={300}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 25vw, 16vw"
            loading="lazy"
          />
        </div>
      </div>

      {/* View More Button */}
      <div className="text-center mt-8 sm:mt-10 lg:mt-12">
        <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
          View Complete Gallery
        </button>
      </div>
    </div>
  );
};

export default Gallery;
