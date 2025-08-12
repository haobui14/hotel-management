import { MdSearchOff, MdHome, MdArrowBack } from "react-icons/md";
import { StatusPage } from "@/components/StatusPage";

export default function NotFound() {
  return (
    <StatusPage
      icon={<MdSearchOff className="text-4xl text-white" />}
      statusCode="404"
      title="Page Not Found"
      description="We couldn't find the luxury suite you're looking for. It might have been moved or doesn't exist."
      actionButton={{
        text: "Back to Home",
        href: "/",
        variant: "primary",
      }}
      secondaryButton={{
        text: "Browse Rooms",
        href: "/rooms",
      }}
      helpfulLinks={[
        { text: "Browse Rooms", href: "/rooms" },
        { text: "Sign In", href: "/auth" },
        { text: "Admin Dashboard", href: "/studio" },
      ]}
    />
  );
}
