# 🚀 Deployment Guide

## Vercel Deployment (Recommended)

### Why the 404 Error Happens

When you deploy a React app with client-side routing (React Router), refreshing or directly accessing routes like `/about`, `/contact`, etc. causes a 404 error because:

1. **Browser requests:** `https://your-site.com/about`
2. **Server looks for:** A file called `/about` (doesn't exist)
3. **Result:** 404 NOT_FOUND error ❌

**Solution:** Tell Vercel to always serve `index.html` for all routes, then React Router handles the routing.

---

## ✅ Fix Applied

### 1. `vercel.json` Created

This file tells Vercel to redirect all routes to `index.html`:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
```

**What it does:**
- `"source": "/(.*)"` → Matches any URL path
- `"destination": "/"` → Always serves `index.html`
- React Router then handles the routing client-side

### 2. Custom 404 Page Added

Created `src/pages/NotFound.jsx` for invalid routes:
- Beautiful animated 404 page
- "Go Home" and "Go Back" buttons
- Helpful links to main pages
- Matches your site's design

---

## 📦 Deployment Steps

### Option 1: Deploy to Vercel (Easiest)

1. **Install Vercel CLI (optional):**
```bash
npm install -g vercel
```

2. **Build your project:**
```bash
npm run build
```

3. **Deploy:**

**Method A - Using Vercel CLI:**
```bash
vercel
```

**Method B - Using Vercel Dashboard:**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Vercel auto-detects Vite settings
- Click "Deploy"

4. **Done!** Your site is live at `https://your-project.vercel.app`

---

### Option 2: Deploy to Netlify

1. **Create `_redirects` file in `public/` folder:**
```
/*    /index.html   200
```

2. **Build:**
```bash
npm run build
```

3. **Deploy:**
- Go to [netlify.com](https://netlify.com)
- Drag and drop your `dist` folder
- Or connect your GitHub repo

---

### Option 3: Deploy to GitHub Pages

1. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Update `package.json`:**
```json
{
  "homepage": "https://yourusername.github.io/your-repo",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Update `vite.config.js`:**
```js
export default defineConfig({
  plugins: [react()],
  base: '/your-repo/',  // Add this line
})
```

4. **Deploy:**
```bash
npm run deploy
```

---

### Option 4: Deploy to Any Static Host

For hosts like AWS S3, Firebase Hosting, etc.:

1. **Build:**
```bash
npm run build
```

2. **Configure redirects:**
   - All routes should redirect to `index.html`
   - Keep the URL in the browser

3. **Upload `dist` folder**

---

## 🧪 Testing After Deployment

### Test These Scenarios:

1. **Direct URL Access:**
   - Visit `https://your-site.com/about` directly
   - Should show About page (not 404) ✅

2. **Refresh Test:**
   - Navigate to any page
   - Press F5 to refresh
   - Should stay on the same page ✅

3. **Deep Links:**
   - Share a link like `https://your-site.com/programs`
   - Should open Programs page directly ✅

4. **Invalid Routes:**
   - Visit `https://your-site.com/invalid-page`
   - Should show custom 404 page ✅

5. **Navigation:**
   - Click through all menu items
   - Should work smoothly ✅

---

## 🔧 Troubleshooting

### Still Getting 404 Errors?

**For Vercel:**
1. Make sure `vercel.json` is in the root directory
2. Redeploy: `vercel --prod`
3. Check Vercel dashboard → Settings → Rewrites

**For Netlify:**
1. Make sure `_redirects` file is in `public/` folder
2. Rebuild and redeploy
3. Check Netlify dashboard → Deploys → Deploy log

**For GitHub Pages:**
1. Make sure `base` is set in `vite.config.js`
2. Check repository settings → Pages → Source

---

## 📋 Pre-Deployment Checklist

Before deploying, make sure you've updated:

- [ ] Google Forms links (`src/config/forms.js`)
- [ ] Social media links (`src/config/social.js`)
- [ ] Contact information (phone, email, address)
- [ ] WhatsApp number
- [ ] Google Maps location
- [ ] Logo (`public/logo.png`)
- [ ] Institution name
- [ ] All content (programs, faculty, news)
- [ ] Test all forms work
- [ ] Test all links work
- [ ] Test on mobile devices

---

## 🌐 Custom Domain Setup

### For Vercel:

1. Go to your project → Settings → Domains
2. Add your domain (e.g., `pgcmuridke.edu.pk`)
3. Update DNS records as shown
4. Wait for SSL certificate (automatic)

### DNS Records Example:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 🔒 Environment Variables (If Needed)

If you add any API keys or secrets:

1. **Never commit them to Git**
2. **Use Vercel Environment Variables:**
   - Project Settings → Environment Variables
   - Add your variables
   - Redeploy

3. **Access in code:**
```javascript
const apiKey = import.meta.env.VITE_API_KEY
```

---

## 📊 Performance Optimization

After deployment:

1. **Check Lighthouse Score:**
   - Open DevTools → Lighthouse
   - Run audit
   - Aim for 90+ score

2. **Optimize Images:**
   - Compress images before uploading
   - Use WebP format when possible
   - Add lazy loading

3. **Enable Caching:**
   - Vercel does this automatically
   - Check cache headers in Network tab

---

## 🎉 You're Live!

Your website is now deployed and accessible worldwide!

**Next Steps:**
1. Share your URL with the world
2. Monitor Google Forms submissions
3. Update content regularly
4. Check analytics (add Google Analytics if needed)

---

## 📞 Support

If you encounter issues:
1. Check Vercel/Netlify deployment logs
2. Check browser console for errors
3. Verify `vercel.json` is in root directory
4. Make sure all files are committed to Git

---

**Deployment Status:** ✅ Ready to Deploy

**Files Added:**
- `vercel.json` - Routing configuration
- `src/pages/NotFound.jsx` - Custom 404 page
- `DEPLOYMENT_GUIDE.md` - This file

**Your site will work perfectly on Vercel, Netlify, or any static host!** 🚀
