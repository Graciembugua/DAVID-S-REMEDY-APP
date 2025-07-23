import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, MessageCircle, Heart } from 'lucide-react';

export const Caregivers = () => {
  const caregivers = [
    {
      id: 1,
      name: 'Emma Martinez',
      experience: '3 years',
      location: 'San Francisco, CA',
      bio: 'Caring for my mother with early-stage Alzheimer\'s. Always happy to share tips on daily routines.',
      posts: 45,
      connections: 128,
      tags: ['MorningRoutines', 'SelfCare', 'EarlyStage']
    },
    {
      id: 2,
      name: 'Robert Johnson',
      experience: '5 years',
      location: 'Austin, TX',
      bio: 'Spouse caregiver specializing in behavioral management and safety modifications.',
      posts: 72,
      connections: 203,
      tags: ['SafetyTips', 'BehaviorManagement', 'HomeModifications']
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      experience: '2 years',
      location: 'Miami, FL',
      bio: 'New to caregiving, learning every day. Interested in support groups and respite care.',
      posts: 23,
      connections: 67,
      tags: ['NewCaregiver', 'SupportGroups', 'RespiteCare']
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Fellow Caregivers</h1>
          <p className="text-muted-foreground">Connect with others on similar journeys</p>
        </div>
        <Button onClick={() => alert('Opening caregiver search filters...\n\nSearch by location, experience level, or specific needs.')}>
          <Users className="h-4 w-4 mr-2" />
          Find Caregivers
        </Button>
      </div>

      <div className="grid gap-4">
        {caregivers.map((caregiver) => (
          <Card key={caregiver.id}>
            <CardHeader>
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Avatar className="h-16 w-16 flex-shrink-0">
                  <AvatarFallback className="bg-accent text-accent-foreground">
                    {caregiver.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-lg">{caregiver.name}</h3>
                      <p className="text-muted-foreground text-sm">{caregiver.experience} experience • {caregiver.location}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full sm:w-auto"
                      onClick={() => alert(`Connection request sent to ${caregiver.name}!\n\nThey will be notified and can accept your request.`)}
                    >
                      Connect
                    </Button>
                  </div>
                  <p className="mt-2 text-sm">{caregiver.bio}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {caregiver.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Heart className="h-4 w-4" />
                  <span>{caregiver.posts} posts</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{caregiver.connections} connections</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="ml-auto"
                  onClick={() => alert(`Opening chat with ${caregiver.name}...`)}
                >
                  <MessageCircle className="h-4 w-4 mr-1" />
                  Message
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};