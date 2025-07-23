import React, { useState } from 'react';
import { ImageIcon, Smile, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';

interface CreatePostProps {
  onPost?: (content: string, tags: string[]) => void;
}

export const CreatePost = ({ onPost }: CreatePostProps) => {
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handlePost = () => {
    if (content.trim()) {
      const tagList = tags.split(' ').filter(tag => tag.startsWith('#')).map(tag => tag.slice(1));
      onPost?.(content, tagList);
      setContent('');
      setTags('');
    }
  };

  const suggestedTags = [
    'SafetyTips', 'MorningRoutines', 'MedicationManagement', 
    'SelfCare', 'CommunitySupport', 'DailyActivities'
  ];

  return (
    <Card className="w-full mb-6">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback className="bg-accent text-accent-foreground">You</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-medium text-card-foreground">Share with the community</h3>
            <p className="text-sm text-muted-foreground">Your experiences can help others</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-4">
          <Textarea
            placeholder="What's on your mind? Share a tip, ask a question, or offer support..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[100px] resize-none border-border"
          />

          <Input
            placeholder="Add tags (e.g., #SafetyTips #MorningRoutines)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="border-border"
          />

          {/* Suggested Tags */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-muted-foreground">Suggested:</span>
            {suggestedTags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  const tagText = `#${tag}`;
                  if (!tags.includes(tagText)) {
                    setTags(tags ? `${tags} ${tagText}` : tagText);
                  }
                }}
                className="text-sm text-primary hover:underline"
              >
                #{tag}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <ImageIcon className="h-4 w-4 mr-2" />
                Photo
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <Smile className="h-4 w-4 mr-2" />
                Feeling
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                Location
              </Button>
            </div>

            <Button 
              onClick={handlePost} 
              disabled={!content.trim()}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Share Post
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};