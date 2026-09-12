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

| Token | Hex | Use |
|---|---|---|
| Deep Navy | `#111827` | Headings, header/footer, dark sections |
| Warm Ivory | `#F8F4EC` | Page background |
| Insight Gold | `#D6A84F` | Primary CTA, expert/value accents |
| Calm Blue | `#3B82F6` | AI-related UI, links |
| Soft Green | `#6BAA75` | Consensus / agreement |
| Muted Amber | `#C9822B` | Disagreement / debate |

Fonts: **Manrope** (headings), **Inter** (body) — loaded from Google Fonts.

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
