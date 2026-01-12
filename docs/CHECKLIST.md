# Blogger Theme Validation Checklist

## 📋 Pre-Upload Validation

### XML Syntax
- [ ] Όλα τα tags κλείνουν σωστά (XML strict mode)
- [ ] Δεν υπάρχουν "raw" `&` μέσα σε scripts (χρήση `&amp;` ή `<![CDATA[`)
- [ ] Δεν υπάρχουν "raw" `<` ή `>` εκτός tags (χρήση `&lt;` και `&gt;`)
- [ ] Όλα τα attributes έχουν quotes (`"` ή `'`)
- [ ] Όλα τα Blogger tags (`<b:*>`) είναι σωστά κλεισμένα

### Structure
- [ ] Unique IDs για όλα τα sections (header, main, sidebar, footer)
- [ ] Unique IDs για όλα τα widgets
- [ ] Σωστή χρήση `b:section` με `maxwidgets` attribute
- [ ] `locked='true'` για Header και Footer widgets
- [ ] `showaddelement='yes'` για sections που θέλουμε να επεξεργάζονται

### Required Elements
- [ ] `<!DOCTYPE html>` declaration
- [ ] `<b:include name='all-head-content'/>` στο `<head>`
- [ ] `<title>` tag με `<data:blog.pageTitle/>`
- [ ] `<b:skin>` section με CSS
- [ ] Meta viewport για responsive
- [ ] Favicon link (προαιρετικό)

## 🎨 CSS Validation

### CSS Variables
- [ ] Όλα τα colors ορισμένα στο `:root`
- [ ] Font families ορισμένες
- [ ] Spacing values ορισμένα
- [ ] Border radius values ορισμένα

### Responsive
- [ ] Breakpoints για tablet (max-width: 991px)
- [ ] Breakpoints για mobile (max-width: 767px)
- [ ] Breakpoints για small mobile (max-width: 575px)
- [ ] Όλα τα elements responsive
- [ ] Images με `max-width: 100%`

### Browser Compatibility
- [ ] Fallbacks για CSS variables (αν χρειάζεται)
- [ ] Vendor prefixes για animations/transitions
- [ ] Cross-browser tested

## 📱 Functionality Testing

### Homepage (Index)
- [ ] Featured post εμφανίζεται σωστά (hero section)
- [ ] Grid με posts λειτουργεί
- [ ] Pagination λειτουργεί (Older/Newer links)
- [ ] Categories/Labels εμφανίζονται
- [ ] Post thumbnails εμφανίζονται
- [ ] Post snippets κόβονται σωστά

### Single Post Page
- [ ] Post title εμφανίζεται
- [ ] Post content εμφανίζεται πλήρως
- [ ] Featured image εμφανίζεται
- [ ] Author info εμφανίζεται
- [ ] Date εμφανίζεται σωστά formatted
- [ ] Labels/Categories links λειτουργούν
- [ ] Comments section λειτουργεί
- [ ] Share buttons (αν υπάρχουν)

### Label/Category Pages
- [ ] Posts φιλτράρονται σωστά ανά category
- [ ] Category title εμφανίζεται
- [ ] Post count ανά category σωστός
- [ ] Pagination λειτουργεί

### Archive Pages
- [ ] Posts φιλτράρονται ανά μήνα/χρόνο
- [ ] Archive title εμφανίζεται
- [ ] Post count σωστός
- [ ] Pagination λειτουργεί

### Search Pages
- [ ] Search form λειτουργεί
- [ ] Search results εμφανίζονται
- [ ] "No results" message όταν δεν υπάρχουν αποτελέσματα
- [ ] Search query εμφανίζεται στο title

## 🔧 Widget Validation

### BlogSearch Widget
- [ ] Search form εμφανίζεται
- [ ] Submit button λειτουργεί
- [ ] Redirect σε `/search?q=...` σωστά

### Label Widget
- [ ] Όλες οι categories εμφανίζονται
- [ ] Post count ανά category σωστός
- [ ] Links λειτουργούν
- [ ] Styling σωστό

### BlogArchive Widget
- [ ] Archive links εμφανίζονται
- [ ] Post count ανά μήνα σωστός
- [ ] Links λειτουργούν
- [ ] Format: "Month Year (count)"

### HTML Widgets
- [ ] About widget με custom HTML
- [ ] Footer widget λειτουργεί
- [ ] Κανένα XSS security issue

### Header Widget
- [ ] Logo εμφανίζεται (αν υπάρχει)
- [ ] Blog title εμφανίζεται (fallback)
- [ ] Navigation menu λειτουργεί

## 🚀 Performance

### Images
- [ ] Lazy loading για images (αν υλοποιήθηκε)
- [ ] Responsive images
- [ ] Alt text σε όλες τις εικόνες
- [ ] Optimized image sizes

### JavaScript
- [ ] Κανένα JavaScript error στο console
- [ ] Scripts τρέχουν μόνο όταν χρειάζεται
- [ ] DOMContentLoaded event handling
- [ ] External scripts με async/defer (αν υπάρχουν)

### CSS
- [ ] Minified CSS (προαιρετικό)
- [ ] Unused CSS removed
- [ ] Critical CSS inline (προαιρετικό)

## 🔒 Security

### Links
- [ ] External links με `target="_blank"`
- [ ] External links με `rel="noopener noreferrer"`
- [ ] Σωστά escaped URLs

### Scripts
- [ ] Δεν υπάρχει inline script injection risk
- [ ] Όλα τα scripts σε CDATA blocks
- [ ] Sanitized user input (comments κλπ)

## 📊 SEO

### Meta Tags
- [ ] Title tag dynamic
- [ ] Meta description (αν ορίζεται)
- [ ] Open Graph tags (`<b:include name='og-meta-tags'/>`)
- [ ] Canonical URLs
- [ ] Schema.org markup (προαιρετικό)

### Content
- [ ] Proper heading hierarchy (H1 → H6)
- [ ] Alt text σε εικόνες
- [ ] Meaningful link text (όχι "click here")
- [ ] Sitemap accessible

## 🌐 Browser Testing

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (Chrome Mobile, Safari iOS)

## 📱 Device Testing

- [ ] Desktop (1920x1080 και μεγαλύτερο)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile landscape (667x375)
- [ ] Mobile portrait (375x667)
- [ ] Small mobile (320x568)

## ⚡ Final Checks

### Upload Process
- [ ] Backup του παλιού theme πριν το upload
- [ ] Upload του νέου theme στο Blogger
- [ ] Δοκιμή σε preview mode
- [ ] Check για broken images/links
- [ ] Save και apply theme

### Post-Upload
- [ ] Homepage φορτώνει χωρίς errors
- [ ] Όλα τα widgets εμφανίζονται
- [ ] Navigation λειτουργεί
- [ ] Search λειτουργεί
- [ ] Comments λειτουργούν
- [ ] Mobile view σωστό

### Layout Customization
- [ ] Blogger Layout Editor λειτουργεί
- [ ] Widgets μετακινούνται σωστά (drag & drop)
- [ ] Add/Remove widgets λειτουργεί
- [ ] Widget settings αποθηκεύονται

## 🐛 Common Issues to Check

- [ ] Δεν υπάρχει "Error parsing XML" message
- [ ] Δεν υπάρχει "bX:if" typo (σωστό: `b:if`)
- [ ] Όλα τα `expr:` attributes σωστά
- [ ] Δεν υπάρχουν unclosed `<b:loop>` tags
- [ ] Footer δεν καλύπτει content (sticky footer issue)
- [ ] Mobile menu toggle λειτουργεί
- [ ] Search overlay κλείνει σωστά

## 📝 Documentation

- [ ] README.md ενημερωμένο
- [ ] CHANGELOG.md με version history
- [ ] Edit points documented
- [ ] Installation instructions
- [ ] Customization guide

---

## ✅ Sign-off

**Tested by:** _________________  
**Date:** _________________  
**Version:** _________________  
**Status:** [ ] Passed [ ] Failed [ ] Needs Revision  

**Notes:**  
_______________________________________
_______________________________________
_______________________________________
