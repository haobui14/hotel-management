import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spa & Wellness | Luxury Relaxation & Rejuvenation",
  description:
    "Indulge in ultimate relaxation at our world-class spa & wellness center. Experience luxury treatments, massage therapies, and wellness programs in a serene environment.",
  keywords: [
    "luxury spa",
    "wellness center",
    "massage therapy",
    "facial treatments",
    "body treatments",
    "relaxation",
    "rejuvenation",
    "aromatherapy",
    "hot stone massage",
    "couples spa",
  ],
  openGraph: {
    title: "Spa & Wellness | Luxury Relaxation & Rejuvenation",
    description:
      "Indulge in ultimate relaxation at our world-class spa & wellness center. Experience luxury treatments, massage therapies, and wellness programs in a serene environment.",
    type: "website",
  },
};

export default function SpaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
