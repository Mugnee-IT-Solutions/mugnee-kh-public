<div align="center">

# Mugnee Cambodia — Corporate Website

**Digital signage, smart boards, PA systems & access control — bilingual (English / Khmer) marketing site for Cambodia.**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node](https://img.shields.io/badge/node-%3E%3D20%20%3C24-339933?logo=node.js&logoColor=white)](https://nodejs.org/)

[Live site](https://mugneekh.com/) · [Khmer home](https://mugneekh.com/km/)

</div>

---

## Overview

This repository powers the public website for **Mugnee Cambodia** (legal entity: **Mugnee Multiple Co., Ltd**): product and solution pages, blog, projects, policies, and a contact flow with SEO-oriented structure (canonical URLs, `hreflang`, JSON-LD).

| | |
| :--- | :--- |
| **Brand** | Mugnee Cambodia |
| **Focus** | LED displays, interactive flat panels, PA systems, turnstile / access solutions, professional AV in Cambodia |
| **Languages** | English (`/`) and Khmer (`/km/`) |
| **Canonical domain** | [mugneekh.com](https://mugneekh.com/) (configurable via `NEXT_PUBLIC_SITE_URL`) |

---

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Repository layout](#repository-layout)
- [Getting started](#getting-started)
- [Environment variables](#environment-variables)
- [Scripts](#scripts)
- [Build modes](#build-modes)
- [Content & data](#content--data)
- [Security & quality checks](#security--quality-checks)
- [Deployment notes](#deployment-notes)
- [Credits](#credits)

---

## Features

| Area | What visitors get |
| :--- | :--- |
| **Marketing pages** | Home, about (incl. CEO message), service, contact, projects, blog |
| **Product catalog** | Dynamic product pages, category hubs, search/grid indices under `public/data/` |
| **Solutions** | Dedicated solution pages (e.g. office access control) |
| **LED ecosystem** | Indoor / outdoor LED, receiving cards, video processors, power supplies |
| **Other lines** | Interactive flat panel, PA system, turnstile gate |
| **Policies** | Terms, return policy, site map |
| **SEO** | Sitewide JSON-LD, FAQ schema on home, canonical + `hreflang` alternates |
| **Contact** | API route with optional rate limiting, Turnstile, SMTP (see [Environment variables](#environment-variables)) |

---

## Tech stack

```text
Next.js 16 (App Router layout + Pages Router routes) · React 19 · TypeScript
Tailwind CSS 3 · PostCSS · ESLint (next/core-web-vitals)
Nodemailer (contact) · Sharp (image tooling in scripts)
```

Hybrid routing:

- **`app/`** — root layout, shared UI (header/footer), SEO helpers, `/api/contact`
- **`pages/`** — most user-facing routes (mirrored under `/km/` for Khmer)

---

## Repository layout

```text
mugnee-kh/
├── app/                    # Root layout, components, lib, API routes
├── pages/                  # Page routes (EN + /km/)
├── public/                 # Static assets + generated JSON indices
├── scripts/                # Data generation, image optimize, lint, export helpers
├── lib/                    # Shared data/helpers used by pages
├── next.config.ts          # CSP headers, redirects, static export toggle
└── package.json
```

---

## Getting started

### Prerequisites

- **Node.js** `>= 20` and `< 24` (see `package.json` → `engines`)
- **npm** (or compatible client)

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). For a clean dev lock on Windows:

```bash
npm run dev:clean
```

### Production build

```bash
npm run build
npm start
```

The default `build` pipeline runs data generation, image optimization, encoding/i18n checks, then `next build`. See [Scripts](#scripts) for details.

---

## Environment variables

Create a **`.env.local`** (never commit secrets; `.gitignore` already ignores `.env*`).

### Public (browser / build)

| Variable | Purpose |
| :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site base URL (defaults align with production host in code) |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | Override contact API path (default: `/api/contact`) |

### Server (contact API)

| Variable | Purpose |
| :--- | :--- |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE` | SMTP server (aliases: `MAIL_*`) |
| `SMTP_USER`, `SMTP_PASS` | Auth (aliases: `MAIL_*`, `GMAIL_*`) |
| `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` | Inbox / From |
| `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile verification |
| `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` | Optional rate limiting |
| `CONTACT_RATE_LIMIT_WINDOW_MS`, `CONTACT_RATE_LIMIT_MAX` | Rate limit tuning |

### Build / export

| Variable | Purpose |
| :--- | :--- |
| `STATIC_EXPORT` | Set to `true` for static HTML export (`output: "export"` in `next.config.ts`) |

<details>
<summary>Optional verification scripts</summary>

- `VERIFY_SITE_URL`, `VERIFY_PRODUCT_SLUG` — used by `verify:gsc:product-fix` (see `scripts/verify-gsc-product-fix.cjs`).

</details>

---

## Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Dev server (webpack, increased Node heap) |
| `npm run dev:clean` | Windows: clear dev lock then dev |
| `npm run dev:turbo` | Dev with Turbopack |
| `npm run build` | `gen:data` → image optimize → encoding + Khmer checks → `next build` |
| `npm run start` | Start production server |
| `npm run lint` | ESLint |
| `npm run gen:data` | Regenerate product JSON indices |
| `npm run gen:products` | PowerShell helper for product pages |
| `npm run optimize:critical-images` | Critical image optimization |
| `npm run lint:encoding` | Detect encoding / mojibake issues |
| `npm run lint:i18n` | Khmer integrity checks |
| `npm run verify:gsc:product-fix` | Sample URL verification for product fixes |

---

## Build modes

| Mode | Behavior |
| :--- | :--- |
| **Default (`STATIC_EXPORT` unset / not `true`)** | Server build: security headers, redirects, optimized images (not `unoptimized`) |
| **Static export (`STATIC_EXPORT=true`)** | `output: "export"` — static HTML; `postbuild` runs export meta, `.htaccess` sync, Khmer HTML lang fixes |

Trailing slashes are enabled (`trailingSlash: true`).

---

## Content & data

- **Product discovery** — generated files such as `public/data/products-grid-index.json` and `public/data/products-search-index.json` (from `npm run gen:data`).
- **Khmer** — parallel routes under `pages/km/**` with `inLanguage` metadata where applicable.

---

## Security & quality checks

- **CSP and security headers** on dynamic/server deployments (`next.config.ts`).
- **Contact endpoint** supports Turnstile + optional Redis-backed rate limiting.
- **Build-time** encoding and Khmer text integrity scripts reduce silent corruption in content.

---

## Deployment notes

- **Vercel / Node host** — typical path: set env vars, `npm run build`, `npm start` (or platform defaults).
- **Static hosting** — use `STATIC_EXPORT=true`, then deploy the export output per your host (postbuild adjusts static meta and language attributes).

---

## Credits

- **Developed by:** Mugnee IT Solutions  
- **Developer:** [Ankur Datta](https://github.com/ankur-datta-official) · ankurdatta.official@gmail.com  

---

## Business snapshot (on-site NAP)

| | |
| :--- | :--- |
| **Phone / WhatsApp** | +855 10 927 445 |
| **Email** | info@mugneekh.com |
| **Address** | 1st Floor, 11E0, Street 108, Night Market Area, Doun Penh, Phnom Penh, Cambodia |
| **Service areas** | Phnom Penh, Siem Reap, Sihanoukville |

Social links used in structured data include [Facebook](https://www.facebook.com/mugneemultiple/), [YouTube](https://www.youtube.com/@MugneeTech), [LinkedIn](https://www.linkedin.com/company/mugnee-multiple-limited/), and other profiles referenced in `app/lib/nap.ts`.

---

<div align="center">

**Built with Next.js · Bilingual by design · Production-minded tooling**

</div>
