import type { ReactNode } from 'react';
import OfferPage, { type OfferPageData } from '@site/src/components/OfferPage';

const offer: OfferPageData = {
  id: 'EE-6',
  name: 'Digital Experience Platform Assessment',
  category: 'Experience Engineering',
  categoryHref: '/#experience-engineering',
  slug: 'digital-experience-platform-assessment',
  description:
    'An evidence-based assessment of whether to stay and optimize, stay and extend, or replace your ' +
    'digital experience platform — scoring capability, cost, vendor trajectory, and risk so the decision ' +
    'can be made deliberately rather than under pressure.',
  problemStatement:
    'Every digital experience platform reaches a point where the organization\'s requirements and the ' +
    'platform\'s capability diverge, and the question is whether that gap is a configuration and training ' +
    'problem, an optimization problem, or a platform replacement problem. Getting this wrong is expensive ' +
    'in either direction: replacing a platform that could have been optimized wastes 12–18 months of ' +
    'implementation cost on a problem solvable in weeks, while optimizing a platform that should be ' +
    'replaced continues investment in a system that will still cap the organization\'s capability within a ' +
    'couple of years. The answer is rarely obvious from inside the organization, because the team operating ' +
    'the platform has no visibility into what comparable organizations have achieved with the same one.',
  valueProposition:
    'By auditing platform capability and out-of-the-box utilization, mapping current and 18-month ' +
    'requirements against platform fit, and assessing vendor health and roadmap trajectory, this ' +
    'engagement scores each decision path — stay and optimize, stay and extend, or replace — across ' +
    'capability, cost, risk, and opportunity, and delivers a defensible recommendation formatted for board ' +
    'or investment-committee presentation.',
  methodSummary: [
    'Capability Audit & Requirements Mapping — current platform capability, configuration, and team proficiency assessed alongside documented current and 18-month requirements, each rated for platform fit.',
    'OOB Utilization & Vendor Trajectory — licensed capability measured against what\'s actually deployed and functional, and vendor health, roadmap direction, and market positioning assessed for risk.',
    'Decision Scoring & Recommendation — stay/optimize, stay/extend, and replace paths scored across capability fit, implementation cost, opportunity cost, and risk, with a final recommendation and supporting rationale.',
  ],
  deliverables: [
    { name: 'Platform Capability Baseline', description: 'Current-state assessment of DXP capability, configuration, and team proficiency', value: 'Establishes what the platform can do today, independent of what it\'s configured to do' },
    { name: 'Requirements Register', description: 'Documented current and projected requirements with platform fit ratings', value: 'Makes the size and shape of the capability gap explicit' },
    { name: 'Vendor Risk Assessment', description: 'Vendor health, roadmap direction, and market trajectory analysis', value: 'Surfaces vendor-side risk before it becomes a forced migration' },
    { name: 'Stay/Optimize/Replace Scorecard', description: 'Each decision path scored across capability, cost, risk, and opportunity dimensions', value: 'Turns a subjective platform debate into a comparable, evidence-based scorecard' },
    { name: 'Platform Recommendation Brief', description: 'Final recommendation with rationale, formatted for board or investment-committee presentation', value: 'Gives leadership a defensible basis for the decision that has to be made' },
  ],
  duration:
    '3–4 weeks, remote-first, with structured interviews across engineering, product, and marketing.',
  costBenefit:
    'DXP decisions deferred become DXP decisions made under pressure — a vendor end-of-life notice or ' +
    'acquisition can trigger a forced migration with no preparation time, and a competitor launching ' +
    'capability the current platform can\'t match forces replacement under competitive urgency. The right ' +
    'time for this assessment is before that urgency arrives: it creates the informed basis for a decision ' +
    'that will have to be made either way, with the only question being whether it\'s made well or made in ' +
    'a hurry.',
};

export default function EE6Page(): ReactNode {
  return <OfferPage offer={offer} />;
}
