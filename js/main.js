/* ============================================================
   Uygar Yılanlı — Kişisel Site
   Dil değiştirme (TR/EN), mobil menü, reveal animasyonları
   ============================================================ */

const translations = {
  tr: {
    "nav.about": "Hakkımda",
    "nav.education": "Eğitim",
    "nav.projects": "Projeler",
    "nav.contact": "İletişim",

    "hero.eyebrow": "Merhaba, ben Uygar 👋",
    "hero.title": "Büyük hayaller kuran ve fikirleri <span class=\"grad-text\">hayata geçirmek</span> için yorulmadan çalışan biri.",
    "hero.desc": "<strong>Snakely</strong>'nin yaratıcısıyım — kelime öğrenmeyi eğlenceli ve etkileşimli hâle getiren bir kelime öğrenme uygulaması. Kullanıcı deneyimi ve görsel tasarım üzerine kendimi sürekli geliştiriyorum.",
    "hero.ctaProjects": "Projelerime Göz At",
    "hero.ctaContact": "Bana Ulaş",

    "about.kicker": "Hakkımda",
    "about.title": "Kısa bir <span class=\"grad-text\">tanışma</span>",
    "about.p1": "2000 yılında Çorlu, Tekirdağ'da doğdum. Eğitim hayatım boyunca öğrenmeye, keşfetmeye ve gelişmeye her zaman büyük önem verdim. Kelime öğrenimini daha etkileşimli ve keyifli hâle getirmeye odaklanan <strong>Snakely</strong> adlı kelime öğrenme uygulamasının yaratıcısıyım.",
    "about.p2": "Araştırmaya meraklı ve yeniliğe açık biriyim. Akademik hayatımdan kalan zamanlarda kişisel projelerim üzerinde aktif olarak çalışıyor, yeni teknolojiler keşfetmekten keyif alıyorum. Kullanıcı deneyimi ve görsel gelişim alanındaki becerilerimi güçlendirmek için tasarım pratiklerine de düzenli olarak zaman ayırıyorum.",
    "about.f1label": "Nereden",
    "about.f1value": "Çorlu, Tekirdağ · 2000",
    "about.f2label": "Ne yapıyorum",
    "about.f2value": "Snakely'yi geliştiriyorum",
    "about.f3label": "Odak",
    "about.f3value": "UX · Görsel tasarım · Yeni teknolojiler",

    "edu.kicker": "Eğitim",
    "edu.title": "Güncel programlar &amp; <span class=\"grad-text\">odak alanları</span>",
    "edu.u1name": "Çanakkale Onsekiz Mart Üniversitesi",
    "edu.u1degree": "Lisans — İşletme (İngilizce) · <strong>Mezun · 2026</strong>",
    "edu.u1desc": "Küresel pazarları anlamak ve liderlik becerilerimi geliştirmek için İşletme okudum, 2026 yılında mezun oldum.",
    "edu.u2name": "İstanbul Üniversitesi (Açıköğretim)",
    "edu.u2degree": "Ön Lisans — Bilgisayar Programcılığı · <strong>2. Sınıf</strong>",
    "edu.u2desc": "Yazılım geliştirme ve programlama dillerinde güçlü bir altyapı kurmak için çalıştım, çalışıyorum ve çalışmaya devam edeceğim.",

    "proj.kicker": "Projeler",
    "proj.title": "Seçili <span class=\"grad-text\">çalışmalar</span>",
    "proj.p1status": "Mağazalarda yayında",
    "proj.p1name": "Snakely — Kelime Öğrenme Uygulaması",
    "proj.p1desc": "İngilizce ve Almanca kelime öğrenimini daha düzenli, motive edici ve kalıcı hâle getiren oyunlaştırılmış bir mobil uygulama. Kart Gezinimi, Öğrenim, Blitz, Eşleştirme ve Sınav gibi farklı çalışma modlarıyla App Store ve Google Play'de yayında, birçok aktif kullanıcıya sahip.",
    "proj.storeCta": "İndir",
    "proj.p1tag1": "Eğitim",
    "proj.p1tag2": "Kelime Öğrenimi",
    "proj.p1tag3": "Oyunlaştırma",
    "proj.p1tag4": "🇬🇧 İngilizce",
    "proj.p1tag5": "🇩🇪 Almanca",
    "proj.p2name": "Cubomb — Renkli Küp Patlatma Oyunu",
    "proj.p2desc": "Basit kuralları ve derinlikli oynanışıyla saatlerce oynatan bağımlılık yapıcı bir küp patlatma bulmaca oyunu. Farklı hedeflere sahip 100 bölüm, jetonlarla oynanan sınırsız Yarış Modu, şans çarkı ve küresel liderlik tablosuyla 13 dilde yayında. Eskiden çok sevdiğim bir oyundan ilham alarak, boş vakitlerde keyifle oynamak için geliştirdim.",

    "contact.title": "Birlikte harika bir şey <span class=\"grad-text\">inşa edelim</span>",
    "contact.desc": "İş birliklerine, yeni fırsatlara ve geri bildirimlere açığım.",
    "contact.email": "✉️ E-posta Gönder",

    "footer.rights": "Tüm hakları saklıdır."
  },

  en: {
    "nav.about": "About",
    "nav.education": "Education",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.eyebrow": "Hi, I'm Uygar 👋",
    "hero.title": "Someone who dares to dream big and works tirelessly to <span class=\"grad-text\">bring ideas to life</span>.",
    "hero.desc": "I'm the creator of <strong>Snakely</strong> — a vocabulary learning app that makes memorizing words fun and interactive. I constantly sharpen my skills in user experience and visual design.",
    "hero.ctaProjects": "See My Projects",
    "hero.ctaContact": "Get in Touch",

    "about.kicker": "About",
    "about.title": "A quick <span class=\"grad-text\">intro</span>",
    "about.p1": "I was born in 2000 in Çorlu, Tekirdağ. Throughout my education, I have always placed great importance on learning, exploring, and developing. I am the creator of <strong>Snakely</strong>, a vocabulary learning app focused on making word acquisition more interactive and enjoyable.",
    "about.p2": "I am a research enthusiast and open to innovation. In the time left after my academic life, I actively work on my personal projects and enjoy discovering new technologies. I also dedicate time to design practices to strengthen my skills in user experience and visual development.",
    "about.f1label": "From",
    "about.f1value": "Çorlu, Tekirdağ · 2000",
    "about.f2label": "What I do",
    "about.f2value": "Building Snakely",
    "about.f3label": "Focus",
    "about.f3value": "UX · Visual design · New technologies",

    "edu.kicker": "Education",
    "edu.title": "Current programs &amp; <span class=\"grad-text\">focus areas</span>",
    "edu.u1name": "Çanakkale Onsekiz Mart University",
    "edu.u1degree": "Bachelor's Degree — Business Administration (English) · <strong>Graduated · 2026</strong>",
    "edu.u1desc": "I studied Business Administration to understand global markets and develop leadership skills, graduating in 2026.",
    "edu.u2name": "İstanbul University (Open Education)",
    "edu.u2degree": "Associate Degree — Computer Programming · <strong>2nd Year</strong>",
    "edu.u2desc": "I have worked, am working, and will continue working to build a strong background in software development and programming languages.",

    "proj.kicker": "Projects",
    "proj.title": "Selected <span class=\"grad-text\">work</span>",
    "proj.p1status": "Live on the stores",
    "proj.p1name": "Snakely — Vocabulary Learning App",
    "proj.p1desc": "A gamified mobile app that makes English and German vocabulary learning more organized, motivating, and lasting. With study modes like Card Browsing, Learning, Blitz, Matching, and Exam, it is live on the App Store and Google Play with many active users.",
    "proj.storeCta": "Download",
    "proj.p1tag1": "Education",
    "proj.p1tag2": "Vocabulary",
    "proj.p1tag3": "Gamification",
    "proj.p1tag4": "🇬🇧 English",
    "proj.p1tag5": "🇩🇪 German",
    "proj.p2name": "Cubomb — Colorful Cube Blast Game",
    "proj.p2desc": "An addictive cube-blast puzzle game with simple rules and deep gameplay that keeps you playing for hours. 100 levels with varying objectives, an unlimited token-based Race Mode, a lucky wheel, and a global leaderboard — available in 13 languages. I built it inspired by a game I used to love, just to enjoy in my spare time.",

    "contact.title": "Let's build something <span class=\"grad-text\">great together</span>",
    "contact.desc": "Open to collaborations, new opportunities, and feedback.",
    "contact.email": "✉️ Send an Email",

    "footer.rights": "All rights reserved."
  }
};

/* ---------- Dil değiştirme ---------- */
const langToggle = document.getElementById("langToggle");
const langOpts = langToggle.querySelectorAll(".lang-toggle__opt");

function setLanguage(lang) {
  const dict = translations[lang] || translations.tr;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
  langOpts.forEach((opt) => opt.classList.toggle("active", opt.dataset.lang === lang));
  try { localStorage.setItem("lang", lang); } catch (_) {}
}

langToggle.addEventListener("click", () => {
  const current = document.documentElement.lang === "en" ? "en" : "tr";
  setLanguage(current === "tr" ? "en" : "tr");
});

let savedLang = "tr";
try { savedLang = localStorage.getItem("lang") || "tr"; } catch (_) {}
setLanguage(savedLang);

/* ---------- Mobil menü ---------- */
const burger = document.getElementById("navBurger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  burger.classList.toggle("open", isOpen);
  burger.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    navLinks.classList.remove("open");
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }
});

/* ---------- Reveal animasyonları ---------- */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/* ---------- Yıl ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
