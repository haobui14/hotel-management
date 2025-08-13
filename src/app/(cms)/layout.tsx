import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Management Studio | Hotel Administration Dashboard",
  description:
    "Administrative content management system for hotel data, room information, bookings, and website content. Access restricted to authorized personnel only.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CMSLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
