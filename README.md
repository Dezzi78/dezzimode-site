# Dezzimode — Starter Site

This repository contains a minimal static site for Dezzimode.

Files:
- index.html
- styles.css
- script.js

Brand (Direction 01: Neon Crown)
- Colors: #0B0D12 ink, #22E5D3 neon cyan, #FF2B4A neon red, #F4F6F8 white, #1B1F2A/#12151C surfaces. All defined as CSS variables at the top of styles.css.
- Type: Anton for headlines and tags, Space Grotesk for everything else (loaded from Google Fonts).
- Mark: the crowned diamond lives once as an SVG <symbol id="crown-diamond"> in index.html and is reused in the header and hero.

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