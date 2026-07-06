import type { ReactNode } from 'react';
import OfferPage, { type OfferPageData } from '@site/src/components/OfferPage';

const offer: OfferPageData = {
  id: 'CS-7',
  name: 'B2B Commerce Modernization Strategy',
  category: 'Commerce Strategy',
  categoryHref: '/#commerce-strategy',
  slug: 'b2b-commerce-modernization-strategy',
  description:
    'An analysis of your B2B business model against modern and agent-ready commerce requirements, ' +
    'producing a phased transformation roadmap with platform recommendations sized to the account ' +
    'hierarchies, contract pricing, and procurement integrations that make B2B commerce structurally ' +
    'different from B2C.',
  problemStatement:
    'Enterprise procurement is not waiting for B2B sellers to modernize. Procurement software is ' +
    'automating purchasing decisions and expecting supplier APIs, enterprise buyers are demanding digital ' +
    'self-service for catalog access and order management, buyers who used to call a sales rep are looking ' +
    'for a portal and moving to competitors who have one, and agent-based procurement is moving from early ' +
    'adopter to mainstream in enterprise accounts. B2B operators who are not building digital commerce ' +
    'capability now are building a structural disadvantage that compounds with every procurement automation ' +
    'cycle.',
  valueProposition:
    'B2B commerce is not B2C with a discount field — it requires account hierarchies, contract pricing, ' +
    'approval workflows, punchout/cXML support, EDI modernization, and agent-ready APIs, and most B2C ' +
    'platforms adapted for B2B deliver only a subset of this at significant customization cost. This ' +
    'engagement properly characterizes the transformation scope across business model, customer experience, ' +
    'and technical architecture, and addresses agent-readiness as a current requirement rather than a future ' +
    'consideration.',
  methodSummary: [
    'B2B Business Model Analysis — account structure, contract pricing, approval workflows, procurement integrations, and buyer journey documented.',
    'Gap Analysis & Target State Design — current systems assessed against modern and agent-ready B2B requirements; target architecture defined for both human and agent buyers.',
    'Transformation Roadmap & Technology Recommendations — the path to target state phased by business priority and investment sequencing, with platform and vendor fit assessed.',
  ],
  deliverables: [
    { name: 'B2B Business Model Assessment', description: 'Account structure, pricing, workflow, and procurement integration analysis', value: 'Establishes the true complexity baseline before any platform conversation starts' },
    { name: 'Buyer Journey Map', description: 'Current-state buyer journey with friction points by segment', value: 'Shows where buyers are quietly moving to competitors with better self-service' },
    { name: 'Gap Analysis Report', description: 'Current state assessed against modern and agent-ready B2B requirements', value: 'Names the gap in specific, addressable terms rather than "we need a portal"' },
    { name: 'Target State Architecture', description: 'Defined target architecture for both human and agent B2B buyers', value: 'Builds agent-readiness in as a current requirement, not an afterthought' },
    { name: 'B2B Commerce Transformation Roadmap', description: 'Phased plan with investment priorities and expected outcomes', value: 'Delivers buyer experience improvement at every stage, not only at the end' },
    { name: 'Technology Recommendations', description: 'Platform and vendor fit assessed against your B2B complexity', value: 'Grounds the technology decision in B2B-specific requirements' },
  ],
  duration:
    '4–6 weeks, delivered remote-first.',
  costBenefit:
    'Enterprise procurement agent adoption is accelerating: procurement software integrations with ' +
    'supplier catalogs are growing across enterprise accounts, and every automation cycle that can\'t reach ' +
    'your catalog routes that spend to a supplier it can reach. EDI modernization windows are closing as ' +
    'buyer-side systems move past legacy standards. The cost of starting B2B modernization now is a fraction ' +
    'of the cost of losing enterprise accounts to competitors who started earlier — this is not a problem ' +
    'that can be deferred a few years without consequence.',
};

export default function CS7Page(): ReactNode {
  return <OfferPage offer={offer} />;
}
