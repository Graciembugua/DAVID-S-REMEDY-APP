import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Search, MoreHorizontal, Send } from 'lucide-react';

export const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      lastMessage: 'The medication routine you described sounds good. Keep monitoring...',
      timestamp: '10 min ago',
      unread: 2,
      isDoctor: true,
      specialty: 'Neurologist',
      online: true
    },
    {
      id: 2,
      name: 'Emma Martinez',
      lastMessage: 'Thank you for the morning routine tips! They\'ve been really helpful.',
      timestamp: '2 hours ago',
      unread: 0,
      isDoctor: false,
      online: true
    },
    {
      id: 3,
      name: 'Caregiver Support Group',
      lastMessage: 'Sarah: Has anyone tried the new memory games app?',
      timestamp: '5 hours ago',
      unread: 5,
      isDoctor: false,
      isGroup: true,
      online: false
    },
    {
      id: 4,
      name: 'Robert Johnson',
      lastMessage: 'The safety modifications we discussed are working great!',
      timestamp: '1 day ago',
      unread: 0,
      isDoctor: false,
      online: false
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Dr. Sarah Chen',
      content: 'Hello! I saw your question about medication management. Based on what you described, here are some recommendations...',
      timestamp: '2:30 PM',
      isOwn: false,
      isDoctor: true
    },
    {
      id: 2,
      sender: 'You',
      content: 'Thank you so much for the detailed response! I have a follow-up question about timing.',
      timestamp: '2:45 PM',
      isOwn: true
    },
    {
      id: 3,
      sender: 'Dr. Sarah Chen',
      content: 'Of course! What specific timing concerns do you have?',
      timestamp: '3:00 PM',
      isOwn: false,
      isDoctor: true
    },
    {
      id: 4,
      sender: 'You',
      content: 'Is it better to give medications with meals or on an empty stomach?',
      timestamp: '3:05 PM',
      isOwn: true
    },
    {
      id: 5,
      sender: 'Dr. Sarah Chen',
      content: 'The medication routine you described sounds good. Keep monitoring for any side effects and let me know if you notice any changes.',
      timestamp: '3:20 PM',
      isOwn: false,
      isDoctor: true
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      alert(`Message sent: "${newMessage}"\n\nYour message has been delivered successfully.`);
      setNewMessage('');
    }
  };

  return (
    <div className="h-[calc(100vh-200px)]">
      <div className="flex flex-col lg:flex-row h-full bg-card rounded-lg border border-border overflow-hidden">
        {/* Conversations List */}
        <div className="w-full lg:w-1/3 lg:border-r border-border">
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Messages</h2>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search conversations..." className="pl-10" />
            </div>
          </div>
          
          <div className="overflow-y-auto">
            {conversations.map((conversation) => (
              <div 
                key={conversation.id}
                className={`p-4 border-b border-border cursor-pointer hover:bg-muted/50 ${selectedChat === conversation.id ? 'bg-muted' : ''}`}
                onClick={() => setSelectedChat(conversation.id)}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className={conversation.isDoctor ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"}>
                        {conversation.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    {conversation.online && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium text-sm truncate">{conversation.name}</h3>
                        {conversation.isDoctor && (
                          <Badge variant="secondary" className="bg-primary text-primary-foreground text-xs px-1 py-0">
                            Dr
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                        {conversation.unread > 0 && (
                          <Badge variant="default" className="bg-primary text-primary-foreground text-xs min-w-[1.25rem] h-5 flex items-center justify-center">
                            {conversation.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground truncate mt-1">{conversation.lastMessage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {conversations.find(c => c.id === selectedChat)?.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">{conversations.find(c => c.id === selectedChat)?.name}</h3>
                {conversations.find(c => c.id === selectedChat)?.specialty && (
                  <p className="text-sm text-muted-foreground">{conversations.find(c => c.id === selectedChat)?.specialty}</p>
                )}
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] p-3 rounded-lg ${
                  message.isOwn 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted'
                }`}>
                  {!message.isOwn && (
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-medium">{message.sender}</span>
                      {message.isDoctor && (
                        <Badge variant="secondary" className="bg-primary text-primary-foreground text-xs px-1 py-0">
                          Dr
                        </Badge>
                      )}
                    </div>
                  )}
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-1 ${message.isOwn ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <Input
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};