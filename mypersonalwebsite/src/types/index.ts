// ============================================================
// Portfolio Data Type Definitions
// ============================================================

export interface Education {
  school: string;
  major: string;
  year: string;
  date: string;
  gpa: string;
}

export interface Experience {
  organization: string;
  location?: string;
  title?: string;
  position?: string;
  date?: string;
  years?: string;
  caseStudySlug?: string;
  description: string[];
}

export interface Achievement {
  icon: string;
  title: string;
  description: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface SkillsData {
  languages: string[];
  frameworks: string[];
  cloud: string[];
  databases: string[];
  tools: string[];
}

export interface InitiativeMetric {
  value: string;
  label: string;
}

export interface FeaturedInitiative {
  eyebrow: string;
  title: string;
  summary: string;
  highlights: string[];
  metrics?: InitiativeMetric[];
}

export interface ResumeData {
  name: string;
  role: string;
  bio?: string;
  featuredInitiative?: FeaturedInitiative;
  email: string;
  address: string;
  resumeLink: string;
  imagebaseurl: string;
  socialLinks?: SocialLink[];
  education: Education;
  experience: Experience[];
  skills?: SkillsData;
  achievements?: Achievement[];
}

export interface Project {
  name: string;
  url?: string;
  github?: string;
  techStack?: string[];
  category?: 'fullstack' | 'ml' | 'competitive' | 'tool' | 'other';
  caseStudySlug?: string;
  description: string[];
}

export interface Activity {
  name: string;
  url?: string;
  github?: string;
  caseStudySlug?: string;
  description: string[];
}

export interface ProjectData {
  projects: Project[];
  activities?: Activity[];
}
