import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Check, Layers } from 'lucide-react';
import { ProjectItem } from '../../types';

interface ProjectDetailsModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        backgroundColor: 'rgba(5, 6, 12, 0.8)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: 'var(--color-bg-card)',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--color-border-glow)',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative',
          padding: '2rem'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--color-bg-subtle)',
            border: '1px solid var(--color-border-subtle)',
            color: 'var(--color-text-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--color-accent-light)',
              background: 'var(--color-accent-subtle)',
              padding: '0.25rem 0.65rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '0.75rem'
            }}
          >
            <Layers size={13} />
            <span>PROJECT ARCHITECTURE DOSSIER</span>
          </div>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.35rem' }}>
            {project.title}
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-accent-light)', fontFamily: 'var(--font-mono)' }}>
            {project.subtitle}
          </p>
        </div>

        {/* Project Image Preview */}
        <div
          style={{
            width: '100%',
            height: '240px',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            marginBottom: '1.75rem',
            background: 'var(--color-bg-subtle)',
            border: '1px solid var(--color-border-subtle)'
          }}
        >
          <img
            src={project.imagePlaceholder}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Overview */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>Overview</h4>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
            {project.overview}
          </p>
        </div>

        {/* Problem & Solution Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}
          className="modal-problem-solution"
        >
          <div
            style={{
              padding: '1rem',
              borderRadius: 'var(--radius-md)',
              background: 'var(--color-bg-subtle)',
              border: '1px solid var(--color-border-subtle)'
            }}
          >
            <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#f87171', marginBottom: '0.35rem' }}>
              THE PROBLEM
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              {project.problem}
            </p>
          </div>

          <div
            style={{
              padding: '1rem',
              borderRadius: 'var(--radius-md)',
              background: 'var(--color-bg-subtle)',
              border: '1px solid var(--color-border-subtle)'
            }}
          >
            <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--color-emerald-accent)', marginBottom: '0.35rem' }}>
              ENGINEERED SOLUTION
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem' }}>Key Architectural Features</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {project.keyFeatures.map((feat, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.6rem',
                  fontSize: '0.9rem',
                  color: 'var(--color-text-secondary)'
                }}
              >
                <Check size={14} style={{ color: 'var(--color-emerald-accent)', flexShrink: 0 }} />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Tag Group */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.6rem' }}>Technologies Used</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.technologies.map((tech) => (
              <span key={tech} className="badge-tag highlighted">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--color-border-subtle)'
          }}
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ textDecoration: 'none' }}
            >
              <Github size={16} />
              <span>Source Repository</span>
            </a>
          )}

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ textDecoration: 'none' }}
            >
              <span>Live Demonstration</span>
              <ExternalLink size={16} />
            </a>
          )}

          <button onClick={onClose} className="btn-secondary">
            Close
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .modal-problem-solution {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
