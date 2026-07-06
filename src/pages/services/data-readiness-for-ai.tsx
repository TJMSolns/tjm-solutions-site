import type { ReactNode } from 'react';
import OfferPage, { type OfferPageData } from '@site/src/components/OfferPage';

const offer: OfferPageData = {
  id: 'DT-4',
  name: 'Data Readiness for AI',
  category: 'Digital Transformation',
  categoryHref: '/#digital-transformation',
  slug: 'data-readiness-for-ai',
  description:
    'A 2–4 week assessment that inventories your data assets, profiles their quality, and produces a ' +
    'use-case-specific readiness scorecard — so you know which AI use cases your data can support today ' +
    'and which require data infrastructure investment first, before committing budget to the AI project ' +
    'itself.',
  problemStatement:
    'The most common reason AI initiatives underdeliver is not the model — it is the data. Organizations ' +
    'commit to an AI use case and only then discover that the data meant to feed the model isn\'t clean ' +
    'enough, complete enough, or accessible enough; that training data exists but in formats or locations ' +
    'the ML pipeline can\'t reach; that the data is governed in ways that prevent the intended use; or that ' +
    'bias baked into historical data will produce a model that reinforces the very problem it was supposed ' +
    'to solve. Discovering any of this after the project has started is expensive. Discovering it before ' +
    'is cheap.',
  valueProposition:
    'This engagement inventories data assets, profiles their quality along completeness, accuracy, ' +
    'recency, and volume dimensions, and assesses governance risk — privacy, consent, and bias exposure — ' +
    'for each asset and intended use. Every candidate AI use case is then scored against its actual data ' +
    'requirements: ready, conditionally ready, or not ready. The result is a readiness scorecard leadership ' +
    'can use to decide, with evidence, which use cases to build now and which require data infrastructure ' +
    'investment first — plus a remediation roadmap that sequences the fixes by use case priority.',
  methodSummary: [
    'Data Asset Inventory & Quality Profiling — all data assets mapped by source, format, ownership, and access method, then profiled for completeness, accuracy, recency, and volume adequacy.',
    'Governance Assessment & Use Case Readiness Scorecard — privacy, consent, labeling, and bias risk assessed per asset; each AI use case scored ready, conditionally ready, or not ready against its data requirements.',
    'Remediation Roadmap — every identified gap classified by type (collection, quality, governance, architecture) and sequenced by use case priority.',
  ],
  deliverables: [
    { name: 'Data Landscape Map', description: 'Inventory of all data assets with ownership, format, and access documentation', value: 'The data inventory most organizations don\'t have written down anywhere' },
    { name: 'Quality Profile Report', description: 'Completeness, accuracy, recency, and volume assessment per asset', value: 'Replaces assumptions about data quality with evidence' },
    { name: 'Governance Risk Register', description: 'Privacy, consent, and bias risks documented by asset and intended use', value: 'Catches governance violations before a model is trained on data it shouldn\'t be' },
    { name: 'Use Case Readiness Scorecard', description: 'Each AI use case scored against its data requirements — ready, conditionally ready, or not ready', value: 'Tells leadership what can be built now versus what needs investment first' },
    { name: 'Data Readiness Roadmap', description: 'Prioritized remediation plan classified by gap type and sequenced by use case priority', value: 'Turns "the data isn\'t ready" into a funded, sequenced plan to fix it' },
  ],
  duration:
    '2–4 weeks. A focused assessment scoped to one or two AI use cases with accessible data owners ' +
    'completes in 2–3 weeks. Broader assessments spanning multiple domains or requiring deeper governance ' +
    'review typically take 4 weeks.',
  costBenefit:
    'AI project failure is routinely attributed to the model, when the data was the actual problem. Data ' +
    'quality issues that take months to fix are typically discovered only after a project is well ' +
    'underway; governance violations discovered post-training require rollback and remediation; and use ' +
    'case prioritization done without data readiness scoring produces a roadmap that doesn\'t survive ' +
    'contact with the data. A short readiness assessment before an AI project commitment is one of the ' +
    'highest-return pre-investments an AI program can make — it costs a fraction of a failed project and ' +
    'prevents most of the reasons projects fail.',
};

export default function DT4Page(): ReactNode {
  return <OfferPage offer={offer} />;
}
