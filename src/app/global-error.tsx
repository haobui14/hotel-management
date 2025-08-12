"use client";

import { MdErrorOutline } from "react-icons/md";
import { useRouter } from "next/navigation";
import { StatusPage } from "@/components/StatusPage";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <StatusPage
      icon={<MdErrorOutline className="text-4xl text-white" />}
      title="Something Went Wrong"
      description="We apologize for the inconvenience. Our luxury service encountered an unexpected issue."
      actionButton={{
        text: "Try Again",
        onClick: reset,
        variant: "primary",
      }}
      secondaryButton={{
        text: "Back to Home",
        onClick: () => router.push("/"),
      }}
      helpfulLinks={[
        { text: "Browse Rooms", href: "/rooms" },
        { text: "Sign In", href: "/auth" },
        { text: "Contact Support", href: "/contact" },
      ]}
    />
  );
}
