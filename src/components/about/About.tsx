import React from 'react';
import { GraduationCap, Smartphone, Layout, Cloud, ShieldCheck, User } from 'lucide-react';
import { profileData } from '../../data/profile';

export const About: React.FC = () => {
  const focusPoints = [
    {
      icon: Smartphone,
      title: 'Mobile Application Architecture',
      desc: 'Building native Android solutions with Kotlin and Java, adhering to clean architecture, MVVM, and lifecycle-aware components.'
    },
    {
      icon: Layout,
      title: 'Modern Mobile UI & Experience',
      desc: 'Crafting responsive, intuitive mobile layouts aligned with Google Material Design guidelines and modern touch paradigms.'
    },
    {
      icon: Cloud,
      title: 'Cloud & API Integration',
      desc: 'Connecting mobile clients with Firebase (Firestore, Auth, Realtime DB) and consuming structured RESTful APIs reliably.'
    },
  ];

  const androidStrengths = [
    'Native Android development using Kotlin and Java with Android Studio',
    'Clean Architecture & MVVM pattern with lifecycle-aware components',
    'Firebase Authentication, Cloud Firestore & real-time data sync',
    'Material 3 design principles, XML/Compose layouts & smooth UX',
    'Integration of RESTful APIs, JSON parsing & local data caching',
    'Supporting full-stack proficiency (Java/Spring Boot, MySQL, React) for seamless end-to-end integration'
  ];

  return (
    <section id="about" className="section-wrapper" style={{ background: 'var(--color-bg-base)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <User size={14} />
            <span>Profile &amp; Background</span>
          </div>
          <h2 className="section-title">Android Developer | Building Apps That Matter</h2>
          <p className="section-subtitle">
            Developing modern, user-focused Android applications backed by solid architectural fundamentals and practical backend integration.
          </p>
        </div>

        {/* Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '380px 1fr',
            gap: '3rem',
            alignItems: 'start'
          }}
          className="about-grid"
        >
          {/* Left Column: Photograph Card Treatment */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center',
              position: 'relative'
            }}
          >
            {/* Outer Glowing Portrait Container */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '280px',
                aspectRatio: '1 / 1',
                margin: '0 auto 1.5rem auto',
                borderRadius: 'var(--radius-lg)',
                padding: '4px',
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.8) 0%, rgba(56, 189, 248, 0.5) 50%, rgba(147, 51, 234, 0.8) 100%)',
                boxShadow: 'var(--shadow-glow)'
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 'calc(var(--radius-lg) - 4px)',
                  overflow: 'hidden',
                  background: 'var(--color-bg-surface)'
                }}
              >
                <img
                  src={profileData.profileImage}
                  alt="Yash Nile - Professional Portrait"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.currentTarget.src = '/assets/profile/yash-nile-profile.svg';
                  }}
                />
              </div>
            </div>

            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.25rem' }}>
              {profileData.name}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                color: 'var(--color-accent-light)',
                fontWeight: 600,
                marginBottom: '1rem'
              }}
            >
              {profileData.primaryTitle}
            </p>

            {/* Academic Education Callout Box */}
            <div
              style={{
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-bg-subtle)',
                border: '1px solid var(--color-border-subtle)',
                textAlign: 'left'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-accent-light)',
                  marginBottom: '0.4rem',
                  fontWeight: 600
                }}
              >
                <GraduationCap size={16} />
                <span>ACADEMIC STATUS</span>
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                {profileData.education.degree}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', marginTop: '0.15rem' }}>
                {profileData.education.institution}
              </div>
              <div
                style={{
                  marginTop: '0.5rem',
                  display: 'inline-block',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-emerald-accent)',
                  background: 'var(--color-emerald-subtle)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: 600
                }}
              >
                {profileData.education.year} ({profileData.education.status})
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Focus Points */}
          <div>
            <div style={{ marginBottom: '2rem' }}>
              {profileData.aboutParagraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  style={{
                    fontSize: '1.02rem',
                    lineHeight: 1.7,
                    color: 'var(--color-text-secondary)',
                    marginBottom: '1.1rem'
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Android Competency Callout */}
            <div
              style={{
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-accent-subtle)',
                border: '1px solid var(--color-border-medium)',
                marginBottom: '2rem'
              }}
            >
              <div
                style={{
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  color: 'var(--color-accent-light)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '0.75rem'
                }}
              >
                Core Android Development Competencies:
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '0.5rem'
                }}
              >
                {androidStrengths.map((point, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '0.6rem',
                      fontSize: '0.92rem',
                      color: 'var(--color-text-primary)'
                    }}
                  >
                    <span style={{ color: 'var(--color-accent-light)', fontWeight: 800 }}>•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4 Architectural Focus Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                gap: '1rem'
              }}
            >
              {focusPoints.map((fp, i) => {
                const IconComponent = fp.icon;
                return (
                  <div
                    key={i}
                    className="glass-card"
                    style={{
                      padding: '1.25rem',
                      borderRadius: 'var(--radius-md)'
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--color-accent-subtle)',
                        color: 'var(--color-accent-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '0.85rem'
                      }}
                    >
                      <IconComponent size={20} />
                    </div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                      {fp.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                      {fp.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};
