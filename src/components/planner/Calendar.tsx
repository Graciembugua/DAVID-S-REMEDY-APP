import { useState } from 'react';
import { Calendar as CalendarIcon, Plus, Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

interface Appointment {
  id: string;
  title: string;
  date: string;
  time: string;
  location?: string;
  notes?: string;
  type: 'medical' | 'therapy' | 'social' | 'other';
}

const mockAppointments: Appointment[] = [
  {
    id: '1',
    title: 'Dr. Smith - Memory Clinic',
    date: '2024-01-25',
    time: '10:00 AM',
    location: 'Mercy Hospital',
    type: 'medical',
    notes: 'Quarterly check-up'
  },
  {
    id: '2',
    title: 'Physical Therapy',
    date: '2024-01-27',
    time: '2:00 PM',
    location: 'Wellness Center',
    type: 'therapy'
  }
];

export function Calendar() {
  const [appointments, setAppointments] = useState<Appointment[]>(mockAppointments);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    notes: '',
    type: 'medical' as const
  });

  const handleAddAppointment = () => {
    if (newAppointment.title && newAppointment.date && newAppointment.time) {
      const appointment: Appointment = {
        id: Date.now().toString(),
        ...newAppointment
      };
      setAppointments([...appointments, appointment]);
      setNewAppointment({
        title: '',
        date: '',
        time: '',
        location: '',
        notes: '',
        type: 'medical'
      });
      setShowAddForm(false);
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'medical': return 'bg-destructive text-destructive-foreground';
      case 'therapy': return 'bg-accent text-accent-foreground';
      case 'social': return 'bg-primary text-primary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 space-y-6">
      {/* Header */}
      <div className="bg-primary rounded-lg p-6 text-primary-foreground">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-primary-foreground/20 p-3 rounded-full">
              <CalendarIcon className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Calendar & Appointments</h1>
              <p className="text-lg opacity-90">Manage appointments and schedule</p>
            </div>
          </div>
          <Button 
            variant="outline" 
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Appointment
          </Button>
        </div>
      </div>

      {/* Add Appointment Form */}
      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Appointment</CardTitle>
            <CardDescription>Schedule a new appointment or event</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Appointment Title</Label>
                <Input
                  id="title"
                  value={newAppointment.title}
                  onChange={(e) => setNewAppointment({...newAppointment, title: e.target.value})}
                  placeholder="e.g., Dr. Smith - Memory Clinic"
                />
              </div>
              <div>
                <Label htmlFor="type">Type</Label>
                <select
                  id="type"
                  value={newAppointment.type}
                  onChange={(e) => setNewAppointment({...newAppointment, type: e.target.value as any})}
                  className="w-full p-2 border border-input rounded-md bg-background"
                >
                  <option value="medical">Medical</option>
                  <option value="therapy">Therapy</option>
                  <option value="social">Social</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={newAppointment.date}
                  onChange={(e) => setNewAppointment({...newAppointment, date: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  type="time"
                  value={newAppointment.time}
                  onChange={(e) => setNewAppointment({...newAppointment, time: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="location">Location (Optional)</Label>
                <Input
                  id="location"
                  value={newAppointment.location}
                  onChange={(e) => setNewAppointment({...newAppointment, location: e.target.value})}
                  placeholder="e.g., Mercy Hospital"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="notes">Notes (Optional)</Label>
              <Textarea
                id="notes"
                value={newAppointment.notes}
                onChange={(e) => setNewAppointment({...newAppointment, notes: e.target.value})}
                placeholder="Additional notes about the appointment"
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleAddAppointment}>Save Appointment</Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Upcoming Appointments */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Appointments</CardTitle>
          <CardDescription>Your scheduled appointments and events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {appointments.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <CalendarIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No appointments scheduled</p>
              </div>
            ) : (
              appointments.map((appointment) => (
                <div key={appointment.id} className="p-4 border rounded-lg bg-card">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg">{appointment.title}</h3>
                        <Badge className={getTypeColor(appointment.type)}>
                          {appointment.type}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="h-4 w-4" />
                          <span>{new Date(appointment.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{appointment.time}</span>
                        </div>
                        {appointment.location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{appointment.location}</span>
                          </div>
                        )}
                      </div>
                      {appointment.notes && (
                        <div className="mt-2 p-2 bg-muted rounded text-sm">
                          <strong>Notes:</strong> {appointment.notes}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}