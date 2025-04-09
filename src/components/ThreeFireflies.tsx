
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
  count = 200,
  size = 20,
  colors = ['#4F46E5', '#F8FAFC', '#38BDF8'],
  enabled = true,
  speed = 0.15,
  minDistance = 10,
  maxDistance = 40,
  sphereRadius = 300,
  cameraDistortion = true,
  distortionIntensity = 0.03,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const firefliesRef = useRef<THREE.Points | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2(0, 0));
  const targetCameraPositionRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, sphereRadius * 2));
  const lastMouseMoveTime = useRef<number>(0);

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
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = sphereRadius * 2;
    targetCameraPositionRef.current = new THREE.Vector3(0, 0, sphereRadius * 2);

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
    const colors = new Float32Array(count * 3);
    const colorPalette = [new THREE.Color('#4F46E5'), new THREE.Color('#F8FAFC'), new THREE.Color('#38BDF8')];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Position fireflies across the entire screen space
      positions[i3] = (Math.random() - 0.5) * window.innerWidth * 2;
      positions[i3 + 1] = (Math.random() - 0.5) * window.innerHeight * 2;
      positions[i3 + 2] = (Math.random() - 0.5) * sphereRadius * 2;

      // Random velocities
      velocities[i3] = (Math.random() - 0.5) * speed;
      velocities[i3 + 1] = (Math.random() - 0.5) * speed;
      velocities[i3 + 2] = (Math.random() - 0.5) * speed;

      // Random color from palette
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: size,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);
    firefliesRef.current = points;

    // Store references
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    // Animation function
    const animate = () => {
      const positions = (firefliesRef.current?.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        // Update positions
        positions[i3] += velocities[i3];
        positions[i3 + 1] += velocities[i3 + 1];
        positions[i3 + 2] += velocities[i3 + 2];

        // Bounce off boundaries with larger bounds
        const boundsX = window.innerWidth;
        const boundsY = window.innerHeight;
        const boundsZ = sphereRadius;

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

      firefliesRef.current!.geometry.attributes.position.needsUpdate = true;

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
      if (firefliesRef.current) {
        scene.remove(firefliesRef.current);
        firefliesRef.current.geometry.dispose();
        (firefliesRef.current.material as THREE.Material).dispose();
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

