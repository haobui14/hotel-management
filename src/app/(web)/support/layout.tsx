import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Support | Get Help & Assistance",
  description:
    "Get exceptional customer support for your luxury hotel experience. Contact our dedicated support team 24/7 for assistance with reservations, services, and any questions.",
  keywords: [
    "customer support",
    "hotel assistance",
    "help center",
    "24/7 support",
    "guest services",
    "contact support",
    "live chat",
    "hotel concierge",
  ],
  openGraph: {
    title: "Customer Support | Get Help & Assistance",
    description:
      "Get exceptional customer support for your luxury hotel experience. Contact our dedicated support team 24/7 for assistance with reservations, services, and any questions.",
    type: "website",
  },
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
