# 🚗 Car Rental

<div align="center">
  <img src="public/logo.svg" alt="Car Rental Logo" width="200"/>
  
  <h3>Nền tảng thuê xe hiện đại với trải nghiệm đặt xe nhanh chóng và dễ dàng</h3>
  
  <p>
    <a href="#demo">Demo</a> •
    <a href="#tính-năng">Tính năng</a> •
    <a href="#công-nghệ">Công nghệ</a> •
    <a href="#cài-đặt">Cài đặt</a>
  </p>

  ![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js&logoColor=white)
  ![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
</div>

---

## 📸 Demo

<div align="center">
  <img src="public/hero.png" alt="Car Rental Hero" width="600"/>
  <p><em>Giao diện trang chủ với hero section ấn tượng</em></p>
</div>

---

## ✨ Tính năng

- 🔍 **Tìm kiếm xe** - Tìm kiếm xe theo nhiều tiêu chí
- 📱 **Responsive Design** - Giao diện tương thích mọi thiết bị
- ⚡ **Hiệu năng cao** - Tối ưu hóa với Next.js App Router
- 🎨 **UI/UX hiện đại** - Thiết kế đẹp mắt với TailwindCSS
- 🚀 **SEO tối ưu** - Hỗ trợ SSR và metadata

---

## 🛠️ Công nghệ

### Frontend
| Công nghệ | Mô tả |
|-----------|-------|
| ![Next.js](https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js) | Framework React với SSR/SSG |
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) | Thư viện UI component |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) | JavaScript với type-safe |
| ![TailwindCSS](https://img.shields.io/badge/Tailwind-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) | Utility-first CSS framework |

### Tools & Config
| Tool | Mô tả |
|------|-------|
| ![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=flat-square&logo=postcss&logoColor=white) | CSS transformer |
| ![Autoprefixer](https://img.shields.io/badge/Autoprefixer-DD3735?style=flat-square&logo=autoprefixer&logoColor=white) | Tự động thêm vendor prefixes |

---

## 📁 Cấu trúc dự án

```
car-rental/
├── 📂 app/                    # Next.js App Router
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Trang chủ
├── 📂 components/             # React components
│   ├── CustomButton.tsx      # Button component
│   ├── Hero.tsx              # Hero section
|   └── ...
│   └── index.ts              # Export components
├── 📂 constants/              # Hằng số
├── 📂 public/                 # Static assets
│   ├── hero.png              # Hero image
│   ├── logo.svg              # Logo
│   └── ...                   # Icons & images
├── 📂 types/                  # TypeScript types
├── 📂 utils/                  # Utility functions
│   ├── dom.ts
│   ├── object.ts
│   ├── params.ts
│   └── scroll.ts
├── next.config.ts            # Next.js config
├── tailwind.config.js        # Tailwind config
├── tsconfig.json             # TypeScript config
└── package.json              # Dependencies
```

---

## 🚀 Cài đặt

### Yêu cầu
- Node.js 18+ 
- npm hoặc yarn

### Các bước cài đặt

1. **Clone repository**
   ```bash
   git clone https://github.com/your-username/car-rental.git
   cd car-rental
   ```

2. **Cài đặt dependencies**
   ```bash
   npm install
   # hoặc
   yarn install
   ```

3. **Chạy development server**
   ```bash
   npm run dev
   # hoặc
   yarn dev
   ```

4. **Mở trình duyệt**
   
   Truy cập [http://localhost:3000](http://localhost:3000)

---

## 📝 Scripts

| Command | Mô tả |
|---------|-------|
| `npm run dev` | Chạy development server |
| `npm run build` | Build production |
| `npm run start` | Chạy production server |

---

## 🎨 Screenshots

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="public/hero-bg.png" width="300" alt="Hero Background"/>
        <br/>
        <em>Hero Background Pattern</em>
      </td>
      <td align="center">
        <img src="public/pattern.png" width="300" alt="Pattern"/>
        <br/>
        <em>Design Pattern</em>
      </td>
    </tr>
  </table>
</div>

### Icons có sẵn
<div align="center">
  <img src="public/steering-wheel.svg" width="40" alt="Steering Wheel"/>
  <img src="public/gas.svg" width="40" alt="Gas"/>
  <img src="public/tire.svg" width="40" alt="Tire"/>
  <img src="public/heart-outline.svg" width="40" alt="Heart"/>
</div>

---

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Hãy tạo Pull Request hoặc Issue để đề xuất tính năng mới.

---

## 📄 License

Dự án này được cấp phép theo [MIT License](LICENSE).

---

<div align="center">
  <p>Made with ❤️ using Next.js</p>
  
  <a href="https://github.com">
    <img src="public/github.svg" width="24" alt="GitHub"/>
  </a>
  <a href="https://linkedin.com">
    <img src="public/linkedin.svg" width="24" alt="LinkedIn"/>
  </a>
  <a href="https://twitter.com">
    <img src="public/twitter.svg" width="24" alt="Twitter"/>
  </a>
  <a href="https://discord.com">
    <img src="public/discord.svg" width="24" alt="Discord"/>
  </a>
</div>
# car-rental
