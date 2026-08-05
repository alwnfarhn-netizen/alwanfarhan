# Software Design Document (SDD)
## Personal Portfolio Website
### Pemilik: [Nama Pemilik]
### Versi: 1.0 | Tanggal: Agustus 2026

---

## 1. Ringkasan Eksekutif

### 1.1 Tujuan Dokumen
Dokumen ini mendeskripsikan desain teknis dan arsitektur sistem untuk **Personal Portfolio Website** yang berfungsi sebagai platform personal branding, showcase karya, dan medium pencarian peluang kerja/klien freelance.

### 1.2 Profil Pemilik
| Atribut | Detail |
|---|---|
| **Latar Belakang** | S1 Pendidikan Khusus — Universitas Negeri Surabaya (UNESA) |
| **Spesialisasi Utama** | Accessibility (a11y) & Inclusive Design |
| **Skills Teknis** | UI/UX Design, Vibe Coding, Web Development, Media Pembelajaran |
| **Pengalaman** | Freelance Developer, Tim Akreditasi Prodi PK UNESA, Barista |
| **Sertifikasi** | Public Speaking & lainnya |

### 1.3 Tujuan Sistem
1. **Personal Branding** — Membangun identitas sebagai a11y & inclusive design specialist
2. **Job Hunting** — Menarik perhatian recruiter di bidang tech dan pendidikan
3. **Freelance Acquisition** — Showcase portofolio untuk mendapatkan klien baru
4. **Showcase Karya** — Menampilkan proyek media pembelajaran, UI/UX, dan web dev

---

## 2. Ruang Lingkup Sistem

### 2.1 Yang Termasuk (In-Scope)
- Single Page Application (SPA) responsif
- Halaman utama dengan 7 section
- Dark/Light mode toggle
- Accessibility-first implementation (WCAG 2.1 AA)
- Contact form fungsional
- SEO optimization
- Animasi dan micro-interaction

### 2.2 Yang Tidak Termasuk (Out-of-Scope)
- Backend/database (fase 1)
- Blog dengan CMS (dapat ditambahkan fase 2)
- E-commerce / payment system
- User authentication

---

## 3. Arsitektur Sistem

### 3.1 Overview Arsitektur

```
┌─────────────────────────────────────────────────┐
│                   CLIENT SIDE                   │
│  ┌──────────┐  ┌──────────┐  ┌──────────────┐  │
│  │   HTML5  │  │  CSS3    │  │  JavaScript  │  │
│  │ Semantic │  │ Vanilla  │  │  Vanilla ES6 │  │
│  └──────────┘  └──────────┘  └──────────────┘  │
└─────────────────────────────────────────────────┘
         │                           │
         ▼                           ▼
┌─────────────────┐       ┌──────────────────────┐
│  Static Hosting │       │   External Services  │
│  (GitHub Pages / │       │  - EmailJS (contact) │
│   Netlify/Vercel)│       │  - Google Fonts      │
└─────────────────┘       │  - Font Awesome Icons │
                          └──────────────────────┘
```

### 3.2 Tech Stack

| Layer | Teknologi | Alasan Pemilihan |
|---|---|---|
| **Structure** | HTML5 Semantic | SEO-friendly, a11y native |
| **Styling** | Vanilla CSS3 + CSS Variables | Kontrol penuh, performa tinggi |
| **Logic** | Vanilla JavaScript (ES6+) | Ringan, tanpa dependency besar |
| **Animation** | CSS Transitions + JS IntersectionObserver | Performant, respects `prefers-reduced-motion` |
| **Icons** | Font Awesome / Phosphor Icons | Akses ikon luas, support SVG |
| **Font** | Google Fonts (Inter + Playfair Display) | Modern, readable, accessible |
| **Contact** | EmailJS | Serverless form submission |
| **Hosting** | GitHub Pages / Netlify | Gratis, CDN global, HTTPS |

### 3.3 Struktur File Proyek

```
portfolio/
├── index.html              # Entry point utama
├── assets/
│   ├── css/
│   │   ├── main.css        # Design tokens + global styles
│   │   ├── components.css  # Komponen reusable
│   │   └── animations.css  # Animasi & transitions
│   ├── js/
│   │   ├── main.js         # Logic utama
│   │   ├── theme.js        # Dark/Light mode handler
│   │   ├── animations.js   # Scroll animations
│   │   └── contact.js      # Form handler (EmailJS)
│   ├── images/
│   │   ├── profile/        # Foto profil
│   │   ├── projects/       # Screenshot proyek
│   │   └── certificates/   # Gambar sertifikat
│   └── fonts/              # Font lokal (backup)
├── robots.txt              # SEO crawler rules
├── sitemap.xml             # SEO sitemap
└── README.md               # Dokumentasi proyek
```

---

## 4. Desain Komponen (Component Design)

### 4.1 Daftar Sections & Komponen

```
PAGE STRUCTURE
├── <header>          → Navigation Bar (sticky, skip-link)
├── <main>
│   ├── #hero         → Hero Section
│   ├── #about        → About Section  
│   ├── #skills       → Skills Section
│   ├── #projects     → Projects Section
│   ├── #certificates → Certificates Section
│   ├── #experience   → Experience Timeline
│   └── #contact      → Contact Section
└── <footer>          → Footer
```

### 4.2 Spesifikasi Komponen

#### 4.2.1 Navigation Bar
- **Behavior:** Sticky, berubah background saat scroll
- **Items:** Home, About, Skills, Projects, Certificates, Experience, Contact
- **Accessibility:** ARIA landmarks, keyboard navigation, skip-to-content link
- **Mobile:** Hamburger menu dengan animasi

#### 4.2.2 Hero Section
- **Konten:** Nama, tagline profesional, CTA buttons, animasi teks
- **Visual:** Gradient background, floating elements, scroll indicator
- **A11y:** Heading hierarchy H1, meaningful alt text

#### 4.2.3 Skills Section
- **Layout:** Card grid responsif (3 kolom desktop, 2 tablet, 1 mobile)
- **Kategori:**
  - 🎨 Design (UI/UX, Figma, Canva)
  - 💻 Development (HTML/CSS/JS, Vibe Coding)
  - ♿ Accessibility (WCAG, ARIA, Screen Reader Testing)
  - 📚 Education (Media Pembelajaran, Kurikulum PK)
  - 🛠️ Tools (Word, Excel, GitHub, AI Tools)
- **Visual:** Progress bar / tag cloud dengan animasi masuk

#### 4.2.4 Projects Section
- **Layout:** Masonry/Grid card
- **Data tiap card:** Thumbnail, judul, deskripsi, tags, link demo + repo
- **Filter:** Tab filter by kategori (All, Media Pembelajaran, UI/UX, Web, A11y)
- **A11y:** Focus management saat filter, status announcement

#### 4.2.5 Certificates Section
- **Layout:** Horizontal scroll cards / Grid
- **Konten:** Nama sertifikat, penyelenggara, tahun, badge/thumbnail

#### 4.2.6 Experience Timeline
- **Layout:** Vertical timeline (alternating kiri-kanan di desktop)
- **Entries:**
  1. Tim Akreditasi Prodi PK — UNESA (Website Manager)
  2. Freelance Developer — Media Pembelajaran & Web
  3. Freelance Barista
  4. S1 Pendidikan Khusus — UNESA (Education)

#### 4.2.7 Contact Section
- **Form Fields:** Nama, Email, Pesan, Submit button
- **Validation:** Client-side + feedback status
- **Method:** EmailJS API
- **Social Links:** LinkedIn, GitHub, Instagram, WhatsApp

---

## 5. Accessibility Requirements (A11y Specification)

> Sebagai a11y specialist, portfolio ini wajib memenuhi standar WCAG 2.1 Level AA

### 5.1 Checklist Implementasi

| Kriteria | Implementasi |
|---|---|
| **Perceivable** | Alt text semua gambar, caption video, contrast ratio ≥ 4.5:1 |
| **Operable** | Keyboard navigation penuh, skip links, focus visible |
| **Understandable** | Label form jelas, error message deskriptif, bahasa konsisten |
| **Robust** | Semantic HTML, ARIA roles, test screen reader (NVDA/VoiceOver) |

### 5.2 A11y Features Khusus
- `prefers-reduced-motion` — Matikan animasi jika user set di OS
- `prefers-color-scheme` — Auto-detect dark/light mode preference
- `prefers-contrast: more` — Tingkatkan contrast jika diminta
- Skip navigation link (visible on focus)
- Live region untuk dynamic content updates
- Proper heading hierarchy (H1 → H2 → H3)
- Focus trap pada modal/hamburger menu

---

## 6. Design System (Token)

### 6.1 Color Palette (Accessibility-First)

```css
:root {
  /* Primary Colors */
  --color-primary:      #2563EB;   /* Blue 600 - WCAG AA on white */
  --color-primary-dark: #1D4ED8;   /* Blue 700 - hover state */
  --color-accent:       #7C3AED;   /* Violet 600 - secondary accent */

  /* Neutral (Light Mode) */
  --color-bg:           #FAFAFA;
  --color-surface:      #FFFFFF;
  --color-border:       #E5E7EB;
  --color-text-primary: #111827;   /* Contrast ratio > 12:1 */
  --color-text-secondary: #4B5563; /* Contrast ratio > 6:1 */

  /* Neutral (Dark Mode) */
  --color-bg-dark:      #0F172A;
  --color-surface-dark: #1E293B;
  --color-text-dark:    #F1F5F9;
  
  /* Semantic */
  --color-success:      #059669;
  --color-warning:      #D97706;
  --color-error:        #DC2626;
}
```

### 6.2 Typography Scale

```css
:root {
  --font-primary: 'Inter', sans-serif;       /* Body & UI */
  --font-display: 'Playfair Display', serif; /* Heading hero */

  --text-xs:   0.75rem;   /* 12px */
  --text-sm:   0.875rem;  /* 14px */
  --text-base: 1rem;      /* 16px - minimum for readability */
  --text-lg:   1.125rem;  /* 18px */
  --text-xl:   1.25rem;   /* 20px */
  --text-2xl:  1.5rem;    /* 24px */
  --text-3xl:  1.875rem;  /* 30px */
  --text-4xl:  2.25rem;   /* 36px */
  --text-5xl:  3rem;      /* 48px */
}
```

### 6.3 Spacing & Layout

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-24: 6rem;     /* 96px */

  --max-width: 1200px;
  --border-radius: 12px;
  --border-radius-lg: 20px;
}
```

---

## 7. SEO & Performance

### 7.1 SEO Implementation

```html
<!-- Meta tags wajib -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="[Nama] — Accessibility Specialist & Inclusive Designer...">
<meta name="keywords" content="accessibility, a11y, UI/UX, media pembelajaran, pendidikan khusus">

<!-- Open Graph -->
<meta property="og:title" content="[Nama] | Portfolio">
<meta property="og:description" content="...">
<meta property="og:image" content="/assets/images/og-image.png">
<meta property="og:url" content="https://[username].github.io">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
```

### 7.2 Performance Target

| Metrik | Target |
|---|---|
| **Lighthouse Performance** | ≥ 90 |
| **Lighthouse Accessibility** | 100 |
| **Lighthouse SEO** | ≥ 95 |
| **First Contentful Paint** | < 1.5s |
| **Largest Contentful Paint** | < 2.5s |
| **Cumulative Layout Shift** | < 0.1 |

---

## 8. Deployment Strategy

### 8.1 Pilihan Hosting (Gratis)

| Platform | Kelebihan | URL Format |
|---|---|---|
| **GitHub Pages** | Integrasi langsung, gratis | `username.github.io` |
| **Netlify** | Custom domain gratis, form handling | `username.netlify.app` |
| **Vercel** | CDN cepat, preview deployment | `username.vercel.app` |

### 8.2 CI/CD Pipeline (Sederhana)

```
Push ke GitHub main branch
        │
        ▼
GitHub Actions (optional)
        │
        ▼
Auto-deploy ke GitHub Pages / Netlify
        │
        ▼
Live di custom domain (opsional)
```

---

## 9. Testing Plan

| Jenis Test | Tools | Kriteria Lulus |
|---|---|---|
| **A11y Audit** | Axe DevTools, WAVE | 0 critical errors |
| **Screen Reader** | NVDA (Windows), VoiceOver (Mac) | Semua konten terbaca |
| **Keyboard Nav** | Manual testing | 100% navigable |
| **Cross Browser** | Chrome, Firefox, Safari, Edge | Tampilan konsisten |
| **Responsive** | DevTools device emulator | Mobile, Tablet, Desktop |
| **Performance** | Lighthouse | Semua target terpenuhi |
| **Color Contrast** | Colour Contrast Analyser | Semua ≥ 4.5:1 |

---

## 10. Roadmap

| Fase | Scope | Estimasi |
|---|---|---|
| **Fase 1** (MVP) | Hero, About, Skills, Projects, Contact, Deploy | 1-2 minggu |
| **Fase 2** | Certificates, Experience Timeline, Dark Mode | 1 minggu |
| **Fase 3** | Blog/Articles, CMS integration, Custom Domain | 2-3 minggu |
| **Fase 4** | Analytics, A/B Testing, Performance Optimization | Ongoing |

---

*Dokumen ini akan diperbarui seiring perkembangan proyek.*
*Versi 1.0 — Dibuat dengan Antigravity AI — Agustus 2026*
