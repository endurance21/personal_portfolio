
import React, { useRef } from 'react';
import { useFireflies } from '@/hooks/useFireflies';

interface FireflyProps {
  count?: number;
  size?: number;
  minOpacity?: number;
  maxOpacity?: number;
  colors?: string[];
  enabled?: boolean;
}

const Fireflies: React.FC<FireflyProps> = ({
  count = 50,
  size = 4,
  minOpacity = 0.3,
  maxOpacity = 0.6,
  colors = ['#4F46E5', '#F8FAFC', '#38BDF8'], // Professional indigo, white, sky blue
  enabled = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { initializeFireflies } = useFireflies({
    count,
    size,
    minOpacity,
    maxOpacity,
    colors,
    enabled
  });
  
  // Initialize fireflies when the container is available
  React.useEffect(() => {
    if (containerRef.current) {
      return initializeFireflies(containerRef.current);
    }
  }, [containerRef, initializeFireflies]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 overflow-hidden pointer-events-none z-10"
      aria-hidden="true"
    />
  );
};

export default Fireflies;
