# RS Travel SEO Audit & Action Plan

Domain: https://rstravelsjsr.com | Phone: +91 79798 77450 | Generated: Aug 2026

## Summary

On-page SEO is largely complete in code. The remaining leverage is **off-page / authority work that only you can do** (Phase 0 & Phase 3). No code change can substitute for real reviews and inbound links.

---

## What is Already Done (in code)

- **Duplicate-content cleanup vs sreetravels123** — content files now 47–65% unique (token-set similarity). Remaining high-similarity files are factual route/fare data and code components (not penalized).
- **Metadata for every page type** — titles/descriptions/keywords/canonicals for city hubs, service-in-city, fleet-in-city, outstation routes, local routes, and all blog posts.
- **38 blog posts** — fare guides with real ₹ data, car rental, local taxi, and vehicle guides, all internally linked from home/city pages.
- **Rich content blocks** — long-form guides, how-to-reach, corporate info, attractions, local-area lists, FAQ schema, Hindi content blocks + Hindi FAQs on city and route pages.
- **Thin-page control** — tier-3 city hubs, their service pages and fleet pages are `noindex`.
- **Technical fixes** — `www → non-www` redirect, fixed favicon/manifest icons, replaced broken image references, valid `sitemap.xml` (pinned 2026-08-03) and `robots.txt`, RSS… SVG fleet cards (corrupt `.webp` placeholders removed).
- **Verification**: `npx tsc --noEmit` and `npm run build` both pass (~1190 static pages).

---

## Phase 0 — Manual Local SEO (DO THIS FIRST, highest impact)

| Task | How | Impact |
|---|---|---|
| Google Business Profile | Claim/verify, set categories `Taxi service` + `Tour operator`, add phone, website, service area (all 16 cities), business hours 24/7 | Local Pack for "cab in Jamshedpur" etc. |
| Review generation | Ask every satisfied customer for a Google review. Target 100+ in 6 months. Reply to every review. | Local ranking + CTR. 2,800/4.8★ claims on site must match reality. |
| NAP consistency | Ensure name/address/phone identical on GBP, Facebook, Instagram, JustDial, Sulekha, IndiaMART, TradeIndia, TrueLane etc. | Trust + citations |
| Google Search Console | Verify domain, submit sitemap, monitor indexing/warnings after each deploy | Catch problems early |
| Bing Webmaster Tools | Submit sitemap (Bing uses your domain) | Free traffic |
| Maps / WhatsApp deep links | Keep `wa.me/917979877450` links live on GBP and profiles | Conversions |

---

## Phase 2 — Content Growth (ongoing)

- Add 2–3 new fare guides per month (e.g. `cab-fare-ranchi-to-patna`, `jamshedpur-to-gaya`).
- Add Hindi blog posts (`जमशेदपुर से रांची टैक्सी किराया`) — Hindi search is growing fast.
- Add destination guides for each nearbyAttractions entry (Dhalbhumgarh, Dimna Lake, etc.).
- Keep fares updated each year; update the pinned `sitemap.ts` dates.

---

## Phase 3 — Authority / Backlinks

- Guest posts / local news: hirea cab stories in Jharkhand tourism blogs, local newspapers.
- YouTube: short "route preview" videos linking to the site.
- Directories: JustDial, IndiaMART, TrueLane, travel portals.
- WhatsApp Business catalogue sharing → drives direct traffic (good for rankings signal).

---

## Ongoing Technical Checklist

- After each deploy: re-run `npm run build`, verify sitemap count, re-check Search Console.
- Re-run the similarity check vs `sreetravels123` when adding new templates.
- Never publish unreviewed template pages; keep `noindex` for any page with < 300 words of unique value.
- Replace the old Vercel OIDC token in `.env.local` (belongs to the old `sreetravels123` project) before future deploys.

---

## Verification Commands

```
npx tsc --noEmit
npm run build
```
