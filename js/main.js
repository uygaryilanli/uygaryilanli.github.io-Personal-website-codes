/* ============================================================
   Uygar Yılanlı — Kişisel Site
   Mobil menü, projeler carousel'i, lightbox, reveal animasyonları
   ============================================================ */

/* ---------- Ekran okuyucu etiketleri ---------- */
const labels = {
  project: (n, total) => `Project ${n} of ${total}`,
  zoom: (alt) => `Enlarge: ${alt}`
};

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
  dot.setAttribute("aria-label", labels.project(i + 1, projSlides.length));
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
projTrack.addEventListener("scroll", updateProjectDots, { passive: true });
updateProjectDots();

// Klavye: carousel odaktayken ← → ile projeler arasında geçiş
projTrack.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") { e.preventDefault(); goToProject(currentProject() + 1); }
  if (e.key === "ArrowLeft") { e.preventDefault(); goToProject(currentProject() - 1); }
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
  img.setAttribute("aria-label", labels.zoom(img.alt));
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
