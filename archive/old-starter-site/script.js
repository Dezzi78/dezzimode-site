document.getElementById('year').textContent = new Date().getFullYear();

// mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const visible = nav.style.display === 'flex';
    nav.style.display = visible ? 'none' : 'flex';
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
