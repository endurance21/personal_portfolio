
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
  const firefliesRef = useRef<THREE.Mesh[]>([]);
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

    // Initialize Three.js components
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

    // Create fireflies using spheres
    const fireflies: THREE.Mesh[] = [];
    const sphereGeometry = new THREE.SphereGeometry(1, 16, 16);

    for (let i = 0; i < count; i++) {
      // Create glowing material for each firefly
      const color = new THREE.Color(colors[Math.floor(Math.random() * colors.length)]);
      const material = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.8
      });

      const firefly = new THREE.Mesh(sphereGeometry, material);

      // Position fireflies across the screen space
      firefly.position.x = (Math.random() - 0.5) * window.innerWidth;
      firefly.position.y = (Math.random() - 0.5) * window.innerHeight;
      firefly.position.z = (Math.random() - 0.5) * sphereRadius * 2;

      // Set random scale for size variation
      const scale = size * (0.5 + Math.random() * 0.5);
      firefly.scale.set(scale, scale, scale);

      // Add velocity as user data
      firefly.userData.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * speed,
        (Math.random() - 0.5) * speed,
        (Math.random() - 0.5) * speed
      );

      scene.add(firefly);
      fireflies.push(firefly);
    }

    // Store references
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    firefliesRef.current = fireflies;

    // Animation function
    const animate = () => {
      const time = Date.now() * 0.001;
      const timeSinceLastMouseMove = (Date.now() - lastMouseMoveTime.current) / 1000;

      fireflies.forEach((firefly) => {
        // Update position
        firefly.position.x += firefly.userData.velocity.x;
        firefly.position.y += firefly.userData.velocity.y;
        firefly.position.z += firefly.userData.velocity.z;

        // Gentle pulsing effect
        const scale = firefly.scale.x + Math.sin(time + Math.random()) * 0.02;
        firefly.scale.set(scale, scale, scale);

        // Bounce off boundaries
        const bounceMargin = window.innerWidth * 0.75;
        if (Math.abs(firefly.position.x) > bounceMargin) {
          firefly.userData.velocity.x *= -0.8;
          firefly.position.x = Math.sign(firefly.position.x) * bounceMargin;
        }
        if (Math.abs(firefly.position.y) > window.innerHeight * 0.75) {
          firefly.userData.velocity.y *= -0.8;
          firefly.position.y = Math.sign(firefly.position.y) * window.innerHeight * 0.75;
        }
        if (Math.abs(firefly.position.z) > sphereRadius) {
          firefly.userData.velocity.z *= -0.8;
          firefly.position.z = Math.sign(firefly.position.z) * sphereRadius;
        }

        // Add small random movements
        firefly.userData.velocity.x += (Math.random() - 0.5) * 0.01;
        firefly.userData.velocity.y += (Math.random() - 0.5) * 0.01;
        firefly.userData.velocity.z += (Math.random() - 0.5) * 0.01;

        // Dampen velocity
        firefly.userData.velocity.multiplyScalar(0.99);
      });

      if (cameraDistortion && cameraRef.current) {
        targetCameraPositionRef.current.x = mouseRef.current.x * 20;
        targetCameraPositionRef.current.y = mouseRef.current.y * 20;

        const activeDistortionIntensity = distortionIntensity * 
          Math.max(0, 1 - (timeSinceLastMouseMove - 2) / 3);

        camera.position.x += (targetCameraPositionRef.current.x - camera.position.x) * activeDistortionIntensity;
        camera.position.y += (targetCameraPositionRef.current.y - camera.position.y) * activeDistortionIntensity;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Add mouse move event listener for camera distortion
    if (cameraDistortion) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      // Clean up Three.js objects
      fireflies.forEach((firefly) => {
        scene.remove(firefly);
        firefly.geometry.dispose();
        (firefly.material as THREE.Material).dispose();
      });
      
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

