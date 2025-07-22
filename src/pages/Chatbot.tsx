import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Bot, Heart } from 'lucide-react';

const Chatbot = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-light-sky-blue/10 p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <MessageCircle className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">AI Companion Chat</h1>
          <p className="text-muted-foreground">
            Your gentle, understanding AI companion for dementia caregiving support
          </p>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Bot className="h-6 w-6 text-accent" />
              Gentle Mind Companion Chat
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center py-12">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="p-6 bg-accent/10 rounded-full">
                  <Heart className="h-16 w-16 text-accent" />
                </div>
              </div>
              
              <div className="max-w-2xl mx-auto space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Coming Soon: Your AI Support Companion
                </h3>
                <p className="text-muted-foreground">
                  Our AI-powered chatbot is designed to provide compassionate support, 
                  answer your questions about dementia care, offer coping strategies, 
                  and provide emotional guidance whenever you need it.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-8 text-sm">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h4 className="font-medium text-foreground mb-2">24/7 Support</h4>
                    <p className="text-muted-foreground">
                      Get instant answers to your caregiving questions, day or night
                    </p>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <h4 className="font-medium text-foreground mb-2">Emotional Care</h4>
                    <p className="text-muted-foreground">
                      Receive compassionate responses and coping strategies
                    </p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h4 className="font-medium text-foreground mb-2">Practical Advice</h4>
                    <p className="text-muted-foreground">
                      Get helpful tips for daily caregiving challenges
                    </p>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <h4 className="font-medium text-foreground mb-2">Understanding</h4>
                    <p className="text-muted-foreground">
                      Learn about dementia types, symptoms, and care approaches
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

export default Chatbot;