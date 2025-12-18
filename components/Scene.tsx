
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

  // Edificios con velocidades de pulsación y alturas base distintas
  const buildings = [
    { pos: [-2.2, -1, 0.5], scale: [0.8, 3.8, 0.8], color: theme === 'dark' ? '#1e293b' : '#f1f5f9', speed: 0.8 },
    { pos: [0, -1.5, 0], scale: [1.2, 5.5, 1.2], color: theme === 'dark' ? '#0f172a' : '#cbd5e1', speed: 1.2 },
    { pos: [2.2, -0.8, -0.5], scale: [0.9, 4.5, 0.9], color: theme === 'dark' ? '#334155' : '#e2e8f0', speed: 1.0 },
    { pos: [1, -2, 2], scale: [0.5, 2.8, 0.5], color: theme === 'dark' ? '#1d4ed8' : '#3b82f6', speed: 1.5 },
    { pos: [-1.2, -2, -2], scale: [0.6, 2.2, 0.6], color: theme === 'dark' ? '#d4af37' : '#94a3b8', speed: 0.7 },
  ];

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Rotación autónoma constante del horizonte
      groupRef.current.rotation.y = time * 0.15;
      
      // Movimiento de balanceo suave
      groupRef.current.rotation.z = Math.sin(time * 0.5) * 0.02;
    }

    // Animación individual de cada torre
    towerRefs.current.forEach((mesh, i) => {
      if (mesh) {
        const b = buildings[i];
        // Pulsación vertical (flotación)
        mesh.position.y = b.pos[1] + Math.sin(time * b.speed + i) * 0.2;
        
        // Efecto de "respiración" en la escala (crecimiento sutil)
        const s = 1 + Math.sin(time * 0.8 + i) * 0.03;
        mesh.scale.set(s, s, s);

        // Brillo intermitente para la torre acentuada en modo oscuro
        if (theme === 'dark' && i === 3 && mesh.material instanceof THREE.MeshStandardMaterial) {
          mesh.material.emissiveIntensity = 0.5 + Math.sin(time * 2) * 0.3;
        }
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
            emissiveIntensity={0}
          />
          {/* Bordes definidos para un look arquitectónico limpio */}
          <lineSegments>
            <edgesGeometry args={[new THREE.BoxGeometry(...(b.scale as any))]} />
            <lineBasicMaterial color={theme === 'dark' ? '#475569' : '#94a3b8'} opacity={0.3} transparent />
          </lineSegments>
        </mesh>
      ))}

      {/* Partículas flotantes autónomas (nodos de inversión/futuro) */}
      {[...Array(20)].map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        const radius = 3.5 + Math.random() * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = (Math.random() - 0.5) * 5;

        return (
          <mesh key={`p-${i}`} position={[x, y, z]}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial 
              color={i % 2 === 0 ? '#3b82f6' : '#d4af37'} 
              transparent 
              opacity={0.6} 
            />
          </mesh>
        );
      })}

      {/* Suelo reflectante sutil */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.8, 0]}>
        <circleGeometry args={[8, 64]} />
        <meshStandardMaterial 
          color={theme === 'dark' ? '#0f172a' : '#ffffff'} 
          transparent 
          opacity={0.1}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
};

export default Scene;
