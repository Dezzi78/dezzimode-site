# Dezzi Mode — Site

This repository contains the static site for **Dezzi Mode**, the
streetwear/merch label — styled with the brand's brutalist Void/Venom/Electric
palette (`#0D0D0D` / `#990000` / `#008080`).

Files:
- `index.html`, `styles.css`, `script.js` — the live public site
- `studio.html` — a separate, private internal production/pipeline tracking
  tool (Adobe/Figma pipelines, client CRM, etc.) — not part of the public
  site, not linked from it
- `archive/dezzis-designs-original-site/` — a snapshot of the original
  two-brand site (Dezzi's Designs studio-services + Dezzi Mode) that was
  previously live at `dezzisdesigns.studio`, kept for reference since the
  Dezzi's Designs half was dropped from this repo's live site
- studio.html — private production pipeline studio (see below)

## Dezzi Mode Production Pipeline Studio

`studio.html` is a standalone, single-file SPA (HTML5 + Tailwind CDN + vanilla JS) that
functions as a private command center for the Dezzi Mode brand: a combined design/watermark
canvas tool, apparel mockup previewer, Adobe & Figma pipeline tracker, web design/kanban
engine, Notion content gateway, client CRM, and operations/asset vault. It is fully
self-contained — no build step, no backend, no external accounts required.

All data (checklists, CRM records, pipeline logs, snippets, ledger entries, kanban state)
is persisted to the browser's `localStorage` only. Nothing is sent anywhere. Use the
"Export Full Vault (JSON)" / "Import Vault" controls in the Operations & Assets tab to
back up or move data between browsers/devices.

Open it directly:
```
python3 -m http.server 8000
# then visit http://localhost:8000/studio.html
```
Or just double-click `studio.html` to open it in a browser (some features like drag/drop
image upload work best served over http/https rather than file://).

Run locally
1. Save these files in a folder (already in this repo).
2. In the folder, run a simple server:
   - python3 -m http.server 8000
   - Open http://localhost:8000 in your browser.

Deploy to Netlify (recommended, free)
1. Sign up at https://app.netlify.com using GitHub to connect your account.
2. New site → Import from Git → select this repository (Dezzi78/dezzimode-site) → Deploy site.
3. In Netlify: Site settings → Domain management → Add custom domain → enter dezzimode.studio and follow prompts.
4. Netlify will provide instructions for DNS records. Add the records at your domain provider (Squarespace or new registrar). Netlify will also enable HTTPS automatically.

Quick DNS notes for Netlify (if you keep the domain at Squarespace and can edit DNS there):
- For the apex (dezzimode.studio), add the A records Netlify shows (or use Netlify DNS).
- For the www subdomain, add a CNAME pointing to your Netlify site (example: yoursite.netlify.app).

Contact form
- Already wired up to Formspree (`https://formspree.io/f/xjybzyvg`) — both
  the "Get Notified" drop signup and the contact form submit there via AJAX
  (see `script.js`). Manage/view submissions from the Formspree dashboard.

E-commerce options (low-cost to start)
- Ecwid has a free plan for small catalogs and provides an embed snippet you can paste into the site.
- PayPal or Stripe Checkout buttons work for a few products.
- When you want a full store admin, we can migrate to WooCommerce or a hosted platform.

Next steps I can take for you
1) If you want, I can connect this repo to Netlify for you, but I will need you to sign in to Netlify and grant access to your GitHub account (or invite a Netlify team). If you prefer, I can give step-by-step instructions and screen-by-screen guidance.
2) I can show how to transfer your domain from Squarespace to Namecheap or Google Domains (you have the transfer codes). Tell me which registrar you prefer.

If anything is incorrect or you want changes to the site content, tell me and I will update the files.