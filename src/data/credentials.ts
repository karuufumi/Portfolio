export type Credential = {
  kind: 'CERTIFICATION' | 'AWARD';
  title: string;
  detail: string;
  tone: 'blue' | 'yellow' | 'green';
  proofHref: string;
};

export const credentials: Credential[] = [
  {
    kind: 'CERTIFICATION',
    title: 'AWS Certified Solutions Architect – Associate',
    detail: 'AWS · July 2026',
    tone: 'blue',
    proofHref: '#',
  },
  {
    kind: 'CERTIFICATION',
    title: 'IELTS 7.0',
    detail: 'IDP Vietnam · May 2022',
    tone: 'yellow',
    proofHref: '#',
  },
  {
    kind: 'AWARD',
    title: 'OISP Scholarship',
    detail: 'Semester 242 · VNU-HCM University of Technology',
    tone: 'green',
    proofHref: '#',
  },
];
