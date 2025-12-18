
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Theme } from '../types';

interface SceneProps {
  theme: Theme;
}

const Scene: React.FC<SceneProps> = ({ theme }) => {
  const groupRef = useRef<THREE.Group>(null);
  const towerRefs = useRef<(THREE.Mesh | null)[]>([]);

  // Simple towers representing high-rise buildings
  const buildings = [
    { pos: [-1.8, -1, 0], scale: [0.8, 3.5, 0.8], color: theme === 'dark' ? '#1e293b' : '#f1f5f9', speed: 1.2 },
    { pos: [0, -1.5, 0], scale: [1, 5, 1], color: theme === 'dark' ? '#0f172a' : '#cbd5e1', speed: 1.5 },
    { pos: [1.8, -0.8, 0], scale: [0.7, 4.2, 0.7], color: theme === 'dark' ? '#334155' : '#e2e8f0', speed: 1.3 },
    { pos: [0.8, -2, 1.5], scale: [0.5, 2.5, 0.5], color: theme === 'dark' ? '#1d4ed8' : '#3b82f6', speed: 1.8 },
    { pos: [-0.8, -2, -1.5], scale: [0.6, 2, 0.6], color: theme === 'dark' ? '#d4af37' : '#94a3b8', speed: 1.1 },
  ];

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Subtle autonomous floating for the whole group
      groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.1;
      
      // Parallax effect with mouse (optional but enhanced with autonomous motion)
      const targetX = (state.mouse.x * state.viewport.width) / 12;
      const targetY = (state.mouse.y * state.viewport.height) / 12;
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY - 0.5, 0.05);
    }

    // Autonomous animation for each building
    towerRefs.current.forEach((mesh, i) => {
      if (mesh) {
        const b = buildings[i];
        // Vertical pulsing/floating
        mesh.position.y = b.pos[1] + Math.sin(time * b.speed + i) * 0.15;
        // Subtle scaling effect to simulate "dynamic construction"
        const scaleFactor = 1 + Math.sin(time * 0.5 + i) * 0.02;
        mesh.scale.set(1, scaleFactor, 1);
      }
    });
  });

  return (
    <group ref={groupRef}>
      {buildings.map((b, i) => (
        <mesh 
          key={i} 
          position={b.pos as any} 
          ref={(el) => (towerRefs.current[i] = el)}
        >
          <boxGeometry args={b.scale as any} />
          <meshStandardMaterial 
            color={b.color} 
            roughness={0.1} 
            metalness={0.9}
            emissive={theme === 'dark' && i === 3 ? '#1d4ed8' : '#000000'}
            emissiveIntensity={theme === 'dark' ? 0.6 : 0}
          />
          {/* Windows details */}
          <lineSegments position={[0, 0, 0]}>
            <edgesGeometry args={[new THREE.BoxGeometry(...(b.scale as any))]} />
            <lineBasicMaterial color={theme === 'dark' ? '#475569' : '#94a3b8'} opacity={0.4} transparent />
          </lineSegments>
        </mesh>
      ))}

      {/* Autonomous floating particles */}
      {[...Array(15)].map((_, i) => (
        <mesh 
          key={`p-${i}`} 
          position={[
            Math.sin(i * 1.5) * 4, 
            Math.cos(i * 2) * 3, 
            Math.sin(i * 0.5) * 3
          ]}
          onUpdate={(self) => {
            // Self-animation for particles
            const time = Date.now() * 0.001;
            self.position.y += Math.sin(time + i) * 0.005;
          }}
        >
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color={theme === 'dark' ? '#3b82f6' : '#d4af37'} transparent opacity={0.6} />
        </mesh>
      ))}

      {/* Ground plane placeholder */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
        <circleGeometry args={[6, 64]} />
        <meshStandardMaterial 
          color={theme === 'dark' ? '#0f172a' : '#ffffff'} 
          transparent 
          opacity={0.2}
          roughness={1}
        />
      </mesh>
    </group>
  );
};

export default Scene;
