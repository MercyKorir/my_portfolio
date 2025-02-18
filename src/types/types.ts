export interface WorkData {
  title: string;
  organization: string;
  imageName: string;
  description: string;
  frontTechnologies: string[];
  backTechnologies: string[];
  webUrl?: string;
  imagesPath?: string[];
  achievements?: string[];
}

export interface ProjectData {
  title: string;
  description: string;
  imageName: string;
  cldImgPublicId?: string;
  demoUrl?: string;
  cldPublicId?: string;
  technologies?: string[];
  problem?: string;
  solution?: string;
  webUrl?: string;
  githubUrl?: string;
  imagesPath?: string[];
}

export interface SkillData {
  title: string;
  imageName: string;
}

export interface EducationData {
  title: string;
  description: string[];
  imageName: string;
  links: string[];
}

export interface CertificationData {
  title: string;
  date: string;
  courseName: string;
  organization: string;
  description: string;
  imageName: string;
  certificateUrl: string;
}
