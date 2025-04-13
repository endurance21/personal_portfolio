import React from 'react';
import { CheckCircle, Clock, Heart, Lightbulb, Sparkles } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Step = ({ icon, title, description }: StepProps) => (
  <div className="relative flex gap-4 items-start group">
    <div className="w-12 h-12 rounded-full bg-magic-deepPurple flex items-center justify-center text-magic-teal flex-shrink-0 z-10 border border-magic-violet/30 group-hover:border-magic-teal/50 transition-colors">
      {icon}
    </div>
    <div className="flex-grow">
      <h3 className="font-bold text-xl mb-2 text-magic-teal group-hover:text-magic-starlight transition-colors">{title}</h3>
      <p className="text-magic-twilight">{description}</p>
    </div>
  </div>
);

const WorkWithMe = () => {
  const steps = [

    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Engineer first, empath second",
      description: "I combine technical expertise with a deep understanding of your business needs and user experience."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Your product becomes my world",
      description: "I immerse myself in your vision, treating your project with the same care and attention as my own."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Post-launch care included",
      description: "Our relationship doesn't end at deployment. I provide ongoing support to ensure long-term success."
    }
  ];

  return (
    <section id="work-with-me" className="py-24 px-4 bg-cosmic-gradient relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-shimmer bg-200% opacity-5 animate-shimmer"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 cosmic-glow">Why Work With Me</h2>
          <p className="text-magic-twilight max-w-2xl mx-auto">
            From a tiny seed of an idea to a blooming product, I'll be with you every step of the way.
          </p>
          <div className="w-24 h-1 bg-magic-spark mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="relative">
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-magic-twilight/20 hidden md:block"></div>
          
          <div className="space-y-16 md:space-y-24 relative">
            {steps.map((step, index) => (
              <Step key={index} {...step} />
            ))}
          </div>
          
          <div className="mt-16 md:mt-24 md:ml-12">
            <div className="magic-card p-8 max-w-2xl relative">
              <Sparkles className="absolute top-3 right-3 h-5 w-5 text-magic-spark opacity-60" />
              <p className="text-lg italic text-magic-twilight">
                "I don't just build what you ask for; I help you discover what you truly need. Together, we'll craft a solution that surpasses expectations and stands the test of time."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithMe;
