#!/usr/bin/env bash
# Session orientation banner for tjm-solutions-site

CONTEXT="docs/agents/CONTEXT-KERNEL.md"
QUEUE="docs/agents/WORK-QUEUE.md"
LEDGER="docs/agents/HANDOFF-LEDGER.md"
ESCALATIONS="docs/agents/ESCALATIONS.md"

# Extract current phase
if [ -f "$CONTEXT" ]; then
  PHASE=$(sed -n '/Current Phase/,/^##/p' "$CONTEXT" 2>/dev/null \
    | grep -v "^##\|^$\|Current Phase" | head -1 \
    | sed 's/\*\*//g' | xargs | cut -c1-45)
  [ -z "$PHASE" ] && PHASE="(see CONTEXT-KERNEL)"
else
  PHASE="(CONTEXT-KERNEL missing)"
fi

# Count in_progress items
if [ -f "$QUEUE" ]; then
  ACTIVE=$(grep -c "in_progress" "$QUEUE" 2>/dev/null)
else
  ACTIVE="?"
fi

# Get last handoff
if [ -f "$LEDGER" ]; then
  LAST_HL=$(grep -m1 "^## HL-" "$LEDGER" 2>/dev/null | sed 's/^## //' | cut -c1-50)
  [ -z "$LAST_HL" ] && LAST_HL="(none yet)"
else
  LAST_HL="(HANDOFF-LEDGER missing)"
fi

if [ -f "$ESCALATIONS" ]; then
  read -r ESC_TOTAL ESC_OPEN <<< "$(python3 .claude/hooks/count-escalations.py "$ESCALATIONS" 2>/dev/null)"
  ESC_OPEN=${ESC_OPEN:-0}
else
  ESC_OPEN=0
fi

echo "┌─ tjm-solutions-site ──────────────────────────────────┐"
printf "│ Phase:       %-45s │\n" "$PHASE"
printf "│ Active:      %-45s │\n" "$ACTIVE item(s) in_progress"
printf "│ Last handoff: %-44s │\n" "$LAST_HL"
if [ "$ESC_OPEN" -gt 0 ]; then
  printf "│ ⚠ Escalations pending: %-36s │\n" "$ESC_OPEN — see docs/agents/ESCALATIONS.md"
fi
echo "│ Try /status for details, /next to start working          │"
echo "└──────────────────────────────────────────────────────────┘"
