import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Heart, 
  Users, 
  Clock, 
  BookHeart, 
  Stethoscope,
  Lightbulb,
  Shield
} from 'lucide-react';

const dementiaTypes = [
  {
    name: "Alzheimer's Disease",
    icon: Brain,
    description: "The most common form of dementia, affecting memory, thinking, and behavior.",
    symptoms: ["Memory loss", "Confusion", "Difficulty with familiar tasks", "Changes in mood"],
    prevalence: "60-80% of cases",
    color: "bg-primary/10 text-primary border-primary/20"
  },
  {
    name: "Vascular Dementia",
    icon: Heart,
    description: "Caused by reduced blood flow to the brain, often after a stroke.",
    symptoms: ["Problems with planning", "Difficulty concentrating", "Memory issues", "Confusion"],
    prevalence: "10% of cases",
    color: "bg-red-50 text-red-700 border-red-200"
  },
  {
    name: "Lewy Body Dementia",
    icon: Lightbulb,
    description: "Characterized by abnormal protein deposits that affect thinking and movement.",
    symptoms: ["Visual hallucinations", "Movement problems", "Sleep disturbances", "Attention fluctuations"],
    prevalence: "5-10% of cases",
    color: "bg-purple-50 text-purple-700 border-purple-200"
  },
  {
    name: "Frontotemporal Dementia",
    icon: Users,
    description: "Affects the frontal and temporal lobes, impacting personality and language.",
    symptoms: ["Personality changes", "Language problems", "Inappropriate behavior", "Emotional changes"],
    prevalence: "5-10% of cases",
    color: "bg-orange-50 text-orange-700 border-orange-200"
  },
  {
    name: "Mixed Dementia",
    icon: Shield,
    description: "A combination of two or more types of dementia occurring simultaneously.",
    symptoms: ["Varied symptoms", "Complex presentation", "Multiple cognitive domains affected"],
    prevalence: "10-20% of cases",
    color: "bg-green-50 text-green-700 border-green-200"
  },
  {
    name: "Parkinson's Disease Dementia",
    icon: Stethoscope,
    description: "Develops in people with Parkinson's disease, affecting thinking and memory.",
    symptoms: ["Movement problems", "Memory issues", "Visual hallucinations", "Executive dysfunction"],
    prevalence: "2-5% of cases",
    color: "bg-blue-50 text-blue-700 border-blue-200"
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-light-sky-blue/10">
      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Welcome to David's Remedy
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A comprehensive support system designed specifically for caregivers of individuals 
              living with dementia. We understand the challenges you face and we're here to help.
            </p>
          </div>
        </div>

        {/* Why David's Remedy is Important Section */}
        <section className="mb-16">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground flex items-center justify-center gap-3">
                <BookHeart className="h-8 w-8 text-accent" />
                Why David's Remedy is Important
              </CardTitle>
            </CardHeader>
            <CardContent className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    The Challenge
                  </h3>
                  <p className="text-muted-foreground">
                    Caring for someone with dementia is a demanding and often isolating experience. 
                    Caregivers face numerous challenges including managing daily routines, understanding 
                    behavioral changes, finding reliable information, and maintaining their own well-being.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <Heart className="h-5 w-5 text-accent" />
                    Our Solution
                  </h3>
                  <p className="text-muted-foreground">
                    David's Remedy centralizes essential tools and information in one place. From 
                    AI-powered support to community connections, planning tools to educational resources - 
                    we provide everything you need to reduce caregiver burden and improve quality of life.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-center text-foreground font-medium">
                  "You are not alone in this journey. David's Remedy is here to provide the support, 
                  resources, and community you need to care for your loved one while taking care of yourself."
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Types of Dementia Section */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">Types of Dementia</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understanding different types of dementia can help you better support your loved one. 
              Each type has unique characteristics and symptoms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dementiaTypes.map((type) => (
              <Card key={type.name} className={`${type.color} hover:shadow-lg transition-all duration-300 h-full`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <type.icon className="h-6 w-6 flex-shrink-0" />
                    <span>{type.name}</span>
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {type.prevalence}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm">
                    {type.description}
                  </CardDescription>
                  
                  <div>
                    <h4 className="font-medium text-sm mb-2">Common Symptoms:</h4>
                    <ul className="text-xs space-y-1">
                      {type.symptoms.map((symptom, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-current rounded-full flex-shrink-0" />
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Explore our comprehensive tools designed to support you in your caregiving journey. 
                From planning assistance to community support, everything you need is at your fingertips.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-primary">
                <span>• AI-Powered Chatbot</span>
                <span>• Daily Planner</span>
                <span>• Community Forum</span>
                <span>• Educational Resources</span>
                <span>• Cognitive Games</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;