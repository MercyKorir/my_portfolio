import type { LucideIcon } from "lucide-react";

export type PageState = "home" | "work" | "about";

export interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  role: string;
  date: string;
  desc: string;
  contributions?: string[];
  isCurrent?: boolean;
}

export interface Project {
  title: string;
  tech: string[];
  category: string;
  image: string;
  githubUrl?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  id: string;
  certUrl: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  certs: Certification[];
}

export interface NavItem {
  id: string;
  name: PageState;
  label: string;
  icon: LucideIcon;
}

export interface MessagePayload {
  id: string;
  text: string;
  label: string;
}