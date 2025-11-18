# 📝 Complete Editing Guide for HLPFL Website

This guide shows you exactly where to edit all text, headers, and content on your website.

## 🗂️ File Structure Overview

```
src/
├── app/
│   ├── page.tsx           # Main page content (Hero, Trust Badges, Value Props)
│   └── layout.tsx         # Page layout and metadata
├── components/
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer content
│   ├── Process.tsx        # "How It Works" section
│   ├── Stats.tsx          # Statistics numbers
│   ├── Testimonials.tsx  # Customer testimonials
│   ├── Pricing.tsx        # Pricing plans
│   ├── FAQ.tsx           # Frequently Asked Questions
│   └── FinalCTA.tsx      # Final call-to-action
```

---

## 🚀 Quick Edit Locations

### 1. **Main Hero Section** (`src/app/page.tsx`)

**Lines 70-78: Main Headline**
```tsx
<h1 className="text-[clamp(3.5rem,8vw,7rem)] font-bold mb-8 leading-tight">
  <span className="text-text block">Your First Website</span>
  <span className="block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
    Shouldn't Break the Bank
  </span>
</h1>
```

**Lines 80-83: Hero Description**
```tsx
<p className="text-[clamp(1.1rem,2vw,1.35rem)] text-text-muted mb-12 max-w-2xl leading-relaxed">
  High-quality websites for first-time founders at prices you can actually afford. 
  No outsourcing, full transparency, 100% US-based work.
</p>
```

**Lines 85-92: Hero Buttons**
```tsx
<div className="hero-cta flex gap-6 flex-wrap">
  <a href="/contact" className="cta-button">Get Your Free Quote</a>
  <button onClick={() => scrollToSection('#value-props')} className="secondary-button">
    See How It Works
  </button>
</div>
```

### 2. **Trust Badges** (`src/app/page.tsx`)

**Lines 95-130: Five trust badges**
```tsx
<div className="trust-badge flex flex-col items-center gap-2">
  <div className="trust-badge-icon text-4xl mb-2">⚡</div>
  <h3 className="text-primary text-lg mb-1">72-Hour Delivery*</h3>
  <p className="text-text-muted text-sm">Efficient turnaround guaranteed</p>
</div>
```

### 3. **Value Propositions** (`src/app/page.tsx`)

**Lines 138-142: Section Header**
```tsx
<h2 className="text-[clamp(2.5rem,5vw,4rem)] mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
  Why Choose HLPFL?
</h2>
```

**Lines 143-145: Section Description**
```tsx
<p className="text-xl text-text-muted max-w-3xl mx-auto">
  We understand the challenges first-time founders face. That's why we've built a service that actually works for you.
</p>
```

**Lines 147-165: Three Value Cards**
```tsx
<div className="value-card reveal">
  <div className="value-icon text-5xl mb-4">⚡</div>
  <h3 className="text-2xl mb-4 text-primary">Lightning-Fast Delivery</h3>
  <p className="text-text-muted leading-relaxed">
    Get your website live in 72 hours when you provide all materials...
  </p>
</div>
```

---

## 🧩 Component-by-Component Editing

### **Header Navigation** (`src/components/Header.tsx`)

**Lines 18-24: Navigation Links**
```tsx
const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];
```

### **Footer** (`src/components/Footer.tsx`)
- Edit company info, services list, and contact details

### **Process Section** (`src/components/Process.tsx`)
- Edit "How It Works" steps and descriptions

### **Stats Section** (`src/components/Stats.tsx`)
- Edit statistics numbers and labels

### **Testimonials** (`src/components/Testimonials.tsx`)
- Edit customer testimonials and names

### **Pricing** (`src/components/Pricing.tsx`)
- Edit pricing plans, features, and prices

### **FAQ** (`src/components/FAQ.tsx`)
- Edit questions and answers

---

## 🛠️ How to Make Changes

### **Method 1: Edit Files Directly**
1. Open the specific file mentioned above
2. Find the text you want to change
3. Edit the content between the quotes or JSX tags
4. Save the file
5. Push to GitHub to deploy

### **Method 2: Using VS Code or Your Editor**
```bash
# Open your project folder
cd hlpfldev.tsx

# Open specific file
code src/app/page.tsx  # or your preferred editor
```

---

## 🎨 Common Text Edits

### **Changing Headlines**
Find `<h1>`, `<h2>`, `<h3>` tags and edit the text inside:
```tsx
<h1>Your New Headline Here</h1>
```

### **Changing Paragraphs**
Find `<p>` tags and edit the content:
```tsx
<p>Your new paragraph text goes here.</p>
```

### **Changing Button Text**
Find buttons and edit the text:
```tsx
<button className="cta-button">New Button Text</button>
```

### **Changing Links**
Find `<a>` tags or `<Link>` components:
```tsx
<a href="/contact">Contact Us</a>
<Link href="/about">About Us</Link>
```

---

## 🚀 Deploying Your Changes

After making edits:

1. **Commit your changes:**
```bash
git add .
git commit -m "Update website content"
```

2. **Push to GitHub:**
```bash
git push origin main
```

3. **Automatic Deployment:**
   - GitHub Actions will automatically build and deploy
   - Your changes will be live in 1-2 minutes
   - Check: https://4ddf0496.hlpfldev.pages.dev

---

## 📱 What You Can Edit

✅ **All Text Content:** Headlines, paragraphs, descriptions  
✅ **Navigation Links:** Menu items and URLs  
✅ **Button Text:** All call-to-action buttons  
✅ **Contact Info:** Email, phone, address in footer  
✅ **Service Descriptions:** What you offer  
✅ **Pricing Information:** Plans and prices  
✅ **FAQ Content:** Questions and answers  
✅ **Testimonials:** Customer reviews  

---

## 🎯 Quick Start Example

**To change the main headline:**

1. Open `src/app/page.tsx`
2. Find line ~71: `<span className="text-text block">Your First Website</span>`
3. Change to: `<span className="text-text block">Your Custom Headline</span>`
4. Save, commit, and push!

**To change navigation:**

1. Open `src/components/Header.tsx`
2. Find the `navLinks` array around line 18
3. Edit the `label` values: `{ href: '#home', label: 'Home' }`
4. Save, commit, and push!

---

## 🆘 Need Help?

If you need help with specific edits:
1. Tell me exactly what text you want to change
2. I'll show you the exact file and line numbers
3. I can even make the changes for you!

**Your website is fully customizable - every piece of text can be edited!** 🎉