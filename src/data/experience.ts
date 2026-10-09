import { EducationItem } from '../types';

export const educationData: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Savitribai Phule Pune University (SPPU)',
    year: 'Expected 2027',
    status: 'In Progress',
    focus: 'Advanced Computer Applications, Software Engineering, Object-Oriented Design & Database Management Systems',
    location: 'Pune, Maharashtra, India'
  }
];

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'Full-time' | 'Internship' | 'Academic' | 'Open';
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
  isPlaceholder?: boolean;
}

export const careerTrajectory: ExperienceItem[] = [
  {
    id: 'career-focus',
    role: 'Software Development & Academic Specialization',
    organization: 'SPPU (MCA) & Independent Software Projects',
    period: '2024 – Present',
    type: 'Academic',
    location: 'Pune, Maharashtra',
    description:
      'Dedicated technical specialization in native Android app development, Spring Boot enterprise services, and full-stack React systems alongside Master of Computer Applications coursework.',
    highlights: [
      'Architected end-to-end full-stack and mobile projects emphasizing deterministic business logic and maintainable code',
      'Developed native Android solutions with MVVM, Jetpack components, and Firebase services',
      'Engineered Spring Boot RESTful micro-services with MySQL schemas for financial expenditure tracking',
      'Currently preparing for software engineering internships and graduate developer opportunities'
    ],
    technologies: ['Android SDK', 'Kotlin', 'Java 21', 'Spring Boot', 'React', 'MySQL', 'Firebase']
  }
];
