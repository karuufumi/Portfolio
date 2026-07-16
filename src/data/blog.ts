export const BLOG_PAGE_SIZE = 5;

export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type Note = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  sections: BlogSection[];
};

export const notes: Note[] = [
  {
    slug: 'manga-brutalist-portfolio',
    date: 'JUL 2026',
    title: 'Designing a Manga-Brutalist Portfolio',
    excerpt: 'Notes on building a portfolio visual system with paper, ink, and useful constraints.',
    sections: [
      { heading: 'The premise', paragraphs: ['A visual system is most useful when it gives a site a recognizable voice without fighting its content.'] },
      { heading: 'Working through it', paragraphs: ['This portfolio starts with paper, ink, and a small group of loud accent colors. The strict border and shadow rules keep cards coherent while the system stays lightweight: no animation library, no component framework, and very little client-side code.'] },
      { heading: 'Current takeaway', paragraphs: ['The goal is technical-zine energy, not decoration. Labels create hierarchy, card layouts make the work skimmable, and the visual language helps distinguish each project.'] },
    ],
  },
  {
    slug: 'system-projects-thesis-work',
    date: 'JUN 2026',
    title: 'Why I Prefer System Projects for Thesis Work',
    excerpt: 'The appeal of projects where architecture, behavior, and evaluation are all visible.',
    sections: [
      { heading: 'The premise', paragraphs: ['System projects create a useful feedback loop between architectural decisions and observable behavior.'] },
      { heading: 'Working through it', paragraphs: ['A distributed workflow can be evaluated through failures, latency, recovery, and user comprehension. A sandbox can be evaluated by its policy boundaries and reproducibility. Those properties make projects more than demos; they make them useful material for research and discussion.'] },
      { heading: 'Current takeaway', paragraphs: ['The aim is not complexity for its own sake. It is building a narrow system with a clear question and enough surface area to answer it honestly.'] },
    ],
  },
  {
    slug: 'cloudflare-pages-notes',
    date: 'MAY 2026',
    title: 'Cloudflare Pages Deployment Notes',
    excerpt: 'A short, practical record of shipping static work with a small operational surface.',
    sections: [
      { heading: 'The premise', paragraphs: ['Static deployment is a good default for a portfolio: fast, low-maintenance, and easy to reason about.'] },
      { heading: 'Working through it', paragraphs: ['Astro keeps pages as HTML by default, which suits a case-study site well. The source stays small, the build output is portable, and Cloudflare Pages provides a simple path from a Git repository to a global edge deployment.'] },
      { heading: 'Current takeaway', paragraphs: ['The practical lesson is to avoid operational machinery until the portfolio actually needs it.'] },
    ],
  },
  {
    slug: 'container-sandboxing-research',
    date: 'APR 2026',
    title: 'Container Sandboxing Research Notes',
    excerpt: 'Questions and patterns from thinking about policy boundaries and runtime isolation.',
    sections: [
      { heading: 'The premise', paragraphs: ['Sandboxing is not a single switch. It is a collection of boundaries with different trade-offs.'] },
      { heading: 'Working through it', paragraphs: ['Runtime policies, resource constraints, filesystem access, network exposure, and observability each shape what a test environment can tell us. A useful sandbox makes these constraints visible and repeatable.'] },
      { heading: 'Current takeaway', paragraphs: ['The work is ongoing: the interesting part is designing tests that are safe while still producing meaningful evidence.'] },
    ],
  },
  {
    slug: 'reliable-background-jobs',
    date: 'MAR 2026',
    title: 'Building Reliable Background Jobs',
    excerpt: 'A practical checklist for retries, idempotency, observability, and failure recovery.',
    sections: [
      { heading: 'The premise', paragraphs: ['Background jobs need to be designed around the assumption that a task can be retried, delayed, or observed twice.'] },
      { heading: 'Working through it', paragraphs: ['A useful baseline is an idempotency key, bounded retries, and a dead-letter route that makes failed work visible instead of silent. Those pieces turn an unreliable queue consumer into a system with an understandable recovery path.'] },
      { heading: 'Current takeaway', paragraphs: ['Before adding more infrastructure, make the job state inspectable. Knowing what ran, what failed, and what can be safely retried is more useful than a complex workflow with no operational story.'] },
    ],
  },
  {
    slug: 'cloud-deployment-basics',
    date: 'FEB 2026',
    title: 'What I Look For in a Cloud Deployment',
    excerpt: 'The small set of signals and safeguards that make a deployment easier to trust.',
    sections: [
      { heading: 'The premise', paragraphs: ['A deployment should make its own safety checks visible rather than relying on confidence or memory.'] },
      { heading: 'Working through it', paragraphs: ['I look for a repeatable build, environment-specific configuration, a small health check, and a way to see the version currently running. These are simple controls, but they answer most of the questions that appear when a release behaves unexpectedly.'] },
      { heading: 'Current takeaway', paragraphs: ['The goal is not an elaborate release platform. It is a deployment path that is predictable for the people who need to run and change the system.'] },
    ],
  },
];
