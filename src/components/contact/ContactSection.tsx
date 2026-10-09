import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { profileData } from '../../data/profile';
import { socialLinks } from '../../data/socialLinks';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleInterest: 'Android Developer Opportunity',
    message: ''
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Build mailto URI as standard, reliable fallback
    const subject = encodeURIComponent(`${formData.roleInterest} - from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Yash,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nTopic: ${formData.roleInterest}`
    );

    // Open user's email client
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-wrapper" style={{ background: 'var(--color-bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <MessageSquare size={14} />
            <span>Direct Communication</span>
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Interested in discussing an Android engineering role, technical project collaboration, or internship? Let's connect.
          </p>
        </div>

        {/* Contact Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: '3rem',
            alignItems: 'start',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Contact Info & Socials */}
          <div
            className="glass-card"
            style={{
              padding: '2rem',
              borderRadius: 'var(--radius-xl)'
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Contact Information
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '1.75rem', lineHeight: 1.5 }}>
              Feel free to send an inquiry directly via email, call or message via phone, connect on LinkedIn, or inspect my repositories on GitHub.
            </p>

            {/* Direct Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              {/* EMAIL */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-accent-subtle)',
                    color: 'var(--color-accent-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Mail size={18} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-dim)' }}>
                    EMAIL ADDRESS
                  </div>
                  <a
                    href={`mailto:${profileData.email}`}
                    style={{
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                      textDecoration: 'none',
                      transition: 'color var(--transition-fast)',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent-light)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
                  >
                    {profileData.email}
                  </a>
                </div>
              </div>

              {/* TELEPHONE */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-accent-subtle)',
                    color: 'var(--color-accent-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Phone size={18} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-dim)' }}>
                    TELEPHONE
                  </div>
                  <a
                    href={`tel:${profileData.phone.replace(/[^0-9+]/g, '')}`}
                    style={{
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                      textDecoration: 'none',
                      transition: 'color var(--transition-fast)',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent-light)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
                  >
                    {profileData.phone}
                  </a>
                </div>
              </div>

              {/* GITHUB */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-accent-subtle)',
                    color: 'var(--color-accent-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Github size={18} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-dim)' }}>
                    GITHUB
                  </div>
                  <a
                    href={socialLinks.find((s) => s.id === 'github')?.url || 'https://github.com/yashnile435'}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                      textDecoration: 'none',
                      transition: 'color var(--transition-fast)',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent-light)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
                  >
                    {socialLinks.find((s) => s.id === 'github')?.displayValue || 'github.com/yashnile435'}
                  </a>
                </div>
              </div>

              {/* LINKEDIN */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-accent-subtle)',
                    color: 'var(--color-accent-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Linkedin size={18} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-dim)' }}>
                    LINKEDIN
                  </div>
                  <a
                    href={socialLinks.find((s) => s.id === 'linkedin')?.url || 'https://www.linkedin.com/in/yashnile'}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                      textDecoration: 'none',
                      transition: 'color var(--transition-fast)',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent-light)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
                  >
                    {socialLinks.find((s) => s.id === 'linkedin')?.displayValue || 'linkedin.com/in/yashnile'}
                  </a>
                </div>
              </div>

              {/* LOCATION */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-accent-subtle)',
                    color: 'var(--color-accent-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-dim)' }}>
                    LOCATION
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                    {profileData.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div
            className="glass-card"
            style={{
              padding: '2.25rem',
              borderRadius: 'var(--radius-xl)'
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.35rem' }}>
              Send a Direct Inquiry
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
              Submitting opens your default email client with structured message parameters pre-populated.
            </p>

            {submitted && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-emerald-subtle)',
                  border: '1px solid var(--color-emerald-accent)',
                  color: 'var(--color-emerald-accent)',
                  fontSize: '0.88rem',
                  marginBottom: '1.5rem'
                }}
              >
                <CheckCircle2 size={18} />
                <span>Email client opened! You can also write directly to {profileData.email}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-text-secondary)',
                    marginBottom: '0.4rem'
                  }}
                >
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-bg-subtle)',
                    border: '1px solid var(--color-border-subtle)',
                    color: 'var(--color-text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-text-secondary)',
                    marginBottom: '0.4rem'
                  }}
                >
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-bg-subtle)',
                    border: '1px solid var(--color-border-subtle)',
                    color: 'var(--color-text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-text-secondary)',
                    marginBottom: '0.4rem'
                  }}
                >
                  INQUIRY TOPIC / SUBJECT
                </label>
                <input
                  type="text"
                  value={formData.roleInterest}
                  onChange={(e) => setFormData({ ...formData, roleInterest: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-bg-subtle)',
                    border: '1px solid var(--color-border-subtle)',
                    color: 'var(--color-text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-text-secondary)',
                    marginBottom: '0.4rem'
                  }}
                >
                  MESSAGE *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your note, position details, or collaboration inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-bg-subtle)',
                    border: '1px solid var(--color-border-subtle)',
                    color: 'var(--color-text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem' }}>
                <Send size={16} />
                <span>Dispatch Email Inquiry</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};
