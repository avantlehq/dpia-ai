# DPIA.ai

AI-powered marketing website for automated GDPR compliance and Data Protection Impact Assessments.

**🚀 Live Website:** https://dpia.ai  
**📱 Current Version:** 1.0.1 "Foundation Release"  
**✅ Status:** Production Ready - Main functionality working on Vercel

## 🚀 Features

- **Next.js 15** with App Router and TypeScript
- **Multi-language support** (English, Slovak, German) with next-intl
- **Modern UI** with Tailwind CSS and shadcn/ui components
- **SEO optimized** with sitemap generation and proper meta tags
- **Analytics** integration with Plausible (privacy-friendly)
- **MDX support** for content management
- **Responsive design** with dark/light theme support

## 🏗️ Project Structure

```
src/
├── app/
│   ├── [locale]/          # Internationalized pages
│   │   ├── about/
│   │   ├── contact/
│   │   ├── faq/
│   │   └── page.tsx       # Home page
│   └── layout.tsx
├── components/
│   ├── marketing/         # Marketing-specific components
│   └── ui/               # Reusable UI components
├── content/
│   └── articles/         # MDX articles
├── lib/
└── i18n/                 # Internationalization config
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- pnpm 9+

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/avantlehq/dpia-ai.git
cd dpia-ai
```

2. Install dependencies:
```bash
pnpm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Start development server:
```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Adding New Languages

1. Add the locale to `i18n/routing.ts`
2. Create a new message file in `messages/[locale].json`
3. Update the middleware configuration if needed

## 📦 Deployment

The project is configured for deployment on Vercel with automatic builds from the main branch.

### Environment Variables

Set the following environment variables in your deployment platform:

```bash
NEXT_PUBLIC_APP_URL=https://dpia.ai
SITE_URL=https://dpia.ai
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=dpia.ai
NEXT_PUBLIC_DPIA_AGENT_URL=https://dpia.avantle.ai
```

## 🔗 Related Projects

- **DPIA Agent** (`dpia-avantle-ai`) - The functional DPIA application
- **DPO Studio** (`dpo-studio-ai`) - Full-featured GDPR compliance platform

## 📝 License

Private - All rights reserved by Avantle

## 🤝 Contributing

This is a private project. For any questions or support, contact the development team.

---

*Built with ❤️ by the Avantle team*
