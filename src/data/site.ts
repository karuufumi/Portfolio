export type Project = {
  slug: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  status: string;
  progress: 'COMPLETE' | 'IN PROGRESS';
  tone: 'pink' | 'blue' | 'yellow' | 'green';
  problem: string;
  features: string[];
  learned: string;
};

export const projects: Project[] = [
  {
    slug: 'container-security-sandbox', number: '01', title: 'Container Security Testing Sandbox',
    description: 'A sandboxed testing platform for evaluating containerized applications under restricted runtime policies.',
    tags: ['Go', 'Docker', 'Security', 'Runtime', 'Testing'], status: 'CURRENT BUILD', progress: 'IN PROGRESS', tone: 'pink',
    problem: 'Testing container behavior safely often means choosing between broad permissions and shallow results. This project creates a repeatable, restricted environment for observing runtime behavior without weakening the host.',
    features: ['Policy-driven container profiles', 'Isolated runtime test suites', 'Structured event capture and reports', 'Repeatable local developer workflow'],
    learned: 'Security tooling is most useful when the safe path is also the easy path. Clear policy boundaries and observable execution make the system practical to use.'
  },
  {
    slug: 'orion-observability', number: '02', title: 'Orion Observability Platform',
    description: 'A real-time observability and anomaly investigation platform for service metrics and alerts.',
    tags: ['Go', 'TypeScript', 'Metrics', 'Observability'], status: 'SYSTEM BUILD', progress: 'COMPLETE', tone: 'blue',
    problem: 'Metrics only help when teams can connect a signal to a service, event, and useful next action. Orion turns scattered telemetry into an investigation surface.',
    features: ['Live metric ingestion pipeline', 'Alert correlation and investigation views', 'Service health timelines', 'Focused dashboard workflows'],
    learned: 'Observability UI needs a strong information hierarchy. The product should reduce uncertainty, not simply expose more numbers.'
  },
  {
    slug: 'distributed-order-fulfillment', number: '03', title: 'Distributed Order Fulfillment Platform',
    description: 'A saga-based transaction orchestration platform for resilient order fulfillment workflows.',
    tags: ['Java', 'Go', 'RabbitMQ', 'PostgreSQL', 'Saga Pattern'], status: 'THESIS TRACK', progress: 'IN PROGRESS', tone: 'yellow',
    problem: 'Order fulfillment spans inventory, payments, and shipping systems that cannot share one transaction. The platform coordinates each durable step and handles failures explicitly.',
    features: ['Saga orchestration flow', 'Event-driven service boundaries', 'Compensating transaction support', 'Durable workflow state'],
    learned: 'Distributed transactions demand deliberate failure design. Treating recovery as a first-class workflow makes the architecture easier to reason about.'
  },
  {
    slug: 'karuu-portfolio', number: '04', title: 'Karuu Portfolio',
    description: 'A manga-brutalist portfolio built with Astro, plain CSS, and Cloudflare Pages.',
    tags: ['Astro', 'CSS', 'Design System', 'Cloudflare'], status: 'LIVE BUILD', progress: 'IN PROGRESS', tone: 'green',
    problem: 'A portfolio needs to express technical focus quickly without falling into a generic personal-site template. This site pairs serious systems content with an opinionated visual system.',
    features: ['Static Astro pages', 'Reusable brutal UI components', 'Responsive CSS-only layout', 'Cloudflare Pages-ready output'],
    learned: 'A small design system creates consistency without a heavy frontend stack. Strong constraints make a site both faster and more memorable.'
  }
];

export type Note = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
};

export const notes: Note[] = [
  { slug: 'manga-brutalist-portfolio', date: 'JUL 2026', title: 'Designing a Manga-Brutalist Portfolio', excerpt: 'Notes on building a portfolio visual system with paper, ink, and useful constraints.' },
  { slug: 'system-projects-thesis-work', date: 'JUN 2026', title: 'Why I Prefer System Projects for Thesis Work', excerpt: 'The appeal of projects where architecture, behavior, and evaluation are all visible.' },
  { slug: 'cloudflare-pages-notes', date: 'MAY 2026', title: 'Cloudflare Pages Deployment Notes', excerpt: 'A short, practical record of shipping static work with a small operational surface.' },
  { slug: 'container-sandboxing-research', date: 'APR 2026', title: 'Container Sandboxing Research Notes', excerpt: 'Questions and patterns from thinking about policy boundaries and runtime isolation.' },
  { slug: 'reliable-background-jobs', date: 'MAR 2026', title: 'Building Reliable Background Jobs', excerpt: 'A practical checklist for retries, idempotency, observability, and failure recovery.' },
  { slug: 'cloud-deployment-basics', date: 'FEB 2026', title: 'What I Look For in a Cloud Deployment', excerpt: 'The small set of signals and safeguards that make a deployment easier to trust.' },
];
