# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Features

- 🎨 Modern, responsive design with dark mode support
- ⚡ Built with Next.js 15 and TypeScript
- 🎭 Smooth animations with Framer Motion
- 🗄️ Database integration with Supabase
- 📱 Mobile-first responsive design
- 🔍 SEO optimized with meta tags and sitemap
- 🚀 Optimized for Vercel deployment

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Database:** Supabase
- **Icons:** Lucide React
- **Forms:** React Hook Form
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 8+
- Supabase account

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   Fill in your Supabase credentials in `.env.local`

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

### Method 1: Vercel Dashboard (Recommended)

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Configure environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. Deploy!

### Method 2: Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Set environment variables:
   ```bash
   vercel env add NEXT_PUBLIC_SUPABASE_URL
   vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
   ```

5. Redeploy with environment variables:
   ```bash
   vercel --prod
   ```

## Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Database Setup

1. Create a new Supabase project
2. Run the migration files in the `supabase/migrations` folder
3. The database will be automatically populated with sample data

## Project Structure

```
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # React components
│   ├── contexts/           # React contexts
│   └── lib/                # Utility functions and API
├── supabase/
│   └── migrations/         # Database migrations
├── public/                 # Static assets
└── ...config files
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Bundle optimization with SWC
- Static generation where possible
- Optimized fonts and assets

## SEO Features

- Meta tags and Open Graph
- Structured data
- Sitemap generation
- Robots.txt
- Performance optimizations

## License

MIT License - feel free to use this project for your own portfolio!