# 🎯 Functionality Guide

This document outlines all the interactive features and functionalities implemented in the website.

## ✅ Implemented Features

### 1. Programs Page

#### View Program Details
- **Location:** Programs page → Each program card
- **Button:** "View Details"
- **Functionality:** Opens a modal showing:
  - Full program description
  - Complete curriculum list
  - Career opportunities
  - Tuition fees
  - "Apply Now" button

#### Contact Admissions
- **Location:** Programs page → Bottom CTA section
- **Button:** "Contact Admissions"
- **Functionality:** Opens contact form modal with subject pre-filled as "programs"

---

### 2. Faculty Page

#### View Open Positions
- **Location:** Faculty page → Bottom CTA section
- **Button:** "View Open Positions"
- **Functionality:** Opens modal displaying:
  - Available faculty positions
  - Department, type, and location
  - Job requirements
  - "Apply for this Position" button for each job

#### Apply for Position
- **Location:** Inside Open Positions modal
- **Button:** "Apply for this Position"
- **Functionality:** Opens contact form with subject pre-filled as "faculty"

---

### 3. News & Events Page

#### Read More (News Articles)
- **Location:** News page → Each news card
- **Button:** "Read More →"
- **Functionality:** Opens modal showing:
  - Full article image
  - Complete article content
  - Category, date, and read time

#### Category Filtering
- **Location:** News page → Right sidebar
- **Section:** "Categories"
- **Functionality:** 
  - Click any category to filter news
  - "All" shows all news items
  - Active category is highlighted in red

#### View All Events
- **Location:** News page → Right sidebar in "Upcoming Events"
- **Button:** "View All Events"
- **Functionality:** Opens modal showing:
  - Complete list of upcoming events
  - Event descriptions
  - Dates and times

---

### 4. Admissions Page

#### Contact Admissions
- **Location:** Admissions page → Bottom FAQ section
- **Button:** "Contact Admissions"
- **Functionality:** Opens contact form with subject pre-filled as "admissions"

#### Schedule Campus Tour
- **Location:** Admissions page → Bottom FAQ section
- **Button:** "Schedule Campus Tour"
- **Functionality:** Opens tour booking form with:
  - Name, email, phone fields
  - Date and time selection
  - Number of visitors
  - Confirmation on submission

---

### 5. Contact Page

#### Chat on WhatsApp
- **Location:** Contact page → Quick Actions section
- **Button:** "Chat on WhatsApp"
- **Functionality:** 
  - Opens WhatsApp with pre-filled message
  - Phone number: +1 (555) 123-4567
  - Message: "Hi, I would like to know more about PGC"

#### Schedule Campus Tour
- **Location:** Contact page → Quick Actions section
- **Button:** "Schedule Campus Tour"
- **Functionality:** Opens tour booking form

#### Contact Form
- **Location:** Contact page → Main form
- **Functionality:** 
  - Validates all required fields
  - Shows success message on submission
  - Clears form after submission

---

### 6. Student Life Page

#### Book a Tour
- **Location:** Student Life page → Bottom CTA section
- **Button:** "Book a Tour"
- **Functionality:** Opens campus tour booking form

---

## 📋 Modal Components

### Contact Modal
**Used in:** Programs, Faculty, Admissions pages

**Fields:**
- Full Name (required)
- Email (required)
- Phone (optional)
- Subject (dropdown, pre-filled based on context)
- Message (required)

**Actions:**
- Send Message → Shows success alert
- Cancel → Closes modal

---

### Campus Tour Modal
**Used in:** Admissions, Contact, Student Life pages

**Fields:**
- Full Name (required)
- Email (required)
- Phone (required)
- Preferred Date (required, date picker)
- Preferred Time (required, dropdown)
- Number of Visitors (optional, default: 1)
- Areas of Interest (optional, textarea)

**Actions:**
- Schedule/Book Tour → Shows success alert
- Cancel → Closes modal

---

### Program Details Modal
**Used in:** Programs page

**Content:**
- Program name and category
- Duration and student count
- Full description
- Curriculum (checklist)
- Career opportunities (tags)
- Tuition fees
- Apply Now button

---

### Open Positions Modal
**Used in:** Faculty page

**Content:**
- List of available positions
- Each position shows:
  - Title and department
  - Job type and location
  - Description
  - Requirements list
  - Apply button

---

### News Detail Modal
**Used in:** News page

**Content:**
- Full-size article image
- Category badge
- Date and read time
- Complete article text

---

### All Events Modal
**Used in:** News page

**Content:**
- Complete list of upcoming events
- Event title and description
- Date and time for each event

---

## 🔧 Customization

### Update WhatsApp Number
**File:** `src/pages/Contact.jsx`
```jsx
href="https://wa.me/YOUR_NUMBER?text=YOUR_MESSAGE"
```

### Update Contact Information
**Files:** 
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

### Add More Programs
**File:** `src/pages/Programs.jsx`
Add new objects to the `programs` array with all required fields.

### Add More Faculty Positions
**File:** `src/pages/Faculty.jsx`
Add new objects to the positions array inside the modal.

### Add More News Articles
**File:** `src/pages/News.jsx`
Add new objects to the `newsItems` array with `fullContent` field.

### Add More Events
**File:** `src/pages/News.jsx`
Add new objects to the `allEvents` array.

---

## 🎨 User Experience Features

### Form Validation
- All required fields are validated
- Email format validation
- Phone number format
- Date validation (no past dates for tours)
- Number range validation

### Success Feedback
- Alert messages on form submission
- Modal closes automatically after submission
- Forms reset after successful submission

### Smooth Animations
- Modal fade-in/fade-out
- Backdrop blur effect
- Smooth transitions on all interactions

### Responsive Design
- All modals work on mobile devices
- Forms adapt to screen size
- Touch-friendly buttons

### Accessibility
- Keyboard navigation support
- Focus management in modals
- Screen reader friendly
- Proper ARIA labels

---

## 🚀 Testing Checklist

- [ ] Click "View Details" on any program
- [ ] Click "Contact Admissions" on Programs page
- [ ] Click "View Open Positions" on Faculty page
- [ ] Click "Apply for this Position" in positions modal
- [ ] Click "Read More" on any news article
- [ ] Filter news by different categories
- [ ] Click "View All Events" in sidebar
- [ ] Click "Contact Admissions" on Admissions page
- [ ] Click "Schedule Campus Tour" on Admissions page
- [ ] Click "Chat on WhatsApp" on Contact page
- [ ] Submit contact form on Contact page
- [ ] Click "Book a Tour" on Student Life page
- [ ] Test all forms with validation
- [ ] Test modal close buttons
- [ ] Test on mobile devices

---

## 📝 Notes

- All forms show success alerts (in production, these would send to a backend)
- WhatsApp link opens in new tab
- Modals prevent body scrolling when open
- All modals can be closed by clicking backdrop or X button
- Forms validate on submission
- Date pickers don't allow past dates for tour bookings
