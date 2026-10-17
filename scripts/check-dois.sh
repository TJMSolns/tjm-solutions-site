#!/usr/bin/env bash
# Check that every DOI linked from the built site exists.
#
# The link checker can't verify DOIs by following them: doi.org redirects to the publisher, and most publishers
# (ACM, IEEE, Wiley, Emerald, ...) answer automated requests with 403 or 202. Instead this asks the DOI registry
# itself (the doi.org handle API) whether each DOI is registered: 200 means it exists, 404 means it doesn't.
#
# Usage: scripts/check-dois.sh [build-dir]     (default: build)
set -euo pipefail

BUILD="${1:-build}"
mapfile -t DOIS < <(grep -rhoE 'https?://(dx\.)?doi\.org/10\.[^"<> ]+' "$BUILD" --include='*.html' \
  | sed -E 's#https?://(dx\.)?doi\.org/##; s/[.,;)]+$//' | sort -u)

if [ "${#DOIS[@]}" -eq 0 ]; then echo "No DOI links found in $BUILD"; exit 0; fi

failed=0
for doi in "${DOIS[@]}"; do
  status=000
  for attempt in 1 2 3; do
    status=$(curl -s -o /dev/null -w '%{http_code}' --max-time 20 "https://doi.org/api/handles/$doi" || echo 000)
    case "$status" in 200|404) break ;; esac
    sleep $((attempt * 2))
  done
  if [ "$status" != 200 ]; then
    echo "✗ $doi (registry answered $status)"
    failed=$((failed + 1))
  fi
done

echo "${#DOIS[@]} DOIs checked, $failed not found"
[ "$failed" -eq 0 ]
