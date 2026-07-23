# Travel Agency & Taxi Services Web Application

A modern, high-performance web application built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Designed for travel agencies, cab aggregators, and tour operators to showcase holiday packages, fleet options, customer reviews, and streamline booking inquiries via direct desk & WhatsApp integration.

---

## ✨ Features

- 🚖 **Comprehensive Service Showcase**: Detailed categories for local sightseeing, outstation transfers, cab rentals, and holiday packages.
- 🚘 **Fleet Explorer**: Interactive vehicle showcase featuring Sedans, Luxury SUVs (Innova Crysta, Fortuner), and Tempo Travellers.
- 💬 **Instant Inquiry Routing**: Direct WhatsApp integration for instant quotes and customer inquiries.
- ⭐ **Customer Reviews & Testimonials**: Dynamic review carousel and guest stories with rating breakdowns.
- 🎨 **Premium Modern Design**: Liquid glassmorphism, HSL color gradients, Framer Motion micro-animations, and full responsive design.
- 📱 **Mobile-First Navigation**: Smooth mobile drawer navigation, quick call shortcuts, and responsive sticky header.
- 🔍 **SEO Optimized**: Pre-configured meta title/description tags, GFM semantic structure, and fast page load times.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI Component Library |
| **TypeScript** | Type-safe JavaScript Development |
| **Vite 8** | Next-Generation Frontend Tooling & Fast HMR |
| **Tailwind CSS** | Utility-First CSS Framework for Dynamic Styling |
| **Framer Motion** | Smooth Layout & Entrance Micro-Animations |
| **Lucide React** | Clean, Modern Icon Set |
| **React Router v7** | Client-Side SPA Routing |

---

## 📁 Project Structure

```text
├── public/                 # Static assets (logos, favicons, banners)
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── common/         # Layout components (Navbar, Footer, SEO, Modals)
│   │   └── home/           # Page sections (Hero, ServicesGrid, Fleet, Testimonials, FAQ)
│   ├── data/               # Business configuration & travel mock data
│   ├── pages/              # Main route views (Home, About, Services, Testimonials, Contact)
│   ├── types/              # TypeScript interface definitions
│   ├── App.tsx             # Application routing & layout frame
│   ├── index.css           # Design tokens, gradients, and custom utility classes
│   └── main.tsx            # Entry point
├── index.html              # HTML shell & web fonts
├── package.json            # Project dependencies & scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build settings
```

---

## 🚀 Quick Start Guide

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher) or **yarn** / **pnpm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/travel-agency-webapp.git
   cd travel-agency-webapp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## ⚙️ Build & Deployment

### Production Build

To create an optimized production bundle:
```bash
npm run build
```
The compiled static assets will be output to the `dist/` folder ready for deployment on Vercel, Netlify, Cloudflare Pages, or traditional web hosts.

### Preview Production Build

To test the compiled production build locally:
```bash
npm run preview
```

---

## 📝 Configuration

Business information, tour packages, fleet data, and contact details can be configured centrally in:
- `src/data/travelData.ts`

```typescript
export const BUSINESS_INFO = {
  name: 'Your Agency Name',
  phone: '+91 XXXXX XXXXX',
  whatsappPhone: '91XXXXXXXXXX',
  address: 'Your Business Location',
  hours: '24 Hours / 7 Days a Week',
};
```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
