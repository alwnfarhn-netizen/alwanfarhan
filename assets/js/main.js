/**
 * main.js — Core Application Logic
 * Portfolio M. Alwan Farhan
 *
 * Features:
 * - Navigation: sticky scroll, active link, hamburger menu
 * - Projects filter with smooth animation
 * - Focus trap for mobile menu (a11y)
 * - Smooth scroll to sections
 * - Back to top button
 * - Ripple effect on buttons
 */

(function MainApp() {
  'use strict';

  /* =========================================================
     1. NAVBAR — Scroll behavior & active link
     ========================================================= */
  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    // Add scrolled class when user scrolls
    const handleScroll = () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      updateActiveNavLink();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run on init
  }

  /* =========================================================
     2. ACTIVE NAV LINK — Highlight current section
     ========================================================= */
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('main [id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"], .mobile-menu__link[href^="#"]');

    let currentId = '';
    const scrollPos = window.scrollY + 120; // Offset for sticky navbar

    sections.forEach(section => {
      if (section.offsetTop <= scrollPos) {
        currentId = section.id;
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${currentId}`) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  /* =========================================================
     3. HAMBURGER MENU — Mobile navigation with focus trap
     ========================================================= */
  function initHamburger() {
    const hamburger  = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a, button') : [];

    if (!hamburger || !mobileMenu) return;

    function openMenu() {
      mobileMenu.classList.add('is-open');
      hamburger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';

      // Focus first link
      const firstLink = mobileMenu.querySelector('a, button');
      if (firstLink) setTimeout(() => firstLink.focus(), 100);
    }

    function closeMenu() {
      mobileMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      hamburger.focus(); // Return focus to toggle
    }

    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMenu() : openMenu();
    });

    // Close on link click
    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        closeMenu();
      }
    });

    // Focus trap inside mobile menu
    mobileMenu.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;
      const focusable = Array.from(mobileMenu.querySelectorAll('a, button, [tabindex]'))
        .filter(el => !el.disabled && el.tabIndex !== -1);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last  = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }

  /* =========================================================
     4. PROJECT FILTER
     ========================================================= */
  function initProjectFilter() {
    const filterBtns    = document.querySelectorAll('.filter-btn');
    const projectCards  = document.querySelectorAll('.project-card');
    const filterStatus  = document.getElementById('filter-status');

    if (!filterBtns.length || !projectCards.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        // Update button states
        filterBtns.forEach(b => b.setAttribute('aria-pressed', 'false'));
        btn.setAttribute('aria-pressed', 'true');

        // Filter cards
        let visibleCount = 0;

        projectCards.forEach((card, index) => {
          const categories = card.dataset.categories ? card.dataset.categories.split(',') : [];
          const isMatch = filter === 'all' || categories.includes(filter);

          if (isMatch) {
            visibleCount++;
            card.style.display = '';
            // Re-trigger animation with stagger
            card.classList.remove('is-visible');
            setTimeout(() => {
              card.classList.add('is-visible');
            }, index * 80);
          } else {
            card.style.display = 'none';
          }
        });

        // Announce results for screen readers
        if (filterStatus) {
          const label = btn.textContent.trim();
          filterStatus.textContent = `Menampilkan ${visibleCount} proyek dalam kategori "${label}".`;
        }
      });
    });
  }

  /* =========================================================
     5. SMOOTH SCROLL
     ========================================================= */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();

        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 16;

        window.scrollTo({
          top: targetPos,
          behavior: 'smooth',
        });

        // Set focus to section for keyboard users
        if (!target.hasAttribute('tabindex')) {
          target.setAttribute('tabindex', '-1');
        }
        target.focus({ preventScroll: true });
      });
    });
  }

  /* =========================================================
     6. BACK TO TOP
     ========================================================= */
  function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Move focus to top
      const skipLink = document.querySelector('.skip-link');
      if (skipLink) skipLink.focus();
    });
  }

  /* =========================================================
     7. RIPPLE EFFECT on buttons
     ========================================================= */
  function initRipple() {
    document.querySelectorAll('.btn-ripple, .btn-primary, .btn-secondary').forEach(btn => {
      btn.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');

        const rect  = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ripple.style.left = `${x}px`;
        ripple.style.top  = `${y}px`;

        this.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove());
      });
    });
  }

  /* =========================================================
     8. SPIN CSS for loading button
     ========================================================= */
  function injectSpinStyle() {
    const style = document.createElement('style');
    style.textContent = `
      .spin {
        animation: spinRotate 0.8s linear infinite;
      }
      @keyframes spinRotate {
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
  }

  /* =========================================================
     9. INITIALIZE ALL
     ========================================================= */
  function init() {
    initNavbar();
    initHamburger();
    initProjectFilter();
    initSmoothScroll();
    initBackToTop();
    initRipple();
    injectSpinStyle();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
