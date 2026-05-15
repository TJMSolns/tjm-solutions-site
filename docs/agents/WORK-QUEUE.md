# tjm-solutions-site — Work Queue

---

## Active

| ID | Item | Owner | Status | Depends On |
|----|------|-------|--------|-----------|
| WQ-004 | SEO improvements: meta tags, page titles, structured data, blog post SEO | Tony + Claude | Queued | — |
| WQ-005 | Enhance Commerce Strategy card: list ≥3 battle-tested CS offers with links | Claude | Queued | ≥3 CS offers battle-tested (org WQ-P4-011 pattern) |
| WQ-006 | Enhance Digital Transformation card: list ≥3 battle-tested DT offers with links | Claude | Queued | DT-2 battle-tested (org WQ-P4-011) |
| WQ-007 | Enhance Experience Engineering card: list ≥3 battle-tested EE offers with links | Claude | Queued | ≥3 EE offers battle-tested (org WQ-P4-011 pattern) |
| WQ-003 | Remove workshops card from homepage | Claude | Queued | WQ-005, WQ-006, WQ-007 (each card must have ≥3 offers listed) |
| WQ-001 | Fill in 4 stub pre-2026 articles (add content + truncate markers) | Tony | Queued | — |
| WQ-002 | Complete remaining parts of FP series | Tony | Queued | — |
| WQ-008 | Install GitHub App on repo | Tony | Queued | — |

---

## Done

| ID | Item | Evidence |
|----|------|---------|
| WQ-000 | Apply org rails (skills, hooks, docs/agents/, settings.json) | `tjm-solutions-site/.claude/` — HL-001 |

---

## Notes

- WQ-004 is unblocked — SEO work can proceed immediately
- WQ-005–007 are blocked on ≥3 battle-tested offers per card (PDR-001 gate)
- WQ-003 (remove workshops card) depends on WQ-005/006/007 — 4 cards stay until 3 cards each have ≥3 offers
- DT-2 (KB offer) is the first to be battle-tested via org WQ-P4-011; it gates the pattern for CS and EE cards
- Each card enhancement should link to individual offer detail pages (to be created when offers reach Level 1)
