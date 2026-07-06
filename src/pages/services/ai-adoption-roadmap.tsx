import type { ReactNode } from 'react';
import OfferPage, { type OfferPageData } from '@site/src/components/OfferPage';

const offer: OfferPageData = {
  id: 'DT-1',
  name: 'AI Adoption Roadmap',
  category: 'Digital Transformation',
  categoryHref: '/#digital-transformation',
  slug: 'ai-adoption-roadmap',
  description:
    'A pragmatic, sequenced plan for AI investment that starts with business objectives and works ' +
    'backward to use cases — prioritizing what will actually ship and generate measurable value, and ' +
    'grounding technology recommendations in specific use case requirements rather than a generic vision ' +
    'of where AI is going.',
  problemStatement:
    'A board is asking, competitors are moving, and market expectation is accelerating — but most AI ' +
    'investment programs run into the same problems: initiatives launched in parallel without a portfolio ' +
    'view, use cases selected for how impressive they look rather than their feasibility or business ' +
    'value, and no measurable outcomes to show after 12–18 months of spend. Technology choices get made ' +
    'before use case requirements are understood. The spend happens; the results don\'t. The failure mode ' +
    'is rarely the technology itself — it is the sequencing and selection logic behind it.',
  valueProposition:
    'This engagement produces a specific, executable plan rather than a vision statement. Every candidate ' +
    'use case is scored on business value and feasibility — data readiness, technical complexity, ' +
    'organizational change, and build/buy/partner trade-offs — so the highest-value, highest-feasibility ' +
    'work goes first. Those early wins fund and justify what comes next, building both organizational ' +
    'capability and the credibility an AI program needs to keep investing. The result is a roadmap the ' +
    'engineering team can execute and leadership can defend.',
  methodSummary: [
    'Business Objective Alignment — leadership objectives documented and existing AI initiatives mapped against them.',
    'Use Case Discovery, Feasibility Scoring & Technology Landscape Assessment — candidate use cases identified and scored on business value and feasibility; build/buy/partner options assessed per use case.',
    'Roadmap Design, Metrics Framework & Stakeholder Alignment — a sequenced roadmap produced with investment priorities, success metrics, and dependencies, with stakeholder alignment sessions where needed.',
  ],
  deliverables: [
    { name: 'Business Objective Map', description: 'Documented AI investment objectives with measurable success definitions', value: 'Anchors every subsequent decision to a business outcome, not a technology trend' },
    { name: 'Use Case Portfolio', description: 'Prioritized set of AI use cases scored on business value, feasibility, and data requirements', value: 'Replaces "impressive in a demo" with "worth building first"' },
    { name: 'Feasibility Assessment', description: 'Data readiness and organizational change assessment per use case', value: 'Surfaces prerequisite work before it becomes a mid-project surprise' },
    { name: 'Technology Recommendations', description: 'Build/buy/partner decisions grounded in use case fit rather than vendor pressure', value: 'Keeps technology choices accountable to the use cases they serve' },
    { name: 'Phased AI Adoption Roadmap & Metrics Framework', description: 'Sequenced plan with investment priorities, dependencies, and pre-defined success metrics per use case', value: 'A roadmap engineering can execute and leadership can defend with numbers' },
  ],
  duration:
    '4–6 weeks. A single-objective engagement with straightforward stakeholder access completes in 4–5 ' +
    'weeks. Programs spanning multiple business units or requiring board-level stakeholder alignment ' +
    'typically extend to 6 weeks.',
  costBenefit:
    'AI investment without a roadmap is not cost-free — it is simply a different, less visible kind of ' +
    'expensive. Organizations that sequence AI investments well, starting with feasible and high-value use ' +
    'cases that build shared data infrastructure and organizational capability, compound their advantage ' +
    'over time. Organizations that defer structured planning until they have "done more AI" make the ' +
    'sequencing problem harder, because uncoordinated investments create data and architecture debt that ' +
    'complicates everything that follows. The advantage goes to whoever sequences first.',
};

export default function DT1Page(): ReactNode {
  return <OfferPage offer={offer} />;
}
