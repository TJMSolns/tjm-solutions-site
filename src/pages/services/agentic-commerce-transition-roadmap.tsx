import type { ReactNode } from 'react';
import OfferPage, { type OfferPageData } from '@site/src/components/OfferPage';

const offer: OfferPageData = {
  id: 'CS-5',
  name: 'Agentic Commerce Transition Roadmap',
  category: 'Commerce Strategy',
  categoryHref: '/#commerce-strategy',
  slug: 'agentic-commerce-transition-roadmap',
  description:
    'A multi-horizon, sequenced plan for moving your commerce operation from its current state to ' +
    'agent-native — grounded in the competitive economics of agent-mediated markets, capability surface ' +
    'design principles, and your organization\'s specific gaps rather than assumed ones.',
  problemStatement:
    'Many commerce operators now accept that agent-mediated commerce is real, accelerating, and will ' +
    'materially reshape how buyers interact with their business. What they lack is a structured, sequenced ' +
    'plan for getting from current state to agent-ready. Internal initiatives explore adjacent areas — ' +
    'structured data, API improvements, AI features — without a coherent view of how they compose into ' +
    'agent-readiness, and the window for proactive positioning is open but not indefinitely.',
  valueProposition:
    'This engagement produces a multi-horizon plan answering the question every VP Commerce needs to ' +
    'answer: what to build next quarter, and why. It sequences near-term, mid-term, and long-term ' +
    'investments so each phase generates value before the next begins — closing priority data and API gaps ' +
    'first, building structured capability surfaces next, and arriving at an agent-native operating model ' +
    'without a single big-bang investment.',
  methodSummary: [
    'Current State Synthesis & Gap Mapping — a consolidated gap view produced across platform, API, data, and architecture.',
    'Competitive Landscape Analysis — competitive dynamics, agent discovery channels, and early-mover economics assessed.',
    'Capability Build Sequence & Horizon Planning — a 0–6 month / 6–18 month / 18+ month plan built with investment priorities.',
    'Metrics Framework & Finalization — success metrics defined per horizon, with leading and lagging indicators.',
  ],
  deliverables: [
    { name: 'Current State Assessment', description: 'Gap baseline established across platform, API, data, and architecture', value: 'Grounds the roadmap in your specific gaps rather than generic industry assumptions' },
    { name: 'Competitive Landscape Summary', description: 'Analysis of competitive dynamics and agent discovery channel economics', value: 'Provides the evidence base for the investment case to leadership' },
    { name: 'Capability Build Sequence', description: 'Dependency-mapped sequence of capability investments', value: 'Ensures each investment builds on the last rather than being built in isolation' },
    { name: 'Multi-Horizon Transition Roadmap', description: 'Specific, executable 0–6 / 6–18 / 18+ month plan with investment priorities', value: 'Answers what to build next quarter with a defensible rationale' },
    { name: 'Metrics Framework', description: 'Leading and lagging indicators defined for each horizon', value: 'Makes progress measurable long before agent-commerce revenue is visible' },
  ],
  duration:
    '4–5 weeks when prior agent-readiness assessment findings are available as input; 7–8 weeks as a ' +
    'standalone engagement that includes a rapid current-state assessment phase.',
  costBenefit:
    'Agent discovery systems index and weight vendor capability based on signals established before the ' +
    'first transaction. Organizations with well-structured, deterministic, discoverable capability surfaces ' +
    'will be prioritized in agent discovery; organizations that build those surfaces only after agent ' +
    'commerce is established are building into a market that has already formed its preferences. B2B ' +
    'procurement automation is adopting faster than most operators have recognized, and consumer-facing ' +
    'agent shopping is moving from experimentation toward early mainstream adoption — the organizations that ' +
    'invest now capture the positioning advantage that early architectural investment creates.',
};

export default function CS5Page(): ReactNode {
  return <OfferPage offer={offer} />;
}
