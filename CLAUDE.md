# FHG Builders — Claude Project Brief
> Paste this file at the start of every Claude session. Keep it updated after each sprint.

---

## Repo & Deployment

| Item | Value |
|------|-------|
| GitHub repo | `github.com/bhanlonFHG/Site` |
| GitHub user | `bhanlonFHG` |
| Deploy platform | Netlify (auto-deploys from `main` branch) |
| Version control tool | GitHub Desktop |
| Live URL | *(add Netlify URL here)* |

---

## Tech Stack

- **Plain HTML / CSS / Vanilla JS** — no framework, no build step
- Files deploy as-is; what you commit is what goes live
- No package.json, no bundler, no compilation required

---

## Brand Tokens

| Token | Value |
|-------|-------|
| Background | `#F1F1F0` |
| Accent (steel blue) | `#1E3A4A` |
| Gold / bronze | `#A07840` |
| Text dark | `#1a1a18` |
| Text mid | *(check main.css for `--c-text-mid`)* |
| Display font | Barlow Condensed (Google Fonts) — weights 300, 400, 500, 600 |
| Body font | DM Sans (Google Fonts) — weights 300, 400, 500; italic 300 |

---

## File Structure

```
Site/
├── CLAUDE.md                        ← This file
├── .gitignore                       ← Excludes .DS_Store files
├── README.md
├── index.html                       ← Homepage (Residential-weighted)
├── portfolio.html                   ← Full portfolio page
│
├── css/
│   ├── main.css                     ← Global styles, brand tokens, all shared components
│   └── portfolio.css                ← Portfolio page-specific styles
│
├── js/
│   ├── main.js                      ← Nav, hero slider, scroll animations, inquiry form
│   ├── portfolio.js                 ← Portfolio page logic
│   └── gallery-manifest.json        ← Project gallery data (images + metadata)
│
└── images/
    ├── hero/                        ← Full-bleed hero slider images
    │   ├── hero-cherry.jpg
    │   ├── hero-kerr.jpg
    │   ├── hero-long.jpg
    │   └── hero-steele.jpg
    └── residential/                 ← All residential project imagery
        ├── cover-*.jpg              ← Portfolio card thumbnails (11 projects)
        ├── portfolio-hero-cherry.jpg ← Large hero image for portfolio section
        └── gallery-*/               ← Full image galleries by project name
            ├── gallery-arvada/      (34 images)
            ├── gallery-cherry/      (15 images)
            ├── gallery-denver_kb/   (13 images)
            ├── gallery-duke/        (6 images)
            ├── gallery-hartline/    (2 images)
            ├── gallery-kampen/      (2 images)
            ├── gallery-kerr/        (26 images)
            ├── gallery-locust/      (5 images)
            ├── gallery-long/        (16 images)
            ├── gallery-saddle/      (6 images)
            └── gallery-steele/      (6 images)
```

**Pages not yet built** (next phases):
```
pages/
├── residential.html
├── commercial.html
├── design-consulting.html
└── development.html
```

---

## Key URLs & Credentials

| Item | Value |
|------|-------|
| Calendly | `https://calendly.com/bhanlon-fhgbuilders/consultation` |
| Primary email | bhanlon@fhgbuilders.com |
| Secondary email | jsteinert@fhgbuilders.com |
| Primary phone | 719-237-4448 |
| Secondary phone | 303-517-8534 |

---

## Current Page Inventory

### `index.html` — Homepage
Sections in order:
1. **Nav** — Logo (inline SVG), links to 5 destinations, "Start Your Project" CTA, mobile hamburger
2. **Hero** — Full-bleed image slider (4 slides: Long, Steele, Kerr, Cherry). Auto-advances with dot indicators and project label
3. **Brand Statement** — Two-column: copy + stats grid (15+ yrs experience, $150K–$10M range, 20+ projects, 1 dedicated lead)
4. **Services** — 3-card grid: Custom Home Builds, Whole-Home Renovations, Additions & Expansions
5. **Portfolio** — Hero project (Cherry Hills) + 4-up grid (Kerr, Long, Steele, Arvada) + "View More" link to portfolio.html
6. **Process** — 4-step: Vision & Proposal → Design & Permitting → Construction → Handoff & First-Year Support
7. **Testimonial** — Placeholder quote (real testimonial needed)
8. **Inquiry** — Two-column: Calendly inline widget (left) + contact form (right)
9. **Footer** — 4-column: Brand/address, Services nav, Contact info, Start a Project links

### `portfolio.html` — Portfolio Page
*(Add description of sections once reviewed)*

---

## The Four Business Lines

| # | Line | Target Audience | Status |
|---|------|----------------|--------|
| 1 | FHG Builders — Residential GC | High-net-worth homeowners, Denver metro | Homepage built ✓ |
| 2 | FHG Builders — Commercial Renovation GC | Business owners, property managers, commercial tenants | Not started |
| 3 | FHG Builders — Design & Consulting | Residential + commercial clients needing advisory/design | Not started |
| 4 | FHG Builders — Development | Investors, capital partners, institutional buyers | Not started |

---

## Brand & Copy Rules

- **Tagline system (two parts, used together):**
  - Line 1: *"Standards Raised."* — leads on Residential and Design pages
  - Line 2: *"Construction Shouldn't Be Hard."* — leads on Commercial and Development pages
- **Tone:** Confident, direct, professional. Not corporate-stiff, not contractor-casual.
- **Never write:** Generic contractor copy ("we take pride in our work," "no job too big or too small")
- **Photography first:** No stock photography. Flag any section needing images before writing placeholder content.
- **Positioning:** Premium to luxury. Competes on craft, design intelligence, and reliability — not price.
- **Geography:** Denver metro market. Luxury residential is the flagship credential.

---

## Technical Rules for Claude

1. **Fetch before editing** — always pull the current file from GitHub before making changes; never edit from memory
2. **Use Python read/write scripts** for HTML/CSS edits — more reliable than str_replace on multi-line blocks
3. **Duplicate script injection risk** — strip all existing instances of a script block via regex before reinserting; use distinct JS variable names (e.g., `heroSlides` not `slides`)
4. **One file per task** — deliver one complete file per session; don't split changes across multiple partial files
5. **No placeholder images** — if a section needs photography that doesn't exist yet, flag it and pause
6. **Component consistency** — nav and footer HTML must stay identical across all pages; update CLAUDE.md when either changes
7. **Mobile first** — every component must be fully responsive; test breakpoints at 375px, 768px, 1280px

---

## Key Collaborators

| Name | Role | Contact |
|------|------|---------|
| Brent Hanlon | Principal / Owner | bhanlon@fhgbuilders.com |
| Jesse Steinert | Key Collaborator | jsteinert@fhgbuilders.com |

---

## Session Log

| Date | What Was Built | Status |
|------|---------------|--------|
| *(session 1)* | Homepage (index.html) — all 9 sections | Complete ✓ |
| *(session 2)* | portfolio.html | Complete ✓ |
| *(today)* | CLAUDE.md + .gitignore created | Complete ✓ |

> **Update this log at the end of every session.** One line per session — what was built, what's done, what's pending.

---

## Open Items / Known Issues

- [ ] Real testimonial needed to replace placeholder in index.html §6
- [ ] `pages/` folder and business line pages not yet built
- [ ] `images/commercial/`, `images/design/`, `images/development/` folders needed when those lines are built
- [ ] Footer copyright year shows 2025 — update to current year
- [ ] Privacy Policy and Terms pages linked in footer but not built
- [ ] Netlify live URL not yet recorded in this file
- [ ] Legal LLC names for footer disclosure not confirmed (currently: "FHG Builders, LLC")
