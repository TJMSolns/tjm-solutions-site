# tjm-solutions-site — Escalations Log (E4 / DN-004, propagated from harness-evolution HE-006)

Append-only, mirrors HANDOFF-LEDGER's convention. Each entry records a `verifier` agent's `ESCALATE`
verdict — genuinely context-dependent uncertainty the verifier could not resolve on the artifact's
merits alone. New entries at the top, headed `## ESC-<NNN> — <date> — <item ID>`.

**Every entry MUST have a `**Status:**` field with value `open` or `resolved` — this is the ONLY field
`.claude/hooks/count-escalations.py` counts on.** Do not rely on the presence/absence of a `Resolved:`
note for counting — free-text mentions of resolution status in an entry's own prose are NOT parsed and
will not affect the open count (a real bug the second independent-verifier VETO on HE-004 caught: a
naive whole-file grep both matched this file's own template example below and could be fooled by a
`**Resolved:**`-looking line that wasn't the real status field). `Status:` is the single, unambiguous
source of truth. Update it in place when Tony answers — do not just add a `Resolved:` note.

No auto-triage: every escalation is surfaced, none are pre-filtered by assumed urgency (DN-004 scope
guard — auto-triage is explicitly deferred to a later research parcel, not built speculatively here).

Entry template (this block is fenced and stripped by the counter before parsing — it will never be
mistaken for a real entry, even though it contains example `## ESC-`/`**Status:**` lines):
```markdown
## ESC-<NNN> — <date> — <item ID>

**Status:** open
**Verifier tier:** <tier>
**Question for Tony:** <the exact ESCALATE reason text>
**Evidence artifact:** docs/agents/evidence/<ID>.md
**Resolved:** <date> — <how, once answered — free text, NOT parsed for counting; also flip Status to `resolved`>

---
```

---

## ESC-001 — 2026-07-05 — WQ-031 / WQ-009 / WQ-005 / WQ-006 / WQ-007 / WQ-003 (infra, not a verifier ESCALATE)

**Status:** open
**Verifier tier:** N/A — the `verifier` subagent could not be spawned at all in this session
**Question for Tony:** This session (executing the WQ-031 → WQ-009 → WQ-005/006/007 → WQ-003 → deploy
chain per your direction) attempted to spawn the `verifier` agent per `.claude/agents/verifier.md` /
`draw-verifier-tier.py` for the first item (WQ-031). The `Agent` tool call failed with
`Agent type 'verifier' not found. Available agents: claude, claude-code-guide, Explore,
general-purpose, Plan, statusline-setup` — tried at two different drawn tiers (opus, then a manual
sonnet test) with the identical error both times, confirming this is NOT the DN-007
model-tier-unavailable case (which `draw-verifier-tier.py`'s exclude-and-redraw mechanism is designed
to handle) — it is that the custom `subagent_type: "verifier"` registration itself is not loaded in
this session's environment, regardless of requested model. This session appears to be a sub-agent
spawned by a parent orchestrator without custom `.claude/agents/*.md` definitions available to it (the
"Available agents" list was static and identical before any project file was even read). I could not
find a documented remedy for this failure mode (as opposed to tier-unavailability) — DN-007's redraw
only changes the model tier argument, which does not address a missing agent-type registration. Per
DN-004 ("do not fix-and-retry; escalate instead"), I am stopping the Done-transition workflow rather
than inventing a workaround (self-certifying, hand-writing a PASS, or bypassing/disabling
`pretooluse-done-gate.py`). **Question for Tony:** how should sessions in this kind of restricted
sub-agent environment satisfy the verifier gate — e.g., should the gate accept a documented
infra-unavailability carve-out (analogous to `GIT-DURABILITY-DEFER.md`), should this session be re-run
from a top-level session where custom agents are registered, or is there a different invocation path
for `subagent_type: "verifier"` I'm missing?
**Evidence artifact:** `docs/agents/evidence/WQ-031.md` (Verifier-verdict left as `PENDING` — no fabricated
PASS/VETO written)
**Resolved:**

**Observation (2026-07-06, HL-008, not a resolution):** In a later session (executing WQ-036),
`subagent_type: "verifier"` spawned successfully — first as a synchronous `Agent` call (which returned a
real PASS but was *not* corroborated by `pretooluse-done-gate.py`'s DN-006 transcript check, since
synchronous calls don't produce the `<task-notification>` block the gate parses), then as a background
`Agent` call with the same `subagent_type`/`model`, which *did* corroborate and unblocked the Done
transition for WQ-036. This suggests the agent-type-registration gap ESC-001 describes may be
session/environment-specific rather than universal, and that dispatching the verifier as a background
call (not synchronous) is required either way for DN-006 corroboration. Still logged as **open** — this
does not confirm the gap is fixed everywhere, only that it didn't reproduce here. Tony may want to use
this session's pattern to retry the Done-transition for the 13 items still blocked on ESC-001
(WQ-031/009/005/006/007/003/038/039/040/041/042/043/044).

---
