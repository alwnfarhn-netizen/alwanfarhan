/**
 * contact.js — Contact Form Handler with EmailJS
 * Portfolio M. Alwan Farhan
 *
 * Features:
 * - Client-side validation with ARIA error messages
 * - EmailJS integration for serverless email sending
 * - Accessible feedback (success/error)
 * - Live region status announcements for screen readers
 */

(function ContactFormManager() {
  'use strict';

  // EmailJS Configuration
  // TODO: Replace with actual EmailJS credentials
  const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
  const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';

  /**
   * Validate a single field
   * @returns {string} Error message or empty string if valid
   */
  function validateField(field) {
    const value = field.value.trim();
    const type  = field.type;
    const name  = field.name;

    if (field.required && !value) {
      return `${getFieldLabel(field)} wajib diisi.`;
    }

    if (type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Format email tidak valid. Contoh: nama@domain.com';
      }
    }

    if (name === 'message' && value && value.length < 10) {
      return 'Pesan minimal 10 karakter.';
    }

    return '';
  }

  /**
   * Get the visible label text for a field
   */
  function getFieldLabel(field) {
    const label = document.querySelector(`label[for="${field.id}"]`);
    if (label) {
      // Remove the "required" asterisk span if present
      const clone = label.cloneNode(true);
      const span = clone.querySelector('.required');
      if (span) span.remove();
      return clone.textContent.trim();
    }
    return field.name || 'Field ini';
  }

  /**
   * Show field error
   */
  function showFieldError(field, message) {
    const errorEl = document.getElementById(`${field.id}-error`);
    field.setAttribute('aria-invalid', 'true');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.style.display = 'flex';
    }
  }

  /**
   * Clear field error
   */
  function clearFieldError(field) {
    const errorEl = document.getElementById(`${field.id}-error`);
    field.removeAttribute('aria-invalid');
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.style.display = 'none';
    }
  }

  /**
   * Show toast notification
   */
  function showToast(message, type = 'success') {
    let toast = document.getElementById('contact-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'contact-toast';
      toast.className = 'toast';
      toast.setAttribute('role', 'alert');
      toast.setAttribute('aria-live', 'assertive');
      document.body.appendChild(toast);
    }

    toast.className = `toast toast--${type}`;
    toast.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        ${type === 'success'
          ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>'
          : '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>'
        }
      </svg>
      <span>${message}</span>`;

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto-hide after 5s
    setTimeout(() => {
      toast.classList.remove('show');
    }, 5000);
  }

  /**
   * Announce status to screen readers via live region
   */
  function announceStatus(message) {
    const statusEl = document.getElementById('form-status');
    if (statusEl) {
      statusEl.textContent = '';
      // Small delay to ensure screen readers pick up the change
      setTimeout(() => {
        statusEl.textContent = message;
      }, 100);
    }
  }

  /**
   * Set button loading state
   */
  function setButtonLoading(btn, isLoading) {
    if (isLoading) {
      btn.disabled = true;
      btn.dataset.originalText = btn.innerHTML;
      btn.innerHTML = `
        <svg class="spin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
        </svg>
        <span>Mengirim...</span>`;
      btn.setAttribute('aria-busy', 'true');
    } else {
      btn.disabled = false;
      btn.innerHTML = btn.dataset.originalText || 'Kirim Pesan';
      btn.removeAttribute('aria-busy');
    }
  }

  /**
   * Main form initialization
   */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const fields = form.querySelectorAll('input, textarea');

    // Real-time validation on blur
    fields.forEach(field => {
      field.addEventListener('blur', () => {
        const error = validateField(field);
        if (error) {
          showFieldError(field, error);
        } else {
          clearFieldError(field);
        }
      });

      // Clear error while typing
      field.addEventListener('input', () => {
        if (field.getAttribute('aria-invalid') === 'true') {
          clearFieldError(field);
        }
      });
    });

    // Form submit
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Validate all fields
      let isValid = true;
      let firstInvalidField = null;

      fields.forEach(field => {
        const error = validateField(field);
        if (error) {
          showFieldError(field, error);
          isValid = false;
          if (!firstInvalidField) firstInvalidField = field;
        } else {
          clearFieldError(field);
        }
      });

      if (!isValid) {
        // Focus first invalid field for a11y
        if (firstInvalidField) firstInvalidField.focus();
        announceStatus('Ada kesalahan pada formulir. Mohon periksa kembali isian Anda.');
        return;
      }

      const submitBtn = form.querySelector('[type="submit"]');
      setButtonLoading(submitBtn, true);
      announceStatus('Mengirim pesan...');

      // Check if EmailJS is configured
      if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        // Demo mode — simulate sending
        await new Promise(resolve => setTimeout(resolve, 1500));
        form.reset();
        setButtonLoading(submitBtn, false);
        showToast('Pesan berhasil dikirim! Saya akan segera membalas. 🎉', 'success');
        announceStatus('Pesan berhasil dikirim! Terima kasih telah menghubungi saya.');
        return;
      }

      // Send via EmailJS
      try {
        const templateParams = {
          from_name:  form.querySelector('#contact-name').value.trim(),
          from_email: form.querySelector('#contact-email').value.trim(),
          message:    form.querySelector('#contact-message').value.trim(),
          to_name:    'M. Alwan Farhan',
        };

        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);

        form.reset();
        setButtonLoading(submitBtn, false);
        showToast('Pesan berhasil dikirim! Saya akan segera membalas. 🎉', 'success');
        announceStatus('Pesan berhasil dikirim! Terima kasih telah menghubungi saya.');

      } catch (error) {
        console.error('EmailJS Error:', error);
        setButtonLoading(submitBtn, false);
        showToast('Gagal mengirim pesan. Silakan coba lagi atau hubungi via WhatsApp.', 'error');
        announceStatus('Gagal mengirim pesan. Silakan coba cara lain untuk menghubungi saya.');
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForm);
  } else {
    initContactForm();
  }

})();
