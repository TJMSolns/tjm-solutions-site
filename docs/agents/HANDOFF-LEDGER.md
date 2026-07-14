# tjm-solutions-site — Handoff Ledger

Append-only. New entries at the top.

---

## HL-031 — 2026-07-14 — No unblocked item — 24th consecutive session, post-GL-030

**Session:** Claude (autonomous single-item run) — read `CLAUDE.md`, `CONTEXT-KERNEL.md`,
`WORK-QUEUE.md`, and the last 3 HANDOFF-LEDGER entries (HL-030/029/028) per session orientation. Scanned
the full Active table for a genuinely unblocked, Claude-executable item (Owner ≠ Tony, Depends On all
Done, no judgment call implied).

**What happened:**

- No execution this session — independently re-verified rather than trusted HL-030's diagnosis:
  confirmed `git status --short` clean and `HEAD` at HL-030's own commit `97ed853` (repo untouched since
  last session — zero drift, so no new information exists that could change the diagnosis); re-checked
  the three GL-030-sequenced candidates directly rather than citing prior notes:
  - **WQ-032** (GL-030 Sequence 1 of 3) — re-ran `git -C /home/tjm/TJMSolns/Projects rev-parse
    --show-toplevel`: still `fatal: not a git repository`. The target artifact
    (`claude-code-methodology.md`) still sits outside this repo's git history — a write there still
    produces no commit hash this repo's Done-transition discipline can point to. Still a Tony-judgment
    item (re-home outside this repo or accept the gap), not a clean pick — 19th consecutive session
    (HL-012–HL-031) with this identical finding.
  - **WQ-016** (GL-030 Sequence 2 of 3) — re-confirmed `src/pages/services/kcs-knowledge-base.tsx` still
    exists on disk with no credibility section (`grep -l credibility src/pages/services/*.tsx` matches
    only `ai-adoption-roadmap.tsx`, none of the other 21 pages including this one). GL-030 already
    dispatched a real `verifier` (opus tier) against this exact item on the merits and got VETO (see
    `docs/agents/evidence/WQ-016.md`) — reconciliation is Tony's call per proposed item WQ-045. Not a
    fresh pick; already adjudicated, correctly left Active.
  - **WQ-030** — still explicit "Tony: skip for now" (2026-07-05), unchanged.
  - Remaining exclusions unchanged: 13 items (WQ-031/005/006/007/009/003/038/039/040/041/042/043/044)
    "Implementation complete — Done-transition blocked (ESC-001)"; WQ-002 Owner Tony; WQ-022 dependency-
    blocked (Medium publication); WQ-025 still Proposed; WQ-045 Proposed + Owner Tony+Claude.
  - Also re-checked `docs/agents/ESCALATIONS.md`: ESC-001 still the only entry, `Status: open`, unchanged.
  - Result: zero items meet "unblocked + Claude-executable + no judgment call" — 24th consecutive session
    (HL-008 through HL-031) with this exact diagnosis.
- Working tree was clean at session start and remains clean except for this ledger entry.

**Decisions made:** none

**CONTEXT-KERNEL change:** none — file not touched this session (`git diff HEAD -- docs/agents/CONTEXT-KERNEL.md` empty).

**Harvest candidates:** none new — same diagnosis as 19 consecutive prior sessions, no new lesson to
generalize.

**Open items carried forward:**
- ESC-001 (open) — still needs Tony's direction; 24th consecutive session with no `verifier` spawn issue
  logged as a data point, still not itself sufficient to resolve it (Tony's call).
- 13 items still "Implementation complete — Done-transition blocked (ESC-001)" — unchanged.
- WQ-032 — still needs Tony's call on re-homing the target artifact outside this repo's git history.
- WQ-016 / WQ-045 — still needs Tony's PDR-008-vs-WQ-042 reconciliation call.
- WQ-030 — still explicitly Tony-held.

**Next owner:** Tony — the Claude-executable, no-judgment lane is empty for the 24th consecutive session.
The same three decisions would unblock further autonomous `/next` progress: (1) how WQ-032 should handle
writing to a target outside this repo's git history; (2) WQ-045's PDR-008-vs-WQ-042 reconciliation; (3)
whether/how to resolve ESC-001 for the 13 stuck Done-transitions.

---

## HL-030 — 2026-07-14 — No unblocked item — 23rd consecutive session, post-GL-030

**Session:** Claude (autonomous single-item run) — read `CLAUDE.md`, `CONTEXT-KERNEL.md`,
`WORK-QUEUE.md`, and the last 3 HANDOFF-LEDGER entries (HL-029/028/027) per session orientation. Scanned
the full Active table for a genuinely unblocked, Claude-executable item (Owner ≠ Tony, Depends On all
Done, no judgment call implied).

**What happened:**

- No execution this session — independently re-verified rather than trusted HL-029's diagnosis:
  confirmed `git status --short` clean and `HEAD` at HL-029's own commit `001cac6` (repo untouched since
  last session — zero drift, so no new information exists that could change the diagnosis); re-checked
  the three GL-030-sequenced candidates directly rather than citing prior notes:
  - **WQ-032** (GL-030 Sequence 1 of 3) — re-ran `git rev-parse --show-toplevel` from
    `/home/tjm/TJMSolns/Projects/`: still `fatal: not a git repository`. The target artifact
    (`claude-code-methodology.md`, confirmed present on disk at 151601 bytes) still sits outside this
    repo's git history — a write there still produces no commit hash this repo's Done-transition
    discipline can point to. Still a Tony-judgment item (re-home outside this repo or accept the gap),
    not a clean pick — 18th consecutive session (HL-012–HL-030) with this identical finding.
  - **WQ-016** (GL-030 Sequence 2 of 3) — re-confirmed `src/pages/services/kcs-knowledge-base.tsx` still
    exists on disk with no credibility section. GL-030 already dispatched a real `verifier` (opus tier)
    against this exact item on the merits and got VETO (see `docs/agents/evidence/WQ-016.md`) —
    reconciliation is Tony's call per proposed item WQ-045. Not a fresh pick; already adjudicated,
    correctly left Active.
  - **WQ-030** — still explicit "Tony: skip for now" (2026-07-05), unchanged.
  - Remaining exclusions unchanged: 13 items (WQ-031/005/006/007/009/003/038/039/040/041/042/043/044)
    "Implementation complete — Done-transition blocked (ESC-001)"; WQ-002 Owner Tony; WQ-022 dependency-
    blocked (Medium publication); WQ-025 still Proposed; WQ-045 Proposed + Owner Tony+Claude.
  - Also re-checked `docs/agents/ESCALATIONS.md`: ESC-001 still the only entry, `Status: open`, unchanged.
  - Result: zero items meet "unblocked + Claude-executable + no judgment call" — 23rd consecutive session
    (HL-008 through HL-030) with this exact diagnosis.
- Working tree was clean at session start and remains clean except for this ledger entry.

**Decisions made:** none

**CONTEXT-KERNEL change:** none — file not touched this session (`git diff HEAD -- docs/agents/CONTEXT-KERNEL.md` empty).

**Harvest candidates:** none new — same diagnosis as 18 consecutive prior sessions, no new lesson to
generalize.

**Open items carried forward:**
- ESC-001 (open) — still needs Tony's direction; 23rd consecutive session with no `verifier` spawn issue
  logged as a data point, still not itself sufficient to resolve it (Tony's call).
- 13 items still "Implementation complete — Done-transition blocked (ESC-001)" — unchanged.
- WQ-032 — still needs Tony's call on re-homing the target artifact outside this repo's git history.
- WQ-016 / WQ-045 — still needs Tony's PDR-008-vs-WQ-042 reconciliation call.
- WQ-030 — still explicitly Tony-held.

**Next owner:** Tony — the Claude-executable, no-judgment lane is empty for the 23rd consecutive session.
The same three decisions would unblock further autonomous `/next` progress: (1) how WQ-032 should handle
writing to a target outside this repo's git history; (2) WQ-045's PDR-008-vs-WQ-042 reconciliation; (3)
whether/how to resolve ESC-001 for the 13 stuck Done-transitions.

---

## HL-029 — 2026-07-13 — No unblocked item — 22nd consecutive session, post-GL-030

**Session:** Claude (autonomous single-item run) — read `CLAUDE.md`, `CONTEXT-KERNEL.md`,
`WORK-QUEUE.md`, and the last 3 HANDOFF-LEDGER entries (HL-028/027/026) per session orientation. Scanned
the full Active table for a genuinely unblocked, Claude-executable item (Owner ≠ Tony, Depends On all
Done, no judgment call implied).

**What happened:**

- No execution this session — independently re-verified rather than trusted HL-028's diagnosis:
  confirmed `git status --short` clean and `HEAD` at HL-028's own commit `2486170` (repo untouched since
  last session — zero drift, so no new information exists that could change the diagnosis); re-checked
  the three GL-030-sequenced candidates directly rather than citing prior notes:
  - **WQ-032** (GL-030 Sequence 1 of 3) — re-ran `git rev-parse --show-toplevel` from
    `/home/tjm/TJMSolns/Projects/`: still `fatal: not a git repository`. The target artifact
    (`claude-code-methodology.md`) still sits outside this repo's git history — a write there still
    produces no commit hash this repo's Done-transition discipline can point to. Still a Tony-judgment
    item (re-home outside this repo or accept the gap), not a clean pick — 17th consecutive session
    (HL-012–HL-029) with this identical finding.
  - **WQ-016** (GL-030 Sequence 2 of 3) — re-confirmed `src/pages/services/kcs-knowledge-base.tsx` still
    exists on disk with no credibility section (`grep -l credibility src/pages/services/*.tsx` matches
    only `ai-adoption-roadmap.tsx`, none of the other 21 pages including this one). GL-030 already
    dispatched a real `verifier` (opus tier) against this exact item on the merits and got VETO (see
    `docs/agents/evidence/WQ-016.md`) — reconciliation is Tony's call per proposed item WQ-045. Not a
    fresh pick; already adjudicated, correctly left Active.
  - **WQ-030** — still explicit "Tony: skip for now" (2026-07-05), unchanged.
  - Remaining exclusions unchanged: 13 items (WQ-031/005/006/007/009/003/038/039/040/041/042/043/044)
    "Implementation complete — Done-transition blocked (ESC-001)"; WQ-002 Owner Tony; WQ-022 dependency-
    blocked (Medium publication); WQ-025 still Proposed; WQ-045 Proposed + Owner Tony+Claude.
  - Also re-checked `docs/agents/ESCALATIONS.md`: ESC-001 still the only entry, `Status: open`, unchanged.
  - Result: zero items meet "unblocked + Claude-executable + no judgment call" — 22nd consecutive session
    (HL-008 through HL-029) with this exact diagnosis.
- Working tree was clean at session start and remains clean except for this ledger entry.

**Decisions made:** none

**CONTEXT-KERNEL change:** none — file not touched this session (`git diff HEAD -- docs/agents/CONTEXT-KERNEL.md` empty).

**Harvest candidates:** none new — same diagnosis as 17 consecutive prior sessions, no new lesson to
generalize.

**Open items carried forward:**
- ESC-001 (open) — still needs Tony's direction; 22nd consecutive session with no `verifier` spawn issue
  logged as a data point, still not itself sufficient to resolve it (Tony's call).
- 13 items still "Implementation complete — Done-transition blocked (ESC-001)" — unchanged.
- WQ-032 — still needs Tony's call on re-homing the target artifact outside this repo's git history.
- WQ-016 / WQ-045 — still needs Tony's PDR-008-vs-WQ-042 reconciliation call.
- WQ-030 — still explicitly Tony-held.

**Next owner:** Tony — the Claude-executable, no-judgment lane is empty for the 22nd consecutive session.
The same three decisions would unblock further autonomous `/next` progress: (1) how WQ-032 should handle
writing to a target outside this repo's git history; (2) WQ-045's PDR-008-vs-WQ-042 reconciliation; (3)
whether/how to resolve ESC-001 for the 13 stuck Done-transitions.

---

## HL-028 — 2026-07-13 — No unblocked item — 21st consecutive session, post-GL-030

**Session:** Claude (autonomous single-item run) — read `CLAUDE.md`, `CONTEXT-KERNEL.md`,
`WORK-QUEUE.md`, and the last 3 HANDOFF-LEDGER entries (HL-027/026/025) per session orientation. Scanned
the full Active table for a genuinely unblocked, Claude-executable item (Owner ≠ Tony, Depends On all
Done, no judgment call implied).

**What happened:**

- No execution this session — independently re-verified rather than trusted HL-027's diagnosis:
  confirmed `git status --short` clean and `HEAD` at HL-027's own commit `e12c419` (repo untouched since
  last session — zero drift, so no new information exists that could change the diagnosis); re-checked
  the three GL-030-sequenced candidates directly rather than citing prior notes:
  - **WQ-032** (GL-030 Sequence 1 of 3) — re-ran `git rev-parse --show-toplevel` from
    `/home/tjm/TJMSolns/Projects/`: still `fatal: not a git repository`. The target artifact
    (`claude-code-methodology.md`) still sits outside this repo's git history — a write there still
    produces no commit hash this repo's Done-transition discipline can point to. Still a Tony-judgment
    item (re-home outside this repo or accept the gap), not a clean pick — 16th consecutive session
    (HL-012–HL-028) with this identical finding.
  - **WQ-016** (GL-030 Sequence 2 of 3) — re-confirmed `src/pages/services/kcs-knowledge-base.tsx` still
    exists on disk with no credibility section (`grep -l credibility src/pages/services/*.tsx` matches
    only `ai-adoption-roadmap.tsx`, none of the other 21 pages including this one). GL-030 already
    dispatched a real `verifier` (opus tier) against this exact item on the merits and got VETO (see
    `docs/agents/evidence/WQ-016.md`) — reconciliation is Tony's call per proposed item WQ-045. Not a
    fresh pick; already adjudicated, correctly left Active.
  - **WQ-030** — still explicit "Tony: skip for now" (2026-07-05), unchanged.
  - Remaining exclusions unchanged: 13 items (WQ-031/005/006/007/009/003/038/039/040/041/042/043/044)
    "Implementation complete — Done-transition blocked (ESC-001)"; WQ-002 Owner Tony; WQ-022 dependency-
    blocked (Medium publication); WQ-025 still Proposed; WQ-045 Proposed + Owner Tony+Claude.
  - Also re-checked `docs/agents/ESCALATIONS.md`: ESC-001 still the only entry, `Status: open`, unchanged.
  - Result: zero items meet "unblocked + Claude-executable + no judgment call" — 21st consecutive session
    (HL-008 through HL-028) with this exact diagnosis.
- Working tree was clean at session start and remains clean except for this ledger entry.

**Decisions made:** none

**CONTEXT-KERNEL change:** none — file not touched this session (`git diff HEAD -- docs/agents/CONTEXT-KERNEL.md` empty).

**Harvest candidates:** none new — same diagnosis as 16 consecutive prior sessions, no new lesson to
generalize.

**Open items carried forward:**
- ESC-001 (open) — still needs Tony's direction; 21st consecutive session with no `verifier` spawn issue
  logged as a data point, still not itself sufficient to resolve it (Tony's call).
- 13 items still "Implementation complete — Done-transition blocked (ESC-001)" — unchanged.
- WQ-032 — still needs Tony's call on re-homing the target artifact outside this repo's git history.
- WQ-016 / WQ-045 — still needs Tony's PDR-008-vs-WQ-042 reconciliation call.
- WQ-030 — still explicitly Tony-held.

**Next owner:** Tony — the Claude-executable, no-judgment lane is empty for the 21st consecutive session.
The same three decisions would unblock further autonomous `/next` progress: (1) how WQ-032 should handle
writing to a target outside this repo's git history; (2) WQ-045's PDR-008-vs-WQ-042 reconciliation; (3)
whether/how to resolve ESC-001 for the 13 stuck Done-transitions.

---

## HL-027 — 2026-07-13 — No unblocked item — 20th consecutive session, post-GL-030

**Session:** Claude (autonomous single-item run) — read `CLAUDE.md`, `CONTEXT-KERNEL.md`,
`WORK-QUEUE.md`, and the last 3 HANDOFF-LEDGER entries (HL-026/025/024) per session orientation. Scanned
the full Active table for a genuinely unblocked, Claude-executable item (Owner ≠ Tony, Depends On all
Done, no judgment call implied).

**What happened:**

- No execution this session — independently re-verified rather than trusted HL-026's diagnosis:
  confirmed `git status --short` clean and `HEAD` at HL-026's own commit `919d811` (repo untouched since
  last session — zero drift, so no new information exists that could change the diagnosis); re-checked
  the three GL-030-sequenced candidates directly rather than citing prior notes:
  - **WQ-032** (GL-030 Sequence 1 of 3) — re-ran `git rev-parse --show-toplevel` from
    `/home/tjm/TJMSolns/Projects/`: still `fatal: not a git repository`. The target artifact
    (`claude-code-methodology.md`) still sits outside this repo's git history — a write there still
    produces no commit hash this repo's Done-transition discipline can point to. Still a Tony-judgment
    item (re-home outside this repo or accept the gap), not a clean pick — 15th consecutive session
    (HL-012–HL-027) with this identical finding.
  - **WQ-016** (GL-030 Sequence 2 of 3) — re-confirmed `src/pages/services/kcs-knowledge-base.tsx` still
    exists on disk with no credibility section (`grep -l credibility src/pages/services/*.tsx` matches
    only `ai-adoption-roadmap.tsx`, none of the other 21 pages including this one). GL-030 already
    dispatched a real `verifier` (opus tier) against this exact item on the merits and got VETO (see
    `docs/agents/evidence/WQ-016.md`) — reconciliation is Tony's call per proposed item WQ-045. Not a
    fresh pick; already adjudicated, correctly left Active.
  - **WQ-030** — still explicit "Tony: skip for now" (2026-07-05), unchanged.
  - Remaining exclusions unchanged: 13 items (WQ-031/005/006/007/009/003/038/039/040/041/042/043/044)
    "Implementation complete — Done-transition blocked (ESC-001)"; WQ-002 Owner Tony; WQ-022 dependency-
    blocked (Medium publication); WQ-025 still Proposed; WQ-045 Proposed + Owner Tony+Claude.
  - Result: zero items meet "unblocked + Claude-executable + no judgment call" — 20th consecutive session
    (HL-008 through HL-027) with this exact diagnosis.
- Working tree was clean at session start and remains clean except for this ledger entry.

**Decisions made:** none

**CONTEXT-KERNEL change:** none — file not touched this session (`git diff HEAD -- docs/agents/CONTEXT-KERNEL.md` empty).

**Harvest candidates:** none new — same diagnosis as 15 consecutive prior sessions, no new lesson to
generalize.

**Open items carried forward:**
- ESC-001 (open) — still needs Tony's direction; 20th consecutive session with no `verifier` spawn issue
  logged as a data point, still not itself sufficient to resolve it (Tony's call).
- 13 items still "Implementation complete — Done-transition blocked (ESC-001)" — unchanged.
- WQ-032 — still needs Tony's call on re-homing the target artifact outside this repo's git history.
- WQ-016 / WQ-045 — still needs Tony's PDR-008-vs-WQ-042 reconciliation call.
- WQ-030 — still explicitly Tony-held.

**Next owner:** Tony — the Claude-executable, no-judgment lane is empty for the 20th consecutive session.
The same three decisions would unblock further autonomous `/next` progress: (1) how WQ-032 should handle
writing to a target outside this repo's git history; (2) WQ-045's PDR-008-vs-WQ-042 reconciliation; (3)
whether/how to resolve ESC-001 for the 13 stuck Done-transitions.

---

## HL-026 — 2026-07-12 — No unblocked item — 19th consecutive session, post-GL-030

**Session:** Claude (autonomous single-item run) — read `CLAUDE.md`, `CONTEXT-KERNEL.md`,
`WORK-QUEUE.md`, and the last 3 HANDOFF-LEDGER entries (HL-025/024/023) per session orientation. Scanned
the full Active table for a genuinely unblocked, Claude-executable item (Owner ≠ Tony, Depends On all
Done, no judgment call implied).

**What happened:**

- No execution this session — independently re-verified rather than trusted HL-025's diagnosis:
  confirmed `git status --short` clean and `HEAD` at HL-025's own commit `2abf26c` (repo untouched since
  last session); re-checked the three GL-030-sequenced candidates directly rather than citing prior notes:
  - **WQ-032** (GL-030 Sequence 1 of 3) — re-ran `git rev-parse --show-toplevel` from
    `/home/tjm/TJMSolns/Projects/`: still `fatal: not a git repository`. The target artifact
    (`claude-code-methodology.md`) still sits outside this repo's git history — a write there still
    produces no commit hash this repo's Done-transition discipline can point to. Still a Tony-judgment
    item (re-home outside this repo or accept the gap), not a clean pick — 14th consecutive session
    (HL-012–HL-026) with this identical finding.
  - **WQ-016** (GL-030 Sequence 2 of 3) — re-confirmed `src/pages/services/kcs-knowledge-base.tsx` still
    exists on disk with no credibility section (`grep -l credibility src/pages/services/*.tsx` matches
    only `ai-adoption-roadmap.tsx`, none of the other 21 pages including this one). GL-030 already
    dispatched a real `verifier` (opus tier) against this exact item on the merits and got VETO (see
    `docs/agents/evidence/WQ-016.md`) — reconciliation is Tony's call per proposed item WQ-045. Not a
    fresh pick; already adjudicated, correctly left Active.
  - **WQ-030** — still explicit "Tony: skip for now" (2026-07-05), unchanged.
  - Remaining exclusions unchanged: 13 items (WQ-031/005/006/007/009/003/038/039/040/041/042/043/044)
    "Implementation complete — Done-transition blocked (ESC-001)"; WQ-002 Owner Tony; WQ-022 dependency-
    blocked (Medium publication); WQ-025 still Proposed; WQ-045 Proposed + Owner Tony+Claude.
  - Result: zero items meet "unblocked + Claude-executable + no judgment call" — 19th consecutive session
    (HL-008 through HL-026) with this exact diagnosis.
- Working tree was clean at session start and remains clean except for this ledger entry.

**Decisions made:** none

**CONTEXT-KERNEL change:** none — file not touched this session (`git diff HEAD -- docs/agents/CONTEXT-KERNEL.md` empty).

**Harvest candidates:** none new — same diagnosis as 14 consecutive prior sessions, no new lesson to
generalize.

**Open items carried forward:**
- ESC-001 (open) — still needs Tony's direction; 19th consecutive session with no `verifier` spawn issue
  logged as a data point, still not itself sufficient to resolve it (Tony's call).
- 13 items still "Implementation complete — Done-transition blocked (ESC-001)" — unchanged.
- WQ-032 — still needs Tony's call on re-homing the target artifact outside this repo's git history.
- WQ-016 / WQ-045 — still needs Tony's PDR-008-vs-WQ-042 reconciliation call.
- WQ-030 — still explicitly Tony-held.

**Next owner:** Tony — the Claude-executable, no-judgment lane is empty for the 19th consecutive session.
The same three decisions would unblock further autonomous `/next` progress: (1) how WQ-032 should handle
writing to a target outside this repo's git history; (2) WQ-045's PDR-008-vs-WQ-042 reconciliation; (3)
whether/how to resolve ESC-001 for the 13 stuck Done-transitions.

---

## HL-025 — 2026-07-12 — No unblocked item — 18th consecutive session, post-GL-030

**Session:** Claude (autonomous single-item run) — read `CLAUDE.md`, `CONTEXT-KERNEL.md`,
`WORK-QUEUE.md`, and the last 3 HANDOFF-LEDGER entries (HL-024/023/022) per session orientation. Scanned
the full Active table for a genuinely unblocked, Claude-executable item (Owner ≠ Tony, Depends On all
Done, no judgment call implied).

**What happened:**

- No execution this session — independently re-verified rather than trusted HL-024's diagnosis:
  confirmed `git status --short` clean and `HEAD` at HL-024's own commit `a3a84c7` (repo untouched since
  last session); re-checked the three GL-030-sequenced candidates directly rather than citing prior notes:
  - **WQ-032** (GL-030 Sequence 1 of 3) — re-ran `git rev-parse --show-toplevel` from
    `/home/tjm/TJMSolns/Projects/`: still `fatal: not a git repository`. The target artifact
    (`claude-code-methodology.md`) still sits outside this repo's git history — a write there still
    produces no commit hash this repo's Done-transition discipline can point to. Still a Tony-judgment
    item (re-home outside this repo or accept the gap), not a clean pick — 13th consecutive session
    (HL-012–HL-025) with this identical finding.
  - **WQ-016** (GL-030 Sequence 2 of 3) — re-confirmed `src/pages/services/kcs-knowledge-base.tsx` still
    exists on disk with no credibility section (`grep -l credibility src/pages/services/*.tsx` matches
    only `ai-adoption-roadmap.tsx`, none of the other 21 pages including this one). GL-030 already
    dispatched a real `verifier` (opus tier) against this exact item on the merits and got VETO (see
    `docs/agents/evidence/WQ-016.md`) — reconciliation is Tony's call per proposed item WQ-045. Not a
    fresh pick; already adjudicated, correctly left Active.
  - **WQ-030** — still explicit "Tony: skip for now" (2026-07-05), unchanged.
  - Remaining exclusions unchanged: 13 items (WQ-031/005/006/007/009/003/038/039/040/041/042/043/044)
    "Implementation complete — Done-transition blocked (ESC-001)"; WQ-002 Owner Tony; WQ-022 dependency-
    blocked (Medium publication); WQ-025 still Proposed; WQ-045 Proposed + Owner Tony+Claude.
  - Result: zero items meet "unblocked + Claude-executable + no judgment call" — 18th consecutive session
    (HL-008 through HL-025) with this exact diagnosis.
- Working tree was clean at session start and remains clean except for this ledger entry.

**Decisions made:** none

**CONTEXT-KERNEL change:** none — file not touched this session (`git diff HEAD -- docs/agents/CONTEXT-KERNEL.md` empty).

**Harvest candidates:** none new — same diagnosis as 13 consecutive prior sessions, no new lesson to
generalize.

**Open items carried forward:**
- ESC-001 (open) — still needs Tony's direction; 18th consecutive session with no `verifier` spawn issue
  logged as a data point, still not itself sufficient to resolve it (Tony's call).
- 13 items still "Implementation complete — Done-transition blocked (ESC-001)" — unchanged.
- WQ-032 — still needs Tony's call on re-homing the target artifact outside this repo's git history.
- WQ-016 / WQ-045 — still needs Tony's PDR-008-vs-WQ-042 reconciliation call.
- WQ-030 — still explicitly Tony-held.

**Next owner:** Tony — the Claude-executable, no-judgment lane is empty for the 18th consecutive session.
The same three decisions would unblock further autonomous `/next` progress: (1) how WQ-032 should handle
writing to a target outside this repo's git history; (2) WQ-045's PDR-008-vs-WQ-042 reconciliation; (3)
whether/how to resolve ESC-001 for the 13 stuck Done-transitions.

---

## HL-024 — 2026-07-12 — No unblocked item — 17th consecutive session, post-GL-030

**Session:** Claude (autonomous single-item run) — read `CLAUDE.md`, `CONTEXT-KERNEL.md`,
`WORK-QUEUE.md`, and the last 3 HANDOFF-LEDGER entries (HL-023/022/021) per session orientation. Scanned
the full Active table for a genuinely unblocked, Claude-executable item (Owner ≠ Tony, Depends On all
Done, no judgment call implied).

**What happened:**

- No execution this session — independently re-verified rather than trusted HL-023's diagnosis:
  confirmed `git status --short` clean and `HEAD` at HL-023's own commit `8c8d419` (repo untouched since
  last session); re-checked the three GL-030-sequenced candidates directly rather than citing prior notes:
  - **WQ-032** (GL-030 Sequence 1 of 3) — re-ran `git rev-parse --show-toplevel` from
    `/home/tjm/TJMSolns/Projects/`: still `fatal: not a git repository`. The target artifact
    (`claude-code-methodology.md`) still sits outside this repo's git history — a write there still
    produces no commit hash this repo's Done-transition discipline can point to. Still a Tony-judgment
    item (re-home outside this repo or accept the gap), not a clean pick — 12th consecutive session
    (HL-012–HL-024) with this identical finding.
  - **WQ-016** (GL-030 Sequence 2 of 3) — re-confirmed `src/pages/services/kcs-knowledge-base.tsx` still
    exists on disk with no credibility section (`grep -l credibility src/pages/services/*.tsx` matches
    only `ai-adoption-roadmap.tsx`, none of the other 21 pages including this one). GL-030 already
    dispatched a real `verifier` (opus tier) against this exact item on the merits and got VETO (see
    `docs/agents/evidence/WQ-016.md`) — reconciliation is Tony's call per proposed item WQ-045. Not a
    fresh pick; already adjudicated, correctly left Active.
  - **WQ-030** — still explicit "Tony: skip for now" (2026-07-05), unchanged.
  - Remaining exclusions unchanged: 13 items (WQ-031/005/006/007/009/003/038/039/040/041/042/043/044)
    "Implementation complete — Done-transition blocked (ESC-001)"; WQ-002 Owner Tony; WQ-022 dependency-
    blocked (Medium publication); WQ-025 still Proposed; WQ-045 Proposed + Owner Tony+Claude.
  - Result: zero items meet "unblocked + Claude-executable + no judgment call" — 17th consecutive session
    (HL-008 through HL-024) with this exact diagnosis.
- Working tree was clean at session start and remains clean except for this ledger entry.

**Decisions made:** none

**CONTEXT-KERNEL change:** none — file not touched this session (`git diff HEAD -- docs/agents/CONTEXT-KERNEL.md` empty).

**Harvest candidates:** none new — same diagnosis as 12 consecutive prior sessions, no new lesson to
generalize.

**Open items carried forward:**
- ESC-001 (open) — still needs Tony's direction; 17th consecutive session with no `verifier` spawn issue
  logged as a data point, still not itself sufficient to resolve it (Tony's call).
- 13 items still "Implementation complete — Done-transition blocked (ESC-001)" — unchanged.
- WQ-032 — still needs Tony's call on re-homing the target artifact outside this repo's git history.
- WQ-016 / WQ-045 — still needs Tony's PDR-008-vs-WQ-042 reconciliation call.
- WQ-030 — still explicitly Tony-held.

**Next owner:** Tony — the Claude-executable, no-judgment lane is empty for the 17th consecutive session.
The same three decisions would unblock further autonomous `/next` progress: (1) how WQ-032 should handle
writing to a target outside this repo's git history; (2) WQ-045's PDR-008-vs-WQ-042 reconciliation; (3)
whether/how to resolve ESC-001 for the 13 stuck Done-transitions.

---

## HL-023 — 2026-07-11 — No unblocked item — 16th consecutive session, post-GL-030

**Session:** Claude (autonomous single-item run) — read `CLAUDE.md`, `CONTEXT-KERNEL.md`,
`WORK-QUEUE.md`, and the last 3 HANDOFF-LEDGER entries (HL-022/021/020) per session orientation. Scanned
the full Active table for a genuinely unblocked, Claude-executable item (Owner ≠ Tony, Depends On all
Done, no judgment call implied).

**What happened:**

- No execution this session — independently re-verified rather than trusted HL-022's diagnosis:
  confirmed `git status --short` clean and `HEAD` at HL-022's own commit `775b960` (repo untouched since
  last session); re-checked the three GL-030-sequenced candidates directly rather than citing prior notes:
  - **WQ-032** (GL-030 Sequence 1 of 3) — re-ran `git rev-parse --show-toplevel` from
    `/home/tjm/TJMSolns/Projects/`: still `fatal: not a git repository`. The target artifact
    (`claude-code-methodology.md`) still sits outside this repo's git history — a write there still
    produces no commit hash this repo's Done-transition discipline can point to. Still a Tony-judgment
    item (re-home outside this repo or accept the gap), not a clean pick — 11th consecutive session
    (HL-012–HL-023) with this identical finding.
  - **WQ-016** (GL-030 Sequence 2 of 3) — re-confirmed `src/pages/services/kcs-knowledge-base.tsx` still
    exists on disk with no credibility section (`grep -l credibility src/pages/services/*.tsx` matches
    only `ai-adoption-roadmap.tsx`, none of the other 21 pages including this one). GL-030 already
    dispatched a real `verifier` (opus tier) against this exact item on the merits and got VETO (see
    `docs/agents/evidence/WQ-016.md`) — reconciliation is Tony's call per proposed item WQ-045. Not a
    fresh pick; already adjudicated, correctly left Active.
  - **WQ-030** — still explicit "Tony: skip for now" (2026-07-05), unchanged.
  - Remaining exclusions unchanged: 13 items (WQ-031/005/006/007/009/003/038/039/040/041/042/043/044)
    "Implementation complete — Done-transition blocked (ESC-001)"; WQ-002 Owner Tony; WQ-022 dependency-
    blocked (Medium publication); WQ-025 still Proposed; WQ-045 Proposed + Owner Tony+Claude.
  - Result: zero items meet "unblocked + Claude-executable + no judgment call" — 16th consecutive session
    (HL-008 through HL-023) with this exact diagnosis.
- Working tree was clean at session start and remains clean except for this ledger entry.

**Decisions made:** none

**CONTEXT-KERNEL change:** none — file not touched this session (`git diff HEAD -- docs/agents/CONTEXT-KERNEL.md` empty).

**Harvest candidates:** none new — same diagnosis as 11 consecutive prior sessions, no new lesson to
generalize.

**Open items carried forward:**
- ESC-001 (open) — still needs Tony's direction; 16th consecutive session with no `verifier` spawn issue
  logged as a data point, still not itself sufficient to resolve it (Tony's call).
- 13 items still "Implementation complete — Done-transition blocked (ESC-001)" — unchanged.
- WQ-032 — still needs Tony's call on re-homing the target artifact outside this repo's git history.
- WQ-016 / WQ-045 — still needs Tony's PDR-008-vs-WQ-042 reconciliation call.
- WQ-030 — still explicitly Tony-held.

**Next owner:** Tony — the Claude-executable, no-judgment lane is empty for the 16th consecutive session.
The same three decisions would unblock further autonomous `/next` progress: (1) how WQ-032 should handle
writing to a target outside this repo's git history; (2) WQ-045's PDR-008-vs-WQ-042 reconciliation; (3)
whether/how to resolve ESC-001 for the 13 stuck Done-transitions.

---

## HL-022 — 2026-07-11 — No unblocked item — 15th consecutive session, post-GL-030

**Session:** Claude (autonomous single-item run) — read `CLAUDE.md`, `CONTEXT-KERNEL.md`,
`WORK-QUEUE.md`, and the last 3 HANDOFF-LEDGER entries (HL-021/020/019) per session orientation. Scanned
the full Active table for a genuinely unblocked, Claude-executable item (Owner ≠ Tony, Depends On all
Done, no judgment call implied).

**What happened:**

- No execution this session — independently re-verified rather than trusted HL-021's diagnosis:
  confirmed `git status --short` clean and `HEAD` at HL-021's own commit `8e957d9` (repo untouched since
  last session); re-checked the three GL-030-sequenced candidates directly rather than citing prior notes:
  - **WQ-032** (GL-030 Sequence 1 of 3) — re-ran `git rev-parse --show-toplevel` from
    `/home/tjm/TJMSolns/Projects/`: still `fatal: not a git repository`. The target artifact
    (`claude-code-methodology.md`) still sits outside this repo's git history — a write there still
    produces no commit hash this repo's Done-transition discipline can point to. Still a Tony-judgment
    item (re-home outside this repo or accept the gap), not a clean pick — 10th consecutive session
    (HL-012–HL-022) with this identical finding.
  - **WQ-016** (GL-030 Sequence 2 of 3) — re-confirmed `src/pages/services/kcs-knowledge-base.tsx` still
    exists on disk with no credibility section (`grep -l credibility src/pages/services/*.tsx` matches
    only `ai-adoption-roadmap.tsx`, none of the other 21 pages including this one). GL-030 already
    dispatched a real `verifier` (opus tier) against this exact item on the merits and got VETO (see
    `docs/agents/evidence/WQ-016.md`) — reconciliation is Tony's call per proposed item WQ-045. Not a
    fresh pick; already adjudicated, correctly left Active.
  - **WQ-030** — still explicit "Tony: skip for now" (2026-07-05), unchanged.
  - Remaining exclusions unchanged: 13 items (WQ-031/005/006/007/009/003/038/039/040/041/042/043/044)
    "Implementation complete — Done-transition blocked (ESC-001)"; WQ-002 Owner Tony; WQ-022 dependency-
    blocked (Medium publication); WQ-025 still Proposed; WQ-045 Proposed + Owner Tony+Claude.
  - Result: zero items meet "unblocked + Claude-executable + no judgment call" — 15th consecutive session
    (HL-008 through HL-022) with this exact diagnosis.
- Working tree was clean at session start and remains clean except for this ledger entry.

**Decisions made:** none

**CONTEXT-KERNEL change:** none — file not touched this session (`git diff HEAD -- docs/agents/CONTEXT-KERNEL.md` empty).

**Harvest candidates:** none new — same diagnosis as 10 consecutive prior sessions, no new lesson to
generalize.

**Open items carried forward:**
- ESC-001 (open) — still needs Tony's direction; 15th consecutive session with no `verifier` spawn issue
  logged as a data point, still not itself sufficient to resolve it (Tony's call).
- 13 items still "Implementation complete — Done-transition blocked (ESC-001)" — unchanged.
- WQ-032 — still needs Tony's call on re-homing the target artifact outside this repo's git history.
- WQ-016 / WQ-045 — still needs Tony's PDR-008-vs-WQ-042 reconciliation call.
- WQ-030 — still explicitly Tony-held.

**Next owner:** Tony — the Claude-executable, no-judgment lane is empty for the 15th consecutive session.
The same three decisions would unblock further autonomous `/next` progress: (1) how WQ-032 should handle
writing to a target outside this repo's git history; (2) WQ-045's PDR-008-vs-WQ-042 reconciliation; (3)
whether/how to resolve ESC-001 for the 13 stuck Done-transitions.

---

## HL-021 — 2026-07-11 — No unblocked item — 14th consecutive session, post-GL-030

**Session:** Claude (autonomous single-item run) — read `CLAUDE.md`, `CONTEXT-KERNEL.md`,
`WORK-QUEUE.md`, and the last 3 HANDOFF-LEDGER entries (HL-020/019/018) per session orientation. Scanned
the full Active table for a genuinely unblocked, Claude-executable item (Owner ≠ Tony, Depends On all
Done, no judgment call implied).

**What happened:**

- No execution this session — independently re-verified rather than trusted HL-020's diagnosis:
  confirmed `git status --short` clean and `HEAD` at HL-020's own commit `ae10bf0` (repo untouched since
  last session); re-checked the three GL-030-sequenced candidates directly rather than citing prior notes:
  - **WQ-032** (GL-030 Sequence 1 of 3) — re-ran `git rev-parse --show-toplevel` from
    `/home/tjm/TJMSolns/Projects/`: still `fatal: not a git repository`. The target artifact
    (`claude-code-methodology.md`) still sits outside this repo's git history — a write there still
    produces no commit hash this repo's Done-transition discipline can point to. Still a Tony-judgment
    item (re-home outside this repo or accept the gap), not a clean pick — 9th consecutive session
    (HL-012–HL-021) with this identical finding.
  - **WQ-016** (GL-030 Sequence 2 of 3) — re-confirmed `src/pages/services/kcs-knowledge-base.tsx` still
    exists on disk with no credibility section (`grep -l credibility src/pages/services/*.tsx` matches
    only `ai-adoption-roadmap.tsx`, none of the other 21 pages including this one). GL-030 already
    dispatched a real `verifier` (opus tier) against this exact item on the merits and got VETO (see
    `docs/agents/evidence/WQ-016.md`) — reconciliation is Tony's call per proposed item WQ-045. Not a
    fresh pick; already adjudicated, correctly left Active.
  - **WQ-030** — still explicit "Tony: skip for now" (2026-07-05), unchanged.
  - Remaining exclusions unchanged: 13 items (WQ-031/005/006/007/009/003/038/039/040/041/042/043/044)
    "Implementation complete — Done-transition blocked (ESC-001)"; WQ-002 Owner Tony; WQ-022 dependency-
    blocked (Medium publication); WQ-025 still Proposed; WQ-045 Proposed + Owner Tony+Claude.
  - Result: zero items meet "unblocked + Claude-executable + no judgment call" — 14th consecutive session
    (HL-008 through HL-021) with this exact diagnosis.
- Working tree was clean at session start and remains clean except for this ledger entry.

**Decisions made:** none

**CONTEXT-KERNEL change:** none — file not touched this session (`git diff HEAD -- docs/agents/CONTEXT-KERNEL.md` empty).

**Harvest candidates:** none new — same diagnosis as 9 consecutive prior sessions, no new lesson to
generalize.

**Open items carried forward:**
- ESC-001 (open) — still needs Tony's direction; 14th consecutive session with no `verifier` spawn issue
  logged as a data point, still not itself sufficient to resolve it (Tony's call).
- 13 items still "Implementation complete — Done-transition blocked (ESC-001)" — unchanged.
- WQ-032 — still needs Tony's call on re-homing the target artifact outside this repo's git history.
- WQ-016 / WQ-045 — still needs Tony's PDR-008-vs-WQ-042 reconciliation call.
- WQ-030 — still explicitly Tony-held.

**Next owner:** Tony — the Claude-executable, no-judgment lane is empty for the 14th consecutive session.
The same three decisions would unblock further autonomous `/next` progress: (1) how WQ-032 should handle
writing to a target outside this repo's git history; (2) WQ-045's PDR-008-vs-WQ-042 reconciliation; (3)
whether/how to resolve ESC-001 for the 13 stuck Done-transitions.

---

## HL-020 — 2026-07-10 — No unblocked item — 13th consecutive session, post-GL-030

**Session:** Claude (autonomous single-item run) — read `CLAUDE.md`, `CONTEXT-KERNEL.md`,
`WORK-QUEUE.md`, and the last 3 HANDOFF-LEDGER entries (HL-019/018/017) per session orientation. Scanned
the full Active table for a genuinely unblocked, Claude-executable item (Owner ≠ Tony, Depends On all
Done, no judgment call implied). This session ran after GL-030 (the groom pass HL-019 called for), which
had sequenced WQ-032 → WQ-016 → WQ-030 — re-checked whether that sequencing changed the underlying
diagnosis rather than assuming it did.

**What happened:**

- No execution this session — independently re-verified rather than trusted GL-030's sequencing note:
  - **WQ-032** (GL-030 Sequence 1 of 3, called "genuinely ready now" in the tie-break rationale) —
    re-ran `git rev-parse --show-toplevel` from `/home/tjm/TJMSolns/Projects/`: still `fatal: not a git
    repository`. The target artifact `claude-code-methodology.md` still sits outside this repo's git
    history. GL-030's own row for WQ-032 explicitly states this caveat is "not resolved here" and that
    Tony may want to re-home the item — the sequencing pass reordered the queue but did not resolve the
    thing that made this a Tony-judgment item for 8 prior sessions (HL-012–HL-019). Still excluded.
  - **WQ-016** (GL-030 Sequence 2 of 3) — re-confirmed `src/pages/services/kcs-knowledge-base.tsx` still
    exists on disk. GL-030 itself already dispatched a real `verifier` (opus tier) against this exact
    item on the merits and got VETO (see `docs/agents/evidence/WQ-016.md`) — the PDR-008 credibility
    section is site-wide missing, reconciliation is Tony's call per new item WQ-045. Not a fresh pick;
    already adjudicated this pass and correctly left Active.
  - **WQ-030** (GL-030 Sequence 3 of 3) — still explicit "Tony: skip for now" (2026-07-05), reaffirmed by
    GL-030's own tie-break rationale ("honoring that stated preference, not re-deriving it").
  - Remaining exclusions unchanged: 13 items (WQ-031/005/006/007/009/003/038/039/040/041/042/043/044)
    "Implementation complete — Done-transition blocked (ESC-001)"; WQ-002 Owner Tony; WQ-022 dependency-
    blocked (Medium publication); WQ-025 still Proposed; WQ-045 Proposed + Owner Tony+Claude.
  - Result: zero items meet "unblocked + Claude-executable + no judgment call" — 13th consecutive session
    (HL-008 through HL-020) with this exact diagnosis. GL-030's sequencing pass changed queue ordering and
    surfaced one real, valuable finding (the site-wide PDR-008 credibility-section gap, WQ-045) but did
    not create a new clean pick — both of its top two sequence slots remain blocked on Tony-level
    questions (cross-repo re-homing; PDR-008 reconciliation), and its third slot is Tony-deprioritized.
- Working tree was clean at session start (`git status --short` empty, `HEAD` at GL-030's own commit
  `a6e7dd5`) and remains clean except for this ledger entry.

**Decisions made:** none

**CONTEXT-KERNEL change:** none — file not touched this session (`git diff HEAD -- docs/agents/CONTEXT-KERNEL.md` empty).

**Harvest candidates:** none new — same diagnosis as 8 consecutive prior sessions, no new lesson to
generalize.

**Open items carried forward:**
- ESC-001 (open) — still needs Tony's direction; 13th consecutive session with no `verifier` spawn issue
  logged as a data point, still not itself sufficient to resolve it (Tony's call).
- 13 items still "Implementation complete — Done-transition blocked (ESC-001)" — unchanged.
- WQ-032 — still needs Tony's call on re-homing the target artifact outside this repo's git history.
- WQ-016 / WQ-045 — VETO'd this groom cycle on a real, currently-open PDR-008 finding (site-wide missing
  offer-page credibility sections); needs Tony's reconciliation call, not further mechanical attempts.
- WQ-030 — still explicitly Tony-held.

**Next owner:** Tony — the Claude-executable, no-judgment lane is empty for the 13th consecutive session.
Three concrete decisions would unblock further autonomous `/next` progress: (1) how WQ-032 should handle
writing to a target outside this repo's git history; (2) WQ-045's PDR-008-vs-WQ-042 reconciliation; (3)
whether/how to resolve ESC-001 for the 13 stuck Done-transitions.

---

## HL-019 — 2026-07-10 — No unblocked item — 12th consecutive session, /groom needed

**Session:** Claude (autonomous single-item run) — read `CLAUDE.md`, `CONTEXT-KERNEL.md`,
`WORK-QUEUE.md`, and the last 3 HANDOFF-LEDGER entries (HL-018/017/016) per session orientation. Scanned
the full Active table for a genuinely unblocked, Claude-executable item (Owner ≠ Tony, Depends On all
Done, no judgment call implied).

**What happened:**

- No execution this session — independently re-verified rather than trusted HL-018's diagnosis:
  confirmed `git status --short` clean and `HEAD` at HL-018's own commit `833b776` (repo untouched since
  last session); re-checked the two live ambiguous cases directly rather than citing prior notes:
  - **WQ-016** — re-confirmed `src/pages/services/kcs-knowledge-base.tsx` still exists on disk (built by
    WQ-009, per HL-006's flagged overlap). Still a live duplicate, not a stale note; mechanical execution
    would mean overwriting/duplicating a shipped page — a `/groom` reconciliation call, not a clean pick.
  - **WQ-032** — re-confirmed `git rev-parse --show-toplevel` from `/home/tjm/TJMSolns/Projects/` still
    returns "fatal: not a git repository" — the target artifact (`claude-code-methodology.md`) still sits
    outside this repo's git history; a write there produces no commit hash this repo's Done-transition or
    handoff discipline can point to.
  - Remaining exclusions unchanged from HL-012 through HL-018 (re-checked against current
    `WORK-QUEUE.md`, no new rows): WQ-031/005/006/007/009/003/038/039/040/041/042/043/044 (13 items,
    confirmed by direct grep against the ESC-001 status string — one more than the "12 items" figure
    quoted in HL-014 through HL-018, which omitted WQ-003 from the enumerated list; WQ-003 has carried
    the identical "Implementation complete — Done-transition blocked (ESC-001)" status since HL-006 and
    was simply left out of the prior sessions' recap sentence, not a new occurrence) still
    "Implementation complete — Done-transition blocked (ESC-001)"; WQ-030 still explicit
    "Tony: skip for now"; WQ-002 Owner Tony; WQ-017/WQ-022 genuinely dependency-blocked; WQ-025 still
    "Proposed" not "Queued".
  - Result: zero items meet "unblocked + Claude-executable + no judgment call" — 12th consecutive session
    (HL-008 through HL-019) with this exact diagnosis.
- Working tree was clean at session start and remains clean except for this ledger entry.

**Decisions made:** none

**CONTEXT-KERNEL change:** none — file not touched this session (`git diff HEAD -- docs/agents/CONTEXT-KERNEL.md` empty).

**Harvest candidates:** none new — the WQ-003 recap-count discrepancy above is a one-line correction to
prior sessions' summary prose, not a process or tooling gap worth generalizing; the underlying
WORK-QUEUE.md status field for WQ-003 was already correct throughout, so no artifact needs fixing, only
the next `/groom` recap sentence.

**Open items carried forward:**
- ESC-001 (open) — still needs Tony's direction; 12th consecutive session with no `verifier` spawn issue
  logged as a data point, still not itself sufficient to resolve it (Tony's call).
- 13 items still "Implementation complete — Done-transition blocked (ESC-001)" (corrected count — see
  above; WQ-003 included).
- WQ-016 and WQ-032 — both independently re-confirmed this session as needing `/groom` judgment, not
  mechanical execution.
- WQ-030 — still explicitly Tony-held.

**Next owner:** Tony — the Claude-executable, no-judgment lane is empty for the 12th consecutive session.
A `/groom` pass to resolve WQ-016/WQ-032 (and/or a decision on ESC-001 / batch-retrying the 13 stuck
Done-transitions / WQ-030) is what unblocks further autonomous `/next` progress.

---

## HL-018 — 2026-07-10 — No unblocked item — 11th consecutive session, /groom needed

**Session:** Claude (autonomous single-item run) — read `CLAUDE.md`, `CONTEXT-KERNEL.md`,
`WORK-QUEUE.md`, and the last 3 HANDOFF-LEDGER entries (HL-017/016/015) per session orientation. Scanned
the full Active table for a genuinely unblocked, Claude-executable item (Owner ≠ Tony, Depends On all
Done, no judgment call implied).

**What happened:**

- No execution this session — independently re-verified rather than trusted HL-017's diagnosis:
  confirmed `git status --short` clean and `HEAD` at HL-017's own commit `df09cda` (repo untouched since
  last session); re-checked the two live ambiguous cases directly rather than citing prior notes:
  - **WQ-016** — re-confirmed `src/pages/services/kcs-knowledge-base.tsx` still exists on disk (built by
    WQ-009, per HL-006's flagged overlap). Still a live duplicate, not a stale note; mechanical execution
    would mean overwriting/duplicating a shipped page — a `/groom` reconciliation call, not a clean pick.
  - **WQ-032** — re-confirmed `git rev-parse --show-toplevel` from `/home/tjm/TJMSolns/Projects/` still
    returns "fatal: not a git repository" — the target artifact (`claude-code-methodology.md`) still sits
    outside this repo's git history; a write there produces no commit hash this repo's Done-transition or
    handoff discipline can point to.
  - Remaining exclusions unchanged from HL-012 through HL-017 (re-checked against current
    `WORK-QUEUE.md`, no new rows): WQ-031/005/006/007/009/038/039/040/041/042/043/044 (12 items) still
    "Implementation complete — Done-transition blocked (ESC-001)"; WQ-030 still explicit
    "Tony: skip for now"; WQ-002 Owner Tony; WQ-017/WQ-022 genuinely dependency-blocked; WQ-025 still
    "Proposed" not "Queued".
  - Result: zero items meet "unblocked + Claude-executable + no judgment call" — 11th consecutive session
    (HL-008 through HL-018) with this exact diagnosis.
- Working tree was clean at session start and remains clean except for this ledger entry.

**Decisions made:** none

**CONTEXT-KERNEL change:** none — file not touched this session (`git diff HEAD -- docs/agents/CONTEXT-KERNEL.md` empty).

**Harvest candidates:** none new — 11th repeat of the same diagnosis, no new lesson to generalize. No
unresolved prior-session harvest candidates found in HL-017/016/015 (all show "none new").

**Open items carried forward:**
- ESC-001 (open) — still needs Tony's direction; 11th consecutive session with no `verifier` spawn issue
  logged as a data point, still not itself sufficient to resolve it (Tony's call).
- 12 items still "Implementation complete — Done-transition blocked (ESC-001)" — unchanged.
- WQ-016 and WQ-032 — both independently re-confirmed this session as needing `/groom` judgment, not
  mechanical execution.
- WQ-030 — still explicitly Tony-held.

**Next owner:** Tony — the Claude-executable, no-judgment lane is empty for the 11th consecutive session.
A `/groom` pass to resolve WQ-016/WQ-032 (and/or a decision on ESC-001 / batch-retrying the 12 stuck
Done-transitions / WQ-030) is what unblocks further autonomous `/next` progress.

---

## HL-017 — 2026-07-09 — No unblocked item — 10th consecutive session, /groom needed

**Session:** Claude (autonomous single-item run) — read `CLAUDE.md`, `CONTEXT-KERNEL.md`,
`WORK-QUEUE.md`, and the last 3 HANDOFF-LEDGER entries (HL-016/015/014) per session orientation. Scanned
the full Active table for a genuinely unblocked, Claude-executable item (Owner ≠ Tony, Depends On all
Done, no judgment call implied).

**What happened:**

- No execution this session — independently re-verified rather than trusted HL-016's diagnosis:
  confirmed `git status --short` clean and `HEAD` at HL-016's own commit `0a74ffd` (repo untouched since
  last session); re-checked the two live ambiguous cases directly rather than citing prior notes:
  - **WQ-016** — re-confirmed `src/pages/services/kcs-knowledge-base.tsx` still exists on disk (built by
    WQ-009, per HL-006's flagged overlap). Still a live duplicate, not a stale note; mechanical execution
    would mean overwriting/duplicating a shipped page — a `/groom` reconciliation call, not a clean pick.
  - **WQ-032** — re-confirmed `git rev-parse --show-toplevel` from
    `/home/tjm/TJMSolns/Projects/` returns "fatal: not a git repository" — the target artifact
    (`claude-code-methodology.md`) still sits outside this repo's git history; a commit there produces no
    hash this repo's Done-transition or handoff discipline can point to.
  - Remaining exclusions unchanged from HL-012 through HL-016 (re-checked against current
    `WORK-QUEUE.md`, no new rows): WQ-031/005/006/007/009/038/039/040/041/042/043/044 (12 items) still
    "Implementation complete — Done-transition blocked (ESC-001)"; WQ-030 still explicit
    "Tony: skip for now"; WQ-002 Owner Tony; WQ-017/WQ-022 genuinely dependency-blocked; WQ-025 still
    "Proposed" not "Queued".
  - Result: zero items meet "unblocked + Claude-executable + no judgment call" — 10th consecutive session
    (HL-008 through HL-017) with this exact diagnosis.
- Working tree was clean at session start and remains clean except for this ledger entry.

**Decisions made:** none

**CONTEXT-KERNEL change:** none — file not touched this session (`git diff HEAD -- docs/agents/CONTEXT-KERNEL.md` empty).

**Harvest candidates:** none new — 10th repeat of the same diagnosis, no new lesson to generalize. No
unresolved prior-session harvest candidates found in HL-016/015/014 (all show "none new").

**Open items carried forward:**
- ESC-001 (open) — still needs Tony's direction; 10th consecutive session with no `verifier` spawn issue
  logged as a data point, still not itself sufficient to resolve it (Tony's call).
- 12 items still "Implementation complete — Done-transition blocked (ESC-001)" — unchanged.
- WQ-016 and WQ-032 — both independently re-confirmed this session as needing `/groom` judgment, not
  mechanical execution.
- WQ-030 — still explicitly Tony-held.

**Next owner:** Tony — the Claude-executable, no-judgment lane is empty for the 10th consecutive session.
A `/groom` pass to resolve WQ-016/WQ-032 (and/or a decision on ESC-001 / batch-retrying the 12 stuck
Done-transitions / WQ-030) is what unblocks further autonomous `/next` progress.

---

## HL-016 — 2026-07-09 — No unblocked item — 9th consecutive session, /groom needed

**Session:** Claude (autonomous single-item run) — read `CLAUDE.md`, `CONTEXT-KERNEL.md`,
`WORK-QUEUE.md`, and the last 3 HANDOFF-LEDGER entries (HL-015/014/013) per session orientation. Scanned
the full Active table for a genuinely unblocked, Claude-executable item (Owner ≠ Tony, Depends On all
Done, no judgment call implied).

**What happened:**

- No execution this session — confirmed via `git status`/`git log` that repo state is byte-identical to
  what HL-015 left (working tree clean at session start, HEAD is HL-015's own commit `6b00ecc`). Rather
  than trust HL-015's diagnosis verbatim, independently re-verified the two live ambiguous cases before
  concluding the same:
  - **WQ-016** — confirmed `src/pages/services/kcs-knowledge-base.tsx` already exists on disk (built by
    WQ-009, per HL-006's flagged overlap). This is a real, present-tense duplicate, not a stale note —
    executing WQ-016 "mechanically" would mean overwriting or duplicating an existing shipped page, which
    is exactly the reconciliation judgment call `/groom` is for, not a clean pick.
  - **WQ-032** — confirmed `/home/tjm/TJMSolns/Projects/claude-code-methodology.md` exists but sits
    outside this repo's git history (`git rev-parse --show-toplevel` from that path returns "not a git
    repository"). Writing to it produces no commit this repo's Done-transition or handoff discipline can
    point to — cross-repo boundary issue confirmed, not assumed.
  - Remaining exclusions unchanged from HL-012 through HL-015 (re-checked against current
    `WORK-QUEUE.md`, no new rows): WQ-031/005/006/007/009/038/039/040/041/042/043/044 (12 items) still
    "Implementation complete — Done-transition blocked (ESC-001)"; WQ-030 still explicit
    "Tony: skip for now"; WQ-002 Owner Tony; WQ-017/WQ-022 genuinely dependency-blocked; WQ-025 still
    "Proposed" not "Queued".
  - Result: zero items meet "unblocked + Claude-executable + no judgment call" — 9th consecutive session
    (HL-008 through HL-016) with this exact diagnosis.
- Working tree was clean at session start and remains clean except for this ledger entry.

**Decisions made:** none

**CONTEXT-KERNEL change:** none — file not touched this session (`git diff HEAD -- docs/agents/CONTEXT-KERNEL.md` empty).

**Harvest candidates:** none new — 9th repeat of the same diagnosis, no new lesson to generalize. No
unresolved prior-session harvest candidates found in HL-015/014/013 (all show "none new").

**Open items carried forward:**
- ESC-001 (open) — still needs Tony's direction; 9th consecutive session with no `verifier` spawn issue
  logged as a data point, still not itself sufficient to resolve it (Tony's call).
- 12 items still "Implementation complete — Done-transition blocked (ESC-001)" — unchanged.
- WQ-016 and WQ-032 — both independently re-confirmed this session as needing `/groom` judgment, not
  mechanical execution.
- WQ-030 — still explicitly Tony-held.

**Next owner:** Tony — the Claude-executable, no-judgment lane is empty for the 9th consecutive session.
A `/groom` pass to resolve WQ-016/WQ-032 (and/or a decision on ESC-001 / batch-retrying the 12 stuck
Done-transitions / WQ-030) is what unblocks further autonomous `/next` progress.

---

## HL-015 — 2026-07-09 — No unblocked item — 8th consecutive session, /groom needed

**Session:** Claude (autonomous single-item run) — read `CLAUDE.md`, `CONTEXT-KERNEL.md`,
`WORK-QUEUE.md`, and the last 3 HANDOFF-LEDGER entries (HL-014/013/012) per session orientation. Scanned
the full Active table for a genuinely unblocked, Claude-executable item (Owner ≠ Tony, Depends On all
Done, no judgment call implied).

**What happened:**

- No execution this session — independently re-derived the identical exclusion set HL-012 through HL-014
  already documented; nothing on the board changed since HL-014 closed (git status clean at session
  start, WORK-QUEUE unchanged):
  - WQ-031/005/006/007/009/038/039/040/041/042/043/044 (12 items) — "Implementation complete —
    Done-transition blocked (ESC-001)"; not fresh work, and unilaterally retrying their Done-transition
    is exactly the judgment call HL-008 through HL-014 have each deferred to Tony.
  - WQ-016 — nominally "Unblocked (PDR-008)" but flagged since HL-006 as a likely duplicate of WQ-009
    (same file, same scope); needs `/groom` reconciliation, not mechanical execution.
  - WQ-030 — Queued, no Depends On, but its own row text says "Tony: skip for now" — an explicit hold,
    not a real block, but still not mine to override.
  - WQ-002 — Owner Tony.
  - WQ-017, WQ-022 — genuinely dependency-blocked (WQ-016 not Done; Medium publication, Tony's action).
  - WQ-032 — Status column says "Queued" but the ID still carries a `[PROPOSED]` tag, and its target
    artifact (`Projects/claude-code-methodology.md`) lives outside this repo (org root, separate git
    history) — same ambiguity HL-012 through HL-014 flagged; needs `/groom`, not a clean pick.
  - WQ-025 — Status explicitly "Proposed", not "Queued" — not yet promoted.
  - Result: the queue still has zero items meeting "unblocked + Claude-executable + no judgment call".
    This is the 8th consecutive session (HL-008 through HL-015) landing on the same diagnosis: the
    Claude-executable, no-judgment lane stays empty until Tony resolves ESC-001, WQ-030, or the
    WQ-016/WQ-032 `/groom` judgment calls.
- Working tree was clean at session start and remains clean except for this ledger entry — no code,
  evidence, or WORK-QUEUE changes to make.

**Decisions made:** none

**CONTEXT-KERNEL change:** none — file not touched this session (confirmed via `git diff HEAD`).

**Harvest candidates:** none new — this is a repeat of HL-012/013/014's diagnosis with no new lesson. No
unresolved prior-session harvest candidates found in the last 3 entries (HL-014/013/012 all show
"none new").

**Open items carried forward:**
- ESC-001 (open) — still needs Tony's direction; 8th consecutive session with no `verifier` spawn issue
  logged as a data point, still not itself sufficient to resolve it (Tony's call).
- 12 items still "Implementation complete — Done-transition blocked (ESC-001)" — unchanged.
- WQ-016 and WQ-032 — both still need `/groom` judgment, untouched this session.
- WQ-030 — still explicitly Tony-held.

**Next owner:** Tony — the Claude-executable, no-judgment lane is empty for the 8th consecutive session.
A `/groom` pass to resolve WQ-016/WQ-032 (and/or a decision on ESC-001 / batch-retrying the 12 stuck
Done-transitions / WQ-030) is what unblocks further autonomous `/next` progress.

---

## HL-014 — 2026-07-08 — No unblocked item — 7th consecutive session, /groom needed

**Session:** Claude (autonomous single-item run) — read `CLAUDE.md`, `CONTEXT-KERNEL.md`,
`WORK-QUEUE.md`, and the last 3 HANDOFF-LEDGER entries (HL-013/012/011) per session orientation. Scanned
the full Active table for a genuinely unblocked, Claude-executable item (Owner ≠ Tony, Depends On all
Done, no judgment call implied).

**What happened:**

- No execution this session — re-derived the identical exclusion set HL-012/HL-013 already documented;
  nothing on the board changed since HL-013 closed:
  - WQ-031/005/006/007/009/038/039/040/041/042/043/044 (12 items) — "Implementation complete —
    Done-transition blocked (ESC-001)"; not fresh work, and unilaterally retrying their Done-transition
    is exactly the judgment call HL-008 through HL-013 have each deferred to Tony.
  - WQ-016 — nominally "Unblocked (PDR-008)" but flagged since HL-006 as a likely duplicate of WQ-009
    (same file, same scope); needs `/groom` reconciliation, not mechanical execution.
  - WQ-030 — Queued, no Depends On, but its own row text says "Tony: skip for now" — an explicit hold,
    not a real block, but still not mine to override.
  - WQ-002 — Owner Tony.
  - WQ-017, WQ-022 — genuinely dependency-blocked (WQ-016 not Done; Medium publication, Tony's action).
  - WQ-032 — Status column says "Queued" but the ID still carries a `[PROPOSED]` tag, and its target
    artifact (`Projects/claude-code-methodology.md`) lives outside this repo (org root, separate git
    history) — same ambiguity HL-012/HL-013 flagged; needs `/groom`, not a clean pick.
  - WQ-025 — Status explicitly "Proposed", not "Queued" — not yet promoted.
  - Result: the queue still has zero items meeting "unblocked + Claude-executable + no judgment call".
    This is the 7th consecutive session (HL-008 through HL-014) landing on the same diagnosis: the
    Claude-executable, no-judgment lane stays empty until Tony resolves ESC-001, WQ-030, or the
    WQ-016/WQ-032 `/groom` judgment calls.
- Working tree was clean at session start and remains clean except for this ledger entry — no code,
  evidence, or WORK-QUEUE changes to make.

**Decisions made:** none

**CONTEXT-KERNEL change:** none — file not touched this session (confirmed via `git diff HEAD`).

**Harvest candidates:** none new — this is a repeat of HL-012/HL-013's diagnosis with no new lesson. No
unresolved prior-session harvest candidates found in the last 3 entries (HL-013/012/011 all show
"none new").

**Open items carried forward:**
- ESC-001 (open) — still needs Tony's direction; 7th consecutive session with no `verifier` spawn issue
  logged as a data point, still not itself sufficient to resolve it (Tony's call).
- 12 items still "Implementation complete — Done-transition blocked (ESC-001)" — unchanged.
- WQ-016 and WQ-032 — both still need `/groom` judgment, untouched this session.
- WQ-030 — still explicitly Tony-held.

**Next owner:** Tony — the Claude-executable, no-judgment lane is empty for the 7th consecutive session.
A `/groom` pass to resolve WQ-016/WQ-032 (and/or a decision on ESC-001 / batch-retrying the 12 stuck
Done-transitions / WQ-030) is what unblocks further autonomous `/next` progress.

---

## HL-013 — 2026-07-08 — No unblocked item — /groom needed

**Session:** Claude (autonomous single-item run) — read `CLAUDE.md`, `CONTEXT-KERNEL.md`,
`WORK-QUEUE.md`, and the last 3 HANDOFF-LEDGER entries (HL-012/011/010) per session orientation. Scanned
the full Active table for a genuinely unblocked, Claude-executable item (Owner ≠ Tony, Depends On all
Done, no judgment call implied).

**What happened:**

- No execution this session — independently re-derived the same exclusion set HL-012 already documented,
  now with WQ-020 removed from the board (it closed last session):
  - WQ-031/005/006/007/009/038/039/040/041/042/043/044 (12 items) — "Implementation complete —
    Done-transition blocked (ESC-001)"; not fresh work, and retrying their Done-transition unilaterally
    is exactly the judgment call HL-008 through HL-012 have each deferred to Tony.
  - WQ-016 — nominally "Unblocked (PDR-008)" but flagged since HL-006 as a likely duplicate of WQ-009
    (same file, same scope); needs `/groom` reconciliation, not mechanical execution.
  - WQ-030 — Queued, no Depends On, but its own row text says "Tony: skip for now" — an explicit hold,
    not a real block, but still not mine to override.
  - WQ-002 — Owner Tony.
  - WQ-017, WQ-022 — genuinely dependency-blocked (WQ-016 not Done; Medium publication, Tony's action).
  - WQ-032 — Status column says "Queued" but the ID still carries a `[PROPOSED]` tag, and its target
    artifact (`Projects/claude-code-methodology.md`) lives outside this repo (org root, separate git
    history) — same ambiguity HL-012 flagged; treating it as needing `/groom`, not a clean pick.
  - WQ-025 — Status explicitly "Proposed", not "Queued" — not yet promoted.
  - Result: the queue has zero items meeting "unblocked + Claude-executable + no judgment call" right
    now. This matches HL-012's own "Next owner" note verbatim: the next clean pick requires either Tony's
    input (ESC-001 / WQ-030 / WQ-016 / WQ-032) or a fresh `/groom` pass.
- Working tree was clean at session start and remains clean except for this ledger entry — no code,
  evidence, or WORK-QUEUE changes to make.

**Decisions made:** none

**CONTEXT-KERNEL change:** none — file not touched this session (confirmed via `git diff HEAD`).

**Harvest candidates:** none new — this is a repeat of HL-012's own diagnosis with no new lesson.

**Open items carried forward:**
- ESC-001 (open) — still needs Tony's direction; 6th consecutive session with no `verifier` spawn issue
  logged as a data point, still not itself sufficient to resolve it (Tony's call).
- 12 items still "Implementation complete — Done-transition blocked (ESC-001)" — unchanged.
- WQ-016 and WQ-032 — both still need `/groom` judgment, untouched this session.
- WQ-030 — still explicitly Tony-held.

**Next owner:** Tony — the Claude-executable, no-judgment lane is empty. A `/groom` pass to resolve
WQ-016/WQ-032 (and/or a decision on ESC-001 / batch-retrying the 12 stuck Done-transitions / WQ-030)
is what unblocks further autonomous `/next` progress.

---

## HL-012 — 2026-07-08 — WQ-020: POL-002-deployment-quality-gates formalized

**Session:** Claude (autonomous single-item run) — read `CLAUDE.md`, `CONTEXT-KERNEL.md`,
`WORK-QUEUE.md`, and the last 3 HANDOFF-LEDGER entries (HL-011/010/009). Scanned the Active table for a
genuinely unblocked, Claude-executable item, applying the same filters HL-011 documented: excluded items
already "Implementation complete — Done-transition blocked (ESC-001)" (WQ-031/005/006/007/009/etc. — not
re-executable work), WQ-030 (explicitly Tony-held per its own row text), WQ-016 (still flagged for
`/groom` judgment on its WQ-009 overlap — a judgment call, not mechanical execution), WQ-032 (ID still
carries a `[PROPOSED]` tag inconsistent with its "Queued" status column, and its target artifact
(`Projects/claude-code-methodology.md`) lives outside this repo — ambiguous enough to treat as needing
`/groom`, not a clean single candidate), and anything Owner-tagged Tony (WQ-002) or dependency-blocked
(WQ-017, WQ-022, WQ-025 explicitly "Proposed" not "Queued"). That left WQ-020 as the sole clean
Queued/Claude/no-deps item — the same ordering convention HL-010/HL-011 already named as next (GL-028
Notes: "...Claude-unblocked article/governance adds (WQ-030/018/019/**020**)..."). Executed WQ-020
alone, then stopped per instruction not to process a second item.

**What happened:**

- **WQ-020 (commit 20a683f):** Wrote `docs/governance/POL/POL-002-deployment-quality-gates.md` per the
  `/decide` template (Context/Decision/Rationale/Consequences/Alternatives Rejected), formalizing the 3
  remaining rules from the `WQ-P4-037` CONTEXT-KERNEL audit that POL-001 (WQ-019, last session) had not
  covered: WCAG AA dual-theme compliance before every deploy, article canonical links back to Medium, and
  the `[data-theme='dark']`-only dark-mode CSS pattern. All 3 already existed as CONTEXT-KERNEL/CLAUDE.md
  prose and are already enforced in practice (most recently exercised by WQ-042's real dual-theme contrast
  bug find) — this gives them a durable governance record with an amendment path, matching no new
  restriction. Also registered DR-002 in `docs/agents/DECISION-REGISTER.md` (above DR-001, per the
  register's "new entries at top" convention). Pure docs/governance item, self-evidently a single
  artifact — Pre-Implementation Gate (E1–E4 build items only) skipped per the `/next` skill's own stated
  scope, same as WQ-018/019's precedent.
- **Verification:** No application code/build/runtime surface touched — no `npm run build`/`typecheck`/
  `wcag` run, noted explicitly in the evidence artifact as a deliberate scope call (WQ-018/019 precedent).
  Verification consisted of re-reading POL-002 for all 5 required sections, confirming DR-002's table row
  + detail block in `DECISION-REGISTER.md`, and cross-checking every factual claim (the 3 gates' exact
  current wording in CONTEXT-KERNEL.md/CLAUDE.md, the WQ-042 dark-mode bug citation, the WQ-P4-037/POL-001
  gap-closure relationship) against its real source rather than paraphrasing from memory.
- **E2 verifier — background dispatch:** drew a verifier tier via `draw-verifier-tier.py P3 sonnet` →
  `haiku` (raw_offset=-1). Wrote the evidence artifact FIRST with `Verifier-verdict: PENDING`, committed
  that checkpoint (1678b92), then dispatched the verifier as a background `Agent` call (the pattern
  HL-008 through HL-011 established as the only one that produces the `<task-notification>` DN-006's gate
  parses). The verifier independently confirmed commit 20a683f via `git show --stat`, re-derived every
  Invariance-recheck claim from the real CONTEXT-KERNEL.md/CLAUDE.md text and the WQ-042 WORK-QUEUE.md
  entry (not from the evidence artifact's prose), and confirmed both POL-002's structure and DR-002's
  registration. Returned `PASS`; updated the evidence artifact's `Verifier-verdict:` field from its
  PENDING placeholder to the real value, then moved WQ-020 to Done. Evidence at
  `docs/agents/evidence/WQ-020.md`.
- **ESC-001 note:** `subagent_type: "verifier"` spawned without issue again this session (5th consecutive
  session, alongside HL-008/009/010/011) — left `open`, still Tony's call.

**Decisions made:** DR-002 (Deployment quality gates: WCAG, canonical links, dark-mode pattern) —
formalizes rules already in effect since early sessions; no new restriction, no change in practice, just
a durable governance record where none existed.

**CONTEXT-KERNEL change:** none — file not touched this session (confirmed via `git diff HEAD`); POL-002
explicitly notes no wording change is needed there, since it already states the rules being formalized.

**Harvest candidates:** none new this session — this was a straight repeat of the WQ-019/POL-001 pattern
with no new lesson surfaced.

**Open items carried forward:**
- ESC-001 (open) — still needs Tony's direction; 5th consecutive session logged as a data point.
- 13 items still "Implementation complete — Done-transition blocked (ESC-001)" — unchanged, still
  candidates for batch Done-transition retry once Tony weighs in.
- WQ-016 (WQ-009 overlap) and WQ-032 (`[PROPOSED]`/"Queued" status mismatch, cross-repo target file) —
  both still need `/groom` judgment, untouched this session.
- WQ-030 — still explicitly Tony-held.

**Next owner:** any — under GL-028's ordering convention, the Claude-unblocked article/governance-adds
group (WQ-030/018/019/020) is now fully closed except for the deliberately Tony-held WQ-030. The next
clean pick requires either Tony's input (ESC-001, WQ-030, or WQ-016/WQ-032 groom judgment) or a fresh
`/groom` pass to resolve WQ-016/WQ-032 and re-sequence the queue.

---

## HL-011 — 2026-07-07 — WQ-019: POL-001-no-swizzle formalized

**Session:** Claude (autonomous single-item run) — read CLAUDE.md, CONTEXT-KERNEL, WORK-QUEUE, and the
last 3 HANDOFF-LEDGER entries (HL-010/009/008). Scanned the Active table for a genuinely unblocked,
Claude-executable item, filtering out: items already "Implementation complete — Done-transition blocked
(ESC-001)" (WQ-031/005/006/007/009/etc. — not re-executable work), WQ-030 (explicitly Tony-held per its
own row text), WQ-016 (flagged across 4 prior sessions for `/groom` judgment on its WQ-009 overlap, so
treated as requiring judgment rather than being genuinely mechanical), and anything Owner-tagged Tony
(WQ-002) or dependency-blocked (WQ-017, WQ-022). That left WQ-019/020/032 as simultaneously
Queued/Claude/no-deps — the same tie HL-010 identified. HL-010's own "Next owner" line explicitly named
WQ-019 as next under this project's documented ordering convention (GL-028 Notes: "...Claude-unblocked
article/governance adds (WQ-030/018/019/020)..."), which resolved the tie without a new judgment call.
Executed WQ-019 alone, then stopped per instruction not to process a second item.

**What happened:**

- **WQ-019 (commit 156738e):** Wrote `docs/governance/POL/POL-001-no-swizzle.md` per the `/decide`
  template (Context/Decision/Rationale/Consequences/Alternatives Rejected), formalizing the swizzle ban
  that previously existed only as prose in CONTEXT-KERNEL.md and CLAUDE.md. This closes the specific gap
  LL-001 identified: when WQ-014 (og:type + JSON-LD) was proposed, the natural swizzle path was blocked
  by an informal restriction with no ADR/POL to consult or amend, and resolution required an ad hoc
  Tony decision mid-session (HL-003 open item → HL-004 resolution via the head-block pattern, LL-004).
  Also registered DR-001 in `docs/agents/DECISION-REGISTER.md` (previously empty — first entry in this
  project's decision register). This was a docs/governance item self-evidently a single artifact, so the
  Pre-Implementation Gate (E1–E4 build items only) was skipped per the `/next` skill's own stated scope.
- **Verification:** Pure governance-documentation change, no application code/build/runtime surface — no
  `npm run build`/`typecheck`/`wcag` run (noted explicitly in the evidence artifact, same as WQ-018's
  precedent, so the absence reads as a deliberate scope call rather than an oversight). Verification
  consisted of re-reading the POL for all 5 required sections, confirming the DR-001 table row + detail
  block in DECISION-REGISTER.md, and cross-checking every factual claim in the POL (the WQ-014 stall, its
  resolution, the LL-001/LL-004 citations, the exact CONTEXT-KERNEL.md/CLAUDE.md prose being formalized)
  against its real source rather than inventing or paraphrasing from memory.
- **E2 verifier — background dispatch:** drew a verifier tier via `draw-verifier-tier.py P3 sonnet` →
  `haiku` (raw_offset=-1). Wrote the evidence artifact FIRST with `Verifier-verdict: PENDING` and
  `Commit: PENDING`, committed that checkpoint (156738e), then dispatched the verifier as a background
  `Agent` call per HL-008/009/010's documented lesson that only background dispatch produces the
  `<task-notification>` DN-006's gate parses. The verifier independently confirmed commit 156738e via
  `git show --stat`/`git show`, re-derived every Invariance-recheck claim from the real HL-003/HL-004,
  LL-001/LL-004, CONTEXT-KERNEL.md line 30, and CLAUDE.md line 108 (not from the evidence artifact's
  prose), and confirmed both POL-001's structure and DR-001's registration. Returned `PASS`; updated the
  evidence artifact's `Commit:` and `Verifier-verdict:` fields from their PENDING placeholders to the
  real values, then moved WQ-019 to Done. Evidence at `docs/agents/evidence/WQ-019.md`.
- **ESC-001 note:** `subagent_type: "verifier"` spawned without issue again this session (4th consecutive
  session, alongside HL-008/009/010) — left `open`, still Tony's call.

**Decisions made:** DR-001 (No Docusaurus swizzle) — formalizes a rule already in effect since the
site's founding; no new restriction, no change in practice, just a durable governance record where none
existed.

**CONTEXT-KERNEL change:** none — file not touched this session (confirmed via `git diff HEAD`); POL-001
explicitly notes no wording change is needed there, since it already states the rule being formalized.

**Harvest candidates:** none new this session.

**Open items carried forward:**
- ESC-001 (open) — still needs Tony's direction; 4th consecutive session logged as a data point.
- 13 items still "Implementation complete — Done-transition blocked (ESC-001)" — unchanged, still
  candidates for batch Done-transition retry once Tony weighs in.
- WQ-016 — untouched; still flagged for `/groom` to reconcile against WQ-009's overlap.
- WQ-020/032 — untouched this session, still Queued, no dependencies; next candidates under the same
  ordering convention.
- WQ-030 — still explicitly held by Tony.

**Next owner:** any — WQ-020 (formalize remaining CONTEXT-KERNEL quality gates as POL-002) is next in
this project's documented ordering convention; WQ-032 is also unblocked and Claude-executable if a future
session wants to pick a different one of the tied set.

---

## HL-010 — 2026-07-07 — WQ-018: harvest 5 patterns into LESSONS-LEARNED.md

**Session:** Claude (autonomous single-item `/next`-style run) — read CLAUDE.md, CONTEXT-KERNEL,
WORK-QUEUE, and the last 3 HANDOFF-LEDGER entries (HL-009/008/007); scanned the Active table for a
genuinely unblocked, Claude-executable item that wasn't already implementation-complete-pending-ESC-001,
explicitly Tony-held (WQ-030), blocked on a real dependency, or flagged for `/groom` judgment (WQ-016's
overlap with WQ-009, left untouched across 4 consecutive sessions for that reason). WQ-018/019/020/032
were all simultaneously Queued/Claude/no-deps; used this project's own documented "Ordering convention
(GL-028)" note — Claude-unblocked article/governance adds are sequenced WQ-030 → WQ-018 → WQ-019 →
WQ-020 — to pick WQ-018 as the single next item, since WQ-030 (ahead of it in that order) is explicitly
Tony-held. Executed it alone, then stopped.

**What happened:**

- **WQ-018 (commit abe1895):** Added LL-004 through LL-008 to `docs/agents/LESSONS-LEARNED.md`,
  harvesting the 5 patterns named in the queue item: (LL-004) per-article `<head>` JSON-LD + og:meta
  without swizzle (HL-004); (LL-005) card-only landing page pattern (HL-002); (LL-006) shared
  `OfferPage` detail-page component + thin per-item data pages (HL-006/WQ-009); (LL-007)
  localStorage-injection dual-theme Puppeteer+pa11y verification pattern (HL-007); (LL-008) never
  redefine the shared neutral-gray token scale per theme (HL-007). This was a docs/tooling item
  self-evidently a single artifact, so the Pre-Implementation Gate (E1–E4 enrichment build items only)
  was skipped per the `/next` skill's own stated scope. New entries inserted above the pre-existing
  LL-003/002/001 (untouched), matching the file's existing newest-first convention; cross-linked with
  `[[LL-NNN]]` where relevant (LL-008→LL-007, LL-004→LL-001).
- **Verification:** Pure documentation change with no application code, build, or runtime surface — no
  `npm run build`/`typecheck`/`wcag` run (not relevant to this change; noted explicitly in the evidence
  artifact so no one mistakes the absence for an oversight). Verification consisted of confirming all 5
  patterns present as substantive entries with correct source citations, and cross-checking each entry's
  factual content directly against its cited HANDOFF-LEDGER source section to rule out invented/drifted
  detail.
- **E2 verifier — background dispatch:** drew a verifier tier via `draw-verifier-tier.py P3 sonnet` →
  `sonnet` (raw_offset=0). Dispatched directly as a background `Agent` call (per HL-008/HL-009's
  documented lesson that only background calls produce the `<task-notification>` DN-006's gate parses).
  The verifier independently re-ran `git show`/`git diff --stat` on commit abe1895, confirmed only the 2
  intended files changed and the pre-existing LL-001/002/003 entries are byte-identical, cross-checked
  every new entry against the real HL-002/004/006/007 sections of this ledger, confirmed the
  `[[LL-NNN]]` cross-links resolve, and independently confirmed on the filesystem that
  `src/components/OfferPage/index.tsx` and 22 pages under `src/pages/services/` exist (backing LL-006's
  claim). Returned `PASS`; gate's corroboration check passed. Evidence at
  `docs/agents/evidence/WQ-018.md`; moved WQ-018 to Done (this commit).
- **ESC-001 note:** `subagent_type: "verifier"` spawned without issue again this session (3rd
  consecutive session, alongside HL-008/HL-009) — left `open`, still Tony's call.

**Decisions made:** None new — WQ-018's scope (the 5 patterns to harvest) was already fully specified in
the queued item text; the choice of WQ-018 over its sibling items (WQ-019/020/032) used this project's
own pre-existing ordering convention, not a new judgment call.

**CONTEXT-KERNEL change:** none — file not touched this session (confirmed via `git diff HEAD`).

**Harvest candidates:** none new this session — this session itself only consumed already-identified
harvest candidates, it didn't generate new ones.

**Open items carried forward:**
- ESC-001 (open) — still needs Tony's direction; 3rd consecutive session logged as a data point
  (verifier worked without issue again).
- 13 items still "Implementation complete — Done-transition blocked (ESC-001)"
  (WQ-031/009/005/006/007/003/038/039/040/041/042/043/044) — candidates for batch Done-transition retry
  using the background-dispatch verifier pattern, once Tony weighs in on ESC-001.
- WQ-016 — untouched; still flagged for `/groom` to reconcile against WQ-009's overlap.
- WQ-019/020/032 — untouched this session, still Queued, no dependencies; next candidates under the same
  ordering convention.
- `packaged-offers` repo hygiene (stale uncommitted redaction work, flagged HL-008) — not acted on again
  this session; still Tony's to review.
- WQ-030 — still explicitly held by Tony.

**Next owner:** any — WQ-019 (formalize the swizzle restriction as POL-001) is next in this project's
own documented ordering convention; WQ-020 and WQ-032 are also unblocked and Claude-executable if a
future session wants to pick a different one of the tied set. If Tony resolves ESC-001, a future session
could instead batch-close the 13 ESC-001-blocked items first.

---

## HL-009 — 2026-07-07 — WQ-037: homepage offer chips, full 22-offer catalog live

**Session:** Claude (autonomous single-item `/next` run) — read CLAUDE.md, CONTEXT-KERNEL, WORK-QUEUE,
and the last 3 HANDOFF-LEDGER entries; scanned the Active table for genuinely unblocked, Claude-executable
items and found exactly one that wasn't either already-implemented-pending-ESC-001, explicitly
Tony-held (WQ-030), blocked on a real dependency, or flagged for `/groom` judgment (WQ-016's overlap
with WQ-009) — WQ-037, matching HL-008's own "next owner" pointer. Executed it alone, then stopped.

**What happened:**

- **WQ-037 (commit 9dbf3f1):** Redesigned the homepage offer list from a vertical `<ul>` of full-sentence
  links to a flex-wrap row of compact chips (mono code + name, border colored per category via
  `--cat-cs`/`--cat-dt`/`--cat-ee`) in `src/components/HomepageFeatures/index.tsx` +
  `styles.module.css`. Also expanded each category's offer list from the 3 curated offers to the full
  catalog now that WQ-036 completed all 22 pages: CS 9 (CS-1..9), DT 6 (DT-1..6), EE 7 (EE-1..7). Kept
  the 3 category header rows (icon, code, name, description) untouched per the WQ-037 spec. Chip text
  color reuses two already-WCAG-verified combinations from the same file (category-colored mono code
  matching `.categoryCode`'s existing pattern; chip name in `--color-gray-600`/`--color-gray-400`
  matching `.categoryDescription`'s existing pattern) rather than introducing new color/background
  combinations, to avoid the exact class of contrast regression WQ-042 found and fixed.
- **Verification:** `npm run typecheck` — same 6 pre-existing `Layout` prop-type errors as WQ-036's
  baseline, none new. `npm run build` (`onBrokenLinks: throw`) — passed, all 22 offer links resolve.
  `npx pa11y --standard WCAG2AA` against the homepage in light theme — no issues. Independently re-ran
  in dark theme using the HL-007 localStorage-injection pattern (confirmed `data-theme='dark'` was
  actually active) — no issues. Took light/dark/mobile (390×844) screenshots and visually confirmed all
  22 offers render as wrapped chips with correct category coloring, and that chips wrap cleanly at
  every width sampled (longer labels wrap to a second line inside their own chip on mobile — readable,
  no clipping).
- **E2 verifier — background dispatch, first try:** drew a verifier tier via
  `draw-verifier-tier.py P3 sonnet` → `haiku`. Dispatched directly as a background `Agent` call (per
  HL-008's documented lesson that only background calls produce the `<task-notification>` DN-006's gate
  parses — no wasted synchronous dispatch this time). Verifier independently re-checked commit 9dbf3f1,
  re-ran build/typecheck/pa11y (its own dark-theme injection, not mine), took its own screenshots, and
  confirmed via `git diff --stat` only the 2 intended files changed. Returned `PASS`; gate's
  corroboration check passed. Evidence at `docs/agents/evidence/WQ-037.md`; moved WQ-037 to Done
  (commit e541577).
- **ESC-001 note (still not resolved, another data point):** `subagent_type: "verifier"` spawned
  without issue in this session's environment too (now 2 consecutive sessions since ESC-001 was first
  logged) — consistent with HL-008's hypothesis that the original 2026-07-05 failure was
  session/environment-specific rather than universal. Left `open`; Tony's call whether to close it and
  whether to authorize batch-retrying the Done-transition for the 13 items still marked
  "Implementation complete — Done-transition blocked (ESC-001)".

**Decisions made:** None new — WQ-037's approach (chip redesign, ordering, fallback) was already fully
specified in the queued item text from the prior session.

**CONTEXT-KERNEL change:** none — file not touched this session (confirmed via `git diff HEAD`).

**Harvest candidates:** none new this session — no novel pattern beyond what HL-007/HL-008 already
identified and folded into WQ-018's scope.

**Open items carried forward:**
- ESC-001 (open) — still needs Tony's direction; another session logged as a data point (verifier
  worked without issue again).
- 13 items still "Implementation complete — Done-transition blocked (ESC-001)"
  (WQ-031/009/005/006/007/003/038/039/040/041/042/043/044) — candidates for batch Done-transition retry
  using the background-dispatch verifier pattern, once Tony weighs in on ESC-001.
- WQ-016 — untouched; still flagged for `/groom` to reconcile against WQ-009's overlap.
- `packaged-offers` repo hygiene (stale uncommitted redaction work, ~6 weeks old, flagged HL-008) — not
  acted on again this session; still Tony's to review.
- WQ-018/019/020/030/032 — untouched this session, still Queued (WQ-030 still explicitly held by Tony).

**Next owner:** any — if Tony resolves ESC-001, next session could batch-close the 13 ESC-001-blocked
items; otherwise the queue's next genuinely unblocked Claude-executable items are WQ-018/019/020/032
(governance/harvest formalization, no dependencies).

---

## HL-008 — 2026-07-06 — WQ-036: remaining 13 offer pages, first real E2 verifier PASS since ESC-001

**Session:** Claude (autonomous single-item /next run) — read CONTEXT-KERNEL, WORK-QUEUE, and the last 3
HANDOFF-LEDGER entries; found HL-007's explicit "next owner" recommendation (WQ-036) matched the only
genuinely unblocked, Claude-executable, non-judgment-call item at the head of the queue; executed it
alone per instruction, then stopped.

**What happened:**

- **WQ-036 (commit 28fde1f):** Added the 13 remaining offer detail pages completing the 22-offer
  packaged-offers catalog: CS-1/5/6/7/8/9, DT-1/4/6, EE-2/3/6/7. Delegated drafting to 3 parallel
  background agents grouped by category (CS: 6 pages, DT: 3, EE: 4), each instructed to follow the
  existing `OfferPage` component pattern exactly and source content from each offer's Level 1 doc in
  `Projects/packaged-offers/<category>/level1/`, with a hard constraint carried over from WQ-039/042:
  no employer/client names, no credibility section (matching the precedent already applied to all 9
  existing pages).
- **Verification:** `npm run build` (`onBrokenLinks: throw`) passed, all 22 `/services/*.html` routes
  present. `npm run typecheck` — no new errors (the only errors are the pre-existing `Layout` prop-type
  issue already present in 6 other files before this session). `npm run wcag` (4 fixed pages) — no
  issues. Additionally sampled 6 of the 13 new pages directly with `pa11y --standard WCAG2AA` in light
  theme (no issues), and re-ran 4 of those with the localStorage `theme=dark` injection pattern
  (HL-007's dual-theme pattern) to force dark mode before navigation (no issues). Grepped all 13 files
  for banned employer/client names and a `credibility` field — zero matches on both.
- **E2 verifier gate — first genuine PASS since ESC-001 (2026-07-05):** drew a verifier tier via
  `draw-verifier-tier.py P3 sonnet` → `haiku`. First dispatch was **synchronous** (`run_in_background:
  false`) and returned a real `PASS`, but `pretooluse-done-gate.py`'s DN-006 transcript-corroboration
  check rejected it — synchronous `Agent` calls don't produce the `<task-notification>` block the gate
  parses, so the gate can't confirm a real spawn happened. Re-dispatched the identical verifier prompt
  as a **background** `Agent` call instead; it independently re-verified the commit, re-ran the build,
  re-grepped for banned names/credibility, and confirmed the `OfferPage` pattern and category mappings
  — returned `PASS` again, and this time the gate's corroboration check passed. WQ-036 evidence at
  `docs/agents/evidence/WQ-036.md`; moved to Done (commit 8e6b6d0). WQ-037 flipped to Unblocked.
- **ESC-001 note (not resolved, logged as an observation):** the `verifier` subagent — reported entirely
  unavailable in the 2026-07-05 session (ESC-001, two model tiers tried, identical failure both times) —
  spawned successfully in this session at the drawn `haiku` tier, both synchronously and in the
  background. This doesn't confirm the underlying gap is fixed everywhere (could be session/environment
  -specific), but it means the 13 items still marked "Implementation complete — Done-transition blocked
  (ESC-001)" (WQ-031/009/005/006/007/003/038/039/040/041/042/043/044) may be closeable now using the
  same background-dispatch pattern. Did not attempt this myself — out of scope for this session's single
  -item instruction (do not process a second item). Logged in ESCALATIONS.md ESC-001 as an update, status
  left `open` since only Tony can decide whether to treat the gap as resolved.
- **Out-of-scope discovery, not acted on:** while sourcing content from
  `/home/tjm/TJMSolns/Projects/packaged-offers/` (a sibling org project, read-only), found that repo has
  21 uncommitted file changes and 1 unpushed commit dating to 2026-05-28 (confirmed via file mtimes —
  about six weeks old, not something this session touched or caused). The uncommitted diffs are a
  partial, seemingly abandoned redaction of company names (e.g. "RETISIO" → "the prior organization")
  across business-sensitive sales/proposal documents, inconsistent even within single files (some
  company names redacted, others left in place). This session's own git-durability Stop hook flagged the
  repo as "touched" (my subagents read files there) and demanded a commit+push; I declined — committing
  and pushing another project's stale, business-sensitive, half-finished edits without Tony's review
  would be exactly the kind of irreversible, shared-state action that needs confirmation first. Flagging
  here for Tony's attention rather than acting.

**Decisions made:** None new — WQ-036's constraints (no employer names, offer selection, pattern) were
all already decided in prior sessions (WQ-039/042/036's own queue text).

**CONTEXT-KERNEL change:** none.

**Harvest candidates:** The synchronous-vs-background verifier dispatch distinction (DN-006 only
corroborates background `Agent` calls, since only those produce a `<task-notification>` the gate parses)
is a real, non-obvious gap — worth folding into WQ-018's harvest scope (next `/groom` or harvest session)
so future sessions don't waste a dispatch on a synchronous call that can't satisfy the gate.

**Open items carried forward:**
- ESC-001 (open) — still needs Tony's direction; new observation logged (verifier worked this session).
- 13 items still "Implementation complete — Done-transition blocked (ESC-001)" — candidates for
  re-attempting Done-transition with the background-dispatch verifier pattern, once Tony weighs in.
- WQ-037 — now Unblocked (WQ-036 Done); homepage chip-layout redesign, not started.
- `packaged-offers` repo hygiene (stale uncommitted redaction work, ~6 weeks old) — flagged for Tony,
  not acted on; out of scope for this project's queue.
- WQ-018/019/020/030/032 — untouched this session, still Queued (WQ-030 still explicitly held by Tony).

**Next owner:** any — if Tony confirms the verifier gap is resolved, next session could batch-close the
13 ESC-001-blocked items; otherwise WQ-037 (homepage chip layout) is the next unblocked substantive item.

---

## HL-007 — 2026-07-06 — Site-wide visual identity redesign, deploy fix, legal cleanup

**Session:** Claude, driving an extensive iterative redesign at Tony's direction, starting from "the site
is pretty ugly and looks very unprofessional" through a style-guide/mockup review cycle (several
directions rejected — warm-serif-plus-red for resembling Oracle's Redwood rebrand; an early
too-orange dark-mode red), to a final terminal-color-profile-inspired direction, then full
implementation on the live site with real WCAG AA verification in both themes and independent
production verification (not just CI status).

**What happened:**

- **Deploy infra (WQ-038, commits 2e32c7c, 8c225ff):** Diagnosed the legacy branch-based GitHub Pages
  build as silently broken since 2026-05-16 (every deploy since, including HL-006's, had actually
  failed with no diagnostic). Migrated to Actions-based deploy (`upload-pages-artifact`/`deploy-pages`),
  which also fixed an unrelated pre-existing broken page (`/services/kcs-knowledge-base`). Also fixed a
  link-check CI race (was running concurrently with deploy, catching the site mid-deploy).

- **Visual identity redesign (WQ-039, commit 2e55512):** New dark-mode-primary palette (deep
  red/blue/green mapped to CS/DT/EE categories, terminal-profile-inspired per Tony's GNOME term
  preference); Bricolage Grotesque + Public Sans + Space Mono type system; logo recolored
  #C00000→#770000 (midpoint of deep red and oxblood, per Tony); self-hosted Phosphor Icons (MIT) for
  category marks; homepage rebuilt as a cover-sheet hero + CS/DT/EE spec index; all 9 offer pages
  rebuilt as spec sheets; stock `banner.jpg` removed everywhere in favor of the logo.

- **Legal cleanup (folded into WQ-039/WQ-042):** Tony flagged a legal-exposure concern — offer pages
  named former employers/clients (RETISIO, ATG, Oracle, Professional Access, Mirakl) in credibility
  sections. Scoped explicitly to offer pages only (About page career-history bio deliberately
  untouched, per Tony). Removed credibility specifics from all 9 offer pages by end of session (5 for
  the named-company reason directly; 4 more for pure structural consistency once the gap was noticed).

- **Consistency fixes (WQ-040/041/042/043, commits cd6f88c, 41adef9, 99feb28, 0fbf049):** Iteratively
  found and fixed, per Tony's direct escalating feedback: a CSS mask bug that faded hero text (not just
  the decorative background); a missing header on the projects page; a retainer-card density problem on
  rates (fixed via 2×2 grid, not content removal); inconsistent credibility-section presence across
  offer pages; missing grid-texture hero treatment on offer pages; and — the most severe complaint — 7
  hero banners with 3 different padding schemes, inconsistent borders, and wildly different prose volume.
  All 7 heroes now share one identical spec.

- **Real WCAG bugs found and fixed (WQ-042, commit 99feb28):** Tony directly caught a methodology gap —
  contrast had never been explicitly verified in both themes, only whichever theme was default (dark).
  Built a localStorage-injection Puppeteer+pa11y harness to force each theme reliably; found two real
  bugs: (1) `rates.module.css` used `@media (prefers-color-scheme: dark)` instead of `[data-theme='dark']`
  (banned pattern, causes black-on-black when OS is dark but site is manually set to light); (2)
  `--color-gray-500` failed light-mode contrast in 6 places. Also caught and fixed a self-introduced
  regression: redefining the shared `--color-gray-*` scale per theme broke every pre-existing dark-mode
  override elsewhere that assumed the scale was fixed/absolute.

- **Verification:** `npm run build` (`onBrokenLinks: throw`) and `npm run wcag` passed after every
  change. Dual-theme pa11y sweeps run locally via `npx docusaurus serve` (not `npx serve -s`, which
  silently mis-serves nested clean-URL routes in SPA-fallback mode). After deploy, independently verified
  the live production site directly (not just CI green) via Puppeteer `getComputedStyle` checks
  confirming identical hero padding/border across `/`, `/about`, `/rates`, `/articles`, `/projects`,
  `/mdslides`, and a sampled `/services/*` page.

- **Handoff git-audit (this entry):** Swept `tjm-solutions-site` (not on the hardcoded org-root repo
  list, but audited anyway per the gate's own cross-project rationale, since 100% of this session's work
  landed here). Found and resolved two working-tree issues: reverted an incidental `package-lock.json`
  dependency bump from `npx` tool side effects (not intentional work); added `.claude/hooks/__pycache__/`
  to `.gitignore` (commit fead2e7). `git status --short` clean and all commits pushed as of this entry.

**Decisions made:** None formally recorded via `/decide` — DECISION-REGISTER.md remains empty despite
substantive design and legal-scope decisions this session (design direction, credibility-removal scope).
Not retroactively creating DR entries for this session's decisions; flagging so a future session doesn't
assume design/legal calls of this weight are always durably registered.

**Harvest candidates:** Both resolved inline this session — folded into WQ-018's scope (see WORK-QUEUE.md):
(4) localStorage-injection dual-theme Puppeteer+pa11y verification pattern; (5) never redefine a shared
neutral-gray token scale per theme.

**CONTEXT-KERNEL change:** none — file not touched this session (confirmed via `git log --since` check).

**Cross-project dependencies:** none discovered this session — all work and all blocking relationships
were internal to tjm-solutions-site.

**Open items carried forward:**
- ESC-001 (verifier subagent unavailable for Done-transition gate) — still open, unresolved by Tony;
  all WQ-038 through WQ-044 items added this session use the same "Implementation complete —
  Done-transition blocked (ESC-001)" status as precedent from HL-006, rather than attempting to bypass
  the gate.
- WQ-036 (13 remaining offer pages) — queued, not started.
- WQ-037 (homepage chip layout) — deliberately blocked on WQ-036 per Tony.
- WQ-018 — now carries 5 harvest items (3 pre-existing + 2 from this session), still Queued.

**Next owner:** any — resume with WQ-036 (remaining 13 offer pages) as the next unblocked substantive
item, or escalate ESC-001 to Tony directly if a verifier-gate resolution is wanted first.

---

## HL-006 — 2026-07-05 — PDR-008 offer-listing chain: pages, cards, deploy

**Session:** Claude, driving the WQ-031 → WQ-009 → WQ-005/006/007 → WQ-003 → deploy chain per Tony's
direction (org-level PDR-008 offer selection already confirmed 2026-06-26; this session executed the
site-side implementation).

**What happened:**

- **WQ-031** (commit 5221d39) — Finished the PDR-008 re-baseline: flipped WQ-016/005/006/007 to
  Unblocked (PDR-008), promoted WQ-009 from Proposed to Queued, reordered the queue per GL-028. Built the
  full credibility map (below) — every offer backed by a named prior engagement or published article,
  never a claim of internal TJMSolns battle-testing. Evidence: `docs/agents/evidence/WQ-031.md`.

  **Credibility map (Tony-confirmed selection, 2026-06-26):**

  | Card | Offer | Credibility source |
  |------|-------|---------------------|
  | Commerce Strategy | CS-2 Marketplace Integration Strategy | Named engagement: Principal Solutions Consultant, Mirakl |
  | Commerce Strategy | CS-4 Composable Commerce Architecture Review | Named engagement: CTO, RETISIO Inc. |
  | Commerce Strategy | CS-3 Agent-Commerce Readiness Audit | Published articles: Invisible Buyer / Economics of Agent-Mediated Commerce / Capability Surfaces / Protocol Stack |
  | Digital Transformation | DT-2 KCS Knowledge Base Implementation | Named engagement: decade at ATG (search & knowledge mgmt) — **not** the paused internal SCKB dogfood engagement |
  | Digital Transformation | DT-3 Microservices Modernization Assessment | Named engagement: CTO, Professional Access |
  | Digital Transformation | DT-5 Reactive Systems & Reliability Review | Named engagement: CTO, RETISIO Inc. + published FP series |
  | Experience Engineering | EE-1 Commerce Search & Discovery Audit | Named engagement: decade at ATG (search) |
  | Experience Engineering | EE-4 Engagement Architecture Review | Named engagement: Director of Product Management, Oracle Americas |
  | Experience Engineering | EE-5 Agent-Ready Experience Design | Published articles (same 4 as CS-3, explicitly cited in the EE-5 offer doc itself) |

- **WQ-009** (commit 090f720) — New shared `src/components/OfferPage/` component + 9 detail pages under
  `src/pages/services/`: `marketplace-integration-strategy`, `agent-commerce-readiness-audit`,
  `composable-commerce-architecture-review`, `kcs-knowledge-base`,
  `microservices-modernization-assessment`, `reactive-systems-reliability-review`,
  `commerce-search-discovery-audit`, `engagement-architecture-review`,
  `agent-ready-experience-design`. Content sourced from each offer's Level 1 doc in
  `Projects/packaged-offers/`. Each page carries a credibility section per the map above.

- **WQ-005/006/007** (commit 39b7862) — Redesigned `HomepageFeatures` card layout (top-image banner +
  content below, replacing the absolute-overlay style) and wired each of the three homepage cards to its
  3 offer detail pages, in Tony's confirmed order.

- **WQ-003** (commit 68d9e90) — Removed the "Workshop Management" placeholder card; rebalanced the
  services grid to 3 columns.

- **Verification:** `npm run build` (onBrokenLinks: throw) passed after every change. `npm run wcag`
  (pa11y WCAG2AA) run against the homepage, `/about`, `/rates`, `/articles`, plus 3 sampled `/services/*`
  pages — no issues found on any.

- **Deploy:** Pushed all commits to `origin/main` (5221d39 → 19cd961). Ran
  `GIT_USER=TJMSolns npm run deploy` (per HL-005's documented HTTPS/gh-credential-helper note) —
  succeeded, pushed to `gh-pages` at a982dc0. Confirmed via `git ls-tree origin/gh-pages` that all 9
  `/services/*.html` files and the updated `index.html` (new cards, no workshops card) are present in the
  deployed branch, and via the GitHub deployments API
  (`GET /repos/TJMSolns/tjm-solutions-site/deployments`) that GitHub's `github-pages` app processed
  deployment `5319492061` for sha a982dc0 successfully. **Live-site propagation status:** see the
  addendum immediately below this entry, or `docs/agents/evidence/` — a Fastly/CDN cache delay was
  observed on the custom domain (www.tjm.solutions) at session-writing time; content correctness at the
  origin/branch level is independently confirmed regardless of CDN propagation timing.

- **ESC-001 (infra blocker):** The Done-transition gate (`pretooluse-done-gate.py`, DN-006) requires
  spawning a real `verifier` subagent. In this session's environment, `subagent_type: "verifier"` could
  not be invoked at all — confirmed identically at two different requested model tiers (opus, sonnet),
  which rules out the DN-007 tier-unavailable case (whose redraw-with-exclusion remedy only changes the
  model argument, not agent-type registration). This is logged as `docs/agents/ESCALATIONS.md` ESC-001
  (status: open) rather than worked around — no PASS was fabricated, no gate bypassed. As a result,
  WQ-031/009/005/006/007/003 are all implemented, committed, pushed, and deployed, but remain in the
  Active table annotated **"Implementation complete — Done-transition blocked (ESC-001)"** rather than
  moved to Done. Evidence files for all six items exist at `docs/agents/evidence/WQ-{031,009,005,006,007,003}.md`
  with `Verifier-verdict: PENDING`.

- **WQ-016/WQ-009 overlap flagged, not resolved:** WQ-009 built the DT-2 detail page at the exact path
  WQ-016 specifies (`/services/kcs-knowledge-base`) with equivalent scope. WQ-016 itself was left
  untouched — out of this session's assigned chain (WQ-031→WQ-009→WQ-005/006/007→WQ-003→deploy only, per
  explicit instruction to stop at this chain). Flagged in WORK-QUEUE Notes for `/groom` to reconcile.

**Decisions made:** none new (this session executed decisions already recorded — PDR-008/DR-034, and
Tony's 2026-06-26 offer selection — it did not make new governance decisions).

**CONTEXT-KERNEL change:** none (`git diff HEAD -- docs/agents/CONTEXT-KERNEL.md` empty this session).

**Harvest candidates:**
- Shared detail-page component pattern (`OfferPage` + thin data pages) — **already has a WQ item**:
  folded into WQ-018's scope (harvest Docusaurus patterns into LESSONS-LEARNED.md), no new item needed.
- ESC-001's underlying gap — DN-007's tier-redraw remedy doesn't cover "custom agent-type unavailable in
  a nested/sub-agent session" as distinct from "model tier unavailable" — **harvest deferred**: this is a
  harness-evolution-owned mechanism (DN-006/DN-007), not a tjm-solutions-site-owned one, and cross-project
  discipline means it should be queued in a harness-evolution session, not written into this project's
  queue from here. Revisit by 2026-08-04 (within 30 days) — either in the next harness-evolution session
  or via org-level `/harvest-all`.

**Open items carried forward:**
- ESC-001 (open) — needs Tony's direction on how sub-agent sessions without custom agent-type access
  should satisfy the verifier gate.
- WQ-016/017 — untouched this session; WQ-016/WQ-009 overlap needs `/groom` reconciliation.
- WQ-030/021/028/024/029/018/019/020/002 — unaffected, still queued in prior order.
- WQ-025 [Proposed] — deployment-currency check; this session's own deploy addresses much of its intent
  but the item itself was not formally executed.

**Next owner:** Tony — resolve ESC-001 (how should the verifier gate work in this kind of session?), and
if desired, run `/groom` to reconcile the WQ-016/WQ-009 overlap and formally close WQ-031/009/005/006/007/003
once a verifier path is available.

---

## HL-005 — 2026-06-10 — Backlog sync, WQ-023 resolution, Medium-parity invariant (WQ-027)

**Session:** Tony + Claude (status review → queue decisions → /next WQ-027)

**What happened:**
- **Committed 3 weeks of uncommitted governance backlog** found at session start (org-level sessions had edited site files without running site /handoff): harness gates in commit 90470d8, governance state in c2a3418. Pushed; remote switched to HTTPS with `gh` credential helper after sandbox SSH failure (`gh auth setup-git`; use `GIT_USER=TJMSolns npm run deploy`, not `USE_SSH=true`).
- **WQ-023 resolved** (Tony confirmed: Medium live numbering stands): Part 12 = "When Good Enough Is Not", 13 = "It Was Never about the Money", 14 = "The Aggregate Cost of Composition", 15 = "A Case for Capabilities". WQ-021/WQ-024 unblocked; WQ-028/WQ-029 queued; WQ-022 ("Authentication Is Not Authority", part TBD) blocked on Medium publication per Tony directive — not on site before live on Medium.
- **WQ-027 executed:** (a) Medium-parity invariant codified in CLAUDE.md Key Constraints + CONTEXT-KERNEL Non-Negotiables, with audit procedure (sitemap + profile diff vs blog canonicals) — commit 44f8580. (b) Full parity audit: Medium 22 articles vs site 17 Medium-canonical; 5 missing = Parts 12–15 (pre-queued) + "Modeling Distribution on Tracing Ideals" (COVID vaccine, 2020-12-06) → **WQ-030 queued**. Site is parity-complete once WQ-021/024/028/029/030 land.
- **Org item WQ-P4-139 queued** (org WORK-QUEUE, lock protocol honored): extend org /handoff git-audit gate to sweep every repo touched in a session — closes the cross-repo gap that caused the backlog above.

**Decisions made:** Medium numbering stands (Tony, 2026-06-10 — supersedes draft-file part labels); WQ-022 gated on Medium publication; remote auth via HTTPS/gh.

**CONTEXT-KERNEL change:** Non-Negotiables — Medium-parity invariant added (WQ-027 / Tony directive 2026-06-10, org HL-068).

**Harvest candidates:** Medium sitemap-diff parity-audit procedure (sitemap + profile page vs canonical greps) — reusable for any republished-content site.

**Open items carried forward:**
- WQ-030/018/019/020: unblocked Claude items (WQ-030 now queue head)
- WQ-021/024/028/029: FP Parts 12–15 article adds — unblocked, content + pattern ready
- WQ-022: blocked on Medium publication (Tony)
- WQ-016/017: blocked on revenue chain (SCKB-275 → WQ-P4-011 → PO-007)
- WQ-005/006/007/003/009: blocked on PDR-001
- WQ-025 [PROPOSED]: deployment-currency check — awaiting groom promotion

**Next owner:** any — `/next` picks up WQ-030 (COVID article add) or the four FP article adds

---

## HL-004 — 2026-05-16 — Article SEO: og:type + BlogPosting JSON-LD

**Session:** Tony + Claude (/next autonomous run, continued)

**What happened:**
- All 21 `blog/*.mdx` updated — `og:type: article`, `article:published_time`, `article:author`, and `BlogPosting` JSON-LD injected via each article's `<head>` block. No swizzle used: JSON-LD delivered as a JSX template-literal script child `{``...``}` inside the existing `<head>` element. The 17 Medium-canonical articles retain their Medium canonical; the 4 original April 2026 papers gained a self-canonical in the same pass.
- CONTEXT-KERNEL non-negotiable ("No Docusaurus swizzle") fully honored — resolved by using per-article `<head>` blocks rather than theme component override.
- Python script applied the change uniformly across all 21 files in one pass.
- Deployed to www.tjm.solutions — commit 8289b95.

**Decisions made:** none formally recorded; the swizzle-free approach is now the established pattern for per-article head injection.

**Harvest candidates:** per-article `<head>` block pattern for JSON-LD + og meta — reusable for any Docusaurus blog without swizzle, applicable to belsouri or other Docusaurus sites.

**Open items carried forward:**
- WQ-016: DT-2 offer detail page — blocked on PO-007 (case study draft)
- WQ-017: DT card "Learn more" link — blocked on WQ-016
- WQ-002: FP series (Tony's writing)
- WQ-005/006/007/003/009: Blocked on PDR-001

**Next owner:** Tony — queue is exhausted for Claude. PO-007 (case study draft) unblocks WQ-016/017.

---

## HL-003 — 2026-05-16 — Rates update + link-check CI

**Session:** Tony + Claude (/next autonomous run)

**What happened:**
- `src/pages/rates.tsx` — restructured to remote/on-site split pricing; Consulting ($250/$300/hr), Strategy ($350/$400/hr), Daily Intensive ($1,800/$2,200/day, ≤8 hrs); Retainer tiers Monthly $3,000 (≤16 hrs), Quarterly $8,000 (≤48 hrs), Annual $25,000 (≤192 hrs); overage at consulting rate. New `RateRow`/`EngagementModel` interfaces replacing flat `amount`+`period`.
- `src/pages/rates.module.css` — added `.rateRows`, `.rateRow`, `.rateLabel`, `.rateValue`, `.rowAmount`, `.rateNote`, `.overageNote` for row-based card layout; all dark mode via `[data-theme='dark']`
- `serviceSchema` JSON-LD updated to 9 distinct Offers (Remote + On-Site variants for hourly tiers; 3 retainer Offers)
- `.github/workflows/ci.yml` (NEW) — build job on every push/PR; link-check job on push + weekly schedule using lychee; excludes LinkedIn/Twitter/X; accepts 429 for Medium rate-limiting
- Committed + pushed both; rates deployed to www.tjm.solutions

**Decisions made:** none

**Open items carried forward:**
- WQ-014 [Proposed]: Article og:type + BlogPosting JSON-LD — **blocked by CONTEXT-KERNEL non-negotiable** (`No Docusaurus swizzle`). Needs a governance decision (update CONTEXT-KERNEL or find a swizzle-free alternative) before proceeding.
- WQ-016: DT-2 offer detail page — blocked on PO-007 (case study draft, packaged-offers project)
- WQ-017: Add card link to DT card — blocked on WQ-016
- WQ-002: FP series (Tony's writing)
- WQ-005/006/007/003/009: Blocked on PDR-001

**Next owner:** Tony — two decisions needed: (1) WQ-014: lift swizzle ban for semantic/SEO use cases or find alternative approach; (2) WQ-016: write PO-007 case study draft to unblock offer page

---

## HL-002 — 2026-05-16 — SEO, MD-Slides, article stubs

**Session:** Tony + Claude (tjm-solutions-site roadmap + execution)

**What happened:**
- `docusaurus.config.ts` — `createSitemapItems` priority tiers (1.0/0.8/0.6/0.5); title separator `—` → `|`; multi-instance docs plugin for MD-Slides; navbar entry "MD-Slides" → "Projects"
- `src/pages/index.tsx`, `about.tsx`, `rates.tsx` — canonical tags, og:image:alt/width/height per page
- `src/pages/projects.tsx` (NEW) — /projects landing page; card-only layout; github link optional; MD-Slides card with scripting/LLM angle; extensible for future releases
- `src/components/ArticlesList/index.tsx` — default tag `'blog'` → `'all'` (3 sites); /articles now matches /articles?tag=all
- All 21 `blog/*.mdx` — tag taxonomy sweep: dropped `blog`, `paper`, `mcp`; absorbed `headless-commerce` → `digital-commerce`, `concurrency` → `architecture`; renamed `agent-commerce` → `agentic-commerce`; CLAUDE.md updated with canonical tag list
- 4 stub articles filled from Medium: `2021-03-14-why-do-they-call-them-apartments.mdx`, `2021-07-07-agility-and-the-headless-commerce-debate.mdx`, `2022-12-16-headless-commerce-advice-for-goal-hangers.mdx`, `2022-12-20-an-introduction-to-reactive-commerce.mdx`
- `mdslides-docs/` — 10 doc pages: `intro.md`, `installation.md`, `writing-slides.md`, `navigation.md` (new), `speaker-view.md`, `themes.md`, `configuration.md`, `validation.md`, `distribution.md` (new), `contributing.md`; updated for all new features (analytics, smart default, WCAG flags, all 6 templates, header/footer tokens)
- WQ-010 dropped (no testimonials available)
- All changes committed, pushed origin/main, deployed to gh-pages → live at www.tjm.solutions

**Decisions made:** none (DR table still empty)

**Harvest candidates:** Projects page pattern (optional github link, card-only, extensible) — reusable for any TJM project landing page

**Open items carried forward:**
- WQ-013 [Proposed]: Rates page update — align to rate card, add Strategy tier ($350/$400 remote/on-site), add remote/on-site distinction throughout, update JSON-LD serviceSchema
- WQ-014 [Proposed]: Article og:type + BlogPosting JSON-LD via BlogPostPage swizzle
- WQ-011 [Proposed]: Automated link-check CI
- WQ-002: Complete remaining FP series parts (Tony's writing)
- WQ-005/006/007: Service card enhancements — blocked on PDR-001 (≥3 battle-tested offers)
- WQ-003: Remove workshops card — blocked on WQ-005/006/007
- WQ-009 [Proposed]: Individual offer detail pages — blocked on WQ-005/006/007

**Next owner:** any — `/next` to pick up WQ-013 (rates page, unblocked) or WQ-014 (article JSON-LD, unblocked)

---

## HL-001 — 2026-05-01 — Org rails applied

**Session:** Tony + Claude (TJMSolns org rails pass — WQ-P4-006)

**What happened:**
- Created `.claude/skills/` with all 8 canonical skills: next, status, handoff, decide, groom, health, retro, audit
- Created `.claude/hooks/session-start.sh` and `session-stop.sh` (chmod +x)
- Updated `.claude/settings.json` to add SessionStart hook (kept existing PreToolUse typecheck + Stop wcag reminder)
- Created `docs/agents/` with CONTEXT-KERNEL.md, WORK-QUEUE.md, HANDOFF-LEDGER.md, DECISION-REGISTER.md
- Created `docs/governance/ADR/`, `docs/governance/POL/`, `docs/governance/PDR/`

**Decisions made:** none

**Open items carried forward:**
- WQ-001: Fill in 4 stub pre-2026 articles
- WQ-002: Complete remaining FP series parts

**Next owner:** Tony — run `/status` to verify, `/next` to start working

---
