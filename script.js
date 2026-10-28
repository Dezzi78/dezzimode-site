document.getElementById('year').textContent = new Date().getFullYear();

// mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const visible = nav.style.display === 'flex';
    nav.style.display = visible ? 'none' : 'flex';
    menuToggle.setAttribute('aria-expanded', String(!visible));
  });
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

// Drops: show designs on tee or hoodie
const drops = document.getElementById('drops');
if (drops) {
  drops.querySelectorAll('.garment-switch button').forEach((btn) => {
    btn.addEventListener('click', () => {
      drops.dataset.garment = btn.dataset.garment;
      drops.querySelectorAll('.garment-switch button').forEach((b) => {
        b.setAttribute('aria-pressed', String(b === btn));
      });
    });
  });
}
