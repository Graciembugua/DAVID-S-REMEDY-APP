import React from 'react';
import { Heart, Shield, MessageCircle, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface WelcomeMessageProps {
  onSuggestionClick: (message: string) => void;
}

const quickStarters = [
  {
    icon: MessageCircle,
    title: "Communication Help",
    description: "Tips for better conversations",
    message: "How can I communicate better with someone who has dementia?"
  },
  {
    icon: Shield,
    title: "Safety at Home",
    description: "Creating a secure environment",
    message: "What safety measures should I consider for someone with dementia?"
  },
  {
    icon: Heart,
    title: "Self-Care",
    description: "Taking care of yourself",
    message: "I'm feeling overwhelmed as a caregiver. How can I take care of myself?"
  },
  {
    icon: Users,
    title: "Behavioral Support",
    description: "Managing challenging moments",
    message: "My loved one is showing challenging behaviors. What strategies can help?"
  }
];

export const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ onSuggestionClick }) => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
            <Heart className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Welcome to David's Remedy AI Companion
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            I'm here to support you on your caregiving journey. Whether you need practical strategies, 
            emotional support, or answers to specific questions, I'm ready to help 24/7 with compassionate, 
            evidence-based guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {quickStarters.map((starter, index) => {
            const Icon = starter.icon;
            return (
              <Button
                key={index}
                variant="outline"
                className="h-auto p-4 text-left justify-start hover:bg-primary/10 hover:border-primary/30 transition-all duration-200"
                onClick={() => onSuggestionClick(starter.message)}
              >
                <div className="flex items-start gap-3 w-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm mb-1">{starter.title}</h3>
                    <p className="text-xs text-muted-foreground">{starter.description}</p>
                  </div>
                </div>
              </Button>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            💙 Remember: You're not alone in this journey. Every question matters, and seeking help shows strength.
          </p>
        </div>
      </Card>
    </div>
  );
};