import type { ReactNode } from 'react';
import OfferPage, { type OfferPageData } from '@site/src/components/OfferPage';

const offer: OfferPageData = {
  id: 'CS-3',
  name: 'Agent-Commerce Readiness Audit',
  category: 'Commerce Strategy',
  categoryHref: '/#commerce-strategy',
  slug: 'agent-commerce-readiness-audit',
  imageUrl: '/img/commerce-strategy.jpg',
  description:
    'An evaluation of whether your commerce systems can serve the autonomous software agents that are ' +
    'beginning to act as buyers, researchers, and procurement intermediaries. We assess your APIs, data ' +
    'assets, and architecture against the capability surface design principles that agent interactions ' +
    'require — and deliver a scored gap report that tells you exactly what stands between your current ' +
    'state and agent-ready commerce.',
  problemStatement:
    'A CTO at a commerce operator got a pointed board question — "what are we doing about AI agents ' +
    'buying on behalf of customers?" — and couldn\'t answer it with specifics beyond "we\'re watching the ' +
    'space." The concern is genuine and the gap is unmeasured: API documentation was written for human ' +
    'developers, not machine clients that need determinism and schema completeness; product data has ' +
    'gaps; pricing and inventory truth is inconsistent across channels. Nobody has mapped the capability ' +
    'surface, because nobody has had to until now.',
  valueProposition:
    'By auditing your APIs, data, and architecture against a structured set of agent-readiness criteria — ' +
    'determinism, schema completeness, versioned stability, discoverability, explicit error contracts, ' +
    'idempotency — this engagement produces a scored, prioritized gap report. You know exactly where you ' +
    'stand, which gaps are quick to close, and which require structural investment.',
  methodSummary: [
    'API & Capability Surface Audit — commerce-facing APIs reviewed for determinism, schema completeness, versioned stability, and discoverability; error contracts and idempotency reviewed for transaction-critical endpoints.',
    'Data Quality & Architecture Assessment — catalog, pricing, inventory, and availability data assessed for completeness and consistency; architecture reviewed for determinism risks.',
    'Scorecard Synthesis & Gap Prioritization — for complex multi-platform environments, gaps categorized by type, effort, and strategic priority with a remediation sequence.',
  ],
  deliverables: [
    { name: 'Agent-Readiness Scorecard', description: 'Scored assessment across six capability surface dimensions', value: 'Establishes the current-state benchmark and enables progress tracking' },
    { name: 'API Gap Report', description: 'Specific findings per API endpoint against agent-readiness criteria', value: 'Actionable input for engineering teams — no interpretation required' },
    { name: 'Data Quality Assessment', description: 'Completeness and consistency scoring across product, pricing, inventory, and availability data', value: 'Surfaces the gaps that make AI-mediated commerce unreliable before a buyer agent encounters them' },
    { name: 'Architecture Risk Summary', description: 'Identified patterns that undermine agent interaction reliability', value: 'Grounds architectural remediation in specific agent-readiness gaps' },
    { name: 'Prioritized Remediation Plan', description: 'Gap inventory ranked by remediation effort and strategic priority', value: 'An immediate action list that feeds directly into roadmap planning' },
  ],
  duration:
    '2–3 weeks. An operator with a single platform, documented APIs, and centralized product data ' +
    'completes in 2 weeks. Multiple platforms or fragmented catalog data typically require 3 weeks.',
  costBenefit:
    'The window for proactive positioning in agent-mediated commerce is open now and will not stay open ' +
    'indefinitely. Discovering these gaps after an agent-commerce channel is live is significantly more ' +
    'costly than discovering them in audit: failed transactions erode trust with the systems that route ' +
    'agent buyers, and rebuilding it requires both technical remediation and re-certification in agent ' +
    'discovery layers.',
  credibility: {
    summary:
      'Grounded in Tony’s published research on agent-mediated commerce — the analytical framework this ' +
      'audit applies, developed and tested in public writing on capability surfaces and agent-native ' +
      'commerce protocols.',
    links: [
      { label: 'The Invisible Buyer Has Arrived', href: '/articles/2026/04/09/the-invisible-buyer-has-arrived' },
      { label: 'The Economics of Agent-Mediated Commerce', href: '/articles/2026/04/21/economics-of-agent-mediated-commerce' },
      { label: 'Capability Surfaces', href: '/articles/2026/04/21/capability-surfaces' },
      { label: 'A Protocol Stack for Agent-Native Commerce', href: '/articles/2026/04/21/protocol-stack-agent-native-commerce' },
    ],
  },
};

export default function CS3Page(): ReactNode {
  return <OfferPage offer={offer} />;
}
