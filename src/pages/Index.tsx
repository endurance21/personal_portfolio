
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Testimonials from '@/components/Testimonials';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import WorkWithMe from '@/components/WorkWithMe';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import ThreeFireflies from '@/components/ThreeFireflies';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen relative">
      <ThreeFireflies 
        count={isMobile ? 150 : 300}
        size={isMobile ? 3 : 5}
        colors={['#4F46E5', '#F8FAFC', '#38BDF8']} 
        speed={isMobile ? 0.15 : 0.2}
        minDistance={isMobile ? 5 : 10}
        maxDistance={isMobile ? 20 : 40}
        sphereRadius={isMobile ? 200 : 250}
        cameraDistortion={!isMobile}
        distortionIntensity={0.02}
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
