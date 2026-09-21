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

Deploy to GitHub Pages (current setup — no third-party host)
The repo builds and deploys itself via `.github/workflows/deploy-pages.yml` on every
push to `main`. It stages **only** `index.html`, `styles.css`, and `script.js` into the
published output — `studio.html` and `archive/` are never copied into the deploy, so
they stay out of the live site even though the repo itself is public.

One-time setup (in the GitHub repo, not here):
1. Settings → Pages → Build and deployment → Source: **GitHub Actions** (not "Deploy from a branch").
2. Settings → Pages → Custom domain → enter `dezzimode.studio` → Save. (The workflow
   also writes a `CNAME` file into the deploy automatically, so this should already show
   up as verified after the first successful run.)
3. Point DNS at GitHub Pages instead of Netlify, at your domain's DNS provider:
   - Apex (`dezzimode.studio`): four **A** records to `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`.
   - `www` subdomain (optional): **CNAME** to `<your-github-username>.github.io`.
4. Once DNS propagates, check "Enforce HTTPS" under Settings → Pages — GitHub issues the
   certificate automatically.
5. Disconnect/delete the Netlify site once Pages is confirmed live, so nothing is still
   silently building there.

This only goes live once the redesign branch is merged into `main` — the workflow does
nothing until then.

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