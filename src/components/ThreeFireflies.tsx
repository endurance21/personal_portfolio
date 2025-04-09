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
  sphereRadius?: number;
}

const ThreeFireflies: React.FC<ThreeFirefliesProps> = ({
  count = 400,
  size = 30,
  colors = ['#4F46E5', '#F8FAFC', '#38BDF8'],
  enabled = true,
  speed = 0.3,
  minDistance = 50,
  maxDistance = 100,
  sphereRadius = 300,
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

  const handleMouseMove = (event: MouseEvent) => {
    if (cameraDistortion) {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -((event.clientY / window.innerHeight) * 2 - 1);
      lastMouseMoveTime.current = Date.now();
    }
  };

  useEffect(() => {
    if (!containerRef.current || !enabled) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      85,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = sphereRadius; // Position camera
    targetCameraPositionRef.current = new THREE.Vector3(0, 0, sphereRadius);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // Clean existing canvas if it exists
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    containerRef.current.appendChild(renderer.domElement);

    // Create points geometry
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const colorsArray = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    const colorPalette = colors.map(color => new THREE.Color(color));

    // Initialize firefly properties
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Position fireflies more between the camera and the viewport
      positions[i3] = (Math.random() - 0.5) * window.innerWidth;
      positions[i3 + 1] = (Math.random() - 0.5) * window.innerHeight;
      positions[i3 + 2] = (Math.random() - 0.5) * (sphereRadius * 0.6); // Reduced z-depth
      
      // Random velocities
      velocities[i3] = (Math.random() - 0.5) * speed;
      velocities[i3 + 1] = (Math.random() - 0.5) * speed;
      velocities[i3 + 2] = (Math.random() - 0.5) * speed;
      
      // Random size
      sizes[i] = size * (0.5 + Math.random() * 0.5);
      
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
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        // Update positions
        positions[i3] += velocities[i3];
        positions[i3 + 1] += velocities[i3 + 1];
        positions[i3 + 2] += velocities[i3 + 2];
        
        // Bounce off boundaries with tighter bounds to keep fireflies visible
        const boundsX = window.innerWidth * 0.5;
        const boundsY = window.innerHeight * 0.5;
        const boundsZ = sphereRadius * 0.4;
        
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
        const activeDistortionIntensity = distortionIntensity * Math.max(0, 1 - (timeSinceLastMouseMove - 2) / 3);
        
        camera.position.x += (mouseRef.current.x * 20 - camera.position.x) * activeDistortionIntensity;
        camera.position.y += (mouseRef.current.y * 20 - camera.position.y) * activeDistortionIntensity;
        camera.lookAt(0, 0, 0);
      }
      
      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    if (cameraDistortion) {
      window.addEventListener('mousemove', handleMouseMove);
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
  }, [count, size, colors, enabled, speed, sphereRadius, cameraDistortion, distortionIntensity]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-10"
      aria-hidden="true"
    />
  );
};

export default ThreeFireflies;
