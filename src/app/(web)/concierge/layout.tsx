import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concierge Services | Personalized Luxury Assistance",
  description:
    "Experience exceptional concierge services at our luxury hotel. From restaurant reservations to exclusive experiences, our dedicated team ensures your every need is met.",
  keywords: [
    "concierge services",
    "personal assistant",
    "luxury concierge",
    "hotel services",
    "restaurant reservations",
    "tour bookings",
    "transportation",
    "exclusive experiences",
    "24/7 service",
    "VIP assistance",
  ],
  openGraph: {
    title: "Concierge Services | Personalized Luxury Assistance",
    description:
      "Experience exceptional concierge services at our luxury hotel. From restaurant reservations to exclusive experiences, our dedicated team ensures your every need is met.",
    type: "website",
  },
};

export default function ConciergeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
