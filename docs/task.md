# Task — Personal Portfolio Website
**Status:** In Progress
**Terakhir diperbarui:** Agustus 2026

---

## FASE 0 — Dokumentasi & Persiapan

- [x] Buat PRD (Product Requirements Document)
- [x] Buat SDD (Software Design Document)
- [x] Buat RDP (Rancangan Desain Produk)
- [x] Buat Style Guide
- [x] Buat Task List ini
- [/] Kumpulkan aset dari pemilik:
  - [x] Foto profil — `profil alwan.jpg` tersedia
  - [x] Upload CV PDF — `CV Alwan Farhan.pdf` tersedia
  - [ ] Daftar proyek + deskripsi + screenshot 
  - [x] Daftar sertifikat — 2 sertifikat PDF tersedia
  - [x] Data pengalaman (periode, posisi, institusi) — sudah diisi
  - [x] Info kontak (email alwnfarhn@gmail.com, LinkedIn, GitHub https://github.com/alwnfarhn-netizen, Instagram @alwnfarhn, WhatsApp 085128071828)

---

## FASE 1 — Setup Proyek

- [x] Buat struktur folder proyek
  - [x] `index.html`
  - [x] `assets/css/main.css`
  - [x] `assets/css/components.css`
  - [x] `assets/css/animations.css`
  - [x] `assets/js/main.js`
  - [x] `assets/js/theme.js`
  - [x] `assets/js/animations.js`
  - [x] `assets/js/contact.js`
  - [x] `assets/images/` (folder tersedia)
- [x] Setup Google Fonts (Inter + Playfair Display + JetBrains Mono)
- [x] Setup design tokens di `main.css`
- [x] Setup CSS reset & base styles
- [ ] Setup favicon (perlu buat file .ico/.png)
- [x] Setup meta tags (SEO + Open Graph)

---

## FASE 2 — Development: Struktur HTML

- [x] Skeleton HTML dengan semantic elements
- [x] Skip navigation link (a11y)
- [x] Navigation Bar (HTML)
- [x] Hero Section (HTML)
- [x] About Section (HTML)
- [x] Skills Section (HTML)
- [x] Projects Section (HTML)
- [x] Certificates Section (HTML)
- [x] Experience Timeline (HTML)
- [x] Contact Section + Form (HTML)
- [x] Footer (HTML)
- [x] ARIA roles & landmarks semua section

---

## FASE 3 — Development: Styling CSS

- [x] Import design tokens dari Style Guide
- [x] Global styles (body, container, section)
- [x] Navigation Bar styling (sticky, frosted glass)
- [x] Hero Section styling (gradient bg, layout)
- [x] About Section styling
- [x] Skills Cards styling
- [x] Projects Cards styling + filter tabs
- [x] Certificates Section styling
- [x] Experience Timeline styling
- [x] Contact Form styling
- [x] Footer styling
- [x] Dark Mode CSS (`[data-theme="dark"]`)
- [x] Responsive styles (mobile, tablet, desktop)
- [x] Focus indicators (a11y)
- [x] Skip link styling (a11y)

---

## FASE 4 — Development: JavaScript

- [x] Dark/Light mode toggle (`theme.js`)
  - [x] Detect `prefers-color-scheme`
  - [x] Save ke `localStorage`
  - [x] Smooth transition
- [x] Scroll animations (`animations.js`)
  - [x] IntersectionObserver setup
  - [x] Stagger animasi card/item
  - [x] Stats counter animasi
  - [x] Timeline entry animasi
- [x] Hamburger menu mobile (`main.js`)
  - [x] Toggle open/close
  - [x] Focus trap saat menu terbuka (a11y)
  - [x] Close saat klik link atau ESC key
- [x] Active nav link saat scroll (`main.js`)
- [x] Projects filter (`main.js`)
  - [x] Filter by kategori
  - [x] Smooth show/hide animasi
  - [x] Announce filter result (a11y live region)
- [x] Contact form handler (`contact.js`)
  - [x] Validasi client-side
  - [ ] Kirim via EmailJS (perlu setup akun EmailJS)
  - [x] Feedback sukses/gagal
- [x] Smooth scroll behavior

---

## FASE 5 — Konten & Aset

- [x] Isi konten Hero (nama, tagline)
- [x] Isi konten About (bio, stats)
- [x] Isi daftar Skills per kategori
- [x] Isi data Projects (min. 3 proyek)
- [x] Upload dan optimasi gambar proyek ke .webp
- [x] Isi data Certificates
- [x] Isi data Experience Timeline
- [x] Upload CV PDF ke `assets/`
- [x] Buat/optimasi foto profil ke .webp
- [x] Buat OG image (1200×630px)
- [x] Buat favicon (.ico + .png)

---

## FASE 6 — Accessibility Audit

- [ ] Test keyboard navigation (Tab, Shift+Tab, Enter, Space, ESC)
- [ ] Test dengan Axe DevTools browser extension
  - [ ] Target: 0 critical violations
  - [ ] Target: 0 serious violations
- [ ] Test dengan WAVE (web accessibility evaluation tool)
- [x] Cek heading hierarchy (H1 → H2 → H3)
- [x] Cek semua gambar punya alt text
- [x] Cek semua form ada label
- [x] Cek color contrast (semua teks >= 4.5:1)
- [x] Test `prefers-reduced-motion` (matikan animasi di OS setting)
- [ ] Test screen reader NVDA (Windows)
- [x] Cek touch target size (min 44×44px)

---

## FASE 7 — Performance & SEO

- [x] Optimasi semua gambar (WebP, lazy loading)
- [x] Minify CSS dan JS (sudah ringkas)
- [ ] Cek Lighthouse Performance >= 90
- [ ] Cek Lighthouse Accessibility = 100
- [ ] Cek Lighthouse SEO >= 95
- [ ] Cek Lighthouse Best Practices >= 90
- [x] Tambah `sitemap.xml`
- [x] Tambah `robots.txt`
- [x] Cek meta description
- [x] Cek Open Graph tags

---

## FASE 8 — Cross Browser & Responsive Testing

- [ ] Test di Chrome (terbaru)
- [ ] Test di Firefox (terbaru)
- [ ] Test di Safari (jika tersedia)
- [ ] Test di Edge (terbaru)
- [ ] Test di mobile 375px (iPhone SE)
- [ ] Test di tablet 768px
- [ ] Test di desktop 1024px
- [ ] Test di wide 1440px

---

## FASE 9 — Deployment

- [ ] Buat akun GitHub (jika belum ada)
- [ ] Buat repository baru (nama: `username.github.io`)
- [ ] Push semua file ke repository
- [ ] Aktifkan GitHub Pages di Settings
- [ ] Verifikasi live di `https://username.github.io`
- [ ] (Opsional) Setup custom domain
- [ ] (Opsional) Setup Netlify untuk form handling

---

## FASE 10 — Launch & Post-Launch

- [ ] Share link di LinkedIn
- [ ] Share link di Instagram
- [ ] Update link portfolio di semua bio/profil
- [ ] Setup Google Analytics (opsional)
- [ ] Minta feedback dari orang terdekat
- [ ] Catat improvement untuk Fase 2

---

## Backlog (Fase 2)

- [ ] Blog / Articles section
- [ ] Dark mode yang lebih halus
- [ ] Multilingual (ID/EN)
- [ ] CMS integration
- [ ] Testimonial section
- [ ] Loading screen animasi
- [ ] Easter egg a11y (🎉)

---

## Catatan

> Tandai task dengan:
> - `[x]` = Selesai
> - `[/]` = Sedang dikerjakan
> - `[ ]` = Belum dimulai
> - `[-]` = Dilewati / tidak jadi

---
*Task v1.0 — Dibuat dengan Antigravity AI — Agustus 2026*
