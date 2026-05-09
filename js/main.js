// ===========================
// GREENLAND LAWN CARE — main.js
// ===========================

document.addEventListener('DOMContentLoaded', () => {

  // --- MOBILE NAV TOGGLE ---
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  // --- DROPDOWN TOGGLE (MOBILE) ---
  const hasDropdowns = document.querySelectorAll('.has-dropdown');
  hasDropdowns.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        item.classList.toggle('open');
      }
    });
  });

  // --- FAQ ACCORDION ---
  const faqBtns = document.querySelectorAll('.faq-q');
  faqBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const open = btn.getAttribute('aria-expanded') === 'true';

      // Close all
      faqBtns.forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.nextElementSibling.classList.remove('open');
      });

      // Toggle clicked
      if (!open) {
        btn.setAttribute('aria-expanded', 'true');
        answer.classList.add('open');
      }
    });
  });

  // --- ACTIVE NAV LINK ---
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navAnchors = document.querySelectorAll('.nav-links a');
  navAnchors.forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === currentPath) a.classList.add('active');
  });

});
