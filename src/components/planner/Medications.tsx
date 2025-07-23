import { useState } from 'react';
import { Pill, Plus, Clock, Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  times: string[];
  notes?: string;
  isActive: boolean;
}

interface MedicationLog {
  id: string;
  medicationId: string;
  medicationName: string;
  scheduledTime: string;
  actualTime?: string;
  taken: boolean;
  date: string;
}

const mockMedications: Medication[] = [
  {
    id: '1',
    name: 'Aricept (Donepezil)',
    dosage: '10mg',
    frequency: 'Once daily',
    times: ['08:00'],
    notes: 'Take with breakfast to reduce nausea',
    isActive: true
  },
  {
    id: '2',
    name: 'Vitamin D3',
    dosage: '2000 IU',
    frequency: 'Once daily',
    times: ['08:00'],
    isActive: true
  }
];

export function Medications() {
  const [medications, setMedications] = useState<Medication[]>(mockMedications);
  const [medicationLogs, setMedicationLogs] = useState<MedicationLog[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMedication, setNewMedication] = useState({
    name: '',
    dosage: '',
    frequency: '',
    times: '',
    notes: ''
  });

  const handleAddMedication = () => {
    if (newMedication.name && newMedication.dosage && newMedication.frequency) {
      const medication: Medication = {
        id: Date.now().toString(),
        name: newMedication.name,
        dosage: newMedication.dosage,
        frequency: newMedication.frequency,
        times: newMedication.times.split(',').map(t => t.trim()),
        notes: newMedication.notes,
        isActive: true
      };
      setMedications([...medications, medication]);
      setNewMedication({
        name: '',
        dosage: '',
        frequency: '',
        times: '',
        notes: ''
      });
      setShowAddForm(false);
    }
  };

  const toggleMedicationStatus = (id: string) => {
    setMedications(medications.map(med => 
      med.id === id ? { ...med, isActive: !med.isActive } : med
    ));
  };

  const markAsTaken = (medication: Medication, scheduledTime: string) => {
    const log: MedicationLog = {
      id: Date.now().toString(),
      medicationId: medication.id,
      medicationName: medication.name,
      scheduledTime,
      actualTime: new Date().toLocaleTimeString(),
      taken: true,
      date: new Date().toISOString().split('T')[0]
    };
    setMedicationLogs([...medicationLogs, log]);
  };

  const getTodaysSchedule = () => {
    const today = new Date().toISOString().split('T')[0];
    const schedule = [];
    
    medications.filter(med => med.isActive).forEach(medication => {
      medication.times.forEach(time => {
        const log = medicationLogs.find(log => 
          log.medicationId === medication.id && 
          log.scheduledTime === time && 
          log.date === today
        );
        
        schedule.push({
          medication,
          time,
          taken: !!log,
          log
        });
      });
    });
    
    return schedule.sort((a, b) => a.time.localeCompare(b.time));
  };

  return (
    <div className="min-h-screen bg-background p-4 space-y-6">
      {/* Header */}
      <div className="bg-primary rounded-lg p-6 text-primary-foreground">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-primary-foreground/20 p-3 rounded-full">
              <Pill className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Medications</h1>
              <p className="text-lg opacity-90">Manage prescriptions and track adherence</p>
            </div>
          </div>
          <Button 
            variant="outline" 
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Medication
          </Button>
        </div>
      </div>

      {/* Add Medication Form */}
      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Medication</CardTitle>
            <CardDescription>Add a new medication to the schedule</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Medication Name</Label>
                <Input
                  id="name"
                  value={newMedication.name}
                  onChange={(e) => setNewMedication({...newMedication, name: e.target.value})}
                  placeholder="e.g., Aricept (Donepezil)"
                />
              </div>
              <div>
                <Label htmlFor="dosage">Dosage</Label>
                <Input
                  id="dosage"
                  value={newMedication.dosage}
                  onChange={(e) => setNewMedication({...newMedication, dosage: e.target.value})}
                  placeholder="e.g., 10mg"
                />
              </div>
              <div>
                <Label htmlFor="frequency">Frequency</Label>
                <Input
                  id="frequency"
                  value={newMedication.frequency}
                  onChange={(e) => setNewMedication({...newMedication, frequency: e.target.value})}
                  placeholder="e.g., Once daily"
                />
              </div>
              <div>
                <Label htmlFor="times">Times (comma separated)</Label>
                <Input
                  id="times"
                  value={newMedication.times}
                  onChange={(e) => setNewMedication({...newMedication, times: e.target.value})}
                  placeholder="e.g., 08:00, 20:00"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="notes">Notes (Optional)</Label>
              <Textarea
                id="notes"
                value={newMedication.notes}
                onChange={(e) => setNewMedication({...newMedication, notes: e.target.value})}
                placeholder="Special instructions or notes"
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleAddMedication}>Save Medication</Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-accent" />
              Today's Schedule
            </CardTitle>
            <CardDescription>Medication schedule for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {getTodaysSchedule().length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Pill className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No medications scheduled for today</p>
                </div>
              ) : (
                getTodaysSchedule().map((item, index) => (
                  <div key={index} className={`p-3 border rounded-lg ${item.taken ? 'bg-accent/10 border-accent' : 'bg-card'}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{item.time}</span>
                          <span className="text-sm text-muted-foreground">-</span>
                          <span className="font-semibold">{item.medication.name}</span>
                          <span className="text-sm text-muted-foreground">({item.medication.dosage})</span>
                        </div>
                        {item.taken && item.log?.actualTime && (
                          <div className="text-sm text-accent mt-1">
                            Taken at {item.log.actualTime}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        {item.taken ? (
                          <Badge variant="outline" className="bg-accent text-accent-foreground">
                            <Check className="h-3 w-3 mr-1" />
                            Taken
                          </Badge>
                        ) : (
                          <Button 
                            size="sm" 
                            onClick={() => markAsTaken(item.medication, item.time)}
                          >
                            Mark Taken
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        {/* Current Medications */}
        <Card>
          <CardHeader>
            <CardTitle>Current Medications</CardTitle>
            <CardDescription>All prescribed medications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {medications.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Pill className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No medications added</p>
                </div>
              ) : (
                medications.map((medication) => (
                  <div key={medication.id} className="p-4 border rounded-lg bg-card">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-lg">{medication.name}</h3>
                          <Badge variant={medication.isActive ? "outline" : "secondary"}>
                            {medication.isActive ? "Active" : "Inactive"}
                          </Badge>
                        </div>
                        <div className="flex gap-4 text-sm text-muted-foreground mb-2">
                          <span><strong>Dosage:</strong> {medication.dosage}</span>
                          <span><strong>Frequency:</strong> {medication.frequency}</span>
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">
                          <strong>Times:</strong> {medication.times.join(', ')}
                        </div>
                        {medication.notes && (
                          <div className="mt-2 p-2 bg-muted rounded text-sm">
                            <strong>Notes:</strong> {medication.notes}
                          </div>
                        )}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleMedicationStatus(medication.id)}
                      >
                        {medication.isActive ? 'Deactivate' : 'Activate'}
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}