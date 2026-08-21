/* ============================================================
   DEZZI — Site Script
   Sparkle canvas · nav scroll · reveal animations
   ============================================================ */

'use strict';

/* ── Sparkle Canvas ─────────────────────────────────────────
   Floating diamonds, glitter dots, and neon sparks
   live behind the whole page
   ──────────────────────────────────────────────────────────*/
(function initSparkCanvas() {
  const canvas = document.getElementById('sparkCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [];

  /* Resize */
  function resize() {
    W = canvas.width  = window.innerWidth;
    // Use document height but cap to a reasonable max to avoid canvas memory issues
    H = canvas.height = Math.max(document.documentElement.scrollHeight, window.innerHeight * 4);
  }

  /* Particle types:
     0 = tiny dot sparkle (white / teal / silver)
     1 = small diamond wireframe (teal)
     2 = small diamond wireframe (red)
     3 = glitter flash (white burst)
  */
  function makeParticle() {
    const type = Math.random() < 0.55 ? 0 : Math.random() < 0.55 ? 1 : Math.random() < 0.5 ? 2 : 3;
    const colors0 = ['#D7F1EE', '#8ED2CC', '#ffffff', '#c8e8e4', '#00E5EA', '#FF1A2E'];
    return {
      type,
      x:    Math.random() * W,
      y:    Math.random() * H,
      size: type === 0 ? Math.random() * 2.2 + 0.6
           : type === 3 ? Math.random() * 4 + 2
           :               Math.random() * 11 + 5,
      color: type === 1 ? (Math.random() < 0.7 ? '#8ED2CC' : '#D7F1EE')
           : type === 2 ? (Math.random() < 0.6 ? '#FF1A2E' : '#00C8CC')
           : type === 3 ? '#ffffff'
           : colors0[Math.floor(Math.random() * colors0.length)],
      alpha:  Math.random() * 0.45 + 0.1,
      alphaD: (Math.random() * 0.003 + 0.001) * (Math.random() < 0.5 ? 1 : -1),
      drift:  (Math.random() - 0.5) * 0.22,
      rise:   -(Math.random() * 0.35 + 0.05),
      rot:    Math.random() * Math.PI * 2,
      rotD:   (Math.random() - 0.5) * 0.006,
      life:   1,
      flash:  type === 3 ? Math.random() * 100 : 9999,
    };
  }

  function populateParticles(count = 260) {
    particles = [];
    for (let i = 0; i < count; i++) particles.push(makeParticle());
  }

  /* Draw diamond wireframe */
  function drawDiamond(x, y, size, rot, color, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.beginPath();
    ctx.moveTo(0, -size);
    ctx.lineTo(size * 0.72, 0);
    ctx.lineTo(0, size);
    ctx.lineTo(-size * 0.72, 0);
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 0.7;
    ctx.stroke();
    /* inner facet cross */
    ctx.beginPath();
    ctx.moveTo(0, -size);
    ctx.lineTo(0, size);
    ctx.moveTo(-size * 0.72, 0);
    ctx.lineTo(size * 0.72, 0);
    ctx.globalAlpha = alpha * 0.35;
    ctx.stroke();
    ctx.restore();
  }

  /* Draw 4-point star sparkle */
  function drawStar(x, y, size, color, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = size * 3;
    ctx.beginPath();
    ctx.moveTo(x, y - size);
    ctx.lineTo(x + size * 0.22, y - size * 0.22);
    ctx.lineTo(x + size, y);
    ctx.lineTo(x + size * 0.22, y + size * 0.22);
    ctx.lineTo(x, y + size);
    ctx.lineTo(x - size * 0.22, y + size * 0.22);
    ctx.lineTo(-size + x, y);
    ctx.lineTo(x - size * 0.22, y - size * 0.22);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  /* Draw tiny glitter dot */
  function drawDot(x, y, size, color, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = size * 4;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  let frame = 0;

  function tick() {
    // Resize canvas height if page grows
    if (canvas.height !== document.body.scrollHeight) resize();

    ctx.clearRect(0, 0, W, H);
    frame++;

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x    += p.drift;
      p.y    += p.rise;
      p.rot  += p.rotD;
      p.alpha += p.alphaD;
      p.flash -= 1;

      /* bounce alpha */
      if (p.alpha <= 0.05) { p.alpha = 0.05; p.alphaD *= -1; }
      if (p.alpha >= 0.55) { p.alpha = 0.55; p.alphaD *= -1; }

      /* recycle off-screen */
      if (p.y < -20 || p.x < -20 || p.x > W + 20) {
        particles[i] = makeParticle();
        particles[i].y = Math.random() * H;
        continue;
      }

      if (p.type === 0) drawDot(p.x, p.y, p.size, p.color, p.alpha);
      else if (p.type === 1 || p.type === 2) drawDiamond(p.x, p.y, p.size, p.rot, p.color, p.alpha);
      else if (p.type === 3) drawStar(p.x, p.y, p.size, p.color, p.alpha);
    }

    /* Occasional random flash sparks */
    if (frame % 18 === 0) {
      const fx = Math.random() * W;
      const fy = Math.random() * H;
      const fc = Math.random() < 0.5 ? '#D7F1EE' : Math.random() < 0.5 ? '#00E5EA' : '#FF1A2E';
      drawStar(fx, fy, Math.random() * 5 + 2, fc, Math.random() * 0.5 + 0.2);
    }

    requestAnimationFrame(tick);
  }

  resize();
  populateParticles(280);
  tick();

  window.addEventListener('resize', () => { resize(); populateParticles(280); });
})();

/* ── Scrolling Nav ───────────────────────────────────────── */
(function initNav() {
  const nav = document.getElementById('gnav');
  if (!nav) return;
  function check() {
    if (window.scrollY > 60) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', check, { passive: true });
  check();
})();

/* ── Reveal on Scroll ────────────────────────────────────── */
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  // Immediately show elements already in viewport on load
  function checkImmediate(el) {
    const r = el.getBoundingClientRect();
    return r.top < window.innerHeight && r.bottom > 0;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const siblings = Array.from(e.target.parentElement.querySelectorAll('.reveal:not(.visible)'));
        const delay = siblings.indexOf(e.target) * 90;
        setTimeout(() => e.target.classList.add('visible'), Math.max(0, delay));
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

  els.forEach(el => {
    if (checkImmediate(el)) {
      // Already visible — show immediately with small stagger
      setTimeout(() => el.classList.add('visible'), 100);
    } else {
      io.observe(el);
    }
  });
})();

/* ── Hero door hover — diamond shimmer pulse ─────────────── */
(function initDoorEffects() {
  document.querySelectorAll('.door').forEach(door => {
    door.addEventListener('mouseenter', () => {
      door.querySelector('.door-shimmer')?.classList.add('shimmer-active');
    });
    door.addEventListener('mouseleave', () => {
      door.querySelector('.door-shimmer')?.classList.remove('shimmer-active');
    });
  });
})();

/* ── Pricing strip horizontal scroll on drag ─────────────── */
(function initPricingDrag() {
  const strip = document.querySelector('.pricing-strip');
  if (!strip) return;
  let down = false, startX, scrollLeft;
  strip.addEventListener('mousedown', e => {
    down = true; startX = e.pageX - strip.offsetLeft; scrollLeft = strip.scrollLeft;
  });
  strip.addEventListener('mouseleave', () => down = false);
  strip.addEventListener('mouseup', () => down = false);
  strip.addEventListener('mousemove', e => {
    if (!down) return;
    e.preventDefault();
    strip.scrollLeft = scrollLeft - (e.pageX - strip.offsetLeft - startX);
  });
})();

/* ── Service cards — sparkle burst on hover ──────────────── */
(function initCardSparks() {
  const cards = document.querySelectorAll('.service-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function(e) {
      const rect = card.getBoundingClientRect();
      for (let i = 0; i < 6; i++) {
        const spark = document.createElement('span');
        spark.className = 'card-spark';
        spark.style.cssText = `
          position:absolute;
          width:4px;height:4px;
          border-radius:50%;
          background:#8ED2CC;
          left:${Math.random()*100}%;
          top:${Math.random()*100}%;
          pointer-events:none;
          z-index:100;
          opacity:0.8;
          box-shadow:0 0 6px #8ED2CC;
          animation:sparkFly 0.7s ease-out forwards;
        `;
        card.appendChild(spark);
        setTimeout(() => spark.remove(), 700);
      }
    });
  });

  /* Inject keyframe */
  if (!document.getElementById('sparkFlyKF')) {
    const s = document.createElement('style');
    s.id = 'sparkFlyKF';
    s.textContent = `
      @keyframes sparkFly {
        0%   { transform:scale(1) translate(0,0); opacity:0.8; }
        100% { transform:scale(0) translate(${['20px,−20px','−18px,−22px','22px,14px','−20px,16px','0,−25px','15px,20px'][0]}); opacity:0; }
      }
    `;
    document.head.appendChild(s);
  }
})();
