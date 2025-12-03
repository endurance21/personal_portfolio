import React from 'react';
import { Button } from "@/components/ui/button";
import { MailIcon, MessageCircle, Github, Linkedin, Twitter } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-950">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="professional-card p-8 sm:p-10 md:p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <MailIcon className="h-8 w-8 text-blue-400" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 text-slate-50">
            Let's Build Something Great Together
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you have a detailed plan or just a seed of an idea, I'm here to help bring it to life. Let's discuss how we can turn your vision into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="mailto:divyanshuraj5050@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
            >
              <MailIcon className="h-5 w-5" />
              Email Me
            </a>
            <a 
              href="https://calendly.com/divyanshuraj5050"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-slate-50 hover:border-slate-600 px-6 py-3 rounded-lg font-medium transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              Schedule a Call
            </a>
          </div>
          
          <div className="pt-8 border-t border-slate-800">
            <p className="text-sm text-slate-500 mb-4">Or find me on</p>
            <div className="flex gap-6 justify-center">
              <a 
                href="https://github.com/endurance21" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/divyanshu-raj-899514186/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://x.com/divyans53371357?s=21" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-400 transition-colors"
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
