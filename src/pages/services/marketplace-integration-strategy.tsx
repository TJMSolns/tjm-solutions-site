import type { ReactNode } from 'react';
import OfferPage, { type OfferPageData } from '@site/src/components/OfferPage';

const offer: OfferPageData = {
  id: 'CS-2',
  name: 'Marketplace Integration Strategy',
  category: 'Commerce Strategy',
  categoryHref: '/#commerce-strategy',
  slug: 'marketplace-integration-strategy',
  description:
    'A design for adding marketplace capability — whether you are a retailer launching a seller ' +
    'marketplace or a brand expanding into marketplace channels — that balances time-to-value against ' +
    'operational readiness. Grounded in real marketplace implementation experience across both operator ' +
    'and participant sides, we design the commercial model, integration architecture, and go-live ' +
    'sequence before the vendor salespeople design it for you.',
  problemStatement:
    'A VP Commerce or VP Business Development at a commerce operator who has decided to launch a ' +
    'marketplace — either as an operator enabling third-party sellers, or as a brand participating in ' +
    'existing marketplace channels — has a clear opportunity but an underestimated execution challenge. ' +
    'Seller onboarding design, integration architecture, operational model, commercial terms, and go-live ' +
    'sequencing interact in ways most organizations underestimate. The most common failure mode is not a ' +
    'bad technology choice — it is a marketplace nobody sells on, because onboarding is too complex or ' +
    "the commercial terms don't work for target sellers.",
  valueProposition:
    'By addressing the business model and operational design before the technology selection, this ' +
    'engagement prevents the failure mode where a well-integrated marketplace platform produces a poorly ' +
    'designed marketplace. The output covers operator vs. participant model, seller persona and ' +
    'onboarding design, integration architecture, platform recommendation, and a go-live sequencing plan ' +
    'that builds seller supply and buyer demand in the right order.',
  methodSummary: [
    'Business Model Design & Seller Persona Definition — operator commercial terms and category scope, or participant channel strategy and integration requirements.',
    'Integration Architecture & Platform Evaluation — marketplace platform assessment across leading platforms for operators; per-channel integration design for participants.',
    'Operational Model Design & Go-Live Sequencing — seller support, returns, payments, and a phased launch plan with readiness gates.',
    'Platform Deep-Dive & Technical Specification — for operators building a net-new marketplace requiring full platform selection.',
  ],
  deliverables: [
    { name: 'Marketplace Business Model Design', description: 'Documented operator or participant model: commercial terms, seller/channel criteria, economic model', value: 'Determines whether the marketplace can attract and retain the sellers or channels that make it work' },
    { name: 'Seller Persona & Onboarding Design', description: 'Target seller profiles with onboarding requirements and friction analysis', value: 'Prevents the most common marketplace failure mode — an onboarding process too complex for target sellers' },
    { name: 'Integration Architecture', description: 'Integration design for catalog, orders, inventory, and returns across the marketplace boundary', value: 'A maintainable, extensible technical blueprint' },
    { name: 'Platform Recommendation', description: 'Assessed platform options with fit rating against operator model and requirements (if operator)', value: 'Grounds the technology decision in requirements rather than vendor pitch quality' },
    { name: 'Go-Live Sequencing Plan', description: 'Phased launch plan with seller/channel ramp and operational readiness gates', value: 'Prevents the empty-marketplace problem by sequencing supply before demand' },
  ],
  duration:
    '4–6 weeks. A brand determining marketplace participation strategy completes in 4 weeks. An operator ' +
    'designing a seller marketplace from the ground up — including platform selection and full onboarding ' +
    'architecture — typically requires 6 weeks.',
  costBenefit:
    'A failed marketplace launch is one of the more visible and costly commerce failures — public, ' +
    'damaging to seller and buyer trust simultaneously, and expensive to restart. Strategy before ' +
    'implementation is the mechanism that prevents this, and the opportunity window is timing-sensitive: ' +
    'organizations that launch a well-designed marketplace before competitors consolidate seller supply ' +
    'capture a structural advantage.',
};

export default function CS2Page(): ReactNode {
  return <OfferPage offer={offer} />;
}
