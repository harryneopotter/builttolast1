# 📋 Google Sheets Integration - Complete Setup Guide

This guide helps you collect all form submissions in a Google Sheet - **completely FREE**!

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **+ Blank** to create a new spreadsheet
3. Name it: `Built To Last - Leads`
4. In Row 1, add these headers (one per column):

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| Timestamp | Name | Phone | Email | City | Source |

5. **Copy the Sheet URL** - you'll need it later

---

### Step 2: Create the Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete all existing code in the editor
3. Paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Add a new row with the form data
    sheet.appendRow([
      new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      data.name || '',
      data.phone || '',
      data.email || '',
      data.city || '',
      data.source || 'Website'
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Data saved successfully' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function - you can run this to verify the script works
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: 'ok', 
      message: 'Built To Last API is running!' 
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **💾 Save** (or Ctrl+S)
5. Name the project: `Built To Last Form Handler`

---

### Step 3: Deploy the Script

1. Click **Deploy → New deployment**
2. Click the ⚙️ (gear icon) next to "Select type"
3. Choose **Web app**
4. Configure:
   - **Description**: `Form submission handler`
   - **Execute as**: `Me (your-email@gmail.com)`
   - **Who has access**: `Anyone`
5. Click **Deploy**
6. Click **Authorize access**
7. Choose your Google account
8. Click **Advanced** → **Go to Built To Last Form Handler (unsafe)**
9. Click **Allow**
10. **COPY THE WEB APP URL** - it looks like:
    ```
    https://script.google.com/macros/s/AKfycb.../exec
    ```

---

### Step 4: Configure Your Website

1. Create a `.env` file in your project root folder:
   ```
   d:\Users\Neo\Downloads\project\.env
   ```

2. Add this line (replace with YOUR URL):
   ```
   VITE_GOOGLE_SHEET_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

3. **Restart the dev server**:
   ```bash
   # Stop the current server (Ctrl+C)
   # Start it again
   npm run dev
   ```

---

## ✅ Test Your Setup

1. Open your website at `http://localhost:5173`
2. Fill out and submit a form
3. Check your Google Sheet - a new row should appear!
4. Open browser Console (F12) - you should see:
   ```
   ✅ Form data submitted to Google Sheet
   ```

---

## 📊 Your Google Sheet Will Look Like This

| Timestamp | Name | Phone | Email | City | Source |
|-----------|------|-------|-------|------|--------|
| 04/01/2026, 22:30:00 | Rajesh Kumar | 9876543210 | rajesh@email.com | Gurgaon | Website Popup Form |
| 04/01/2026, 22:35:00 | Priya Sharma | 8765432109 | priya@email.com | Delhi | Hero Form |

---

## 🔧 Troubleshooting

| Problem | Solution |
|---------|----------|
| Data not appearing in sheet | Check browser Console for errors |
| CORS error | Already handled with `mode: 'no-cors'` |
| 403 Forbidden | Re-deploy with "Anyone" access |
| Authorization error | Click "Allow" on all prompts |
| Changes not working | Restart dev server after editing `.env` |

---

## 📱 Bonus: Get Email Notifications

Add this code to your Apps Script to get an email when someone submits:

```javascript
function sendNotification(data) {
  const email = 'your-email@gmail.com'; // Change this!
  const subject = '🏠 New Lead from Built To Last Website';
  const body = `
New consultation request received!

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
City: ${data.city}
Source: ${data.source}
Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

---
Built To Last Leads System
  `;
  
  MailApp.sendEmail(email, subject, body);
}

// Then call this in doPost() after sheet.appendRow():
// sendNotification(data);
```

---

## 🔒 Production Deployment

For Netlify/Vercel deployment, add the environment variable in your hosting dashboard:

**Netlify:**
1. Site settings → Build & deploy → Environment
2. Add: `VITE_GOOGLE_SHEET_URL` = your script URL

**Vercel:**
1. Project Settings → Environment Variables
2. Add: `VITE_GOOGLE_SHEET_URL` = your script URL

---

Need help? Contact: support@bluepanda.in
