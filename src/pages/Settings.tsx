import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings as SettingsIcon, User, Bell, Shield, Palette } from 'lucide-react';

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-light-sky-blue/10 p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <SettingsIcon className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account preferences and customize your experience
          </p>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <User className="h-6 w-6 text-accent" />
              Account Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center py-12">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="p-6 bg-accent/10 rounded-full">
                  <SettingsIcon className="h-16 w-16 text-accent" />
                </div>
              </div>
              
              <div className="max-w-2xl mx-auto space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Coming Soon: Personalization Options
                </h3>
                <p className="text-muted-foreground">
                  Customize your David's Remedy experience with personal preferences, 
                  notification settings, privacy controls, and accessibility options 
                  tailored to your caregiving needs.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-8 text-sm">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <User className="h-4 w-4 text-primary" />
                      <h4 className="font-medium text-foreground">Profile Management</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Manage your personal information and caregiving preferences
                    </p>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Bell className="h-4 w-4 text-accent" />
                      <h4 className="font-medium text-foreground">Notifications</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Customize reminder preferences and notification settings
                    </p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <h4 className="font-medium text-foreground">Privacy & Security</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Control your privacy settings and account security options
                    </p>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Palette className="h-4 w-4 text-accent" />
                      <h4 className="font-medium text-foreground">Appearance</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Customize theme, colors, and accessibility preferences
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;