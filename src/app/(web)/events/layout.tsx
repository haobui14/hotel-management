import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Spaces | Luxury Venues for Memorable Occasions",
  description:
    "Host unforgettable events at our luxury hotel. From intimate gatherings to grand celebrations, our elegant event spaces and professional services ensure perfect occasions.",
  keywords: [
    "event spaces",
    "wedding venues",
    "conference rooms",
    "banquet halls",
    "corporate events",
    "luxury venues",
    "event planning",
    "catering services",
    "meeting rooms",
    "celebrations",
  ],
  openGraph: {
    title: "Event Spaces | Luxury Venues for Memorable Occasions",
    description:
      "Host unforgettable events at our luxury hotel. From intimate gatherings to grand celebrations, our elegant event spaces and professional services ensure perfect occasions.",
    type: "website",
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
