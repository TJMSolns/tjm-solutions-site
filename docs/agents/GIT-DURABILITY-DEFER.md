# Git-Durability Gate — Deferred Debt (tjm-solutions-site)

Explicit, expiring carve-out for `.claude/hooks/stop-git-durability-gate.py` (DN-003/E3, extended
DN-005, propagated from harness-evolution HE-006). Add entries here only on explicit human direction —
never unilaterally by an agent excusing its own current work. See
`docs/templates/GIT-DURABILITY-DEFER-template.md` in harness-evolution for the format this file follows.

## DEFER-001 — 2026-07-04 — pre-existing 1 uncommitted file + 2 unpushed commits

**Scope:** none (RESOLVED 2026-07-16 — debt cleared, defers nothing)
**Expires:** 2026-07-16 (closed early — the condition ended)
**Reason:** Pre-existing backlog at HE-006 propagation time: 1 uncommitted file, 2 commits ahead of
`origin/main`. Predates rails propagation and is not caused by it. Tony's explicit direction
(harness-evolution session, 2026-07-04): propagate the rails to all active projects now, treat
existing backlogs as real recurrence data per-project rather than resolving each one first.

---


## RESOLVED 2026-07-16

The backlog every entry above deferred has been committed and pushed; working tree clean, nothing ahead of upstream. Contents verified before commit: documentation only, no secrets (key-shaped scan hits were prose — value-object/domain-event names, a `GRAFANA_API_KEY=<your-api-key>` placeholder, a CI/CD checklist line). `__pycache__` gitignored, never committed.

Closed because the debt is gone, not because a date passed. The expiries here were artifacts of rails propagation surfacing pre-existing debt — a promise to deal with it, repeatedly renewed instead of kept. Resolved rather than re-dated.
