// WhatsApp number (digits only)
const WA_NUMBER = '77769699993';

// Mobile nav toggle (via class)
const toggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');
if (toggle && navList) {
  function closeNav() {
    navList.style.display = 'none';
    toggle.setAttribute('aria-expanded', 'false');
  }
  function openNav() {
    navList.style.display = 'flex';
    toggle.setAttribute('aria-expanded', 'true');
  }
  toggle.addEventListener('click', () => {
    const opened = navList.style.display === 'flex';
    opened ? closeNav() : openNav();
  });
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navList.contains(e.target) && !toggle.contains(e.target)) {
      closeNav();
    }
  });
  // Reset on resize
  const mq = window.matchMedia('(min-width: 901px)');
  mq.addEventListener('change', (ev) => {
    if (ev.matches) {
      navList.style.display = 'flex';
      toggle.setAttribute('aria-expanded', 'false');
    } else {
      closeNav();
    }
  });
}

// Reveal on scroll
const revealSections = document.querySelectorAll('.section--reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
revealSections.forEach(s => io.observe(s));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').substring(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// WhatsApp deep link
function openWhatsAppWith(text) {
  const msg = encodeURIComponent(text);
  const url = `https://wa.me/${WA_NUMBER}?text=${msg}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

// Bind WhatsApp buttons
document.querySelectorAll('.wa, .cta--whatsapp, .chip--cta, .cta--wa-header').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const text = el.getAttribute('data-wa') || 'Здравствуйте!';
    openWhatsAppWith(text);
  });
});
