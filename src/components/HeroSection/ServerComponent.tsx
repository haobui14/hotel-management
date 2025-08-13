import Image from "next/image";

export const heading1 = (
  <div className="space-y-4 sm:space-y-6">
    <h1 className="font-heading mb-4 sm:mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-500 bg-clip-text text-transparent text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
      Discover Luxury Beyond Expectations
    </h1>
    <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 sm:mb-12 max-w-2xl leading-relaxed font-medium">
      Immerse yourself in unparalleled elegance and comfort. Experience
      world-class hospitality where every detail is crafted to perfection for
      your unforgettable stay.
    </p>
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl sm:rounded-2xl font-semibold hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base">
        Explore Rooms
      </button>
      <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-amber-600 text-amber-600 dark:border-amber-400 dark:text-amber-400 rounded-xl sm:rounded-2xl font-semibold hover:bg-amber-600 hover:text-white dark:hover:bg-amber-400 dark:hover:text-gray-900 transition-all duration-300 text-sm sm:text-base">
        Watch Virtual Tour
      </button>
    </div>
  </div>
);

export const section2 = (
  <div className="space-y-4 sm:space-y-6 lg:space-y-8 relative">
    <div className="rounded-2xl sm:rounded-3xl overflow-hidden h-48 sm:h-56 lg:h-64 shadow-2xl transform hover:scale-105 transition-transform duration-300">
      <Image
        src="/images/hero-1.jpeg"
        alt="Luxury hotel exterior with stunning architecture and landscaping"
        width={500}
        height={400}
        className="img scale-animation"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>

    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 h-32 sm:h-40 lg:h-48">
      <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
        <Image
          src="/images/hero-2.jpeg"
          alt="Elegant hotel interior with modern furnishings and ambient lighting"
          width={300}
          height={300}
          className="img scale-animation"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
          loading="lazy"
        />
      </div>
      <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
        <Image
          src="/images/hero-3.jpeg"
          alt="Luxurious hotel amenities including spa and premium facilities"
          width={300}
          height={300}
          className="img scale-animation"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
          loading="lazy"
        />
      </div>
    </div>

    {/* Decorative elements - hidden on mobile for cleaner look */}
    <div className="hidden lg:block absolute top-10 right-10 w-16 lg:w-20 h-16 lg:h-20 bg-amber-200 dark:bg-amber-800 rounded-full opacity-20"></div>
    <div className="hidden lg:block absolute bottom-20 left-10 w-24 lg:w-32 h-24 lg:h-32 bg-orange-200 dark:bg-orange-800 rounded-full opacity-20"></div>
  </div>
);
