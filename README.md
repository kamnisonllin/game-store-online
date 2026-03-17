# 🎮 GameStore - Toko Game Online

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Midtrans](https://img.shields.io/badge/Payment-Midtrans-blue.svg)](https://midtrans.com/)

Website toko game online elegan dan modern dengan fitur lengkap termasuk sistem pembayaran terintegrasi.

![GameStore Preview](https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200)

## ✨ Fitur Utama

### 🛍️ Frontend
- **Desain Modern & Elegan** - UI/UX yang bersih dengan tema gelap modern
- **Responsive Design** - Tampilan optimal di desktop, tablet, dan mobile
- **Game Catalog** - Katalog game lengkap dengan filter dan pencarian
- **Shopping Cart** - Keranjang belanja dengan localStorage persistence
- **User Authentication** - Sistem login sederhana (simulasi)
- **Flash Sale** - Halaman promo dengan countdown timer
- **Category Filter** - Filter game berdasarkan kategori dan platform
- **Search Functionality** - Pencarian game real-time
- **Animations** - Animasi halus untuk pengalaman pengguna yang lebih baik

### 💳 Backend & Payment
- **Midtrans Integration** - Payment gateway dengan berbagai metode pembayaran:
  - GoPay
  - DANA
  - Transfer Bank (BCA, BNI, BRI, Mandiri)
  - Kartu Kredit
  - Alfamart / Indomaret
  - QRIS
  - Dan masih banyak lagi
- **Transaction Management** - Sistem manajemen transaksi lengkap
- **Game Key Generation** - Generate kunci game otomatis setelah pembayaran
- **Webhook Handler** - Handle notifikasi pembayaran dari Midtrans
- **API Endpoints** - RESTful API yang terstruktur

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- NPM atau Yarn
- Akun Midtrans (Sandbox/Production)

### Installation

1. **Clone repository**
```bash
git clone https://github.com/username/game-store-online.git
cd game-store-online
```

2. **Setup Frontend**
```bash
# Tidak perlu instalasi, langsung buka file index.html di browser
# Atau gunakan live server untuk development
```

3. **Setup Backend**
```bash
cd backend
npm install
```

4. **Konfigurasi Environment Variables**
```bash
cp .env.example .env
# Edit .env dan masukkan kredensial Midtrans Anda
```

5. **Jalankan Server**
```bash
# Development mode
npm run dev

# Production mode
npm start
```

6. **Buka Website**
```
Frontend: Buka file index.html di browser atau gunakan live server
Backend API: http://localhost:3000
```

## 📁 Struktur Project

```
game-store-online/
├── index.html                 # Halaman utama frontend
├── styles.css                 # Stylesheet dengan Tailwind-like design
├── script.js                  # JavaScript dengan semua fitur
├── README.md                  # Dokumentasi project
└── backend/
    ├── server.js              # Express server dengan Midtrans
    ├── package.json           # Dependencies backend
    ├── .env.example           # Contoh environment variables
    └── .gitignore             # Git ignore rules
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| POST | `/api/payment/create` | Buat transaksi pembayaran |
| GET | `/api/payment/status/:orderId` | Cek status pembayaran |
| POST | `/api/payment/cancel` | Batalkan transaksi |
| GET | `/api/game/key/:orderId` | Ambil kunci game |
| POST | `/api/payment/webhook` | Midtrans webhook |
| GET | `/api/admin/transactions` | List semua transaksi |

## 💡 Cara Penggunaan

### 1. Melihat Katalog Game
- Buka halaman utama untuk melihat katalog game
- Gunakan filter untuk mencari berdasarkan platform (PC/Console/Mobile)
- Gunakan kategori untuk filter berdasarkan genre game

### 2. Menambahkan ke Keranjang
- Klik tombol "+" pada game yang diinginkan
- Game akan otomatis masuk ke keranjang
- Keranjang tersimpan di browser (localStorage)

### 3. Checkout & Pembayaran
- Klik icon keranjang di navbar
- Review item dan klik "Checkout Sekarang"
- Pilih metode pembayaran
- Klik "Bayar Sekarang"
- Anda akan diarahkan ke halaman pembayaran Midtrans

### 4. Menerima Game Key
- Setelah pembayaran berhasil, sistem akan generate game key
- Key akan dikirim ke email Anda (dalam implementasi production)
- Atau bisa diambil via API `/api/game/key/:orderId`

## 🎨 Fitur Desain

### Color Palette
- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#ec4899` (Pink)
- **Accent**: `#06b6d4` (Cyan)
- **Background**: `#0f172a` (Dark Slate)
- **Surface**: `#1e293b` (Slate)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Animations
- Smooth scroll
- Floating hero image
- Card hover effects
- Modal transitions
- Toast notifications
- Scroll reveal animations

## 🔐 Konfigurasi Midtrans

### Sandbox Mode (Development)
1. Daftar di [Midtrans Sandbox](https://sandbox.midtrans.com/)
2. Dapatkan Server Key dan Client Key
3. Masukkan ke file `.env`
4. Gunakan kartu kredit test untuk pembayaran:
   - **Visa**: `4811 1111 1111 1114`
   - **Mastercard**: `5211 1111 1111 1117`
   - **CVV**: `123`
   - **Expiry**: Bulan/Year yang valid di masa depan

### Production Mode
1. Aktifkan akun production di Midtrans
2. Update `.env` dengan kredensial production
3. Set `isProduction: true` di konfigurasi Midtrans
4. Update Client Key di frontend

## 🛠️ Tech Stack

### Frontend
- HTML5 Semantic
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Inter)

### Backend
- Node.js
- Express.js
- Midtrans Node.js SDK
- CORS
- UUID

### Payment Gateway
- Midtrans Snap (Redirect)
- Midtrans Core API

## 📝 To-Do List

- [ ] Integrasi database (MongoDB/PostgreSQL)
- [ ] Sistem autentikasi lengkap (JWT)
- [ ] Email notification dengan Nodemailer
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Review dan rating sistem
- [ ] Wishlist feature
- [ ] Multi-language support
- [ ] Progressive Web App (PWA)

## 🤝 Contributing

Kontribusi sangat diterima! Silakan fork repository dan buat pull request.

1. Fork project
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Developer

**LYLuvin**
- Website: [lyluvin.com](https://lyluvin.com)
- GitHub: [@lyluvin](https://github.com/lyluvin)
- Email: support@lyluvin.com

## 🙏 Acknowledgments

- [Midtrans](https://midtrans.com/) - Payment Gateway
- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Typography
- [Unsplash](https://unsplash.com/) - Images

---

<p align="center">Made with ❤️ by LYLuvin</p>