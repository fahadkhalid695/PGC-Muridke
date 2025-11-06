# 🚀 Quick Setup Guide

## What's Been Fixed

### ✅ Logo Integration
- Your `pgc.png` logo is now integrated throughout the site
- Logo appears in the navbar and footer
- Favicon updated to use your logo

### ✅ Navigation Bar Fix
- **Fixed Issue:** Navbar now stays visible on all pages
- **Behavior:** 
  - On Home page (top): Semi-transparent blue background with white text
  - On Home page (scrolled): White background with dark text
  - On other pages: Always white background with dark text
- Logo and text color adapt automatically

### ✅ Color Scheme Matching
- Primary Blue: `#002B5B` (matches your logo)
- Accent Red: `#E50914` (matches your logo)
- All UI elements use these colors consistently

## Next Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. View Your Site
Open `http://localhost:5173` in your browser

## Testing the Navbar

1. **Home Page Test:**
   - Load the home page
   - Navbar should have blue background at top
   - Scroll down - navbar turns white
   - Scroll back up - navbar turns blue again

2. **Other Pages Test:**
   - Navigate to About, Programs, etc.
   - Navbar should always be white with good visibility
   - Logo and text should be clearly visible

## Customization Checklist

- [ ] Replace "PGC" text with your full institution name
- [ ] Update contact information in Footer and Contact page
- [ ] Replace placeholder images with your own photos
- [ ] Update social media links in Footer
- [ ] Customize program names and details
- [ ] Add your faculty members' information
- [ ] Update news and events with real content

## File Locations

- **Logo:** `public/logo.png`
- **Navbar:** `src/components/Navbar.jsx`
- **Footer:** `src/components/Footer.jsx`
- **Colors:** `tailwind.config.js`
- **Pages:** `src/pages/*.jsx`

## Need Help?

If you encounter any issues:
1. Check browser console for errors (F12)
2. Ensure all dependencies are installed
3. Clear browser cache and reload
4. Check that logo file exists at `public/logo.png`

## Build for Production

When ready to deploy:
```bash
npm run build
```

The optimized files will be in the `dist` folder.
