import React from 'react';
import { FileText, Download, Check, Eye, Smartphone } from 'lucide-react';
import { profileData } from '../../data/profile';

export const ResumeSection: React.FC = () => {
  const resumePath = '/resumes/android-developer.pdf';
  const resumeFileName = 'yash-nile-android-developer.pdf';

  const resumeSkills = [
    'Android SDK',
    'Kotlin',
    'Java',
    'Android Studio',
    'Firebase Firestore',
    'Material Design',
    'REST APIs',
    'Git / GitHub'
  ];

  const featuredProjects = [
    {
      title: 'TravelEase',
      subtitle: 'Native Android Travel & Tour Booking App (Java + Firebase)'
    },
    {
      title: 'Android OTT Manager',
      subtitle: 'Streaming Subscription & Watch-Status Tracker (Flutter + Firebase)'
    }
  ];

  return (
    <section id="resume" className="section-wrapper" style={{ background: 'var(--color-bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <FileText size={14} />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="section-title">Android Developer Resume</h2>
          <p className="section-subtitle">
            Comprehensive resume highlighting native Android development, modern architecture, key mobile projects, and academic background.
          </p>
        </div>

        {/* Central Resume Dossier Card */}
        <div
          className="glass-card"
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            border: '1.5px solid var(--color-border-glow)',
            boxShadow: 'var(--shadow-card), 0 0 35px rgba(168, 85, 247, 0.14)'
          }}
        >
          {/* Header Info */}
          <div
            style={{
              padding: '1.75rem',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--color-bg-subtle)',
              border: '1px solid var(--color-border-subtle)',
              marginBottom: '2rem'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1rem'
              }}
            >
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-accent-light)',
                    marginBottom: '0.35rem',
                    fontWeight: 700
                  }}
                >
                  <Smartphone size={14} />
                  <span>PERMANENT PROFILE DOSSIER</span>
                </div>
                <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>
                  {profileData.name} — Android Developer
                </h3>
                <p style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-dim)' }}>
                  Native Android Development • Kotlin &amp; Java • Material Design • Firebase
                </p>
              </div>

              <div
                style={{
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-emerald-accent)',
                  background: 'var(--color-emerald-subtle)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 600
                }}
              >
                Official PDF • Verified
              </div>
            </div>

            <p
              style={{
                fontSize: '0.96rem',
                lineHeight: 1.65,
                color: 'var(--color-text-secondary)',
                marginBottom: '1.5rem'
              }}
            >
              Engineered for mobile ecosystems. Focuses on robust client architectures, lifecycle-aware components, MVVM patterns, offline data caching, and Firebase integrations alongside strong computer science foundations from ongoing MCA studies at SPPU.
            </p>

            {/* Relevant Skills */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '0.6rem'
                }}
              >
                Key Skills Featured on this Resume:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {resumeSkills.map((skill) => (
                  <span key={skill} className="badge-tag highlighted">
                    <Check size={12} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Projects on this Resume */}
            <div>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '0.6rem'
                }}
              >
                Featured Mobile Applications on this Resume:
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '0.75rem'
                }}
              >
                {featuredProjects.map((proj) => (
                  <div
                    key={proj.title}
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--color-bg-surface)',
                      border: '1px solid var(--color-border-subtle)'
                    }}
                  >
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                      {proj.title}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                      {proj.subtitle}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Download & Preview Actions */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.25rem'
            }}
          >
            <div style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
              <span>Interested in discussing an opportunity or internship? </span>
              <a href="#contact" style={{ color: 'var(--color-accent-light)', textDecoration: 'underline' }}>
                Get in touch directly
              </a>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {/* Preview in New Tab */}
              <a
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ textDecoration: 'none' }}
                title="View PDF directly in browser"
              >
                <Eye size={16} />
                <span>Preview PDF</span>
              </a>

              {/* Direct Download */}
              <a
                href={resumePath}
                download={resumeFileName}
                className="btn-primary"
                style={{ textDecoration: 'none' }}
                title="Download Android Developer Resume PDF"
              >
                <Download size={17} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
