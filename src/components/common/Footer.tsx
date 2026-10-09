import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, Check } from 'lucide-react';
import { profileData } from '../../data/profile';
import { socialLinks } from '../../data/socialLinks';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const competencies = [
    'Native Android (Kotlin & Java)',
    'Clean Architecture & MVVM',
    'Firebase Firestore & Auth',
    'Material 3 UI & Responsive UX',
    'REST API Integration',
    'Supporting Spring Boot & MySQL'
  ];

  return (
    <footer
      style={{
        background: 'var(--color-bg-base)',
        borderTop: '1px solid var(--color-border-subtle)',
        padding: '4rem 0 2rem 0',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr',
            gap: '3rem',
            marginBottom: '3rem'
          }}
          className="footer-grid"
        >
          {/* Col 1: Identity & Positioning */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #9333ea 0%, #38bdf8 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.9rem'
                }}
              >
                YN
              </div>
              <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>
                {profileData.name}
              </span>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-accent-light)',
                  background: 'var(--color-accent-subtle)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                Android Dev
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: '380px', marginBottom: '1.25rem' }}>
              {profileData.tagline} Currently pursuing MCA at Savitribai Phule Pune University (SPPU, Expected 2027).
            </p>

            <div style={{ display: 'flex', gap: '0.65rem' }}>
              {socialLinks.map((s) => {
                let Icon = Mail;
                if (s.id === 'github') Icon = Github;
                if (s.id === 'linkedin') Icon = Linkedin;
                if (s.id === 'phone') Icon = Phone;

                return (
                  <a
                    key={s.id}
                    href={s.url}
                    target={s.url.startsWith('http') ? '_blank' : undefined}
                    rel={s.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={s.label}
                    title={`${s.label}: ${s.displayValue}`}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--color-bg-subtle)',
                      border: '1px solid var(--color-border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-text-secondary)',
                      transition: 'all var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-accent-light)';
                      e.currentTarget.style.borderColor = 'var(--color-border-medium)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-text-secondary)';
                      e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                    }}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Core Android Competencies */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--color-accent-light)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '1rem'
              }}
            >
              TECHNICAL FOCUS
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {competencies.map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.85rem',
                    color: 'var(--color-text-secondary)'
                  }}
                >
                  <Check size={13} style={{ color: 'var(--color-accent-light)', flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation Links & Back to Top */}
          <div>
            <h4
              style={{
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--color-accent-light)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '1rem'
              }}
            >
              SECTIONS
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>
                <a href="#hero" style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                  Home &amp; 3D Workspace
                </a>
              </li>
              <li>
                <a href="#about" style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                  About &amp; Profile
                </a>
              </li>
              <li>
                <a href="#skills" style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#certifications" style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                  Certifications &amp; Accreditations
                </a>
              </li>
              <li>
                <a href="#resume" style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                  Android Developer Resume
                </a>
              </li>
              <li>
                <a href="#contact" style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                  Direct Contact
                </a>
              </li>
            </ul>

            <div style={{ marginTop: '1.5rem' }}>
              <button
                onClick={scrollToTop}
                className="btn-secondary btn-sm"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
              >
                <span>Back to Top</span>
                <ArrowUp size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--color-border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'var(--color-text-dim)',
            fontFamily: 'var(--font-mono)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Yash Nile • Android Developer
          </div>
          <div>
            Built with React, TypeScript, Three.js &amp; Modern CSS
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
};
