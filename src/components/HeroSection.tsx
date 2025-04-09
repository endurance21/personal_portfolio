
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDownCircle, Sparkles, ExternalLink } from 'lucide-react';

const roles = [
  {
    title: "Microsoft Engineer",
    description: "Building enterprise-scale solutions",
    logo: "/microsoft-logo.png",
    color: "bg-blue-600"
  },
  {
    title: "GSoC Fellow",
    description: "Open source contributor",
    logo: "/google-logo.png",
    color: "bg-green-600"
  },
  {
    title: "Freelance Developer",
    description: "Crafting custom solutions",
    logo: "/freelance-logo.png",
    color: "bg-purple-600"
  }
];

const HeroSection = () => {
  const [activeRole, setActiveRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-magic-violet rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-magic-teal rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container max-w-5xl mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hi, I'm <span className="text-magic-teal">Divyanshu</span>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-magic-twilight">{role.title}</h2>
                  </div>
                  <p className="text-lg text-magic-twilight/80">{role.description}</p>
                </div>
              ))}
            </div>
            
            <p className="text-lg md:text-xl text-magic-twilight mb-8">
              Let's build something meaningful together — clean, scalable, and full of thoughtful craftsmanship.
            </p>
            
            <div className="flex gap-4">
              <Button className="bg-magic-navy hover:bg-magic-deepPurple text-white border border-magic-twilight/20 shadow-lg group">
                View Projects
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="bg-transparent border border-magic-twilight/30 text-magic-twilight hover:bg-magic-navy/20 shadow-md">
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-magic-teal/10 rounded-full blur-3xl transform scale-75"></div>
              <img 
                src="/hero-illustration.png" 
                alt="Studio Ghibli style developer in a magical workspace" 
                className="relative z-10 w-full max-w-md animate-float rounded-lg shadow-magic"
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
