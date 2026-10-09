import React from 'react';
import { Award, ExternalLink, ShieldCheck, Tag } from 'lucide-react';
import { certificationsData } from '../../data/certifications';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="section-wrapper" style={{ background: 'var(--color-bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Award size={14} />
            <span>Verified Credentials</span>
          </div>
          <h2 className="section-title">Certifications &amp; Accreditations</h2>
          <p className="section-subtitle">
            Accredited mobile and software engineering coursework, specialized development training, and validated technical competencies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            maxWidth: '1100px',
            margin: '0 auto'
          }}
          className="certifications-grid"
        >
          {certificationsData.map((cert, index) => {
            const isFeatured = index === 0; // Android certification featured

            return (
              <article
                key={cert.id}
                className="glass-card"
                style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  border: isFeatured
                    ? '1.5px solid var(--color-border-glow)'
                    : '1px solid var(--color-border-subtle)',
                  boxShadow: isFeatured
                    ? 'var(--shadow-card), 0 0 24px rgba(168, 85, 247, 0.16)'
                    : 'var(--shadow-sm)',
                  transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)'
                }}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      zIndex: 10,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--gradient-btn-primary)',
                      color: '#ffffff',
                      fontSize: '0.7rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      boxShadow: '0 4px 12px rgba(147, 51, 234, 0.4)'
                    }}
                  >
                    <ShieldCheck size={12} />
                    <span>FEATURED CREDENTIAL</span>
                  </div>
                )}

                {/* Certification Thumbnail / Banner */}
                <div
                  style={{
                    width: '100%',
                    height: '190px',
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'var(--color-bg-subtle)',
                    borderBottom: '1px solid var(--color-border-subtle)'
                  }}
                >
                  <img
                    src={cert.thumbnail || '/assets/certifications/default-cert.svg'}
                    alt={cert.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform var(--transition-slow)'
                    }}
                    onError={(e) => {
                      e.currentTarget.src = '/assets/certifications/default-cert.svg';
                    }}
                  />
                </div>

                {/* Card Content Body */}
                <div
                  style={{
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    {/* Issuer & Issue Date */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                        marginBottom: '0.75rem'
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.8rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                          color: 'var(--color-accent-light)'
                        }}
                      >
                        {cert.issuer}
                      </span>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--color-text-dim)',
                          background: 'var(--color-bg-subtle)',
                          padding: '0.2rem 0.55rem',
                          borderRadius: 'var(--radius-sm)'
                        }}
                      >
                        Issued: {cert.date}
                      </span>
                    </div>

                    {/* Certification Title */}
                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        lineHeight: 1.35,
                        color: 'var(--color-text-primary)',
                        marginBottom: '0.75rem'
                      }}
                    >
                      {cert.title}
                    </h3>

                    {/* Short Description */}
                    <p
                      style={{
                        fontSize: '0.9rem',
                        lineHeight: 1.6,
                        color: 'var(--color-text-secondary)',
                        marginBottom: '1.25rem'
                      }}
                    >
                      {cert.description}
                    </p>

                    {/* Skills Badges */}
                    {cert.skills && cert.skills.length > 0 && (
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.4rem',
                          marginBottom: '1.5rem'
                        }}
                      >
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`badge-tag ${isFeatured ? 'highlighted' : ''}`}
                            style={{ fontSize: '0.75rem', padding: '0.2rem 0.55rem' }}
                          >
                            <Tag size={10} />
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Action Footer */}
                  <div
                    style={{
                      paddingTop: '1.25rem',
                      borderTop: '1px solid var(--color-border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.75rem'
                    }}
                  >
                    {cert.credentialId && (
                      <div
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--color-text-dim)'
                        }}
                      >
                        ID: {cert.credentialId}
                      </div>
                    )}

                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary btn-sm"
                      style={{
                        textDecoration: 'none',
                        marginLeft: 'auto',
                        padding: '0.55rem 1.1rem',
                        fontSize: '0.85rem'
                      }}
                      title="View original certificate on LinkedIn / Credential issuer"
                    >
                      <span>View Certificate</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .certifications-grid article:hover {
          transform: translateY(-4px);
        }
        .certifications-grid article:hover img {
          transform: scale(1.04);
        }
        @media (max-width: 768px) {
          .certifications-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
