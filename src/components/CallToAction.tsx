import React from 'react';
import { Button } from "@/components/ui/button";
import { MailIcon, MessageCircle, Sparkles, Github, Linkedin, Twitter } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-professional-gradient opacity-70"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      
      <div className="container mx-auto max-w-4xl relative z-30">
        <div className="magic-card p-8 md:p-12 text-center">
          <Sparkles className="h-6 w-6 text-blue-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 cosmic-glow">Let's meet under the digital cherry blossom</h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Share your story — I'll help you build it. Whether you have a detailed plan or just a seed of an idea, I'm here to nurture it into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:divyanshuraj5050@gmail.com"
              className="magic-button bg-indigo-600 hover:bg-indigo-700 flex items-center gap-2 relative z-30"
            >
              <MailIcon className="h-5 w-5" />
              Email Me
            </a>
            <a 
              href="https://calendly.com/divyanshuraj5050"
              target="_blank"
              rel="noopener noreferrer"
              className="magic-button flex items-center gap-2 relative z-30"
            >
              <MessageCircle className="h-5 w-5" />
              Schedule a Call
              <Sparkles className="h-4 w-4 ml-1 animate-twinkle" />
            </a>
          </div>
          
          <div className="mt-8">
            <p className="text-sm text-indigo-200 mb-4">Or find me on</p>
            <div className="flex gap-6 justify-center">
              <a 
                href="https://github.com/endurance21" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-200 hover:text-blue-300 transition-colors group relative z-30"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/divyanshu-raj-899514186/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-200 hover:text-blue-300 transition-colors group relative z-30"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://x.com/divyans53371357?s=21" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-200 hover:text-blue-300 transition-colors group relative z-30"
                aria-label="X (Twitter)"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
