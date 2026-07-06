import type { ReactNode } from 'react';
import OfferPage, { type OfferPageData } from '@site/src/components/OfferPage';

const offer: OfferPageData = {
  id: 'CS-4',
  name: 'Composable Commerce Architecture Review',
  category: 'Commerce Strategy',
  categoryHref: '/#commerce-strategy',
  slug: 'composable-commerce-architecture-review',
  description:
    'An honest assessment of how well your current architecture actually embodies composable design — ' +
    'and a prioritized remediation plan that distinguishes the quick wins from the structural changes. We ' +
    'map integration debt, service boundary clarity, and vendor dependency, and give you a concrete ' +
    'picture of the gap between your stated architecture and your actual one.',
  problemStatement:
    'A CTO or VP Engineering at a commerce operator committed to a composable architecture — MACH-aligned, ' +
    'headless, API-first in the pitch — is now managing integration debt growing faster than it is ' +
    'retired. Services are coupled in unanticipated ways. Vendor lock-in has crept back in through ' +
    'integration patterns rather than platform selection. The gap between the architecture diagram and ' +
    "what the team actually maintains is widening, and nobody has mapped it explicitly.",
  valueProposition:
    'By assessing actual composability — not stated direction — against MACH principles and capability ' +
    'surface design criteria, this engagement makes the gap explicit and actionable, distinguishing ' +
    'quick-win configuration changes from structural remediation with a specific case for each.',
  methodSummary: [
    'Architecture Documentation Review & Integration Inventory — every integration cataloged by coupling type, stability, and maintenance burden; vendor dependency register built.',
    'Composability Assessment & Seam Analysis — each service boundary scored against contract stability, data ownership, deployment independence, and replaceability.',
    'Remediation Plan & Prioritization — quick wins separated from structural changes, sequenced with investment rationale.',
  ],
  deliverables: [
    { name: 'Composability Map', description: 'Each service boundary assessed against composability criteria, with scores and gaps', value: 'Makes the actual architecture legible against the stated direction' },
    { name: 'Integration Debt Inventory', description: 'Cataloged debt items with coupling type, severity, and remediation path', value: 'Translates "too much integration work" into specific, sequenced items' },
    { name: 'Seam Analysis', description: 'Detailed assessment of boundaries where coupling undermines composability', value: 'Identifies the highest-leverage places to invest' },
    { name: 'Vendor Dependency Register', description: 'Vendor dependencies with lock-in risk and switching cost estimate', value: 'Surfaces vendor lock-in that integration patterns re-introduced, often invisibly' },
    { name: 'Remediation Priority Plan', description: 'Quick wins and structural changes ranked by leverage and effort', value: 'A sequenced action plan that lets the team make progress without pausing the business' },
  ],
  duration:
    '3–4 weeks. A single-platform implementation with accessible architecture documentation completes in ' +
    '3 weeks. Multi-platform, post-acquisition, or large third-party integration ecosystems typically ' +
    'require 4 weeks.',
  costBenefit:
    'Integration debt in a composable architecture is a current tax, not a future problem — every ' +
    'coupled integration adds coordination overhead to every deployment and vendor decision. The right ' +
    'time to assess and remediate is before the next major integration initiative, not after it has ' +
    'embedded new coupling that will take years to unwind.',
};

export default function CS4Page(): ReactNode {
  return <OfferPage offer={offer} />;
}
