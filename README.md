# 🚀 Developer Portfolio Website

A modern, fast, and fully responsive personal portfolio website built with **React**, **Vite**, **Tailwind CSS v4**, and **AOS (Animate On Scroll)**. Designed to showcase projects, technical skills, work experience, education, and certifications with a clean dark-themed UI.

---

## ✨ Features

- Blazing Fast:** Powered by Vite & React for rapid hot module replacement (HMR).
- Modern Dark UI:** Styled with custom Tailwind CSS v4 colors and gradients.
- Fully Responsive:** Adaptive layout for desktops, tablets, and mobile devices with a slide-out mobile menu.
- Scroll Animations:** Smooth reveal animations using **AOS Library**.
- Smooth Navigation:** Dynamic section scrolling for easy navigation.
- Interactive Sections:**
  - **Hero Section:** Greeting, resume download link, and CTA buttons.
  - **Education:** Academic background and milestones.
  - **Certifications:** Verified achievements with external links.
  - **About Me:** Personal summary and key statistics counter.
  - **Skills & Experience:** Progress bars for technical skills and work history.
  - **Featured Projects:** Grid showcase with tech stack tags.
  - **Contact Form:** Clean connection form and social links.

---

## 🛠️ Tech Stack & Libraries

- **Frontend Framework:** [React.js](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Scroll Animations:** [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)

---

## 📂 Project Structure

```text
TharshiPortpolio/
├── public/
│   └── resume.pdf
├── src/
│   ├── assets/          # Project images & media
│   ├── components/      # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Education.jsx
│   │   ├── Certificates.jsx
│   │   ├── AboutSection.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main layout & AOS initialization
│   ├── index.css        # Global CSS & Tailwind imports
│   └── main.jsx
├── package.json
└── vite.config.js