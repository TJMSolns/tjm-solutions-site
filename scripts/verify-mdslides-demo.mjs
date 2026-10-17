// Browser check for an MD-Slides deck (normally the live demo, the rendered feature tour).
// Exercises the features listed as "Browser check" in MD-Slides' docs/FEATURES.md.
//
// Usage: node scripts/verify-mdslides-demo.mjs <deck-url> [md-slides.jar]
//   deck-url: folder URL of a rendered deck, e.g. http://127.0.0.1:3000/mdslides/demo
//   jar:      if given, the saved session log is checked with `java -jar <jar> report --log`
// Exits non-zero if any check fails.
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readdirSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';

const require = createRequire(import.meta.url);
const puppeteer = require(require.resolve('puppeteer', { paths: [path.resolve('node_modules/pa11y')] }));

const [base, jar] = process.argv.slice(2).map((a, i) => (i === 0 ? a.replace(/\/$/, '') : a));
if (!base) { console.error('usage: verify-mdslides-demo.mjs <deck-url> [md-slides.jar]'); process.exit(2); }

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const results = [];
const check = (name, ok, detail = '') => { results.push({ name, ok, detail }); console.log(`${ok ? '✓' : '✗'} ${name}${detail ? ` — ${detail}` : ''}`); };

const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
try {
  const downloads = mkdtempSync(path.join(tmpdir(), 'mdslides-log-'));
  const main = await browser.newPage();
  const errors = [];
  main.on('pageerror', (e) => errors.push(e.message));
  await (await main.target().createCDPSession()).send('Browser.setDownloadBehavior', { behavior: 'allow', downloadPath: downloads });
  await main.setViewport({ width: 1280, height: 800 });
  await main.goto(`${base}/index.html`, { waitUntil: 'networkidle0' });
  const counter = async (p) => (await p.$eval('#slide-counter', (e) => e.textContent.trim())).replace(/^Slide /, '');
  const total = await main.$$eval('.slide', (s) => s.length);
  check('deck loads', total > 0, `${total} slides`);
  const missing = await main.evaluate(() => ['MDSlidesSync', 'MDSlidesHistoryLogger', 'MDSlidesBreakMode'].filter((g) => !window[g]));
  check('support scripts loaded', missing.length === 0, missing.length ? `missing: ${missing.join(', ')} (serve the deck from a URL ending in /)` : '');
  check('page title is the deck title', (await main.title()) !== 'MDSlides Presentation', await main.title());

  // Keyboard and clicker keys
  await main.keyboard.press('ArrowRight'); await main.keyboard.press('PageDown'); await sleep(200);
  check('keyboard and clicker keys navigate', (await counter(main)) === `3 / ${total}`, await counter(main));
  check('URL tracks the slide', main.url().endsWith('#3'), main.url());

  // Speaker view, both directions
  const speaker = await browser.newPage();
  speaker.on('pageerror', (e) => errors.push(`speaker: ${e.message}`));
  await speaker.goto(`${base}/speaker.html?slide=2`, { waitUntil: 'networkidle0' });
  await main.bringToFront(); await main.keyboard.press('ArrowRight'); await sleep(600);
  check('speaker view follows the presentation', (await counter(speaker)) === `4 / ${total}`, await counter(speaker));
  await speaker.bringToFront(); await speaker.keyboard.press('ArrowRight'); await sleep(600);
  check('presentation follows speaker view', (await counter(main)) === `5 / ${total}`, await counter(main));
  await speaker.close();
  await main.bringToFront();

  // Goto by number, history back, buttons
  await main.keyboard.press('g'); await sleep(200);
  const focused = await main.evaluate(() => document.activeElement && document.activeElement.id);
  await main.keyboard.type('10'); await main.keyboard.press('Enter'); await sleep(300);
  check('goto: focus in the number field, type and Enter', focused === 'goto-number' && (await counter(main)) === `10 / ${total}`, `${focused}, ${await counter(main)}`);
  await main.keyboard.press('p'); await sleep(300);
  check('history back returns to the previous slide', (await counter(main)) === `5 / ${total}`, await counter(main));
  await main.click('#nav-next'); await sleep(200);
  check('next button', (await counter(main)) === `6 / ${total}`, await counter(main));
  await main.click('#slide-counter'); await sleep(200);
  const gotoOpen = await main.evaluate(() => { const m = document.querySelector('.goto-modal'); return !!m && getComputedStyle(m).display !== 'none'; });
  await main.keyboard.press('Escape'); await sleep(200);
  check('tapping the slide counter opens goto', gotoOpen);

  // Break mode
  await main.keyboard.press('b'); await sleep(300);
  const onBreak = await main.evaluate(() => !!(window.MDSlidesBreakMode && window.MDSlidesBreakMode.isBreakModeActive()));
  await main.keyboard.press('b'); await sleep(300);
  check('break mode toggles', onBreak);

  // Deep link
  await main.goto(`${base}/index.html#12`, { waitUntil: 'networkidle0' }); await sleep(300);
  check('#N opens slide N', (await counter(main)) === `12 / ${total}`, await counter(main));

  // Header/footer tokens: no unresolved {{...}} on any slide header or footer
  const unresolved = await main.$$eval('.slide-header, .slide-footer', (els) => els.map((e) => e.textContent).filter((t) => /\{\{\w+\}\}/.test(t)));
  check('header/footer tokens resolve', unresolved.length === 0, unresolved.slice(0, 2).join(' | '));

  // Fit: at phone and laptop sizes, no slide is wider than the screen
  for (const [w, h] of [[390, 844], [844, 390], [1280, 800]]) {
    await main.setViewport({ width: w, height: h, isMobile: w < 900, hasTouch: w < 900 });
    const overflowing = [];
    for (let i = 1; i <= total; i++) {
      await main.evaluate((n) => { location.hash = `#${n}`; }, i); await sleep(120);
      const wide = await main.evaluate(() => {
        const s = document.querySelector('.slide.active');
        return s ? s.scrollWidth > s.clientWidth + 2 : false;
      });
      if (wide) overflowing.push(i);
    }
    check(`every slide fits ${w}x${h}`, overflowing.length === 0, overflowing.length ? `overflowing: ${overflowing.join(', ')}` : '');
  }
  await main.setViewport({ width: 1280, height: 800 });

  // Session log: L saves it, and report reads it
  await main.goto(`${base}/index.html`, { waitUntil: 'networkidle0' });
  await main.keyboard.press('ArrowRight'); await main.keyboard.press('ArrowRight'); await sleep(200);
  await main.keyboard.press('l'); await sleep(1500);
  const saved = readdirSync(downloads).filter((f) => f.endsWith('.log.json'));
  check('L saves a session log', saved.length === 1, saved.join(', '));
  if (saved.length === 1) {
    const log = JSON.parse(readFileSync(path.join(downloads, saved[0]), 'utf8'));
    check('session log records slide changes', log.events.filter((e) => e.eventType === 'SlideChanged').length >= 2);
    if (jar) {
      const out = execFileSync('java', ['-jar', jar, 'report', log.deck, '--log', path.join(downloads, saved[0])], { encoding: 'utf8' });
      check('report reads the saved log', out.includes('Time per slide') && out.includes('Path'), out.split('\n')[3] || '');
    }
  }

  // Print / Save as PDF: one page per slide
  const pdfPath = path.join(downloads, 'deck.pdf');
  await main.pdf({ path: pdfPath, landscape: true });
  let pages;
  try {
    pages = Number(/Pages:\s+(\d+)/.exec(execFileSync('pdfinfo', [pdfPath], { encoding: 'utf8' }))[1]);
  } catch {
    pages = (readFileSync(pdfPath).toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length; // no pdfinfo
  }
  check('PDF has one page per slide', pages === total, `${pages} pages for ${total} slides`);

  check('no page errors', errors.length === 0, errors.slice(0, 3).join(' | '));

  // WCAG 2.1 AA on every slide and on speaker view
  const pa11y = require(path.resolve('node_modules/pa11y'));
  const urls = [...Array(total).keys()].map((i) => `${base}/index.html#${i + 1}`).concat([`${base}/speaker.html?slide=0`]);
  const failing = [];
  for (const url of urls) {
    const r = await pa11y(url, { standard: 'WCAG2AA', wait: 600, browser });
    const errs = r.issues.filter((i) => i.type === 'error');
    if (errs.length) failing.push(`${url.split('/').pop()}: ${errs[0].message.slice(0, 80)}`);
  }
  check(`WCAG 2.1 AA on all ${urls.length} pages`, failing.length === 0, failing.slice(0, 3).join(' | '));
} finally {
  await browser.close();
}

const failed = results.filter((r) => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} checks passed`);
process.exit(failed.length ? 1 : 0);
