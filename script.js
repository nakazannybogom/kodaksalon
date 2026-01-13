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

if (themeBtn) {
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
}

/* Мобильное меню */
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');

if (toggle && navList && nav) {
  function closeNav() {
    nav.classList.remove('nav--open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  function openNav() {
    nav.classList.add('nav--open');
    toggle.setAttribute('aria-expanded', 'true');
  }
  toggle.addEventListener('click', () => {
    nav.classList.contains('nav--open') ? closeNav() : openNav();
  });
  document.addEventListener('click', (e) => {
    if (!navList.contains(e.target) && !toggle.contains(e.target)) closeNav();
  });
  const mq = window.matchMedia('(min-width: 901px)');
  mq.addEventListener('change', (ev) => {
    if (ev.matches) {
      nav.classList.remove('nav--open');
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
      
      // Добавляем анимации для элементов внутри секции
      const animatedElements = e.target.querySelectorAll('.animate-fade-in, .animate-pop, .animate-slide-up, .animate-zoom-in, .animate-slide-left, .animate-slide-right');
      animatedElements.forEach((el, index) => {
        el.style.setProperty('--anim-delay', `${index * 0.08}s`);
      });
      
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
      
      // Закрываем мобильное меню если открыто
      if (nav && nav.classList.contains('nav--open')) {
        nav.classList.remove('nav--open');
        toggle.setAttribute('aria-expanded', 'false');
      }
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

/* Анимация при наведении на карточки */
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    const icon = card.querySelector('.card__icon');
    if (icon) {
      icon.style.transform = 'scale(1.2)';
    }
  });
  
  card.addEventListener('mouseleave', () => {
    const icon = card.querySelector('.card__icon');
    if (icon) {
      icon.style.transform = 'scale(1)';
    }
  });
});

/* Инициализация анимаций при загрузке */
window.addEventListener('load', () => {
  // Запускаем анимации для уже видимых элементов
  revealSections.forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight * 0.9) {
      section.classList.add('is-visible');
    }
  });
  
  // Добавляем небольшую задержку для плавного появления контента
  setTimeout(() => {
    document.body.classList.add('is-ready');
  }, 100);
});

/* Плавное появление страницы */
