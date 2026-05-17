# FHG Builders — Website v1.0

Denver-based luxury construction and real estate firm. This repository contains the static website for the Residential GC and Portfolio pages.

## Pages

| File | Description |
|------|-------------|
| `index.html` | Residential GC landing page |
| `portfolio.html` | Full project portfolio with photo galleries |

## Structure

```
fhg-site/
├── index.html          # Residential page
├── portfolio.html      # Portfolio landing + project galleries
├── css/
│   ├── main.css        # Shared styles (residential page)
│   └── portfolio.css   # Portfolio page styles
├── js/
│   ├── main.js         # Residential page scripts (nav, carousel, forms)
│   ├── portfolio.js    # Portfolio scripts + gallery manifest
│   └── gallery-manifest.json
└── images/
    ├── hero/           # 4 hero carousel photos
    └── residential/    # Cover photos + gallery folders per project
        ├── cover-*.jpg
        ├── portfolio-hero-cherry.jpg
        └── gallery-*/  # Per-project full galleries (01.jpg, 02.jpg...)
```

## Status

- [x] Residential GC page — complete
- [x] Portfolio landing page — complete  
- [x] Individual project galleries — complete
- [ ] Commercial Renovation page — in progress
- [ ] Design & Consulting page — pending
- [ ] Development page — pending
- [ ] About page — pending
- [ ] Homepage — pending

## To Do Before Launch

- [ ] Replace Calendly URL if needed: `https://calendly.com/bhanlon-fhgbuilders/consultation`
- [ ] Wire contact form to email endpoint (currently shows success state only)
- [ ] Add testimonial copy (lorem ipsum placeholder in place)
- [ ] Confirm LLC legal names for footer disclosure
- [ ] Add Google Analytics / tracking
- [ ] SEO meta tags review
- [ ] Mobile QA pass

## Viewing Locally

Open `index.html` directly in any browser. No build step required.

> **Note:** Images must be served from a web server (not `file://`) for the portfolio galleries to load correctly in some browsers due to CORS. Use VS Code Live Server, `python3 -m http.server`, or similar.

## Tech Stack

Plain HTML/CSS/JS — no framework, no build process. Intentionally kept simple for easy hand-off and review.

When ready to move to production, the plan is Next.js 14 + Tailwind CSS deployed on Vercel.

## Contacts

- Brent Hanlon — bhanlon@fhgbuilders.com — 719-237-4448  
- Jesse Steinert — jsteinert@fhgbuilders.com — 303-517-8534

© 2025 FHG Builders, LLC
