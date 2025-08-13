import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Luxury Hotel Management Story & Excellence",
  description:
    "Discover our story of luxury hospitality excellence. Learn about our award-winning hotel, dedicated team, premium amenities, and commitment to providing world-class service and unforgettable experiences.",
  keywords: [
    "about luxury hotel",
    "hotel story",
    "hospitality excellence",
    "award-winning hotel",
    "luxury service",
    "hotel management",
    "premium hospitality",
    "hotel team",
  ],
  openGraph: {
    title: "About Luxury Hotel Management",
    description: "Discover our story of excellence in luxury hospitality",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
