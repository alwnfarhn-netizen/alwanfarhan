/**
 * animations.js — Scroll Animations & Stats Counter
 * Portfolio M. Alwan Farhan
 *
 * Features:
 * - IntersectionObserver for scroll-triggered animations
 * - Stats counter with count-up effect
 * - Staggered animation for card grids
 * - Respects prefers-reduced-motion
 */

(function AnimationManager() {
  'use strict';

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /**
   * 1. SCROLL ANIMATION — IntersectionObserver
   */
  function initScrollAnimations() {
    const animatableClasses = [
      '.animate-on-scroll',
      '.animate-slide-left',
      '.animate-slide-right',
      '.animate-scale',
      '.animate-fade',
    ];

    const elements = document.querySelectorAll(animatableClasses.join(', '));

    if (prefersReducedMotion) {
      // Show all elements immediately
      elements.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px', // Trigger 60px before element enters viewport
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, observerOptions);

    elements.forEach(el => observer.observe(el));
  }

  /**
   * 2. STATS COUNTER — Count-up animation
   * Usage: <span class="counter" data-target="100" data-suffix="+">0</span>
   */
  function initStatsCounter() {
    const counters = document.querySelectorAll('.counter[data-target]');

    if (prefersReducedMotion) {
      counters.forEach(counter => {
        const target = parseInt(counter.dataset.target, 10);
        const suffix = counter.dataset.suffix || '';
        counter.textContent = target + suffix;
      });
      return;
    }

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = 'true';
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
  }

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1500; // ms
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      el.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  /**
   * 3. STAGGER ANIMATION — for grid children
   * Usage: Add class="stagger-parent" to grid wrapper
   */
  function initStaggerAnimations() {
    const grids = document.querySelectorAll('.stagger-parent');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const children = entry.target.querySelectorAll('.animate-on-scroll');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('is-visible');
            }, prefersReducedMotion ? 0 : index * 100);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    grids.forEach(grid => observer.observe(grid));
  }

  /**
   * 4. PROFILE IMAGE RING — pause on reduced motion
   */
  function initProfileRing() {
    if (prefersReducedMotion) {
      const ring = document.querySelector('.profile-ring');
      if (ring) {
        ring.style.setProperty('--duration-ring', '0s');
      }
    }
  }

  /**
   * Initialize all animations
   */
  function init() {
    initScrollAnimations();
    initStatsCounter();
    initStaggerAnimations();
    initProfileRing();
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
