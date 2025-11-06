# 📝 Google Forms Setup Guide

## How to Create and Integrate Google Forms

### Step 1: Create Your Google Forms

Go to [Google Forms](https://forms.google.com) and create these forms:

#### 1. **Campus Tour Booking Form**
Fields to include:
- Full Name (Short answer, Required)
- Email (Short answer, Required)
- Phone Number (Short answer, Required)
- Preferred Date (Date, Required)
- Preferred Time (Multiple choice: 9:00 AM, 11:00 AM, 2:00 PM, 4:00 PM)
- Number of Visitors (Short answer)
- Areas of Interest (Paragraph)

#### 2. **Contact/Inquiry Form**
Fields to include:
- Full Name (Short answer, Required)
- Email (Short answer, Required)
- Phone Number (Short answer)
- Subject (Dropdown: Admissions Inquiry, Program Information, Campus Tour, Faculty Positions, Other)
- Message (Paragraph, Required)

#### 3. **Program Application Form**
Fields to include:
- Full Name (Short answer, Required)
- Email (Short answer, Required)
- Phone Number (Short answer, Required)
- Program of Interest (Dropdown: List all your programs)
- Educational Background (Paragraph)
- Why do you want to join? (Paragraph)

#### 4. **Faculty Application Form**
Fields to include:
- Full Name (Short answer, Required)
- Email (Short answer, Required)
- Phone Number (Short answer, Required)
- Position Applied For (Dropdown: List all positions)
- Highest Qualification (Short answer)
- Years of Experience (Short answer)
- Upload CV (File upload)
- Cover Letter (Paragraph)

---

### Step 2: Get Form Links

For each form:
1. Click the **Send** button (top right)
2. Click the **Link** icon (chain symbol)
3. Check "Shorten URL" if you want
4. Copy the link

You'll get links like:
```
https://forms.gle/XXXXXXXXXX
```

---

### Step 3: Update the Code

I'll create a configuration file where you can paste all your Google Form links.

---

## Benefits of Using Google Forms

✅ **Free** - No cost, unlimited submissions  
✅ **Easy Management** - All responses in Google Sheets  
✅ **Automatic Emails** - Get notified on new submissions  
✅ **Data Export** - Export to Excel, CSV, or PDF  
✅ **Validation** - Built-in email and required field validation  
✅ **File Uploads** - Can accept CV/documents  
✅ **Analytics** - View response summary and charts  
✅ **No Backend Needed** - Google handles everything  

---

## Tips

1. **Enable Email Notifications:**
   - In your form, click the three dots → Get email notifications for new responses

2. **Customize Thank You Message:**
   - Settings → Presentation → Confirmation message

3. **View Responses:**
   - Responses tab → View in Sheets

4. **Share Access:**
   - Share the Google Sheet with your team

5. **Auto-close Form:**
   - Settings → Limit to 1 response (if needed)
   - Or set a closing date

---

## Example Form Links (Replace with yours)

```javascript
// config/forms.js
export const FORM_LINKS = {
  campusTour: 'https://forms.gle/YOUR_TOUR_FORM_ID',
  contact: 'https://forms.gle/YOUR_CONTACT_FORM_ID',
  programApplication: 'https://forms.gle/YOUR_PROGRAM_FORM_ID',
  facultyApplication: 'https://forms.gle/YOUR_FACULTY_FORM_ID',
}
```
