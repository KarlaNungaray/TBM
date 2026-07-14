// Transportes Black Mamba (TBM) — site interactions

document.getElementById('year').textContent = new Date().getFullYear();

// Header background on scroll
const header = document.getElementById('siteHeader');
const onScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
};
document.addEventListener('scroll', onScroll);
onScroll();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  if (open) {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'fixed';
    navLinks.style.top = '64px';
    navLinks.style.right = '20px';
    navLinks.style.background = 'rgba(17,21,18,0.97)';
    navLinks.style.padding = '20px 26px';
    navLinks.style.borderRadius = '12px';
    navLinks.style.gap = '18px';
  } else {
    navLinks.removeAttribute('style');
  }
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  navLinks.removeAttribute('style');
}));

// Reveal on scroll (falls back to showing everything if unsupported)
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

// Contact form (static demo — no backend wired up)
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.textContent = '¡Gracias! Tu solicitud fue registrada. Te contactaremos en menos de 24 horas hábiles.';
  formNote.style.color = '#186743';
  form.reset();
});
