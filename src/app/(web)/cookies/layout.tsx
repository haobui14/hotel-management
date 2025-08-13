import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Data Privacy & Website Cookies",
  description:
    "Learn about our cookie policy and how we use cookies to improve your browsing experience. Understand your choices regarding cookies and data privacy on our luxury hotel website.",
  keywords: [
    "cookie policy",
    "privacy policy",
    "data privacy",
    "website cookies",
    "tracking cookies",
    "analytics",
    "user preferences",
    "GDPR compliance",
    "cookie consent",
    "data protection",
  ],
  openGraph: {
    title: "Cookie Policy | Data Privacy & Website Cookies",
    description:
      "Learn about our cookie policy and how we use cookies to improve your browsing experience. Understand your choices regarding cookies and data privacy on our luxury hotel website.",
    type: "website",
  },
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
