
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <a href="#" className="font-handwritten text-2xl text-ghibli-darkgreen font-bold">
            Divyanshu
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-ghibli-darkbrown hover:text-ghibli-darkgreen transition-colors">Home</a>
            <a href="#" className="text-ghibli-darkbrown hover:text-ghibli-darkgreen transition-colors">Projects</a>
            <a href="#" className="text-ghibli-darkbrown hover:text-ghibli-darkgreen transition-colors">Tech Stack</a>
            <a href="#" className="text-ghibli-darkbrown hover:text-ghibli-darkgreen transition-colors">About Me</a>
            <Button className="ghibli-button text-sm py-2">Contact Me</Button>
          </div>
          
          <button 
            className="md:hidden text-ghibli-darkbrown"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 absolute top-full left-0 right-0 border-t border-ghibli-lightbrown/30">
          <div className="flex flex-col space-y-4">
            <a 
              href="#" 
              className="text-ghibli-darkbrown hover:text-ghibli-darkgreen transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-ghibli-darkbrown hover:text-ghibli-darkgreen transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#" 
              className="text-ghibli-darkbrown hover:text-ghibli-darkgreen transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tech Stack
            </a>
            <a 
              href="#" 
              className="text-ghibli-darkbrown hover:text-ghibli-darkgreen transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Me
            </a>
            <Button 
              className="ghibli-button justify-center"
              onClick={() => setMobileMenuOpen(false)}
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
