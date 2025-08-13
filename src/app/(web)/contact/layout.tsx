import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with Luxury Hotel Management",
  description:
    "Contact our luxury hotel for reservations, inquiries, and exceptional service. Reach us by phone, email, or visit our location. Our concierge team is available 24/7 to assist with your hospitality needs.",
  keywords: [
    "contact hotel",
    "hotel reservations",
    "customer service",
    "hotel inquiries",
    "concierge service",
    "hotel location",
    "24/7 support",
    "luxury hospitality",
  ],
  openGraph: {
    title: "Contact Luxury Hotel Management",
    description:
      "Get in touch for reservations and exceptional hospitality service",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
