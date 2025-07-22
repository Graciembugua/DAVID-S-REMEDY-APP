import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { HarpLogo } from "@/components/HarpLogo";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        {/* Header with trigger - always visible */}
        <header className="fixed top-0 left-0 right-0 h-14 bg-background border-b border-border z-50 flex items-center px-4">
          <SidebarTrigger className="mr-4" />
          <div className="flex items-center gap-2">
            <HarpLogo className="text-primary" size="sm" />
            <span className="font-semibold text-foreground">David's Remedy</span>
          </div>
        </header>

        <AppSidebar />

        {/* Main content with top padding to account for fixed header */}
        <main className="flex-1 pt-14">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}