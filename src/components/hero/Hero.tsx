import React from 'react';
import { ArrowDown, FileDown, Code2, GraduationCap, Smartphone } from 'lucide-react';
import { profileData } from '../../data/profile';
import { HeroScene } from '../../components3d/HeroScene';

export const Hero: React.FC = () => {
  const coreTech = [
    'Kotlin',
    'Java',
    'Android Studio',
    'Firebase',
    'Material Design',
    'REST APIs'
  ];

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '6.5rem',
        paddingBottom: '4rem',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--gradient-hero)',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '3rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Personal Intro & Android Developer Presentation */}
          <div>
            {/* Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                background: 'var(--color-accent-subtle)',
                border: '1px solid var(--color-border-medium)',
                marginBottom: '1.5rem',
                fontSize: '0.85rem'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 8px #10b981'
                }}
              />
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent-light)', fontWeight: 600 }}>
                {profileData.statusBadge}
              </span>
            </div>

            {/* Greeting & Name */}
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1.1rem',
                color: 'var(--color-accent-light)',
                fontWeight: 600,
                marginBottom: '0.35rem'
              }}
            >
              Hi, I'm
            </p>

            <h1
              style={{
                fontSize: 'clamp(2.75rem, 5.5vw, 4.25rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '1rem',
                background: 'var(--gradient-text-accent)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {profileData.name}
            </h1>

            {/* Single Role Title: Android Developer */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  marginBottom: '0.4rem'
                }}
              >
                <Smartphone size={24} style={{ color: 'var(--color-accent-light)' }} />
                <span>{profileData.primaryTitle}</span>
              </div>
            </div>

            {/* Supporting Description */}
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.65,
                color: 'var(--color-text-secondary)',
                marginBottom: '1.5rem',
                maxWidth: '560px'
              }}
            >
              {profileData.tagline}
            </p>

            {/* Education Micro-Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.45rem 0.9rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-bg-subtle)',
                border: '1px solid var(--color-border-subtle)',
                marginBottom: '2rem',
                fontSize: '0.85rem'
              }}
            >
              <GraduationCap size={16} style={{ color: 'var(--color-accent-light)' }} />
              <span style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>
                {profileData.education.degree} — {profileData.education.institution}
              </span>
              <span style={{ color: 'var(--color-text-muted)' }}>
                ({profileData.education.year})
              </span>
            </div>

            {/* Featured Core Technologies */}
            <div style={{ marginBottom: '2.25rem' }}>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '0.6rem'
                }}
              >
                Core Technologies
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {coreTech.map((skill) => (
                  <span key={skill} className="badge-tag highlighted">
                    <Code2 size={12} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center'
              }}
            >
              <a href="#projects" className="btn-primary" style={{ textDecoration: 'none' }}>
                <span>View My Work</span>
                <ArrowDown size={17} />
              </a>

              <a
                href="#resume"
                className="btn-secondary"
                style={{ textDecoration: 'none' }}
                title="View and download Android Developer resume"
              >
                <FileDown size={17} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Scene + Profile Avatar Presentation */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            {/* 3D Scene Container */}
            <div
              className="glass-card"
              style={{
                width: '100%',
                height: '420px',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                position: 'relative',
                background: 'var(--color-bg-glass-card)'
              }}
            >
              <HeroScene />

              {/* Floating Profile Avatar Pill Overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.6rem 0.9rem',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--color-bg-glass)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid var(--color-border-medium)',
                  boxShadow: 'var(--shadow-md)',
                  pointerEvents: 'none'
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid var(--color-accent-light)',
                    boxShadow: '0 0 12px var(--color-accent-glow)'
                  }}
                >
                  <img
                    src={profileData.profileImage}
                    alt="Yash Nile"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.currentTarget.src = '/assets/profile/yash-nile-profile.svg';
                    }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                    Yash Nile
                  </div>
                  <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--color-accent-light)' }}>
                    Android Developer • 3D Workspace
                  </div>
                </div>
              </div>
            </div>

            {/* Instruction tooltip */}
            <div
              style={{
                marginTop: '0.75rem',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--color-text-dim)',
                textAlign: 'center'
              }}
            >
              Move cursor over scene for 3D parallax tilt
            </div>
          </div>
        </div>
      </div>

      {/* Responsive adjustments */}
      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
