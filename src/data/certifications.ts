import { CertificationItem } from "../types";

/**
 * ============================================================================
 * CERTIFICATION CENTRE DATA
 * ============================================================================
 * Centralized registry for verified credentials, coursework, and accreditations.
 *
 * HOW TO ADD / UPDATE A CERTIFICATION:
 * ----------------------------------------------------------------------------
 * 1. Add a new object to the `certificationsData` array below.
 * 2. Set `title`, `issuer`, `date`, and `description`.
 * 3. In `url`, paste your direct LinkedIn certification link or credential URL.
 * 4. In `thumbnail`, specify a path in `/assets/certifications/` (or leave empty
 *    to automatically display the default professional credential badge).
 * 5. In `skills`, list relevant technologies validated by the credential.
 * ============================================================================
 */

export const certificationsData: CertificationItem[] = [
  {
    id: "Web-Dev-React",
    title: "Web Development Internship",
    issuer: "Logic Point Infotech",
    date: "2026",
    description:
      "Professional training covering React component architecture, TypeScript typing, asynchronous state management, and backend REST integration.",
    url: "https://lnkd.in/p/g_JjhJHK", // Replace with direct certificate URL
    thumbnail: "/assets/certifications/web-internship.jpg",
    credentialId: "LP1-2@26-R4ZT9F",
    skills: ["React", "TypeScript", "JavaScript", "CSS3", "REST APIs"],
  },
  {
    id: "Programming-Fundamentals",
    title: "Programming Playbook",
    issuer: "Logic Point Infotech",
    date: "2026",
    description:
      "Comprehensive training on programming fundamentals, including data structures, algorithms, and object-oriented design principles.",
    url: "https://lnkd.in/p/g_JjhJHK", // Replace with direct certificate URL
    thumbnail: "/assets/certifications/course-complete.jpg",
    credentialId: "LPl.QOQ6-5VHU9J",
    skills: ["Python", "Java", "C++", "Data Structures", "Algorithms"],
  },
  {
    id: "Github-DevOps",
    title: "Masterclass on Master Git & GitHub",
    issuer: "PW Skills",
    date: "2025",
    description:
      "Comprehensive training on Git version control, GitHub repository management, branching strategies, and collaborative development workflows.",
    url: "https://lnkd.in/p/gvf9Acjy", // Replace with direct certificate URL
    thumbnail: "/assets/certifications/github-masterclass.jpg",
    credentialId: "47091eaa.32c9-4937-b09e-ed15e3ad4764",
    skills: ["Git", "GitHub", "Version Control", "Collaborative Development"],
  },
];
