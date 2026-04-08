export interface DeviceCategory {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
}

export interface Guide {
  id: string;
  category: string;
  categorySlug: string;
  brand: string;
  brandSlug: string;
  problemSlug: string;
  problemTitle: string;
  difficulty: "Easy" | "Medium" | "Hard";
  timeEstimate: string;
  costEstimate: string;
  toolsNeeded: string[];
  partsNeeded: Part[];
  safetyWarnings: string[];
  quickDiagnosis: string;
  steps: RepairStep[];
  alternativeCauses: string[];
  whenToCallPro: string;
  metaTitle: string;
  metaDescription: string;
  youtubeId?: string;
}

export interface Part {
  name: string;
  costRange: string;
  amazonUrl?: string;
  ebayUrl?: string;
  ifixitUrl?: string;
}

export interface RepairStep {
  number: number;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface ErrorCode {
  id: string;
  deviceType: string;
  deviceTypeSlug: string;
  code: string;
  codeSlug: string;
  meaning: string;
  guideId?: string;
}

export interface DiagnosticAnswer {
  step: number;
  question: string;
  answer: string;
}
