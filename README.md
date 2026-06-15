# EventRental — Saudi Wedding Event Rental Platform

A bilingual (Arabic / English) event rental web app built for the Saudi market, focused on wedding and celebration equipment rental in Riyadh.

## Features

- **Bilingual UI** — Full Arabic (RTL) and English (LTR) support with instant language switching
- **Product Catalog** — 30+ items across 5 categories: Furniture, Wedding Decor, Tableware, Lighting & Sound, Tents
- **Smart Filtering** — Filter by category, price range, and color; live search across all products
- **Reservation System** — Multi-step booking form with delivery options and automatic WhatsApp order submission
- **WhatsApp Integration** — Floating chat button + reservation confirmation sent directly to WhatsApp
- **Lazy Image Loading** — Shimmer skeleton placeholders for fast perceived performance
- **Responsive Design** — Mobile-first layout with a collapsible navbar and mobile filter drawer

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 8 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Routing | React Router v7 |
| State | Zustand |
| i18n | i18next |
| Icons | Lucide React + React Icons |
| Font | IBM Plex Sans Arabic (Google Fonts) |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Type check
npx tsc --noEmit

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer, WhatsAppButton
│   └── ui/            # LazyImage, reusable components
├── data/
│   └── mockData.js    # Products, categories, popular items
├── i18n.ts            # Arabic / English translations
├── layouts/
│   └── MainLayout.tsx # Root layout with WhatsApp button
├── pages/
│   ├── Landing.tsx    # Home page
│   ├── Categories.tsx # Package categories
│   ├── Produits.tsx   # Full product catalog with filters
│   ├── ItemDetail.tsx # Single product detail
│   ├── Items.tsx      # Items within a package
│   ├── Reservation.tsx# Multi-step booking form
│   └── Contact.tsx    # Contact page
├── routes/
│   └── AppRoutes.tsx  # Route definitions
└── store/
    └── useStore.ts    # Zustand cart & reservation store
```

## Deployment (Netlify)

1. Push to GitHub
2. Connect repo to [Netlify](https://app.netlify.com)
3. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Add `public/_redirects` for SPA routing:
   ```
   /* /index.html 200
   ```

## Contact & Location

- **Location:** Riyadh, Saudi Arabia
- **Phone:** +966 50 123 4567
- **Email:** info@eventrental.sa
- **WhatsApp:** [wa.me/966501234567](https://wa.me/966501234567)
