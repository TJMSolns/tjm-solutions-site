import type { ReactNode } from 'react';
import OfferPage, { type OfferPageData } from '@site/src/components/OfferPage';

const offer: OfferPageData = {
  id: 'CS-6',
  name: 'Commerce Technology Due Diligence',
  category: 'Commerce Strategy',
  categoryHref: '/#commerce-strategy',
  slug: 'commerce-technology-due-diligence',
  description:
    'An independent technical assessment of a commerce platform acquisition target — timed to deal ' +
    'mechanics — producing investment-grade findings with risk ratings and remediation cost estimates the ' +
    'deal team can act on before closing.',
  problemStatement:
    'PE deal teams and corporate acquirers evaluating commerce technology assets face a specific problem: ' +
    'the domain expertise to assess what they are buying isn\'t on the team. The data room has architecture ' +
    'slides designed for the process, the target\'s technical leadership says the platform scales, the ' +
    'reference customers were selected by the target, and the investment thesis depends on growth ' +
    'assumptions the architecture may not support. The risk isn\'t that the platform is bad — it\'s that ' +
    'nobody on the buy side has the domain expertise to know.',
  valueProposition:
    'This engagement replaces assumed technical risk with assessed technical risk. It surfaces findings ' +
    'that change deal pricing, representations and warranties, or the investment thesis itself — ' +
    'architecture ceilings that cap achievable growth, technical debt concentrated in critical paths, ' +
    'key-person risk, integration dependencies on deprecated APIs, and compliance gaps — before exclusivity ' +
    'limits the leverage to act on them.',
  methodSummary: [
    'Data Room & Architecture Review — management presentations, technical documentation, and existing diligence materials reviewed to identify initial risk areas.',
    'Technical Deep Dive — codebase review where access is granted, integration inventory, platform scalability assessment, and team capability evaluation.',
    'Benchmarking & Risk Rating — findings benchmarked against comparable platforms, rated by probability and investment impact, with remediation costs estimated.',
  ],
  deliverables: [
    { name: 'Technical Due Diligence Report', description: 'Comprehensive findings covering all assessment areas with risk ratings', value: 'Investment-grade findings ready for the deal team and investment committee' },
    { name: 'Platform Assessment Summary', description: 'Commerce platform capability and maturity assessment', value: 'Establishes what the platform can actually support at scale' },
    { name: 'Architecture Risk Analysis', description: 'Architectural risks rated by probability and investment impact', value: 'Names risks the data room and management presentations don\'t surface' },
    { name: 'Technical Debt Quantification', description: 'Technical debt inventory with remediation cost estimates by category', value: 'Turns engineering concerns into numbers that can be reflected in pricing' },
    { name: 'Scalability Ceiling Assessment', description: 'Maximum achievable scale under the current architecture', value: 'Tests whether the growth thesis is architecturally supportable' },
    { name: 'Integration Dependency Register', description: 'Third-party integrations, contracts, and switching costs cataloged', value: 'Surfaces forced migration costs and Year 1 timeline risk before they\'re discovered post-close' },
  ],
  duration:
    '2–3 weeks, compressed to deal timeline. Delivered confidentially and under NDA.',
  costBenefit:
    'Technical due diligence is most valuable — and most actionable — before exclusivity is signed. After ' +
    'exclusivity, the leverage to reprice based on findings is limited; technical interviews with the ' +
    'target\'s team are more open before the competitive process concludes, and independent reference ' +
    'checking is easier before the target is in a competitive close process. Commissioning this engagement ' +
    'as part of the initial diligence workstream, rather than as a late-stage check, is what preserves that ' +
    'leverage.',
};

export default function CS6Page(): ReactNode {
  return <OfferPage offer={offer} />;
}
