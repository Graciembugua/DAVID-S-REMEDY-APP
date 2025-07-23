import { useState } from 'react';
import { CommunityLayout } from '@/components/community/CommunityLayout';
import { CommunityFeed } from '@/components/community/CommunityFeed';
import { AskDoctor } from '@/components/community/AskDoctor';
import { Caregivers } from '@/components/community/Caregivers';
import { Messages } from '@/components/community/Messages';

const Community = () => {
  const [currentView, setCurrentView] = useState('feed');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'feed':
        return <CommunityFeed />;
      case 'ask-doctor':
        return <AskDoctor />;
      case 'caregivers':
        return <Caregivers />;
      case 'messages':
        return <Messages />;
      default:
        return <CommunityFeed />;
    }
  };

  return (
    <CommunityLayout currentView={currentView} onViewChange={setCurrentView}>
      {renderCurrentView()}
    </CommunityLayout>
  );
};

export default Community;