
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Testimonials from '@/components/Testimonials';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import WorkWithMe from '@/components/WorkWithMe';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Fireflies from '@/components/Fireflies';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Fireflies with slow, persistent motion */}
      <Fireflies 
        count={35} 
        minOpacity={0.3}
        maxOpacity={0.6}
        colors={['#4F46E5', '#F8FAFC', '#38BDF8']} 
      />
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
