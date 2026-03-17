# 📤 Cara Upload ke GitHub

## Langkah 1: Install Git
Download dan install Git dari: https://git-scm.com/download/win

## Langkah 2: Buat Repository di GitHub
1. Buka https://github.com
2. Login ke akun Anda
3. Klik tombol "+" di pojok kanan atas → "New repository"
4. Isi nama repository: `game-store-online`
5. Pilih "Public" atau "Private"
6. Jangan centang "Initialize this repository with a README"
7. Klik "Create repository"

## Langkah 3: Push Project ke GitHub

Buka Command Prompt (CMD) atau PowerShell di folder project:

```bash
# Masuk ke folder project
cd game-store-online

# Inisialisasi Git
git init

# Tambahkan semua file
git add .

# Commit pertama
git commit -m "Initial commit: GameStore website with Midtrans payment"

# Tambahkan remote repository (ganti USERNAME dengan username GitHub Anda)
git remote add origin https://github.com/USERNAME/game-store-online.git

# Push ke GitHub
git push -u origin main
```

## Langkah 4: Verifikasi
1. Buka https://github.com/USERNAME/game-store-online
2. Pastikan semua file sudah terupload
3. File yang harus ada:
   - index.html
   - styles.css
   - script.js
   - README.md
   - LICENSE
   - backend/ (folder)

## Langkah 5: Setup GitHub Pages (Optional - untuk live demo)

Jika ingin menampilkan website langsung dari GitHub:

1. Buka repository di GitHub
2. Klik "Settings" tab
3. Di sidebar kiri, klik "Pages"
4. Di "Source", pilih "Deploy from a branch"
5. Pilih branch "main" dan folder "/ (root)"
6. Klik "Save"
7. Tunggu 2-3 menit
8. Website akan tersedia di: `https://USERNAME.github.io/game-store-online`

## Langkah 6: Setup Backend (Vercel/Heroku)

Untuk menjalankan backend payment gateway:

### Option A: Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Masuk ke folder backend: `cd backend`
3. Deploy: `vercel --prod`
4. Copy URL deployment dan update di frontend script.js

### Option B: Heroku
1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create gamestore-api`
4. Push: 
   ```bash
   cd backend
   git init
   heroku git:remote -a gamestore-api
   git add .
   git commit -m "Backend deploy"
   git push heroku main
   ```

## Troubleshooting

### Error: "fatal: not a git repository"
Pastikan Anda berada di folder yang benar:
```bash
cd path/to/game-store-online
git init
```

### Error: "Permission denied"
Gunakan Personal Access Token:
1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token
3. Gunakan token sebagai password saat push

### Error: "src refspec main does not match"
Coba gunakan "master" instead of "main":
```bash
git push -u origin master
```

## 📋 Checklist Sebelum Push

- [ ] Semua file sudah lengkap (index.html, styles.css, script.js, backend/)
- [ ] README.md sudah diisi
- [ ] .gitignore sudah ada
- [ ] Tidak ada file sensitif (password, API keys)
- [ ] Sudah test website di lokal

## 🔗 Links Penting

- GitHub: https://github.com
- Git Download: https://git-scm.com/download/win
- Vercel: https://vercel.com
- Heroku: https://heroku.com

---

**Butuh bantuan?** Hubungi saya atau buka issue di repository!