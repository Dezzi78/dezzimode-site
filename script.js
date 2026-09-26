document.getElementById('year').textContent = new Date().getFullYear();

// mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
    menuToggle.setAttribute('aria-expanded', String(!open));
  });
  // clear the mobile open/closed state when the screen grows past the breakpoint
  window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => {
    if (e.matches) {
      nav.style.display = '';
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
  // close the menu after picking a link on small screens
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (getComputedStyle(menuToggle).display !== 'none') {
        nav.style.display = 'none';
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// highlight the nav link for the section in view
const links = nav ? Array.from(nav.querySelectorAll('a[href^="#"]')) : [];
const sections = links.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.removeAttribute('aria-current'));
      const active = links.find((a) => a.getAttribute('href') === '#' + entry.target.id);
      if (active) active.setAttribute('aria-current', 'page');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => observer.observe(s));
}

// Contact form status (works with Formspree or similar endpoints)
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = 'Sending...';
    const data = new FormData(form);
    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        status.textContent = 'Thanks! Your message was sent.';
        form.reset();
      } else {
        const json = await res.json();
        status.textContent = (json && json.error) ? json.error : 'There was a problem sending your message.';
      }
    } catch (err) {
      status.textContent = 'Network error — try again later.';
    }
  });
}
