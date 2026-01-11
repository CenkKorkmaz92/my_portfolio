# Portfolio Website

Modern, responsive portfolio built with React, TypeScript, and Bun.

## 🛠️ Built With

- React 18 + TypeScript
- Vite + Bun
- Tailwind CSS  
- shadcn/ui components
- EmailJS integration
- i18n support (EN/DE)

## 🚀 Live Demo

[cenk-korkmaz.de](https://cenk-korkmaz.de)

## ✨ Features

- **Modern Design** - Clean aesthetic with smooth animations and gradient effects
- **Bilingual Support** - Full English and German translations
- **Responsive Layout** - Optimized for all devices (mobile-first, 16px minimum font size)
- **Contact Form** - Working email contact form with EmailJS integration and validation
- **Project Showcase** - Real projects with live demos, GitHub links, and color-coded technologies
- **Legal Compliance** - Privacy Policy and Impressum pages for EU/German law
- **Performance Optimized** - Fast loading with Vite and Bun
- **TypeScript** - Full type safety
- **Accessibility** - WCAG compliant, readable fonts, proper contrast

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with functional components and hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Bun** - Fast JavaScript runtime and package manager
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible component library

### Features & Integrations
- **EmailJS** - Contact form email functionality
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **i18next** - Internationalization
- **Responsive Design** - Mobile-first with minimum 16px font size

## 🎨 Design System

- **Colors:** Modern gray/white palette with orange accents
- **Typography:** System fonts, minimum 16px on mobile
- **Spacing:** Consistent Tailwind spacing system
- **Animations:** Smooth transitions with custom animations
- **Responsive:** Mobile-first (320px+) to desktop (1920px+)

## 📦 Installation

```bash
# Install Bun (if not already installed)
curl -fsSL https://bun.sh/install | bash

# Install dependencies
bun install

# Create .env file with EmailJS credentials
cp .env.example .env
# Add your EmailJS credentials to .env
```

## 🚀 Development

```bash
# Start dev server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Lint code
bun run lint
```

## 📧 EmailJS Setup

1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Create email service and template
3. Add credentials to `.env`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── contexts/           # React contexts
│   └── LanguageContext.tsx
├── hooks/              # Custom hooks
├── lib/                # Utilities
├── pages/              # Route pages
├── translations/       # i18n translations
└── main.tsx           # Entry point
```

## 🌍 Deployment

Built for static hosting (Netlify, Vercel, GitHub Pages, etc.)

```bash
# Build
bun run build

# Output in /dist folder
```

## 📄 License

MIT License - Feel free to use for your own portfolio!

## 👤 Author

**Cenk Korkmaz**
- GitHub: [@CenkKorkmaz92](https://github.com/CenkKorkmaz92)
- LinkedIn: [cenk-korkmaz](https://www.linkedin.com/in/cenk-korkmaz-2731072a5)
- Email: Cenk.Korkmaz92@gmail.com