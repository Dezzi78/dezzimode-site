# Dezzimode — Starter Site

This repository contains a minimal static site for Dezzimode.

Files:
- index.html
- styles.css
- script.js

Brand (C1 Crown Jewel + logo rounds 3–5)
- Colors: Ink #0D1117, Surface #161B22, Neon Teal #1FE0D0, Crimson #E8174F, White. All defined as CSS variables at the top of styles.css.
- Type: Playfair Display Black Italic (headlines), Permanent Marker (marker lines, diamond tags), DM Mono (nav, labels, buttons), DM Sans (body), Caveat Brush (logo tag).
- Logo: the Round 5 lockups (tag across the crowned diamond + "Make Them Look.") live once as SVG <symbol>s in index.html — #lockup-horizontal in the header/footer, #lockup-stacked on the hero tee.
- The originals: your own Logo Lab artwork (teal tag + navy diamond on black garments; splatter version on white garments). Background-free cut-outs live in assets/ (logo-original-tag.png, logo-original-splatter.png); they come from 800px source files, so they work for mockups but need full-size or vector art before printing.
- Drops: Round 4 tag diamonds (Crown Jewel, Neon Outline, Drip) and traditional skulls with cut-diamond eyes (Diamond Eyes, Crowned, Diamond Tears). Replace [PRICE] placeholders before launch.
- Mockups: every design is shown on a black tee and a black hoodie (Tee / Hoodie switch in the Drops section). The garment shapes are the #tee and #hoodie SVG symbols; each design is an #art-* symbol.
- mockups/: 1800x1800 PNG mockups (tee-*.png, hoodie-*.png) for shop listings and social posts. These are flat illustrated mockups; for photo mockups, upload print files to Printful/Printify and use their mockup generator.
- favicon.svg is the Round 3 solid diamond with jeweled crown.

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