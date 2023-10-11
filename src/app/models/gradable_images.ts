
export interface GradableImage {
  id: number;
  status: "graded" | "not_graded" | "not_validated";
  referable: number;
  confidence: number;
}

