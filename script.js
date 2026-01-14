const WHATSAPP_NUMBER = "77769699993";
const STORAGE_KEYS = {
    theme: "kodak-theme",
    lang: "kodak-lang"
};

const translations = {
    ru: {
        brandSubtitle: "Фотосалон",
        themeLight: "Светлая",
        themeDark: "Темная",
        heroKicker: "Фото. Печать. Дизайн. Ретушь.",
        heroTitle: "Фотосалон Kodak в Усть-Каменогорске",
        heroSubtitle: "Быстрая печать, документы, оцифровка, реставрация, рамки и подарки — все в одном месте.",
        heroAddress: "Казахстан, ВКО, г. Усть-Каменогорск, ул. Кабанбай батыра 99",
        ctaPrimary: "Написать в WhatsApp",
        ctaSecondary: "Смотреть цены",
        badgeFast: "Быстро",
        badgeQuality: "Качественно",
        badgeLocal: "Рядом",
        quickOrderTitle: "Быстрый заказ печати",
        quickOrderSubtitle: "Выберите формат — мы подготовим сообщение в WhatsApp.",
        size34: "Фото 3×4",
        size46: "Фото 4×6",
        sizeA4Color: "A4 цветная",
        sizeA4BW: "A4 ч/б",
        customSizeLabel: "Свой формат",
        customSizePlaceholder: "Например: 10x15",
        customOrderBtn: "Отправить",
        promoTitle: "Скидка 5%",
        promoText: "Подпишитесь на наш Instagram и оставьте отзыв в 2GIS — покажите на кассе и получите скидку.",
        pricesTitle: "Услуги и цены",
        pricesSubtitle: "Все позиции из прайс-листа. Точные суммы зависят от объема и бумаги.",
        contactsTitle: "Контакты",
        contactsSubtitle: "Пишите или звоните — отвечаем быстро.",
        instagramBtn: "Открыть",
        addressTitle: "Адрес",
        mapBtn: "Открыть карту",
        techTitle: "Технические вопросы и предложения",
        techSubtitle: "Пишите в Telegram: @mastermind_eu",
        footerText: "Фотосалон · Усть-Каменогорск",
        footerCopy: "© 2026 Kodak. Все права защищены.",
        messages: {
            hello: "Здравствуйте, я хочу распечатать.",
            size: (size, qty) => `Здравствуйте, я хочу распечатать ${size}${qty ? `, количество ${qty}` : ""}.`
        }
    },
    kk: {
        brandSubtitle: "Фотосалон",
        themeLight: "Жарык",
        themeDark: "Қараңғы",
        heroKicker: "Фото. Баспа. Дизайн. Ретушь.",
        heroTitle: "Kodak фотосалоны, Өскемен",
        heroSubtitle: "Жедел баспа, құжаттар, цифрлау, реставрация, рамкалар және сыйлықтар — бәрі бір жерде.",
        heroAddress: "Қазақстан, ШҚО, Өскемен қ., Қабанбай батыр к-сі 99",
        ctaPrimary: "WhatsApp-қа жазу",
        ctaSecondary: "Бағаларды көру",
        badgeFast: "Жылдам",
        badgeQuality: "Сапалы",
        badgeLocal: "Жақын",
        quickOrderTitle: "Жылдам тапсырыс",
        quickOrderSubtitle: "Форматты таңдаңыз — WhatsApp хабарламасын дайындаймыз.",
        size34: "3×4 фото",
        size46: "4×6 фото",
        sizeA4Color: "A4 түрлі",
        sizeA4BW: "A4 ақ/қара",
        customSizeLabel: "Өзіңіздің формат",
        customSizePlaceholder: "Мысалы: 10x15",
        customOrderBtn: "Жіберу",
        promoTitle: "5% жеңілдік",
        promoText: "Instagram-ға жазылып, 2GIS-ке пікір қалдырыңыз — кассада көрсетсеңіз, жеңілдік беріледі.",
        pricesTitle: "Қызметтер мен бағалар",
        pricesSubtitle: "Барлық позициялар прайс-листтен. Дәл бағалар көлемге байланысты.",
        contactsTitle: "Байланыс",
        contactsSubtitle: "Хабарласыңыз — жылдам жауап береміз.",
        instagramBtn: "Ашу",
        addressTitle: "Мекенжай",
        mapBtn: "Картаны ашу",
        techTitle: "Техникалық сұрақтар мен ұсыныстар",
        techSubtitle: "Telegram: @mastermind_eu",
        footerText: "Фотосалон · Өскемен",
        footerCopy: "© 2026 Kodak. Барлық құқықтар қорғалған.",
        messages: {
            hello: "Сәлеметсіз бе, басып шығарғым келеді.",
            size: (size, qty) => `Сәлеметсіз бе, ${size} басып шығарғым келеді${qty ? `, саны ${qty}` : ""}.`
        }
    },
    en: {
        brandSubtitle: "Photo Studio",
        themeLight: "Light",
        themeDark: "Dark",
        heroKicker: "Photo. Print. Design. Retouch.",
        heroTitle: "Kodak Photo Studio in Ust-Kamenogorsk",
        heroSubtitle: "Fast printing, documents, digitization, restoration, frames, and gifts — all in one place.",
        heroAddress: "Kazakhstan, East Kazakhstan, Ust-Kamenogorsk, Kabanbay Batyr 99",
        ctaPrimary: "Message on WhatsApp",
        ctaSecondary: "View prices",
        badgeFast: "Fast",
        badgeQuality: "Quality",
        badgeLocal: "Nearby",
        quickOrderTitle: "Quick print order",
        quickOrderSubtitle: "Pick a size and we will prepare a WhatsApp message.",
        size34: "3×4 photo",
        size46: "4×6 photo",
        sizeA4Color: "A4 color",
        sizeA4BW: "A4 B/W",
        customSizeLabel: "Custom size",
        customSizePlaceholder: "For example: 10x15",
        customOrderBtn: "Send",
        promoTitle: "5% discount",
        promoText: "Follow us on Instagram and leave a 2GIS review — show it at the counter for a discount.",
        pricesTitle: "Services and prices",
        pricesSubtitle: "All items from the price list. Final cost depends on volume and paper type.",
        contactsTitle: "Contacts",
        contactsSubtitle: "Write or call — we respond quickly.",
        instagramBtn: "Open",
        addressTitle: "Address",
        mapBtn: "Open map",
        techTitle: "Technical questions and proposals",
        techSubtitle: "Telegram: @mastermind_eu",
        footerText: "Photo Studio · Ust-Kamenogorsk",
        footerCopy: "© 2026 Kodak. All rights reserved.",
        messages: {
            hello: "Hello, I would like to print.",
            size: (size, qty) => `Hello, I would like to print ${size}${qty ? `, quantity ${qty}` : ""}.`
        }
    }
};

const services = [
    {
        icon: "fa-print",
        ru: "Распечатка A4 ч/б односторонняя",
        kk: "A4 ақ/қара, біржақты баспа",
        en: "A4 B/W single-sided print",
        price: "40 тг / лист"
    },
    {
        icon: "fa-print",
        ru: "Распечатка A4 цветная односторонняя",
        kk: "A4 түрлі, біржақты баспа",
        en: "A4 color single-sided print",
        price: "80 тг / лист"
    },
    {
        icon: "fa-print",
        ru: "Распечатка A4 ч/б двусторонняя",
        kk: "A4 ақ/қара, екіжақты баспа",
        en: "A4 B/W double-sided print",
        price: "60 тг / лист"
    },
    {
        icon: "fa-print",
        ru: "Распечатка A4 цветная двусторонняя",
        kk: "A4 түрлі, екіжақты баспа",
        en: "A4 color double-sided print",
        price: "120 тг / лист"
    },
    {
        icon: "fa-layer-group",
        ru: "Распечатка A4 глянец односторонняя",
        kk: "A4 глянец, біржақты баспа",
        en: "A4 glossy single-sided",
        price: "от 150 до 300 тг"
    },
    {
        icon: "fa-layer-group",
        ru: "Распечатка A4 матовая односторонняя",
        kk: "A4 матовая, біржақты баспа",
        en: "A4 matte single-sided",
        price: "от 200 до 600 тг"
    },
    {
        icon: "fa-droplet",
        ru: "Распечатка A4 матовая Satin односторонняя",
        kk: "A4 матовая Satin, біржақты",
        en: "A4 matte Satin single-sided",
        price: "350 тг / лист"
    },
    {
        icon: "fa-layer-group",
        ru: "Распечатка A4 глянец двусторонняя",
        kk: "A4 глянец, екіжақты",
        en: "A4 glossy double-sided",
        price: "от 200 до 400 тг"
    },
    {
        icon: "fa-layer-group",
        ru: "Распечатка A4 матовая двусторонняя",
        kk: "A4 матовая, екіжақты",
        en: "A4 matte double-sided",
        price: "от 300 до 800 тг"
    },
    {
        icon: "fa-expand",
        ru: "Распечатка A3 глянец",
        kk: "A3 глянец",
        en: "A3 glossy print",
        price: "от 300 до 600 тг"
    },
    {
        icon: "fa-expand",
        ru: "Распечатка A3 матовая",
        kk: "A3 матовая",
        en: "A3 matte print",
        price: "от 600 до 800 тг"
    },
    {
        icon: "fa-id-card",
        ru: "Фото 3×4 с нашей фото (4 шт минимум)",
        kk: "3×4 фото (біздің түсірілім, кемі 4 дана)",
        en: "3×4 photo (our shot, min 4 pcs)",
        price: "900 тг"
    },
    {
        icon: "fa-id-card",
        ru: "Фото 3×4 с фото клиента",
        kk: "3×4 фото (клиенттің фотосы)",
        en: "3×4 photo (customer photo)",
        price: "600 тг"
    },
    {
        icon: "fa-crop",
        ru: "Выставление фото по размеру",
        kk: "Фотоны өлшемге қою",
        en: "Resize photo to size",
        price: "100 тг"
    },
    {
        icon: "fa-passport",
        ru: "VISA фото (электронный вариант)",
        kk: "VISA фото (электронды)",
        en: "VISA photo (digital)",
        price: "600 тг"
    },
    {
        icon: "fa-file-lines",
        ru: "Создание резюме",
        kk: "Резюме жасау",
        en: "Resume creation",
        price: "от 700 тг"
    },
    {
        icon: "fa-book",
        ru: "Переплет пластиковый",
        kk: "Пластик мұқаба",
        en: "Plastic binding",
        price: "от 500 тг"
    },
    {
        icon: "fa-compact-disc",
        ru: "Запись на диск",
        kk: "Дискке жазу",
        en: "Disc recording",
        price: "от 700 тг"
    },
    {
        icon: "fa-usb",
        ru: "Флешки 2.0, 3.0",
        kk: "Флешка 2.0, 3.0",
        en: "USB flash drives 2.0, 3.0",
        price: "от 2000 тг"
    },
    {
        icon: "fa-laptop",
        ru: "Переустановка Windows, Linux, активация",
        kk: "Windows, Linux орнату, активация",
        en: "Windows/Linux reinstall, activation",
        price: "от 2000 тг"
    },
    {
        icon: "fa-cross",
        ru: "Похоронный комплекс (обработка фото)",
        kk: "Еске алу кешені (өңдеу)",
        en: "Memorial photo package",
        price: "2500 тг"
    },
    {
        icon: "fa-certificate",
        ru: "Значки пластиковые",
        kk: "Пластик белгілер",
        en: "Plastic badges",
        price: "от 250 тг"
    },
    {
        icon: "fa-film",
        ru: "Оцифровка видеокассеты",
        kk: "Видеокассетаны цифрлау",
        en: "VHS digitization",
        price: "1 мин = 30 тг"
    },
    {
        icon: "fa-wand-magic-sparkles",
        ru: "Реставрация фотографии (ручная, AI)",
        kk: "Фото реставрациясы (қолмен, AI)",
        en: "Photo restoration (manual, AI)",
        price: "от 2000 тг"
    },
    {
        icon: "fa-face-smile",
        ru: "Оживление фотографий",
        kk: "Фотоларды жандандыру",
        en: "Photo animation",
        price: "350 тг"
    }
];

const langButtons = document.querySelectorAll(".chip");
const themeToggle = document.getElementById("themeToggle");
const themeText = themeToggle?.querySelector(".theme-text");
const sizeButtons = document.querySelectorAll(".quick");
const customOrderBtn = document.getElementById("customOrderBtn");
const customSize = document.getElementById("customSize");
const customQty = document.getElementById("customQty");
const serviceGrid = document.getElementById("serviceGrid");

function setTheme(theme) {
    document.body.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEYS.theme, theme);
    const isDark = theme === "dark";
    themeToggle.querySelector("i").className = isDark ? "fa-solid fa-moon" : "fa-solid fa-sun";
    if (themeText) {
        themeText.textContent = translations[getLang()][isDark ? "themeDark" : "themeLight"];
    }
}

function getLang() {
    return localStorage.getItem(STORAGE_KEYS.lang) || "ru";
}

function setLang(lang) {
    localStorage.setItem(STORAGE_KEYS.lang, lang);
    document.documentElement.lang = lang;
    langButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.lang === lang));
    document.querySelectorAll("[data-i18n]").forEach((node) => {
        const key = node.dataset.i18n;
        if (translations[lang][key]) {
            node.textContent = translations[lang][key];
        }
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
        const key = node.dataset.i18nPlaceholder;
        if (translations[lang][key]) {
            node.placeholder = translations[lang][key];
        }
    });
    renderServices(lang);
    if (themeText) {
        themeText.textContent = translations[lang][document.body.dataset.theme === "dark" ? "themeDark" : "themeLight"];
    }
}

function renderServices(lang) {
    serviceGrid.innerHTML = "";
    services.forEach((service, index) => {
        const card = document.createElement("div");
        card.className = "service-card";
        card.style.animationDelay = `${index * 0.03}s`;
        card.innerHTML = `
            <i class="fa-solid ${service.icon}"></i>
            <h3>${service[lang]}</h3>
            <div class="service-price">${service.price}</div>
        `;
        serviceGrid.appendChild(card);
    });
}

function openWhatsApp(message) {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener");
}

document.querySelectorAll("[data-action='whatsapp']").forEach((btn) => {
    btn.addEventListener("click", () => {
        const lang = getLang();
        openWhatsApp(translations[lang].messages.hello);
    });
});

sizeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const lang = getLang();
        const sizeKey = btn.dataset.sizeKey;
        const sizeLabel = translations[lang][sizeKey] || btn.textContent.trim();
        openWhatsApp(translations[lang].messages.size(sizeLabel));
    });
});

customOrderBtn?.addEventListener("click", () => {
    const sizeValue = customSize.value.trim();
    const qtyValue = customQty.value ? Number(customQty.value) : null;
    const lang = getLang();
    if (!sizeValue) {
        customSize.focus();
        return;
    }
    openWhatsApp(translations[lang].messages.size(sizeValue, qtyValue));
});

themeToggle?.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
});

langButtons.forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

const savedTheme = localStorage.getItem(STORAGE_KEYS.theme) || "light";
setTheme(savedTheme);
setLang(getLang());
