export type SkillCategory =
  | 'Android Development'
  | 'Backend & Database'
  | 'Web & Supporting Technologies'
  | 'Programming Fundamentals';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  isPrimary?: boolean;
  proficiencyLevel?: 'Advanced' | 'Proficient' | 'Working Knowledge';
  iconName?: string;
}

export interface SkillCategoryGroup {
  category: SkillCategory;
  description: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  category: string;
  status?: string;
  isAndroidProject?: boolean;
  githubUrl?: string; // undefined or empty hides button
  liveDemoUrl?: string; // undefined or empty hides button
  imagePlaceholder: string;
  isPlaceholder?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  url: string;
  thumbnail?: string;
  credentialId?: string;
  skills?: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  status: string;
  focus: string;
  location?: string;
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  displayValue: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  role: string;
  primaryTitle: string;
  secondaryTitle: string;
  tagline: string;
  shortBio: string;
  aboutParagraphs: string[];
  education: EducationItem;
  location: string;
  email: string;
  phone: string;
  profileImage: string;
  statusBadge: string;
}
