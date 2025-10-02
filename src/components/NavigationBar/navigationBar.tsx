import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router";
import { Heart, Home, List, CircleUser } from "lucide-react";

const navigationMenuItems = [
  { title: "홈", href: "/", icon: Home },
  { title: "카테고리", href: "/category", icon: List },
  { title: "찜", href: "/favorites", icon: Heart },
  { title: "마이페이지", href: "/myPage", icon: CircleUser },
];

export default function NavigationBar() {
  return (
    <NavigationMenu className="shadow-[inset_0_1px_0_#F1F1F1]">
      <NavigationMenuList>
        {navigationMenuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink asChild>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    navigationMenuTriggerStyle(),
                    "flex h-auto flex-col items-center px-5 py-2.5",
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  )
                }
              >
                {({ isActive }) => (
                  <div
                    className={cn(
                      "flex flex-col justify-center items-center",
                      isActive ? "text-primary-400" : "text-muted-foreground"
                    )}
                  >
                    <item.icon
                      className={cn(
                        "mb-1.5 h-5 w-5",
                        isActive ? "text-primary-400" : "text-muted-foreground"
                      )}
                    />
                    {item.title}
                  </div>
                )}
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
