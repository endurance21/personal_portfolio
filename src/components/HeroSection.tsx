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
      {/* Subtle background pattern - theme aware */}
      <div className="absolute inset-0 opacity-[0.5] pointer-events-none">
        <div className="absolute top-[-6rem] right-[-4rem] w-80 h-80 rounded-full blur-3xl hero-orb-1" />
        <div className="absolute bottom-[-6rem] left-[-4rem] w-80 h-80 rounded-full blur-3xl hero-orb-2" />
      </div>
      
      {/* Mobile: Blurred background image behind text */}
      <div className="absolute inset-0 lg:hidden pointer-events-none z-0">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <img 
            src="/hero_illustration.svg" 
            alt="" 
            className="w-full h-full object-cover blur-3xl scale-150"
            aria-hidden="true"
          />
        </div>
      </div>
      
      <div className="container max-w-6xl mx-auto z-10 w-full relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in relative z-20">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-[hsl(var(--primary)/0.12)] border border-[hsl(var(--primary)/0.25)]">
              <span className="text-sm font-medium text-[hsl(var(--primary))]">Full Stack Developer</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 text-slate-50">
              Hi, I'm <span className="text-[hsl(var(--primary))]">Divyanshu</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I speak two languages fluently: <strong className="text-[hsl(var(--primary))]">Founders</strong> and <strong className="text-[hsl(var(--primary))]">Full Stack</strong>. I won't take weeks to understand your idea, I grasp the business logic quickly and turn it into clean, scalable <strong className="text-[hsl(var(--primary))]">MERN code</strong>, iterating smoothly as your feedback shapes the product.
            </p>
            
            {/* Tech Stack Icons */}
            <div className="flex flex-wrap items-center gap-3 mb-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-[hsl(var(--primary)/0.5)] transition-all hover:scale-105">
                <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
                </svg>
                <span className="text-sm font-medium text-slate-300">React</span>
              </div>
              
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-[hsl(var(--primary)/0.5)] transition-all hover:scale-105">
                <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.736-1.638c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.152,1.267c0.082,0.045,0.197,0.045,0.272,0l8.49-4.866 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.488-4.871c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v9.707c0,0.097,0.054,0.193,0.139,0.241l2.464,1.417 c1.307,0.654,2.108-0.116,2.108-0.903V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,0.695,0.138,1.156,0.408,1.517c0.303,0.4,0.766,0.614,1.338,0.614c0.636,0,1.14-0.247,1.495-0.714l0.11-0.176 c0.055-0.088,0.15-0.141,0.254-0.141c0.084,0,0.16,0.03,0.221,0.086l1.012,1.114c0.102,0.105,0.101,0.248,0.101,0.252 c0,0.141-0.114,0.255-0.256,0.255l-0.508,0.001c-0.144,0-0.232,0.031-0.274,0.06l-2.594,1.555 C12.643,23.916,12.324,24,11.998,24z"/>
                </svg>
                <span className="text-sm font-medium text-slate-300">Node.js</span>
              </div>
              
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-[hsl(var(--primary)/0.5)] transition-all hover:scale-105">
                <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="2"/>
                  <path d="M8 8h8M8 12h8M8 16h5"/>
                </svg>
                <span className="text-sm font-medium text-slate-300">React Native</span>
              </div>
              
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-[hsl(var(--primary)/0.5)] transition-all hover:scale-105">
                <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.362 9.354H12V.396a9.321 9.321 0 0 0 9.362 8.958zM11.363 0v9.354H0a9.321 9.321 0 0 1 9.363-9.354zM12 14.646v9.354a9.321 9.321 0 0 0 9.362-8.958H12zM11.363 24v-9.354H0a9.321 9.321 0 0 0 9.363 9.354z"/>
                </svg>
                <span className="text-sm font-medium text-slate-300">Supabase</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-primary text-primary-foreground border-0 shadow-lg hover:shadow-xl transition-all h-12 px-6 text-base font-medium hover:bg-[hsl(var(--primary)/0.9)]"
              >
                View Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="bg-transparent border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-slate-50 hover:border-slate-600 h-12 px-6 text-base font-medium"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </div>
          
          {/* Image - Desktop only */}
          <div className="hidden lg:flex w-full lg:w-1/2 justify-center order-first lg:order-last">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 rounded-2xl blur-2xl transform scale-90 hero-image-glow"></div>
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
        onClick={() => scrollToSection('projects')}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-30 group touch-manipulation"
        aria-label="Scroll to projects section"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full blur-md sm:blur-lg transition-all hero-scroll-glow scale-75 sm:scale-100"></div>
          <ArrowDownCircle className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-slate-400 group-hover:text-[hsl(var(--primary))] transition-colors relative z-10" strokeWidth={1.5} />
        </div>
      </button>
    </div>
  );
};

export default HeroSection;
