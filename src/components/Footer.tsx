
import React from 'react';
import { Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-magic-twilight/20 bg-magic-navy/40 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-handwritten text-2xl text-magic-teal mb-1 group inline-flex items-center">
              Divyanshu
              <Sparkles className="ml-1 h-4 w-4 text-magic-spark opacity-70" />
            </h3>
            <p className="text-sm text-magic-twilight/70">
              Software craftsman building magical digital experiences
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-magic-twilight hover:text-magic-teal transition-colors">Home</a>
            <a href="#" className="text-magic-twilight hover:text-magic-teal transition-colors">Projects</a>
            <a href="#" className="text-magic-twilight hover:text-magic-teal transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-magic-twilight/20 text-center text-sm text-magic-twilight/60">
          <p>© {new Date().getFullYear()} Divyanshu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
