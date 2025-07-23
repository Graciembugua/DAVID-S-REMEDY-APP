import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Stethoscope, MessageCircle, Clock, ChevronRight } from 'lucide-react';

export const AskDoctor = () => {
  const [question, setQuestion] = useState('');
  const [subject, setSubject] = useState('');

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      specialty: 'Neurologist',
      experience: '15 years',
      rating: 4.9,
      responses: 342,
      isOnline: true,
      nextAvailable: 'Available now'
    },
    {
      id: 2,
      name: 'Dr. Michael Roberts',
      specialty: 'Geriatrician',
      experience: '12 years',
      rating: 4.8,
      responses: 278,
      isOnline: true,
      nextAvailable: 'Available now'
    },
    {
      id: 3,
      name: 'Dr. Jennifer Wong',
      specialty: 'Psychiatrist',
      experience: '10 years',
      rating: 4.9,
      responses: 195,
      isOnline: false,
      nextAvailable: 'Available in 2 hours'
    }
  ];

  const recentQuestions = [
    {
      id: 1,
      question: 'How can I help my father remember to take his medications?',
      doctor: 'Dr. Sarah Chen',
      category: 'Medication Management',
      answered: true,
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      question: 'What are early warning signs I should watch for?',
      doctor: 'Dr. Michael Roberts',
      category: 'Early Detection',
      answered: true,
      timestamp: '5 hours ago'
    },
    {
      id: 3,
      question: 'How do I handle aggressive behavior episodes?',
      doctor: 'Dr. Jennifer Wong',
      category: 'Behavioral Issues',
      answered: false,
      timestamp: '1 day ago'
    }
  ];

  const handleSubmitQuestion = () => {
    if (question.trim() && subject.trim()) {
      alert(`Question submitted: "${subject}"\n\nA doctor will respond within 24 hours. You'll receive a notification when they reply.`);
      setQuestion('');
      setSubject('');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Ask a Doctor</h1>
        <p className="text-muted-foreground">Get expert medical advice from verified healthcare professionals</p>
      </div>

      {/* Ask Question Form */}
      <Card>
        <CardHeader>
          <h3 className="font-semibold">Submit Your Question</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Question subject or topic"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <Textarea
            placeholder="Describe your question in detail. Include relevant background information to help doctors provide the best advice."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="min-h-[120px]"
          />
          <div className="flex justify-end">
            <Button onClick={handleSubmitQuestion} disabled={!question.trim() || !subject.trim()}>
              Submit Question
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Available Doctors */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Available Doctors</h3>
        <div className="grid gap-4">
          {doctors.map((doctor) => (
            <Card key={doctor.id}>
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12 flex-shrink-0">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {doctor.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="font-semibold text-sm sm:text-base">{doctor.name}</h4>
                        <Badge variant="secondary" className="bg-primary text-primary-foreground text-xs">
                          <Stethoscope className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                        {doctor.isOnline && (
                          <div className="w-2 h-2 bg-green-500 rounded-full" title="Online"></div>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground">{doctor.specialty} • {doctor.experience}</p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mt-1">
                        <span>⭐ {doctor.rating}</span>
                        <span>{doctor.responses} responses</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span className="truncate">{doctor.nextAvailable}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto"
                    onClick={() => alert(`Starting conversation with ${doctor.name}. You can now send them a direct message.`)}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Ask Question
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Questions */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Recent Questions & Answers</h3>
        <div className="space-y-3">
          {recentQuestions.map((q) => (
            <Card key={q.id}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm mb-2">{q.question}</h4>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <Badge variant="outline" className="text-xs">{q.category}</Badge>
                      <span>Answered by {q.doctor}</span>
                      <span>{q.timestamp}</span>
                      <Badge variant={q.answered ? "default" : "secondary"}>
                        {q.answered ? "Answered" : "Pending"}
                      </Badge>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => alert(`Viewing full Q&A: "${q.question}"\n\nCategory: ${q.category}\nStatus: ${q.answered ? 'Answered' : 'Pending'}`)}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};