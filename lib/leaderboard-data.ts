export type Professional = {
  name: string;
  handle: string;
  fn: 'Finance' | 'Strategy' | 'Technology' | 'Operations';
  spec: string;
  region: 'West Africa' | 'East Africa' | 'Southern Africa' | 'North Africa';
  city: string;
  score: number;
  delta: number;
  cohort: number;
};

export const PROFESSIONALS: Professional[] = [
  { name: 'A. Mensah',        handle: 'GT-04-0117', fn: 'Finance',    spec: 'Strategic Finance',       region: 'West Africa',     city: 'Accra',        score: 97, delta: +2, cohort: 4 },
  { name: 'T. Okonkwo',       handle: 'GT-03-0081', fn: 'Technology', spec: 'Platform Engineering',    region: 'West Africa',     city: 'Lagos',        score: 94, delta: +1, cohort: 3 },
  { name: 'S. Dlamini',       handle: 'EX-02-0012', fn: 'Finance',    spec: 'M&A · Corporate Finance', region: 'Southern Africa', city: 'Johannesburg', score: 92, delta:  0, cohort: 2 },
  { name: 'F. Mbeki',         handle: 'GT-03-0046', fn: 'Strategy',   spec: 'Consulting',              region: 'East Africa',     city: 'Nairobi',      score: 91, delta: +3, cohort: 3 },
  { name: 'L. Abubakar',      handle: 'GT-04-0204', fn: 'Technology', spec: 'Product',                 region: 'West Africa',     city: 'Lagos',        score: 89, delta: +4, cohort: 4 },
  { name: 'Z. Kariuki',       handle: 'GT-03-0052', fn: 'Operations', spec: 'Supply Chain',            region: 'East Africa',     city: 'Nairobi',      score: 87, delta: -1, cohort: 3 },
  { name: 'I. El-Amin',       handle: 'GT-04-0128', fn: 'Strategy',   spec: 'Commercial Strategy',     region: 'North Africa',    city: 'Cairo',        score: 86, delta: +2, cohort: 4 },
  { name: 'N. Osei',          handle: 'GT-03-0071', fn: 'Finance',    spec: 'FP&A',                    region: 'West Africa',     city: 'Accra',        score: 84, delta:  0, cohort: 3 },
  { name: 'K. van der Merwe', handle: 'EX-02-0034', fn: 'Operations', spec: 'Mining Operations',      region: 'Southern Africa', city: 'Cape Town',    score: 83, delta: -2, cohort: 2 },
  { name: 'R. Hassan',        handle: 'GT-04-0189', fn: 'Technology', spec: 'Data / ML',               region: 'North Africa',    city: 'Casablanca',   score: 82, delta: +1, cohort: 4 },
  { name: 'B. Olatunji',      handle: 'GT-03-0095', fn: 'Strategy',   spec: 'Growth · GTM',            region: 'West Africa',     city: 'Lagos',        score: 80, delta: +1, cohort: 3 },
  { name: 'M. Nkrumah',       handle: 'GT-04-0221', fn: 'Operations', spec: 'Manufacturing',           region: 'West Africa',     city: 'Accra',        score: 79, delta: +3, cohort: 4 },
];

export const FUNCTIONS = ['Finance', 'Strategy', 'Technology', 'Operations'] as const;
export const REGIONS = ['West Africa', 'East Africa', 'Southern Africa', 'North Africa'] as const;
