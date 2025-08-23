export interface AnalysisResult {
  id: string;
  imageUrl: string;
  date: string;
  conditions: SkinCondition[];
  recommendations: Recommendation[];
  status: 'analyzing' | 'completed' | 'error';
}

export interface SkinCondition {
  name: string;
  confidence: number;
  severity: 'mild' | 'moderate' | 'severe';
  description: string;
  requiresDoctorVisit: boolean;
}

export interface Recommendation {
  category: 'otc' | 'prescription' | 'lifestyle' | 'routine';
  title: string;
  description: string;
  instructions: string[];
  duration?: string;
  warnings?: string[];
}

export interface AnalysisHistory {
  analyses: AnalysisResult[];
  totalCount: number;
}