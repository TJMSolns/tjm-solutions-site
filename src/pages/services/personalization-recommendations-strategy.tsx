import type { ReactNode } from 'react';
import OfferPage, { type OfferPageData } from '@site/src/components/OfferPage';

const offer: OfferPageData = {
  id: 'EE-3',
  name: 'Personalization & Intelligent Recommendations Strategy',
  category: 'Experience Engineering',
  categoryHref: '/#experience-engineering',
  slug: 'personalization-recommendations-strategy',
  description:
    'A measurement-first strategy engagement that audits your current personalization and recommendations ' +
    'capability, designs a prioritized use case portfolio matched to your catalog and customer behavior, ' +
    'and builds a lift measurement framework in from the start — so the investment can be defended with ' +
    'evidence rather than intuition.',
  problemStatement:
    'Most commerce organizations have personalization technology deployed but aren\'t generating the lift ' +
    'that justified the investment. Personalization often runs on default configurations — popularity ' +
    'rules wearing a personalization label — while the recommendations engine surfaces products the ' +
    'customer just bought, or high-margin items that are simply irrelevant. A/B tests produce inconclusive ' +
    'results because the segments aren\'t meaningful, and the team can\'t explain why a given recommendation ' +
    'was made, which means they can\'t improve it. The capability is real; the strategy to extract value ' +
    'from it was never designed.',
  valueProposition:
    'By auditing what\'s actually deployed and configured, analyzing purchase patterns and catalog dynamics ' +
    'to find the personalization opportunities the data genuinely supports, and designing a measurement ' +
    'framework alongside every use case, this engagement turns personalization from an unmeasured ' +
    'technology deployment into a prioritized set of revenue investments with defined success metrics and ' +
    'holdout groups.',
  methodSummary: [
    'Capability Audit & Behavioral Analysis — current personalization and recommendations stack assessed for what\'s deployed, configured, and measured, alongside purchase patterns, session depth, and catalog dynamics.',
    'Use Case Portfolio & Data Readiness — 5–10 personalization use cases prioritized against customer segments and platform capability, then checked against whether the data each one requires actually exists and is accessible.',
    'Measurement Framework & Roadmap — holdout design, metrics, and significance thresholds defined for each use case, then sequenced into an implementation roadmap by expected lift times implementation readiness.',
  ],
  deliverables: [
    { name: 'Personalization Capability Assessment', description: 'Current-state audit of deployed personalization and recommendations systems', value: 'Establishes what\'s actually running versus what was intended' },
    { name: 'Behavioral Analysis Summary', description: 'Customer and catalog dynamics that shape which personalization strategies fit', value: 'Grounds strategy in actual data patterns rather than platform defaults' },
    { name: 'Use Case Portfolio', description: '5–10 prioritized personalization use cases with lift range estimates and implementation requirements', value: 'Focuses investment on the highest-expected-value opportunities' },
    { name: 'Data Readiness Assessment', description: 'Gap analysis of what data exists versus what each use case requires', value: 'Prevents mid-implementation discovery of missing instrumentation' },
    { name: 'Measurement Specification & Roadmap', description: 'Holdout design, metrics, and significance thresholds for each use case, sequenced into an implementation plan', value: 'Ensures no use case proceeds without a defined way to prove it worked' },
  ],
  duration:
    '4–6 weeks, remote-first, covering capability audit, behavioral analysis, use case design, and ' +
    'measurement framework definition.',
  costBenefit:
    'The cost of unmeasured personalization is invisible but real: budget renews on intuition rather than ' +
    'evidence, competitor personalization improves through measurement and iteration while an unmeasured ' +
    'program stagnates on defaults, and every month without measurement is a month of behavioral-data ' +
    'learning lost from the personalization flywheel. A measurement-first strategy compounds in value the ' +
    'earlier it is put in place.',
};

export default function EE3Page(): ReactNode {
  return <OfferPage offer={offer} />;
}
