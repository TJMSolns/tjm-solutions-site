import type { ReactNode } from 'react';
import OfferPage, { type OfferPageData } from '@site/src/components/OfferPage';

const offer: OfferPageData = {
  id: 'CS-8',
  name: 'Commerce Vendor/SI GTM Advisory',
  category: 'Commerce Strategy',
  categoryHref: '/#commerce-strategy',
  slug: 'commerce-vendor-si-gtm-advisory',
  description:
    'An audit of current positioning and sales motion for commerce technology vendors and systems ' +
    'integrators, producing buyer-aligned offer packaging, competitive differentiation, and a sales motion ' +
    'built around how commerce buyers actually evaluate and buy.',
  problemStatement:
    'Commerce ISVs and SIs consistently underperform their technical capability in market: sales cycles ' +
    'run longer than they should, win rates fall below what the technical merit warrants, positioning sounds ' +
    'like every other vendor in the space, and pitches are built around features rather than outcomes. The ' +
    'cause is usually GTM design, not product quality — the product is strong enough to win, but the ' +
    'positioning and sales motion don\'t get the buyer to the point where the product can prove it.',
  valueProposition:
    'The decision-maker in a commerce technology purchase — typically a VP Commerce, VP Digital, or CTO — ' +
    'is not buying features. They are buying confidence the investment will work, a vendor honest about ' +
    'limitations, a partner relationship rather than just a product, and a decision they can defend ' +
    'internally. This engagement designs positioning, offer packaging, and a sales motion around those ' +
    'actual buying criteria, so the sales team can have a confident conversation about where it genuinely ' +
    'wins.',
  methodSummary: [
    'Capability Audit & Buyer Persona Design — current marketing and sales materials audited for genuine versus generic messaging; the actual economic buyer and their evaluation criteria defined.',
    'Offer Packaging & Competitive Positioning — offers designed around the buyer\'s buying motion; a differentiation narrative built with neutralization for primary alternatives.',
    'Sales Motion Design — the ideal buying journey mapped, with the role of each go-to-market element defined at each stage.',
  ],
  deliverables: [
    { name: 'Competitive Positioning Analysis', description: 'Where the vendor is genuinely different versus undifferentiated noise', value: 'Separates real differentiation from marketing language that sounds like everyone else' },
    { name: 'Buyer Persona Profiles', description: 'Economic buyer profiles with decision triggers and evaluation criteria', value: 'Grounds the sales motion in how the buyer actually decides, not assumptions about them' },
    { name: 'Offer Packaging Design', description: 'Defined offers with scope and outcome framing aligned to the buying motion', value: 'Makes offers easier for buyers to evaluate and justify internally' },
    { name: 'Competitive Positioning Framework', description: 'Differentiation narrative plus competitive neutralization for key alternatives', value: 'Equips the sales team to address competitors directly instead of avoiding the topic' },
    { name: 'Sales Motion Design', description: 'Buying journey with go-to-market element roles defined at each stage', value: 'Focuses GTM investment on the elements that actually move buyers forward' },
    { name: 'Enablement Content Outline', description: 'Development plan for the content the sales team needs to execute the motion', value: 'Gives the sales team a concrete plan to operationalize the new positioning' },
  ],
  duration:
    '4–6 weeks, delivered remote-first.',
  costBenefit:
    'The commerce technology market is consolidating, and the differentiation window in most platform ' +
    'categories is shrinking as the market matures. Vendors that build defensible GTM positions now are ' +
    'building durable pipeline, while vendors that defer GTM investment while investing only in product are ' +
    'building a better product the market doesn\'t yet know is better. Every month of a sales cycle that ' +
    'runs longer than it needs to is a month of sales team cost with no revenue outcome — the advisory cost ' +
    'is a fraction of the sales productivity improvement a better-designed motion produces.',
};

export default function CS8Page(): ReactNode {
  return <OfferPage offer={offer} />;
}
