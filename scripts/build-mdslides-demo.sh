#!/usr/bin/env bash
# Build the MD-Slides live demo (static/mdslides/demo/) from a *released* MD-Slides:
# downloads md-slides.jar and feature-tour.md from the GitHub release and renders the tour.
#
# Usage: scripts/build-mdslides-demo.sh [TAG]     (default: latest release)
# Needs: java, curl; mmdc (mermaid-cli) to pre-render the tour's diagram.
set -euo pipefail

TAG="${1:-latest}"
REPO="https://github.com/TJMSolns/MD-Slides/releases"
if [ "$TAG" = "latest" ]; then BASE="$REPO/latest/download"; else BASE="$REPO/download/$TAG"; fi

SITE_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$SITE_ROOT/static/mdslides/demo"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

echo "Downloading MD-Slides ($TAG)..."
curl -fsSL "$BASE/md-slides.jar" -o "$WORK/md-slides.jar"
curl -fsSL "$BASE/feature-tour.md" -o "$WORK/feature-tour.md"
VERSION="$(java -jar "$WORK/md-slides.jar" --version)"
echo "  $VERSION"

command -v mmdc >/dev/null || echo "⚠ mmdc not found: the tour's diagram will show its source instead of a chart"

# Render with an isolated home so no personal global config leaks into the demo
mkdir -p "$WORK/home"
(cd "$WORK" && java -Duser.home="$WORK/home" -jar md-slides.jar render feature-tour --theme dark)

rm -rf "$DEST"
mkdir -p "$DEST"
cp -R "$WORK/feature-tour/." "$DEST/"
echo "$VERSION" > "$DEST/VERSION.txt"
echo "✓ Demo written to static/mdslides/demo/ ($VERSION)"
