import React, { useState } from 'react';
import { Heart, MessageCircle, Search, Bell, User, Stethoscope, Home, Users, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface CommunityLayoutProps {
  children: React.ReactNode;
  currentView: string;
  onViewChange: (view: string) => void;
}

export const CommunityLayout = ({ children, currentView, onViewChange }: CommunityLayoutProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-primary border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <Heart className="h-8 w-8 text-primary-foreground" />
            <h1 className="text-xl font-bold text-primary-foreground">DementiaConnect</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-6 hidden sm:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search posts, people, or topics..." 
                className="pl-10 pr-10 bg-background/80 border-border"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0"
                onClick={() => {
                  if (searchQuery.trim()) {
                    window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery + ' dementia caregiving')}`, '_blank');
                  }
                }}
              >
                <Search className="h-3 w-3" />
              </Button>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => alert('Notifications: You have 3 new updates!')}
            >
              <Bell className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => onViewChange('messages')}
            >
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="bg-accent text-accent-foreground">JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="sticky top-24 space-y-4">
              {/* Quick Navigation */}
              <div className="bg-card rounded-lg border border-border p-4">
                <h3 className="font-semibold text-card-foreground mb-3">Quick Links</h3>
                <nav className="space-y-2">
                  <Button 
                    variant={currentView === 'feed' ? 'default' : 'ghost'} 
                    className="w-full justify-start" 
                    size="sm"
                    onClick={() => onViewChange('feed')}
                  >
                    <Home className="h-4 w-4 mr-3" />
                    Feed
                  </Button>
                  <Button 
                    variant={currentView === 'caregivers' ? 'default' : 'ghost'} 
                    className="w-full justify-start" 
                    size="sm"
                    onClick={() => onViewChange('caregivers')}
                  >
                    <Users className="h-4 w-4 mr-3" />
                    Caregivers
                  </Button>
                  <Button 
                    variant={currentView === 'ask-doctor' ? 'default' : 'ghost'} 
                    className="w-full justify-start" 
                    size="sm"
                    onClick={() => onViewChange('ask-doctor')}
                  >
                    <Stethoscope className="h-4 w-4 mr-3" />
                    Ask a Doctor
                  </Button>
                  <Button 
                    variant={currentView === 'messages' ? 'default' : 'ghost'} 
                    className="w-full justify-start" 
                    size="sm"
                    onClick={() => onViewChange('messages')}
                  >
                    <MessageSquare className="h-4 w-4 mr-3" />
                    Messages
                  </Button>
                </nav>
              </div>

              {/* Trending Topics */}
              <div className="bg-card rounded-lg border border-border p-4">
                <h3 className="font-semibold text-card-foreground mb-3">Trending Topics</h3>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-primary">#MorningRoutines</span>
                    <p className="text-muted-foreground text-xs">42 posts this week</p>
                  </div>
                  <div className="text-sm">
                    <span className="text-primary">#SafetyTips</span>
                    <p className="text-muted-foreground text-xs">38 posts this week</p>
                  </div>
                  <div className="text-sm">
                    <span className="text-primary">#MedicationManagement</span>
                    <p className="text-muted-foreground text-xs">31 posts this week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            {children}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 order-3 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              {/* Online Doctors */}
              <div className="bg-card rounded-lg border border-border p-4">
                <h3 className="font-semibold text-card-foreground mb-3">Available Doctors</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs">DS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-card-foreground">Dr. Sarah Chen</p>
                      <p className="text-xs text-muted-foreground">Neurologist</p>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full" title="Online"></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs">MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-card-foreground">Dr. Michael Roberts</p>
                      <p className="text-xs text-muted-foreground">Geriatrician</p>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full" title="Online"></div>
                  </div>
                </div>
              </div>

              {/* Suggested Connections */}
              <div className="bg-card rounded-lg border border-border p-4">
                <h3 className="font-semibold text-card-foreground mb-3">Suggested Connections</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-accent text-accent-foreground text-xs">EM</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-card-foreground">Emma Martinez</p>
                      <p className="text-xs text-muted-foreground">Caregiver for 3 years</p>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs">Connect</Button>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-accent text-accent-foreground text-xs">RJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-card-foreground">Robert Johnson</p>
                      <p className="text-xs text-muted-foreground">Caring for spouse</p>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs">Connect</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};