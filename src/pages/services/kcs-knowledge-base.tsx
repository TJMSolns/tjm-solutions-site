import type { ReactNode } from 'react';
import OfferPage, { type OfferPageData } from '@site/src/components/OfferPage';

const offer: OfferPageData = {
  id: 'DT-2',
  name: 'KCS Knowledge Base Implementation',
  category: 'Digital Transformation',
  categoryHref: '/#digital-transformation',
  slug: 'kcs-knowledge-base',
  description:
    'Deploys SCKB — a production-grade, KCS v6-governed knowledge base built on open-source components — ' +
    'into your environment. SCKB (Service Centered Knowledge Base) keeps institutional knowledge ' +
    'on-premise, fully under your control, and accessible through a structured capture-and-reuse workflow ' +
    'that improves quality over time. We handle the full engagement: environment deployment, knowledge ' +
    'source migration, KCS workflow configuration, article seeding, team onboarding, and handoff ' +
    'documentation so the system can be maintained and extended without ongoing consulting dependency.',
  problemStatement:
    'A CTO, VP Operations, or Head of Enablement where onboarding takes too long, escalation costs are too ' +
    'high, and the knowledge experienced employees carry in their heads is locked in documents, wikis, ' +
    'email threads, and tribal memory nobody can efficiently access. Every resolved problem disappears ' +
    'into a ticket close note instead of becoming a reusable asset. Commercial AI tools either can\'t ' +
    'reach the internal knowledge or expose it to data-privacy risk the organization won\'t accept.',
  valueProposition:
    'SCKB deploys a KCS v6-governed knowledge base that captures knowledge at the moment of ' +
    'problem-solving — so resolving an issue automatically improves the knowledge base for the next ' +
    'person. The system runs on your own infrastructure using PostgreSQL full-text search — no external ' +
    'AI APIs, no vector database licensing, no data leaving the building. It is auditable, maintainable ' +
    '(standard Scala/PostgreSQL stack), and extensible.',
  methodSummary: [
    'KCS Readiness & Knowledge Source Inventory — existing documentation, wikis, and ticket history assessed; article types mapped; data quality reviewed.',
    'SCKB Deployment & Configuration — deployed on client infrastructure; KCS workflow, access controls, and article templates configured.',
    'Article Seeding & Migration — 20–50 seed articles built covering the highest-escalation topics.',
    'Team Onboarding & Workflow Validation — KCS workflow walkthrough; retrieval quality validated against real queries.',
    'Handoff & Documentation — architecture, user, and operations guides; admin team confirms independent operation.',
  ],
  deliverables: [
    { name: 'Deployed SCKB Instance', description: 'Production installation on your infrastructure — PostgreSQL, application layer, configured KCS workflows', value: 'A working, governed knowledge base — not a design document' },
    { name: 'Seed Article Corpus', description: '20–50 KCS-structured articles covering highest-escalation topics', value: 'Immediate value on day one' },
    { name: 'KCS Workflow Configuration', description: 'Article types, capture workflow, publish review process, and access roles', value: 'The system improves over time without a dedicated knowledge manager' },
    { name: 'Retrieval Quality Validation', description: 'Test query set executed and documented; search tuned', value: 'Confirms the system finds what it should before handoff' },
    { name: 'Architecture, User & Operations Guides', description: 'Deployment config, authoring patterns, and upgrade path documented', value: 'Enables independent operation and extension' },
  ],
  duration:
    '4–6 weeks. Well-organized existing documentation with a defined initial scope completes in 4–5 ' +
    'weeks including seeding. Fragmented knowledge assets or a large seed corpus typically require 5–6 ' +
    'weeks.',
  costBenefit:
    'The cost of inaccessible institutional knowledge is paid continuously — in onboarding time, ' +
    'escalation volume, and decisions made without information that exists somewhere in the organization. ' +
    'SCKB\'s KCS approach breaks this loop: the first resolution produces the article, the second ' +
    'encounter finds it. The infrastructure cost is server time, and the data stays on-premise — no ' +
    'per-seat AI licensing, no data-privacy exposure.',
  credibility: {
    summary:
      'SCKB is an open-source KCS v6-governed knowledge base system TJM Solutions built and operates — ' +
      'not a design document, a working system with its own track record.',
    links: [{ label: 'About Tony Moores', href: '/about' }],
  },
};

export default function DT2Page(): ReactNode {
  return <OfferPage offer={offer} />;
}
