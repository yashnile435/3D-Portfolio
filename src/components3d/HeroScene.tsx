import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { SceneLighting } from './SceneLighting';
import { TechWorkspace } from './TechWorkspace';
import { FloatingGlyphs } from './FloatingGlyphs';
import { HeroSceneFallback } from './HeroSceneFallback';

function isWebGLAvailable(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

interface HeroSceneProps {
  className?: string;
}

export const HeroScene: React.FC<HeroSceneProps> = ({ className }) => {
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [renderError, setRenderError] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setHasWebGL(isWebGLAvailable());

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!hasWebGL || renderError) {
    return (
      <div className={className} style={{ width: '100%', height: '100%' }}>
        <HeroSceneFallback />
      </div>
    );
  }

  return (
    <div
      className={className}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        minHeight: isMobile ? '340px' : '440px'
      }}
    >
      <Suspense fallback={<HeroSceneFallback />}>
        <Canvas
          camera={{
            position: [0, 0.7, isMobile ? 5.2 : 4.4],
            fov: 46
          }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
          }}
          dpr={[1, 1.5]} // Capped DPR to save battery and maintain 60 FPS
          onError={() => setRenderError(true)}
          style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
        >
          <SceneLighting />
          <TechWorkspace />
          {!isMobile && <FloatingGlyphs />}
        </Canvas>
      </Suspense>
    </div>
  );
};
