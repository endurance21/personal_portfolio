
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-ghibli-lightbrown/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-handwritten text-2xl text-ghibli-darkgreen mb-1">Divyanshu</h3>
            <p className="text-sm text-ghibli-darkbrown/70">
              Software craftsman building magical digital experiences
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-ghibli-darkbrown hover:text-ghibli-darkgreen transition-colors">Home</a>
            <a href="#" className="text-ghibli-darkbrown hover:text-ghibli-darkgreen transition-colors">Projects</a>
            <a href="#" className="text-ghibli-darkbrown hover:text-ghibli-darkgreen transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-ghibli-lightbrown/30 text-center text-sm text-ghibli-darkbrown/60">
          <p>© {new Date().getFullYear()} Divyanshu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
