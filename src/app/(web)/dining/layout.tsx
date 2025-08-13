import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fine Dining | Exquisite Culinary Experiences",
  description:
    "Experience world-class fine dining at our luxury hotel. Savor exquisite cuisines crafted by award-winning chefs in elegant restaurant settings with exceptional service.",
  keywords: [
    "fine dining",
    "luxury restaurant",
    "gourmet cuisine",
    "award winning chef",
    "culinary experience",
    "upscale dining",
    "tasting menu",
    "wine pairing",
    "michelin star",
    "haute cuisine",
  ],
  openGraph: {
    title: "Fine Dining | Exquisite Culinary Experiences",
    description:
      "Experience world-class fine dining at our luxury hotel. Savor exquisite cuisines crafted by award-winning chefs in elegant restaurant settings with exceptional service.",
    type: "website",
  },
};

export default function DiningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
