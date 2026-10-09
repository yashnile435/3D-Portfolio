import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { careerTrajectory } from '../../data/experience';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section-wrapper" style={{ background: 'var(--color-bg-base)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Briefcase size={14} />
            <span>Professional Direction</span>
          </div>
          <h2 className="section-title">Career Focus &amp; Experience</h2>
          <p className="section-subtitle">
            Academic engineering foundations coupled with continuous project development and readiness for production software roles.
          </p>
        </div>

        {/* Timeline / Trajectory List */}
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          {careerTrajectory.map((item) => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                padding: '2.25rem',
                borderRadius: 'var(--radius-xl)',
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
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>
                    {item.role}
                  </h3>
                  <div
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: 'var(--color-accent-light)',
                      marginTop: '0.2rem'
                    }}
                  >
                    {item.organization}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.35rem' }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--color-text-muted)'
                    }}
                  >
                    <Calendar size={13} />
                    <span>{item.period}</span>
                  </div>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.78rem',
                      color: 'var(--color-text-dim)'
                    }}
                  >
                    <MapPin size={12} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              <p
                style={{
                  fontSize: '0.96rem',
                  lineHeight: 1.65,
                  color: 'var(--color-text-secondary)',
                  marginBottom: '1.25rem'
                }}
              >
                {item.description}
              </p>

              {/* Highlights */}
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
                  Key Focus &amp; Applied Deliverables:
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {item.highlights.map((hl, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '0.6rem',
                        fontSize: '0.9rem',
                        color: 'var(--color-text-secondary)'
                      }}
                    >
                      <CheckCircle size={14} style={{ color: 'var(--color-emerald-accent)', flexShrink: 0 }} />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {item.technologies.map((t) => (
                  <span key={t} className="badge-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Open to Opportunities Banner Card */}
          <div
            style={{
              padding: '1.75rem',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--color-bg-subtle)',
              border: '1px dashed var(--color-border-medium)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.25rem'
            }}
          >
            <div>
              <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--color-emerald-accent)', fontWeight: 700, marginBottom: '0.2rem' }}>
                CURRENT AVAILABILITY
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                Open to Developer Internships &amp; Graduate Roles
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                Available for on-site (Maharashtra/Pune) and remote opportunities.
              </div>
            </div>

            <a href="#contact" className="btn-primary btn-sm" style={{ textDecoration: 'none' }}>
              <span>Initiate Contact</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
