/* FHG Builders — Main Scripts
   ============================================================ */




  // ── Hero carousel ──────────────────────────────────────────
  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroInds   = document.querySelectorAll('.hero-ind');
  const projLabel  = document.getElementById('hero-proj-label');
  const slideLabels = [
    'Long Renovation · Denver Metro',
    'Steele Street · Denver',
    'Kerr Gulch · Evergreen',
    'Cherry Hills Village · South Denver'
  ];
  let current = 0;
  let autoTimer;

  function goToSlide(n) {
    heroSlides[current].classList.remove('active');
    heroInds[current].classList.remove('active');
    current = (n + heroSlides.length) % heroSlides.length;
    heroSlides[current].classList.add('active');
    heroInds[current].classList.add('active');
    projLabel.style.opacity = '0';
    setTimeout(() => {
      projLabel.textContent = slideLabels[current];
      projLabel.style.opacity = '1';
    }, 400);
  }

  function startAuto() {
    autoTimer = setInterval(() => goToSlide(current + 1), 5500);
  }

  heroInds.forEach(btn => {
    btn.addEventListener('click', () => {
      clearInterval(autoTimer);
      goToSlide(parseInt(btn.dataset.slide));
      startAuto();
    });
  });

  startAuto();

  let touchStartX = 0;
  const heroEl = document.querySelector('.hero');
  if (heroEl) {
    heroEl.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    heroEl.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        clearInterval(autoTimer);
        goToSlide(diff > 0 ? current + 1 : current - 1);
        startAuto();
      }
    }, { passive: true });
  }

  // Nav scroll behavior
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Mobile nav toggle
  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Scroll-triggered fade-up animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Basic form handling
  document.getElementById('inquiry-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('.btn-submit');
    btn.textContent = 'Message Sent';
    btn.style.background = '#2C3E35';
    btn.disabled = true;
    // TODO: wire to form endpoint (Formspree, Netlify Forms, or backend)
  });
