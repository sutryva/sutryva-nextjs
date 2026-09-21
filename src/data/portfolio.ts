export interface CaseStudy {
  id: string;
  name: string;
  industry: string;
  problem: string;
  solution: string;
  technologies: string[];
  result: string;
}

// No real projects have been published yet. Add entries here as
// case studies become available — do not fill this with placeholder
// or invented client work.
export const PORTFOLIO_DATA: CaseStudy[] = [];
