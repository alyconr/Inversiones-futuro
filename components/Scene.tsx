
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Theme } from '../types';

interface SceneProps {
  theme: Theme;
}

const Scene: React.FC<SceneProps> = ({ theme }) => {
  const groupRef = useRef<THREE.Group>(null);

  // Simple towers representing high-rise buildings
  const buildings = [
    { pos: [-1.5, -1, 0], scale: [0.8, 3.5, 0.8], color: theme === 'dark' ? '#1e293b' : '#f1f5f9' },
    { pos: [0, -1.5, 0], scale: [1, 5, 1], color: theme === 'dark' ? '#0f172a' : '#cbd5e1' },
    { pos: [1.5, -0.8, 0], scale: [0.7, 4.2, 0.7], color: theme === 'dark' ? '#334155' : '#e2e8f0' },
    { pos: [0.5, -2, 1.5], scale: [0.5, 2.5, 0.5], color: theme === 'dark' ? '#1d4ed8' : '#3b82f6' },
    { pos: [-0.8, -2, -1], scale: [0.6, 2, 0.6], color: theme === 'dark' ? '#d4af37' : '#94a3b8' },
  ];

  useFrame((state) => {
    if (groupRef.current) {
      // Parallax effect with mouse
      const x = (state.mouse.x * state.viewport.width) / 10;
      const y = (state.mouse.y * state.viewport.height) / 10;
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, x, 0.1);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, y - 0.5, 0.1);
    }
  });

  return (
    <group ref={groupRef}>
      {buildings.map((b, i) => (
        <mesh key={i} position={b.pos as any}>
          <boxGeometry args={b.scale as any} />
          <meshStandardMaterial 
            color={b.color} 
            roughness={0.2} 
            metalness={0.8}
            emissive={theme === 'dark' && i === 3 ? '#1d4ed8' : '#000000'}
            emissiveIntensity={theme === 'dark' ? 0.5 : 0}
          />
          {/* Windows details */}
          <lineSegments position={[0, 0, 0.01]}>
            <edgesGeometry args={[new THREE.BoxGeometry(...(b.scale as any))]} />
            <lineBasicMaterial color={theme === 'dark' ? '#475569' : '#94a3b8'} opacity={0.3} transparent />
          </lineSegments>
        </mesh>
      ))}

      {/* Ground plane placeholder */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
        <circleGeometry args={[5, 64]} />
        <meshStandardMaterial 
          color={theme === 'dark' ? '#020617' : '#ffffff'} 
          transparent 
          opacity={0.3}
          roughness={1}
        />
      </mesh>
    </group>
  );
};

export default Scene;
