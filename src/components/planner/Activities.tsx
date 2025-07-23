import { useState } from 'react';
import { Activity, Plus, Clock, Heart, Star, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

interface ActivityItem {
  id: string;
  name: string;
  category: 'cognitive' | 'physical' | 'social' | 'creative' | 'daily';
  duration: number; // in minutes
  description?: string;
  benefits: string[];
  difficulty: 'low' | 'medium' | 'high';
}

interface ActivityLog {
  id: string;
  activityId: string;
  activityName: string;
  date: string;
  duration: number;
  notes?: string;
  enjoymentLevel: number; // 1-5 scale
}

const suggestedActivities: ActivityItem[] = [
  {
    id: '1',
    name: 'Looking at Photo Albums',
    category: 'cognitive',
    duration: 30,
    description: 'Review family photos and reminisce about memories',
    benefits: ['Memory stimulation', 'Emotional well-being', 'Social connection'],
    difficulty: 'low'
  },
  {
    id: '2',
    name: 'Gentle Stretching',
    category: 'physical',
    duration: 15,
    description: 'Simple stretching exercises for flexibility',
    benefits: ['Physical health', 'Pain reduction', 'Mood improvement'],
    difficulty: 'low'
  },
  {
    id: '3',
    name: 'Listening to Music',
    category: 'creative',
    duration: 45,
    description: 'Play favorite songs from their era',
    benefits: ['Emotional regulation', 'Memory recall', 'Relaxation'],
    difficulty: 'low'
  },
  {
    id: '4',
    name: 'Simple Puzzle',
    category: 'cognitive',
    duration: 20,
    description: 'Large piece puzzles or word games',
    benefits: ['Cognitive stimulation', 'Focus improvement', 'Sense of achievement'],
    difficulty: 'medium'
  }
];

export function Activities() {
  const [activities, setActivities] = useState<ActivityItem[]>(suggestedActivities);
  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newActivity, setNewActivity] = useState({
    name: '',
    category: 'cognitive' as const,
    duration: 30,
    description: '',
    benefits: '',
    difficulty: 'low' as const
  });

  const handleAddActivity = () => {
    if (newActivity.name) {
      const activity: ActivityItem = {
        id: Date.now().toString(),
        name: newActivity.name,
        category: newActivity.category,
        duration: newActivity.duration,
        description: newActivity.description,
        benefits: newActivity.benefits.split(',').map(b => b.trim()).filter(b => b),
        difficulty: newActivity.difficulty
      };
      setActivities([...activities, activity]);
      setNewActivity({
        name: '',
        category: 'cognitive',
        duration: 30,
        description: '',
        benefits: '',
        difficulty: 'low'
      });
      setShowAddForm(false);
    }
  };

  const logActivity = (activity: ActivityItem, actualDuration: number, enjoymentLevel: number, notes?: string) => {
    const log: ActivityLog = {
      id: Date.now().toString(),
      activityId: activity.id,
      activityName: activity.name,
      date: new Date().toISOString().split('T')[0],
      duration: actualDuration,
      notes,
      enjoymentLevel
    };
    setActivityLogs([...activityLogs, log]);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'cognitive': return 'bg-primary text-primary-foreground';
      case 'physical': return 'bg-accent text-accent-foreground';
      case 'social': return 'bg-secondary text-secondary-foreground';
      case 'creative': return 'bg-muted text-muted-foreground';
      case 'daily': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'low': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'high': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getTodaysActivities = () => {
    const today = new Date().toISOString().split('T')[0];
    return activityLogs.filter(log => log.date === today);
  };

  return (
    <div className="min-h-screen bg-background p-4 space-y-6">
      {/* Header */}
      <div className="bg-primary rounded-lg p-6 text-primary-foreground">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-primary-foreground/20 p-3 rounded-full">
              <Activity className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Activities</h1>
              <p className="text-lg opacity-90">Plan and track daily activities</p>
            </div>
          </div>
          <Button 
            variant="outline" 
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Activity
          </Button>
        </div>
      </div>

      {/* Add Activity Form */}
      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Activity</CardTitle>
            <CardDescription>Create a custom activity for the care plan</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Activity Name</Label>
                <Input
                  id="name"
                  value={newActivity.name}
                  onChange={(e) => setNewActivity({...newActivity, name: e.target.value})}
                  placeholder="e.g., Reading together"
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  value={newActivity.category}
                  onChange={(e) => setNewActivity({...newActivity, category: e.target.value as any})}
                  className="w-full p-2 border border-input rounded-md bg-background"
                >
                  <option value="cognitive">Cognitive</option>
                  <option value="physical">Physical</option>
                  <option value="social">Social</option>
                  <option value="creative">Creative</option>
                  <option value="daily">Daily Living</option>
                </select>
              </div>
              <div>
                <Label htmlFor="duration">Duration (minutes)</Label>
                <Input
                  id="duration"
                  type="number"
                  value={newActivity.duration}
                  onChange={(e) => setNewActivity({...newActivity, duration: parseInt(e.target.value) || 30})}
                />
              </div>
              <div>
                <Label htmlFor="difficulty">Difficulty</Label>
                <select
                  id="difficulty"
                  value={newActivity.difficulty}
                  onChange={(e) => setNewActivity({...newActivity, difficulty: e.target.value as any})}
                  className="w-full p-2 border border-input rounded-md bg-background"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newActivity.description}
                onChange={(e) => setNewActivity({...newActivity, description: e.target.value})}
                placeholder="Describe the activity and how to perform it"
              />
            </div>
            <div>
              <Label htmlFor="benefits">Benefits (comma separated)</Label>
              <Input
                id="benefits"
                value={newActivity.benefits}
                onChange={(e) => setNewActivity({...newActivity, benefits: e.target.value})}
                placeholder="e.g., Memory stimulation, Social interaction"
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleAddActivity}>Save Activity</Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Completed Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              Today's Activities
            </CardTitle>
            <CardDescription>Activities completed today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {getTodaysActivities().length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Activity className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No activities completed today</p>
                </div>
              ) : (
                getTodaysActivities().map((log) => (
                  <div key={log.id} className="p-3 border rounded-lg bg-accent/10">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-medium">{log.activityName}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{log.duration} min</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3" />
                            <span>{log.enjoymentLevel}/5</span>
                          </div>
                        </div>
                        {log.notes && (
                          <p className="text-sm text-muted-foreground mt-2">{log.notes}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        {/* Available Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Available Activities</CardTitle>
            <CardDescription>Suggested and custom activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="p-4 border rounded-lg bg-card">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{activity.name}</h3>
                        <Badge className={getCategoryColor(activity.category)}>
                          {activity.category}
                        </Badge>
                      </div>
                      <div className="flex gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{activity.duration} min</span>
                        </div>
                        <span className={getDifficultyColor(activity.difficulty)}>
                          {activity.difficulty} difficulty
                        </span>
                      </div>
                      {activity.description && (
                        <p className="text-sm text-muted-foreground mb-2">{activity.description}</p>
                      )}
                      {activity.benefits.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {activity.benefits.map((benefit, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <Button 
                    size="sm"
                    onClick={() => {
                      // In a real app, this would open a modal to log completion details
                      const duration = activity.duration;
                      const enjoyment = Math.floor(Math.random() * 5) + 1; // Random for demo
                      logActivity(activity, duration, enjoyment, 'Completed successfully');
                    }}
                  >
                    Mark as Completed
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}