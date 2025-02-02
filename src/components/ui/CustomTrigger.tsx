import { useSidebar } from "@/components/ui/sidebar";
import { MessageCircleWarning } from "lucide-react";

export function CustomTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <button onClick={toggleSidebar} className="z-50 absolute top-6">
      <MessageCircleWarning color="white" />
    </button>
  );
}
