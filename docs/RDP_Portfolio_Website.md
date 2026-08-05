# Rancangan Desain Produk (RDP)
## Personal Portfolio Website
### Pemilik: [Nama Pemilik]
### Versi: 1.0 | Tanggal: Agustus 2026

---

## 1. Visi & Konsep Desain

### 1.1 Design Philosophy
> **"Accessible by Design, Beautiful by Default"**

Portfolio ini mencerminkan identitas pemilik sebagai **Accessibility Specialist** yang membuktikan bahwa desain inklusif tidak harus membosankan — justru bisa elegan, hangat, dan modern.

### 1.2 Design Pillars

| Pilar | Deskripsi |
|---|---|
| ♿ **Accessible First** | WCAG 2.1 AA, contrast tinggi, keyboard navigable |
| 🌡️ **Warm & Welcoming** | Tone warna hangat, typography ramah, tidak intimidating |
| ✨ **Modern & Professional** | Layout clean, animasi halus, kesan premium |
| 📖 **Story-Driven** | Desain memandu user memahami journey pemilik |

---

## 2. Mood Board & Visual Direction

### 2.1 Kata Kunci Visual
```
Inklusif  •  Hangat  •  Profesional  •  Modern  •  Human  •  Trustworthy
```

### 2.2 Inspirasi Desain
- Clean typography dengan whitespace lega
- Gradient subtle (bukan neon/gelap total)
- Ilustrasi flat yang inklusif (menampilkan keberagaman)
- Card-based layout dengan shadow halus
- Accent warna yang berani namun tetap accessible

---

## 3. Color System

### 3.1 Palet Warna Utama

```
LIGHT MODE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background     #FAFAFA    ████  Off-white, tidak menyilaukan
Surface        #FFFFFF    ████  Card, modal backgrounds
Primary        #2563EB    ████  Blue 600 — kepercayaan, teknologi
Accent         #7C3AED    ████  Violet 600 — kreativitas, unik
Text Primary   #111827    ████  Near black — contrast > 12:1
Text Secondary #4B5563    ████  Gray 600 — contrast > 6:1
Border         #E5E7EB    ████  Subtle separator

DARK MODE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background     #0F172A    ████  Slate 900
Surface        #1E293B    ████  Slate 800
Text           #F1F5F9    ████  Slate 100 — contrast tinggi
Primary        #60A5FA    ████  Blue 400 — lebih terang di dark bg
Accent         #A78BFA    ████  Violet 400
```

### 3.2 Semantic Colors
```
Success    #059669  ████  (sertifikat, skill badge)
Warning    #D97706  ████  (highlight penting)
Error      #DC2626  ████  (form validation)
Info       #0284C7  ████  (tooltips, notes)
```

### 3.3 Gradient Signature
```css
/* Hero gradient — digunakan sebagai accent utama */
background: linear-gradient(135deg, #2563EB 0%, #7C3AED 100%);

/* Card hover gradient */
background: linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 100%);

/* Dark mode hero */
background: linear-gradient(135deg, #1E40AF 0%, #5B21B6 100%);
```

---

## 4. Typography

### 4.1 Font Pairing

```
DISPLAY FONT: Playfair Display (Serif)
→ Digunakan untuk: Hero tagline, section headings besar
→ Kesan: Elegan, berkelas, berkarakter
→ Contoh: "Building for Everyone"

BODY FONT: Inter (Sans-serif)
→ Digunakan untuk: Body text, navigation, cards, form
→ Kesan: Clean, modern, readable, accessible
→ Contoh: "Saya percaya bahwa teknologi harus bisa diakses oleh semua orang."

MONO FONT: JetBrains Mono (Monospace)
→ Digunakan untuk: Code snippets, skill tags, tech labels
→ Contoh: <html lang="id" />
```

### 4.2 Type Scale

```
Display (Hero)   : 56-72px  Playfair Display Bold
H1               : 48px     Playfair Display SemiBold
H2 (Section)     : 36px     Inter Bold
H3 (Card Title)  : 24px     Inter SemiBold
H4 (Sub)         : 20px     Inter Medium
Body Large       : 18px     Inter Regular — gunakan untuk paragraf utama
Body             : 16px     Inter Regular — minimum readability
Body Small       : 14px     Inter Regular
Caption          : 12px     Inter Medium
```

### 4.3 Line Height & Spacing
```
Headings  : line-height 1.2
Body      : line-height 1.7  ← a11y best practice untuk readability
Letters   : letter-spacing 0.01em untuk body, -0.02em untuk headings besar
```

---

## 5. Layout & Grid System

### 5.1 Breakpoints
```
Mobile   : 320px  – 767px   → 1 kolom
Tablet   : 768px  – 1023px  → 2 kolom
Desktop  : 1024px – 1279px  → 3 kolom
Wide     : 1280px+           → max-width 1200px, centered
```

### 5.2 Grid System
```css
Container  : max-width 1200px, padding 1.5rem kiri-kanan
Grid       : CSS Grid 12 kolom
Gap        : 1.5rem (24px) desktop, 1rem (16px) mobile
Section    : padding-top/bottom 6rem (96px) desktop, 4rem mobile
```

---

## 6. Wireframe Per Section

### 6.1 NAVIGATION BAR
```
┌──────────────────────────────────────────────────────────────┐
│  [Skip to content]  ← invisible, visible on focus (a11y)    │
├──────────────────────────────────────────────────────────────┤
│  Logo / Inisial    About  Skills  Projects  Cert  Experience │
│                                                    [Contact] │
│                                             [🌙 Dark Mode]  │
└──────────────────────────────────────────────────────────────┘
```
- **Behavior:** Sticky top, frosted glass effect saat scroll
- **Mobile:** Hamburger icon (☰), full-screen overlay menu
- **Active state:** Underline animasi + warna primary

---

### 6.2 HERO SECTION
```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│     Gradient background (blue → violet, subtle)             │
│                                                              │
│   ┌─────────────────────┐   ┌──────────────────────────┐   │
│   │  Halo, aku          │   │                          │   │
│   │                     │   │    [FOTO PROFIL]         │   │
│   │  [NAMA]             │   │    (rounded, border      │   │
│   │                     │   │     gradient)            │   │
│   │  Accessibility      │   │                          │   │
│   │  Specialist &       │   └──────────────────────────┘   │
│   │  Inclusive Designer │                                   │
│   │                     │                                   │
│   │  Dari dunia         │                                   │
│   │  Pendidikan Khusus  │                                   │
│   │  ke dunia teknologi │                                   │
│   │                     │                                   │
│   │ [Lihat Karya] [CV]  │                                   │
│   └─────────────────────┘                                   │
│                                                              │
│              ↓ scroll indicator (animasi bounce)            │
└──────────────────────────────────────────────────────────────┘
```
**Animasi Hero:**
- Teks muncul dengan fade-in + slide-up (staggered delay)
- Foto profil: scale-in dengan ring gradient berputar lambat
- Background: gradient bergerak lambat (CSS animation)

---

### 6.3 ABOUT SECTION
```
┌──────────────────────────────────────────────────────────────┐
│                    Tentang Saya                              │
│                                                              │
│   ┌───────────────────┐  ┌───────────────────────────────┐  │
│   │                   │  │  Paragraph cerita singkat...  │  │
│   │  [Ilustrasi /     │  │                               │  │
│   │   Second Photo]   │  │  "Saya percaya teknologi      │  │
│   │                   │  │  harus bisa diakses semua."   │  │
│   │                   │  │                               │  │
│   └───────────────────┘  │  ┌──────┐ ┌──────┐ ┌──────┐  │  │
│                          │  │  3+  │ │  10+ │ │  5+  │  │  │
│                          │  │ Tahun│ │Proyek│ │Sertif│  │  │
│                          │  └──────┘ └──────┘ └──────┘  │  │
│                          └───────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```
**Komponen Stats:** Angka counter animasi saat masuk viewport

---

### 6.4 SKILLS SECTION
```
┌──────────────────────────────────────────────────────────────┐
│                      Skills & Tools                          │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │  🎨 Design   │  │ 💻 Dev       │  │ ♿ A11y      │       │
│  │              │  │              │  │              │       │
│  │  • UI/UX     │  │  • HTML/CSS  │  │  • WCAG 2.1  │       │
│  │  • Figma     │  │  • JS        │  │  • ARIA      │       │
│  │  • Canva     │  │  • Vibe Code │  │  • NVDA      │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐                          │
│  │  📚 Edu      │  │ 🛠️ Tools     │                          │
│  │              │  │              │                          │
│  │  • Media     │  │  • Word/Excel│                          │
│  │    Pembel.   │  │  • GitHub    │                          │
│  │  • Kurikulum │  │  • AI Tools  │                          │
│  └──────────────┘  └──────────────┘                          │
└──────────────────────────────────────────────────────────────┘
```
**Animasi:** Card flip-in saat scroll, hover: lift + shadow + border glow

---

### 6.5 PROJECTS SECTION
```
┌──────────────────────────────────────────────────────────────┐
│                        Karya Saya                            │
│                                                              │
│  Filter: [Semua] [Media Pembelajaran] [UI/UX] [Web] [A11y]  │
│                                                              │
│  ┌───────────────────┐  ┌───────────────────┐               │
│  │ [Thumbnail Image] │  │ [Thumbnail Image] │               │
│  │                   │  │                   │               │
│  │ Judul Proyek      │  │ Judul Proyek      │               │
│  │ Deskripsi singkat │  │ Deskripsi singkat │               │
│  │                   │  │                   │               │
│  │ [Tag] [Tag] [Tag] │  │ [Tag] [Tag] [Tag] │               │
│  │        [Demo] [→] │  │        [Demo] [→] │               │
│  └───────────────────┘  └───────────────────┘               │
│                                                              │
│  ┌───────────────────┐  ┌───────────────────┐               │
│  │ ...               │  │ ...               │               │
│  └───────────────────┘  └───────────────────┘               │
└──────────────────────────────────────────────────────────────┘
```
**Animasi:** Filter dengan smooth fade + reflow, card hover: scale 1.02 + shadow

---

### 6.6 CERTIFICATES SECTION
```
┌──────────────────────────────────────────────────────────────┐
│                      Sertifikat & Pencapaian                 │
│                                                              │
│  ◄  ┌─────────────────────────────────────────────────┐  ►  │
│     │  [Thumbnail/Badge]  Nama Sertifikat             │     │
│     │                     Penyelenggara • Tahun       │     │
│     │                     [Lihat Sertifikat]          │     │
│     └─────────────────────────────────────────────────┘     │
│                                                              │
│     ● ● ○ ○ ○   ← dot indicator                             │
└──────────────────────────────────────────────────────────────┘
```
**Atau alternatif: Grid 3 kolom dengan card kecil**

---

### 6.7 EXPERIENCE TIMELINE
```
┌──────────────────────────────────────────────────────────────┐
│                     Pengalaman Saya                          │
│                                                              │
│                         │                                   │
│   2024 ●─────────────── │ ────────────────────────────      │
│         Tim Akreditasi  │                                   │
│         UNESA           │                                   │
│                         │                                   │
│                    ─────│──── ● 2023                        │
│                         │    Freelance Developer            │
│                         │    Media Pembelajaran              │
│                         │                                   │
│   2022 ●─────────────── │ ────────────────────────────      │
│         Freelance       │                                   │
│         Barista         │                                   │
│                         │                                   │
│                    ─────│──── ● 2018–2022                   │
│                         │    S1 Pendidikan Khusus           │
│                         │    UNESA                          │
└──────────────────────────────────────────────────────────────┘
```
**Animasi:** Entry muncul satu per satu saat scroll (slide dari kiri/kanan)

---

### 6.8 CONTACT SECTION
```
┌──────────────────────────────────────────────────────────────┐
│                      Mari Berkolaborasi!                     │
│         Punya proyek atau pertanyaan? Hubungi aku           │
│                                                              │
│   ┌────────────────────────┐  ┌───────────────────────────┐ │
│   │  [Nama]                │  │  Social Links:            │ │
│   │  [Email]               │  │                           │ │
│   │  [Pesan...]            │  │  LinkedIn  GitHub         │ │
│   │                        │  │  Instagram WhatsApp       │ │
│   │         [Kirim Pesan]  │  │                           │ │
│   └────────────────────────┘  │  📧 email@domain.com      │ │
│                               └───────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

---

### 6.9 FOOTER
```
┌──────────────────────────────────────────────────────────────┐
│   [Nama] © 2026       Dibuat dengan ♥ & a11y in mind        │
│   [LinkedIn] [GitHub] [Instagram]        [Kembali ke Atas ↑]│
└──────────────────────────────────────────────────────────────┘
```

---

## 7. Komponen UI Detail

### 7.1 Button Variants
```
PRIMARY     : bg-primary, text-white, rounded-xl, padding 12px 28px
              Hover: bg-primary-dark, translateY(-2px), shadow-lg

SECONDARY   : border-2 primary, text-primary, transparent bg
              Hover: bg-primary, text-white

GHOST       : no border, text-secondary
              Hover: bg-surface, text-primary

ICON BUTTON : 44x44px (minimum a11y target), centered icon
              Semua button: focus-visible outline 3px, offset 2px
```

### 7.2 Card Component
```
Background  : var(--color-surface)
Border      : 1px solid var(--color-border)
Border-radius: 16px
Shadow      : 0 4px 16px rgba(0,0,0,0.06)
Padding     : 24px
Hover       : shadow 0 8px 32px rgba(37,99,235,0.12), translateY(-4px)
Transition  : all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
```

### 7.3 Tag / Badge
```
Background  : var(--color-primary) + 15% opacity
Text        : var(--color-primary)
Padding     : 4px 12px
Border-radius: 999px (pill shape)
Font-size   : 12px, font-weight 600
```

### 7.4 Form Elements
```
Input Height : 48px (a11y: min 44px target)
Border       : 2px solid var(--color-border)
Focus        : border-color primary, box-shadow 0 0 0 4px rgba(37,99,235,0.15)
Label        : visible selalu, tidak placeholder-only (a11y)
Error state  : border-color error, icon !, error message below
```

---

## 8. Animasi & Motion Design

### 8.1 Prinsip Animasi
- **Purposeful:** Animasi ada untuk membimbing perhatian, bukan sekadar dekorasi
- **Respectful:** Selalu cek `prefers-reduced-motion`, fallback ke instant
- **Performant:** Gunakan `transform` & `opacity` (GPU-accelerated)
- **Subtle:** Duration 200-500ms, easing natural

### 8.2 Animation Tokens
```css
--duration-fast    : 150ms;
--duration-normal  : 300ms;
--duration-slow    : 500ms;
--ease-in-out      : cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring      : cubic-bezier(0.34, 1.56, 0.64, 1);  /* subtle bounce */
```

### 8.3 Scroll Animations (IntersectionObserver)
| Elemen | Animasi | Delay |
|---|---|---|
| Section heading | fade-in + slide-up 30px | 0ms |
| Skill cards | fade-in + scale 0.95→1 | staggered 100ms |
| Project cards | fade-in + slide-up | staggered 150ms |
| Timeline entries | slide-in dari kiri/kanan | staggered 200ms |
| Stats counter | count-up animation | 0ms |

---

## 9. Dark Mode Design

### 9.1 Toggle Behavior
- Tombol di navbar kanan atas
- Icon: ☀️ (light) / 🌙 (dark)
- State tersimpan di `localStorage`
- Transisi smooth: `transition: background-color 0.3s, color 0.3s`
- Auto-detect `prefers-color-scheme` saat pertama load

### 9.2 Dark Mode Adjustments
- Shadow lebih subtle (glow effect daripada drop-shadow)
- Image: filter brightness 0.9 untuk mengurangi glare
- Gradient: lebih dalam, lebih biru-violet

---

## 10. Responsive Design

### 10.1 Mobile-First Approach
```
Mobile (default)
  ↑ Tablet (@media min-width: 768px)
    ↑ Desktop (@media min-width: 1024px)
      ↑ Wide (@media min-width: 1280px)
```

### 10.2 Komponen Responsif
| Komponen | Mobile | Tablet | Desktop |
|---|---|---|---|
| Navigation | Hamburger | Hamburger | Full horizontal |
| Hero | Stacked (foto di bawah) | Stacked | Side by side |
| Skills grid | 1 kolom | 2 kolom | 3 kolom |
| Projects grid | 1 kolom | 2 kolom | 3 kolom |
| Timeline | Single line | Single line | Alternating |
| Contact | Stacked form | Stacked | Side by side |

---

## 11. Accessibility Design Guidelines

> Portfolio ini adalah showcase a11y skill pemilik — harus menjadi contoh terbaik

### 11.1 Visual A11y
- ✅ Contrast ratio ≥ 4.5:1 untuk teks normal
- ✅ Contrast ratio ≥ 3:1 untuk teks besar (≥ 18px bold atau ≥ 24px)
- ✅ Focus indicator visible: outline 3px solid primary, offset 2px
- ✅ Tidak hanya mengandalkan warna untuk menyampaikan informasi
- ✅ Ukuran touch target minimum 44×44px

### 11.2 Motion A11y
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 11.3 Structural A11y
- Satu `<h1>` per halaman
- Heading hierarchy: H1 → H2 → H3 (tidak skip level)
- Setiap gambar: `alt` yang deskriptif (atau `alt=""` jika dekoratif)
- Setiap form input: `<label>` eksplisit
- Setiap link: teks yang bermakna (bukan "klik di sini")

---

## 12. Assets & Resources

### 12.1 Aset yang Diperlukan
- [ ] Foto profil (resolusi min. 800×800px, format .webp)
- [ ] Screenshot setiap proyek (16:9 ratio, min. 1200×675px)
- [ ] Scan/foto sertifikat (atau badge digital)
- [ ] Logo/favicon (square, minimal)
- [ ] Open Graph image (1200×630px)

### 12.2 Resources Desain Gratis
| Resource | Link |
|---|---|
| Icons | phosphoricons.com |
| Illustrations | undraw.co (customizable color) |
| Fonts | fonts.google.com |
| Color tool | coolors.co / accessible-colors.com |
| Mockup | shots.so |

---

*Rancangan ini akan diperbarui sesuai feedback dan progress pengembangan.*
*Versi 1.0 — Dibuat dengan Antigravity AI — Agustus 2026*
