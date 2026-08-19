#!/usr/bin/env node
/**
 * WQ-057: dependency-vulnerability signal for a static site.
 *
 * `npm audit` counts every dependency, including build-only tooling
 * (webpack-dev-server, pa11y, puppeteer, ...) that never ships, and
 * framework runtime packages (@docusaurus/*, dompurify, mermaid, ...)
 * whose code is SUPPOSED to appear in the built bundle by design. For a
 * static site the meaningful question isn't "how many vulnerabilities
 * exist in node_modules", it's "did a package with no legitimate reason
 * to ship actually reach the built artifact".
 *
 * This script checks the build output for a curated list of packages
 * that are unambiguously build/dev/test-only, never legitimately part
 * of a static site's runtime bundle. It does NOT try to classify all of
 * npm audit's flagged packages generically: an earlier version matched
 * bare package names anywhere in build/, which produced false positives
 * from ordinary English words ("express", "ws", "uuid") in article prose
 * and from unrelated coincidental substrings ("qs" matching Prism's "Q#"
 * language alias, literally `alias:"qs"`). Precise module-reference-shaped
 * matching against JS-only files still isn't enough for framework
 * packages, since their code is expected to be there; the curated list
 * sidesteps that ambiguity entirely by only checking packages that have
 * no legitimate reason to appear at all.
 *
 * Usage: node scripts/check-shipped-vulns.js [--build-dir build]
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Packages with zero legitimate reason to appear in a Docusaurus static
// build: dev servers, browser-automation/testing tools, and their direct
// transitive plumbing. Named explicitly rather than derived, so a new
// audit finding against an actual runtime dependency doesn't silently
// start being ignored, and a genuinely build-only addition doesn't
// silently start being checked until someone adds it here.
const BUILD_ONLY_DENYLIST = [
  'webpack-dev-server',
  'puppeteer',
  'puppeteer-core',
  '@puppeteer/browsers',
  'pa11y',
  'basic-ftp',
  'extract-zip',
  'shell-quote',
  'sockjs',
  'websocket-driver',
  'express',
  'http-proxy-middleware',
  'launch-editor',
];

function parseArgs(argv) {
  const args = { buildDir: 'build' };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--build-dir') args.buildDir = argv[++i];
  }
  return args;
}

function getAuditVulnerablePackages() {
  let raw;
  try {
    raw = execSync('npm audit --json', { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
  } catch (err) {
    raw = err.stdout ? err.stdout.toString() : '';
  }
  if (!raw) {
    console.error('npm audit --json produced no output; cannot compute a signal.');
    process.exit(1);
  }
  let data;
  try {
    data = JSON.parse(raw);
  } catch (err) {
    console.error('npm audit --json output was not valid JSON:', err.message);
    process.exit(1);
  }
  const vulns = data.vulnerabilities || {};
  return { names: Object.keys(vulns), meta: data.metadata && data.metadata.vulnerabilities };
}

function walkFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkFiles(full));
    else out.push(full);
  }
  return out;
}

function findShippedMatches(buildDir, packageNames) {
  if (!fs.existsSync(buildDir)) {
    console.error(`Build directory '${buildDir}' does not exist. Run 'npm run build' first.`);
    process.exit(1);
  }
  const files = walkFiles(buildDir).filter((f) => f.endsWith('.js'));
  const matches = {};
  for (const pkg of packageNames) {
    const escaped = pkg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(`node_modules/${escaped}/|["'\`]${escaped}["'\`/]`);
    const hits = files.filter((f) => pattern.test(fs.readFileSync(f, 'utf8')));
    if (hits.length) matches[pkg] = hits;
  }
  return matches;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const { names, meta } = getAuditVulnerablePackages();

  console.log('=== npm audit summary (informational, not a gate) ===');
  if (meta) {
    console.log(
      `  info: ${meta.info || 0}  low: ${meta.low || 0}  moderate: ${meta.moderate || 0}  ` +
        `high: ${meta.high || 0}  critical: ${meta.critical || 0}  total: ${meta.total || 0}`
    );
  }
  console.log(`  ${names.length} package(s) flagged total (includes framework runtime deps that legitimately ship, and build-only tooling that shouldn't).`);
  console.log('');

  const toCheck = names.filter((n) => BUILD_ONLY_DENYLIST.includes(n));
  console.log(`=== Checking ${args.buildDir}/ for ${toCheck.length} flagged build-only package(s) (the real gate) ===`);
  if (toCheck.length === 0) {
    console.log('None of the currently-flagged packages are on the build-only denylist. Nothing to check.');
    process.exit(0);
  }
  console.log(`  Checking: ${toCheck.join(', ')}`);

  const matches = findShippedMatches(args.buildDir, toCheck);
  const matchedNames = Object.keys(matches);

  if (matchedNames.length === 0) {
    console.log(`Clean: none of the ${toCheck.length} flagged build-only package(s) appear in ${args.buildDir}/.`);
    process.exit(0);
  }

  console.error(`FAIL: ${matchedNames.length} build-only package(s), with no legitimate reason to ship, found in the build output:`);
  for (const pkg of matchedNames) {
    console.error(`  - ${pkg}: ${matches[pkg].length} file(s), e.g. ${matches[pkg][0]}`);
  }
  process.exit(1);
}

main();
