---
name: next
description: Pick the next unblocked item from WORK-QUEUE and drive it to completion.
user-invocable: true
tools: Read, Write, Edit, Glob, Grep, Agent
---

Drive the WORK-QUEUE forward.

## Steps

1. Read `docs/agents/CONTEXT-KERNEL.md` — verify current phase and non-negotiables
2. Read `docs/agents/WORK-QUEUE.md` — identify the first item with status `queued` whose dependencies are all in Done
   - If nothing is unblocked, report the specific blockers and stop
3. Read `docs/agents/HANDOFF-LEDGER.md` (last 3 entries) for recent context
4. Execute the work item
4b. **Commit-hash evidence gate (BLOCKING — WQ-P4-104)** — if this item produced code changes (any source file, build script, Dockerfile, etc.):
   - The evidence written in step 5 MUST cite at least one commit hash
   - Every cited hash MUST exist: `git cat-file -e <hash> 2>/dev/null && echo OK || echo MISSING`
   - If any hash is MISSING, or the evidence has no hash for a code-producing item, do **not** mark done. Commit + push the missing work first, then re-write the evidence. (GATE-004; complements /handoff WQ-P4-103.)

5. When complete:
   - Verify evidence exists (file path or commit SHA)
   - **Evidence-artifact + independent-verifier gate (propagated from harness-evolution HE-006,
     DN-001/DN-002):** create `docs/agents/evidence/<ID>.md` with `Commit:`, `Run-count:`,
     `Invariance-recheck:`, `Verified-by:`, `Verifier-tier:`, and `Verifier-verdict:` filled in. Spawn
     the `verifier` agent (fresh context, tier drawn per DN-002's ±1 clamped/stake-weighted coin —
     never self-selected) and require its `PASS` before the Done edit; do not self-certify. A
     `PreToolUse` hook (`.claude/hooks/pretooluse-done-gate.py`) structurally blocks (exit 2) the
     WORK-QUEUE edit if this is missing, incomplete, or the verdict is VETO/ESCALATE. On ESCALATE: do
     not fix-and-retry, log to `docs/agents/ESCALATIONS.md` and stop for Tony instead.
   - Update `docs/agents/WORK-QUEUE.md`: move to Done with evidence
   - Write a HANDOFF-LEDGER entry (use the `/handoff` pattern)
6. **After writing the HANDOFF-LEDGER entry in step 5, stop.** Do not loop. Print:
   `✅ [WQ-ID] done — [one-line summary]. Re-invoke /next for the next item.`
   If the item produced more than 5 files, add: `⚠️  Context-heavy — run /compact first.` (DR-015)

Report when complete: one line — item ID, what was done.
