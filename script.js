// Настройки
const WA_NUMBER = '77769699993'; // номер WhatsApp без +

// Тема: загрузка из cookie/localStorage и переключение
const themeBtn = document.getElementById('themeToggle');
const body = document.body;

function setCookie(name, value, days = 365) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};path=/;expires=${d.toUTCString()};SameSite=Lax`;
}

function getCookie(name) {
  const matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

// Load theme: cookie has priority, fallback to localStorage
const cookieTheme = getCookie('theme');
const savedTheme = cookieTheme || localStorage.getItem('theme');

if (savedTheme === 'light') {
  body.classList.remove('theme-dark');
  body.classList.add('theme-light');
  themeBtn.textContent = '☀️';
} else {
  body.classList.add('theme-dark');
  body.classList.remove('theme-light');
  themeBtn.textContent = '🌙';
}

themeBtn.addEventListener('click', () => {
  const isDark = body.classList.toggle('theme-dark');
  if (isDark) body.classList.remove('theme-light'); else body.classList.add('theme-light');
  themeBtn.textContent = isDark ? '🌙' : '☀️';
  const val = isDark ? 'dark' : 'light';
  try { localStorage.setItem('theme', val); } catch (e) {}
  setCookie('theme', val, 365);
});

/* Мобильное меню */
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
  document.addEventListener('click', (e) => {
    if (!navList.contains(e.target) && !toggle.contains(e.target)) closeNav();
  });
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

/* Появление секций при скролле */
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

/* Плавный скролл для якорей */
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

/* WhatsApp: автотекст и переход */
function openWhatsAppWith(text) {
  const msg = encodeURIComponent(text);
  const url = `https://wa.me/${WA_NUMBER}?text=${msg}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

document.querySelectorAll('.wa, .cta--whatsapp, .chip--cta, .cta--wa-header').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const text = el.getAttribute('data-wa') || 'Здравствуйте!';
    openWhatsAppWith(text);
  });
});

/* Snowflakes generator: adds decorative falling snowflakes for a festive look */
function createSnowflakes(count = 30) {
  const container = document.querySelector('.snowflakes');
  if (!container) return;
  container.innerHTML = '';
  const width = window.innerWidth;
  const isMobile = width <= 520;
  const total = isMobile ? Math.max(6, Math.floor(count / 4)) : count;
  for (let i = 0; i < total; i++) {
    const f = document.createElement('span');
    f.className = 'snowflake';
    const inner = document.createElement('span');
    inner.className = 'snowflake-inner';
    inner.textContent = '❄';
    f.appendChild(inner);
    const left = Math.random() * 100;
    const size = 8 + Math.random() * 28; // px
    const delay = Math.random() * -20; // start offset
    const duration = 8 + Math.random() * 14; // seconds
    const swayDuration = 3 + Math.random() * 4;
    f.style.left = left + 'vw';
    f.style.fontSize = size + 'px';
    f.style.opacity = (0.35 + Math.random() * 0.75).toFixed(2);
    f.style.animation = `fall ${duration}s linear ${delay}s infinite`;
    inner.style.animation = `sway ${swayDuration}s ease-in-out ${delay}s infinite`;
    container.appendChild(f);
  }
}

window.addEventListener('load', () => createSnowflakes(36));
window.addEventListener('resize', () => {
  // debounce minimal
  clearTimeout(window.__sfResize);
  window.__sfResize = setTimeout(() => createSnowflakes(36), 250);
});
