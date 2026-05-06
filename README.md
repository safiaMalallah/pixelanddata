# Pixel & Data — pixelanddata.com

Built with Next.js 14, Tailwind CSS, Supabase, and Resend.

## 🚀 Deploy to Vercel in 5 steps

### Step 1 — Upload to GitHub
1. Go to github.com → New repository → name it `pixelanddata`
2. Upload all these files (drag & drop the whole folder)
3. Click "Commit changes"

### Step 2 — Connect to Vercel
1. Go to vercel.com → "Add New Project"
2. Import your `pixelanddata` GitHub repo
3. Click "Deploy" — Vercel auto-detects Next.js

### Step 3 — Add environment variables
In Vercel → Settings → Environment Variables, add:
```
NEXT_PUBLIC_SUPABASE_URL = https://pqpezssvihlhkjpvumwe.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = your_key_here
RESEND_API_KEY = your_resend_key_here
```

### Step 4 — Add your movie poster image
Put your movie poster image in the `/public` folder, named `movie-poster.jpg`

### Step 5 — Connect your domain
1. In Vercel → Settings → Domains → Add `pixelanddata.com`
2. In Namecheap → Advanced DNS → Add the CNAME records Vercel shows you
3. Wait 10–30 minutes → your site is live! 🎉

## 📁 Project structure
```
src/
  app/
    page.tsx          ← Homepage
    learn/page.tsx    ← Learning hub
    stories/page.tsx  ← Stories & books
    shop/page.tsx     ← Merch shop
    movie-night/page.tsx ← Ticketing
    signin/page.tsx   ← Sign in
  components/
    Navbar.tsx
    Footer.tsx
  app/globals.css
public/
  movie-poster.jpg  ← Add your image here!
```

## 🎨 Brand colors
- Teal: #00BCA4
- Amber/Yellow: #F59E0B
- Navy: #1A1A2E
- Font: Poppins
