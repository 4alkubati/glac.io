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

  // --- GALLERY ROTATOR ---
  const rotatorImages = [
    'IMAGES/General1.jpeg',
    'IMAGES/general2.jpeg',
    'IMAGES/General3.jpeg'
  ];
  let rotatorIndex = 0;
  const rotatorEl = document.getElementById('gallery-rotator');
  if (rotatorEl) {
    const rotatorImg = rotatorEl.querySelector('img');
    setInterval(() => {
      rotatorImg.style.opacity = '0';
      setTimeout(() => {
        rotatorIndex = (rotatorIndex + 1) % rotatorImages.length;
        rotatorImg.src = rotatorImages[rotatorIndex];
        rotatorImg.style.opacity = '1';
      }, 400);
    }, 5000);
  }

  // --- ACTIVE NAV LINK ---
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navAnchors = document.querySelectorAll('.nav-links a');
  navAnchors.forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === currentPath) a.classList.add('active');
  });

});
