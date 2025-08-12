import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./(web)/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body
        className={`${poppins.className} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
