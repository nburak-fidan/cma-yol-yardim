# CMA Yol Yardım - Statik Web Sitesi

Bu klasör, CMA Yol Yardım web sitesinin düz HTML/CSS versiyonunu içerir. GitHub Pages veya herhangi bir statik hosting servisi ile ücretsiz olarak barındırılabilir.

## 📁 Klasör Yapısı

```
static-site/
├── index.html          # Ana HTML dosyası
├── css/
│   └── style.css       # Tüm stiller
├── js/
│   └── main.js         # JavaScript fonksiyonları
├── img/
│   ├── cmayolyardimlogo.svg  # Logo & Favicon
│   ├── herowebp.webp   # Hero arka plan
│   └── cekiciweb*.webp # Diğer görseller
└── video/
    └── websitevideo.mp4 # Tanıtım videosu
```

## 🚀 GitHub Pages ile Yayınlama

### Yöntem 1: GitHub Repository Root
1. Bu `static-site` klasörünün içindeki tüm dosyaları yeni bir GitHub repository'nin root'una yükleyin
2. Repository Settings > Pages > Source: `main` branch, `/ (root)` seçin
3. Save'e tıklayın
4. Siteniz `https://kullaniciadi.github.io/repo-adi/` adresinde yayınlanacak

### Yöntem 2: gh-pages Branch
1. `gh-pages` adında yeni bir branch oluşturun
2. Bu branch'e sadece `static-site` içeriğini koyun
3. Repository Settings > Pages > Source: `gh-pages` branch seçin

## 💻 Lokalde Test Etme

### Python ile (en basit)
```bash
cd static-site
python3 -m http.server 8080
```
Tarayıcıda: `http://localhost:8080`

### Node.js ile
```bash
npx serve static-site
```

### VS Code Live Server
VS Code'da `index.html` dosyasına sağ tıklayıp "Open with Live Server" seçin

## ✨ Özellikler

- ✅ Tamamen statik (sunucu gerektirmez)
- ✅ Responsive tasarım (mobil uyumlu)
- ✅ SEO optimizasyonlu
- ✅ Hızlı yükleme
- ✅ Modern CSS (CSS Variables, Flexbox, Grid)
- ✅ Smooth scroll animasyonları
- ✅ Accordion FAQ
- ✅ Mobile bottom bar
- ✅ Floating WhatsApp ve telefon butonları

## 🎨 Renk Şeması

| Değişken | Renk | Kullanım |
|----------|------|----------|
| `--primary` | #0ea5e9 | Ana renk (Sky Blue) |
| `--secondary` | #0f172a | Koyu arka plan |
| `--accent` | #06b6d4 | Vurgu rengi (Cyan) |

## 📞 İletişim Bilgileri (HTML'de Güncellenmeli)

- Telefon 1: 0530 975 58 19
- Telefon 2: 0532 273 13 42
- WhatsApp: 0530 975 58 19

---

**Not:** Bu site Next.js projesinden dönüştürülmüştür. Orijinal Next.js projesi aynı klasörde `src/` dizininde bulunmaktadır.
