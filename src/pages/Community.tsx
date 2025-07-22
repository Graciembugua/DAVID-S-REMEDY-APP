import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, MessageSquare, Heart, HandHeart } from 'lucide-react';

const Community = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-light-sky-blue/10 p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Users className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Dementia Compass Connect</h1>
          <p className="text-muted-foreground">
            Connect with fellow caregivers in a safe, supportive community
          </p>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <MessageSquare className="h-6 w-6 text-accent" />
              Community Forum
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center py-12">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="p-6 bg-accent/10 rounded-full">
                  <HandHeart className="h-16 w-16 text-accent" />
                </div>
              </div>
              
              <div className="max-w-2xl mx-auto space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Coming Soon: Your Caring Community
                </h3>
                <p className="text-muted-foreground">
                  A secure and supportive online community forum where dementia caregivers 
                  can connect with peers, share experiences, ask questions, and offer advice. 
                  You're not alone in this journey.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-8 text-sm">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-primary" />
                      <h4 className="font-medium text-foreground">Peer Support</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Connect with other caregivers who understand your journey
                    </p>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="h-4 w-4 text-accent" />
                      <h4 className="font-medium text-foreground">Share Experiences</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Share your stories, challenges, and victories with others
                    </p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="h-4 w-4 text-primary" />
                      <h4 className="font-medium text-foreground">Emotional Support</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Find comfort and understanding from fellow caregivers
                    </p>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <HandHeart className="h-4 w-4 text-accent" />
                      <h4 className="font-medium text-foreground">Practical Advice</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Get practical tips and advice from experienced caregivers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Community;