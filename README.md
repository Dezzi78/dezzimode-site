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
3. Push/merge to `main` and the workflow will run automatically (check the **Actions** tab for status). Your site will be live at `https://dezzi78.github.io/dezzimode-site/` once it succeeds.
4. A `CNAME` file in this repo is already set to `dezzimode.studio` for the custom domain. In **Settings → Pages → Custom domain**, confirm it shows `dezzimode.studio` and click "Enforce HTTPS" once the certificate is issued (can take a few minutes to hours).

Quick DNS notes for GitHub Pages (if you keep the domain at Squarespace and can edit DNS there):
- For the apex (dezzimode.studio), add these four A records pointing to GitHub's Pages IPs:
  185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- For the www subdomain, add a CNAME record pointing to `dezzi78.github.io`.
- DNS changes can take anywhere from a few minutes to 24-48 hours to propagate.

Contact form
- The HTML form uses Formspree by default. To make it work:
  1. Sign up at https://formspree.io and create a form to get an endpoint.
  2. Replace the action URL in index.html with the endpoint Formspree gives you.

E-commerce options (low-cost to start)
- Ecwid has a free plan for small catalogs and provides an embed snippet you can paste into the site.
- PayPal or Stripe Checkout buttons work for a few products.
- When you want a full store admin, we can migrate to WooCommerce or a hosted platform.

Next steps I can take for you
1) If you want, I can connect this repo to Netlify for you, but I will need you to sign in to Netlify and grant access to your GitHub account (or invite a Netlify team). If you prefer, I can give step-by-step instructions and screen-by-screen guidance.
2) I can show how to transfer your domain from Squarespace to Namecheap or Google Domains (you have the transfer codes). Tell me which registrar you prefer.

If anything is incorrect or you want changes to the site content, tell me and I will update the files.