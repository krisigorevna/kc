// ===== ЯЗЫКОВЫЕ ДАННЫЕ =====
const translations = {
    ru: {
        nav_home: 'Главная',
        nav_about: 'О нас',
        nav_services: 'Услуги',
        nav_portfolio: 'Портфолио',
        nav_contact: 'Контакты',
        nav_cta: 'Связаться',

        hero_title: 'Твой <span>идеальный</span> сайт',
        hero_subtitle: 'Современный дизайн, вдохновлённый CS. Полноэкранный опыт.',
        hero_btn1: 'Портфолио',
        hero_btn2: 'Узнать больше',

        about_title: 'О <span>проекте</span>',
        about_p1: 'Мы создаём цифровые решения с душой. Каждая линия кода — как тактика в CS: стратегически, чисто и эффективно.',
        about_p2: 'Наш подход сочетает минимализм, скорость и внимание к деталям. Тёмный градиент меню подчёркивает стиль.',
        about_stat1: 'проектов',
        about_stat2: 'команды',
        about_stat3: 'отдача',

        services_title: 'Наши <span>услуги</span>',
        service1_title: 'Веб-разработка',
        service1_desc: 'Современные сайты и приложения с нуля. Адаптивность и производительность.',
        service2_title: 'UX/UI дизайн',
        service2_desc: 'Интерфейсы, которые нравятся пользователям. Внимание к каждой детали.',
        service3_title: 'Оптимизация',
        service3_desc: 'Скорость загрузки, SEO и чистота кода. Как в киберспорте — только победа.',

        portfolio_title: 'Портфолио',
        portfolio1_title: 'Проект Alpha',
        portfolio1_desc: 'Корпоративный сайт',
        portfolio2_title: 'Проект Beta',
        portfolio2_desc: 'Интернет-магазин',
        portfolio3_title: 'Проект Gamma',
        portfolio3_desc: 'Лендинг + анимация',

        contact_title: 'Связь <span>с нами</span>',
        contact_name: 'Ваше имя',
        contact_email: 'E-mail',
        contact_message: 'Сообщение...',
        contact_btn: 'Отправить',

        footer_copyright: '© 2026 CS Modern. Все права защищены.'
    },

    en: {
        nav_home: 'Home',
        nav_about: 'About',
        nav_services: 'Services',
        nav_portfolio: 'Portfolio',
        nav_contact: 'Contact',
        nav_cta: 'Contact Us',

        hero_title: 'Your <span>perfect</span> site',
        hero_subtitle: 'Modern design inspired by CS. Fullscreen experience.',
        hero_btn1: 'Portfolio',
        hero_btn2: 'Learn More',

        about_title: 'About <span>project</span>',
        about_p1: 'We create digital solutions with soul. Every line of code is like a tactic in CS: strategic, clean and efficient.',
        about_p2: 'Our approach combines minimalism, speed and attention to detail. The dark menu gradient underlines the style.',
        about_stat1: 'projects',
        about_stat2: 'teams',
        about_stat3: 'dedication',

        services_title: 'Our <span>services</span>',
        service1_title: 'Web Development',
        service1_desc: 'Modern websites and apps from scratch. Responsive and performant.',
        service2_title: 'UX/UI Design',
        service2_desc: 'Interfaces that users love. Attention to every detail.',
        service3_title: 'Optimization',
        service3_desc: 'Speed, SEO and clean code. Like in eSports – only victory.',

        portfolio_title: 'Portfolio',
        portfolio1_title: 'Project Alpha',
        portfolio1_desc: 'Corporate website',
        portfolio2_title: 'Project Beta',
        portfolio2_desc: 'E-commerce',
        portfolio3_title: 'Project Gamma',
        portfolio3_desc: 'Landing + animation',

        contact_title: 'Contact <span>us</span>',
        contact_name: 'Your name',
        contact_email: 'E-mail',
        contact_message: 'Message...',
        contact_btn: 'Send',

        footer_copyright: '© 2026 CS Modern. All rights reserved.'
    },

    kz: {
        nav_home: 'Басты',
        nav_about: 'Біз туралы',
        nav_services: 'Қызметтер',
        nav_portfolio: 'Портфолио',
        nav_contact: 'Байланыс',
        nav_cta: 'Байланысу',

        hero_title: 'Сіздің <span>идеалды</span> сайтыңыз',
        hero_subtitle: 'CS-дан шабыттанған заманауи дизайн. Толық экранды тәжірибе.',
        hero_btn1: 'Портфолио',
        hero_btn2: 'Көбірек білу',

        about_title: 'Жоба <span>туралы</span>',
        about_p1: 'Біз цифрлық шешімдерді жанмен жасаймыз. Әрбір код жолы — CS-тағы тактика сияқты: стратегиялық, таза және тиімді.',
        about_p2: 'Біздің тәсіл минимализмді, жылдамдықты және ұсақ-түйектерге назар аударуды біріктіреді. Мәзірдің қара градиенті стильді ерекшелейді.',
        about_stat1: 'жоба',
        about_stat2: 'команда',
        about_stat3: 'берілгендік',

        services_title: 'Біздің <span>қызметтер</span>',
        service1_title: 'Веб-әзірлеу',
        service1_desc: 'Нөлден заманауи сайттар мен қосымшалар. Бейімделгіштік пен өнімділік.',
        service2_title: 'UX/UI дизайн',
        service2_desc: 'Пайдаланушыларға ұнайтын интерфейстер. Әрбір бөлшекке назар.',
        service3_title: 'Оңтайландыру',
        service3_desc: 'Жүктеу жылдамдығы, SEO және таза код. Киберспорттағыдай – тек жеңіс.',

        portfolio_title: 'Портфолио',
        portfolio1_title: 'Alpha жобасы',
        portfolio1_desc: 'Корпоративтік сайт',
        portfolio2_title: 'Beta жобасы',
        portfolio2_desc: 'Интернет-дүкен',
        portfolio3_title: 'Gamma жобасы',
        portfolio3_desc: 'Лендинг + анимация',

        contact_title: 'Бізбен <span>байланыс</span>',
        contact_name: 'Сіздің атыңыз',
        contact_email: 'E-mail',
        contact_message: 'Хабарлама...',
        contact_btn: 'Жіберу',

        footer_copyright: '© 2026 CS Modern. Барлық құқықтар қорғалған.'
    }
};

// ===== ТЕКУЩИЙ ЯЗЫК =====
let currentLang = 'ru';

// ===== ФУНКЦИЯ ПЕРЕКЛЮЧЕНИЯ =====
function switchLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    // Обновляем активную кнопку
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Проходим по всем элементам с data-key
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[lang][key]) {
            // Если внутри есть HTML (как <span>), вставляем как innerHTML
            el.innerHTML = translations[lang][key];
        }
    });

    // Обновляем плейсхолдеры у input и textarea
    document.querySelectorAll('input[data-key], textarea[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Меняем атрибут lang у html
    document.documentElement.lang = lang;
}

// ===== ОБРАБОТЧИКИ КНОПОК =====
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            switchLanguage(lang);
        });
    });

    // Устанавливаем язык по умолчанию (RU)
    switchLanguage('ru');
});
