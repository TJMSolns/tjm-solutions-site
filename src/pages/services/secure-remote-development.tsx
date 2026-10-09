import type { ReactNode } from 'react';
import OfferPage, { type OfferPageData } from '@site/src/components/OfferPage';

const offer: OfferPageData = {
  id: 'DT-7',
  name: 'Secure Remote Development',
  category: 'Digital Transformation',
  categoryHref: '/#digital-transformation',
  slug: 'secure-remote-development',
  description:
    'A decision engagement for how external engineers — vendor agencies and independent BYOD contractors — ' +
    'get access to your source code and AI coding tools. We compare your current Virtual Desktop ' +
    'Infrastructure (VDI) against Cloud Development Environments (CDEs), where code, builds, and AI agent ' +
    'execution stay inside your cloud perimeter while the editor runs natively on the developer\'s machine. ' +
    'We model costs using your own numbers, design a target architecture that unifies identity, network ' +
    'perimeter, and AI governance, and optionally prove it with a pilot on one vendor team.',
  problemStatement:
    'A CISO, VP Engineering, or CIO whose engineering capacity depends heavily on vendors and contractors, ' +
    'and who protects proprietary code today by putting those people behind VDI. The VDI bill grows with ' +
    'every seat, onboarding a vendor engineer takes days, and vendor hours are billed while engineers fight ' +
    'typing lag. Now AI coding tools have arrived, and VDI handles them badly: inline completions are ' +
    'unusable over a streamed desktop, so contractors paste code into personal AI accounts in a side browser ' +
    'window. The perimeter that justified the VDI spend has a hole in it, and nobody has an inventory of ' +
    'which vendors are using which AI tools on which repositories.',
  valueProposition:
    'The engagement moves the security boundary from the contractor\'s screen to where code actually ' +
    'executes. Code, git history, builds, and AI agent runs stay in containers inside your cloud VPC; your ' +
    'git host accepts clone and push only from that VPC\'s egress IPs; AI traffic routes through a corporate ' +
    'gateway with zero-data-retention keys. The result is stronger containment than VDI, a governable path ' +
    'for AI, and developers working natively with zero UI latency — backed by a cost model built from your ' +
    'actual invoices, not industry averages.',
  methodSummary: [
    'Current-State Discovery — external workforce, device posture, and repository access inventoried; VDI estate and git host configuration reviewed; sanctioned and shadow AI usage surfaced.',
    'Threat Model & Cost Model — every code exfiltration and AI egress path mapped under current and target architectures; VDI vs. CDE total cost of ownership built from your billing data.',
    'Target Architecture & Governance Design — managed identities tied to your IdP, CDE control plane selection, egress IP allowlisting, AI gateway pattern, devcontainer standard, and a cohort-by-cohort migration roadmap.',
    'Pilot (optional) — one vendor team on one repository, with onboarding time, editor responsiveness, cost per developer-hour, and blocked exfiltration attempts measured.',
  ],
  deliverables: [
    { name: 'External Workforce & Code Access Inventory', description: 'Every vendor and contractor, their device posture, and what repositories they can reach and how', value: 'Answers "who can clone what, from where" — a question most organizations cannot answer today' },
    { name: 'Exfiltration & AI Egress Threat Model', description: 'Every path by which code can leave, under current and target architectures', value: 'Makes the control gap concrete, including the AI-shaped hole VDI leaves open' },
    { name: 'VDI vs. CDE Cost Model', description: 'Total cost of ownership built from your own invoices, scaled by headcount', value: 'A finance-defensible business case based on your numbers, not vendor marketing' },
    { name: 'Target Reference Architecture', description: 'Identity, CDE control plane, network perimeter, and AI gateway as one design', value: 'One coherent design rather than four separate tool purchases' },
    { name: 'AI Tooling Governance Policy', description: 'Company-provided vs. BYO AI rules, with contract language for vendor agreements', value: 'Converts shadow AI into governable AI, with enforceable vendor terms' },
    { name: 'Reference devcontainer & Enforcement Runbook', description: 'Environment baseline plus git host settings for identity, IP allowlisting, and fork/export blocking', value: 'Your platform team implements without starting from a blank page' },
    { name: 'Migration Roadmap', description: 'Cohort-by-cohort VDI retirement, sequenced by risk and cost', value: 'Exits VDI without a disruptive cut-over' },
  ],
  duration:
    '3 weeks for assessment and design; 6 weeks with the pilot. A single git host organization, one cloud ' +
    'provider, and fewer than 5 vendors completes design in 3 weeks. Multi-cloud estates, regulated code ' +
    '(PCI, HIPAA, export-controlled), or many vendors on differing contract terms typically add a week.',
  costBenefit:
    'VDI was purchased to keep code from leaving. AI tooling has quietly undone that — a contractor who ' +
    'cannot get inline completions inside a streamed desktop will paste the problem into a personal AI ' +
    'account in the next browser tab. You pay full VDI cost for a perimeter that no longer holds. AI adoption ' +
    'among external engineers is happening now, governed or not; VDI and vendor contract renewals are the ' +
    'natural decision points, and this engagement should land before the next one.',
};

export default function DT7Page(): ReactNode {
  return <OfferPage offer={offer} />;
}
