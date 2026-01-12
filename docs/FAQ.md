# ❓ Frequently Asked Questions (FAQ)

## 📋 Γενικά

### Q: Τι είναι αυτό το project;
**A:** Ένα πλήρως οργανωμένο Blogger theme project με HTML components, CSS, JavaScript, και ολοκληρωμένη τεκμηρίωση. Περιλαμβάνει όλα όσα χρειάζεσαι για να δημιουργήσεις ένα professional blog στο Blogger.

### Q: Είναι δωρεάν;
**A:** Ναι, είναι ελεύθερο για personal και commercial χρήση.

### Q: Χρειάζομαι coding skills;
**A:** Όχι για βασική χρήση. Για προχωρημένες προσαρμογές, βασική γνώση HTML/CSS βοηθάει.

### Q: Λειτουργεί με το Blogger;
**A:** Ναι, είναι ειδικά σχεδιασμένο για το Blogger platform.

---

## 🚀 Installation

### Q: Πώς κάνω upload το theme;
**A:** 
1. Άνοιξε το `theme/theme.xml`
2. Copy όλο το περιεχόμενο
3. Blogger → Theme → Edit HTML
4. Paste και Save

### Q: Πρέπει να κάνω backup πρώτα;
**A:** Ναι, πάντα! Blogger → Theme → Backup/Restore → Download theme

### Q: Τι κάνω αν πάρω XML error;
**A:** 
1. Check για unclosed tags
2. Βεβαιώσου ότι δεν έχεις `&` που δεν είναι `&amp;`
3. Βεβαιώσου ότι scripts είναι μέσα σε `<![CDATA[` ... `]]>`
4. Validate το XML online

### Q: Πώς μπορώ να δω preview πριν το apply;
**A:** Blogger → Theme → Edit HTML → Preview (κουμπί στο πάνω μέρος)

---

## 🎨 Customization

### Q: Πώς αλλάζω τα χρώματα;
**A:** Edit το `theme.xml`, βρες το `:root` section και άλλαξε:
```css
:root {
    --base-color: #YOUR_COLOR;
    --dark-gray: #YOUR_DARK_COLOR;
}
```

### Q: Πώς αλλάζω το font;
**A:** 
1. Πρόσθεσε Google Font link στο `<head>`
2. Άλλαξε το `--font-alt` variable στο CSS

### Q: Πώς ανεβάζω logo;
**A:** Blogger → Layout → Header widget → Edit → Upload image

### Q: Πώς προσθέτω menu items;
**A:** Edit το `theme.xml`, βρες `<ul class='navbar-nav'>` και πρόσθεσε:
```xml
<li class='nav-item'>
    <a class='nav-link' href='/p/your-page.html'>Your Page</a>
</li>
```

### Q: Μπορώ να απενεργοποιήσω το featured post;
**A:** Ναι, σχολίασε το `<b:if cond='data:view.isHomepage'>` section στο theme.xml

---

## 📱 Layout & Widgets

### Q: Πώς αλλάζω τη σειρά των widgets;
**A:** Blogger → Layout → Drag & drop τα widgets

### Q: Πώς προσθέτω νέο widget;
**A:** Blogger → Layout → Add a Gadget → Επίλεξε widget type

### Q: Πού είναι το sidebar;
**A:** Δεξιά στην οθόνη (Desktop). Κάτω στο Mobile.

### Q: Μπορώ να μετακινήσω το sidebar αριστερά;
**A:** Ναι, άλλαξε τη σειρά των sections στο XML (sidebar πριν το main)

### Q: Πώς κρύβω widget στο mobile;
**A:** Πρόσθεσε CSS:
```css
@media (max-width: 767px) {
    #WidgetID {
        display: none;
    }
}
```

---

## 📝 Content

### Q: Πώς δημιουργώ featured image για posts;
**A:** 
1. Create/Edit post
2. Insert image στο post
3. Το πρώτο image γίνεται automatically featured

### Q: Πώς αλλάζω το post snippet length;
**A:** Blogger Settings → Posts → Post Excerpt → Set character limit

### Q: Πώς προσθέτω categories;
**A:** Create/Edit post → Labels → Πρόσθεσε label names

### Q: Γιατί δεν εμφανίζεται το featured post;
**A:** 
- Βεβαιώσου ότι υπάρχει τουλάχιστον 1 published post
- Βεβαιώσου ότι το post έχει featured image
- Check ότι είσαι στην homepage

---

## 🐛 Troubleshooting

### Q: Το theme δεν φορτώνει σωστά
**A:** 
1. Clear browser cache (Ctrl+Shift+Del)
2. Hard refresh (Ctrl+F5)
3. Check browser console για errors (F12)

### Q: Widgets δεν εμφανίζονται
**A:** 
1. Blogger → Layout → Βεβαιώσου ότι είναι visible
2. Clear cache
3. Check CSS για `display: none`

### Q: Mobile view είναι broken
**A:** 
1. Test σε Chrome DevTools (F12 → Toggle device toolbar)
2. Check media queries στο CSS
3. Verify viewport meta tag

### Q: Images δεν φορτώνουν
**A:** 
1. Βεβαιώσου ότι χρησιμοποιείς HTTPS URLs
2. Check image URLs
3. Verify `expr:src` syntax

### Q: Search δεν λειτουργεί
**A:** 
1. Βεβαιώσου ότι το BlogSearch widget είναι enabled
2. Check form action: `expr:action='data:blog.searchUrl'`
3. Verify input name: `name='q'`

---

## ⚡ Performance

### Q: Πώς κάνω το theme πιο γρήγορο;
**A:** 
1. Optimize images πριν το upload
2. Use lazy loading (ήδη υλοποιημένο)
3. Minimize external scripts
4. Enable Blogger compression

### Q: Lazy loading δουλεύει;
**A:** Ναι, ήδη υλοποιημένο στο JavaScript

### Q: Πρέπει να minify το CSS/JS;
**A:** Όχι απαραίτητα, αλλά βοηθάει. Use online tools αν θέλεις.

---

## 🔍 SEO

### Q: Πώς βελτιώνω το SEO;
**A:** 
1. Γράψε descriptive titles
2. Πρόσθεσε meta descriptions
3. Use proper heading hierarchy (H1, H2, H3)
4. Add alt text σε images
5. Create sitemap (Blogger το κάνει automatically)

### Q: Τα Open Graph tags λειτουργούν;
**A:** Ναι, περιλαμβάνονται μέσω `<b:include name='og-meta-tags'/>`

### Q: Πώς προσθέτω Google Analytics;
**A:** Blogger → Settings → Basic → Google Analytics Property ID

---

## 📱 Responsive Design

### Q: Είναι responsive;
**A:** Ναι, πλήρως responsive για όλα τα devices

### Q: Ποια devices υποστηρίζονται;
**A:** 
- Desktop (> 1200px)
- Laptop (992px - 1199px)
- Tablet (768px - 991px)
- Mobile (< 768px)

### Q: Πώς δοκιμάζω το responsive;
**A:** 
1. Chrome → F12 → Toggle device toolbar
2. Test σε πραγματικά devices
3. Use online tools (BrowserStack, etc.)

---

## 🔧 Advanced

### Q: Πώς προσθέτω custom JavaScript;
**A:** Πρόσθεσε script πριν το `</body>` μέσα σε `<![CDATA[` ... `]]>`

### Q: Πώς προσθέτω Google Font;
**A:** 
```xml
<link href='https://fonts.googleapis.com/css2?family=Font+Name&display=swap' rel='stylesheet'/>
```

### Q: Μπορώ να χρησιμοποιήσω jQuery;
**A:** Ναι, πρόσθεσε:
```xml
<script src='https://code.jquery.com/jquery-3.6.0.min.js'/>
```

### Q: Πώς φτιάχνω custom widget;
**A:** 
```xml
<b:widget id='HTML99' type='HTML'>
    <b:includable id='main'>
        <!-- Your HTML here -->
    </b:includable>
</b:widget>
```

### Q: Πώς φτιάχνω dark mode;
**A:** Πρόσθεσε toggle button και CSS variables για dark theme

---

## 📚 Documentation

### Q: Από πού ξεκινάω;
**A:** Διάβασε το `PROJECT-INDEX.md` ή το `docs/README.md`

### Q: Υπάρχει checklist πριν το upload;
**A:** Ναι, δες το `docs/CHECKLIST.md`

### Q: Πώς μαθαίνω Blogger tags;
**A:** Δες το `docs/MAPPING-GUIDE.md`

### Q: Υπάρχει quick reference;
**A:** Ναι, δες το `docs/QUICK-REFERENCE.md`

---

## 🔄 Updates

### Q: Πώς κάνω update το theme;
**A:** 
1. Backup το τρέχον theme
2. Download νέα version
3. Review CHANGELOG
4. Upload νέο theme.xml

### Q: Θα χάσω τις προσαρμογές μου;
**A:** Ναι, αν δεν τις έχεις documented. Keep notes των αλλαγών σου.

### Q: Πώς κρατάω τις αλλαγές μου;
**A:** 
1. Document όλες τις αλλαγές
2. Use Git για version control
3. Save custom snippets ξεχωριστά

---

## 🌐 Browser Support

### Q: Ποια browsers υποστηρίζονται;
**A:** 
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Q: Λειτουργεί σε Internet Explorer;
**A:** Όχι, το IE δεν υποστηρίζεται (deprecated)

---

## 💾 Backup & Recovery

### Q: Πώς κάνω backup;
**A:** Blogger → Theme → Backup/Restore → Download theme

### Q: Πώς restore backup;
**A:** Blogger → Theme → Backup/Restore → Upload → Choose file

### Q: Συνιστάτε automatic backups;
**A:** Ναι, download backup πριν από κάθε major αλλαγή

---

## 🎯 Best Practices

### Q: Τι πρέπει να κάνω πρώτα;
**A:** 
1. Upload theme
2. Test σε preview
3. Configure widgets
4. Customize colors
5. Add content
6. Test thoroughly
7. Go live

### Q: Πόσο συχνά πρέπει να κάνω updates;
**A:** Όποτε υπάρχει νέα version με bug fixes ή features που χρειάζεσαι

### Q: Πρέπει να χρησιμοποιήσω όλα τα widgets;
**A:** Όχι, χρησιμοποίησε μόνο όσα χρειάζεσαι

---

## 📞 Support

### Q: Πού μπορώ να βρω βοήθεια;
**A:** 
1. Διάβασε τα docs (5 αρχεία documentation)
2. Check το CHECKLIST.md
3. Review TROUBLESHOOTING section στο README
4. Google Blogger help center

### Q: Μπορώ να κάνω commercial χρήση;
**A:** Ναι, ελεύθερα

### Q: Υπάρχει support forum;
**A:** Όχι dedicated, αλλά μπορείς να χρησιμοποιήσεις Blogger Help Community

---

## 🎨 Design

### Q: Μπορώ να αλλάξω το layout τελείως;
**A:** Ναι, αλλά θα χρειαστείς HTML/CSS knowledge

### Q: Υπάρχουν άλλα color schemes;
**A:** Δες το README.md → Quick Customization Examples

### Q: Πώς φτιάχνω custom hero section;
**A:** Edit το `<b:includable id='featuredPost'>` στο theme.xml

---

## ⚠️ Common Mistakes

### Q: Ποια λάθη να αποφύγω;
**A:** 
1. ❌ Να μην κάνεις backup
2. ❌ Να μην test πριν το go live
3. ❌ Να ξεχάσεις να escape XML characters
4. ❌ Να μην clear cache μετά από αλλαγές
5. ❌ Να μην document τις αλλαγές σου

---

## 🚀 Going Live

### Q: Είμαι έτοιμος για launch;
**A:** Check το CHECKLIST.md - πρέπει όλα να είναι ✅

### Q: Τι κάνω αμέσως μετά το launch;
**A:** 
1. Monitor για errors
2. Test όλες τις σελίδες
3. Check mobile view
4. Verify search works
5. Test widgets

---

## 📊 Analytics

### Q: Πώς παρακολουθώ traffic;
**A:** 
1. Google Analytics (Settings → Basic)
2. Blogger Stats (built-in)
3. Google Search Console

---

## 🔐 Security

### Q: Είναι ασφαλές το theme;
**A:** Ναι, δεν περιέχει malicious code

### Q: Πρέπει να ανησυχώ για XSS;
**A:** Όχι, αν δεν προσθέσεις untrusted scripts

---

**Δεν βρήκες την απάντηση;**  
Δες το `docs/README.md` για πλήρη documentation! 📚
