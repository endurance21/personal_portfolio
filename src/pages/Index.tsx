
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Testimonials from '@/components/Testimonials';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import WorkWithMe from '@/components/WorkWithMe';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Testimonials />
      <Projects />
      <TechStack />
      <WorkWithMe />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
