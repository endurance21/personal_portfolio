import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

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
  sphereRadius?: number;
}

const ThreeFireflies: React.FC<ThreeFirefliesProps> = ({
  count = 400,
  size = 30,
  colors = ['#4F46E5', '#F8FAFC', '#38BDF8'],
  enabled = true,
  speed = 0.5,
  minDistance = 50,
  maxDistance = 100,
  sphereRadius = 200,
  cameraDistortion = true,
  distortionIntensity = 0.03,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const pointsRef = useRef<THREE.Points | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2(0, 0));
  const targetCameraPositionRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, sphereRadius));
  const lastMouseMoveTime = useRef<number>(0);
  const positionsRef = useRef<Float32Array | null>(null);
  const velocitiesRef = useRef<Float32Array | null>(null);
  const isMobile = useIsMobile();

  // Adjust parameters for mobile
  const mobileAdjustedCount = isMobile ? Math.floor(count * 0.6) : count;
  const mobileAdjustedSize = isMobile ? size * 0.8 : size;
  const mobileAdjustedSpeed = isMobile ? speed * 0.8 : speed;
  // Reduce sphere radius to bring particles closer to camera
  const mobileAdjustedSphereRadius = isMobile ? sphereRadius * 0.5 : sphereRadius * 0.7;
  const mobileAdjustedDistortionIntensity = isMobile ? distortionIntensity * 0.5 : distortionIntensity;

  const handleMouseMove = (event: MouseEvent) => {
    if (cameraDistortion) {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -((event.clientY / window.innerHeight) * 2 - 1);
      lastMouseMoveTime.current = Date.now();
    }
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (cameraDistortion && event.touches.length > 0) {
      const touch = event.touches[0];
      mouseRef.current.x = (touch.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -((touch.clientY / window.innerHeight) * 2 - 1);
      lastMouseMoveTime.current = Date.now();
    }
  };

  useEffect(() => {
    if (!containerRef.current || !enabled) return;

    const adjustedCount = mobileAdjustedCount;
    const adjustedSize = mobileAdjustedSize;
    const adjustedSpeed = mobileAdjustedSpeed;
    const adjustedSphereRadius = mobileAdjustedSphereRadius;
    const adjustedDistortionIntensity = mobileAdjustedDistortionIntensity;

    const scene = new THREE.Scene();
    // Adjust field of view for a closer perspective
    const camera = new THREE.PerspectiveCamera(
      isMobile ? 85 : 75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    // Move camera closer
    camera.position.z = adjustedSphereRadius * 0.8; 
    targetCameraPositionRef.current = new THREE.Vector3(0, 0, adjustedSphereRadius * 0.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile, 
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(isMobile ? Math.min(window.devicePixelRatio, 2) : window.devicePixelRatio);

    // Clean existing canvas if it exists
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    containerRef.current.appendChild(renderer.domElement);

    // Create points geometry
    const positions = new Float32Array(adjustedCount * 3);
    const velocities = new Float32Array(adjustedCount * 3);
    const colorsArray = new Float32Array(adjustedCount * 3);
    const sizes = new Float32Array(adjustedCount);
    
    const colorPalette = colors.map(color => new THREE.Color(color));

    // Initialize firefly properties with a tighter distribution
    for (let i = 0; i < adjustedCount; i++) {
      const i3 = i * 3;
      
      // Position fireflies in a narrower area for a more concentrated effect
      const viewWidth = window.innerWidth * 0.4;
      const viewHeight = window.innerHeight * 0.4;
      
      // Keep particles more in front of the camera
      positions[i3] = (Math.random() - 0.5) * viewWidth;
      positions[i3 + 1] = (Math.random() - 0.5) * viewHeight;
      // Reduce z-depth even more to bring particles closer to viewer
      positions[i3 + 2] = (Math.random() - 0.5) * (adjustedSphereRadius * 0.3); 
      
      // Random velocities - slower for a more gentle float
      velocities[i3] = (Math.random() - 0.5) * adjustedSpeed * 0.8;
      velocities[i3 + 1] = (Math.random() - 0.5) * adjustedSpeed * 0.8;
      velocities[i3 + 2] = (Math.random() - 0.5) * adjustedSpeed * 0.6;
      
      // Increase particle size for better visibility
      sizes[i] = adjustedSize * (0.7 + Math.random() * 0.6);
      
      // Random color from palette
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colorsArray[i3] = color.r;
      colorsArray[i3 + 1] = color.g;
      colorsArray[i3 + 2] = color.b;
    }
    
    // Store references for animation
    positionsRef.current = positions;
    velocitiesRef.current = velocities;

    // Create points geometry
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Create shader material for better-looking points
    const material = new THREE.PointsMaterial({
      size: 1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);
    
    pointsRef.current = points;

    // Store references
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    // Animation function
    const animate = () => {
      if (!pointsRef.current || !positionsRef.current || !velocitiesRef.current) return;
      
      const positions = positionsRef.current;
      const velocities = velocitiesRef.current;
      const positionAttribute = pointsRef.current.geometry.attributes.position;
      
      for (let i = 0; i < adjustedCount; i++) {
        const i3 = i * 3;
        
        // Update positions
        positions[i3] += velocities[i3];
        positions[i3 + 1] += velocities[i3 + 1];
        positions[i3 + 2] += velocities[i3 + 2];
        
        // Tighter bounds to keep fireflies more visible
        const boundsX = window.innerWidth * 0.4;
        const boundsY = window.innerHeight * 0.4;
        const boundsZ = adjustedSphereRadius * 0.3;
        
        if (Math.abs(positions[i3]) > boundsX) {
          positions[i3] = Math.sign(positions[i3]) * boundsX;
          velocities[i3] *= -1;
        }
        if (Math.abs(positions[i3 + 1]) > boundsY) {
          positions[i3 + 1] = Math.sign(positions[i3 + 1]) * boundsY;
          velocities[i3 + 1] *= -1;
        }
        if (Math.abs(positions[i3 + 2]) > boundsZ) {
          positions[i3 + 2] = Math.sign(positions[i3 + 2]) * boundsZ;
          velocities[i3 + 2] *= -1;
        }
      }
      
      // Update buffer attribute
      positionAttribute.needsUpdate = true;
      
      if (cameraDistortion && cameraRef.current) {
        const timeSinceLastMouseMove = (Date.now() - lastMouseMoveTime.current) / 1000;
        const activeDistortionIntensity = adjustedDistortionIntensity * Math.max(0, 1 - (timeSinceLastMouseMove - 2) / 3);
        
        camera.position.x += (mouseRef.current.x * 20 - camera.position.x) * activeDistortionIntensity;
        camera.position.y += (mouseRef.current.y * 20 - camera.position.y) * activeDistortionIntensity;
        camera.lookAt(0, 0, 0);
      }
      
      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Add both mouse and touch event listeners
    if (cameraDistortion) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
    }
    
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      
      // Clean up Three.js objects
      if (pointsRef.current) {
        scene.remove(pointsRef.current);
        pointsRef.current.geometry.dispose();
        (pointsRef.current.material as THREE.Material).dispose();
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [
    mobileAdjustedCount, 
    mobileAdjustedSize, 
    colors, 
    enabled, 
    mobileAdjustedSpeed, 
    mobileAdjustedSphereRadius, 
    cameraDistortion, 
    mobileAdjustedDistortionIntensity,
    isMobile
  ]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-10"
      aria-hidden="true"
    />
  );
};

export default ThreeFireflies;
