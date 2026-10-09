import React, { useState } from "react";
import {
  Cpu,
  CheckCircle2,
  Sparkles,
  Filter,
  Smartphone,
  Database,
  Globe,
} from "lucide-react";
import { skillsData } from "../../data/skills";
import { SkillCategory } from "../../types";

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Android Development",
    "Backend & Database",
    "Web & Supporting Technologies",
    "Programming Fundamentals",
  ];

  const filteredGroups =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((g) => g.category === selectedCategory);

  const getCategoryIcon = (category: SkillCategory) => {
    switch (category) {
      case "Android Development":
        return <Smartphone size={18} />;
      case "Backend & Database":
        return <Database size={18} />;
      case "Web & Supporting Technologies":
        return <Globe size={18} />;
      default:
        return <Cpu size={18} />;
    }
  };

  return (
    <section
      id="skills"
      className="section-wrapper"
      style={{ background: "var(--color-bg-surface)" }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Skills &amp; Technology Stack</h2>
          <p className="section-subtitle">
            Curated toolsets prioritizing native Android mobile engineering
            alongside supporting backend, database, and web technologies.
          </p>

          {/* Android Specialization Highlight Banner */}
          <div
            style={{
              marginTop: "1.25rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.45rem 1rem",
              borderRadius: "var(--radius-full)",
              background: "var(--color-accent-subtle)",
              border: "1px solid var(--color-border-medium)",
              fontSize: "0.85rem",
            }}
          >
            <Sparkles
              size={14}
              style={{ color: "var(--color-accent-light)" }}
            />
            <span style={{ color: "var(--color-text-secondary)" }}>
              Core Technical Focus:
            </span>
            <strong style={{ color: "var(--color-accent-light)" }}>
              Native Android Development (Kotlin &amp; Java)
            </strong>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.5rem",
            marginBottom: "3rem",
          }}
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.5rem 1.1rem",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-mono)",
                  borderRadius: "var(--radius-full)",
                  background: isActive
                    ? "var(--color-accent-primary)"
                    : "var(--color-bg-subtle)",
                  color: isActive ? "#ffffff" : "var(--color-text-secondary)",
                  border: "1px solid",
                  borderColor: isActive
                    ? "var(--color-accent-primary)"
                    : "var(--color-border-subtle)",
                  cursor: "pointer",
                  transition: "all var(--transition-fast)",
                }}
              >
                {cat === "All" && <Filter size={13} />}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {filteredGroups.map((group) => {
            const isAndroidGroup = group.category === "Android Development";

            return (
              <div
                key={group.category}
                className="glass-card"
                style={{
                  padding: "2rem",
                  borderRadius: "var(--radius-xl)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  border: isAndroidGroup
                    ? "1.5px solid var(--color-border-glow)"
                    : "1px solid var(--color-border-subtle)",
                  boxShadow: isAndroidGroup
                    ? "var(--shadow-card), 0 0 30px rgba(168, 85, 247, 0.18)"
                    : "var(--shadow-sm)",
                }}
              >
                {/* Android Priority Ribbon */}
                {isAndroidGroup && (
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "var(--radius-full)",
                      background: "var(--gradient-btn-primary)",
                      color: "#ffffff",
                      fontSize: "0.7rem",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 700,
                      boxShadow: "0 2px 8px rgba(147, 51, 234, 0.35)",
                    }}
                  >
                    <Sparkles size={11} />
                    <span>PRIMARY FOCUS</span>
                  </div>
                )}

                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.65rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "var(--radius-sm)",
                        background: isAndroidGroup
                          ? "var(--color-accent-subtle)"
                          : "var(--color-bg-subtle)",
                        color: isAndroidGroup
                          ? "var(--color-accent-light)"
                          : "var(--color-text-secondary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {getCategoryIcon(group.category)}
                    </div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700 }}>
                      {group.category}
                    </h3>
                  </div>

                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.5,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {group.description}
                  </p>

                  {/* Skill Items List */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.55rem",
                    }}
                  >
                    {group.skills.map((skill) => {
                      const isHighlighted = skill.isPrimary;

                      return (
                        <div
                          key={skill.name}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.45rem",
                            padding: isHighlighted
                              ? "0.55rem 0.85rem"
                              : "0.45rem 0.75rem",
                            borderRadius: "var(--radius-md)",
                            background: isHighlighted
                              ? "var(--color-accent-subtle)"
                              : "var(--color-bg-subtle)",
                            border: "1px solid",
                            borderColor: isHighlighted
                              ? "var(--color-border-glow)"
                              : "var(--color-border-subtle)",
                            color: isHighlighted
                              ? "var(--color-accent-light)"
                              : "var(--color-text-primary)",
                            boxShadow: isHighlighted
                              ? "0 0 12px var(--color-accent-glow)"
                              : "none",
                            transition: "all var(--transition-fast)",
                          }}
                        >
                          <CheckCircle2
                            size={14}
                            style={{
                              color: isHighlighted
                                ? "var(--color-accent-light)"
                                : "var(--color-text-dim)",
                            }}
                          />
                          <span
                            style={{
                              fontSize: "0.9rem",
                              fontWeight: isHighlighted ? 700 : 500,
                            }}
                          >
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Note */}
                <div
                  style={{
                    marginTop: "2rem",
                    paddingTop: "0.85rem",
                    borderTop: "1px solid var(--color-border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "0.75rem",
                    color: "var(--color-text-dim)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  <span>{group.skills.length} Technologies</span>
                  <span>
                    {isAndroidGroup
                      ? "Applied in Mobile Apps"
                      : "Supporting Knowledge"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
