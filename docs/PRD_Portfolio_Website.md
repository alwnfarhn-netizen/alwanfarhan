# Product Requirements Document (PRD)
## Personal Portfolio Website
**Versi:** 1.0
**Tanggal:** Agustus 2026
**Status:** Draft
**Author:** M. Alwan Farhan 

---

## 1. Latar Belakang & Problem Statement

### 1.1 Konteks
Alwan Farhan adalah lulusan S1 Pendidikan Khusus (UNESA) yang kini beralih ke dunia teknologi dengan spesialisasi **Accessibility (a11y)**, UI/UX Design, dan pengembangan Media Pembelajaran. Saat ini tidak ada platform terpusat yang menampilkan semua skill, pengalaman, dan karya secara profesional.

### 1.2 Problem Statement
> *"Bagaimana caranya recruiter, klien freelance, dan rekan profesional bisa memahami nilai dan keunikan profil saya dalam waktu kurang dari 60 detik?"*

### 1.3 Opportunity
Profil gabungan **Pendidikan Khusus + A11y + Tech** sangat langka di Indonesia. Portfolio ini menjadi differentiator yang kuat di pasar kerja dan freelance.

---

## 2. Tujuan Produk (Goals)

| # | Goal | Prioritas |
|---|---|---|
| G1 | Membangun personal branding sebagai a11y & inclusive design specialist | High |
| G2 | Menarik perhatian recruiter di bidang tech dan pendidikan | High |
| G3 | Mendapatkan klien freelance baru (web dev, UI/UX, media pembelajaran) | High |
| G4 | Showcase karya dan sertifikat secara profesional | Medium |
| G5 | Menjadi contoh nyata implementasi web accessibility | Medium |

---

## 3. User Persona

### 3.1 Persona 1 — Recruiter HR Tech
```
Nama      : Rina (35 tahun)
Role      : HR Manager di startup edtech
Goal      : Mencari UI/UX designer yang paham pendidikan inklusif
Pain      : Susah menemukan kandidat yang punya background education + tech
Behavior  : Buka LinkedIn → portofolio → 30 detik pertama menentukan segalanya
```

### 3.2 Persona 2 — Klien Freelance
```
Nama      : Pak Budi (45 tahun)
Role      : Kepala sekolah / lembaga pendidikan
Goal      : Butuh media pembelajaran digital untuk siswa berkebutuhan khusus
Pain      : Tidak tahu harus cari developer yang mengerti konteks PK ke mana
Behavior  : Cari Google → lihat portofolio → cek testimonial → hubungi via WhatsApp
```

### 3.3 Persona 3 — Kolega / Networking
```
Nama      : Dina (28 tahun)
Role      : Fellow developer / designer
Goal      : Ingin kolaborasi atau referensi proyek a11y
Behavior  : Dapat link dari LinkedIn → lihat proyek → kontak via LinkedIn
```

---

## 4. Scope & Features

### 4.1 In-Scope (Fase 1 — MVP)

| Feature | Deskripsi | Prioritas |
|---|---|---|
| F01 | Hero Section dengan tagline & CTA | Must Have |
| F02 | About Section dengan stats counter | Must Have |
| F03 | Skills Section dengan kategori | Must Have |
| F04 | Projects Section dengan filter | Must Have |
| F05 | Contact Section dengan form | Must Have |
| F06 | Dark / Light Mode Toggle | Should Have |
| F07 | Certificates Section | Should Have |
| F08 | Experience Timeline | Should Have |
| F09 | Smooth scroll animations | Should Have |
| F10 | Responsive (Mobile + Tablet + Desktop) | Must Have |
| F11 | WCAG 2.1 AA Compliance | Must Have |
| F12 | SEO Optimization | Should Have |
| F13 | CV Download (PDF) | Should Have |

### 4.2 Out-of-Scope (Fase 2+)

| Feature | Alasan Ditunda |
|---|---|
| Blog / Articles | Butuh CMS, scope terlalu besar untuk fase 1 |
| Backend / Database | Static site cukup untuk fase 1 |
| User Authentication | Tidak dibutuhkan |
| Multilingual (EN/ID) | Dapat ditambahkan fase 2 |

---

## 5. Functional Requirements

### F01 — Hero Section
- **FR-01.1:** Menampilkan nama lengkap pemilik sebagai `<h1>`
- **FR-01.2:** Menampilkan tagline profesional (max 2 baris)
- **FR-01.3:** Menampilkan foto profil dengan alt text deskriptif
- **FR-01.4:** Terdapat minimum 2 CTA button: "Lihat Karya" dan "Download CV"
- **FR-01.5:** Ada scroll indicator animasi ke section berikutnya

### F02 — About Section
- **FR-02.1:** Paragraf cerita singkat (max 150 kata)
- **FR-02.2:** Stat cards: jumlah tahun pengalaman, proyek, sertifikat
- **FR-02.3:** Stat counter animasi saat masuk viewport
- **FR-02.4:** Link ke CV / LinkedIn

### F03 — Skills Section
- **FR-03.1:** Minimal 5 kategori skill
- **FR-03.2:** Setiap kategori punya icon dan daftar skill
- **FR-03.3:** Layout grid responsif
- **FR-03.4:** Hover effect pada card

### F04 — Projects Section
- **FR-04.1:** Minimum 3 proyek ditampilkan
- **FR-04.2:** Setiap proyek: thumbnail, judul, deskripsi, tags, link
- **FR-04.3:** Filter by kategori (All, Media Pembelajaran, UI/UX, Web, A11y)
- **FR-04.4:** Filter animation smooth tanpa page reload
- **FR-04.5:** Jika belum ada proyek nyata, gunakan placeholder deskriptif

### F05 — Contact Section
- **FR-05.1:** Form dengan field: Nama, Email, Pesan
- **FR-05.2:** Validasi client-side semua field
- **FR-05.3:** Feedback sukses/gagal setelah submit
- **FR-05.4:** Tampilkan social media links: LinkedIn, GitHub, Instagram, WhatsApp
- **FR-05.5:** Tampilkan email address

### F06 — Dark / Light Mode
- **FR-06.1:** Toggle button di navbar
- **FR-06.2:** State tersimpan di localStorage
- **FR-06.3:** Auto-detect `prefers-color-scheme` saat pertama load
- **FR-06.4:** Transisi smooth antar mode

### F07 — Certificates Section
- **FR-07.1:** Menampilkan sertifikat dengan nama, penyelenggara, tahun
- **FR-07.2:** Thumbnail/badge sertifikat
- **FR-07.3:** Link ke sertifikat asli (jika tersedia online)

### F08 — Experience Timeline
- **FR-08.1:** Timeline vertikal dengan entry per pengalaman
- **FR-08.2:** Setiap entry: periode, posisi, institusi, deskripsi singkat
- **FR-08.3:** Animasi masuk saat scroll

### F13 — CV Download
- **FR-13.1:** Button download CV PDF di Hero dan About section
- **FR-13.2:** File PDF tersimpan di folder `/assets/`
- **FR-13.3:** Button dengan `download` attribute HTML

---

## 6. Non-Functional Requirements

| NFR | Requirement | Target |
|---|---|---|
| NFR-01 | Performance | Lighthouse >= 90 |
| NFR-02 | Accessibility | Lighthouse = 100, WCAG 2.1 AA |
| NFR-03 | SEO | Lighthouse >= 95 |
| NFR-04 | Load Time | First Contentful Paint < 1.5s |
| NFR-05 | Responsiveness | Tampil baik di 320px - 1920px |
| NFR-06 | Browser Support | Chrome, Firefox, Safari, Edge (2 versi terakhir) |
| NFR-07 | Hosting | Gratis (GitHub Pages / Netlify / Vercel) |

---

## 7. User Stories

```
US-01: Sebagai recruiter, aku ingin melihat profil singkat dalam 30 detik
       agar aku bisa memutuskan apakah kandidat relevan.

US-02: Sebagai klien freelance, aku ingin melihat contoh proyek nyata
       agar aku yakin developer ini bisa mengerjakan kebutuhan saya.

US-03: Sebagai pengunjung, aku ingin mengunduh CV dalam format PDF
       agar aku bisa menyimpan dan membagikannya.

US-04: Sebagai pengguna screen reader, aku ingin semua konten terbaca
       dengan baik agar aku bisa mengakses informasi tanpa hambatan.

US-05: Sebagai pengguna mobile, aku ingin tampilan yang responsif
       agar nyaman dibuka di HP.

US-06: Sebagai pengunjung, aku ingin menghubungi pemilik dengan mudah
       agar aku bisa langsung berkolaborasi atau bertanya.
```

---

## 8. Acceptance Criteria

| Feature | Kriteria Diterima |
|---|---|
| Hero | Nama, tagline, foto, 2 CTA button tampil, responsif di semua device |
| Skills | Min. 5 kategori, grid responsif, hover effect berfungsi |
| Projects | Min. 3 proyek, filter berfungsi, link aktif |
| Contact | Form submit berhasil, validasi berfungsi, feedback tampil |
| A11y | Axe DevTools: 0 critical violation, keyboard nav 100% |
| Performance | Lighthouse score >= 90 semua kategori |
| Dark Mode | Toggle berfungsi, tersimpan di localStorage |
| Mobile | Tampil baik di iPhone SE (375px) hingga Desktop (1440px) |

---

## 9. Constraints & Assumptions

### Constraints
- Budget: Rp 0 (gratis semua tools dan hosting)
- Tech: Vanilla HTML/CSS/JS (tanpa framework besar)
- Timeline: Fase 1 selesai dalam 2 minggu

### Assumptions
- Pemilik akan menyediakan: foto profil, deskripsi proyek, data sertifikat
- CV PDF sudah ada dan siap diupload
- Hosting menggunakan GitHub Pages atau Netlify

---

## 10. Revision History

| Versi | Tanggal | Perubahan |
|---|---|---|
| 1.0 | Agustus 2026 | Initial draft |

---
*PRD v1.0 — Dibuat dengan Antigravity AI — Agustus 2026*
