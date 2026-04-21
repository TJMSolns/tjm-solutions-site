# Reorganize Articles

Audit and improve the article corpus organization in `blog/`.

## Tasks

Run all of these, then present findings as a table. **Ask before making any edits.**

### 1. Tag consistency
List all articles and their tags. Check for:
- Inconsistent casing (e.g. `Functional-Programming` vs `functional-programming`)
- Near-synonyms (e.g. `commerce` vs `digital-commerce`, `AI` vs `ai`)
- Tags used only once that could be merged into an existing tag

### 2. Series completeness
Identify articles that appear to belong to a series based on:
- Title patterns (e.g. "Part N" in the title or opening line)
- Explicit subtitle markers like "— Part 4"

Check whether `series:` and `series_part:` frontmatter is present and correct.

### 3. Required frontmatter audit
Verify every article has ALL of:
- `title`
- `description` (non-empty)
- `date`
- `authors: [tony]`
- `tags` (at least one)
- `image`
- Canonical URL: either `canonical:` in frontmatter OR a `<head><link rel="canonical" ...></head>` block

### 4. Truncate marker
Confirm `<!-- truncate -->` appears in every article. Flag any missing it.

### 5. Stub articles
Identify any articles with minimal or placeholder body content (e.g. only `<!-- Add article content here -->`).

## Output format

Present results as a markdown table with columns: File | Issue | Suggested Fix

Ask which fixes to apply before making any changes.
