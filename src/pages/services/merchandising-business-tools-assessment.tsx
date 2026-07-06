import type { ReactNode } from 'react';
import OfferPage, { type OfferPageData } from '@site/src/components/OfferPage';

const offer: OfferPageData = {
  id: 'EE-2',
  name: 'Merchandising & Business User Tools Assessment',
  category: 'Experience Engineering',
  categoryHref: '/#experience-engineering',
  slug: 'merchandising-business-tools-assessment',
  description:
    'An inventory-and-workflow assessment of your merchandising tool landscape — how much of your ' +
    'platform\'s out-of-the-box capability is actually in use, where business users are stuck routing ' +
    'through IT for changes the platform was built to self-serve, and what it would take to close the gap.',
  problemStatement:
    'Modern commerce platforms ship with extensive merchandising capability, but most organizations use ' +
    'only a fraction of it. Merchandisers file IT tickets to update banners, promotions, and product ' +
    'rankings the platform can already do natively. Category page changes that should take minutes take ' +
    'weeks because the workflow runs through engineering. Seasonal campaigns require sprint work for ' +
    'changes competitors execute same-day, and new hires take months to reach full productivity because ' +
    'tooling documentation doesn\'t exist. The cost isn\'t just delay — the organization\'s merchandising ' +
    'capability ends up capped by engineering capacity rather than by business need.',
  valueProposition:
    'By inventorying the merchandising tool landscape, measuring out-of-the-box utilization against what\'s ' +
    'licensed, and walking real workflows with the business users who run them, this engagement separates ' +
    'what\'s fixable through configuration and training from what genuinely requires investment — so ' +
    'quick wins ship immediately and the roadmap for everything else is grounded in evidence.',
  methodSummary: [
    'Tool Inventory — every tool in the merchandising stack (commerce platform, PIM, CMS, promotion engine, A/B testing) catalogued with ownership and dependencies.',
    'OOB Utilization & Workflow Mapping — platform capability assessed against actual usage, and 5–8 common merchandising workflows walked with business users to find where they hit IT dependency.',
    'Gap Analysis & Roadmap — each gap root-caused as configuration, training, integration, or genuine product limitation, then sequenced into a prioritized roadmap by effort and impact.',
  ],
  deliverables: [
    { name: 'Tool Register', description: 'Complete inventory of merchandising tools with ownership, integration dependencies, and utilization status', value: 'Establishes a shared map of the merchandising stack across business and IT' },
    { name: 'OOB Utilization Report', description: 'Assessment of platform capability licensed versus configured versus actually used', value: 'Surfaces paid-for capability that isn\'t being realized' },
    { name: 'Workflow Friction Inventory', description: 'Common merchandising workflows mapped with friction points and IT dependency flagged', value: 'Pinpoints exactly where business users lose velocity to engineering handoffs' },
    { name: 'Gap Analysis', description: 'Root-cause classification of each gap — configuration, training, integration, or product', value: 'Separates quick fixes from items that require real investment' },
    { name: 'Merchandising Independence Roadmap', description: 'Prioritized recommendations for reducing IT dependency, with quick wins separated from investment items', value: 'A sequenced action plan the team can execute without further analysis' },
  ],
  duration:
    '2–4 weeks. A single-platform environment with accessible configuration and documentation completes ' +
    'in 2 weeks. Multiple tools, integrations, or business units typically require up to 4 weeks.',
  costBenefit:
    'This assessment is especially valuable 6–18 months after a platform replatform, when training has ' +
    'stopped at go-live and workarounds have started to accumulate — the new platform begins to feel like ' +
    'the old one even though the capability to prevent that was already paid for. Closing the gap restores ' +
    'merchandising velocity and lets seasonal campaigns, promotions, and category updates happen at ' +
    'business speed instead of sprint speed.',
};

export default function EE2Page(): ReactNode {
  return <OfferPage offer={offer} />;
}
