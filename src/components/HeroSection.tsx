import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDownCircle, Sparkles, ExternalLink, LampCeiling } from 'lucide-react';
import ThreeFireflies from "@/components/ThreeFireflies";

const roles = [
  {
    title: "Microsoft Engineer",
    description: "Building enterprise-scale solutions",
    logo: "/microsoft-logo.png",
    color: "bg-indigo-600"
  },
  {
    title: "GSoC Fellow",
    description: "Open source contributor",
    logo: "/google-logo.png",
    color: "bg-blue-500"
  },
  {
    title: "Freelance Developer",
    description: "Crafting custom solutions",
    logo: "/freelance-logo.png",
    color: "bg-slate-200"
  }
];

const HeroSection = () => {
  const [activeRole, setActiveRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRole((prev) => (prev + 1) % roles.length);
    }, 3000); // Slower animation (3000ms)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-700 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-40"></div>
      </div>
      
      <div className="container max-w-5xl mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fade-in cosmic-glow">
              Hi, I'm <span className="text-indigo-400">Divyanshu</span>
            </h1>
            
            <div className="h-24 mb-6 overflow-hidden relative">
              {roles.map((role, index) => (
                <div 
                  key={index}
                  className={`absolute w-full transition-all duration-500 ease-in-out ${
                    index === activeRole 
                      ? "top-0 opacity-100" 
                      : "top-16 opacity-0"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-12 h-12 rounded-lg ${role.color} flex items-center justify-center p-2 shadow-lg`}>
                      <img 
                        src={role.logo} 
                        alt={role.title} 
                        className="max-w-full max-h-full object-contain" 
                      />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">{role.title}</h2>
                  </div>
                  <p className="text-lg text-indigo-50/90">{role.description}</p>
                </div>
              ))}
            </div>
            
            <p className="text-lg md:text-xl text-indigo-50/90 mb-8">
              Let's build something magical together — clean, scalable, and full of thoughtful craftsmanship.
            </p>
            
            <div className="flex gap-4">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white border border-indigo-500/20 shadow-lg group">
                View Projects
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="bg-transparent border border-indigo-300/30 text-indigo-50 hover:bg-indigo-500/20 shadow-md">
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-400/10 rounded-full blur-3xl transform scale-75"></div>
              <img 
                src="/hero-illustration.png" 
                alt="Studio Ghibli style developer in a magical workspace" 
                className="relative z-10 w-full max-w-md animate-float rounded-lg shadow-professional"
              />
              <div className="absolute top-0 right-0 w-8 h-8 text-blue-400 animate-twinkle">
                <Sparkles className="w-full h-full" />
              </div>
              <div className="absolute bottom-1/4 left-0 w-6 h-6 text-indigo-400 animate-twinkle" style={{ animationDelay: '1s' }}>
                <Sparkles className="w-full h-full" />
              </div>
              <div className="absolute top-1/3 right-1/4 w-5 h-5 text-white animate-twinkle" style={{ animationDelay: '2s' }}>
                <LampCeiling className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDownCircle className="h-8 w-8 text-indigo-400 opacity-80" />
      </div>
    </div>
  );
};

export default HeroSection;
