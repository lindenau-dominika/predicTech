import { useSidebar } from "@/lib/components/ui/sidebar";
import { MessageCircleWarning } from "lucide-react";

export function CustomTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <button onClick={toggleSidebar} className="z-50 top-6 left-6 fixed">
      <MessageCircleWarning color="white" />
    </button>
  );
}
