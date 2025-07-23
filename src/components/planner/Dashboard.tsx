import { useState } from 'react';
import { Calendar, Clock, Heart, Pill, Utensils, Activity, User, Plus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Task {
  id: string;
  title: string;
  category: 'medication' | 'feeding' | 'activity' | 'appointment' | 'care';
  time: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  notes?: string;
}

const defaultTasks: Task[] = [
  {
    id: '1',
    title: 'Morning Medication - Aricept 10mg',
    category: 'medication',
    time: '08:00',
    completed: false,
    priority: 'high',
    notes: 'Take with breakfast'
  },
  {
    id: '2',
    title: 'Breakfast - Ensure proper nutrition',
    category: 'feeding',
    time: '08:30',
    completed: false,
    priority: 'high'
  },
  {
    id: '3',
    title: 'Memory Exercise - Photo album review',
    category: 'activity',
    time: '10:00',
    completed: false,
    priority: 'medium'
  },
  {
    id: '4',
    title: 'Doctor Appointment - Dr. Smith',
    category: 'appointment',
    time: '14:00',
    completed: false,
    priority: 'high'
  },
  {
    id: '5',
    title: 'Evening Medication - Donepezil 5mg',
    category: 'medication',
    time: '20:00',
    completed: false,
    priority: 'high'
  }
];

const categoryIcons = {
  medication: Pill,
  feeding: Utensils,
  activity: Activity,
  appointment: Calendar,
  care: Heart
};

const categoryColors = {
  medication: 'bg-accent text-accent-foreground',
  feeding: 'bg-primary text-primary-foreground',
  activity: 'bg-secondary text-secondary-foreground',
  appointment: 'bg-primary text-primary-foreground',
  care: 'bg-muted text-muted-foreground'
};

const priorityColors = {
  high: 'border-l-4 border-l-destructive',
  medium: 'border-l-4 border-l-accent',
  low: 'border-l-4 border-l-muted-foreground'
};

interface DashboardProps {
  onViewChange: (view: string) => void;
}

export function Dashboard({ onViewChange }: DashboardProps) {
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  const toggleTaskComplete = (taskId: string) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const upcomingTasks = tasks.filter(task => !task.completed && task.time > currentTime).slice(0, 3);

  return (
    <div className="min-h-screen bg-background p-4 space-y-6">
      {/* Header */}
      <div className="bg-primary rounded-lg p-6 text-primary-foreground">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Caregiver Dashboard</h1>
            <p className="text-lg opacity-90">{currentDate}</p>
            <div className="flex items-center gap-2 mt-2">
              <Clock className="h-5 w-5" />
              <span className="text-base">{currentTime}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold">{completedTasks}/{totalTasks}</div>
            <div className="text-base opacity-90">Tasks Complete</div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Today's Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Tasks Completed</span>
                <span className="font-semibold">{completedTasks}/{totalTasks}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(completedTasks / totalTasks) * 100}%` }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Pill className="h-5 w-5 text-accent" />
              Medications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">
              {tasks.filter(t => t.category === 'medication' && !t.completed).length}
            </div>
            <p className="text-sm text-muted-foreground">Pending doses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Next Task
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-semibold">
              {upcomingTasks[0]?.time || 'No upcoming tasks'}
            </div>
            <p className="text-sm text-muted-foreground">
              {upcomingTasks[0]?.title || 'All caught up!'}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Today's Tasks */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Today's Tasks</CardTitle>
              <CardDescription>Manage your daily caregiving schedule</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Task
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {tasks.map((task) => {
              const IconComponent = categoryIcons[task.category];
              return (
                <div
                  key={task.id}
                  className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${
                    task.completed ? 'bg-muted/50 opacity-60' : 'bg-card'
                  } ${priorityColors[task.priority]}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3 flex-1">
                      <button
                        onClick={() => toggleTaskComplete(task.id)}
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                          task.completed
                            ? 'bg-primary border-primary text-primary-foreground'
                            : 'border-muted-foreground hover:border-primary'
                        }`}
                      >
                        {task.completed && <span className="text-xs">✓</span>}
                      </button>
                      
                      <div className={`p-2 rounded-full ${categoryColors[task.category]}`}>
                        <IconComponent className="h-4 w-4" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className={`font-medium ${task.completed ? 'line-through' : ''}`}>
                          {task.title}
                        </h3>
                        {task.notes && (
                          <p className="text-sm text-muted-foreground mt-1">{task.notes}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-semibold">{task.time}</div>
                      <Badge variant="outline" className="text-xs">
                        {task.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Button 
          variant="outline" 
          className="h-20 flex-col gap-2"
          onClick={() => onViewChange('PatientProfile')}
        >
          <User className="h-6 w-6" />
          <span>Patient Profile</span>
        </Button>
        <Button 
          variant="outline" 
          className="h-20 flex-col gap-2"
          onClick={() => onViewChange('Calendar')}
        >
          <Calendar className="h-6 w-6" />
          <span>Calendar</span>
        </Button>
        <Button 
          variant="outline" 
          className="h-20 flex-col gap-2"
          onClick={() => onViewChange('Medications')}
        >
          <Pill className="h-6 w-6" />
          <span>Medications</span>
        </Button>
        <Button 
          variant="outline" 
          className="h-20 flex-col gap-2"
          onClick={() => onViewChange('Activities')}
        >
          <Activity className="h-6 w-6" />
          <span>Activities</span>
        </Button>
      </div>
    </div>
  );
}