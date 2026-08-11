/**
 * i18n.js
 * Mesin utama untuk mengelola penggantian bahasa di halaman.
 */

(function I18nEngine() {
  'use strict';

  const STORAGE_KEY = 'alwan-portfolio-lang-v2';
  const defaultLang = 'en';
  let currentLang = localStorage.getItem(STORAGE_KEY) || defaultLang;

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang; // Update html lang attribute for a11y

    updateDOM();
  }

  function updateDOM() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = translations[currentLang][key];

      if (translation) {
        // Jika elemen merupakan input yang butuh placeholder
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translation;
        } else {
          // InnerHTML untuk mendukung tag styling di dalam string (seperti <em> atau <strong>)
          el.innerHTML = translation;
        }
      }
    });
    
    // Update label toggle
    const toggleBtn = document.getElementById('lang-toggle-desktop');
    const toggleBtnMobile = document.getElementById('lang-toggle-mobile');
    
    if (toggleBtn) {
      toggleBtn.innerHTML = currentLang === 'id' ? 'EN' : 'ID';
      toggleBtn.title = translations[currentLang]['misc.lang.toggle'];
      toggleBtn.setAttribute('aria-label', translations[currentLang]['misc.lang.toggle']);
    }

    if (toggleBtnMobile) {
      toggleBtnMobile.innerHTML = currentLang === 'id' ? 'EN' : 'ID';
    }
  }

  function toggleLanguage() {
    const newLang = currentLang === 'id' ? 'en' : 'id';
    setLanguage(newLang);
  }

  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    // Terapkan bahasa saat ini ke DOM
    setLanguage(currentLang);

    // Pasang event listener ke tombol toggle
    const toggleDesktop = document.getElementById('lang-toggle-desktop');
    const toggleMobile = document.getElementById('lang-toggle-mobile');

    if (toggleDesktop) toggleDesktop.addEventListener('click', toggleLanguage);
    if (toggleMobile) toggleMobile.addEventListener('click', toggleLanguage);
  });

})();
