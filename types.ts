
export interface SyllabusModule {
  title: string;
  description: string;
  items: string[];
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  cta: string;
}

export enum AppSection {
  HERO = 'hero',
  AUDIENCE = 'audience',
  SYLLABUS = 'syllabus',
  PRICING = 'pricing',
  AI_GEN = 'ai-generator'
}
