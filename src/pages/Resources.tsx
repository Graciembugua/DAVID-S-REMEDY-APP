import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, FileText, Video, ExternalLink } from 'lucide-react';

const Resources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-light-sky-blue/10 p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <BookOpen className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Educational Resources</h1>
          <p className="text-muted-foreground">
            Curated articles, videos, and resources for dementia care education
          </p>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <FileText className="h-6 w-6 text-accent" />
              Knowledge Center
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center py-12">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="p-6 bg-accent/10 rounded-full">
                  <BookOpen className="h-16 w-16 text-accent" />
                </div>
              </div>
              
              <div className="max-w-2xl mx-auto space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Coming Soon: Comprehensive Resource Library
                </h3>
                <p className="text-muted-foreground">
                  A curated collection of articles, videos, guides, and external links 
                  related to dementia care, support services, legal aid, and caregiver 
                  well-being. Knowledge is power in your caregiving journey.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-8 text-sm">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <h4 className="font-medium text-foreground">Care Guides</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Comprehensive guides for different aspects of dementia care
                    </p>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Video className="h-4 w-4 text-accent" />
                      <h4 className="font-medium text-foreground">Educational Videos</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Expert-led videos on caregiving techniques and understanding dementia
                    </p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <ExternalLink className="h-4 w-4 text-primary" />
                      <h4 className="font-medium text-foreground">Support Services</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Links to local support services, helplines, and organizations
                    </p>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-4 w-4 text-accent" />
                      <h4 className="font-medium text-foreground">Legal & Financial</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Resources for legal planning, financial aid, and caregiver benefits
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

export default Resources;