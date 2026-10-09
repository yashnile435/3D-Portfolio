import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const SceneLighting: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      {/* Base Ambient Light */}
      <ambientLight
        intensity={isDark ? 0.6 : 0.85}
        color={isDark ? '#e9d5ff' : '#ffffff'}
      />

      {/* Main Purple Key Light */}
      <directionalLight
        position={[4, 6, 4]}
        intensity={isDark ? 1.4 : 1.1}
        color={isDark ? '#c084fc' : '#a855f7'}
      />

      {/* Blue / Cyan Rim Light */}
      <directionalLight
        position={[-5, 3, -3]}
        intensity={isDark ? 1.0 : 0.7}
        color={isDark ? '#38bdf8' : '#60a5fa'}
      />

      {/* Subtle Bottom Uplight */}
      <pointLight
        position={[0, -2, 2]}
        intensity={isDark ? 0.8 : 0.4}
        color={isDark ? '#9333ea' : '#c084fc'}
        distance={8}
      />
    </>
  );
};
