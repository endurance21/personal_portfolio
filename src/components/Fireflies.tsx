
import React, { useEffect, useRef } from 'react';

interface FireflyProps {
  count?: number;
  size?: number;
  minOpacity?: number;
  maxOpacity?: number;
  minDuration?: number;
  maxDuration?: number;
}

const Fireflies: React.FC<FireflyProps> = ({
  count = 20,
  size = 4,
  minOpacity = 0.3,
  maxOpacity = 0.8,
  minDuration = 10,
  maxDuration = 20,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Remove any existing fireflies
    container.innerHTML = '';
    
    // Create fireflies
    for (let i = 0; i < count; i++) {
      const firefly = document.createElement('div');
      
      // Random position
      const x = Math.random() * containerWidth;
      const y = Math.random() * containerHeight;
      
      // Random opacity
      const opacity = minOpacity + Math.random() * (maxOpacity - minOpacity);
      
      // Random speed
      const duration = minDuration + Math.random() * (maxDuration - minDuration);
      
      // Apply styles
      Object.assign(firefly.style, {
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: '#FFE97F',
        borderRadius: '50%',
        boxShadow: '0 0 5px 2px rgba(255, 233, 127, 0.4)',
        opacity: opacity.toString(),
        animation: `firefly-float ${duration}s infinite ease-in-out, firefly-glow 1.5s infinite alternate ease-in-out`,
        animationDelay: `${Math.random() * duration}s`,
        zIndex: '1',
        pointerEvents: 'none',
      });
      
      container.appendChild(firefly);
    }
    
    // Create stylesheet for animations if it doesn't exist
    if (!document.getElementById('firefly-animations')) {
      const style = document.createElement('style');
      style.id = 'firefly-animations';
      style.innerHTML = `
        @keyframes firefly-float {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px);
          }
          50% {
            transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px);
          }
          75% {
            transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        
        @keyframes firefly-glow {
          0% {
            opacity: ${minOpacity};
            box-shadow: 0 0 4px 1px rgba(255, 233, 127, 0.2);
          }
          100% {
            opacity: ${maxOpacity};
            box-shadow: 0 0 8px 3px rgba(255, 233, 127, 0.6);
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    // Cleanup function
    return () => {
      if (document.getElementById('firefly-animations')) {
        document.getElementById('firefly-animations')?.remove();
      }
    };
  }, [count, size, minOpacity, maxOpacity, minDuration, maxDuration]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default Fireflies;
