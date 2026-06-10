# tjm-solutions-site — Lessons Learned

---

## LL-003 — 2026-05-18 — LESSONS-LEARNED.md must exist before harvest candidates can close the loop

**Finding:** WQ-018 and WQ-019 were queued from retro-generated patterns (per-article head block, swizzle ban formalization) but LESSONS-LEARNED.md did not exist — so there was no file to write the LL entries to. Harvest candidates captured in HANDOFF-LEDGER entries (HL-002, HL-004) had no durable home. This is a chicken-and-egg problem: the file must be created when the first harvest candidate is identified, not after the first retro.
**Scope:** tjm-solutions-site
**Action taken:** This file. WQ-018 (harvest Docusaurus patterns into LESSONS-LEARNED) now has a target file to write to.

---

## LL-002 — 2026-05-18 — Decisions need formal records, not just CONTEXT-KERNEL mentions

**Finding:** Two full sessions of substantive decisions (swizzle approach, tag taxonomy, canonical strategy, rate card structure) were made without a single DECISION-REGISTER entry. The DECISION-REGISTER table was explicitly noted as "still empty" at HL-002. Without formal records, decisions can't be cited, amended, or referenced by future sessions — they only exist in conversation history.
**Scope:** tjm-solutions-site
**Action taken:** Informational — practice corrected by WQ-020 (formalize quality gates as POL-002). Ongoing: any decision that blocks or enables work should be recorded in DECISION-REGISTER at the session it is made.

---

## LL-001 — 2026-05-18 — Informal CONTEXT-KERNEL restrictions block work without a resolution path

**Finding:** The Docusaurus swizzle ban lived only in CONTEXT-KERNEL prose. When WQ-014 (og:type + JSON-LD) was proposed, the natural implementation (BlogPostPage swizzle) was blocked — but there was no ADR to amend, no formal artifact to override, and no documented rationale. Resolution required Tony to make a governance decision mid-implementation. One full session was lost. Pattern: CONTEXT-KERNEL non-negotiables must have a corresponding POL or ADR before they can block work.
**Scope:** tjm-solutions-site
**Action taken:** WQ-019 queued (write POL-001 formalizing the swizzle restriction with rationale). The per-article head-injection pattern is the documented alternative.

---
