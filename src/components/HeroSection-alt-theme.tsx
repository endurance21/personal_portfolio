import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDownCircle, ExternalLink, Mail } from 'lucide-react';

const HeroSection = () => {
  useEffect(() => {
    document.title = "Divyanshu Raj - Full Stack Software Developer";
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 overflow-hidden">
      {/* Subtle background pattern - warmer tones */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container max-w-6xl mx-auto z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-sm font-medium text-emerald-400">Full Stack Developer</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 text-zinc-50">
              Hi, I'm <span className="text-emerald-400">Divyanshu</span>
            </h1>
            
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2 justify-center lg:justify-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/5 border border-zinc-800 flex items-center justify-center p-2">
                  <img 
                    src="/freelance_dp.png" 
                    alt="Freelance Developer" 
                    className="max-w-full max-h-full object-contain" 
                  />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-zinc-50">Freelance Developer</h2>
              </div>
              <p className="text-base sm:text-lg text-zinc-400">Crafting custom solutions for clients</p>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Full-stack developer specializing in MERN and Java Spring Boot. I turn your ideas into scalable, production-ready applications. Fast delivery, clean code, and ongoing support—your success is my priority.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white border-0 shadow-lg hover:shadow-xl transition-all h-12 px-6 text-base font-medium"
              >
                View Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="bg-transparent border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-50 hover:border-zinc-600 h-12 px-6 text-base font-medium"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center order-first lg:order-last">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-2xl transform scale-90"></div>
              <img 
                src="/hero_illustration.svg" 
                alt="Developer illustration" 
                className="relative z-10 w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('top-skills')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-30 group"
        aria-label="Scroll to skills section"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-lg group-hover:bg-emerald-500/20 transition-all"></div>
          <ArrowDownCircle className="h-10 w-10 sm:h-12 sm:w-12 text-zinc-400 group-hover:text-emerald-400 transition-colors relative z-10" strokeWidth={1.5} />
        </div>
      </button>
    </div>
  );
};

export default HeroSection;

