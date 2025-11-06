# ⚙️ Configuration Guide

Complete guide to customize your website with your own information.

---

## 📝 Table of Contents

1. [Google Forms Setup](#1-google-forms-setup)
2. [Social Media Links](#2-social-media-links)
3. [Contact Information](#3-contact-information)
4. [Logo & Branding](#4-logo--branding)
5. [Colors](#5-colors)
6. [Content Updates](#6-content-updates)

---

## 1. Google Forms Setup

### File: `src/config/forms.js`

Create your Google Forms and update the links:

```javascript
export const FORM_LINKS = {
  campusTour: 'https://forms.gle/YOUR_TOUR_FORM_ID',
  contact: 'https://forms.gle/YOUR_CONTACT_FORM_ID',
  programApplication: 'https://forms.gle/YOUR_PROGRAM_FORM_ID',
  facultyApplication: 'https://forms.gle/YOUR_FACULTY_FORM_ID',
}
```

**See:** `GOOGLE_FORMS_SETUP.md` for detailed instructions.

---

## 2. Social Media Links

### File: `src/config/social.js`

Update with your actual social media profiles:

```javascript
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/pgcmuridke',
  twitter: 'https://twitter.com/pgcmuridke',
  instagram: 'https://instagram.com/pgcmuridke',
  linkedin: 'https://linkedin.com/school/pgc-muridke',
  youtube: 'https://youtube.com/@pgcmuridke',
}
```

### Hide a Social Media Icon

Set it to `null`:

```javascript
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/pgcmuridke',
  twitter: null,  // Twitter icon will be hidden
  instagram: 'https://instagram.com/pgcmuridke',
  linkedin: null,  // LinkedIn icon will be hidden
  youtube: 'https://youtube.com/@pgcmuridke',
}
```

### Where Social Links Appear

- Footer (all pages)
- Opens in new tab
- Hover effect with accent color

---

## 3. Contact Information

### Update Address

**File:** `src/pages/Contact.jsx`

Find and update:
```javascript
const contactInfo = [
  {
    icon: HiLocationMarker,
    title: 'Visit Us',
    details: ['Q7P5+9H5, Muridke', 'Punjab, Pakistan'],  // ← Update here
  },
  // ...
]
```

**File:** `src/components/Footer.jsx`

Find and update:
```jsx
<span className="text-gray-300">Q7P5+9H5, Muridke, Pakistan</span>  // ← Update here
```

### Update Phone Numbers

**File:** `src/pages/Contact.jsx`
```javascript
{
  icon: HiPhone,
  title: 'Call Us',
  details: ['+92 (300) 123-4567', '+92 (300) 123-4568'],  // ← Update here
},
```

**File:** `src/components/Footer.jsx`
```jsx
<span className="text-gray-300">+92 (300) 123-4567</span>  // ← Update here
```

### Update Email Addresses

**File:** `src/pages/Contact.jsx`
```javascript
{
  icon: HiMail,
  title: 'Email Us',
  details: ['info@pgc.edu.pk', 'admissions@pgc.edu.pk'],  // ← Update here
},
```

**File:** `src/components/Footer.jsx`
```jsx
<span className="text-gray-300">info@pgc.edu.pk</span>  // ← Update here
```

### Update WhatsApp Number

**File:** `src/pages/Contact.jsx`

Find the WhatsApp link:
```jsx
href="https://wa.me/923001234567?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20PGC"
```

Replace `923001234567` with your WhatsApp number (country code + number, no spaces or symbols).

### Update Google Maps Location

**File:** `src/pages/Contact.jsx`

Find the iframe and update the `src` URL:

1. Go to [Google Maps](https://maps.google.com)
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe URL
5. Replace the existing `src` in the code

---

## 4. Logo & Branding

### Update Logo

**File:** `public/logo.png`

Replace this file with your logo:
- Recommended size: 200x200px or larger
- Format: PNG with transparent background
- Square or horizontal orientation works best

### Update Institution Name

**Files to update:**

1. **Navbar:** `src/components/Navbar.jsx`
```jsx
<span className="...">PGC</span>  // ← Change "PGC"
```

2. **Footer:** `src/components/Footer.jsx`
```jsx
<h3 className="...">PGC Muridke</h3>  // ← Change "PGC Muridke"
```

3. **Page Title:** `index.html`
```html
<title>PGC - Educational Institution</title>  // ← Change title
```

4. **Footer Copyright:** `src/components/Footer.jsx`
```jsx
<p>&copy; {new Date().getFullYear()} PGC Muridke. All rights reserved.</p>
```

---

## 5. Colors

### File: `tailwind.config.js`

Update the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#002B5B',  // ← Change primary color (Deep Blue)
      accent: '#E50914',   // ← Change accent color (Bright Red)
    },
  },
},
```

### Color Usage

- **Primary:** Main headings, navbar, buttons, text emphasis
- **Accent:** Call-to-action buttons, hover states, highlights, active links

---

## 6. Content Updates

### Add Programs

**File:** `src/pages/Programs.jsx`

Find the `programs` array and add your programs:

```javascript
{
  category: 'Undergraduate',
  name: 'Your Program Name',
  duration: '4 Years',
  students: '500+',
  description: 'Short description',
  fullDescription: 'Detailed description...',
  curriculum: ['Course 1', 'Course 2', 'Course 3', ...],
  careers: ['Career 1', 'Career 2', ...],
  fees: '$15,000/year',
}
```

### Add News Articles

**File:** `src/pages/News.jsx`

Find the `newsItems` array:

```javascript
{
  title: 'Your News Title',
  date: 'November 6, 2025',
  category: 'Campus News',
  image: 'https://your-image-url.com/image.jpg',
  excerpt: 'Short preview text...',
  readTime: '5 min read',
  fullContent: 'Full article content here...',
}
```

### Add Faculty Members

**File:** `src/pages/Faculty.jsx`

Find the `faculty` array:

```javascript
{
  name: 'Dr. Your Name',
  department: 'Computer Science',
  position: 'Professor',
  image: 'https://your-image-url.com/photo.jpg',
  email: 'email@pgc.edu.pk',
  specialization: 'Your specialization',
}
```

### Add Faculty Positions

**File:** `src/pages/Faculty.jsx`

Inside the Open Positions modal, add to the array:

```javascript
{
  title: 'Position Title',
  department: 'Department Name',
  type: 'Full-time',
  location: 'Main Campus',
  description: 'Job description...',
  requirements: ['Requirement 1', 'Requirement 2', ...],
}
```

### Update Campus Activities

**File:** `src/pages/StudentLife.jsx`

Find the `activities` array:

```javascript
{
  icon: HiUserGroup,
  title: 'Activity Name',
  description: 'Short description',
  image: 'https://your-image-url.com/image.jpg',
  fullDescription: 'Detailed description...',
  highlights: ['Highlight 1', 'Highlight 2', 'Highlight 3', 'Highlight 4'],
  gallery: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
}
```

### Update Events

**File:** `src/pages/News.jsx`

Find the `allEvents` array:

```javascript
{
  title: 'Event Name',
  date: 'Nov 15, 2025',
  time: '10:00 AM',
  description: 'Event description',
}
```

---

## 📋 Quick Checklist

Before going live, make sure you've updated:

- [ ] Google Forms links (`src/config/forms.js`)
- [ ] Social media links (`src/config/social.js`)
- [ ] Contact information (phone, email, address)
- [ ] WhatsApp number
- [ ] Google Maps location
- [ ] Logo (`public/logo.png`)
- [ ] Institution name (navbar, footer, title)
- [ ] Colors (if needed)
- [ ] Programs list
- [ ] Faculty members
- [ ] News articles
- [ ] Events calendar
- [ ] Campus activities

---

## 🧪 Testing

After making changes:

1. Run `npm run dev`
2. Test all links (social media, WhatsApp, forms)
3. Check all pages load correctly
4. Verify contact information is correct
5. Test on mobile devices
6. Check forms open correctly

---

## 🚀 Deploy

When ready:

```bash
npm run build
```

Upload the `dist` folder to your hosting provider.

---

## 💡 Tips

1. **Use High-Quality Images:** Compress images before uploading
2. **Test Forms:** Submit test responses to verify Google Forms work
3. **Enable Notifications:** Turn on email notifications for all forms
4. **Backup:** Keep a copy of your configuration files
5. **Update Regularly:** Keep news and events current

---

## 🆘 Need Help?

- Check `README.md` for general information
- See `GOOGLE_FORMS_SETUP.md` for form setup
- See `GOOGLE_FORMS_INTEGRATION.md` for integration details

---

**That's it! Your website is now fully customized and ready to go live!** 🎉
