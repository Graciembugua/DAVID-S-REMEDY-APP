import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gamepad2, Puzzle, Heart, TreePine } from 'lucide-react';

const Game = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-light-sky-blue/10 p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Gamepad2 className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Whispering Woods Compassion Game</h1>
          <p className="text-muted-foreground">
            Gentle cognitive activities for individuals with dementia and their caregivers
          </p>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <TreePine className="h-6 w-6 text-accent" />
              Cognitive Engagement Games
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center py-12">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="p-6 bg-accent/10 rounded-full">
                  <Puzzle className="h-16 w-16 text-accent" />
                </div>
              </div>
              
              <div className="max-w-2xl mx-auto space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Coming Soon: Gentle Cognitive Activities
                </h3>
                <p className="text-muted-foreground">
                  Engaging and gentle games designed for cognitive stimulation for individuals 
                  with dementia, and as shared activities for caregivers and their loved ones. 
                  Promote connection through play and meaningful interaction.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-8 text-sm">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Puzzle className="h-4 w-4 text-primary" />
                      <h4 className="font-medium text-foreground">Memory Games</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Gentle memory exercises designed to stimulate cognitive function
                    </p>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="h-4 w-4 text-accent" />
                      <h4 className="font-medium text-foreground">Shared Activities</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Activities designed for caregivers and loved ones to enjoy together
                    </p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <TreePine className="h-4 w-4 text-primary" />
                      <h4 className="font-medium text-foreground">Nature Themes</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Calming nature-themed activities that promote relaxation and joy
                    </p>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Gamepad2 className="h-4 w-4 text-accent" />
                      <h4 className="font-medium text-foreground">Adaptive Difficulty</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Games that adapt to different cognitive abilities and stages
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

export default Game;