import { NavLink, useLocation } from "react-router-dom";
import { 
  Home, 
  MessageCircle, 
  Calendar, 
  Users, 
  BookOpen, 
  Gamepad2, 
  Settings, 
  LogOut 
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { HarpLogo } from "@/components/HarpLogo";
import { useAuth } from "@/hooks/useAuth";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Chatbot", url: "/chatbot", icon: MessageCircle },
  { title: "Planner", url: "/planner", icon: Calendar },
  { title: "Community", url: "/community", icon: Users },
  { title: "Resources", url: "/resources", icon: BookOpen },
  { title: "Game", url: "/game", icon: Gamepad2 },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const { signOut } = useAuth();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const getNavClasses = (path: string) => {
    return isActive(path) 
      ? "bg-primary text-primary-foreground font-medium hover:bg-primary/90" 
      : "hover:bg-sidebar-accent text-sidebar-foreground hover:text-sidebar-accent-foreground";
  };

  return (
    <Sidebar
      className={state === "collapsed" ? "w-14" : "w-64"}
      collapsible="icon"
    >
      <SidebarTrigger className="m-2 self-end" />

      <SidebarContent className="bg-sidebar border-r border-sidebar-border">
        {/* Logo Section */}
        <div className="flex items-center gap-3 p-4 border-b border-sidebar-border">
          <HarpLogo className="text-primary flex-shrink-0" size="lg" />
          {state !== "collapsed" && (
            <div>
              <h2 className="text-lg font-semibold text-foreground">David's Remedy</h2>
              <p className="text-sm text-muted-foreground">Caregiver Support</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/60">
            {state !== "collapsed" ? "Navigation" : ""}
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/"}
                      className={getNavClasses(item.url)}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {state !== "collapsed" && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              
              {/* Logout Button */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center hover:bg-sidebar-accent text-sidebar-foreground hover:text-sidebar-accent-foreground"
                  >
                    <LogOut className="h-5 w-5 flex-shrink-0" />
                    {state !== "collapsed" && <span className="ml-3">Logout</span>}
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}