# Jonathan Eka Saputra · Personal Portfolio & Blog Website

> **SCM Fulfillment Specialist & Aspiring Data Scientist**  
> Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, and Headless CMS Integration.

---

## Overview

A modern, minimalist, security-conscious personal portfolio and technical blog engineered for high-performance static delivery, full accessibility, and zero-maintenance content management.

### Key Highlights
- **Multi-Page Architecture**: Dedicated pages for Home (`/`), About (`/about`), Projects & Case Studies (`/projects`), Career & Credentials Timeline (`/experience`), Technical Blog (`/blog`), Contact (`/contact`), and Content Studio Portal (`/studio`).
- **Deep-Dive Case Studies**: Operational narratives (Problem $\rightarrow$ Challenge $\rightarrow$ System Architecture $\rightarrow$ Measurable Impact) for headline projects:
  - **`DC-Searcher`**: Spatial optimization and distribution center fulfillment router.
  - **`Solusi Rumah 1001`**: Multi-business residential services digital bridge.
  - **`Caraka-ID` & `transliterasi-aksara-bali-streamlit`**: NLP Balinese cultural computing.
- **Career Timeline & Credentials**: Complete verified experience at PT Wings Surya, PT Astra Otoparts Tbk, Petra Christian University (GPA: 3.66 High Honors), Bangkit Academy (Graduate with Distinction), and TensorFlow/Google certifications.
- **Content Management without Code**:
  - Pre-loaded with high-fidelity local data models for zero downtime.
  - Connects seamlessly to a free headless Sanity Studio workspace (`/studio` or hosted) for drag-and-drop screenshot uploads and rich-text authoring.
- **Security & Hardening**:
  - Server-side input validation and sanitization using **Zod**.
  - Silent bot defense via **Honeypot trap** (`website_url_hp`).
  - IP-based **Rate Limiting** (sliding window) on public form endpoints.
  - Strict security headers (`X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Strict-Transport-Security`, CSP).
  - Dark/Light mode with zero flash of unstyled content (`next-themes`).

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | **Next.js 15 (App Router)** + React 19 + TypeScript |
| Styling | **Tailwind CSS** + Custom Design System |
| Motion | **Framer Motion** (subtle micro-interactions & transitions) |
| Forms & Validation | **React Hook Form** + **Zod** + Server Actions |
| Content & CMS | **Sanity Headless CMS** + Local Resilient Data Fallbacks |
| Deployment | **Vercel** (Global Edge CDN, Automatic SSL) |

---

## Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## Linking Your Free Sanity CMS Workspace (Optional)

The website works immediately out of the box with all your projects and case studies loaded from local data. If you wish to use the visual web editor to upload screenshots and add posts from your phone or browser:

1. Create a free account at [sanity.io](https://www.sanity.io) (no credit card required).
2. Create a project named `jonathan-portfolio`.
3. Add your `Project ID` to `.env.local`:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
4. Visit `/studio` on your website or use your Sanity cloud dashboard.

---

## Deploying to Vercel

1. Push this repository to your GitHub account (`jonekaa/portfolio`).
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository and import it.
4. Add any environment variables from `.env.local` in the Vercel project settings.
5. Click **Deploy**. Vercel will automatically build and assign a free production URL with SSL!

---

## Author & Contact

**Jonathan Eka Saputra ("Jon")**  
- Email: [jonathansaputra03@gmail.com](mailto:jonathansaputra03@gmail.com)  
- GitHub: [github.com/jonekaa](https://github.com/jonekaa)  
- LinkedIn: [linkedin.com/in/jonekaa](https://linkedin.com/in/jonekaa)  
- Location: Surabaya, Jawa Timur, Indonesia  
