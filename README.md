# Dezzimode — Starter Site

This repository contains a minimal static site for Dezzimode.

Files:
- index.html
- styles.css
- script.js

Run locally
1. Save these files in a folder (already in this repo).
2. In the folder, run a simple server:
   - python3 -m http.server 8000
   - Open http://localhost:8000 in your browser.

Deploy to GitHub Pages (free, already wired up in this repo)
1. A workflow at `.github/workflows/deploy.yml` builds and deploys the site to GitHub Pages on every push to `main`.
2. One-time setup (you need to do this in the GitHub UI — it can't be done from a commit): go to the repo's **Settings → Pages**, and under "Build and deployment" set **Source** to **GitHub Actions**.
3. Push/merge to `main` and the workflow will run automatically (check the **Actions** tab for status). This site will be live at `https://dezzi78.github.io/dezzimode-site/` once it succeeds.

Note: `dezzimode.studio` currently points elsewhere (a separate site built on Perplexity's app builder, at `dezzi.pplx.app`) — that is the real live site today, and it's working. This repo's GitHub Pages deploy is a separate, unbranded copy (useful as a backup or for iterating on a simpler static version), not connected to the custom domain. If you ever want `dezzimode.studio` to point at this repo's site instead, that means changing DNS at your registrar and adding a `CNAME` file here — ask and I'll walk through it.

Contact form
- The HTML form uses Formspree by default. To make it work:
  1. Sign up at https://formspree.io and create a form to get an endpoint.
  2. Replace the action URL in index.html with the endpoint Formspree gives you.

E-commerce options (low-cost to start)
- Ecwid has a free plan for small catalogs and provides an embed snippet you can paste into the site.
- PayPal or Stripe Checkout buttons work for a few products.
- When you want a full store admin, we can migrate to WooCommerce or a hosted platform.

Current state (as of this writing)
- A Netlify site called "dezzimode" is already connected to this repo and deploys previews on every PR (it appears to be password-protected — `dezzimode.netlify.app` returns 401).
- The custom domain `dezzimode.studio` does not point at Netlify or at this repo's GitHub Pages deploy — it redirects to a separately built site at `dezzi.pplx.app`, and that is the real live site today.
- This repo's `index.html`/`styles.css`/`script.js` are a simpler starter site, not currently reachable from the custom domain.

Next steps I can take for you
1) If the Netlify site is meant to be the real deploy target, I can help you remove its password protection or investigate why it's gated.
2) I can show how to transfer your domain from Squarespace to Namecheap or Google Domains (you have the transfer codes). Tell me which registrar you prefer.
3) If you want this repo's site to become the real `dezzimode.studio` site (replacing the Perplexity-built one), tell me and I'll wire up the DNS/CNAME.

If anything is incorrect or you want changes to the site content, tell me and I will update the files.