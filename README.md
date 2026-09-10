# Grow Consultants — Website

Marketing site for M/s Grow Consultants, a Delhi-registered partnership firm
providing financial structuring, commercial advisory and transaction
facilitation for hospitality, F&B and live entertainment businesses in India.

## Stack

- React 19 + Vite 8
- Tailwind CSS 3
- React Router 7 (multi-page, client-side routing)

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint     # oxlint
```

## Configuration

Contact details are read from environment variables at build time. Because they
are `VITE_`-prefixed they are compiled into the public client bundle — put only
information intended to be public here.

| Variable | Purpose |
| --- | --- |
| `VITE_CONTACT_EMAIL` | Address shown on the site and used for `mailto:` links |
| `VITE_CONTACT_PHONE_DISPLAY` | Phone number as displayed to visitors |
| `VITE_WHATSAPP_NUMBER` | WhatsApp number for `wa.me` links — country code, digits only, no `+` or spaces |

Copy `.env.example` to `.env` and fill in the real values before deploying.

## Structure

```
src/
  pages/        One component per route
  components/   Sections and shared UI
  data/content.js   All site copy and the platform list
  lib/          Small helpers
public/logos/   Platform brand marks used by the marquee
```

All written content lives in `src/data/content.js`. Edit copy there rather than
in the components.

## Routes

`/` · `/about` · `/what-we-do` · `/who-we-serve` · `/how-it-works` · `/why-us` · `/contact`

Client-side routing needs the host to serve `index.html` for unknown paths.
`vercel.json` covers Vercel; `public/_redirects` covers Netlify. On other hosts,
configure the equivalent SPA fallback or deep links will 404 on refresh.

## Platform logos

`src/data/content.js` maps each platform to a file in `public/logos`. Entries
with `logo: null` render a monogram tile instead; drop a file in `public/logos`
and set the path to replace it.

`wordmark: true` means the artwork already spells out the brand name, so the
marquee shows it alone. `wordmark: false` pairs a glyph-only mark with the
platform name from `name`.

Provenance of the current files, and the changes made to each:

| File | Source | Adjustment |
| --- | --- | --- |
| `district.svg` | district.in | Recoloured from `#F2EBE3` to navy |
| `bookmyshow.png` | brandlogos.net | Transparent margins trimmed |
| `swiggy-scenes.png` | dineout-media-assets.swiggy.com | None |
| `magicpin.png` | magicpin.in | Recoloured from white to navy, alpha preserved |
| `eazydiner.svg` | eazydiner.com | White backing rectangle removed |
| `skillbox.svg` | skillboxes.com | Recoloured from `#FFFFFF` to navy |
| `paytm-insider.png` | brandlogos.net | Transparent margins trimmed |

Several of these ship as light artwork intended for dark headers and were
recoloured to navy so they read on the ivory background. They are the same
marks in a single-colour treatment. If the client obtains official dark-variant
files, replace them and drop the recolouring note.

Platform names and marks are presented as illustrative examples of the kind of
third-party ticketing and distribution platforms the firm works with. They do
not indicate an exclusive partnership. Keep the disclaimer beneath the marquee.

## Compliance notes

Grow Consultants is an independent consultant and transaction facilitator — not
a lender. Copy must not imply that the firm provides credit, guarantees
approval, or sets platform terms. The clarification notice on the What We Do
page is required by the client content brief and should not be removed.
