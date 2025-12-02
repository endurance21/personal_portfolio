import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 bg-magic-navy/80 backdrop-blur-md shadow-sm border-b border-magic-twilight/20' : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <a 
            href="#" 
            className="font-handwritten text-2xl text-magic-teal font-bold group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="inline-flex items-center">
              Divyanshu
              <Sparkles className="h-4 w-4 ml-1 text-magic-spark opacity-70 group-hover:animate-twinkle" />
            </span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-magic-twilight hover:text-magic-teal transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-magic-twilight hover:text-magic-teal transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('work-with-me')}
              className="text-magic-twilight hover:text-magic-teal transition-colors"
            >
              Why me ?
            </button>
            <Button 
              className="magic-button text-sm py-2 flex items-center gap-2"
              onClick={() => scrollToSection('contact')}
            >
              <span>Contact Me</span>
              <Sparkles className="h-3 w-3 animate-twinkle" />
            </Button>
          </div>
          
          <button 
            className="md:hidden text-magic-twilight"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-magic-navy/95 backdrop-blur-lg shadow-lg py-4 px-4 absolute top-full left-0 right-0 border-t border-magic-twilight/20">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-magic-twilight hover:text-magic-teal transition-colors py-2"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-magic-twilight hover:text-magic-teal transition-colors py-2"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('work-with-me')}
              className="text-magic-twilight hover:text-magic-teal transition-colors py-2"
            >
              About Me
            </button>
            <Button 
              className="magic-button justify-center"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
