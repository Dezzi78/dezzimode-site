# Dezzimode — Starter Site

This repository contains a minimal static site for Dezzimode.

Files:
- index.html
- styles.css
- script.js

Brand: Dezzi Mode
- Logos: Round 3 D1 (solid diamond + jeweled crown) and D2 (neon outline diamond + crown), copied exactly from the Round 3 board as SVG <symbol>s at the top of index.html (#logo-d1, #logo-d2). D2 is in the header and hero; D1 is in the footer and favicon.svg. Do not alter the logos without approval.
- Colours (CSS variables in styles.css), from the logo boards: ground #0D1117, surface #161B22, teal #1FE0D0, crimson #E8174F, tagline red #FF2A3D, white #FFFFFF; muted text #A7B0BA, lines #262D36 / #2C343F.
- Type: Caveat Brush (the lettering on the logo boards) for DEZZI MODE, "Make Them Look." and all big headings; DM Mono for labels, nav and buttons; DM Sans for body text.
- Vibe: downtown at night — skyline with lit windows, neon glow and flicker, brick wall with spray-paint lettering, red paint drips, equalizer bars. All text is centered.
- Wording comes from the Dezzi Mode-only site (Make Them Look.). Nothing from Dezzi's Designs belongs on this site.

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
- The drop sign-up and contact forms send to your Formspree endpoint (https://formspree.io/f/xjybzyvg).

E-commerce options (low-cost to start)
- Ecwid has a free plan for small catalogs and provides an embed snippet you can paste into the site.
- PayPal or Stripe Checkout buttons work for a few products.
- When you want a full store admin, we can migrate to WooCommerce or a hosted platform.

Next steps I can take for you
1) If you want, I can connect this repo to Netlify for you, but I will need you to sign in to Netlify and grant access to your GitHub account (or invite a Netlify team). If you prefer, I can give step-by-step instructions and screen-by-screen guidance.
2) I can show how to transfer your domain from Squarespace to Namecheap or Google Domains (you have the transfer codes). Tell me which registrar you prefer.

If anything is incorrect or you want changes to the site content, tell me and I will update the files.