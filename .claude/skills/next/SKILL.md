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
5. When complete:
   - Verify evidence exists (file path or commit SHA)
   - Update `docs/agents/WORK-QUEUE.md`: move to Done with evidence
   - Write a HANDOFF-LEDGER entry (use the `/handoff` pattern)
6. Loop to next unblocked item.
7. Stop when queue is empty or all items are blocked.

Report between items: one line — item ID, what was done, what's next.
