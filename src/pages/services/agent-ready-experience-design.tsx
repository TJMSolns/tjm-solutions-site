import type { ReactNode } from 'react';
import OfferPage, { type OfferPageData } from '@site/src/components/OfferPage';

const offer: OfferPageData = {
  id: 'EE-5',
  name: 'Agent-Ready Experience Design',
  category: 'Experience Engineering',
  categoryHref: '/#experience-engineering',
  slug: 'agent-ready-experience-design',
  imageUrl: '/img/experience-engineering.jpg',
  description:
    'A design for an experience layer that serves both human buyers and agent buyers — without forcing a ' +
    'choice between them. We audit the current experience, design the structured capability surfaces ' +
    'agent interactions require, specify the API contracts and schema structures that make those surfaces ' +
    'machine-readable, and produce an implementation roadmap that delivers agent readiness without ' +
    'disrupting the human experience that drives current revenue.',
  problemStatement:
    'A CTO or VP Digital understands that autonomous software agents interact with commerce systems ' +
    'through entirely different mechanisms than human browsers — agents need deterministic, structured, ' +
    'machine-readable capability surfaces, not persuasive copy or navigation hierarchies designed for ' +
    'human cognition. The current experience layer was designed for human buyers; nobody has designed the ' +
    'agent interface. The question is not whether to build one, but how, without rebuilding the entire ' +
    'experience layer or disrupting the revenue-generating human experience.',
  valueProposition:
    'By designing the agent-ready experience layer as a parallel capability surface rather than a ' +
    'replacement for the human experience, this engagement resolves the apparent either/or tension — a ' +
    'concrete design for which surfaces to build, how they are structured and versioned, and an ' +
    'implementation roadmap that delivers early value before the full capability surface is complete.',
  methodSummary: [
    'Current Experience Layer Audit — structured data, API surfaces, and machine-readability assessed from an agent-interaction perspective.',
    'Agent Interaction Pattern Analysis & Capability Surface Design — relevant agent interaction patterns analyzed and a capability surface designed, drawing on MCP and UCP frameworks.',
    'Schema Design & API Contract Specification — structured data schema and API contracts specified, with a human/agent experience divergence map.',
    'Implementation Roadmap — near-term wins, mid-term capability build, and long-term agent-native operational model sequenced.',
  ],
  deliverables: [
    { name: 'Experience Layer Audit Report', description: 'Current-state assessment of structured data, API surfaces, and machine-readability', value: 'The gap baseline for the design work' },
    { name: 'Capability Surface Inventory', description: 'Defined capability surfaces required for relevant agent interaction patterns, with priority and rationale', value: 'The demand-side design of what agent buyers need to interact with your system' },
    { name: 'Structured Data & Schema Design', description: 'Schema extensions and product attribute structures for machine-readable capability surfaces', value: 'The data layer foundation every agent interaction depends on' },
    { name: 'API Contract Specifications', description: 'Detailed request/response, versioning, error-contract, and idempotency designs for agent interactions', value: 'A technical specification engineering teams can implement directly' },
    { name: 'Implementation Roadmap', description: 'Sequenced build plan with near/mid/long-term phases', value: 'The primary execution artifact — what to build, in what order' },
  ],
  duration:
    '4–6 weeks. An organization with a prior readiness audit and an API-first, documented platform ' +
    'completes in 4 weeks. Organizations without prior agent-readiness work, or with tightly coupled ' +
    'front-end/back-end architectures, typically require 6 weeks.',
  costBenefit:
    'The experience layer is where agent buyers interact first — an experience layer without a designed ' +
    'capability surface is invisible to them, not adversarially rejected, simply not legible. Agent ' +
    'discovery systems learn which vendors are reliable and structured over time, so building this early ' +
    'reputation now, before agent traffic is significant in the analytics, is how the advantage is ' +
    'established.',
  credibility: {
    summary:
      'Grounded in Tony’s published research on capability surfaces and agent-native commerce — the same ' +
      'framework this offer applies as design methodology, not just theory.',
    links: [
      { label: 'Capability Surfaces', href: '/articles/2026/04/21/capability-surfaces' },
      { label: 'The Invisible Buyer Has Arrived', href: '/articles/2026/04/09/the-invisible-buyer-has-arrived' },
      { label: 'The Economics of Agent-Mediated Commerce', href: '/articles/2026/04/21/economics-of-agent-mediated-commerce' },
      { label: 'A Protocol Stack for Agent-Native Commerce', href: '/articles/2026/04/21/protocol-stack-agent-native-commerce' },
    ],
  },
};

export default function EE5Page(): ReactNode {
  return <OfferPage offer={offer} />;
}
