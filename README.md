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
4. A `CNAME` file in this repo is already set to `dezzimode.studio`, so once the DNS records below are added, GitHub Pages will serve this site at the custom domain instead of the `.github.io` URL.

Point `dezzimode.studio` at this site (replaces the current Perplexity-built site)
`dezzimode.studio` currently redirects to a separately built site at `dezzi.pplx.app`. To make this repo the real site instead, add these DNS records at your domain registrar (Squarespace, or wherever the domain lives):

- Apex domain (`dezzimode.studio`) — four `A` records pointing to GitHub Pages' IPs:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- `www` subdomain — a `CNAME` record pointing to `dezzi78.github.io`

After DNS propagates (can take a few minutes to a few hours) and the Pages source is set to GitHub Actions, check the repo's **Settings → Pages** page — it should show the custom domain verified with a green check, and you can optionally enable "Enforce HTTPS" there once available.

Contact form
- The HTML form uses Formspree by default. To make it work:
  1. Sign up at https://formspree.io and create a form to get an endpoint.
  2. Replace the action URL in index.html with the endpoint Formspree gives you.

E-commerce options (low-cost to start)
- Ecwid has a free plan for small catalogs and provides an embed snippet you can paste into the site.
- PayPal or Stripe Checkout buttons work for a few products.
- When you want a full store admin, we can migrate to WooCommerce or a hosted platform.

Current state (as of this writing)
- A Netlify site called "dezzimode" is already connected to this repo and deploys previews on every PR (it appears to be password-protected — `dezzimode.netlify.app` returns 401). It's not being used as the deploy target going forward.
- The custom domain `dezzimode.studio` currently redirects to a separately built site at `dezzi.pplx.app`. The plan is to switch it to point at this repo's GitHub Pages deploy instead (see DNS steps above).
- This repo's `index.html`/`styles.css`/`script.js` are a simpler starter site that will become the real site at `dezzimode.studio` once the DNS records are added and Pages is enabled.

Next steps
1) Merge this PR (or push to `main`).
2) In repo **Settings → Pages**, set **Source** to **GitHub Actions**.
3) Add the DNS records above at your domain registrar.
4) Confirm `https://dezzimode.studio` loads the site from this repo.
5) Optional cleanup: since Netlify previews aren't the deploy target, you can disconnect the Netlify site from this repo if you don't want preview deploys on every PR.

If anything is incorrect or you want changes to the site content, tell me and I will update the files.