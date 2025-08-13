import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Data Protection & Guest Privacy Rights",
  description:
    "Read our comprehensive privacy policy detailing how we protect your personal information, handle booking data, and maintain the highest standards of guest privacy and data security.",
  keywords: [
    "privacy policy",
    "data protection",
    "guest privacy",
    "personal information",
    "data security",
    "booking privacy",
    "GDPR compliance",
    "hotel privacy",
  ],
  openGraph: {
    title: "Privacy Policy | Luxury Hotel Management",
    description:
      "Learn about our commitment to protecting your privacy and data",
    type: "website",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
