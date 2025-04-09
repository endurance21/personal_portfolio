import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeFirefliesProps {
  count?: number;
  size?: number;
  colors?: string[];
  enabled?: boolean;
  speed?: number;
  minDistance?: number;
  maxDistance?: number;
  cameraDistortion?: boolean;
  distortionIntensity?: number;
}

const ThreeFireflies: React.FC<ThreeFirefliesProps> = ({
  count = 100,
  size = 10,
  colors = ['#4F46E5', '#F8FAFC', '#38BDF8'], // Professional indigo, white, sky blue
  enabled = true,
  speed = 0.6,
  minDistance = 10,
  maxDistance = 30,
  cameraDistortion = true,
  distortionIntensity = 0.05,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const firefliesRef = useRef<THREE.Points | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2(0, 0));
  const targetCameraPositionRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 50));

  // Mouse movement handler
  const handleMouseMove = (event: MouseEvent) => {
    if (cameraDistortion) {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -((event.clientY / window.innerHeight) * 2 - 1);
    }
  };

  // Setup scene, camera, renderer and fireflies
  useEffect(() => {
    if (!containerRef.current || !enabled) return;

    // Initialize Three.js components
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = 500;
    targetCameraPositionRef.current = new THREE.Vector3(0, 0, 50);
    
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true // Transparent background
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent

    // Clean existing canvas if it exists
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    containerRef.current.appendChild(renderer.domElement);

    // Create fireflies
    const fireflyGeometry = new THREE.BufferGeometry();
    const fireflyMaterial = new THREE.PointsMaterial({
      size: size * 0.04,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    // Generate positions and colors for all fireflies
    const positions = new Float32Array(count * 3);
    const colorsArr = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    const colorObj = new THREE.Color();

    for (let i = 0; i < count; i++) {
      // Random positions within a sphere
      const radius = minDistance + Math.random() * (maxDistance - minDistance);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);     // x
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta); // y
      positions[i * 3 + 2] = radius * Math.cos(phi);                   // z

      // Random color from the palette
      const colorHex = Array.isArray(colors) && colors.length > 0 
        ? colors[Math.floor(Math.random() * colors.length)] 
        : '#4F46E5';
      colorObj.set(colorHex);
      
      colorsArr[i * 3] = colorObj.r;
      colorsArr[i * 3 + 1] = colorObj.g;
      colorsArr[i * 3 + 2] = colorObj.b;
      
      // Random scale for size variation
      scales[i] = 0.5 + Math.random() * 1.5;
    }

    fireflyGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    fireflyGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArr, 3));
    fireflyGeometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    const fireflies = new THREE.Points(fireflyGeometry, fireflyMaterial);
    scene.add(fireflies);

    // Store references
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    firefliesRef.current = fireflies;

    // Add mouse move event listener for camera distortion
    if (cameraDistortion) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Animation function
    const animate = () => {
      const time = Date.now() * 0.001; // Current time in seconds

      if (firefliesRef.current) {
        const positions = (firefliesRef.current.geometry.attributes.position as THREE.BufferAttribute).array;
        
        // Update positions with smooth movement
        for (let i = 0; i < count; i++) {
          const ix = i * 3;
          const iy = i * 3 + 1;
          const iz = i * 3 + 2;
          
          // Add gentle oscillation to each axis
          positions[ix] += Math.sin(time + i * 0.1) * speed * 0.03;
          positions[iy] += Math.cos(time + i * 0.2) * speed * 0.03;
          positions[iz] += Math.sin(time + i * 0.3) * speed * 0.03;
          
          // Add gentle drift
          positions[ix] += (Math.random() - 0.5) * speed * 0.01;
          positions[iy] += (Math.random() - 0.5) * speed * 0.01;
          positions[iz] += (Math.random() - 0.5) * speed * 0.01;
          
          // Contain within sphere
          const distance = Math.sqrt(
            positions[ix] * positions[ix] + 
            positions[iy] * positions[iy] + 
            positions[iz] * positions[iz]
          );
          
          if (distance > maxDistance) {
            positions[ix] *= maxDistance / distance;
            positions[iy] *= maxDistance / distance;
            positions[iz] *= maxDistance / distance;
          }
        }
        
        firefliesRef.current.geometry.attributes.position.needsUpdate = true;
        
        // Pulse opacity for blinking effect
        const opacity = 0.6 + Math.sin(time) * 0.2;
        fireflyMaterial.opacity = opacity;
        
        // Slowly rotate the whole swarm
        firefliesRef.current.rotation.y += speed * 0.003;
      }

      // Update camera position based on mouse if camera distortion is enabled
      if (cameraDistortion && cameraRef.current) {
        // Calculate target camera position based on mouse movement
        targetCameraPositionRef.current.x = mouseRef.current.x * 10;
        targetCameraPositionRef.current.y = mouseRef.current.y * 10;
        
        // Smoothly interpolate current camera position towards target position
        cameraRef.current.position.x += (targetCameraPositionRef.current.x - cameraRef.current.position.x) * distortionIntensity;
        cameraRef.current.position.y += (targetCameraPositionRef.current.y - cameraRef.current.position.y) * distortionIntensity;
        
        // Keep camera looking at the center of the scene
        cameraRef.current.lookAt(0, 0, 0);
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      // Clean up Three.js objects
      if (firefliesRef.current) {
        scene.remove(firefliesRef.current);
        firefliesRef.current.geometry.dispose();
        (firefliesRef.current.material as THREE.Material).dispose();
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [count, size, colors, enabled, speed, minDistance, maxDistance, cameraDistortion, distortionIntensity]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-10"
      aria-hidden="true"
    />
  );
};

export default ThreeFireflies;
