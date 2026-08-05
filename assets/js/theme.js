/**
 * theme.js — Dark/Light Mode Handler
 * Portfolio M. Alwan Farhan
 *
 * Features:
 * - Auto-detect prefers-color-scheme
 * - Save preference to localStorage
 * - Smooth transition between modes
 * - Update toggle button icon & aria-label
 */

(function ThemeManager() {
  'use strict';

  const STORAGE_KEY = 'alwan-portfolio-theme';
  const DARK = 'dark';
  const LIGHT = 'light';

  // Icons
  const ICON_MOON = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  const ICON_SUN = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;

  /**
   * Get the preferred theme from storage or system preference
   */
  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === DARK || stored === LIGHT) return stored;

    // Auto-detect system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return DARK;
    }
    return LIGHT;
  }

  /**
   * Apply theme to document
   */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    // Update toggle buttons
    const toggles = document.querySelectorAll('[data-theme-toggle]');
    toggles.forEach(toggle => {
      if (theme === DARK) {
        toggle.innerHTML = ICON_SUN;
        toggle.setAttribute('aria-label', 'Aktifkan mode terang');
        toggle.setAttribute('title', 'Aktifkan mode terang');
      } else {
        toggle.innerHTML = ICON_MOON;
        toggle.setAttribute('aria-label', 'Aktifkan mode gelap');
        toggle.setAttribute('title', 'Aktifkan mode gelap');
      }
    });

    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === DARK ? '#0F172A' : '#FAFAFA');
    }
  }

  /**
   * Toggle between dark and light
   */
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || LIGHT;
    const next = current === DARK ? LIGHT : DARK;
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  /**
   * Initialize theme on page load (before render to avoid flash)
   */
  function init() {
    const theme = getPreferredTheme();
    applyTheme(theme);
  }

  /**
   * Attach event listeners after DOM is ready
   */
  function attachListeners() {
    // Toggle buttons
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      btn.addEventListener('click', toggleTheme);
    });

    // Listen for system preference changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only auto-switch if user hasn't manually set preference
        if (!localStorage.getItem(STORAGE_KEY)) {
          applyTheme(e.matches ? DARK : LIGHT);
        }
      });
    }
  }

  // Apply theme ASAP (before DOMContentLoaded to prevent flash)
  init();

  // Attach listeners after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachListeners);
  } else {
    attachListeners();
  }

})();
