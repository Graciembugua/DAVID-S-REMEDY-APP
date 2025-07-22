import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Pill, CheckCircle } from 'lucide-react';

const Planner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-light-sky-blue/10 p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Calendar className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Mindful Dementia Planner</h1>
          <p className="text-muted-foreground">
            Organize appointments, medications, and daily activities with ease
          </p>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Clock className="h-6 w-6 text-accent" />
              Your Caregiving Planner
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center py-12">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="p-6 bg-accent/10 rounded-full">
                  <CheckCircle className="h-16 w-16 text-accent" />
                </div>
              </div>
              
              <div className="max-w-2xl mx-auto space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Coming Soon: Comprehensive Care Planning
                </h3>
                <p className="text-muted-foreground">
                  A comprehensive planner designed specifically for dementia caregivers to help 
                  manage daily tasks, appointments, medication schedules, and set reminders 
                  for both you and your loved one.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-8 text-sm">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <h4 className="font-medium text-foreground">Appointment Tracking</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Schedule and track medical appointments, therapy sessions, and care visits
                    </p>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <div className="flex items-center gap-2 mb-2">
                      <Pill className="h-4 w-4 text-accent" />
                      <h4 className="font-medium text-foreground">Medication Management</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Track medications, dosages, and set reminders for administration times
                    </p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <h4 className="font-medium text-foreground">Daily Activities</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Plan and track daily routines, activities, and care tasks
                    </p>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-accent" />
                      <h4 className="font-medium text-foreground">Smart Reminders</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Receive timely notifications for important tasks and appointments
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

export default Planner;