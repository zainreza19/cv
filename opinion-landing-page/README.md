# Opinion — Waitlist Landing Page

A premium, single-page waitlist landing page for **Opinion** ("Opinion Rooms") —
a discussion platform that brings together real people, verified experts and
AI-powered analysis to help people understand complex questions.

**Positioning:** Get better answers from real people, not just AI.
**Repeat phrase:** Real people. Verified experts. AI-organised insight.

## Structure

- `index.html` — full one-page site (hero, problem, solution, how it works,
  audience value, contribution quality, product preview, use cases, waitlist
  form, footer)
- `styles.css` — brand palette, typography and all component/layout styles
- `script.js` — mobile nav, scroll reveal animation, waitlist form handling

## Brand

"Ink & Ember" palette — a warm near-black instead of corporate navy, and a
vivid ember accent instead of the common gold/blue SaaS pairing. (CSS
variable names in `styles.css` keep their original labels — `--navy`,
`--gold`, etc. — for continuity; only the hex values changed.)

| Token | Hex | Use |
|---|---|---|
| Ink | `#17130F` | Headings, header/footer, dark sections |
| Paper | `#F6F1E4` | Page background |
| Ember | `#E2572B` | Primary CTA, key accents |
| Cobalt | `#2F5DE3` | AI-related UI, links |
| Moss | `#4F7942` | Consensus / agreement |
| Ochre | `#B9862E` | Disagreement / debate |

Fonts — deliberately **not** Google Fonts, sourced from a different type
library so the page doesn't share a font stack with every other AI/SaaS
site:
- **Boska** (display/headings, via [Fontshare](https://fontshare.com)) — an
  elegant, expressive serif for editorial warmth and personality
- **JetBrains Mono** (eyebrows, badges, nav, step numbers, via
  [Fontsource](https://fontsource.org) on jsDelivr) — a technical
  counterweight to the serif
- **General Sans** (body, via Fontshare) — a clean modern sans, an
  alternative to Inter

## Personality & icon system

To keep this from reading as another templated AI-SaaS page:

- Every generic "everyone's icon library" glyph (the Heroicons-style
  check-circle, sparkle/star, person, shield and search icons that show up
  on nearly every Tailwind/shadcn site) was swapped for a custom-drawn
  equivalent: a rotated diamond-check, a hand-drawn asterisk/spark, a
  three-dot "people" cluster, an elongated badge mark, and a hand-drawn
  question mark
- Custom two-tone SVG illustrations for the problem and audience cards
  (megaphone, hollow speech bubble, buried stack; people cluster, expert
  seal, org bars)
- A subtle CSS/SVG paper-grain overlay across the whole page
- A scrolling marquee ticker of example questions
- A diagonal cut into the "How it works" section instead of a straight edge
- Soft blurred CSS blobs and a rotated "Now building" sticker behind the
  hero mockup
- A bold italic pull-quote breaker between the audience and contribution
  quality sections
- Rotated "stamped" badges and cards that lift/tilt slightly on hover

**Note on the font CDNs:** Fontshare and jsDelivr are both reliable, widely
used public services, but they were not reachable for visual verification
from this sandboxed build environment (only fonts.googleapis.com was
allowed through its network policy) — the fallback stacks (`serif`,
`sans-serif`, `monospace` system fonts) render correctly either way, so the
page never breaks, but do a quick visual check once it's live to confirm
Boska/General Sans/JetBrains Mono are the faces you see.

## Waitlist form

The form (`#waitlistForm` in `index.html`) currently has **no backend**:
submissions are validated client-side and saved to `localStorage` for demo
purposes, then a success state is shown. To collect real signups, wire the
`submit` handler in `script.js` to an API endpoint or a form service
(e.g. Formspree, Airtable, a Supabase/Firebase function).

## Running locally

No build step — it's static HTML/CSS/JS. Open `index.html` directly in a
browser, or serve the folder:

```bash
cd opinion-landing-page
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
