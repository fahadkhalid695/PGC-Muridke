# 🧭 Navigation Bar Reference

## Visual States

### State 1: Home Page - Top (Not Scrolled)
```
┌─────────────────────────────────────────────────────────┐
│  [LOGO] PGC    Home About Programs ... Contact          │  ← Semi-transparent Blue
│                                                          │     White Text
└─────────────────────────────────────────────────────────┘
Background: rgba(0, 43, 91, 0.8) with backdrop blur
Text: White (#FFFFFF)
Logo: Visible, full color
```

### State 2: Home Page - Scrolled Down
```
┌─────────────────────────────────────────────────────────┐
│  [LOGO] PGC    Home About Programs ... Contact          │  ← White Background
│                                                          │     Dark Text
└─────────────────────────────────────────────────────────┘
Background: White (#FFFFFF) with shadow
Text: Gray (#374151) / Primary Blue (#002B5B)
Logo: Visible, full color
Active Link: Red (#E50914)
```

### State 3: Other Pages (About, Programs, etc.)
```
┌─────────────────────────────────────────────────────────┐
│  [LOGO] PGC    Home About Programs ... Contact          │  ← White Background
│                                                          │     Dark Text
└─────────────────────────────────────────────────────────┘
Background: White (#FFFFFF) with shadow
Text: Gray (#374151)
Logo: Visible, full color
Active Link: Red (#E50914)
```

### State 4: Mobile Menu (Expanded)
```
┌─────────────────────────────────────────────────────────┐
│  [LOGO] PGC                                    [X]       │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────┐   │
│  │ Home                                            │   │
│  ├─────────────────────────────────────────────────┤   │
│  │ About                                           │   │
│  ├─────────────────────────────────────────────────┤   │
│  │ Programs                                        │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

## Transition Logic

```javascript
// Determines navbar appearance
const isHomePage = location.pathname === '/'
const shouldBeTransparent = isHomePage && !scrolled

// Result:
// Home + Not Scrolled = Blue transparent navbar
// Home + Scrolled = White navbar
// Other Pages = White navbar (always)
```

## CSS Classes Breakdown

### Transparent State (Home Top)
```css
bg-primary/80        /* Blue with 80% opacity */
backdrop-blur-sm     /* Blur effect behind navbar */
text-white          /* White text */
```

### Solid State (Scrolled/Other Pages)
```css
bg-white            /* White background */
shadow-lg           /* Drop shadow */
text-gray-700       /* Dark gray text */
```

## Logo Specifications

```css
Height: 3.5rem (56px)
Width: auto (maintains aspect ratio)
Object-fit: contain
```

## Hover Effects

### Desktop Links
```css
Default: Gray/White (depending on state)
Hover: Red (#E50914)
Active: Red (#E50914)
Underline: Animated from left to right
```

### Mobile Menu Items
```css
Default: Gray text, white background
Hover: Gray background
Active: Red background, white text
Border-radius: 0.5rem (rounded)
```

## Responsive Breakpoints

- **Mobile:** < 768px (Hamburger menu)
- **Desktop:** ≥ 768px (Full navigation)

## Animation Details

### Initial Load
```javascript
initial={{ y: -100 }}    // Starts above viewport
animate={{ y: 0 }}       // Slides down
transition: 300ms        // Smooth animation
```

### Mobile Menu
```javascript
initial={{ opacity: 0, height: 0 }}
animate={{ opacity: 1, height: 'auto' }}
```

## Accessibility Features

- ✅ Proper contrast ratios (WCAG AA compliant)
- ✅ Keyboard navigation support
- ✅ Focus indicators on links
- ✅ Screen reader friendly
- ✅ Touch-friendly mobile menu (44px minimum)

## Common Customizations

### Change Logo Size
```jsx
className="h-14"  // Change to h-12, h-16, etc.
```

### Adjust Transparency
```jsx
bg-primary/80  // Change to /60, /70, /90
```

### Modify Transition Speed
```jsx
transition-all duration-300  // Change to 200, 500, etc.
```

### Change Sticky Behavior
```jsx
className="fixed"  // Change to "sticky" if needed
```

## Troubleshooting

### Logo Not Showing
- Check file exists at `public/logo.png`
- Verify image path is `/logo.png` (with leading slash)
- Clear browser cache

### Navbar Not Visible
- Check `shouldBeTransparent` logic
- Verify color contrast
- Inspect z-index (should be 50)

### Mobile Menu Not Working
- Check `isOpen` state
- Verify button onClick handler
- Test on actual mobile device
