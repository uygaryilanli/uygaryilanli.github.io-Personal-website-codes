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
    "hero.desc": "<strong>Snakely</strong> ve <strong>Cubomb</strong>'un yaratıcısıyım — kelime öğrenmeyi eğlenceli ve etkileşimli hâle getiren bir kelime öğrenme uygulaması ile sevimli küplerle dolu, sonsuz seviyeli bir bulmaca oyunu. Kullanıcı deneyimi ve görsel tasarım üzerine kendimi sürekli geliştiriyorum.",
    "hero.ctaProjects": "Projelerime Göz At",
    "hero.ctaContact": "Bana Ulaş",

    "about.kicker": "Hakkımda",
    "about.title": "Kısa bir <span class=\"grad-text\">tanışma</span>",
    "about.p1": "2000 yılında Çorlu, Tekirdağ'da doğdum. Eğitim hayatım boyunca öğrenmeye, keşfetmeye ve gelişmeye her zaman büyük önem verdim. Kelime öğrenimini daha etkileşimli ve keyifli hâle getirmeye odaklanan <strong>Snakely</strong> adlı kelime öğrenme uygulamasının ve sevimli küplerle dolu bulmaca oyunu <strong>Cubomb</strong>'un yaratıcısıyım.",
    "about.p2": "Araştırmaya meraklı ve yeniliğe açık biriyim. Akademik hayatımdan kalan zamanlarda kişisel projelerim üzerinde aktif olarak çalışıyor, yeni teknolojiler keşfetmekten keyif alıyorum. Kullanıcı deneyimi ve görsel gelişim alanındaki becerilerimi güçlendirmek için tasarım pratiklerine de düzenli olarak zaman ayırıyorum.",
    "about.f1label": "Nereden",
    "about.f1value": "Çorlu, Tekirdağ · 2000",
    "about.f2label": "Ne yapıyorum",
    "about.f2value": "Snakely ve Cubomb'u geliştiriyorum",
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
    "proj.p2name": "Cubomb — Sevimli Küp Patlatma Bulmacası",
    "proj.p2desc": "Sevimli küp karakterlerle dolu, sonsuz seviyeli rengarenk bir eşleştirme bulmacası. Küpleri kaydır, aynı renkten en az 3 küpü birleştir; roket, bomba ve disko topuyla dev kombolar yap. Her seviye oyuncuya özel üretiliyor: yeni bir harita şekli, yeni bir renk teması, farklı hedefler ve sürpriz kurallar. 2.0 sürümüyle oyunu baştan tasarladım; telefon ve tabletlerde, Türkçe ve İngilizce olarak App Store ve Google Play'de.",
    "proj.p2tag1": "Bulmaca",
    "proj.p2tag2": "Sonsuz Seviye",
    "proj.p3status": "Kişisel araç",
    "proj.p3name": "YouTube İçerik Otomasyonu",
    "proj.p3desc": "Farklı YouTube kanalları için videoları baştan sona otomatik hazırlayan, kendi kullanımım için geliştirdiğim bir sistem. Kanala özel konu üretiyor, içeriği yazıyor, seslendiriyor, altyazı ekliyor ve arka planda kullanılacak görsel ve videoları hazırlıyor. Kanal analizlerini API üzerinden değerlendirip neyin değişmesi gerektiğini tespit ediyor ve sonraki videoları buna göre şekillendiriyor. Şu anda binlerce izlenmeye sahip kanallarda aktif olarak çalışmaya devam ediyor.",
    "proj.p3tag1": "Otomasyon",
    "proj.p3tag2": "Seslendirme",
    "proj.p3tag3": "Analitik",
    "proj.p3f1": "Kanal analizi",
    "proj.p3f2": "Konu üretimi",
    "proj.p3f3": "Senaryo",
    "proj.p3f4": "Seslendirme",
    "proj.p3f5": "Altyazı",
    "proj.p3f6": "Arka plan görsel ve videoları",
    "proj.p3f7": "Montaj",
    "proj.p3f8": "Video hazır",
    "proj.p3loop": "↻ Her videonun analizleri bir sonrakini şekillendirir",

    "contact.title": "Birlikte harika bir şey <span class=\"grad-text\">inşa edelim</span>",
    "contact.desc": "İş birliklerine, yeni fırsatlara ve geri bildirimlere açığım.",
    "contact.email": "✉️ E-posta Gönder",

    "footer.rights": "Tüm hakları saklıdır.",

    "aria.mainNav": "Ana menü",
    "aria.menu": "Menüyü aç",
    "aria.snakelyAppStore": "Snakely'yi App Store'dan indir",
    "aria.snakelyPlay": "Snakely'yi Google Play'den indir",
    "aria.cubombAppStore": "Cubomb'u App Store'dan indir",
    "aria.cubombPlay": "Cubomb'u Google Play'den indir",
    "aria.snakelyShots": "Snakely ekran görüntüleri",
    "aria.cubombShots": "Cubomb ekran görüntüleri",
    "aria.prevProject": "Önceki proje",
    "aria.nextProject": "Sonraki proje",
    "aria.project": "Proje {n} / {total}",
    "aria.lightbox": "Ekran görüntüsü",
    "aria.close": "Kapat",
    "aria.prevImage": "Önceki görsel",
    "aria.nextImage": "Sonraki görsel",
    "aria.zoom": "Büyüt: {alt}",
    "aria.moreApps": "2 uygulama daha",

    "shot.s1": "Snakely çalışma oturumu ekranı",
    "shot.s2": "Snakely seviye seçim ekranı",
    "shot.s3": "Snakely sınav ekranı",
    "shot.c1": "Cubomb ana sayfa ve seviye haritası",
    "shot.c2": "Cubomb oyun ekranı",
    "shot.c3": "Cubomb nasıl oynanır ekranı"
  },

  en: {
    "nav.about": "About",
    "nav.education": "Education",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.eyebrow": "Hi, I'm Uygar 👋",
    "hero.title": "Someone who dares to dream big and works tirelessly to <span class=\"grad-text\">bring ideas to life</span>.",
    "hero.desc": "I'm the creator of <strong>Snakely</strong> and <strong>Cubomb</strong> — a vocabulary learning app that makes memorizing words fun and interactive, and a puzzle game with endless levels full of cute cubes. I constantly sharpen my skills in user experience and visual design.",
    "hero.ctaProjects": "See My Projects",
    "hero.ctaContact": "Get in Touch",

    "about.kicker": "About",
    "about.title": "A quick <span class=\"grad-text\">intro</span>",
    "about.p1": "I was born in 2000 in Çorlu, Tekirdağ. Throughout my education, I have always placed great importance on learning, exploring, and developing. I am the creator of <strong>Snakely</strong>, a vocabulary learning app focused on making word acquisition more interactive and enjoyable, and <strong>Cubomb</strong>, a puzzle game full of cute cubes.",
    "about.p2": "I am a research enthusiast and open to innovation. In the time left after my academic life, I actively work on my personal projects and enjoy discovering new technologies. I also dedicate time to design practices to strengthen my skills in user experience and visual development.",
    "about.f1label": "From",
    "about.f1value": "Çorlu, Tekirdağ · 2000",
    "about.f2label": "What I do",
    "about.f2value": "Building Snakely & Cubomb",
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
    "proj.p2name": "Cubomb — Cute Cube Blast Puzzle",
    "proj.p2desc": "A colorful match puzzle full of cute cube characters, with endless levels. Swipe cubes, connect 3 or more of the same color, and build giant combos with rockets, bombs, and disco balls. Every level is generated for each player: a new board shape, a new color theme, varied goals, and surprise rules. I redesigned the game from scratch for version 2.0; it's on the App Store and Google Play for phones and tablets, in English and Turkish.",
    "proj.p2tag1": "Puzzle",
    "proj.p2tag2": "Endless Levels",
    "proj.p3status": "Personal tool",
    "proj.p3name": "YouTube Content Automation",
    "proj.p3desc": "A system I built for my own use that prepares videos end to end for different YouTube channels. It generates channel-specific topics, writes the content, voices it, adds subtitles, and prepares the background images and footage. It reviews each channel's analytics through APIs, spots what needs to change, and shapes the next videos accordingly. It is actively running on channels with thousands of views.",
    "proj.p3tag1": "Automation",
    "proj.p3tag2": "Voiceover",
    "proj.p3tag3": "Analytics",
    "proj.p3f1": "Channel analytics",
    "proj.p3f2": "Topic ideas",
    "proj.p3f3": "Script",
    "proj.p3f4": "Voiceover",
    "proj.p3f5": "Subtitles",
    "proj.p3f6": "Background visuals & footage",
    "proj.p3f7": "Video editing",
    "proj.p3f8": "Video ready",
    "proj.p3loop": "↻ Each video's analytics shape the next one",

    "contact.title": "Let's build something <span class=\"grad-text\">great together</span>",
    "contact.desc": "Open to collaborations, new opportunities, and feedback.",
    "contact.email": "✉️ Send an Email",

    "footer.rights": "All rights reserved.",

    "aria.mainNav": "Main menu",
    "aria.menu": "Open menu",
    "aria.snakelyAppStore": "Download Snakely on the App Store",
    "aria.snakelyPlay": "Get Snakely on Google Play",
    "aria.cubombAppStore": "Download Cubomb on the App Store",
    "aria.cubombPlay": "Get Cubomb on Google Play",
    "aria.snakelyShots": "Snakely screenshots",
    "aria.cubombShots": "Cubomb screenshots",
    "aria.prevProject": "Previous project",
    "aria.nextProject": "Next project",
    "aria.project": "Project {n} of {total}",
    "aria.lightbox": "Screenshot",
    "aria.close": "Close",
    "aria.prevImage": "Previous image",
    "aria.nextImage": "Next image",
    "aria.zoom": "Enlarge: {alt}",
    "aria.moreApps": "2 more apps",

    "shot.s1": "Snakely study session screen",
    "shot.s2": "Snakely level selection screen",
    "shot.s3": "Snakely quiz screen",
    "shot.c1": "Cubomb home screen and level map",
    "shot.c2": "Cubomb gameplay screen",
    "shot.c3": "Cubomb how-to-play screen"
  }
};

/* ---------- Dil değiştirme ---------- */
function t(key, vars = {}) {
  const lang = document.documentElement.lang === "en" ? "en" : "tr";
  const str = (translations[lang] && translations[lang][key]) || translations.tr[key] || key;
  return str.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? vars[k] : ""));
}

const langToggle = document.getElementById("langToggle");
const langOpts = langToggle.querySelectorAll(".lang-toggle__opt");

function setLanguage(lang) {
  const dict = translations[lang] || translations.tr;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (dict[key] !== undefined) el.alt = dict[key];
  });
  document.documentElement.lang = lang;
  document.dispatchEvent(new CustomEvent("languagechange", { detail: dict }));
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

/* ---------- Projeler carousel ---------- */
const projTrack = document.getElementById("projTrack");
const projSlides = Array.from(projTrack.children);
const projDots = document.getElementById("projDots");

projSlides.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.className = "proj-nav__dot";
  dot.setAttribute("aria-label", t("aria.project", { n: i + 1, total: projSlides.length }));
  dot.addEventListener("click", () => goToProject(i));
  projDots.appendChild(dot);
});

function currentProject() {
  const step = projSlides[1].offsetLeft - projSlides[0].offsetLeft;
  return Math.round(projTrack.scrollLeft / step);
}

function goToProject(i) {
  const n = projSlides.length;
  const index = (i + n) % n;
  projTrack.scrollTo({ left: projSlides[index].offsetLeft - projSlides[0].offsetLeft });
}

function updateProjectDots() {
  const active = currentProject();
  projDots.querySelectorAll(".proj-nav__dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === active);
    dot.setAttribute("aria-current", i === active ? "true" : "false");
  });
}

document.getElementById("projPrev").addEventListener("click", () => goToProject(currentProject() - 1));
document.getElementById("projNext").addEventListener("click", () => goToProject(currentProject() + 1));
// Bölüm yüksekliği o an görünen projeye uyar (kısa kartların altında boşluk kalmaz)
function fitProjectHeight() {
  const pad = parseFloat(getComputedStyle(projTrack).paddingTop) + parseFloat(getComputedStyle(projTrack).paddingBottom);
  projTrack.style.height = `${projSlides[currentProject()].offsetHeight + pad}px`;
}

let fitTimer;
projTrack.addEventListener("scroll", () => {
  updateProjectDots();
  clearTimeout(fitTimer);
  fitTimer = setTimeout(fitProjectHeight, 80);
}, { passive: true });
new ResizeObserver(fitProjectHeight).observe(projTrack);
projSlides.forEach((slide) => slide.querySelectorAll("img").forEach((img) => img.addEventListener("load", fitProjectHeight)));
updateProjectDots();
fitProjectHeight();

// Klavye: carousel odaktayken ← → ile projeler arasında geçiş
projTrack.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") { e.preventDefault(); goToProject(currentProject() + 1); }
  if (e.key === "ArrowLeft") { e.preventDefault(); goToProject(currentProject() - 1); }
});

document.addEventListener("languagechange", () => {
  projDots.querySelectorAll(".proj-nav__dot").forEach((dot, i) => {
    dot.setAttribute("aria-label", t("aria.project", { n: i + 1, total: projSlides.length }));
  });
  document.querySelectorAll(".snakely-shots img").forEach((img) => {
    img.setAttribute("aria-label", t("aria.zoom", { alt: img.alt }));
  });
});

/* ---------- Ekran görüntüsü büyütme (lightbox) ---------- */
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbCaption = document.getElementById("lbCaption");
let lbGroup = [];
let lbIndex = 0;
let lbReturnFocus = null;

function showLightboxImage(i) {
  lbIndex = (i + lbGroup.length) % lbGroup.length;
  const img = lbGroup[lbIndex];
  lbImg.src = img.currentSrc || img.src;
  lbImg.alt = img.alt;
  lbCaption.textContent = `${img.alt} · ${lbIndex + 1} / ${lbGroup.length}`;
}

function openLightbox(img) {
  lbGroup = Array.from(img.closest(".snakely-shots").querySelectorAll("img"));
  lbReturnFocus = img;
  showLightboxImage(lbGroup.indexOf(img));
  lightbox.hidden = false;
  document.body.classList.add("no-scroll");
  requestAnimationFrame(() => lightbox.classList.add("open"));
  document.getElementById("lbClose").focus();
}

function closeLightbox() {
  lightbox.classList.remove("open");
  document.body.classList.remove("no-scroll");
  setTimeout(() => { lightbox.hidden = true; }, 250);
  if (lbReturnFocus) lbReturnFocus.focus();
}

document.querySelectorAll(".snakely-shots img").forEach((img) => {
  img.tabIndex = 0;
  img.setAttribute("role", "button");
  img.setAttribute("aria-label", t("aria.zoom", { alt: img.alt }));
  img.addEventListener("click", () => openLightbox(img));
  img.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(img); }
  });
});

document.getElementById("lbClose").addEventListener("click", closeLightbox);
document.getElementById("lbPrev").addEventListener("click", () => showLightboxImage(lbIndex - 1));
document.getElementById("lbNext").addEventListener("click", () => showLightboxImage(lbIndex + 1));
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });

document.addEventListener("keydown", (e) => {
  if (lightbox.hidden) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") showLightboxImage(lbIndex + 1);
  if (e.key === "ArrowLeft") showLightboxImage(lbIndex - 1);
  if (e.key === "Tab") {
    // Odak lightbox içinde kalsın
    const items = Array.from(lightbox.querySelectorAll("button"));
    const idx = items.indexOf(document.activeElement);
    e.preventDefault();
    items[(idx + (e.shiftKey ? -1 : 1) + items.length) % items.length].focus();
  }
});

// Mobilde parmakla kaydırarak görsel değiştirme
let lbTouchX = null;
lightbox.addEventListener("touchstart", (e) => { lbTouchX = e.touches[0].clientX; }, { passive: true });
lightbox.addEventListener("touchend", (e) => {
  if (lbTouchX === null) return;
  const dx = e.changedTouches[0].clientX - lbTouchX;
  if (Math.abs(dx) > 50) showLightboxImage(lbIndex + (dx < 0 ? 1 : -1));
  lbTouchX = null;
});

/* ---------- Yıl ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
