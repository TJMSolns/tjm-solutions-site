import type { ReactNode } from 'react';
import OfferPage, { type OfferPageData } from '@site/src/components/OfferPage';

const offer: OfferPageData = {
  id: 'CS-9',
  name: 'Commerce Platform Selection',
  category: 'Commerce Strategy',
  categoryHref: '/#commerce-strategy',
  slug: 'commerce-platform-selection',
  description:
    'A facilitated, evidence-based platform selection process that translates business requirements into ' +
    'a weighted evaluation framework, runs a disciplined vendor assessment against identical scenarios, and ' +
    'delivers a defensible recommendation before pricing pressure forces a rushed decision.',
  problemStatement:
    'Every platform vendor tells you they are the right choice, the demos are impressive, the reference ' +
    'customers were selected by the vendor, and the RFP was written by the IT team without capturing what ' +
    'the business actually needs. The selection process is structurally biased toward the best pitch: the ' +
    'vendor with the best sales team wins more evaluations than the vendor with the best platform, ' +
    'requirements aren\'t weighted so nice-to-haves score the same as strategic gaps, demos are rehearsed to ' +
    'show what the platform does well, and the selection committee isn\'t aligned on what it\'s actually ' +
    'selecting for. A platform decision made this way binds the organization for five to seven years.',
  valueProposition:
    'This engagement makes the requirements, not the pitch, the basis for decision. Requirements are ' +
    'documented and weighted before any vendor is engaged, every vendor responds to the same structured ' +
    'scenarios so the comparison is apples-to-apples, and the final recommendation is backed by documented ' +
    'criteria, consistent scoring, and independent reference checks — with implementation risks named before ' +
    'the decision rather than discovered after the contract is signed.',
  methodSummary: [
    'Requirements Distillation — business and technical requirements facilitated, prioritized, and converted into weighted evaluation criteria.',
    'Vendor Market Scan, RFI & Demo Facilitation — the vendor landscape scanned against the requirements profile; structured demo scripts run so every vendor responds to the same scenarios.',
    'Reference Checks & Recommendation Brief — independent references checked beyond vendor-provided lists, culminating in a board-ready recommendation with rationale and implementation risks.',
  ],
  deliverables: [
    { name: 'Requirements Document', description: 'Documented, prioritized, and weighted business and technical requirements', value: 'Sets the evaluation criteria before any vendor conversation begins' },
    { name: 'Vendor Market Scan', description: 'Shortlist rationale covering which platforms are in scope and why', value: 'Prevents the shortlist from being driven by whoever got a meeting first' },
    { name: 'RFI Template & Scoring', description: 'Structured RFI with a scoring model and results', value: 'Produces comparable, defensible scores instead of subjective impressions' },
    { name: 'Demo Facilitation Guide', description: 'Structured scenario scripts used identically with every vendor', value: 'Turns demo theater into an apples-to-apples comparison' },
    { name: 'Vendor Scorecard', description: 'Completed scoring across all evaluation dimensions', value: 'Gives the committee a shared, evidence-based view instead of competing opinions' },
    { name: 'Platform Recommendation Brief', description: 'Final recommendation with rationale and implementation risks', value: 'A board-ready decision record that can be defended and revisited later' },
  ],
  duration:
    '4–8 weeks depending on vendor shortlist size, delivered remote-first.',
  costBenefit:
    'Platform selection compressed under commercial pressure is the highest-risk version of the process: ' +
    'vendor pricing deadlines force decisions before the evaluation is complete, fiscal year commitments ' +
    'create urgency that advantages whichever vendor creates it, and implementation partner availability ' +
    'narrows the window as delay accumulates real cost. Structuring the process early creates the timeline ' +
    'buffer to make the decision well — a facilitated selection started eight weeks before the business ' +
    'needs to decide is a sound investment; the same process started two weeks before produces a rushed ' +
    'decision.',
};

export default function CS9Page(): ReactNode {
  return <OfferPage offer={offer} />;
}
