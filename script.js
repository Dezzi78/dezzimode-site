document.getElementById('year').textContent = new Date().getFullYear();

// mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Placeholder "Buy Now" buttons — wire these to real checkout links when ready
document.querySelectorAll('.product-card .btn').forEach((button) => {
  button.addEventListener('click', () => {
    alert('Checkout isn\'t connected yet — add a PayPal/Stripe link or embed here when you\'re ready to sell this item.');
  });
});

// Contact form (works with Formspree or similar endpoints)
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
