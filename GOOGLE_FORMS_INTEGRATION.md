# ✅ Google Forms Integration Complete!

## What Changed

All booking and contact forms now use **Google Forms** instead of custom modals. This means:

✅ **No Backend Needed** - Google handles everything  
✅ **Free Forever** - Unlimited submissions  
✅ **Easy Management** - All responses in Google Sheets  
✅ **Email Notifications** - Get notified instantly  
✅ **File Uploads** - Can accept CVs and documents  
✅ **Better UX** - Forms open in new tabs  

---

## Forms Integrated

### 1. Campus Tour Booking
**Used in:**
- Admissions page → "Schedule Campus Tour" button
- Contact page → "Schedule Campus Tour" button  
- Student Life page → "Book a Tour" button
- Activity details modal → "Schedule a Visit" button

**Config:** `FORM_LINKS.campusTour`

---

### 2. Contact/Inquiry Form
**Used in:**
- Contact page → "Open Contact Form" button
- Admissions page → "Contact Admissions" button
- Programs page → "Contact Admissions" button

**Config:** `FORM_LINKS.contact`

---

### 3. Program Application
**Used in:**
- Programs page → Program details modal → "Apply Now" button

**Config:** `FORM_LINKS.programApplication`

---

### 4. Faculty Application
**Used in:**
- Faculty page → Open Positions modal → "Apply for this Position" button

**Config:** `FORM_LINKS.facultyApplication`

---

## How to Set Up

### Step 1: Create Your Google Forms

Go to [forms.google.com](https://forms.google.com) and create 4 forms with these fields:

#### Campus Tour Form
- Full Name (Required)
- Email (Required)
- Phone (Required)
- Preferred Date (Date picker)
- Preferred Time (Multiple choice: 9 AM, 11 AM, 2 PM, 4 PM)
- Number of Visitors
- Areas of Interest (Paragraph)

#### Contact Form
- Full Name (Required)
- Email (Required)
- Phone
- Subject (Dropdown: Admissions, Programs, Campus Tour, Faculty, Other)
- Message (Required, Paragraph)

#### Program Application Form
- Full Name (Required)
- Email (Required)
- Phone (Required)
- Program of Interest (Dropdown with all your programs)
- Educational Background (Paragraph)
- Why do you want to join? (Paragraph)

#### Faculty Application Form
- Full Name (Required)
- Email (Required)
- Phone (Required)
- Position Applied For (Dropdown with all positions)
- Highest Qualification
- Years of Experience
- Upload CV (File upload)
- Cover Letter (Paragraph)

---

### Step 2: Get Form Links

For each form:
1. Click **Send** button (top right)
2. Click the **Link** icon (chain symbol)
3. Check "Shorten URL"
4. Copy the link (looks like: `https://forms.gle/XXXXXXXXXX`)

---

### Step 3: Update Configuration

Edit `src/config/forms.js`:

```javascript
export const FORM_LINKS = {
  campusTour: 'https://forms.gle/YOUR_ACTUAL_TOUR_FORM_ID',
  contact: 'https://forms.gle/YOUR_ACTUAL_CONTACT_FORM_ID',
  programApplication: 'https://forms.gle/YOUR_ACTUAL_PROGRAM_FORM_ID',
  facultyApplication: 'https://forms.gle/YOUR_ACTUAL_FACULTY_FORM_ID',
}
```

---

### Step 4: Enable Email Notifications

For each form:
1. Click the three dots (⋮) menu
2. Select "Get email notifications for new responses"
3. You'll receive an email every time someone submits

---

### Step 5: View Responses

1. Open your form
2. Click the "Responses" tab
3. Click the Google Sheets icon to view all responses in a spreadsheet
4. You can export, filter, and analyze the data

---

## Benefits

### For You (Admin)
- ✅ All submissions in one place (Google Sheets)
- ✅ Email notifications on new submissions
- ✅ Easy to export data (Excel, CSV, PDF)
- ✅ Can add collaborators to view responses
- ✅ Built-in analytics and charts
- ✅ No server costs or maintenance

### For Users
- ✅ Familiar Google Forms interface
- ✅ Auto-save as they type
- ✅ Mobile-friendly
- ✅ Can upload files (CVs, documents)
- ✅ Confirmation message after submission
- ✅ No account required

---

## Customization Tips

### Change Confirmation Message
1. Open your form
2. Click Settings (gear icon)
3. Go to "Presentation" tab
4. Edit "Confirmation message"

Example: "Thank you! We'll contact you within 24 hours."

### Add Form Description
1. Edit your form
2. Click on the form title
3. Add description below the title

### Limit Responses
1. Settings → Responses
2. Check "Limit to 1 response" (requires sign-in)
3. Or use add-ons to close form after X responses

### Customize Theme
1. Click the palette icon (top right)
2. Choose colors matching your website
3. Add header image if desired

---

## Testing

Before going live:
1. Click each button on your website
2. Verify the correct form opens
3. Submit a test response
4. Check if you receive email notification
5. Verify response appears in Google Sheets

---

## Troubleshooting

### Form doesn't open
- Check the link in `src/config/forms.js`
- Make sure form is set to "Anyone with the link can respond"
- Try the link directly in browser

### Not receiving emails
- Check form settings → Get email notifications
- Check spam folder
- Verify email address in Google account

### Can't see responses
- Click "Responses" tab in form
- Click green Sheets icon to create spreadsheet
- Check if spreadsheet was created in your Google Drive

---

## File Structure

```
src/
├── config/
│   └── forms.js          ← Update your form links here
├── pages/
│   ├── Admissions.jsx    ← Uses campusTour & contact
│   ├── Contact.jsx       ← Uses contact & campusTour
│   ├── Programs.jsx      ← Uses programApplication & contact
│   ├── Faculty.jsx       ← Uses facultyApplication
│   └── StudentLife.jsx   ← Uses campusTour
```

---

## Next Steps

1. ✅ Create your 4 Google Forms
2. ✅ Get the shareable links
3. ✅ Update `src/config/forms.js`
4. ✅ Enable email notifications
5. ✅ Test all buttons
6. ✅ Share with your team
7. ✅ Go live!

---

## Support

Need help? Check:
- [Google Forms Help Center](https://support.google.com/docs/topic/9055404)
- [Google Sheets Help](https://support.google.com/docs/topic/9054603)

---

**That's it! Your website now uses Google Forms for all bookings and inquiries. No backend, no database, no hosting costs!** 🎉
