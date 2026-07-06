import type { ReactNode } from 'react';
import OfferPage, { type OfferPageData } from '@site/src/components/OfferPage';

const offer: OfferPageData = {
  id: 'CS-1',
  name: 'Commerce Platform Assessment',
  category: 'Commerce Strategy',
  categoryHref: '/#commerce-strategy',
  slug: 'commerce-platform-assessment',
  description:
    'A vendor-neutral, evidence-based evaluation of your current commerce platform against your actual ' +
    'business requirements — separating what the platform can genuinely do from what the vendor roadmap ' +
    'promises, and producing a defensible stay/optimize/migrate recommendation before the board asks the ' +
    'question you can\'t yet answer.',
  problemStatement:
    'A VP Commerce or CTO whose board has started asking "what are we doing about the platform?" and whose ' +
    'honest answer is "we\'re watching it." Vendor roadmaps promise features that never land on schedule, ' +
    'technical debt is felt by engineering but never quantified for the business, and integration ' +
    'maintenance consumes capacity that should go toward new capability. The business is planning ' +
    'initiatives the platform may not support, and no one has done the work to find out — which means a ' +
    'multi-million-dollar decision is approaching on inadequate evidence.',
  valueProposition:
    'This engagement answers three questions with evidence rather than anecdote: what the platform can ' +
    'actually do versus what the vendor claims, what the business actually needs over the next two to three ' +
    'years, and what the realistic options are along with their true costs. It is not a replatform ' +
    'recommendation looking for justification — it is vendor-neutral analysis that produces the evidence to ' +
    'make the decision, whichever direction it goes.',
  methodSummary: [
    'Business Requirements — documented capability requirements against a 2–3 year horizon, establishing what the platform must actually do.',
    'Technical Assessment — platform capability review, integration inventory, and technical debt mapped and translated into business terms.',
    'Options Analysis — Stay / Optimize / Migrate scenarios developed with effort, risk, and cost-to-value for each path.',
  ],
  deliverables: [
    { name: 'Business Requirements Summary', description: 'Documented capability requirements against a 2–3 year business horizon', value: 'Establishes what the platform must do before any technical judgment is made' },
    { name: 'Platform Capability Map', description: 'Structured assessment of platform capability against documented requirements', value: 'Makes fit and gap explicit and defensible to the board' },
    { name: 'Technical Debt Inventory', description: 'Cataloged technical debt with business-facing impact framing', value: 'Translates engineering pain into terms the business can act on' },
    { name: 'Integration Complexity Assessment', description: 'Full integration inventory with maintenance and risk profile', value: 'Surfaces the hidden cost of the current architecture' },
    { name: 'Options Brief', description: 'Stay, Optimize, or Migrate scenarios with cost-to-value comparison', value: 'Turns a binary replatform debate into a weighed decision' },
    { name: 'Platform Assessment Recommendation', description: 'Vendor-neutral recommendation synthesizing all findings', value: 'Boardroom-ready, independent, and defensible' },
  ],
  duration:
    '2–4 weeks. The standard engagement runs three weeks — business requirements, technical assessment, ' +
    'then options analysis. A 2-week variant is available for single-platform operators with clean, ' +
    'accessible documentation; multi-platform or heavily customized environments typically require the full ' +
    'four weeks.',
  costBenefit:
    'Platform decisions made without structured assessment are made on vendor pitches, engineering ' +
    'frustration, or executive anecdote — and the two failure modes are both expensive. An unnecessary ' +
    'replatform costs millions in implementation and organizational disruption; a necessary replatform ' +
    'delayed costs millions in lost capability and accumulated technical debt. The assessment is the minimum ' +
    'viable information for a decision that will cost orders of magnitude more regardless of which direction ' +
    'it goes.',
};

export default function CS1Page(): ReactNode {
  return <OfferPage offer={offer} />;
}
