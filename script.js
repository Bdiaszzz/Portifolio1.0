// ── Navbar shadow ao rolar ──────────────────────────────
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});

// ── Animações de entrada com IntersectionObserver ───────
const fadeEls = document.querySelectorAll(
  "#sobre .section-inner > *, #habilidades .skill-card, #projetos .project-card, #contato .contato-inner > *",
);

fadeEls.forEach((el, i) => {
  el.classList.add("fade-in");
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

fadeEls.forEach((el) => observer.observe(el));

// ── Hero animação de entrada ────────────────────────────
document
  .querySelectorAll(".hero-tag, .hero-title, .hero-sub, .hero-actions")
  .forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = `opacity .7s ease ${i * 120}ms, transform .7s ease ${i * 120}ms`;
    requestAnimationFrame(() => {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 80);
    });
  });

// ── Active nav link ao rolar ────────────────────────────
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach((a) => {
    a.style.color =
      a.getAttribute("href") === `#${current}` ? "var(--accent)" : "";
  });
});
