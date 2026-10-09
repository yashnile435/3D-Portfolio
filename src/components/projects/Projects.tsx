import React, { useState, useMemo } from 'react';
import { FolderGit2, ExternalLink, Github, Info, Sparkles, Smartphone, Layers } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { ProjectItem } from '../../types';
import { ProjectDetailsModal } from './ProjectDetailsModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: `All Projects (${projectsData.length})` },
    { id: 'Android & Mobile', label: 'Android & Mobile (2)' },
    { id: 'Backend & Systems', label: 'Backend & Systems (1)' },
    { id: 'Web Applications', label: 'Web Applications (4)' }
  ];

  const filteredProjects = useMemo(() => {
    if (categoryFilter === 'all') return projectsData;
    return projectsData.filter((p) => p.category === categoryFilter);
  }, [categoryFilter]);

  return (
    <section id="projects" className="section-wrapper" style={{ background: 'var(--color-bg-base)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          {/* <div className="section-eyebrow">
            <FolderGit2 size={14} />
            <span>Featured Engineering</span>
          </div> */}
          <h2 className="section-title">Projects &amp; Applications</h2>
          <p className="section-subtitle">
            Native Android mobile applications leading a broader portfolio of deterministic backend systems and web applications.
          </p>

          {/* Android Mobile Focus Banner */}
          <div
            style={{
              marginTop: '1.25rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.45rem 1rem',
              borderRadius: 'var(--radius-full)',
              background: 'var(--color-accent-subtle)',
              border: '1px solid var(--color-border-medium)',
              fontSize: '0.85rem'
            }}
          >
            <Smartphone size={14} style={{ color: 'var(--color-accent-light)' }} />
            <span style={{ color: 'var(--color-text-secondary)' }}>
              Primary Showcase:
            </span>
            <strong style={{ color: 'var(--color-accent-light)' }}>Native Android &amp; Mobile Applications</strong>
          </div>

          {/* Category Filter Pills */}
          <div
            style={{
              marginTop: '1.5rem',
              display: 'flex',
              justifyContent: 'center',
              gap: '0.5rem',
              flexWrap: 'wrap'
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`btn-sm ${categoryFilter === cat.id ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem'
          }}
          className="projects-grid"
        >
          {filteredProjects.map((project) => {
            const isAndroidProject = project.isAndroidProject;

            return (
              <article
                key={project.id}
                className="glass-card"
                style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  border: isAndroidProject
                    ? '1.5px solid var(--color-border-glow)'
                    : '1px solid var(--color-border-subtle)',
                  boxShadow: isAndroidProject
                    ? 'var(--shadow-card), 0 0 25px rgba(168, 85, 247, 0.18)'
                    : 'var(--shadow-sm)'
                }}
              >
                {/* Android / Mobile Category Badge */}
                {isAndroidProject && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      zIndex: 10,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--gradient-btn-primary)',
                      color: '#ffffff',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      boxShadow: '0 4px 12px rgba(147, 51, 234, 0.4)'
                    }}
                  >
                    <Sparkles size={11} />
                    <span>FEATURED MOBILE APP</span>
                  </div>
                )}

                {/* Category Pill on Right */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    zIndex: 10,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.3rem 0.65rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(15, 23, 42, 0.85)',
                    backdropFilter: 'blur(8px)',
                    color: isAndroidProject ? '#34d399' : '#94a3b8',
                    border: isAndroidProject ? '1px solid rgba(52, 211, 153, 0.4)' : '1px solid rgba(148, 163, 184, 0.2)',
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700
                  }}
                >
                  {isAndroidProject ? <Smartphone size={11} /> : <Layers size={11} />}
                  <span>{project.category.toUpperCase()}</span>
                </div>

                {/* Project Image Header */}
                <div
                  style={{
                    width: '100%',
                    height: '210px',
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'var(--color-bg-subtle)'
                  }}
                >
                  <img
                    src={project.imagePlaceholder}
                    alt={project.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform var(--transition-slow)'
                    }}
                    onError={(e) => {
                      e.currentTarget.src = '/assets/projects/smart-expense.svg';
                    }}
                    className="project-image-preview"
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
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                      {project.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.82rem',
                        fontFamily: 'var(--font-mono)',
                        color: isAndroidProject ? 'var(--color-accent-light)' : 'var(--color-text-dim)',
                        marginBottom: '0.85rem'
                      }}
                    >
                      {project.subtitle}
                    </p>

                    <p
                      style={{
                        fontSize: '0.92rem',
                        lineHeight: 1.6,
                        color: 'var(--color-text-secondary)',
                        marginBottom: '1.25rem'
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.4rem',
                        marginBottom: '1.5rem'
                      }}
                    >
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`badge-tag ${isAndroidProject ? 'highlighted' : ''}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--color-border-subtle)'
                    }}
                  >
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn-secondary btn-sm"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                    >
                      <Info size={14} />
                      <span>Architecture Details</span>
                    </button>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub source for ${project.title}`}
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: 'var(--radius-sm)',
                            background: 'var(--color-bg-subtle)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--color-text-primary)'
                          }}
                        >
                          <Github size={16} />
                        </a>
                      )}

                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo for ${project.title}`}
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: 'var(--radius-sm)',
                            background: 'var(--color-accent-subtle)',
                            color: 'var(--color-accent-light)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <style>{`
        .glass-card:hover .project-image-preview {
          transform: scale(1.03);
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
