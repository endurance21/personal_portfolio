
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
  minOpacity = 0.3,
  maxOpacity = 0.8,
  minDuration = 4, // Faster movement
  maxDuration = 8, // Faster movement
  colors = ['#FF5555', '#FFFFFF', '#000000'], // Red, white, black
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Remove any existing fireflies
    container.innerHTML = '';
    
    // Create fireflies with varying colors and sizes
    for (let i = 0; i < count; i++) {
      const firefly = document.createElement('div');
      
      // Random position
      const x = Math.random() * containerWidth;
      const y = Math.random() * containerHeight;
      
      // Random size variation
      const fireflySize = size * (0.7 + Math.random() * 0.6);
      
      // Random opacity
      const opacity = minOpacity + Math.random() * (maxOpacity - minOpacity);
      
      // Random speed
      const duration = minDuration + Math.random() * (maxDuration - minDuration);
      
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
        boxShadow: `0 0 ${fireflySize * 2}px ${fireflySize}px ${color}80`,
        opacity: opacity.toString(),
        animation: `firefly-float ${duration}s infinite ease-in-out, firefly-glow 1.5s infinite alternate ease-in-out`,
        animationDelay: `${Math.random() * duration}s`,
        zIndex: '10',
        pointerEvents: 'none',
        transform: 'translate3d(0, 0, 0)',
      });
      
      container.appendChild(firefly);
    }
    
    // Create stylesheet for animations if it doesn't exist
    if (!document.getElementById('firefly-animations')) {
      const style = document.createElement('style');
      style.id = 'firefly-animations';
      style.innerHTML = `
        @keyframes firefly-float {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          25% {
            transform: translate3d(${Math.random() * 80 - 40}px, ${Math.random() * 80 - 40}px, 0);
          }
          50% {
            transform: translate3d(${Math.random() * 80 - 40}px, ${Math.random() * 80 - 40}px, 0);
          }
          75% {
            transform: translate3d(${Math.random() * 80 - 40}px, ${Math.random() * 80 - 40}px, 0);
          }
        }
        
        @keyframes firefly-glow {
          0% {
            opacity: ${minOpacity};
            box-shadow: 0 0 4px 1px rgba(255, 85, 85, 0.3);
          }
          100% {
            opacity: ${maxOpacity};
            box-shadow: 0 0 8px 3px rgba(255, 85, 85, 0.7);
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
  }, [count, size, minOpacity, maxOpacity, minDuration, maxDuration, colors]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none z-10"
      aria-hidden="true"
    />
  );
};

export default Fireflies;
