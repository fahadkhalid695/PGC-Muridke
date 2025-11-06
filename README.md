# 🎓 Educational Institution Website

A modern, responsive educational institution website built with React, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern Design**: Clean, professional UI with red/blue/white color scheme
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **8 Complete Pages**:
  - Home (Hero, Stats, Features, News)
  - About Us (Mission, Vision, Values, Timeline)
  - Academic Programs (Filterable program cards)
  - Faculty & Staff (Department-wise filtering)
  - Admissions (Process, Documents, Dates)
  - News & Events (Blog-style layout with sidebar)
  - Student Life (Activities, Testimonials, Gallery)
  - Contact (Form, Map, Quick Actions)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## 🎨 Customization

### Logo

The logo is located at `public/logo.png`. Replace it with your own logo and it will automatically update throughout the site.

### Colors

The color scheme matches your logo:

```js
colors: {
  primary: '#002B5B',  // Deep Blue (from logo)
  accent: '#E50914',   // Bright Red (from logo)
}
```

Edit `tailwind.config.js` to adjust colors if needed.

### Content

- Update text content in each page component (`src/pages/*.jsx`)
- Replace placeholder images with your own
- Modify contact information in `src/components/Footer.jsx` and `src/pages/Contact.jsx`
- Update institution name from "PGC" to your institution's name

### Fonts

The site uses:
- **Poppins** for headings
- **Inter** for body text

Change fonts in `tailwind.config.js` and `index.html`.

## 📁 Project Structure

```
institution-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Programs.jsx
│   │   ├── Faculty.jsx
│   │   ├── Admissions.jsx
│   │   ├── News.jsx
│   │   ├── StudentLife.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **React Icons** - Icon library

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Support

For questions or support, contact: info@excellence.edu
