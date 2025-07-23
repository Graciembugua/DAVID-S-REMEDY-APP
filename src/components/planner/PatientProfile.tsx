import { useState } from 'react';
import { User, Heart, Pill, AlertCircle, Phone, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface PatientInfo {
  name: string;
  age: number;
  diagnosis: string;
  allergies: string[];
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
  medications: {
    name: string;
    dosage: string;
    frequency: string;
    notes?: string;
  }[];
  preferences: {
    favoriteActivities: string[];
    dislikes: string[];
    routineNotes: string;
  };
}

const defaultPatientInfo: PatientInfo = {
  name: "Margaret Johnson",
  age: 78,
  diagnosis: "Early-stage Alzheimer's Disease",
  allergies: ["Penicillin", "Sulfa drugs"],
  emergencyContact: {
    name: "Sarah Johnson",
    phone: "(555) 123-4567",
    relationship: "Daughter"
  },
  medications: [
    {
      name: "Aricept (Donepezil)",
      dosage: "10mg",
      frequency: "Once daily in morning",
      notes: "Take with breakfast to reduce nausea"
    },
    {
      name: "Vitamin D3",
      dosage: "2000 IU",
      frequency: "Once daily",
      notes: "Can take any time of day"
    },
    {
      name: "Multivitamin",
      dosage: "1 tablet",
      frequency: "Once daily with breakfast"
    }
  ],
  preferences: {
    favoriteActivities: ["Looking at photo albums", "Listening to 1950s music", "Gentle gardening", "Watching classic movies"],
    dislikes: ["Loud noises", "Crowded places", "Being rushed"],
    routineNotes: "Prefers to wake up naturally around 7:30 AM. Enjoys afternoon tea at 3 PM. Gets anxious in the evening, music helps calm her."
  }
};

export function PatientProfile() {
  const [patientInfo, setPatientInfo] = useState<PatientInfo>(defaultPatientInfo);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<PatientInfo>(defaultPatientInfo);

  const handleSave = () => {
    setPatientInfo(editForm);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm(patientInfo);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-background p-4 space-y-6">
      {/* Header */}
      <div className="bg-primary rounded-lg p-6 text-primary-foreground">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-primary-foreground/20 p-3 rounded-full">
              <User className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{patientInfo.name}</h1>
              <p className="text-lg opacity-90">Age {patientInfo.age} • {patientInfo.diagnosis}</p>
            </div>
          </div>
          <div className="flex gap-2">
            {isEditing ? (
              <>
                <Button 
                  variant="outline" 
                  onClick={handleSave}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  Save Changes
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleCancel}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  Cancel
                </Button>
              </>
            ) : (
              <Button 
                variant="outline" 
                onClick={() => {
                  setEditForm(patientInfo);
                  setIsEditing(true);
                }}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
              >
                Edit Profile
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Emergency Contact */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <Phone className="h-5 w-5" />
              Emergency Contact
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label className="text-sm font-medium">Name</Label>
              {isEditing ? (
                <Input
                  value={editForm.emergencyContact.name}
                  onChange={(e) => setEditForm({
                    ...editForm,
                    emergencyContact: { ...editForm.emergencyContact, name: e.target.value }
                  })}
                  className="mt-1"
                />
              ) : (
                <div className="text-lg font-semibold">{patientInfo.emergencyContact.name}</div>
              )}
            </div>
            <div>
              <Label className="text-sm font-medium">Phone</Label>
              {isEditing ? (
                <Input
                  value={editForm.emergencyContact.phone}
                  onChange={(e) => setEditForm({
                    ...editForm,
                    emergencyContact: { ...editForm.emergencyContact, phone: e.target.value }
                  })}
                  className="mt-1"
                />
              ) : (
                <div className="text-lg font-mono">{patientInfo.emergencyContact.phone}</div>
              )}
            </div>
            <div>
              <Label className="text-sm font-medium">Relationship</Label>
              {isEditing ? (
                <Input
                  value={editForm.emergencyContact.relationship}
                  onChange={(e) => setEditForm({
                    ...editForm,
                    emergencyContact: { ...editForm.emergencyContact, relationship: e.target.value }
                  })}
                  className="mt-1"
                />
              ) : (
                <div className="text-base">{patientInfo.emergencyContact.relationship}</div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Medical Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertCircle className="h-5 w-5" />
              Medical Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <Label className="text-sm font-medium">Allergies</Label>
                {isEditing ? (
                  <Input
                    value={editForm.allergies.join(', ')}
                    onChange={(e) => setEditForm({
                      ...editForm,
                      allergies: e.target.value.split(',').map(a => a.trim()).filter(a => a)
                    })}
                    placeholder="Enter allergies separated by commas"
                    className="mt-2"
                  />
                ) : (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {patientInfo.allergies.map((allergy, index) => (
                      <Badge key={index} variant="destructive" className="text-sm">
                        {allergy}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <Label className="text-sm font-medium">Diagnosis</Label>
                {isEditing ? (
                  <Input
                    value={editForm.diagnosis}
                    onChange={(e) => setEditForm({ ...editForm, diagnosis: e.target.value })}
                    className="mt-1"
                  />
                ) : (
                  <div className="text-base mt-1">{patientInfo.diagnosis}</div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Current Medications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Pill className="h-5 w-5 text-accent" />
            Current Medications
          </CardTitle>
          <CardDescription>Active prescriptions and supplements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {patientInfo.medications.map((medication, index) => (
              <div key={index} className="p-4 border rounded-lg bg-card">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{medication.name}</h3>
                    <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                      <span><strong>Dosage:</strong> {medication.dosage}</span>
                      <span><strong>Frequency:</strong> {medication.frequency}</span>
                    </div>
                    {medication.notes && (
                      <div className="mt-2 p-2 bg-muted rounded text-sm">
                        <strong>Notes:</strong> {medication.notes}
                      </div>
                    )}
                  </div>
                  <Badge variant="outline" className="bg-accent text-accent-foreground">
                    Active
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Preferences & Routine */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            Preferences & Routine
          </CardTitle>
          <CardDescription>Important information about daily preferences and habits</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label className="text-sm font-medium text-primary">Favorite Activities</Label>
            {isEditing ? (
              <Input
                value={editForm.preferences.favoriteActivities.join(', ')}
                onChange={(e) => setEditForm({
                  ...editForm,
                  preferences: {
                    ...editForm.preferences,
                    favoriteActivities: e.target.value.split(',').map(a => a.trim()).filter(a => a)
                  }
                })}
                placeholder="Enter favorite activities separated by commas"
                className="mt-2"
              />
            ) : (
              <div className="flex flex-wrap gap-2 mt-2">
                {patientInfo.preferences.favoriteActivities.map((activity, index) => (
                  <Badge key={index} variant="outline" className="bg-primary/5 text-primary border-primary/20">
                    {activity}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div>
            <Label className="text-sm font-medium text-muted-foreground">Things to Avoid</Label>
            {isEditing ? (
              <Input
                value={editForm.preferences.dislikes.join(', ')}
                onChange={(e) => setEditForm({
                  ...editForm,
                  preferences: {
                    ...editForm.preferences,
                    dislikes: e.target.value.split(',').map(a => a.trim()).filter(a => a)
                  }
                })}
                placeholder="Enter things to avoid separated by commas"
                className="mt-2"
              />
            ) : (
              <div className="flex flex-wrap gap-2 mt-2">
                {patientInfo.preferences.dislikes.map((dislike, index) => (
                  <Badge key={index} variant="outline" className="bg-muted text-muted-foreground">
                    {dislike}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div>
            <Label className="text-sm font-medium">Daily Routine Notes</Label>
            {isEditing ? (
              <Textarea
                value={editForm.preferences.routineNotes}
                onChange={(e) => setEditForm({
                  ...editForm,
                  preferences: { ...editForm.preferences, routineNotes: e.target.value }
                })}
                className="mt-2"
                rows={4}
              />
            ) : (
              <div className="mt-2 p-4 bg-muted rounded-lg border">
                <p className="text-base leading-relaxed">{patientInfo.preferences.routineNotes}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Button variant="outline" className="h-16 flex-col gap-2">
          <Calendar className="h-5 w-5" />
          <span className="text-sm">View Schedule</span>
        </Button>
        <Button variant="outline" className="h-16 flex-col gap-2">
          <Pill className="h-5 w-5" />
          <span className="text-sm">Medications</span>
        </Button>
        <Button variant="outline" className="h-16 flex-col gap-2">
          <Heart className="h-5 w-5" />
          <span className="text-sm">Activities</span>
        </Button>
        <Button variant="outline" className="h-16 flex-col gap-2">
          <Phone className="h-5 w-5" />
          <span className="text-sm">Emergency</span>
        </Button>
      </div>
    </div>
  );
}