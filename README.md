# Modul Backend - asmuam Baseline

## Deskripsi

Proyek ini adalah modul backend sebagai baseline dengan fitur autentikasi pengguna, manajemen data user, dan integrasi dengan Prisma sebagai ORM/ODM untuk manajemen database. Backend ini dibangun menggunakan Node.js dengan Express,dan bebereapa library pendukung serta dilengkapi dengan tes unit menggunakan Jest - Supertest.

## Style Guide

- variabel/fungsi/metode : camelCase
- url : kebab-case
- const : SCREAMING_SNAKE_CASE
- else : snake_case
- file naming : mengikuti isi, misal
  jika file berisi method maka menggunakan camelCase selainnya
  gunakan snake_case
- folder naming : snake_case
- spasi antara operator
- panjang baris < 80 karakter
- nama pada database : snake_case
-

## Code Guide

- validator pada route
- controller fokus mengatur alur data dari req ke service
- eksekusi db berada di service layer
- named export dibandingkan export default kecuali untuk file dengan 1 fungsi/method/etc diletakkan diakhir baris
- menggunakan commit convention
- otomatis test sebelum commit (dihapus sementara)
- prettier dan eslint
- kurung kurawal objek selalu satu baris dengan nama objek kecuali jika ditulis terkompresi
-

## Struktur Folder

```bash
frontend/
├── .husky/                    # Hooks git untuk linting commit dan menjalankan skrip sebelum commit
│
├── public/                    # Folder untuk file statis
│   ├── index.html             # Entry point HTML untuk aplikasi
│   └── favicon.ico            # Ikon favicon untuk aplikasi
│
├── src/                       # Folder utama untuk kode sumber aplikasi
│   ├── assets                 # Folder untuk file aset seperti gambar, font, dan media lainnya
│   ├── components             # Folder untuk komponen React reusable
│   ├── hooks                  # Folder untuk custom React hooks
│   ├── pages                  # Folder untuk komponen halaman (route) dalam aplikasi
│   ├── styles                 # Folder untuk file CSS/SCSS dan tema MUI
│   ├── App.js                 # Komponen utama aplikasi
│   ├── index.js               # Entry point JavaScript untuk aplikasi (rendering React)
│   ├── reportWebVitals.js     # File untuk mengukur performa aplikasi (opsional)
│   ├── service-worker.js      # File untuk service worker (PWA)
│   ├── serviceWorkerRegistration.js # Registrasi service worker
│   └── setupTest.js           # Konfigurasi untuk testing dengan React Testing Library
│
├── tests/                     # Folder untuk pengujian (unit testing)
│   ├── App.test.js            # Unit test untuk komponen App
│
├── .env                       # File untuk konfigurasi lingkungan (environment variables)
├── .eslintrc.json             # File untuk konfigurasi eslint
├── .gitignore                 # Mengabaikan file dan folder tertentu dari version control (Git)
├── .prettierrc                # Konfigurasi untuk format kode dengan Prettier
├── .commitlint.config.js      # Konfigurasi untuk validasi pesan commit dengan Commitlint
├── .eslint.config.mjs         # Aturan linting kode menggunakan ESLint
├── package-lock.json          # File yang mengunci versi dependensi npm
├── package.json               # File konfigurasi npm, termasuk dependensi dan skrip
└── README.md                  # Dokumentasi proyek ini (instruksi, deskripsi, dll.)
└── TODO                       # Catatan untuk pengembangan atau fitur yang harus ditambahkan

```

## Langkah-Langkah Instalasi

### Kloning Repository:

```bash
git clone https://github.com/asmuam/frontend.git
cd frontend
```

### Instal Dependensi dan Husky:

```bash
npm install
npm prepare
```

### Konfigurasi Variabel Lingkungan

Buat file .env di root proyek dan tambahkan variabel lingkungan yang dibutuhkan seperti koneksi database dan secret key JWT:

`.env`

```bash
PORT = 3000
NODE_ENV = production
PUBLIC_URL =
```

### Menjalankan Server

Jalankan server:

```bash
npm run start
## using nodemon
npm run dev
```

### Menjalankan Tes

Untuk menjalankan unit test menggunakan Jest, gunakan perintah berikut:

```bash
npm test
```

## Fitur Utama

## Teknologi yang Digunakan

## Panduan Conventional Commits

Conventional Commits adalah spesifikasi untuk menulis pesan commit yang dapat diinterpretasikan secara otomatis. Dengan mengikuti spesifikasi ini, Anda dapat dengan mudah menghasilkan changelog dan memahami sejarah perubahan dalam proyek.

Format Pesan Commit
Pesan commit harus mengikuti format berikut:

```bash
<type>(<scope>): <subject>
<body>
<footer>
```

Penjelasan Format

**type**: Jenis perubahan yang Anda buat. Berikut adalah beberapa tipe yang umum digunakan:

`feat`: Menambahkan fitur baru.

`fix`: Memperbaiki bug.

`docs`: Perubahan hanya pada dokumentasi.

`style`: Perubahan yang tidak mempengaruhi makna kode (spasi, format, dll).

`refactor`: Perubahan kode yang tidak menambah fitur atau memperbaiki bug.

`perf`: Perubahan yang meningkatkan kinerja.

`test`: Menambahkan tes yang hilang atau memperbaiki tes yang ada.

`chore`: Perubahan pada alat pengembangan atau pustaka yang tidak mempengaruhi kode sumber.

**scope**: (Opsional) Bagian dari kode yang dipengaruhi oleh perubahan. Ini dapat berupa nama modul, komponen, atau bagian dari aplikasi.

**subject**: Deskripsi singkat tentang perubahan. Harus dalam bentuk imperatif (misalnya, "tambah", "perbaiki", "hapus").

**body**: (Opsional) Penjelasan lebih lanjut tentang perubahan, termasuk alasan dan konteks jika perlu.

**footer**: (Opsional) Mengandung informasi tambahan, seperti referensi ke issue yang ditutup, misalnya:

\*dalam implementasinya masih fleksibel untuk subject/scope/body yang terpenting typenya usahakan sesuai

```bash
Closes #123
```

### Contoh Pesan Commit

Berikut adalah beberapa contoh pesan commit yang mengikuti pedoman Conventional Commits:

Menambahkan fitur baru:

```scss
feat(auth): tambahkan autentikasi JWT;
```

Memperbaiki bug:

```scss
fix(ui): perbaiki masalah tampilan pada halaman login;
```

Mengupdate dokumentasi:

```scss
docs(README): tambahkan contoh penggunaan API;
```

Melakukan refactor:

```scss
refactor(user): ubah struktur data pengguna;
```

Menambah pengujian:

```scss
test(auth): tambahkan pengujian untuk fungsi login;
```

### Kesalahan Umum

**subject-empty**: Subjek pesan commit tidak boleh kosong.
**type-empty**: Tipe pesan commit tidak boleh kosong.
**subject may not be empty**: Pastikan subjek pesan commit Anda tidak kosong dan mendeskripsikan perubahan.

### Menggunakan Commitlint

Untuk memastikan bahwa pesan commit Anda mengikuti pedoman ini, kami menggunakan Commitlint. Jika Anda melakukan commit yang tidak memenuhi kriteria, Anda akan menerima pesan kesalahan yang memberi tahu Anda tentang masalah tersebut.

## Kontribusi

Jika ingin berkontribusi, silakan buat pull request.
