import type { ReactNode } from 'react';
import OfferPage, { type OfferPageData } from '@site/src/components/OfferPage';

const offer: OfferPageData = {
  id: 'DT-6',
  name: 'Technical Roadmap & Business Alignment',
  category: 'Digital Transformation',
  categoryHref: '/#digital-transformation',
  slug: 'technical-roadmap-business-alignment',
  description:
    'A 3–5 week engagement that maps the current state of business-technology alignment, identifies where ' +
    'the business and engineering roadmaps conflict, and designs both the roadmap and the communication ' +
    'architecture needed to keep them aligned going forward.',
  problemStatement:
    'Engineering builds the roadmap it believes is right. Business sets the priorities it believes are ' +
    'right. In most organizations, these two planning processes happen in adjacent rooms and merge ' +
    'imperfectly, if at all. The result: engineering invests in infrastructure the business didn\'t know ' +
    'was a prerequisite, while business doesn\'t understand why features are slow; business commits to ' +
    'capabilities in market conversations that require many months of prerequisite work engineering hasn\'t ' +
    'started; roadmap reviews become surface-level nodding at the same slide without shared understanding ' +
    'of what it actually means; and technical debt stays invisible to the business until it produces a ' +
    'crisis rather than a planned investment.',
  valueProposition:
    'This engagement analyzes the business roadmap — commitments made, plans in progress, growth ' +
    'scenarios — alongside the technical roadmap — what is being built, what is deferred, and the ' +
    'dependency structure behind it — and maps precisely where the two conflict. From that conflict map, ' +
    'it designs an aligned roadmap that sequences technical investment to unlock business value at each ' +
    'phase, and a communication framework — templates, cadence, shared vocabulary — that keeps business and ' +
    'engineering aligned as the roadmap evolves, rather than requiring reconstruction after every ' +
    'divergence.',
  methodSummary: [
    'Business & Technical Roadmap Analysis — business commitments, growth scenarios, and current engineering plans documented, including assumptions and dependency structure.',
    'Conflict Mapping — the points where business goals require technical capability that isn\'t planned, and where technical plans don\'t deliver business value on the expected timeline, are identified explicitly.',
    'Alignment Roadmap Design & Communication Framework — a roadmap that sequences technical investment as business value enablers is produced, alongside the communication artifacts and cadence that keep both sides aligned going forward.',
  ],
  deliverables: [
    { name: 'Business-Tech Conflict Map', description: 'Explicit mapping of where current business and technical plans diverge and what the consequence is', value: 'Makes a previously invisible problem visible and specific' },
    { name: 'Aligned Roadmap', description: 'Technical investments sequenced to unlock business value at each phase, readable by both engineering and executive audiences', value: 'One roadmap both sides actually understand the same way' },
    { name: 'Technical Debt Business Case', description: 'Each deferred technical investment presented with its business consequence, in business language', value: 'Turns "tech debt" from an abstract engineering preference into a fundable business case' },
    { name: 'Communication Framework', description: 'Templates, cadences, and shared vocabulary for ongoing business-engineering alignment', value: 'Keeps alignment maintained as the roadmap evolves instead of rebuilt after each conflict' },
    { name: 'Roadmap Decision Framework', description: 'A structured way to evaluate trade-offs when the roadmap needs to change under business pressure', value: 'Gives both sides a shared method for handling the next roadmap disruption' },
  ],
  duration:
    '3–5 weeks. A single product line or business unit with accessible stakeholders completes in 3–4 ' +
    'weeks. Multiple business units or a more extensive dependency structure typically require the full 5 ' +
    'weeks.',
  costBenefit:
    'Roadmap misalignment is most expensive when it is discovered late — a business commitment made on a ' +
    'capability that is years of prerequisite work away, a competitor launching something the current ' +
    'roadmap doesn\'t address for a year and a half, or a platform migration deferred until it becomes a ' +
    'crisis rather than a planned investment. This engagement delivers the most value before major planning ' +
    'cycles, when the roadmap is still being set rather than after it has been committed to — though the ' +
    'second-best time is as soon as misalignment is already causing friction.',
};

export default function DT6Page(): ReactNode {
  return <OfferPage offer={offer} />;
}
