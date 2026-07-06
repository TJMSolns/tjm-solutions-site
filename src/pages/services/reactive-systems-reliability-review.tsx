import type { ReactNode } from 'react';
import OfferPage, { type OfferPageData } from '@site/src/components/OfferPage';

const offer: OfferPageData = {
  id: 'DT-5',
  name: 'Reactive Systems & Reliability Review',
  category: 'Digital Transformation',
  categoryHref: '/#digital-transformation',
  slug: 'reactive-systems-reliability-review',
  description:
    'Diagnoses the architectural root causes of recurring reliability failures — the ones that don\'t ' +
    'reproduce cleanly, that cascade unexpectedly, and that your incident post-mortems struggle to fully ' +
    'explain. Grounded in reactive systems principles and functional programming design patterns, we ' +
    'distinguish structural brittleness from implementation bugs and produce a prioritized remediation ' +
    'plan that addresses the actual source of the failures, not their symptoms.',
  problemStatement:
    'A CTO or VP Engineering dealing with a reliability pattern that won\'t resolve: cascading failures ' +
    'under load, asynchronous workflows producing inconsistent state, distributed transactions that ' +
    'sometimes silently fail, incidents hard to reproduce and even harder to prevent. Post-mortems cite ' +
    'the immediate trigger, but the architectural patterns that make the system vulnerable have never been ' +
    'systematically examined. The team fixes the last incident while the same structural conditions set ' +
    'up the next one.',
  valueProposition:
    'By applying reactive systems and functional programming design principles as an analytical framework ' +
    '— identifying where shared mutable state, implicit side effects, missing error contracts, and ' +
    'synchronous coupling create structural brittleness — this engagement separates architectural ' +
    'problems from implementation problems, producing a categorized inventory of failure modes each ' +
    'mapped to a concrete remediation approach.',
  methodSummary: [
    'Architecture Documentation Review & Failure Pattern Analysis — post-mortems, tickets, and monitoring alerts reviewed for recurring patterns; failure modes categorized.',
    'Code Pattern Audit & Design Evaluation — targeted review of high-coupling, high-failure areas; event-driven design evaluated against reactive manifesto principles.',
    'Recommendations & Remediation Sequencing — for complex environments, remediation mapped to reactive design patterns and sequenced by frequency, blast radius, and effort.',
  ],
  deliverables: [
    { name: 'Failure Mode Inventory', description: 'Categorized recurring failure patterns with root-cause classification', value: 'Replaces "it\'s complex" with specific, actionable categories' },
    { name: 'Architectural Pattern Analysis', description: 'Current design patterns assessed against reactive systems principles', value: 'Names the structural causes rather than the incident symptoms' },
    { name: 'Code Pattern Audit Report', description: 'Specific mutability, side-effect, and error-handling anti-patterns with location and remediation', value: 'Concrete, file-level findings engineering teams can act on' },
    { name: 'Reactive Design Recommendations', description: 'Highest-impact architectural changes grounded in reactive and FP design patterns', value: 'Improves reliability structurally rather than patch by patch' },
    { name: 'Remediation Priority Plan', description: 'Ranked remediation actions by failure frequency, blast radius, and effort', value: 'Sequences the highest-impact reliability improvements first' },
  ],
  duration:
    '3–4 weeks. Centralized architecture documentation and accessible incident history completes in 3 ' +
    'weeks. Distributed ownership, undocumented failure history, or multi-product scope typically requires ' +
    '4 weeks.',
  costBenefit:
    'Reliability failures at scale are revenue events, customer-trust events, and engineering-capacity ' +
    'events — every week of recurring unreliability diverts engineering time from forward progress into ' +
    'fire-fighting. Implementation fixes address the last incident, not the pattern; an architectural ' +
    'diagnosis is what prevents the next one.',
};

export default function DT5Page(): ReactNode {
  return <OfferPage offer={offer} />;
}
