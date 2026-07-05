import type { ReactNode } from 'react';
import OfferPage, { type OfferPageData } from '@site/src/components/OfferPage';

const offer: OfferPageData = {
  id: 'EE-4',
  name: 'Engagement Architecture Review',
  category: 'Experience Engineering',
  categoryHref: '/#experience-engineering',
  slug: 'engagement-architecture-review',
  imageUrl: '/img/experience-engineering.jpg',
  description:
    'An evaluation of how well your technical stack supports your stated engagement goals — whether those ' +
    'goals involve commerce, community, education, content, or some combination. We map where the ' +
    'architecture is aligned with what you\'re trying to build, where it is working against it, and what ' +
    'changes would materially improve your ability to deliver the engagement experiences your business ' +
    'strategy requires.',
  problemStatement:
    'A CTO or VP Digital where engagement goals are clear in strategy documents but frustrating to execute ' +
    'in practice — a community capability bolted onto a commerce platform not designed for it, content ' +
    'and product data in systems that don\'t share a customer identity model, or a content-and-commerce ' +
    'strategy that requires the two to work together in ways the integration architecture can\'t support. ' +
    'The architecture was assembled, not designed for engagement, and the team can describe what it wants ' +
    'to build but not why the current stack makes it so hard.',
  valueProposition:
    'By mapping stated engagement goals to architectural capability — and identifying where the ' +
    'architecture contradicts, constrains, or simply doesn\'t support those goals — this engagement makes ' +
    'the invisible visible: a structured analysis of specific misalignments with concrete recommendations ' +
    'for the changes that would have the most material impact.',
  methodSummary: [
    'Engagement Goal Documentation & Architecture Review — strategy documentation reviewed alongside a technical component inventory, integration pattern analysis, and data model review.',
    'Goal-to-Architecture Mapping & Gap Analysis — each engagement goal mapped to architectural capability; misalignments inventoried and validated through stakeholder interviews.',
    'Recommendations & Sequencing — for multi-platform environments, recommendations developed for highest-impact misalignments with sequencing rationale.',
  ],
  deliverables: [
    { name: 'Engagement Goal Inventory', description: 'Documented engagement goals with priority and horizon', value: 'Establishes the architectural requirements baseline' },
    { name: 'Goal-to-Architecture Map', description: 'Explicit mapping of each goal to current architectural capability, with alignment scoring', value: 'Makes the fit-and-gap picture visible to business and technical stakeholders alike' },
    { name: 'Misalignment Inventory', description: 'Specific architectural misalignments categorized by type', value: 'Identifies root causes of engagement friction rather than its symptoms' },
    { name: 'Integration Pattern Assessment', description: 'Evaluation of how system-to-system integrations support or constrain the engagement model', value: 'Surfaces integration architecture as a first-class engagement constraint' },
    { name: 'Architectural Recommendations', description: 'Prioritized recommendations for highest-impact misalignments with sequencing rationale', value: 'A path forward for follow-on platform or experience work' },
  ],
  duration:
    '3–4 weeks. A defined engagement strategy and a single primary platform completes in 3 weeks. ' +
    'Multi-platform environments or an engagement strategy that itself needs articulation typically ' +
    'require 4 weeks.',
  costBenefit:
    'Engagement goals that are architecturally unsupported are not just slow to deliver — they are ' +
    'expensive. Every feature that has to fight the architecture produces workarounds and technical debt ' +
    'that persist long after it ships. Understanding the architectural source of this friction before the ' +
    'next initiative is scoped is significantly cheaper than discovering it during implementation.',
  credibility: {
    summary:
      'Grounded in Tony’s cross-platform product leadership as Director of Product Management at Oracle ' +
      'Americas, aligning CX Commerce, marketing, and service platforms into a coherent engagement ' +
      'architecture for enterprise customers.',
    links: [{ label: 'About Tony Moores', href: '/about' }],
  },
};

export default function EE4Page(): ReactNode {
  return <OfferPage offer={offer} />;
}
