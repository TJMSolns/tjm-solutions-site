---
sidebar_position: 3
title: Writing Slides
---

# Writing Slides

## File format

A slide deck is a single Markdown file named `DECK_NAME.md`. Slides are separated by `---`. Each slide opens with a frontmatter block declaring its template.

```markdown
---
template: title
---

# My Talk Title

## A concise subtitle

**Author Name**

---
template: content
---

## First Section

What you want to say, kept to the point.

Key ideas:
- One idea per bullet
- Short phrases, not sentences
- Three to five bullets is plenty
```

Render it:

```bash
mdslides render my-talk --theme dark
```

Output: `my-talk/index.html` (audience view) and `my-talk/speaker.html` (presenter view).

## Templates

### `title`

The opening slide of a deck.

```markdown
---
template: title
---

# Main Title

## Optional subtitle

**Optional author**
```

**Constraints:** title max 2 lines; subtitle max 2 lines; author max 80 characters.

### `content`

The standard slide for body content.

```markdown
---
template: content
---

## Slide Heading

Body content: Markdown, lists, code blocks, images.
```

**Constraints:** heading max 80 characters; body max 12 lines, max 150 words.

## Keyboard navigation

| Key | Action |
|-----|--------|
| `→` or `Space` | Next slide |
| `←` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `S` | Open speaker view |

## Speaker notes

Add notes to any slide with an HTML comment:

```markdown
<!-- Speaker notes: The key point here is X. Don't forget to mention Y. -->
```

Notes appear only in speaker view — press `S` during the presentation. See [Speaker View](./speaker-view) for details.

## Code blocks

Fenced code blocks with language hints get syntax highlighting:

````markdown
```scala
case class Slide(id: SlideId, template: Template, slots: Map[SlotName, SlotContent])
```
````
