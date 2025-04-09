
import React, { useEffect, useRef } from 'react';

interface FireflyProps {
  count?: number;
  size?: number;
  minOpacity?: number;
  maxOpacity?: number;
  minDuration?: number;
  maxDuration?: number;
  colors?: string[];
}

const Fireflies: React.FC<FireflyProps> = ({
  count = 50,
  size = 4,
  minOpacity = 0.3, // Increased min opacity to ensure visibility
  maxOpacity = 0.6,
  minDuration = 25, // Even slower movement
  maxDuration = 40, // Even slower movement
  colors = ['#4F46E5', '#F8FAFC', '#38BDF8'], // Professional indigo, white, sky blue
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const firefliesRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Only create fireflies if they don't already exist
    if (firefliesRef.current.length === 0) {
      // Create stylesheet for animations if it doesn't exist
      if (!document.getElementById('firefly-animations')) {
        const style = document.createElement('style');
        style.id = 'firefly-animations';
        style.innerHTML = `
          @keyframes firefly-subtle-glow {
            0% {
              opacity: ${minOpacity};
              box-shadow: 0 0 ${size * 1.5}px ${size * 0.7}px rgba(79, 70, 229, 0.3);
            }
            100% {
              opacity: ${maxOpacity};
              box-shadow: 0 0 ${size * 2.5}px ${size}px rgba(79, 70, 229, 0.5);
            }
          }
        `;
        document.head.appendChild(style);
      }
      
      // Create the initial fireflies
      for (let i = 0; i < count; i++) {
        const firefly = document.createElement('div');
        
        // Random position
        const x = Math.random() * containerWidth;
        const y = Math.random() * containerHeight;
        
        // Random size variation
        const fireflySize = size * (0.7 + Math.random() * 0.6);
        
        // Random opacity - but never disappearing completely
        const opacity = minOpacity + Math.random() * (maxOpacity - minOpacity);
        
        // Random color from the palette
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Apply styles
        Object.assign(firefly.style, {
          position: 'absolute',
          left: `${x}px`,
          top: `${y}px`,
          width: `${fireflySize}px`,
          height: `${fireflySize}px`,
          backgroundColor: color,
          borderRadius: '50%',
          boxShadow: `0 0 ${fireflySize * 2}px ${fireflySize}px ${color}60`,
          opacity: opacity.toString(),
          animation: `firefly-subtle-glow 7s infinite alternate ease-in-out`,
          animationDelay: `${Math.random() * 7}s`,
          zIndex: '10',
          pointerEvents: 'none',
          transition: 'transform 30s ease-in-out, left 30s ease-in-out, top 30s ease-in-out',
          transform: 'translate3d(0, 0, 0)',
        });
        
        container.appendChild(firefly);
        firefliesRef.current.push(firefly);
      }
    }
    
    // Function to update firefly positions smoothly
    const updateFireflyPositions = () => {
      if (!containerRef.current) return;
      
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;
      
      firefliesRef.current.forEach((firefly) => {
        if (!firefly) return;
        
        // Create a smooth random movement within a small radius
        const newX = Math.random() * containerWidth;
        const newY = Math.random() * containerHeight;
        
        // Apply new position with smooth transition
        firefly.style.left = `${newX}px`;
        firefly.style.top = `${newY}px`;
      });
    };
    
    // Update positions every 30 seconds for smooth, slow movement
    const intervalId = setInterval(updateFireflyPositions, 30000);
    
    // Initial position update
    updateFireflyPositions();
    
    // Cleanup function
    return () => {
      clearInterval(intervalId);
      
      if (document.getElementById('firefly-animations')) {
        document.getElementById('firefly-animations')?.remove();
      }
    };
  }, [count, size, minOpacity, maxOpacity, minDuration, maxDuration, colors]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 overflow-hidden pointer-events-none z-10"
      aria-hidden="true"
    />
  );
};

export default Fireflies;
