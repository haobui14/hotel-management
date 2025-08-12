import FeaturedRoom from "@/components/FeaturedRoom/FeaturedRoom";
import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/HeroSection/HeroSection";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import PageSearch from "@/components/PageSearch/PageSearch";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import { getFeaturedRoom } from "@/libs/apis";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Luxury Hotel Management | Premium Accommodations & World-Class Service",
  description:
    "Experience unparalleled luxury at our premium hotel. Discover elegant rooms, world-class amenities, fine dining, spa services, and exceptional hospitality in the heart of the city.",
  keywords: [
    "luxury hotel",
    "premium accommodations",
    "hotel booking",
    "fine dining",
    "spa services",
    "business center",
    "valet service",
    "concierge",
  ],
  openGraph: {
    title:
      "Luxury Hotel Management | Premium Accommodations & World-Class Service",
    description:
      "Experience unparalleled luxury at our premium hotel. Discover elegant rooms, world-class amenities, fine dining, spa services, and exceptional hospitality.",
    images: [
      {
        url: "/images/hero-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Luxury Hotel Exterior View",
      },
    ],
  },
};

const Home = async () => {
  const featuredRoom = await getFeaturedRoom();

  return (
    <main className="min-h-screen">
      {/* Hero Section with warm gradient */}
      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100 dark:from-gray-900 dark:to-gray-800">
        <HeroSection />
      </section>

      {/* Search Section with better visual separation */}
      <section className="relative -mt-16 z-10 bg-gray-50 dark:bg-gray-900 pb-8">
        <PageSearch />
      </section>

      {/* Featured Room Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <FeaturedRoom featuredRoom={featuredRoom} />
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <Gallery />
      </section>

      {/* Newsletter Section with warm gradient that complements the page */}
      <section className="py-20 bg-gradient-to-r from-amber-600 via-orange-600 to-red-500">
        <NewsLetter />
      </section>
    </main>
  );
};

export default Home;
