import type { Metadata } from "next";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import { NextAuthProvider } from "@/components/AuthProvider/AuthProvider";
import Toast from "@/components/Toast/Toast";

export const metadata: Metadata = {
  title: {
    default: "Luxury Hotel Management | Premium Accommodations & Services",
    template: "%s | Luxury Hotel Management",
  },
  description:
    "Experience unparalleled luxury at our premium hotel. Discover elegant rooms, world-class amenities, fine dining, spa services, and exceptional hospitality in the heart of the city.",
  keywords: [
    "luxury hotel",
    "premium accommodations",
    "hotel booking",
    "fine dining",
    "spa services",
    "business center",
    "valet service",
    "concierge",
  ],
  authors: [{ name: "Luxury Hotel Management" }],
  creator: "Luxury Hotel Management",
  publisher: "Luxury Hotel Management",
  metadataBase: new URL("https://luxury-hotel-management.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luxury-hotel-management.com",
    title: "Luxury Hotel Management | Premium Accommodations & Services",
    description:
      "Experience unparalleled luxury at our premium hotel. Discover elegant rooms, world-class amenities, and exceptional hospitality.",
    siteName: "Luxury Hotel Management",
    images: [
      {
        url: "/images/hero-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Luxury Hotel Exterior View",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Hotel Management | Premium Accommodations & Services",
    description:
      "Experience unparalleled luxury at our premium hotel. Discover elegant rooms, world-class amenities, and exceptional hospitality.",
    images: ["/images/hero-1.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextAuthProvider>
      <ThemeProvider>
        <Toast />
        <main className="font-normal">
          <Header />
          {children}
          <Footer />
        </main>
      </ThemeProvider>
    </NextAuthProvider>
  );
}
