# Blogger Theme Documentation

## 🎨 Επισκόπηση

Αυτό το Blogger theme είναι ένα σύγχρονο, responsive template που βασίζεται σε clean HTML/CSS/JavaScript και έχει σχεδιαστεί για να είναι εύκολο στην προσαρμογή και συντήρηση.

### Χαρακτηριστικά

- ✅ Πλήρως responsive (Desktop, Tablet, Mobile)
- ✅ Οργανωμένη δομή με components
- ✅ CSS Variables για εύκολη προσαρμογή
- ✅ Modern JavaScript (ES6+)
- ✅ SEO optimized
- ✅ Blogger widgets integration
- ✅ Featured post (Hero) section
- ✅ Search functionality
- ✅ Categories/Labels support
- ✅ Archive widget
- ✅ Comment system ready

---

## 📁 Δομή Project

```
blogger-theme/
│
├── src/                          # Source files (για development)
│   ├── html/                     # HTML components
│   │   ├── header.html          # Header component
│   │   ├── hero.html            # Featured post section
│   │   ├── post-card.html       # Blog post card
│   │   ├── categories.html      # Categories section
│   │   ├── sidebar.html         # Sidebar widgets
│   │   └── footer.html          # Footer component
│   │
│   ├── css/                      # Stylesheets
│   │   └── main.css             # Main CSS με variables
│   │
│   ├── js/                       # JavaScript files
│   │   └── main.js              # Main JavaScript
│   │
│   └── assets/                   # Images, icons κλπ
│
├── theme/                        # Παραγωγή
│   └── theme.xml                # Τελικό Blogger template
│
└── docs/                         # Documentation
    ├── README.md                # Αυτό το αρχείο
    ├── CHANGELOG.md             # Version history
    └── CHECKLIST.md             # Validation checklist
```

---

## 🚀 Εγκατάσταση

### Βήμα 1: Upload στο Blogger

1. Πήγαινε στο Blogger Dashboard
2. Επίλεξε το blog σου
3. Πήγαινε στο **Theme** → **Customize** → **Edit HTML**
4. **ΣΗΜΑΝΤΙΚΟ:** Κάνε backup το παλιό theme (Download)
5. Διέγραψε όλο το περιεχόμενο και paste το περιεχόμενο του `theme/theme.xml`
6. Κάνε click **Save theme**

### Βήμα 2: Προσαρμογές (προαιρετικό)

1. Πήγαινε στο **Layout**
2. Drag & drop τα widgets όπως θέλεις
3. Προσθήκη/αφαίρεση widgets από sidebar
4. Προσθήκη social media links στο footer

### Βήμα 3: Customization

1. Πήγαινε στο **Theme Designer**
2. Άλλαξε χρώματα, fonts κλπ (ή edit το CSS)
3. Upload logo (αν θέλεις)

---

## 🎨 Προσαρμογή Χρωμάτων

Όλα τα χρώματα ορίζονται ως CSS Variables στο `:root`. Για να αλλάξεις το color scheme, edit το `theme.xml` στο CSS section:

```css
:root {
    --base-color: #f43f5e;        /* Primary color (κουμπιά, links, κλπ) */
    --dark-gray: #1e1e1e;          /* Header/Footer background */
    --text-dark-gray: #1f2937;     /* Κύριο κείμενο */
    --very-light-gray: #f9fafb;    /* Backgrounds */
}
```

### Προτεινόμενα Color Schemes

**Blue Theme:**
```css
--base-color: #3b82f6;
--dark-gray: #1e293b;
```

**Green Theme:**
```css
--base-color: #10b981;
--dark-gray: #064e3b;
```

**Purple Theme:**
```css
--base-color: #8b5cf6;
--dark-gray: #4c1d95;
```

---

## 📝 Προσαρμογή Περιεχομένου

### Header

**Για να αλλάξεις το Logo:**

1. Πήγαινε στο Blogger → **Layout**
2. Click στο **Header** widget
3. Upload το logo σου
4. Save

**Για να αλλάξεις το Navigation Menu:**

Edit το `theme.xml` και βρες το section:

```xml
<ul class='navbar-nav'>
    <li class='nav-item'>
        <a class='nav-link' expr:href='data:blog.homepageUrl'>Home</a>
    </li>
    <!-- Πρόσθεσε εδώ νέα menu items -->
</ul>
```

### Featured Post (Hero Section)

Το πρώτο post στην homepage εμφανίζεται αυτόματα ως featured. Δεν χρειάζεται configuration.

### Sidebar Widgets

**Διαθέσιμα Widgets:**

- **BlogSearch** - Search box
- **Label** - Categories/Tags
- **BlogArchive** - Monthly/Yearly archive
- **HTML** - Custom HTML (π.χ. About, Ads)
- **PopularPosts** - Popular posts (μπορείς να προσθέσεις)
- **Profile** - Author profile

**Για να προσθέσεις widget:**

1. Πήγαινε στο **Layout**
2. Click **Add a Gadget** στο sidebar
3. Επίλεξε το widget που θέλεις
4. Configure και Save

### Footer

Edit το HTML widget στο footer section για να αλλάξεις:
- Social media links
- Copyright text
- Footer links

---

## 🔧 Τεχνικά Edit Points

### 1. CSS Variables

**Αρχείο:** `theme.xml` → `<b:skin>` section

**Τι να αλλάξεις:**
- Colors
- Font sizes
- Spacing
- Border radius
- Shadows

### 2. Typography

**Fonts:**

```css
--font-primary: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
--font-alt: "Poppins", sans-serif;
```

Για να χρησιμοποιήσεις άλλο Google Font, πρόσθεσε στο `<head>`:

```xml
<link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&amp;display=swap' rel='stylesheet'/>
```

Και άλλαξε το:

```css
--font-alt: "Montserrat", sans-serif;
```

### 3. Post Card Layout

**Αρχείο:** `theme.xml` → `<b:includable id='post'>`

Εδώ μπορείς να αλλάξεις:
- Post card structure
- Meta info που εμφανίζεται (date, author, comments)
- Thumbnail size
- Snippet length

### 4. Featured Post (Hero)

**Αρχείο:** `theme.xml` → `<b:includable id='featuredPost'>`

**Πώς να το disable:**

Σχολίασε το:

```xml
<!-- <b:if cond='data:view.isHomepage'>
    <b:includable id='featuredPost' var='post'/>
</b:if> -->
```

### 5. Sidebar Position

Για να μετακινήσεις το sidebar στα αριστερά, άλλαξε τη σειρά των sections στο HTML:

```xml
<!-- Sidebar ΠΡΩΤΟ -->
<b:section class='sidebar-section col-lg-4' id='sidebar'>...</b:section>

<!-- Main ΔΕΥΤΕΡΟ -->
<b:section class='main-section col-lg-8' id='main'>...</b:section>
```

---

## 📱 Responsive Breakpoints

Το theme χρησιμοποιεί τα παρακάτω breakpoints:

- **Desktop:** > 1200px
- **Laptop:** 992px - 1199px
- **Tablet:** 768px - 991px
- **Mobile:** 576px - 767px
- **Small Mobile:** < 576px

---

## 🔍 SEO Optimization

### Μeta Tags

Το theme περιλαμβάνει:

- ✅ Dynamic title tags
- ✅ Meta description (από Blogger settings)
- ✅ Open Graph tags
- ✅ Canonical URLs

### Best Practices

1. **Πρόσθεσε Alt Text σε εικόνες**
2. **Χρησιμοποίησε descriptive titles** στα posts
3. **Γράψε meta descriptions** για κάθε post
4. **Χρησιμοποίησε Labels/Categories** σωστά
5. **Internal linking** μεταξύ posts

---

## ⚡ Performance Tips

### Images

1. **Optimize images** πριν το upload (compression)
2. **Χρησιμοποίησε WebP format** όπου γίνεται
3. **Lazy loading** ενεργοποιημένο από default

### CSS/JS

1. **Minify CSS/JS** για production (χρήση online tools)
2. **Remove unused CSS** αν δεν χρειάζεται
3. **Defer non-critical JavaScript**

---

## 🐛 Troubleshooting

### "Error parsing XML"

**Αιτία:** Syntax error στο XML

**Λύση:**
1. Check για unclosed tags
2. Check για `&` που δεν είναι `&amp;`
3. Check για `<` ή `>` σε scripts (χρήση CDATA)
4. Validate XML online

### Widgets δεν εμφανίζονται

**Λύση:**
1. Check το **Layout** → confirm ότι τα widgets είναι visible
2. Check CSS για `display: none`
3. Clear browser cache

### Responsive issues

**Λύση:**
1. Test σε διαφορετικά devices
2. Check media queries στο CSS
3. Use Chrome DevTools για debugging

### Featured post δεν εμφανίζεται

**Λύση:**
1. Βεβαιώσου ότι υπάρχει τουλάχιστον 1 post
2. Βεβαιώσου ότι το post έχει featured image
3. Check το `<b:if cond='data:view.isHomepage'>` condition

---

## 📞 Support & Updates

### Για βοήθεια:

- Check το `CHECKLIST.md` για validation
- Review το `CHANGELOG.md` για updates
- Read Blogger documentation: https://support.google.com/blogger

### Useful Resources:

- **Blogger Tags Reference:** https://support.google.com/blogger/answer/46995
- **CSS Variables Guide:** https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
- **Responsive Design:** https://web.dev/responsive-web-design-basics/

---

## 📄 License

Αυτό το theme είναι ελεύθερο για personal και commercial χρήση.

---

## ✨ Credits

- **Design Inspiration:** Crafto Template
- **Icons:** Feather Icons, Font Awesome
- **Fonts:** Google Fonts (Poppins)

---

**Version:** 1.0.0  
**Last Updated:** January 2026  
**Author:** Your Name

---

## 🎯 Next Steps

1. ✅ Upload theme στο Blogger
2. ✅ Configure widgets στο Layout
3. ✅ Customize colors/fonts
4. ✅ Add content (posts)
5. ✅ Test σε όλα τα devices
6. ✅ SEO optimization
7. ✅ Go live!

**Καλή τύχη με το blog σου!** 🚀
