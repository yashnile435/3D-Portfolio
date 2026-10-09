import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useTheme } from '../context/ThemeContext';

export const TechWorkspace: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Smooth mouse tilt & idle floating
  useFrame((state) => {
    if (!groupRef.current) return;
    const { x, y } = state.pointer;
    const t = state.clock.getElapsedTime();

    // Gentle idle floating
    const targetY = -0.2 + Math.sin(t * 1.2) * 0.05;
    // Parallax tilt based on pointer
    const targetRotX = 0.25 - y * 0.15;
    const targetRotY = -0.4 + x * 0.25;

    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);
  });

  const chassisColor = isDark ? '#1a1c29' : '#e2e8f0';
  const screenBezelColor = isDark ? '#0f1018' : '#cbd5e1';
  const keyboardColor = isDark ? '#12141f' : '#f1f5f9';
  const screenGlowColor = isDark ? '#9333ea' : '#7c3aed';

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* ================= LAPTOP BASE ================= */}
      <group position={[0, -0.05, 0]}>
        {/* Main Base Chassis */}
        <mesh receiveShadow castShadow position={[0, 0, 0]}>
          <boxGeometry args={[2.5, 0.08, 1.8]} />
          <meshStandardMaterial
            color={chassisColor}
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>

        {/* Keyboard Well */}
        <mesh position={[0, 0.045, -0.2]}>
          <boxGeometry args={[2.1, 0.02, 1.0]} />
          <meshStandardMaterial
            color={keyboardColor}
            roughness={0.6}
          />
        </mesh>

        {/* Trackpad */}
        <mesh position={[0, 0.045, 0.55]}>
          <boxGeometry args={[0.7, 0.015, 0.45]} />
          <meshStandardMaterial
            color={isDark ? '#23263b' : '#cbd5e1'}
            roughness={0.4}
            metalness={0.4}
          />
        </mesh>
      </group>

      {/* ================= LAPTOP SCREEN LID ================= */}
      <group position={[0, 0.0, -0.9]} rotation={[-0.26, 0, 0]}>
        {/* Screen Bezel / Back Shell */}
        <mesh castShadow position={[0, 0.85, 0]}>
          <boxGeometry args={[2.5, 1.65, 0.06]} />
          <meshStandardMaterial
            color={screenBezelColor}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Inner Glowing Display */}
        <mesh position={[0, 0.85, 0.035]}>
          <planeGeometry args={[2.3, 1.48]} />
          <meshStandardMaterial
            color={isDark ? '#0b0c16' : '#1e1b4b'}
            emissive={screenGlowColor}
            emissiveIntensity={isDark ? 0.35 : 0.15}
            roughness={0.2}
          />
        </mesh>

        {/* Code Lines Visual Elements on Screen */}
        <group position={[-0.7, 1.25, 0.04]}>
          {/* Top code prompt dot */}
          <mesh position={[0, 0, 0]}>
            <circleGeometry args={[0.035, 16]} />
            <meshBasicMaterial color="#38bdf8" />
          </mesh>
          <mesh position={[0.12, 0, 0]}>
            <circleGeometry args={[0.035, 16]} />
            <meshBasicMaterial color="#c084fc" />
          </mesh>
          <mesh position={[0.24, 0, 0]}>
            <circleGeometry args={[0.035, 16]} />
            <meshBasicMaterial color="#34d399" />
          </mesh>

          {/* Line 1: import / title */}
          <mesh position={[0.55, -0.15, 0]}>
            <planeGeometry args={[1.1, 0.04]} />
            <meshBasicMaterial color="#c084fc" />
          </mesh>

          {/* Line 2 */}
          <mesh position={[0.7, -0.28, 0]}>
            <planeGeometry args={[1.4, 0.04]} />
            <meshBasicMaterial color="#38bdf8" />
          </mesh>

          {/* Line 3 (Indented block) */}
          <mesh position={[0.85, -0.42, 0]}>
            <planeGeometry args={[1.1, 0.04]} />
            <meshBasicMaterial color={isDark ? '#a855f7' : '#9333ea'} />
          </mesh>

          {/* Line 4 */}
          <mesh position={[0.8, -0.56, 0]}>
            <planeGeometry args={[1.0, 0.04]} />
            <meshBasicMaterial color="#34d399" />
          </mesh>

          {/* Line 5 */}
          <mesh position={[0.55, -0.7, 0]}>
            <planeGeometry args={[0.5, 0.04]} />
            <meshBasicMaterial color="#cbd5e1" />
          </mesh>
        </group>
      </group>

      {/* ================= FLOATING GLASS PEDESTAL ================= */}
      <mesh position={[0, -0.3, 0]} receiveShadow>
        <cylinderGeometry args={[1.7, 1.9, 0.08, 32]} />
        <meshStandardMaterial
          color={isDark ? '#141624' : '#e2e8f0'}
          roughness={0.2}
          metalness={0.6}
          transparent
          opacity={isDark ? 0.75 : 0.85}
        />
      </mesh>

      {/* Pedestal Accent Glowing Ring */}
      <mesh position={[0, -0.26, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.65, 1.72, 32]} />
        <meshBasicMaterial
          color={isDark ? '#c084fc' : '#a855f7'}
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
};
