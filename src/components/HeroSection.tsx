
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDownCircle, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-magic-violet rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-magic-teal rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container max-w-5xl mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 cosmic-glow">
              Hi, I'm <span className="text-magic-teal">Divyanshu</span> — a Microsoft Engineer, GSoC Fellow, and freelance software craftsman.
            </h1>
            <p className="text-lg md:text-xl text-magic-twilight mb-8">
              Let's build something magical together — clean, scalable, and full of care.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-black bg-opacity-30 backdrop-blur-sm px-4 py-2 rounded-lg border border-magic-twilight/20">
                <img src="/microsoft-logo.png" alt="Microsoft" className="h-6" />
                <span className="text-sm font-medium text-magic-twilight">Microsoft Engineer</span>
              </div>
              <div className="flex items-center gap-2 bg-black bg-opacity-30 backdrop-blur-sm px-4 py-2 rounded-lg border border-magic-twilight/20">
                <img src="/gsoc-logo.png" alt="GSoC" className="h-6" />
                <span className="text-sm font-medium text-magic-twilight">GSoC Fellow</span>
              </div>
            </div>
            
            <Button className="magic-button group">
              Explore My Work
              <ArrowDownCircle className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-magic-teal/20 rounded-full blur-3xl transform scale-75"></div>
              <img 
                src="/hero-illustration.png" 
                alt="Studio Ghibli style developer in a magical workspace" 
                className="relative z-10 w-full max-w-md animate-float"
              />
              <div className="absolute top-0 right-0 w-8 h-8 text-magic-spark animate-twinkle">
                <Sparkles className="w-full h-full" />
              </div>
              <div className="absolute bottom-1/4 left-0 w-6 h-6 text-magic-gold animate-twinkle" style={{ animationDelay: '1s' }}>
                <Sparkles className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDownCircle className="h-8 w-8 text-magic-teal opacity-70" />
      </div>
    </div>
  );
};

export default HeroSection;
