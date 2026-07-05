import type { ReactNode } from 'react';
import OfferPage, { type OfferPageData } from '@site/src/components/OfferPage';

const offer: OfferPageData = {
  id: 'DT-3',
  name: 'Microservices Modernization Assessment',
  category: 'Digital Transformation',
  categoryHref: '/#digital-transformation',
  slug: 'microservices-modernization-assessment',
  imageUrl: '/img/digital-transformation.jpg',
  description:
    'An evaluation of where your organization actually is on the path from monolith to genuinely ' +
    'decomposed services — and a sequenced, evidence-based plan for closing the gap. We distinguish ' +
    'genuine service independence from distributed coupling, map team topology alignment, and identify ' +
    'the next meaningful steps that don\'t require rewriting everything at once.',
  problemStatement:
    'A CTO or VP Engineering at a mid-market or enterprise organization that has been "doing ' +
    'microservices" for two to four years — and is now dealing with all the operational complexity of a ' +
    'distributed system without the independence benefits they were promised. Services deploy together ' +
    'because the team is afraid to deploy them separately. API contracts were never formalized. The ' +
    'architecture called "microservices" is functionally a distributed monolith, and nobody has named it ' +
    'clearly.',
  valueProposition:
    'By assessing the current service architecture against decomposition principles — deployment ' +
    'independence, data ownership, API contract stability, team topology alignment — this engagement ' +
    'produces an honest picture of where the organization stands, and a sequenced next-steps plan that ' +
    'improves the architecture incrementally rather than proposing a rewrite.',
  methodSummary: [
    'Service Inventory & Dependency Mapping — all services cataloged with ownership, deployment frequency, and dependency documentation.',
    'Decomposition Analysis & Team Topology Review — each service boundary scored; coupling heat map produced; team ownership alignment reviewed.',
    'Remediation Path & Investment Rationale — for multi-domain environments, remediation paths and investment rationale developed and sequenced.',
  ],
  deliverables: [
    { name: 'Service Map', description: 'Inventory of all services with ownership, deployment frequency, and dependency documentation', value: 'Establishes the current state with specificity — most organizations don\'t have this documented' },
    { name: 'Decomposition Analysis', description: 'Scoring of each service boundary against deployment independence, data ownership, and contract stability', value: 'Names which services are genuinely decomposed vs. distributed monolith components' },
    { name: 'Coupling Heat Map', description: 'Structured representation of coupling density and type across the service landscape', value: 'Identifies the highest-leverage places to invest remediation effort' },
    { name: 'Team Topology Alignment Review', description: 'Assessment of whether team ownership supports or contradicts intended service boundaries', value: 'Surfaces the organizational dimension architecture diagrams don\'t show' },
    { name: 'Recommended Next Steps', description: 'Sequenced remediation plan with investment rationale per step', value: 'A path forward without a big-bang rewrite' },
  ],
  duration:
    '3–4 weeks. A single product domain with a moderate service count (under 20) and accessible ' +
    'documentation completes in 3 weeks. Multi-domain environments or legacy integration layers typically ' +
    'require 4 weeks.',
  costBenefit:
    'The cost of a distributed monolith is paid continuously: slow deployments, high coordination ' +
    'overhead, fragile releases, and an architecture that makes independent scaling impossible. Each new ' +
    'service added without addressing structural issues adds coupling surface — organizations that address ' +
    'decomposition while it is still tractable spend significantly less than those who wait.',
  credibility: {
    summary:
      'Grounded in Tony’s tenure as CTO of Professional Access, where he expanded the firm\'s practice ' +
      'into Magento, commercetools, and custom microservices for enterprise commerce clients.',
    links: [{ label: 'About Tony Moores', href: '/about' }],
  },
};

export default function DT3Page(): ReactNode {
  return <OfferPage offer={offer} />;
}
