# WQ-050 — Recurring Docusaurus Maintenance Service: Assessment

**Type:** Spike output — research toward a go/no-go. No implementation.
**Date:** 2026-08-18
**Question (Tony, 2026-07-22):** "There are best practices related to publishing Docusaurus via GitHub.
If there are issues, I'm likely not the only one." Is a recurring monthly maintenance service a viable
packaged offer?

**Recommendation: No — not as a packaged TJM Solutions offer.** The demand is real and the failure
classes are real, but the market clears at roughly half TJM's hourly floor, and the work is a poor fit
for the practice's positioning. A narrower one-off diagnostic is defensible; the automation is worth
building for internal use regardless of the commercial answer. Reasoning below.

---

## 1. Is the problem real? Yes — and this site is unusually good evidence

WQ-050 proposed this site as the natural first case study. It is a better one than expected. In roughly
three months, on a single low-traffic site with an attentive owner and an unusually disciplined process,
**seven distinct failure classes** occurred, and *not one was noticed by a human before tooling or a
session surfaced it*:

| # | Failure | Duration undetected | Reference |
|---|---------|--------------------|-----------|
| 1 | Branch-push deploy failed **silently** — no diagnostic anywhere | ~1 month | WQ-038 |
| 2 | Link-check job raced the deploy and 404'd on a mid-publish site | recurring | WQ-038 |
| 3 | CI permanently red from external-host 403s, masking real breakage | 1+ month | WQ-054 |
| 4 | Accessibility gate covered 4 of 74 pages (5%), light theme only | since inception | WQ-051 |
| 5 | A **live** WCAG2AA violation on production, structurally unreachable by that gate | unknown | WQ-056 |
| 6 | Medium parity drift — 3 articles missing, 1 invisible to the sitemap | ~4 weeks | WQ-027 |
| 7 | `npm run typecheck` broken at HEAD | ~1 month | WQ-046 |

The unifying property is **silence**. Every one of these failed in a way that produced no signal a
human would see. Nothing was on fire; the site looked fine. That is the genuine insight here, and it is
a stronger pitch than "we keep your dependencies current" — which is what the market currently sells.

Independent confirmation that the burden is not unique to this site: [Ferndesk's
analysis](https://ferndesk.com/blog/docusaurus-pricing) puts ongoing Docusaurus maintenance at
2–10 hours/month, i.e. $400–1,100/month in labour at startup engineering rates, and $1,500–3,000/month
for enterprise deployments. That source sells a competing product and so is motivated to inflate the
number, but the direction is corroborated by this site's own history.

## 2. Is the market open? No — it is occupied and priced below TJM's floor

[TechDocs Studio](https://techdocs.studio/services/docusaurus-maintenance) already sells precisely this
offer, with a mature packaging:

| Tier | Price | Scope |
|------|-------|-------|
| Single Site | **$350/mo** | up to 3 hrs/mo, monthly dependency updates, priority email |
| Docs Ops | **$1,500–4,000/mo** | major-version upgrades, drift detection, multi-site, build health |
| Enterprise | custom | SLAs, multilingual portals, retained hours |
| Extra site | $240/mo | — |
| Custom dev | **$110/hr** | — |

Set against TJM's published rates (`/rates`: $250–400/hr, $1,800–2,200/day, retainers $3,000 / $8,000 /
$25,000):

- The incumbent's custom-development rate, **$110/hr, is well under half TJM's $250/hr floor.**
- The incumbent's entry tier implies about **$117/hr effective** ($350 ÷ 3 hrs) — under half again.
- **TJM's smallest retainer ($3,000/mo) is double the incumbent's mid-tier entry point ($1,500/mo).**

There is no version of this where TJM competes on price, and the buyer for a $350/month docs-maintenance
plan is not a buyer who is price-insensitive. Winning would require either discounting below the
practice's floor — which damages the rate card that `/rates` publishes precisely so clients can
self-qualify — or persuading buyers that the same nominal service is worth 3–10x more.

## 3. Could differentiation close that gap? Partly, but not enough

The honest differentiator is not upkeep. It is **detection of silent failure**, evidenced by the seven
classes above and by the fact that a disciplined process missed all seven. Incumbent packaging leads
with upgrades and dependency management — the visible, commoditised half. Nobody in the surveyed market
leads with "your deploys have been failing for a month and you don't know."

Two problems with monetising that:

1. **It is a diagnostic insight, not a recurring one.** The failures are found by *instrumenting the
   site properly once*. After that, the monthly work reverts to exactly the commodity upkeep the
   incumbent sells at $110/hr. The differentiated value is front-loaded; the recurring revenue is not.
2. **It is hard to sell before it is demonstrated.** The pitch is "you have problems you cannot see,"
   which is unfalsifiable to the buyer until the audit runs. That is a high-friction sale for a
   $350–1,500/month product, and the sales effort does not scale down to that price point.

Docusaurus's own release history also argues against sustained upgrade revenue: the genuinely painful
migration was [v2 → v3](https://docusaurus.io/docs/migration/v3), driven by MDX v1 → v3, and that is
behind most sites. Docusaurus's guidance is that "the simplest sites will eventually upgrade by simply
updating their npm dependencies," and the 3.x minors bear that out — this site's 3.9.2 → 3.10.2 is a
routine bump with no Node-engine change. The recurring upgrade burden is thinner than the pitch needs.

## 4. Fit with the practice

Set the economics aside for a moment; the positioning problem is independent and arguably worse. TJM
Solutions is presented — on `/about`, on `/rates`, across 22 offers — as architecture, engineering, and
advisory at CTO level. A $350/month website-upkeep subscription is a different business: different
buyer (docs lead or marketing, not a CTO), different sales motion (self-serve, high volume), different
delivery (scheduled low-skill maintenance), and different economics (thin margin, needs many accounts).

Adding it would blur the thing the recent `/about` split was done to sharpen: a firm that sells
judgement, and a principal whose time is expensive. It also creates an operational liability — a
retainer implies responsiveness, and responsiveness competes with the deep engagements that carry the
practice.

## 5. What I would do instead

- **Do not package the recurring service.** The market is occupied at half the price by specialists
  whose cost structure suits it.
- **Consider a one-off diagnostic instead**, if anything: a fixed-price *Documentation Site Health
  Audit* — deploy-pipeline reliability, accessibility coverage against real page counts, link integrity,
  content-parity drift, dependency and upgrade posture — delivered as a report with prioritised
  findings. It sells the differentiated half (detection), fits the existing assessment-shaped offer
  catalogue, prices at day rates rather than subscription rates, and creates no ongoing obligation. It
  would slot beside the existing `/services/*` assessments rather than beside anything new.
- **Build the automation regardless.** Every check that would have caught the seven failures is useful
  to this site on its own merits, and several are already queued: WQ-051 (accessibility coverage,
  strategy now decided in POL-003), WQ-054 (link check, fixed), WQ-027's parity check (procedure
  proven this session — note the Medium *sitemap* omitted a three-week-old article, so any
  sitemap-only checker is unsound; RSS is the reliable index). If the audit offer is ever pursued, the
  tooling already exists as a by-product.

## 6. Honest limitations of this assessment

- Demand evidence is **one competitor's pricing page and one vendor blog post**, plus this site's own
  history. There is no survey, no buyer interviews, and no pipeline signal. A competitor existing
  proves a market is served, not that it is large or profitable.
- Ferndesk's cost figures come from a source selling a Docusaurus alternative, and are treated here as
  directional only.
- No attempt was made to size the market or estimate acquisition cost. If Tony wants to overturn this
  recommendation, buyer interviews are the missing input — not more desk research.
- The recommendation is about **fit with TJM Solutions specifically**. The same offer could be a good
  business for someone with a lower cost base.

## Sources

- [TechDocs Studio — Docusaurus maintenance service](https://techdocs.studio/services/docusaurus-maintenance)
- [Ferndesk — Docusaurus pricing analysis](https://ferndesk.com/blog/docusaurus-pricing)
- [Ferndesk — Docusaurus review](https://ferndesk.com/blog/docusaurus-review)
- [Docusaurus — Upgrading to v3](https://docusaurus.io/docs/migration/v3)
- [Docusaurus — Upgrading Docusaurus](https://docusaurus.io/docs/migration)
- [Announcing Docusaurus 3.0](https://docusaurus.io/blog/releases/3.0)
