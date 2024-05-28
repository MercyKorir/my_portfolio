export interface WorkData {
  title: string;
  organization: string;
  imageName: string;
  description: string;
  frontTechnologies: string[];
  backTechnologies: string[];
  webUrl?: string;
  imagesPath?: string[];
}

export interface ProjectData {
  title: string;
  description: string;
  imageName: string;
  demoUrl?: string;
}

export interface SkillData {
  title: string;
  imageName: string;
}
