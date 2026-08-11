/**
 * translations.js
 * Menyimpan data teks untuk multi-bahasa (ID dan EN).
 */

const translations = {
  id: {
    // Navigation
    "nav.about": "Tentang",
    "nav.skills": "Skills",
    "nav.projects": "Karya",
    "nav.certificates": "Sertifikat",
    "nav.experience": "Pengalaman",
    "nav.contact": "Kontak",

    // Hero Section
    "hero.status": "Tersedia untuk peluang baru",
    "hero.greeting": "Halo, aku",
    "hero.role1": "Accessibility Specialist",
    "hero.role2": "& Inclusive Designer — dari dunia Pendidikan Khusus ke dunia teknologi.",
    "hero.tagline": "Membuktikan bahwa teknologi inklusif tidak harus membosankan — justru bisa elegan, hangat, dan modern.",
    "hero.btn.work": "Lihat Karya",
    "hero.btn.cv": "Download CV",

    // About Section
    "about.label": "Tentang Saya",
    "about.title1": "Dari Pendidikan Khusus",
    "about.title2": "ke Dunia Teknologi",
    "about.desc1": "Saya lulusan S1 Pendidikan Khusus dari Universitas Negeri Surabaya (UNESA) yang memilih untuk terjun ke dunia teknologi dengan membawa perspektif unik: bagaimana membuat teknologi lebih inklusif.",
    "about.desc2": "Spesialisasi saya ada di persimpangan antara Accessibility (a11y), UI/UX Design, dan pengembangan Media Pembelajaran. Kombinasi ini sangat langka di Indonesia — dan itulah keunikan saya.",
    "about.desc3": "Di luar dunia koding dan desain, saya juga sangat meminati <strong>Videografi, Fotografi, dan Editing</strong>. Saya juga memiliki ketertarikan kuat dalam bidang <strong>Bisnis</strong> dan rutin bereksperimen dengan <a href='https://github.com/alwnfarhn-netizen' target='_blank' style='color: var(--color-primary-600); text-decoration: none; font-weight: 600;'>Mini Projects di GitHub</a>.",
    "about.stat.years": "Tahun Berpengalaman",
    "about.stat.projects": "Proyek Selesai",
    "about.stat.certs": "Sertifikat",

    // Skills Section
    "skills.title1": "Apa yang Saya",
    "skills.title2": "Lakukan",
    "skills.desc": "Gabungan unik antara latar belakang pendidikan inklusif, UI/UX Design, dan kemampuan teknis modern.",
    "skills.bullet1": "Mengembangkan UI/UX yang berpusat pada pengguna (User-Centered Design).",
    "skills.bullet2": "Membangun website responsif yang mematuhi pedoman aksesibilitas (WCAG 2.1 AA/AAA).",
    "skills.bullet3": "Merancang media pembelajaran adaptif untuk pendidikan inklusif.",
    "skills.bullet4": "Melakukan audit aksesibilitas (a11y) menggunakan screen reader dan alat uji standar.",

    // Projects Section
    "projects.label": "Portfolio",
    "projects.title1": "Karya",
    "projects.title2": "Saya",
    "projects.desc": "Proyek-proyek yang mencerminkan passion saya terhadap teknologi inklusif dan desain yang bermakna.",
    "projects.filter.all": "Semua",
    "projects.filter.pm": "Project Management",
    "projects.filter.media": "Media Pembelajaran",
    "projects.filter.uiux": "UI/UX",
    "projects.filter.web": "Web",
    "projects.filter.a11y": "A11y",
    "projects.btn.visit": "Kunjungi Web",
    "projects.cat1": "Media Pembelajaran & Web",
    "projects.cat2": "Aksesibilitas & Web",
    "projects.cat3": "AI & Aksesibilitas",
    "projects.cat4": "UI/UX & Website",
    "projects.cat5": "Project Management",
    "projects.card1.title": "DysCare v3",
    "projects.card1.desc": "Media pembelajaran berbasis web yang dirancang khusus untuk membantu siswa penyandang disleksia belajar membaca dengan lebih mudah dan interaktif.",
    "projects.card2.title": "IsyaratHUB (Vol. 1)",
    "projects.card2.desc": "Platform inovatif berbasis web untuk menjembatani komunikasi dan memfasilitasi pembelajaran Bahasa Isyarat secara interaktif dan inklusif.",
    "projects.card3.title": "BSINDO-LLM",
    "projects.card3.desc": "Eksperimen pemanfaatan kecerdasan buatan (Large Language Model) khusus untuk pemrosesan dan penerjemahan Bahasa Isyarat Indonesia (BSINDO).",
    "projects.card4.title": "S1 PLB UNESA",
    "projects.card4.desc": "Website resmi program studi Pendidikan Khusus UNESA yang saya kelola, optimalkan SEO-nya, dan tingkatkan aksesibilitas layanannya.",
    "projects.card5.title": "Sertifikat & Pencapaian",
    "projects.card5.desc": "Kumpulan pencapaian, publikasi, dan keikutsertaan saya dalam berbagai program pengembangan diri, bootcamp, dan kompetisi.",

    // Timeline Section
    "timeline.title": "Perjalanan Karir",
    "timeline.subtitle": "Pengalaman Profesional & Edukasi",
    "timeline.date1": "2023 – 2024",
    "timeline.title1": "Website Manager — Tim Akreditasi Prodi PK",
    "timeline.org1": "Universitas Negeri Surabaya (UNESA)",
    "timeline.desc1": "Bertanggung jawab mengelola dan mengembangkan website untuk keperluan akreditasi Program Studi Pendidikan Khusus UNESA, memastikan konten terkini dan aksesibel bagi semua pemangku kepentingan.",
    "timeline.date2": "2022 – Sekarang",
    "timeline.title2": "Freelance Developer",
    "timeline.org2": "Media Pembelajaran & Web Development",
    "timeline.desc2": "Mengerjakan berbagai proyek freelance meliputi pengembangan media pembelajaran digital, UI/UX design, dan web development dengan fokus pada aksesibilitas dan user experience.",
    "timeline.date3": "2022 – 2023",
    "timeline.title3": "Guru dan Terapis ABK",
    "timeline.org3": "Pendidikan Khusus",
    "timeline.desc3": "Mengajar dan memberikan terapi kepada Anak Berkebutuhan Khusus (ABK), berfokus pada pengembangan kemampuan kognitif, motorik, dan sosial.",
    "timeline.date4": "2021 – 2022",
    "timeline.title4": "Freelance Barista",
    "timeline.org4": "Usaha Mandiri",
    "timeline.desc4": "Mengelola operasional kedai kopi, meracik berbagai jenis minuman, dan memastikan pelayanan pelanggan yang optimal dan ramah.",
    "timeline.date5": "2018 – 2022",
    "timeline.title5": "S1 Pendidikan Khusus",
    "timeline.org5": "Universitas Negeri Surabaya (UNESA)",
    "timeline.desc5": "Fokus pada studi tentang pengembangan potensi dan pendidikan anak berkebutuhan khusus, serta teknologi inklusif.",

    // Certificates Section
    "certs.label": "Pencapaian & Legalitas",
    "certs.title1": "Sertifikat, HKI &",
    "certs.title2": "Dokumen",
    "certs.desc": "Kumpulan pencapaian, hak kekayaan intelektual, serta dokumen legalitas profesional saya.",
    "certs.status.uploading": "Segera Diunggah →",
    "certs.verified": "✓ Terverifikasi",
    "certs.view": "Lihat Sertifikat",
    "certs.item1.title": "Belajar Dasar Cloud dan Gen AI di AWS",
    "certs.item1.org": "Dicoding Indonesia · 2026",
    "certs.item2.title": "Spec-Driven Development dengan Kiro",
    "certs.item2.org": "Dicoding Indonesia · 2026",

    // Documentation Section
    "docs.label": "Galeri",
    "docs.title1": "Dokumentasi",
    "docs.title2": "Kegiatan",
    "docs.desc": "Rekam jejak dan momen-momen penting selama perjalanan karir dan proyek saya.",

    // Experience Section
    "exp.label": "Perjalanan",
    "exp.title1": "Pengalaman",
    "exp.title2": "Saya",
    "exp.desc": "Setiap pengalaman membentuk perspektif unik saya terhadap teknologi dan manusia.",

    // Contact Section
    "contact.label": "Mari Terhubung",
    "contact.title1": "Kirim",
    "contact.title2": "Pesan",
    "contact.desc": "Punya ide proyek, tawaran kerja, atau sekadar ingin ngobrol tentang aksesibilitas? Jangan ragu untuk menghubungi saya!",
    "contact.form.name": "Nama Lengkap",
    "contact.form.email": "Alamat Email",
    "contact.form.message": "Pesan Anda",
    "contact.form.submit": "Kirim Pesan",
    
    // Miscellaneous
    "misc.lang.toggle": "Switch to English"
  },

  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.certificates": "Certificates",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    // Hero Section
    "hero.status": "Available for new opportunities",
    "hero.greeting": "Hello, I am",
    "hero.role1": "Accessibility Specialist",
    "hero.role2": "& Inclusive Designer — bridging Special Education and the tech world.",
    "hero.tagline": "Proving that inclusive technology doesn't have to be boring — it can be elegant, warm, and modern.",
    "hero.btn.work": "View Work",
    "hero.btn.cv": "Download CV",

    // About Section
    "about.label": "About Me",
    "about.title1": "From Special Education",
    "about.title2": "to the Tech World",
    "about.desc1": "I am a Special Education graduate from Universitas Negeri Surabaya (UNESA) who chose to dive into the tech world bringing a unique perspective: how to make technology more inclusive.",
    "about.desc2": "My specialization lies at the intersection of Accessibility (a11y), UI/UX Design, and Learning Media development. This combination is quite rare in Indonesia — and that is my uniqueness.",
    "about.desc3": "Outside of coding and design, I am also very passionate about <strong>Videography, Photography, and Editing</strong>. I also have a strong interest in <strong>Business</strong> and frequently experiment with <a href='https://github.com/alwnfarhn-netizen' target='_blank' style='color: var(--color-primary-600); text-decoration: none; font-weight: 600;'>Mini Projects on GitHub</a>.",
    "about.stat.years": "Years Experience",
    "about.stat.projects": "Completed Projects",
    "about.stat.certs": "Certificates",

    // Skills Section
    "skills.title1": "What I",
    "skills.title2": "Do",
    "skills.desc": "A unique blend of inclusive education background, UI/UX Design, and modern technical abilities.",
    "skills.bullet1": "Developing user-centered UI/UX design.",
    "skills.bullet2": "Building responsive websites that comply with accessibility guidelines (WCAG 2.1 AA/AAA).",
    "skills.bullet3": "Designing adaptive learning media for inclusive education.",
    "skills.bullet4": "Conducting accessibility (a11y) audits using screen readers and standard testing tools.",

    // Projects Section
    "projects.label": "Portfolio",
    "projects.title1": "My",
    "projects.title2": "Work",
    "projects.desc": "Projects that reflect my passion for inclusive technology and meaningful design.",
    "projects.filter.all": "All",
    "projects.filter.pm": "Project Management",
    "projects.filter.media": "Learning Media",
    "projects.filter.uiux": "UI/UX",
    "projects.filter.web": "Web",
    "projects.filter.a11y": "A11y",
    "projects.btn.visit": "Visit Web",
    "projects.cat1": "Learning Media & Web",
    "projects.cat2": "Accessibility & Web",
    "projects.cat3": "AI & Accessibility",
    "projects.cat4": "UI/UX & Website",
    "projects.cat5": "Project Management",
    "projects.card1.title": "DysCare v3",
    "projects.card1.desc": "Web-based learning media specifically designed to help students with dyslexia learn to read more easily and interactively.",
    "projects.card2.title": "IsyaratHUB (Vol. 1)",
    "projects.card2.desc": "An innovative web-based platform bridging communication and facilitating Sign Language learning interactively and inclusively.",
    "projects.card3.title": "BSINDO-LLM",
    "projects.card3.desc": "An experiment utilizing artificial intelligence (Large Language Model) specifically for processing and translating Indonesian Sign Language (BSINDO).",
    "projects.card4.title": "S1 PLB UNESA",
    "projects.card4.desc": "The official website of the UNESA Special Education study program, which I manage, optimize for SEO, and improve its service accessibility.",
    "projects.card5.title": "Certificates & Achievements",
    "projects.card5.desc": "A collection of my achievements, publications, and participation in various self-development programs, bootcamps, and competitions.",

    // Timeline Section
    "timeline.title": "Career Journey",
    "timeline.subtitle": "Professional Experience & Education",
    "timeline.date1": "2023 – 2024",
    "timeline.title1": "Website Manager — Special Education Accreditation Team",
    "timeline.org1": "State University of Surabaya (UNESA)",
    "timeline.desc1": "Responsible for managing and developing the website for the accreditation of the UNESA Special Education Study Program, ensuring content is up-to-date and accessible for all stakeholders.",
    "timeline.date2": "2022 – Present",
    "timeline.title2": "Freelance Developer",
    "timeline.org2": "Learning Media & Web Development",
    "timeline.desc2": "Working on various freelance projects including digital learning media development, UI/UX design, and web development focusing on accessibility and user experience.",
    "timeline.date3": "2022 – 2023",
    "timeline.title3": "Special Needs Teacher & Therapist",
    "timeline.org3": "Special Education",
    "timeline.desc3": "Teaching and providing therapy to Children with Special Needs, focusing on cognitive, motor, and social development.",
    "timeline.date4": "2021 – 2022",
    "timeline.title4": "Freelance Barista",
    "timeline.org4": "Independent Business",
    "timeline.desc4": "Managing coffee shop operations, brewing various types of beverages, and ensuring optimal and friendly customer service.",
    "timeline.date5": "2018 – 2022",
    "timeline.title5": "Bachelor of Special Education",
    "timeline.org5": "State University of Surabaya (UNESA)",
    "timeline.desc5": "Focused on studying the potential development and education of children with special needs, as well as inclusive technology.",

    // Certificates Section
    "certs.label": "Achievements & Legality",
    "certs.title1": "Certificates, IP &",
    "certs.title2": "Documents",
    "certs.desc": "A collection of my achievements, intellectual property rights, and professional legal documents.",
    "certs.status.uploading": "Coming Soon →",
    "certs.verified": "✓ Verified",
    "certs.view": "View Certificate",
    "certs.item1.title": "Cloud Basics and Gen AI in AWS",
    "certs.item1.org": "Dicoding Indonesia · 2026",
    "certs.item2.title": "Spec-Driven Development with Kiro",
    "certs.item2.org": "Dicoding Indonesia · 2026",

    // Documentation Section
    "docs.label": "Gallery",
    "docs.title1": "Activity",
    "docs.title2": "Documentation",
    "docs.desc": "Track record and important moments during my career and project journeys.",

    // Experience Section
    "exp.label": "Journey",
    "exp.title1": "My",
    "exp.title2": "Experience",
    "exp.desc": "Every experience shapes my unique perspective on technology and humanity.",

    // Contact Section
    "contact.label": "Let's Connect",
    "contact.title1": "Send a",
    "contact.title2": "Message",
    "contact.desc": "Have a project idea, job offer, or just want to chat about accessibility? Feel free to reach out!",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.message": "Your Message",
    "contact.form.submit": "Send Message",
    
    // Miscellaneous
    "misc.lang.toggle": "Ganti ke Bahasa Indonesia"
  }
};
