import { useState } from 'react';
import { Navigation } from './Navigation';
import { Dashboard } from './Dashboard';
import { PatientProfile } from './PatientProfile';
import { Calendar } from './Calendar';
import { Medications } from './Medications';
import { Activities } from './Activities';

export function MainApp() {
  const [currentView, setCurrentView] = useState('Dashboard');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'Dashboard':
        return <Dashboard onViewChange={setCurrentView} />;
      case 'PatientProfile':
        return <PatientProfile />;
      case 'Calendar':
        return <Calendar />;
      case 'Medications':
        return <Medications />;
      case 'Activities':
        return <Activities />;
      default:
        return <Dashboard onViewChange={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="lg:flex">
        <Navigation currentView={currentView} onViewChange={setCurrentView} />
        <main className="flex-1">
          {renderCurrentView()}
        </main>
      </div>
    </div>
  );
}