import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Legal Terms & Conditions",
  description:
    "Read our comprehensive terms of service outlining the legal terms and conditions for using our luxury hotel services, booking policies, and guest responsibilities.",
  keywords: [
    "terms of service",
    "legal terms",
    "booking conditions",
    "hotel policy",
    "guest agreement",
    "service terms",
    "legal conditions",
  ],
  openGraph: {
    title: "Terms of Service | Luxury Hotel Management",
    description: "Legal terms and conditions for our luxury hotel services",
    type: "website",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
