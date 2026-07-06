import type { ReactNode } from 'react';
import OfferPage, { type OfferPageData } from '@site/src/components/OfferPage';

const offer: OfferPageData = {
  id: 'EE-1',
  name: 'Commerce Search & Discovery Audit',
  category: 'Experience Engineering',
  categoryHref: '/#experience-engineering',
  slug: 'commerce-search-discovery-audit',
  description:
    'A structured evaluation of your search quality, relevance configuration, and discovery design — ' +
    'grounded in your actual query data rather than vendor defaults. We identify where relevance gaps, ' +
    'faceting failures, and no-result rates are suppressing conversion, produce a prioritized improvement ' +
    'plan, and give you the evidence base to make platform and configuration investments with confidence.',
  problemStatement:
    'A VP Commerce or VP Merchandising at an operator where search is the primary discovery channel — but ' +
    'nobody has formally evaluated whether it is working. Query logs exist but are rarely analyzed. ' +
    'Vendor-default relevance settings were set at implementation and never tuned. Synonym lists are ' +
    'incomplete. No-result rates are high for predictable query patterns, and the team has no structured ' +
    'evidence to prioritize fixes or justify investment.',
  valueProposition:
    'By analyzing actual query behavior against relevance outcomes, this engagement produces a ' +
    'prioritized improvement plan grounded in how your customers actually search — quick wins surface ' +
    'immediately, and structural gaps requiring platform or indexing changes are scoped separately for ' +
    'follow-on investment.',
  methodSummary: [
    'Query Log Analysis & Configuration Review — volume distribution, no-result and zero-click rates, and top-query performance analyzed against current relevance configuration.',
    'Facet, Navigation & Personalization Assessment — facet and filter structure evaluated against browse behavior; personalization and A/B testing infrastructure assessed.',
    'Platform Limitation Analysis — where relevance gaps trace to platform constraints rather than configuration, findings feed a broader platform evaluation.',
  ],
  deliverables: [
    { name: 'Query Log Analysis Report', description: 'Statistical breakdown of search behavior and no-result/zero-click rates', value: 'Establishes the demand-side baseline — what customers search for and where discovery fails' },
    { name: 'Relevance Assessment', description: 'Evaluation of current relevance configuration against curated test query sets', value: 'Identifies where vendor defaults diverge from your catalog and customer intent' },
    { name: 'Facet & Navigation Review', description: 'Structured evaluation of facet design, filter logic, and navigation taxonomy', value: 'Surfaces discovery gaps that push customers to search when browse should suffice' },
    { name: 'Synonym & Stemming Gap Inventory', description: 'High-volume query patterns with missing or incorrect synonym/stemming coverage', value: 'Enables quick configuration wins with immediate conversion impact' },
    { name: 'Prioritized Improvement Plan', description: 'Ranked list of improvements by effort and estimated conversion impact', value: 'A sequenced action list executable without further analysis' },
  ],
  duration:
    '2–3 weeks. A single-platform operator with centralized configuration and accessible query logs ' +
    'completes in 2 weeks. Multiple storefronts or query log access requiring data engineering support ' +
    'typically require 3 weeks.',
  costBenefit:
    'Search is typically the highest-conversion path through a commerce experience — customers who ' +
    'search convert at 2–3x the rate of browsers. Every point of no-result rate and every relevance miss ' +
    'on high-volume queries is measurable, recurring revenue impact, and the gap compounds as catalog and ' +
    'campaigns change without re-audit.',
};

export default function EE1Page(): ReactNode {
  return <OfferPage offer={offer} />;
}
