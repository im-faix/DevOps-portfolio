# 🚀 DevOps Portfolio

A dynamic and modern portfolio built with **Next.js**, **Tailwind CSS**, and **Vercel**, designed to automatically showcase all DevOps-related projects hosted on your GitHub.

🔗 **Live Site**: [https://devops-portfolio.vercel.app](https://devops-portfolio.vercel.app)

---

## 📸 Preview

![portfolio preview](public/preview.png)

---

## 🔥 Features

- 🔄 **Auto-Sync Projects**: Dynamically fetches DevOps-tagged GitHub repositories.
- 📄 **Auto-Updating Resume**: Resume is fetched from `public/Resume.pdf` — just replace the file to update.
- ✨ **Smooth Animations**: Scroll-based reveal animations using `scrollreveal.js`.
- 🌐 **Deployed on Vercel**: Continuous deployment on push to `main`.
- 🎨 **Tailwind CSS Styling**: Clean, responsive UI powered by Tailwind.

---

## 🧩 Tech Stack

| Tech         | Usage               |
|--------------|---------------------|
| Next.js      | React Framework     |
| TailwindCSS  | Styling             |
| Vercel       | Hosting & CI/CD     |
| GitHub API   | Project Auto-Fetch  |
| ScrollReveal | Animations          |

---

## 🛠️ Getting Started (For Local Dev)

1. **Clone this repo**
   ```bash
   git clone https://github.com/im-faix/DevOps-portfolio.git
   cd DevOps-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run locally**
   ```bash
   npm run dev
   ```

4. Open `http://localhost:3000`

---

## 📁 Project Structure

```
.
├── components/           # All UI sections (Hero, About, Skills, etc.)
├── pages/                # Next.js pages (index.jsx)
├── public/               # Static files (Resume.pdf, images)
├── styles/               # Tailwind/global styles
├── .gitignore
├── package.json
└── README.md
```

---

## 📄 How Resume Auto-Update Works

- Simply replace `public/Resume.pdf` with your new file.
- Commit and push — Vercel redeploys automatically.
- No code changes needed.

---

## 🌍 Hosting on Vercel

This portfolio is continuously deployed via [Vercel](https://vercel.com). Any push to `main` triggers an automatic deployment.

---

## 👨‍💻 Author

**Mohammed Faizan**  
[GitHub](https://github.com/im-faix) • [LinkedIn](https://linkedin.com/in/faizan9)

---

## ⭐ Credits

Inspired by [notharshhaa.site](https://www.notharshhaa.site)

---

## 📜 License

MIT © 2025 [im-faix](https://github.com/im-faix)