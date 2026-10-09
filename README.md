# Yash Nile — Android Developer Portfolio

A production-quality, modern 3D developer portfolio for **Yash Nile** (**Android Developer**), engineered with **React**, **TypeScript**, **Three.js**, **React Three Fiber**, and **modern CSS**.

---

## 🌟 Overview & Key Features

- **Dedicated Single-Role Identity: Android Developer**:
  Engineered specifically for Yash Nile as an Android Developer building modern, reliable, and user-focused Android applications with clean architecture, thoughtful UI, and practical backend integration.
- **Interactive 3D Hero Experience**:
  - Procedural workstation model (laptop, terminal display with glowing code)
  - Floating tech glyphs (Android capsule, Java octahedron, React torus, Database cylinder stack)
  - Theme-aware lighting (Dark purple/lavender glow vs Clean white studio)
  - Mouse/pointer parallax tilt and smooth idle animations
  - Battery/mobile-friendly (DPR capped, responsive scaling)
  - Graceful non-WebGL fallback illustration
- **Light & Dark Theme Engine**:
  - Dark Mode: Dark Professional + Purple/Lavender accent palette with subtle glassmorphism
  - Light Mode: Clean crisp background with readable dark typography and purple highlights
  - Remembers visitor choice via `localStorage` and falls back to system preference
- **Prioritized Android Projects**:
  - **TravelEase** (Java + Firebase native Android tour booking app)
  - **Android OTT Manager** (Flutter / Dart + Firebase mobile app)
  - **Smart Financial Expense Analysis** (Java 21, Spring Boot, MySQL, REST APIs — strictly zero AI references)
  - **Student Learning Platform (STP)** (React + Firestore)
  - **Virtual Blood Bank** (React + Firestore)
  - **Bappa Taxi Services** (React + PHP + MySQL)
  - **Personal Blog** (Semantic HTML5, CSS3, JS, MySQL)
- **Certification Centre**:
  Verified credentials registry featuring Native Android Application Development, Java Enterprise & Spring Boot, Full Stack Web, and SQL Architecture.
- **Dedicated Android Developer Resume**:
  Single primary action to preview or download `android-developer.pdf`.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Core Mobile Focus** | Android SDK, Kotlin, Java, Android Studio, Firebase, Material Design, REST APIs |
| **Frontend Framework** | React 18, TypeScript, Vite |
| **3D Rendering** | Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`) |
| **Styling** | Modern CSS Variables, Glassmorphism, Theme Engine |
| **Icons** | Lucide React (`lucide-react`) |
| **Target Build** | Static web bundle ready for Vercel, Netlify, or GitHub Pages |

---

## 🚀 Quick Start & Commands

### Prerequisites
- Node.js (v18+ or v20+)
- npm or pnpm

### Installation
```bash
npm install
```

### Run Locally (Development Server)
```bash
npm run dev
```
The development server will launch at `http://localhost:5173/`.

### Production Build
```bash
npm run build
```
Generates an optimized production bundle in `/dist`.

### Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Architecture

```text
e:/3D Portfolio/
├── public/
│   ├── assets/
│   │   ├── icons/
│   │   │   └── favicon.svg           # Custom YN monogram vector icon
│   │   ├── profile/
│   │   │   ├── yash-nile-profile.png # Professional developer portrait photo
│   │   │   └── yash-nile-profile.svg # Vector avatar fallback
│   │   ├── projects/                 # Vector artwork for each project
│   │   │   ├── travelease.svg
│   │   │   ├── ott-manager.svg
│   │   │   ├── smart-expense.svg
│   │   │   ├── stp-learning.svg
│   │   │   ├── blood-bank.svg
│   │   │   ├── bappa-taxi.svg
│   │   │   └── personal-blog.svg
│   │   └── certifications/           # Vector badges for certifications
│   │       ├── android-cert.svg
│   │       ├── java-cert.svg
│   │       ├── web-cert.svg
│   │       ├── database-cert.svg
│   │       └── default-cert.svg
│   └── resumes/
│       └── android-developer.pdf     # Yash Nile Android Developer Resume
├── src/
│   ├── components/
│   │   ├── about/                    # About section (Android developer narrative & focus cards)
│   │   ├── certifications/           # Certifications centre & credential cards
│   │   ├── common/                   # Navbar, Footer, ThemeToggle
│   │   ├── contact/                  # Contact section & direct email dispatch
│   │   ├── experience/               # Career trajectory & availability
│   │   ├── hero/                     # Hero presentation (Yash Nile — Android Developer)
│   │   ├── navigation/               # Sticky Navbar with section links & theme toggle
│   │   ├── projects/                 # Projects showcase (Android projects prioritized)
│   │   ├── resume/                   # Android Developer Resume section & download action
│   │   └── skills/                   # Reorganized 3-category skills (Android focus)
│   ├── components3d/
│   │   ├── HeroScene.tsx             # Canvas wrapper with WebGL detection
│   │   ├── TechWorkspace.tsx         # Procedural 3D laptop & desk model
│   │   ├── FloatingGlyphs.tsx        # Floating tech geometries & particles
│   │   ├── SceneLighting.tsx         # Theme-responsive 3D lights
│   │   └── HeroSceneFallback.tsx     # Clean SVG fallback if WebGL unavailable
│   ├── context/
│   │   └── ThemeContext.tsx          # Dark/Light theme state & storage
│   ├── data/                         # CENTRALIZED CONFIGURATION
│   │   ├── profile.ts                # Yash Nile bio, Android Developer title, education
│   │   ├── projects.ts               # 7 Projects with TravelEase & Android OTT Manager first
│   │   ├── certifications.ts         # Centralized certification registry & URLs
│   │   ├── skills.ts                 # 3 Categories (Android Development prioritized)
│   │   ├── experience.ts             # Career focus and timeline
│   │   └── socialLinks.ts            # GitHub, LinkedIn, email, phone links
│   ├── styles/
│   │   ├── index.css                 # Base resets, typography, utilities
│   │   └── theme.css                 # Dark & Light mode color tokens
│   ├── types/
│   │   └── index.ts                  # Shared TypeScript interfaces
│   ├── App.tsx                       # Main layout assembler
│   └── main.tsx                      # React root
├── index.html                        # Meta tags, typography, SEO
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🎨 How to Customize the Portfolio

All portfolio content is decoupled from UI components and stored in `src/data/`:

### 1. Update Profile Information (`src/data/profile.ts`)
- Name, titles, tagline, about paragraphs, location.
- Education details (Degree: MCA, SPPU, Expected 2027).
- Contact email and phone.

### 2. Replace Profile Photo
Place your photo at:
```text
/public/assets/profile/yash-nile-profile.png
```
If the file is missing, it will gracefully fall back to `yash-nile-profile.svg`.

### 3. Add Live Links & GitHub Repos (`src/data/projects.ts`)
Update `githubUrl` or `liveDemoUrl` for any project:
```typescript
{
  id: 'travelease',
  title: 'TravelEase',
  githubUrl: 'https://github.com/yashnile435/travelease',
  liveDemoUrl: '',
  ...
}
```

### 4. Update Resume PDF (`/public/resumes/`)
Replace or update your Android Developer resume PDF at:
```text
/public/resumes/android-developer.pdf
```

---

## 🚢 Deployment

The portfolio compiles into a high-performance static distribution in `/dist`.

### Deploy to Vercel
1. Push your repository to GitHub.
2. Import the project in Vercel.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.

---

## 📜 License
Personal portfolio of **Yash Nile**. All rights reserved.
"# 3D-Portfolio" 
