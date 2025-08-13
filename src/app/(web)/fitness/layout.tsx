import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fitness Center | State-of-the-Art Gym & Wellness",
  description:
    "Stay fit and healthy at our state-of-the-art fitness center. Enjoy premium equipment, personal training, group classes, and wellness programs in a luxurious environment.",
  keywords: [
    "fitness center",
    "luxury gym",
    "personal training",
    "group fitness classes",
    "cardio equipment",
    "strength training",
    "wellness programs",
    "yoga classes",
    "pilates",
    "swimming pool",
  ],
  openGraph: {
    title: "Fitness Center | State-of-the-Art Gym & Wellness",
    description:
      "Stay fit and healthy at our state-of-the-art fitness center. Enjoy premium equipment, personal training, group classes, and wellness programs in a luxurious environment.",
    type: "website",
  },
};

export default function FitnessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
