import { useState } from 'react';
import { Home, User, Calendar, Pill, Activity, Heart, Settings, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import caregiverIcon from '@/assets/caregiver-icon.png';

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  component: string;
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: Home, component: 'Dashboard' },
  { id: 'profile', label: 'Patient Profile', icon: User, component: 'PatientProfile' },
  { id: 'calendar', label: 'Calendar', icon: Calendar, component: 'Calendar' },
  { id: 'medications', label: 'Medications', icon: Pill, component: 'Medications' },
  { id: 'activities', label: 'Activities', icon: Activity, component: 'Activities' },
  { id: 'care', label: 'Care Log', icon: Heart, component: 'CareLog' },
];

interface NavigationProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export function Navigation({ currentView, onViewChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden bg-primary text-primary-foreground p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={caregiverIcon} alt="Caregiver App" className="h-8 w-8" />
          <span className="font-bold text-lg">David's Remedy</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-primary-foreground hover:bg-primary-foreground/20"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card border-b shadow-lg">
          <div className="p-4 space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={currentView === item.component ? "default" : "ghost"}
                  className="w-full justify-start gap-3 h-12"
                  onClick={() => {
                    onViewChange(item.component);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <IconComponent className="h-5 w-5" />
                  {item.label}
                </Button>
              );
            })}
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 h-12 text-muted-foreground"
            >
              <Settings className="h-5 w-5" />
              Settings
            </Button>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:bg-card lg:border-r">
        {/* Logo */}
        <div className="p-6 border-b">
          <div className="flex items-center gap-3">
            <img src={caregiverIcon} alt="Caregiver App" className="h-10 w-10" />
            <div>
              <h1 className="font-bold text-xl text-primary">David's Remedy</h1>
              <p className="text-sm text-muted-foreground">Dementia Care Planner</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Button
                key={item.id}
                variant={currentView === item.component ? "default" : "ghost"}
                className="w-full justify-start gap-3 h-12 text-base"
                onClick={() => onViewChange(item.component)}
              >
                <IconComponent className="h-5 w-5" />
                {item.label}
              </Button>
            );
          })}
        </nav>

        {/* Settings */}
        <div className="p-4 border-t">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 h-12 text-muted-foreground"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Button>
        </div>
      </div>
    </>
  );
}