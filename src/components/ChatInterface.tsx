import React, { useState, useRef, useEffect } from 'react';
import { Send, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { SuggestionChips } from './SuggestionChips';
import { TypingIndicator } from './TypingIndicator';
import { WelcomeMessage } from './WelcomeMessage';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (messageContent?: string) => {
    const content = messageContent || input.trim();
    if (!content) return;

    setShowWelcome(false);
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      // Simulate AI response delay
      await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));
      
      const response = await generateResponse(content);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      toast({
        title: "Connection Error",
        description: "I'm having trouble responding right now. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsTyping(false);
    }
  };

  const generateResponse = async (userInput: string): Promise<string> => {
    // Comprehensive dementia caregiver knowledge base responses
    const responses = {
      fear_anxiety: [
        "Fear and anxiety are common in dementia due to confusion and memory loss. Stay calm and use a soothing voice. Validate their feelings by saying 'I understand you're scared.' Provide physical comfort through gentle touch if they're receptive.",
        "When someone with dementia is scared, avoid dismissing their fears. Instead, reassure them of their safety: 'You're safe here with me.' Use familiar objects, photos, or music to provide comfort. Sometimes distraction with a pleasant activity can help.",
        "Fear often stems from not recognizing their environment or people. Keep lighting adequate, maintain familiar routines, and introduce yourself calmly if they don't recognize you. Consider what might be triggering the fear - loud noises, unfamiliar faces, or physical discomfort.",
      ],
      confusion_disorientation: [
        "Confusion and disorientation are hallmarks of dementia. Gently reorient them without overwhelming details. Use simple phrases like 'It's Tuesday afternoon' or 'We're at home.' Avoid lengthy explanations that might increase confusion.",
        "When they're disoriented, focus on feelings rather than facts. If they think they need to go to work, acknowledge the feeling: 'Work was important to you.' Then gently redirect: 'But right now, let's have some tea together.'",
        "Create visual cues around the home - large clocks, calendars, and labeled photos. Maintain consistent daily routines as much as possible. Familiar objects and scents can help ground them in the present.",
      ],
      agitation_anger: [
        "Agitation often signals an unmet need. Check if they're hungry, thirsty, in pain, or need the bathroom. Environmental factors like noise, crowds, or temperature changes can also trigger agitation.",
        "When they're angry or agitated, stay calm and speak softly. Give them space if safe to do so. Try the TEEPA approach: Take a step back, Evaluate the situation, Engage calmly, Pause if needed, and Approach with empathy.",
        "Redirect their attention to something pleasant - favorite music, a photo album, or a simple task they can accomplish. Validate their emotions: 'I can see you're upset' before attempting to address the underlying cause.",
      ],
      repetitive_behaviors: [
        "Repetitive questions or behaviors often provide comfort or express anxiety. Try not to show frustration. Answer patiently each time, or redirect to an activity that meets the same emotional need.",
        "If they repeatedly ask to go home, they may be seeking comfort and security. Acknowledge the feeling: 'You miss home' and then provide comfort through familiar items, photos, or discussing happy memories of home.",
        "For repetitive actions like pacing or organizing, ensure safety and consider if it serves a purpose. Sometimes these behaviors are self-soothing. Provide alternatives like folding laundry or organizing safe items.",
      ],
      hygiene_resistance: [
        "Resistance to bathing or grooming is common due to fear, cold, or loss of privacy. Make the bathroom warm, use gentle lighting, and explain each step. Consider sponge baths if full baths are too distressing.",
        "Respect their dignity and modesty. Let them do as much as they can independently. Use familiar products with scents they enjoy. Sometimes changing the time of day or the person helping can make a difference.",
        "Break hygiene tasks into smaller steps. Focus on the most important aspects if they resist everything. Sometimes playing their favorite music or talking about pleasant memories can help them relax during care.",
      ],
      eating_issues: [
        "Eating problems can stem from forgetting how to chew, difficulty swallowing, or medication side effects. Offer familiar foods in small portions. Make mealtimes pleasant and social when possible.",
        "If they're refusing to eat, check for dental pain, constipation, or medication effects. Sometimes they don't recognize food or utensils. Finger foods, colorful plates, or eating together can encourage appetite.",
        "Ensure adequate nutrition with nutritious snacks throughout the day. Smoothies, soups, and soft foods can be easier to manage. Stay hydrated and consult healthcare providers if weight loss occurs.",
      ],
      sleep_disturbances: [
        "Sleep disruption is common in dementia. Maintain regular bedtime routines, limit daytime naps, and ensure adequate daytime light exposure. Create a calm, comfortable sleeping environment.",
        "If they're wandering at night, ensure safety with bed alarms or motion sensors. Night lights can prevent falls. Sometimes they're looking for something familiar - a favorite blanket or stuffed animal might help.",
        "Address discomfort that might prevent sleep - pain, need for bathroom, or room temperature. Gentle evening activities like listening to soft music or looking at photos can promote relaxation.",
      ],
      social_withdrawal: [
        "Social withdrawal often occurs as dementia progresses. Continue including them in family activities at their comfort level. Simple, familiar social interactions can maintain connections and boost mood.",
        "Encourage visits from friends and family, but keep them short and calm. Large groups might be overwhelming. One-on-one interactions often work better than group settings.",
        "Engage them in activities they can still enjoy - listening to music, looking at photos, or simple crafts. Even if they can't participate fully, being present with others provides emotional benefits.",
      ],
      communication: [
        "Use simple, clear language and speak slowly. Make eye contact and use gentle touch if appropriate. Give them time to process and respond. Be patient - communication may take longer but is still meaningful.",
        "Try using visual cues along with words. Point to objects, use familiar photos, or demonstrate what you mean. Sometimes singing or humming familiar songs can help when words become difficult.",
        "When they struggle to find words, avoid finishing their sentences. Instead, encourage them with patience: 'Take your time.' Use yes/no questions when open-ended ones become too difficult.",
      ],
      sundowning: [
        "Sundowning is very common. Try increasing light exposure during the day, maintaining consistent routines, and reducing afternoon caffeine. As evening approaches, dim lights gradually and play calming music.",
        "For sundowning, create a soothing evening routine. Consider earlier dinner times, gentle activities like looking at photo albums, and ensure they're not overtired during the day.",
        "Plan challenging activities for morning hours when they're most alert. Late afternoon fatigue can worsen confusion and agitation. Gentle exercise earlier in the day can promote better evening calm.",
      ],
      selfcare: [
        "Your well-being matters too. Take breaks when you can, even if it's just 10 minutes. Connect with other caregivers who understand your journey. Consider respite care services to give yourself proper rest.",
        "Caregiver burnout is real and serious. Please reach out to friends, family, or support groups. You can't pour from an empty cup - taking care of yourself helps you better care for your loved one.",
        "Practice stress-reduction techniques like deep breathing, meditation, or gentle exercise. Maintain your own health appointments and interests when possible. Remember: asking for help is a sign of strength, not weakness.",
      ],
      safety: [
        "Home safety is crucial. Remove tripping hazards, install grab bars, and consider bed rails if needed. Keep important items like medications and car keys secured. A medical alert system can provide peace of mind.",
        "Consider GPS tracking devices if wandering is a concern. Remove or hide potentially dangerous items like knives or cleaning supplies. Ensure good lighting throughout the home, especially at night.",
        "Install safety locks on doors and windows if wandering is an issue. Motion sensor lights can prevent falls during nighttime bathroom trips. Keep emergency numbers readily accessible.",
      ],
      medication: [
        "Medication management can be challenging. Use pill organizers, set alarms, and work closely with your doctor. Never adjust medications without medical supervision. Keep an updated list of all medications.",
        "If they resist taking medication, try different approaches - liquid forms, crushing pills in food (if safe), or timing doses with meals. Always consult with their healthcare provider about the best strategies.",
        "Monitor for side effects and drug interactions. Some medications can worsen confusion or cause other symptoms. Regular medication reviews with healthcare providers are essential.",
      ],
      end_of_life: [
        "End-stage dementia care focuses on comfort and dignity. Work with hospice or palliative care teams for guidance. Maintain physical comfort, familiar surroundings, and loving presence.",
        "Continue talking to them even if they don't respond. Hearing is often the last sense to fade. Share memories, play favorite music, and let them know they're loved and not alone.",
        "Take care of yourself during this difficult time. Grief is normal even before death occurs. Seek support from counselors, support groups, or spiritual advisors as needed.",
      ],
    };

    const input = userInput.toLowerCase();
    
    // Fear and anxiety
    if (input.includes('scared') || input.includes('afraid') || input.includes('fear') || input.includes('anxious') || input.includes('worry') || input.includes('panic')) {
      return responses.fear_anxiety[Math.floor(Math.random() * responses.fear_anxiety.length)];
    }
    
    // Confusion and disorientation
    if (input.includes('confused') || input.includes('lost') || input.includes('disoriented') || input.includes('recognize') || input.includes('where am i')) {
      return responses.confusion_disorientation[Math.floor(Math.random() * responses.confusion_disorientation.length)];
    }
    
    // Agitation and anger  
    if (input.includes('agitated') || input.includes('angry') || input.includes('aggressive') || input.includes('upset') || input.includes('violent') || input.includes('hitting')) {
      return responses.agitation_anger[Math.floor(Math.random() * responses.agitation_anger.length)];
    }
    
    // Repetitive behaviors
    if (input.includes('repeat') || input.includes('same question') || input.includes('over and over') || input.includes('asking again') || input.includes('pacing')) {
      return responses.repetitive_behaviors[Math.floor(Math.random() * responses.repetitive_behaviors.length)];
    }
    
    // Hygiene and personal care
    if (input.includes('bath') || input.includes('shower') || input.includes('washing') || input.includes('hygiene') || input.includes('grooming') || input.includes('resist care')) {
      return responses.hygiene_resistance[Math.floor(Math.random() * responses.hygiene_resistance.length)];
    }
    
    // Eating issues
    if (input.includes('eating') || input.includes('food') || input.includes('appetite') || input.includes('swallow') || input.includes('refuse to eat') || input.includes('weight loss')) {
      return responses.eating_issues[Math.floor(Math.random() * responses.eating_issues.length)];
    }
    
    // Sleep disturbances
    if (input.includes('sleep') || input.includes('night') || input.includes('wandering') || input.includes('restless') || input.includes('insomnia') || input.includes('awake')) {
      return responses.sleep_disturbances[Math.floor(Math.random() * responses.sleep_disturbances.length)];
    }
    
    // Social withdrawal
    if (input.includes('withdrawn') || input.includes('isolat') || input.includes('social') || input.includes('friends') || input.includes('family visit') || input.includes('participate')) {
      return responses.social_withdrawal[Math.floor(Math.random() * responses.social_withdrawal.length)];
    }
    
    // Communication
    if (input.includes('talk') || input.includes('communication') || input.includes('speak') || input.includes('understand') || input.includes('words') || input.includes('language')) {
      return responses.communication[Math.floor(Math.random() * responses.communication.length)];
    }
    
    // Sundowning
    if (input.includes('sundown') || input.includes('evening') || input.includes('afternoon') || input.includes('late day')) {
      return responses.sundowning[Math.floor(Math.random() * responses.sundowning.length)];
    }
    
    // Self-care for caregivers
    if (input.includes('stress') || input.includes('tired') || input.includes('burnout') || input.includes('overwhelm') || input.includes('help myself') || input.includes('caregiver')) {
      return responses.selfcare[Math.floor(Math.random() * responses.selfcare.length)];
    }
    
    // Safety
    if (input.includes('safe') || input.includes('fall') || input.includes('wander') || input.includes('home safety') || input.includes('dangerous')) {
      return responses.safety[Math.floor(Math.random() * responses.safety.length)];
    }
    
    // Medication
    if (input.includes('medication') || input.includes('pills') || input.includes('medicine') || input.includes('drug') || input.includes('dosage')) {
      return responses.medication[Math.floor(Math.random() * responses.medication.length)];
    }
    
    // End of life care
    if (input.includes('end of life') || input.includes('dying') || input.includes('hospice') || input.includes('final stage') || input.includes('palliative')) {
      return responses.end_of_life[Math.floor(Math.random() * responses.end_of_life.length)];
    }

    // Default empathetic responses
    const defaultResponses = [
      "I understand caregiving can be challenging. You're doing an important and loving thing. What specific aspect would you like to discuss? I'm here to help with behavioral management, communication strategies, or self-care tips.",
      "Thank you for reaching out. Caring for someone with dementia requires patience and understanding. I'm here to provide guidance on daily care challenges, safety concerns, or emotional support. What's on your mind today?",
      "Every caregiver's journey is unique, and you're not alone in this. I can help with practical strategies for managing symptoms, improving communication, or finding moments of self-care. How can I support you right now?",
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  return (
    <div className="flex flex-col h-screen max-h-screen bg-gradient-to-br from-background to-primary/10">
      {/* Header */}
      <div className="flex-shrink-0 border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="flex items-center gap-3 p-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-semibold text-lg text-foreground">AI Companion</h1>
              <p className="text-sm text-muted-foreground">David's Remedy Support</p>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2 text-primary">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Always here to help</span>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {showWelcome && <WelcomeMessage onSuggestionClick={handleSend} />}
          
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
            >
              <div
                className={`chat-bubble ${
                  message.sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-assistant'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
                <div className="text-xs opacity-70 mt-2">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start animate-fade-in">
              <div className="chat-bubble chat-bubble-assistant">
                <TypingIndicator />
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion Chips */}
        {!isTyping && messages.length > 0 && (
          <div className="px-4 pb-2">
            <SuggestionChips onSuggestionClick={handleSend} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="flex-shrink-0 border-t border-border bg-card/80 backdrop-blur-sm p-4">
        <div className="flex gap-2 max-w-4xl mx-auto">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
            placeholder="Ask me about caregiving strategies, managing behaviors, or self-care..."
            className="flex-1"
            disabled={isTyping}
          />
          <Button
            onClick={() => handleSend()}
            disabled={!input.trim() || isTyping}
            size="icon"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <div className="text-xs text-muted-foreground text-center mt-2">
          This AI provides educational information only. Please consult healthcare professionals for medical advice.
        </div>
      </div>
    </div>
  );
};