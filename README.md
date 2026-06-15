# PGT Pay Justice Pakistan 🇵🇰
## #PGTPayJustice — Campaign Website

**Live site:** https://pgt-pay-justice.github.io

A grassroots advocacy website for Postgraduate Medical Trainees in Pakistan whose federal stipend has been frozen at **Rs. 104,390/month since January 2020** — with Federal Budget 2026–27 once again containing **zero allocation** for PGT stipend revision (7th consecutive year).

---

## 📋 What This Site Does

- **Documents the injustice** with official government notifications and salary data
- **Compares federal vs Punjab vs private** stipend rates (all sourced from official documents)
- **Publishes the full formal complaint** filed with the Wafaqi Mohtasib (Federal Ombudsman)
- **Enables petition signing** for medical trainees across Pakistan
- **Provides complaint templates** for filing directly with:
  - Wafaqi Mohtasib Secretariat (`mohtasib.gov.pk`)
  - PM Pakistan Citizen Portal (iOS/Android app)
  - PM&DC Complaint Portal (`complaints.pmdc.pk`)
- **Content protection**: Anti-screenshot, no right-click, no print, no download

---

## 🔑 Key Facts (All Sourced from Official Documents)

| Item | Detail |
|------|--------|
| Federal PGT Stipend | Rs. 104,390/month (fixed since 27 Jan 2020) |
| Official Notification | F.No.9-24/2016-E-I, M/o NHS,R&C |
| Punjab PGT (2025, Y5) | Rs. 140,901/month (KEMU No.11428/KEMU, Oct 2025) |
| Monthly Gap (Y5) | Rs. 36,511 |
| AKU Resident (R-V) | Rs. 155,000/month |
| Shifa PGY-V | Rs. 116,500/month |
| Budget 2026-27 Allocation | Rs. 0 (Zero) |
| CPSP Mandate | Grade-17 parity — Point 6, 09 Jun 2026 |
| PM&DC Mandate | Mandatory stipend — PG Regs 2025, 29 Aug 2025 |

---

## 🚀 How to Deploy on GitHub Pages

### Step 1: Create the Repository

1. Go to [github.com](https://github.com) and create a new account (if needed)
2. Create a new repository named exactly: `pgt-pay-justice.github.io`
   - Make it **Public**
   - Do NOT initialize with README (you'll upload this one)

### Step 2: Upload Files

**Option A — GitHub Web Interface (No coding needed):**
1. Open your new repository on GitHub
2. Click "uploading an existing file" or drag & drop
3. Upload ALL files maintaining this folder structure:
   ```
   index.html
   README.md
   .nojekyll
   assets/
     css/
       style.css
     js/
       protect.js
   ```
4. Click "Commit changes"

**Option B — Git Command Line:**
```bash
git init
git add .
git commit -m "Initial commit — PGT Pay Justice campaign site"
git remote add origin https://github.com/YOUR-USERNAME/pgt-pay-justice.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under "Source", select **"Deploy from a branch"**
3. Branch: **main** | Folder: **/ (root)**
4. Click **Save**
5. Wait 2–5 minutes. Your site will be live at: `https://pgt-pay-justice.github.io`

### Step 4: Custom Domain (Optional)

To use a custom domain like `pgtpayjustice.pk`:
1. In Settings → Pages → Custom domain, enter your domain
2. Update your domain registrar's DNS with GitHub's IP addresses:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
3. Add a `CNAME` file in the repo root containing just your domain name

---

## 📁 File Structure

```
pgt-pay-justice.github.io/
├── index.html          ← Main website (single page)
├── README.md           ← This file
├── .nojekyll           ← Tells GitHub to serve HTML directly
└── assets/
    ├── css/
    │   └── style.css   ← All styling
    └── js/
        └── protect.js  ← Anti-screenshot & content protection
```

---

## 📄 Official Documents Referenced

All documents are cited with official file numbers and dates:

1. **F.No.9-24/2016-E-I** — M/o NHS,R&C, 27 Jan 2020 (PGR stipend fixed at Rs.104,390)
2. **F.No.10-368/2019-H-I** — M/o NHS,R&C, 30 Sep 2020 (BPS doctors given extra allowances — PGTs excluded)
3. **KEMU No.9426/KEMU** — 27 Jul 2024 (Punjab PGT: Rs.116,708–132,035)
4. **KEMU No.11428/KEMU** — 23 Oct 2025 (Punjab PGT: Rs.123,741–140,901)
5. **PHF/ADMIN/3758** — Punjab Health Foundation, 16 Jan 2025 (Citizen Portal response)
6. **PM&DC Public Notice** — 29 Aug 2025 (Mandatory stipend under PG Regs 2025)
7. **CPSP Point No.6** — 09 Jun 2026 (Grade-17 parity mandate)
---

## ⚖️ Legal Basis

- **Wafaqi Mohtasib (Ombudsman) Order 1983** — Section 2(3)(i): Maladministration
- **CPSP Accreditation Requirements** — Point No. 6 (09 Jun 2026): Grade-17 parity
- **PM&DC PG Standards & Regulations 2025** — Part IV, 11(c): Mandatory remuneration
- **Punjab Health Foundation Order SO(ND)2-26/2023** — 90%-of-MO formula precedent

---

## 🔒 Content Protection

The site implements:
- JavaScript `contextmenu` prevention (no right-click)
- Keyboard shortcut blocking (Ctrl+P, Ctrl+S, Ctrl+C, F12, PrintScreen)
- Text selection disabled on protected sections
- Drag prevention
- CSS print block
- Watermark overlays on document sections
- DevTools detection with content blur

*Note: No content protection is 100% foolproof. These measures deter casual copying and screenshot sharing.*

---

## 📢 Campaign

**Hashtag:** `#PGTPayJustice`  
**Email:** pgtpayjustice@gmail.com

*Not affiliated with any political party. This is a professional advocacy campaign by concerned medical trainees.*
