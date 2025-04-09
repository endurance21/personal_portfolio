
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

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Forest night scene with Three.js fireflies and camera distortion */}
      <ThreeFireflies 
        count={200} 
        size={20} // Increased size for larger fireflies
        colors={['#4F46E5', '#F8FAFC', '#38BDF8']} 
        speed={0.15}
        minDistance={10}
        maxDistance={40}
        sphereRadius={300} // Increased sphere radius for wider distribution
        cameraDistortion={true}
        distortionIntensity={0.03}
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
