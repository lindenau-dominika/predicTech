import ErrorCard from "./machine/ErrorCard";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/lib/components/ui/sidebar";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const items = [
  {
    id: 3,
    isWarning: true,
    message:
      "some kind of a warning, some kind of a warning, some kind of a warning.",
    url: `/machines/3`,
  },
  {
    id: 5,
    isWarning: false,
    message:
      "some kind of an error, some kind of an error, some kind of an error.",
    url: "/machines/5",
  },
  {
    id: 9,
    isWarning: true,
    message:
      "some kind of a warning, some kind of a warning, some kind of a warning.",
    url: "/machines/9",
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="z-30 mr-0 top-16 dark:border-predic/40">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="pt-2">
              <ScrollArea className="pb-16">
                {items.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton className="flex h-full">
                      <a href={item.url} className="flex h-full">
                        <ErrorCard
                          machineId={item.id}
                          isWarning={item.isWarning}
                          message={item.message}
                        />
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </ScrollArea>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
