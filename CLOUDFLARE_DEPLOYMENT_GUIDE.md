# Cloudflare Deployment Guide for HLPFL.dev.tsx

## 🚀 Quick Setup Guide

Your Next.js application is now configured for Cloudflare Pages deployment. Here's how to deploy it:

### Option 1: Automatic Deployment (Recommended)

#### Step 1: Connect GitHub to Cloudflare Pages
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** → **Create application**
3. Click **"Connect to Git"**
4. Select GitHub and authorize Cloudflare
5. Choose your `HLPFLCG/hlpfldev.tsx` repository
6. Select the **main** branch

#### Step 2: Configure Build Settings
```
Build command: npm run build
Build output directory: out
Root directory: (leave empty)
```

#### Step 3: Environment Variables (Optional)
Add any environment variables your app needs:
```
NODE_VERSION: 18
```

#### Step 4: Deploy!
Click **"Save and Deploy"** - Cloudflare will automatically build and deploy your site.

---

### Option 2: Manual Deployment with Wrangler

#### Prerequisites
```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler auth login
```

#### Deploy Command
```bash
# From your project root
npm run deploy:cloudflare
```

---

## 🔧 Configuration Files Created

We've already set up these files for you:

### `next.config.ts`
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',           // Static export for Cloudflare Pages
  trailingSlash: true,         // Ensures proper routing
  images: {
    unoptimized: true         // Cloudflare handles optimization
  },
  distDir: 'out'             // Output directory
};

export default nextConfig;
```

### `wrangler.toml`
```toml
name = "hlpfldev-tsx"
compatibility_date = "2024-11-17"

[env.production]
name = "hlpfldev-tsx"
routes = [
  { pattern = "hlpfldev-tsx.pages.dev/*", zone_name = "hlpfldev-tsx.pages.dev" }
]

[env.preview]
name = "hlpfldev-tsx-preview"
```

### `package.json` Scripts
```json
{
  "scripts": {
    "build": "next build",
    "deploy:cloudflare": "npm run build && wrangler pages deploy out"
  }
}
```

---

## 🌍 Custom Domain Setup

After deployment:

1. Go to your Cloudflare Pages project
2. Click **"Custom domains"**
3. Add your domain (e.g., `hlpfl.dev`)
4. Update your DNS records as instructed by Cloudflare

---

## ⚡ Performance Optimizations Applied

- **Static Site Generation**: Your site is pre-built for optimal performance
- **Tailwind CSS**: Optimized with PurgeCSS for minimal CSS bundle
- **Image Optimization**: Configured for Cloudflare's built-in optimization
- **Next.js 16**: Latest version with improved performance

---

## 🔄 Automatic Deployments

Once connected to Git, Cloudflare will automatically:
- Build and deploy on every push to `main`
- Create preview deployments for pull requests
- Roll back to previous versions if needed

---

## 🐛 Troubleshooting

### Build Issues
```bash
# Clean build
rm -rf .next out
npm run build
```

### Deployment Issues
```bash
# Check Wrangler configuration
wrangler whoami
wrangler pages project list
```

### Environment Variables
Make sure all required environment variables are set in:
- Cloudflare Pages dashboard (for production)
- Local `.env.local` (for development)

---

## 📊 Monitoring Your Site

1. Go to Cloudflare Dashboard → Pages → Your project
2. View **Analytics** for traffic and performance
3. Check **Builds** for deployment history
4. Monitor **Functions** if using edge functions

---

## 🎯 Next Steps

1. ✅ Repository is configured for Cloudflare Pages
2. ✅ Build process is working correctly
3. ✅ Static files are ready in `out/` directory
4. 🔄 Deploy using either automatic or manual method above
5. 🔄 Set up custom domain if desired

Your site is ready to deploy! 🚀