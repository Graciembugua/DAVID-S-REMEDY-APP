import React from 'react';
import { Brain, Shield, Heart, MessageSquare, Pill, Users } from 'lucide-react';

interface SuggestionChipsProps {
  onSuggestionClick: (message: string) => void;
}

const suggestions = [
  {
    icon: Brain,
    text: "Managing behavioral changes",
    message: "My loved one is showing challenging behaviors. What strategies can help?"
  },
  {
    icon: MessageSquare,
    text: "Communication tips",
    message: "How can I communicate better with someone who has dementia?"
  },
  {
    icon: Shield,
    text: "Home safety",
    message: "What safety measures should I consider for someone with dementia?"
  },
  {
    icon: Heart,
    text: "Caregiver self-care",
    message: "I'm feeling overwhelmed as a caregiver. How can I take care of myself?"
  },
  {
    icon: Pill,
    text: "Medication management",
    message: "What are some strategies for managing medications effectively?"
  },
  {
    icon: Users,
    text: "Sundowning help",
    message: "My loved one gets agitated in the evening. What can I do about sundowning?"
  }
];

export const SuggestionChips: React.FC<SuggestionChipsProps> = ({ onSuggestionClick }) => {
  return (
    <div className="animate-slide-up">
      <p className="text-sm text-muted-foreground mb-3 font-medium">Common topics I can help with:</p>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => {
          const Icon = suggestion.icon;
          return (
            <button
              key={index}
              onClick={() => onSuggestionClick(suggestion.message)}
              className="suggestion-chip flex items-center gap-2"
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm">{suggestion.text}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};