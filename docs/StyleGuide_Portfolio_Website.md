# Style Guide
## Personal Portfolio Website
**Versi:** 1.0
**Tanggal:** Agustus 2026

---

## 1. Design Principles

> **"Accessible by Design, Beautiful by Default"**

| Prinsip | Penerapan |
|---|---|
| **Inclusive** | Semua desain harus accessible untuk semua pengguna |
| **Warm** | Tone hangat, welcoming, tidak intimidating |
| **Modern** | Clean layout, smooth animation, premium feel |
| **Consistent** | Gunakan token ini di seluruh halaman |

---

## 2. Color Tokens

### 2.1 Light Mode

```css
:root {
  /* === PRIMARY === */
  --color-primary-50:  #EFF6FF;
  --color-primary-100: #DBEAFE;
  --color-primary-400: #60A5FA;
  --color-primary-500: #3B82F6;
  --color-primary-600: #2563EB;   /* DEFAULT — contrast 4.5:1 on white */
  --color-primary-700: #1D4ED8;   /* Hover state */
  --color-primary-900: #1E3A8A;

  /* === ACCENT === */
  --color-accent-50:  #F5F3FF;
  --color-accent-400: #A78BFA;
  --color-accent-600: #7C3AED;    /* DEFAULT */
  --color-accent-700: #6D28D9;    /* Hover */

  /* === NEUTRAL === */
  --color-gray-50:  #F9FAFB;
  --color-gray-100: #F3F4F6;
  --color-gray-200: #E5E7EB;
  --color-gray-300: #D1D5DB;
  --color-gray-400: #9CA3AF;
  --color-gray-500: #6B7280;
  --color-gray-600: #4B5563;      /* Text secondary — contrast 6.1:1 */
  --color-gray-700: #374151;
  --color-gray-800: #1F2937;
  --color-gray-900: #111827;      /* Text primary — contrast 16:1 */

  /* === SEMANTIC === */
  --color-success: #059669;
  --color-warning: #D97706;
  --color-error:   #DC2626;
  --color-info:    #0284C7;

  /* === BACKGROUND & SURFACE === */
  --color-bg:      #FAFAFA;
  --color-surface: #FFFFFF;
  --color-border:  #E5E7EB;       /* var(--color-gray-200) */
}
```

### 2.2 Dark Mode

```css
[data-theme="dark"] {
  --color-bg:             #0F172A;   /* Slate 900 */
  --color-surface:        #1E293B;   /* Slate 800 */
  --color-border:         #334155;   /* Slate 700 */

  --color-text-primary:   #F1F5F9;   /* Slate 100 */
  --color-text-secondary: #94A3B8;   /* Slate 400 */

  --color-primary-600:    #60A5FA;   /* Blue 400 — lebih terang di dark bg */
  --color-accent-600:     #A78BFA;   /* Violet 400 */
}
```

### 2.3 Semantic Aliases (Gunakan ini di component)

```css
:root {
  --text-primary:    var(--color-gray-900);
  --text-secondary:  var(--color-gray-600);
  --text-muted:      var(--color-gray-400);
  --text-inverse:    #FFFFFF;

  --bg-page:         var(--color-bg);
  --bg-card:         var(--color-surface);
  --bg-subtle:       var(--color-gray-50);

  --border-default:  var(--color-border);
  --border-focus:    var(--color-primary-600);
}
```

### 2.4 Gradients

```css
/* Hero background */
--gradient-hero: linear-gradient(135deg, #2563EB 0%, #7C3AED 100%);

/* Card hover */
--gradient-card-hover: linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 100%);

/* Dark mode hero */
--gradient-hero-dark: linear-gradient(135deg, #1E40AF 0%, #5B21B6 100%);

/* Text gradient (untuk nama di hero) */
--gradient-text: linear-gradient(135deg, #2563EB, #7C3AED);
```

---

## 3. Typography

### 3.1 Font Family

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body:    'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono:    'JetBrains Mono', 'Courier New', monospace;
}
```

### 3.2 Font Size Scale

```css
:root {
  --text-xs:   0.75rem;    /* 12px — Caption, label kecil */
  --text-sm:   0.875rem;   /* 14px — Body small, badge */
  --text-base: 1rem;       /* 16px — Body default (minimum a11y) */
  --text-lg:   1.125rem;   /* 18px — Body large, lead paragraph */
  --text-xl:   1.25rem;    /* 20px — Card title */
  --text-2xl:  1.5rem;     /* 24px — H3 */
  --text-3xl:  1.875rem;   /* 30px — H2 section */
  --text-4xl:  2.25rem;    /* 36px — H1 page */
  --text-5xl:  3rem;       /* 48px — H1 hero */
  --text-6xl:  3.75rem;    /* 60px — Display hero (desktop) */
  --text-7xl:  4.5rem;     /* 72px — Display hero (wide) */
}
```

### 3.3 Font Weight

```css
:root {
  --font-normal:    400;
  --font-medium:    500;
  --font-semibold:  600;
  --font-bold:      700;
}
```

### 3.4 Line Height

```css
:root {
  --leading-tight:   1.2;    /* Heading */
  --leading-snug:    1.4;    /* Subheading */
  --leading-normal:  1.6;    /* Body default */
  --leading-relaxed: 1.75;   /* Long paragraph — a11y best practice */
}
```

### 3.5 Type Hierarchy (Usage)

| Element | Font Family | Size | Weight | Line Height |
|---|---|---|---|---|
| Display / Hero | Playfair Display | 60–72px | 700 | 1.1 |
| H1 | Playfair Display | 48px | 700 | 1.2 |
| H2 (Section) | Inter | 36px | 700 | 1.2 |
| H3 (Card title) | Inter | 24px | 600 | 1.3 |
| H4 | Inter | 20px | 600 | 1.4 |
| Body Large | Inter | 18px | 400 | 1.75 |
| Body | Inter | 16px | 400 | 1.75 |
| Body Small | Inter | 14px | 400 | 1.6 |
| Caption | Inter | 12px | 500 | 1.5 |
| Code / Tag | JetBrains Mono | 14px | 400–500 | 1.5 |

---

## 4. Spacing Scale

```css
:root {
  --space-1:  0.25rem;    /* 4px */
  --space-2:  0.5rem;     /* 8px */
  --space-3:  0.75rem;    /* 12px */
  --space-4:  1rem;       /* 16px */
  --space-5:  1.25rem;    /* 20px */
  --space-6:  1.5rem;     /* 24px */
  --space-8:  2rem;       /* 32px */
  --space-10: 2.5rem;     /* 40px */
  --space-12: 3rem;       /* 48px */
  --space-16: 4rem;       /* 64px */
  --space-20: 5rem;       /* 80px */
  --space-24: 6rem;       /* 96px */
  --space-32: 8rem;       /* 128px */
}

/* Section padding */
--section-padding-y: var(--space-24);          /* Desktop */
--section-padding-y-mobile: var(--space-16);   /* Mobile */

/* Container */
--container-max-width: 1200px;
--container-padding: var(--space-6);
```

---

## 5. Border & Radius

```css
:root {
  --radius-sm:   6px;
  --radius-md:   10px;
  --radius-lg:   16px;
  --radius-xl:   20px;
  --radius-2xl:  24px;
  --radius-full: 9999px;   /* Pill shape */

  --border-width:        1px;
  --border-width-focus:  2px;
  --border-width-thick:  3px;
}
```

---

## 6. Shadow Scale

```css
:root {
  --shadow-sm:  0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md:  0 4px 16px rgba(0, 0, 0, 0.06);
  --shadow-lg:  0 8px 32px rgba(0, 0, 0, 0.08);
  --shadow-xl:  0 20px 60px rgba(0, 0, 0, 0.10);

  /* Colored shadows (primary) */
  --shadow-primary-sm: 0 4px 16px rgba(37, 99, 235, 0.15);
  --shadow-primary-md: 0 8px 32px rgba(37, 99, 235, 0.20);

  /* Dark mode shadows */
  --shadow-dark-md: 0 4px 24px rgba(0, 0, 0, 0.40);
}
```

---

## 7. Component Specifications

### 7.1 Button

```css
/* Base */
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 12px 28px;
  border-radius: var(--radius-lg);
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all 200ms var(--ease-in-out);
  min-height: 44px;                  /* A11y: minimum touch target */
  border: 2px solid transparent;
}

/* Focus (A11y — visible focus indicator) */
.btn:focus-visible {
  outline: 3px solid var(--color-primary-600);
  outline-offset: 2px;
}

/* PRIMARY */
.btn-primary {
  background: var(--color-primary-600);
  color: #FFFFFF;
}
.btn-primary:hover {
  background: var(--color-primary-700);
  transform: translateY(-2px);
  box-shadow: var(--shadow-primary-sm);
}

/* SECONDARY */
.btn-secondary {
  background: transparent;
  color: var(--color-primary-600);
  border-color: var(--color-primary-600);
}
.btn-secondary:hover {
  background: var(--color-primary-600);
  color: #FFFFFF;
}

/* GHOST */
.btn-ghost {
  background: transparent;
  color: var(--text-secondary);
}
.btn-ghost:hover {
  background: var(--bg-subtle);
  color: var(--text-primary);
}
```

---

### 7.2 Card

```css
.card {
  background: var(--bg-card);
  border: var(--border-width) solid var(--border-default);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-md);
  transition: transform 300ms var(--ease-in-out),
              box-shadow 300ms var(--ease-in-out);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-primary-sm);
}
```

---

### 7.3 Badge / Tag

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  letter-spacing: 0.02em;
}

.badge-primary {
  background: rgba(37, 99, 235, 0.12);
  color: var(--color-primary-700);
}

.badge-accent {
  background: rgba(124, 58, 237, 0.12);
  color: var(--color-accent-700);
}

.badge-neutral {
  background: var(--color-gray-100);
  color: var(--color-gray-700);
}
```

---

### 7.4 Form Elements

```css
/* Label — selalu visible, tidak boleh placeholder-only (A11y) */
.form-label {
  display: block;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

/* Input */
.form-input {
  width: 100%;
  height: 48px;                      /* A11y: min 44px */
  padding: 0 var(--space-4);
  border: var(--border-width-focus) solid var(--border-default);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--text-primary);
  background: var(--bg-card);
  transition: border-color 200ms, box-shadow 200ms;
}

.form-input:focus {
  outline: none;
  border-color: var(--color-primary-600);
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.15);
}

/* Error state */
.form-input[aria-invalid="true"] {
  border-color: var(--color-error);
}

/* Textarea */
.form-textarea {
  /* Sama dengan input, tambahkan: */
  resize: vertical;
  min-height: 120px;
  padding: var(--space-3) var(--space-4);
}

/* Error message */
.form-error {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--text-sm);
  color: var(--color-error);
  margin-top: var(--space-1);
}
```

---

### 7.5 Navigation

```css
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  padding: var(--space-4) 0;
  background: rgba(250, 250, 250, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: background 300ms, border-color 300ms, box-shadow 300ms;
}

.navbar.scrolled {
  border-bottom-color: var(--border-default);
  box-shadow: var(--shadow-sm);
}

.nav-link {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--text-secondary);
  text-decoration: none;
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  transition: color 200ms, background 200ms;
  position: relative;
}

.nav-link:hover,
.nav-link[aria-current="page"] {
  color: var(--color-primary-600);
  background: var(--color-primary-50);
}

.nav-link:focus-visible {
  outline: 3px solid var(--color-primary-600);
  outline-offset: 2px;
}
```

---

## 8. Animation Tokens

```css
:root {
  /* Duration */
  --duration-instant: 0ms;
  --duration-fast:    150ms;
  --duration-normal:  300ms;
  --duration-slow:    500ms;
  --duration-slower:  800ms;

  /* Easing */
  --ease-linear:   linear;
  --ease-in:       cubic-bezier(0.4, 0, 1, 1);
  --ease-out:      cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out:   cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1);   /* Subtle bounce */
  --ease-bounce:   cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### 8.1 Scroll Animations (IntersectionObserver)

```css
/* Initial state */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity var(--duration-slow) var(--ease-out),
              transform var(--duration-slow) var(--ease-out);
}

/* Triggered state */
.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger children */
.animate-on-scroll:nth-child(1) { transition-delay: 0ms; }
.animate-on-scroll:nth-child(2) { transition-delay: 100ms; }
.animate-on-scroll:nth-child(3) { transition-delay: 200ms; }
.animate-on-scroll:nth-child(4) { transition-delay: 300ms; }
```

### 8.2 Reduced Motion (A11y WAJIB)

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration:   0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration:  0.01ms !important;
    scroll-behavior:      auto !important;
  }
}
```

---

## 9. Accessibility Guidelines

### 9.1 Color Contrast Requirements

| Elemen | Minimum Ratio | Target |
|---|---|---|
| Teks normal (< 18px) | 4.5:1 | 7:1 |
| Teks besar (>= 18px bold, >= 24px) | 3:1 | 4.5:1 |
| UI components (border, icon) | 3:1 | 4.5:1 |
| Focus indicator | 3:1 | penuh terlihat |

### 9.2 Focus Indicator — WAJIB

```css
/* Terapkan ini di semua elemen interaktif */
:focus-visible {
  outline: 3px solid var(--color-primary-600);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

/* Remove focus untuk mouse (tapi tetap untuk keyboard) */
:focus:not(:focus-visible) {
  outline: none;
}
```

### 9.3 Skip Navigation Link

```html
<!-- Letakkan di awal <body> -->
<a class="skip-link" href="#main-content">
  Langsung ke konten utama
</a>
```

```css
.skip-link {
  position: absolute;
  top: -100%;
  left: var(--space-4);
  padding: var(--space-3) var(--space-6);
  background: var(--color-primary-600);
  color: #FFFFFF;
  border-radius: var(--radius-md);
  font-weight: var(--font-semibold);
  z-index: 9999;
  transition: top 200ms;
}

.skip-link:focus {
  top: var(--space-4);
}
```

### 9.4 Touch Target Size

```css
/* Semua elemen interaktif minimum 44x44px */
.btn,
.nav-link,
.icon-btn {
  min-height: 44px;
  min-width: 44px;
}
```

### 9.5 ARIA Usage Guidelines

```html
<!-- Navigation -->
<nav aria-label="Navigasi utama">

<!-- Section -->
<section aria-labelledby="skills-heading">
  <h2 id="skills-heading">Skills & Tools</h2>

<!-- Filter buttons -->
<div role="group" aria-label="Filter proyek">
  <button aria-pressed="true">Semua</button>

<!-- Form -->
<label for="name">Nama Lengkap</label>
<input id="name" type="text" aria-required="true">

<!-- Live region untuk status form -->
<div role="status" aria-live="polite" id="form-status"></div>
```

---

## 10. Icon System

**Library:** Phosphor Icons (phosphoricons.com)
**Format:** SVG inline (untuk accessibility & styling)
**Ukuran:** 16px, 20px, 24px, 32px

```html
<!-- Contoh penggunaan icon dekoratif -->
<svg aria-hidden="true" focusable="false" ...>

<!-- Icon dengan makna — butuh label -->
<button aria-label="Buka menu navigasi">
  <svg aria-hidden="true" ...>
</button>
```

---

## 11. Image Guidelines

| Tipe | Format | Ukuran Max | Keterangan |
|---|---|---|---|
| Foto profil | .webp | 400KB | Square, min 800×800px |
| Thumbnail proyek | .webp | 200KB | 16:9 ratio, 1200×675px |
| Sertifikat | .webp / .jpg | 300KB | Landscape preferred |
| Favicon | .ico + .png | 32×32, 192×192 | Multi-size |
| OG Image | .png | 500KB | 1200×630px |

**Semua gambar WAJIB punya `alt` attribute:**
```html
<!-- Gambar informatif -->
<img src="..." alt="Screenshot aplikasi media pembelajaran untuk siswa tunarungu">

<!-- Gambar dekoratif -->
<img src="..." alt="">
```

---

## 12. Responsive Breakpoints

```css
/* Mobile First */
:root {
  /* Gunakan di media queries */
}

/* Tablet */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Wide */
@media (min-width: 1280px) { }

/* Ultra Wide */
@media (min-width: 1536px) { }
```

---

*Style Guide v1.0 — Dibuat dengan Antigravity AI — Agustus 2026*
*Selalu update dokumen ini saat ada perubahan design token*
