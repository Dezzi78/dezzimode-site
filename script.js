const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
if (menuToggle && nav) {
  const setOpen = (open) => {
    nav.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
  };
  menuToggle.addEventListener('click', () => {
    setOpen(!nav.classList.contains('is-open'));
  });
  // close the mobile menu after choosing a section
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);
  });
}

// Form status for the drop sign-up and contact forms (Formspree)
document.querySelectorAll('form.js-form').forEach((form) => {
  const status = document.getElementById(form.dataset.status);
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
});
