import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery | Luxury Hotel Images & Virtual Tour",
  description:
    "Explore our stunning photo gallery showcasing elegant hotel interiors, luxurious rooms, fine dining restaurants, spa facilities, and beautiful amenities. Take a virtual tour of our premium hospitality experience.",
  keywords: [
    "hotel gallery",
    "luxury hotel photos",
    "hotel images",
    "virtual tour",
    "hotel interiors",
    "elegant rooms",
    "dining restaurant",
    "spa facilities",
    "premium amenities",
  ],
  openGraph: {
    title: "Luxury Hotel Photo Gallery",
    description:
      "Discover our elegant spaces through our comprehensive photo gallery",
    type: "website",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
