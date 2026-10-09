import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import { useTheme } from '../context/ThemeContext';

export const FloatingGlyphs: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const ringRef = useRef<THREE.Mesh>(null);
  const octaRef = useRef<THREE.Mesh>(null);
  const capsuleRef = useRef<THREE.Mesh>(null);
  const discRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // 1. React Torus Ring (Upper Left)
    if (ringRef.current) {
      ringRef.current.position.y = 1.3 + Math.sin(t * 1.5 + 1) * 0.12;
      ringRef.current.rotation.x = t * 0.4;
      ringRef.current.rotation.y = t * 0.6;
    }

    // 2. Java Octahedron (Upper Right)
    if (octaRef.current) {
      octaRef.current.position.y = 1.4 + Math.sin(t * 1.2 + 2) * 0.1;
      octaRef.current.rotation.x = t * 0.5;
      octaRef.current.rotation.z = t * 0.3;
    }

    // 3. Android Mobile Capsule (Lower Left)
    if (capsuleRef.current) {
      capsuleRef.current.position.y = -0.5 + Math.sin(t * 1.4 + 3) * 0.08;
      capsuleRef.current.rotation.y = t * 0.45;
      capsuleRef.current.rotation.z = Math.sin(t * 0.8) * 0.15;
    }

    // 4. Database Disc / Cylinder (Lower Right)
    if (discRef.current) {
      discRef.current.position.y = -0.4 + Math.sin(t * 1.6 + 4) * 0.09;
      discRef.current.rotation.y = t * 0.35;
    }
  });

  return (
    <group>
      {/* 1. React / Frontend Torus Ring */}
      <mesh ref={ringRef} position={[-2.3, 1.3, -0.6]} castShadow>
        <torusGeometry args={[0.38, 0.08, 16, 32]} />
        <meshStandardMaterial
          color={isDark ? '#38bdf8' : '#0284c7'}
          emissive={isDark ? '#0284c7' : '#38bdf8'}
          emissiveIntensity={isDark ? 0.35 : 0.15}
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>

      {/* 2. Java / Backend Octahedron */}
      <mesh ref={octaRef} position={[2.2, 1.4, -0.8]} castShadow>
        <octahedronGeometry args={[0.42, 0]} />
        <meshStandardMaterial
          color={isDark ? '#c084fc' : '#9333ea'}
          emissive={isDark ? '#9333ea' : '#7c3aed'}
          emissiveIntensity={isDark ? 0.4 : 0.18}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* 3. Android Capsule */}
      <mesh ref={capsuleRef} position={[-2.4, -0.5, 0.4]} castShadow>
        <capsuleGeometry args={[0.22, 0.35, 8, 16]} />
        <meshStandardMaterial
          color={isDark ? '#34d399' : '#059669'}
          emissive={isDark ? '#10b981' : '#34d399'}
          emissiveIntensity={isDark ? 0.35 : 0.15}
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>

      {/* 4. Database Stack / Cylinder */}
      <group ref={discRef} position={[2.3, -0.4, 0.5]}>
        <mesh position={[0, 0.14, 0]}>
          <cylinderGeometry args={[0.35, 0.35, 0.1, 24]} />
          <meshStandardMaterial
            color={isDark ? '#a855f7' : '#7c3aed'}
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.35, 0.35, 0.1, 24]} />
          <meshStandardMaterial
            color={isDark ? '#9333ea' : '#6d28d9'}
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[0, -0.14, 0]}>
          <cylinderGeometry args={[0.35, 0.35, 0.1, 24]} />
          <meshStandardMaterial
            color={isDark ? '#7c3aed' : '#5b21b6'}
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>
      </group>

      {/* Ambient Particle Field */}
      <Sparkles
        count={isDark ? 36 : 22}
        scale={[7, 5, 5]}
        size={isDark ? 3 : 2}
        speed={0.4}
        color={isDark ? '#c084fc' : '#9333ea'}
      />
    </group>
  );
};
