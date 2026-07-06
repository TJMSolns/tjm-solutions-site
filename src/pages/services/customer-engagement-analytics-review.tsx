import type { ReactNode } from 'react';
import OfferPage, { type OfferPageData } from '@site/src/components/OfferPage';

const offer: OfferPageData = {
  id: 'EE-7',
  name: 'Customer Engagement Analytics & Dashboard Review',
  category: 'Experience Engineering',
  categoryHref: '/#experience-engineering',
  slug: 'customer-engagement-analytics-review',
  description:
    'A structured engagement that maps the product and experience decisions your team makes every month ' +
    'to the metrics that would actually inform them, then assesses whether your current analytics and ' +
    'dashboards deliver those metrics — replacing anecdote-driven decisions with a defensible measurement ' +
    'framework.',
  problemStatement:
    'Most commerce teams make product and experience decisions every week, and the underlying problem ' +
    'usually isn\'t missing data — it\'s that the data doesn\'t map to the decisions being made. Dashboards ' +
    'measure activity like sessions, clicks, and click-through rate rather than outcomes like order intent, ' +
    'purchase progression, or retention. Metrics get defined by what the platform happens to expose rather ' +
    'than by what the business needs to know, teams argue about numbers because different tools count ' +
    'differently, and decisions end up made on gut or anecdote because the data that would settle the ' +
    'question was never tracked. The result is slower decisions, lower confidence, and investments in ' +
    'experiences that can\'t be measured.',
  valueProposition:
    'By inventorying the decisions the team actually makes each month, auditing current metrics and ' +
    'dashboards against those decisions, and designing an authoritative measurement framework with defined ' +
    'data sources, this engagement replaces platform-default reporting with a system built around what the ' +
    'business needs to know — and a prioritized roadmap for closing the gaps.',
  methodSummary: [
    'Decision Inventory & Metrics Audit — the 10–20 recurring product, experience, and campaign decisions the team makes each month are mapped to their measurement requirements, then compared against current KPI definitions and data coverage.',
    'Dashboard Review & Measurement Framework — existing reports and dashboards are assessed for decision-relevance and usability, and an authoritative measurement framework is designed with the right metric and tracking spec for each decision.',
    'Implementation Roadmap — gaps are prioritized by decision impact and implementation effort into an ordered backlog ready for engineering and analytics handoff.',
  ],
  deliverables: [
    { name: 'Decision Register', description: 'Complete inventory of recurring decisions mapped to metric requirements', value: 'Anchors the entire analytics program to decisions instead of platform defaults' },
    { name: 'Metrics Gap Analysis', description: 'Current KPIs assessed against decision requirements — what\'s useful, what\'s noise, what\'s missing', value: 'Separates signal from vanity metrics teams have been optimizing by mistake' },
    { name: 'Dashboard Assessment', description: 'Every existing report rated for decision-relevance and actionability', value: 'Identifies which dashboards drive decisions and which go unused' },
    { name: 'Measurement Framework', description: 'Authoritative metric definitions aligned to decisions, with tracking specifications', value: 'Ends arguments about counting by giving every metric one defined meaning' },
    { name: 'Implementation Roadmap', description: 'Prioritized backlog for closing the measurement gaps, sized for engineering effort', value: 'Turns the assessment directly into an actionable analytics backlog' },
  ],
  duration:
    '2–3 weeks, fixed scope, delivered through remote-first structured working sessions with written ' +
    'deliverables throughout.',
  costBenefit:
    'The cost of deferred measurement compounds: every product decision made without data either gets it ' +
    'right by luck or wrong without anyone knowing, teams keep optimizing metrics that don\'t move ' +
    'conversion, and questions like whether a personalization investment actually worked go unanswered ' +
    'because measurement wasn\'t designed in from the start. Once a measurement framework is established, ' +
    'the time-to-decision on every subsequent product question compresses — the sooner it exists, the ' +
    'sooner that improvement compounds.',
};

export default function EE7Page(): ReactNode {
  return <OfferPage offer={offer} />;
}
