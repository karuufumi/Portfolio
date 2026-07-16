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
    slug: 'anomaly-detection-needs-context',
    date: 'JUL 2026',
    title: 'Anomaly Detection Needs an Investigation Path',
    excerpt: 'Why a useful alert should lead to context, not just a surprising number.',
    sections: [
      { heading: 'The premise', paragraphs: ['An anomaly is only useful when someone can understand what changed, where it changed, and what to inspect next.'] },
      { heading: 'Working through it', paragraphs: ['A detection rule should be connected to service context, a time window, a useful baseline, and the relevant logs or traces. Without that path, alerts become interruptions rather than evidence.'] },
      { heading: 'Current takeaway', paragraphs: ['The value is not in flagging every deviation. It is in shortening the path from an unusual signal to a responsible next action.'] },
    ],
  },
  {
    slug: 'container-security-tradeoffs',
    date: 'JUN 2026',
    title: 'Container Security Is a Boundary Problem',
    excerpt: 'How runtime policy, filesystem access, and observability change what a sandbox can prove.',
    sections: [
      { heading: 'The premise', paragraphs: ['A container is not automatically a safe test environment. Its isolation depends on the boundaries that are deliberately enforced.'] },
      { heading: 'Working through it', paragraphs: ['Capabilities, mounted paths, network access, resource limits, and image provenance each answer a different risk question. Restricting one dimension while ignoring the others produces a reassuring but incomplete result.'] },
      { heading: 'Current takeaway', paragraphs: ['Good sandboxing makes both the permitted behavior and the denied behavior observable and repeatable.'] },
    ],
  },
  {
    slug: 'tracing-across-service-boundaries',
    date: 'MAY 2026',
    title: 'Tracing Requests Across Service Boundaries',
    excerpt: 'A small, practical model for following one request through an event-driven workflow.',
    sections: [
      { heading: 'The premise', paragraphs: ['A request rarely stays inside one service. The hard part is preserving enough context to explain its path after it becomes asynchronous.'] },
      { heading: 'Working through it', paragraphs: ['Propagating a correlation identifier across API calls, messages, and background jobs creates a shared handle for logs, traces, and operational questions. It should be treated as part of the system contract, not an afterthought.'] },
      { heading: 'Current takeaway', paragraphs: ['Tracing starts with consistent context propagation. Tools become far more useful once the system provides a reliable thread to follow.'] },
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
