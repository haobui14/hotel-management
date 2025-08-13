import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel Rooms & Suites | Luxury Accommodations & Premium Amenities",
  description:
    "Discover our collection of luxurious hotel rooms and suites. From cozy standard rooms to opulent presidential suites, each accommodation features premium amenities, elegant décor, and world-class service.",
  keywords: [
    "hotel rooms",
    "luxury suites",
    "premium accommodations",
    "room booking",
    "hotel amenities",
    "elegant rooms",
    "luxury hospitality",
  ],
  openGraph: {
    title: "Luxury Hotel Rooms & Suites",
    description:
      "Explore our premium hotel accommodations with world-class amenities",
    type: "website",
  },
};

export default function RoomsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
