#!/usr/bin/env bash
# Remind to /handoff if there are in_progress items

QUEUE="docs/agents/WORK-QUEUE.md"

if [ -f "$QUEUE" ] && grep -q "in_progress" "$QUEUE" 2>/dev/null; then
  COUNT=$(grep -c "in_progress" "$QUEUE" 2>/dev/null || echo "some")
  echo "⚠  You have $COUNT in_progress item(s). Run /handoff before closing."
fi
