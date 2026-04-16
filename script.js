
// ─── MENU MOBILE ──────────────────────────
function toggleMenu() {
  const menu = document.querySelector(".nav-links");
  menu.classList.toggle("active");
}

// Fechar menu ao clicar em link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("active");
  });
});

// ─── NAVBAR HIDE/SHOW AO ROLAR ────────────
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  navbar.style.top = currentScroll > lastScroll ? "-80px" : "0";
  navbar.style.background = currentScroll > 60
    ? "rgba(2,6,23,0.95)"
    : "rgba(2,6,23,0.7)";

  lastScroll = currentScroll;
});

// ─── SCROLL PROGRESS BAR ──────────────────
const progressBar = document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = ((scrollTop / docHeight) * 100) + "%";
});

// ─── TYPING EFFECT ─────────────────────────
const typedEl = document.getElementById("typed");
const text = "Backend Software Engineer";
let i = 0;

function type() {
  if (i < text.length) {
    typedEl.textContent += text.charAt(i);
    i++;
    setTimeout(type, 75);
  }
}

window.addEventListener("load", () => {
  setTimeout(type, 600);
});

// ─── REVEAL GERAL AO ROLAR ────────────────
function revealOnScroll() {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 150) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ─── TECH STACK — cascata ─────────────────
function revealTechCards() {
  document.querySelectorAll(".tech").forEach((card, index) => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 150) {
      setTimeout(() => card.classList.add("active"), index * 150);
    }
  });
}

window.addEventListener("scroll", revealTechCards);
window.addEventListener("load", revealTechCards);

// ─── TECH STACK — shadow ao clicar ────────
document.querySelectorAll(".tech").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("clicked");
  });
});

// ─── PROJETOS — blur + zoom out ───────────
const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("visible"), i * 150);
      projectObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".card.project").forEach(card => {
  projectObserver.observe(card);
});

// ─── CONTATO — blur + zoom out ────────────
const contactObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("visible"), i * 180);
      contactObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".contact-grid .contact-card").forEach(card => {
  contactObserver.observe(card);
});

// ─── COPIAR EMAIL ──────────────────────────
function copyEmail() {
  navigator.clipboard.writeText("guilimadev19@email.com").then(() => {
    const feedback = document.getElementById("copy-feedback");
    feedback.classList.add("show");
    setTimeout(() => feedback.classList.remove("show"), 2000);
  });
}
