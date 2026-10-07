# RoarTech Inc. Website Replica

This project is a high-performance, pixel-perfect replica of the RoarTech Inc. website. It has been modernized and rebuilt using **Next.js (App Router)**, **React 19**, and **Tailwind CSS v4**.

## 🚀 Features & Architecture

### 1. Modern UI/UX Implementation
- **Pixel-Perfect Styling:** Exact replication of the original Astra WordPress theme color palette (Dark Cyan `#005a7e` and Accent Green `#9ac93c`).
- **Responsive Design:** Fluid layouts, flexbox/grid combinations, and mobile-first design patterns applied across all pages (`/services`, `/work`, `/certifications`, `/careers`, and Capability Statement brochures).
- **Custom Fonts:** Integrated `next/font/google` with the Montserrat font family to eliminate cumulative layout shift (CLS).

### 2. SaaS Development Best Practices
Following strict organizational and industry standards:
- **Cloud-Native & Portable (Rule 1.10):** 
  - Configured Next.js `output: "standalone"` in `next.config.ts` to dramatically reduce container sizes.
  - Implemented an optimized, multi-stage `Dockerfile` running as a non-root user (`nextjs:nodejs`) for high-security cloud deployments (GCP Cloud Run, AWS App Runner, K8s).
- **CI/CD Pipeline:** 
  - Integrated GitHub Actions (`.github/workflows/ci.yml`) for automated linting and build verification on every push and pull request to the `master` branch.
- **Component Reusability:** 
  - Extracted global UI fragments (Header, Footer, Clients Grid, Our Work) into modular components to adhere to DRY principles.

### 3. SEO, AEO & Visibility Optimization
- **Search Engine Optimization (SEO):** 
  - Fully populated dynamic Metadata in `src/app/layout.tsx`, including OpenGraph protocols, Twitter Cards, and detailed crawler bot configurations.
  - Generated programmatic `sitemap.ts` and `robots.ts` to guide search indexers effectively.
- **AI Engine Optimization (AEO):** 
  - Implemented `public/llms.txt`, providing a structured markdown reference tailored specifically for LLMs and AI agents crawling the site for context.
- **Favicon & Assets:** Correctly configured site icons and optimized static PDFs within the `/public` directory.

## 📁 Project Structure

```text
├── .github/workflows/   # CI/CD pipelines
├── public/              # Static assets (images, pdfs, llms.txt)
├── src/
│   ├── app/             # Next.js App Router pages (Home, Services, Work, etc.)
│   └── components/      # Reusable React components (Header, Footer, Clients, etc.)
├── Dockerfile           # Multi-stage production container build
├── next.config.ts       # Next.js configuration (Standalone mode)
├── tailwind.config.ts   # (Deprecated in v4 - styles mapped to globals.css)
└── package.json         # Dependencies & scripts
```

## 🛠️ Local Development

First, install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Docker Deployment

Build the production Docker image:
```bash
docker build -t roartech-replica .
```

Run the containerized application:
```bash
docker run -p 3000:3000 roartech-replica
```
