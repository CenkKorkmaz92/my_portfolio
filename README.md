# Cenk Korkmaz - Portfolio Website

A modern, responsive portfolioVITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📄 Available Scripts

```bash
npm run dev          # Start development server on localhost:5173
npm run build        # Build for production (outputs to /dist)
npm run preview      # Preview production build locally
npm run lint         # Run ESLint for code quality
```owcasing my fullstack development skills and projects. Built with React, TypeScript, and modern web technologies with a clean white and gray design.

## 🚀 Live Demo

[View Live Portfolio](https://your-domain.com) *(Coming Soon)*

## ✨ Features

- **Modern Design** - Clean, minimal white/gray aesthetic with smooth animations
- **Responsive Layout** - Optimized for all devices and screen sizes
- **Contact Form** - Working email contact form with EmailJS integration
- **Project Showcase** - Real projects with live demos and GitHub links
- **Legal Compliance** - Privacy Policy and Legal Notice pages for EU/German law
- **Performance Optimized** - Fast loading with Vite build system
- **TypeScript** - Type-safe development experience

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with functional components and hooks
- **TypeScript** - Type safety and enhanced developer experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible component library

### Features & Integrations
- **EmailJS** - Contact form email functionality
- **React Router** - Client-side routing for legal pages
- **Lucide React** - Beautiful, consistent icons
- **Responsive Design** - Mobile-first approach

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/CenkKorkmaz92/my_portfolio.git

# Navigate to project directory
cd my_portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Email Configuration

To enable the contact form:

1. Set up EmailJS account (see `EMAILJS_SETUP.md`)
2. Create `.env.local` file:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## � Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/          # shadcn/ui components
│   ├── About.tsx    # About section
│   ├── Contact.tsx  # Contact section
│   ├── Hero.tsx     # Hero section
│   ├── Projects.tsx # Projects showcase
│   └── Skills.tsx   # Skills section
├── lib/             # Utility functions
├── assets/          # Static assets
└── index.css        # Global styles
```

## � Design System

- **Colors:** White and gray palette with accent colors
- **Typography:** Inter font family
- **Spacing:** Consistent 4px grid system
- **Animations:** Smooth transitions and micro-interactions
- **Responsive:** Mobile-first design approach

## 🚀 Deployment

Easily deploy to any static hosting service:

- **Vercel** (Recommended)
- **Netlify** 
- **GitHub Pages**
- **Vercel**, **Railway**, etc.

### Deploy with Vercel

1. Connect your GitHub repository
2. Configure:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
