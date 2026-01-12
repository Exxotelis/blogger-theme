# Blogger Theme - Quick Reference Card

## 🚀 Upload Steps

1. Backup current theme
2. Copy `theme/theme.xml`
3. Blogger → Theme → Edit HTML
4. Paste & Save
5. Test in preview
6. Configure Layout

---

## 🎨 Quick Edits

### Change Primary Color
```css
:root {
    --base-color: #YOUR_COLOR;
}
```

### Change Font
```xml
<link href='https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap' rel='stylesheet'/>
```
```css
--font-alt: "YOUR_FONT", sans-serif;
```

### Add Menu Item
```xml
<li class='nav-item'>
    <a class='nav-link' href='/p/your-page.html'>Your Page</a>
</li>
```

---

## 📋 Blogger Tags Cheat Sheet

### Blog Data
```xml
<data:blog.title/>           <!-- Blog name -->
<data:blog.homepageUrl/>     <!-- Home URL -->
<data:blog.pageTitle/>       <!-- Page title -->
```

### Post Data
```xml
<data:post.title/>           <!-- Post title -->
<data:post.url/>             <!-- Post URL -->
<data:post.body/>            <!-- Full content -->
<data:post.snippet/>         <!-- Excerpt -->
<data:post.author/>          <!-- Author -->
<data:post.date/>            <!-- Date -->
<data:post.featuredImage/>   <!-- Image URL -->
```

### Conditionals
```xml
<b:if cond='CONDITION'>...</b:if>
<b:if cond='CONDITION'>...<b:else/>...</b:if>
```

Common conditions:
- `data:view.isHomepage` - Is homepage?
- `data:view.isSingleItem` - Is post page?
- `data:post.featuredImage` - Has image?
- `data:post.labels` - Has labels?

### Loops
```xml
<b:loop values='data:posts' var='post'>
    <data:post.title/>
</b:loop>
```

### Dynamic Attributes
```xml
<a expr:href='data:post.url'>Link</a>
<img expr:src='data:post.featuredImage'/>
```

---

## 🔧 Common Tasks

### Disable Featured Post
Find and comment out:
```xml
<!-- <b:if cond='data:view.isHomepage'>
    <b:includable id='featuredPost' var='post'/>
</b:if> -->
```

### Change Post Grid Columns
Edit CSS:
```css
.blog-posts {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Change 3 to 2 or 4 */
    gap: 20px;
}
```

### Hide Elements on Mobile
```css
@media (max-width: 767px) {
    .hide-mobile {
        display: none;
    }
}
```

---

## 📱 Responsive Breakpoints

```css
/* Desktop: Default */

/* Tablet */
@media (max-width: 991px) { }

/* Mobile */
@media (max-width: 767px) { }

/* Small Mobile */
@media (max-width: 575px) { }
```

---

## 🐛 Quick Fixes

### XML Parse Error
- Check unclosed tags
- Escape `&` as `&amp;`
- Escape `<` as `&lt;`
- Wrap scripts in `<![CDATA[` ... `]]>`

### Widget Not Showing
1. Layout → Check visibility
2. Clear browser cache
3. Check CSS `display` property

### Images Not Loading
1. Check image URL
2. Use HTTPS URLs
3. Check `expr:src` syntax

---

## 📊 File Structure

```
blogger-theme/
├── src/              → Development files
│   ├── html/        → Components
│   ├── css/         → Styles
│   └── js/          → Scripts
├── theme/
│   └── theme.xml    → 🎯 UPLOAD THIS
└── docs/            → Guides
```

---

## ✅ Pre-Upload Checklist

- [ ] Backup old theme
- [ ] All tags closed?
- [ ] No XML errors?
- [ ] Tested in preview?
- [ ] Widgets configured?
- [ ] Mobile responsive?

---

## 🎯 Widget Types

```xml
<b:widget type='Header'>        <!-- Logo/Title -->
<b:widget type='Blog'>          <!-- Posts -->
<b:widget type='BlogSearch'>    <!-- Search -->
<b:widget type='Label'>         <!-- Categories -->
<b:widget type='BlogArchive'>   <!-- Archive -->
<b:widget type='HTML'>          <!-- Custom HTML -->
<b:widget type='PopularPosts'>  <!-- Popular -->
<b:widget type='Profile'>       <!-- Author -->
```

---

## 🔑 Essential Sections

```xml
<!-- Header -->
<b:section id='header-section' maxwidgets='1' showaddelement='no'>

<!-- Main Content -->
<b:section id='main' maxwidgets='1' showaddelement='yes'>

<!-- Sidebar -->
<b:section id='sidebar' maxwidgets='10' showaddelement='yes'>

<!-- Footer -->
<b:section id='footer-section' maxwidgets='1' showaddelement='no'>
```

---

## 💾 Backup Command

**Before upload:**
1. Theme → Backup/Restore
2. Download theme
3. Save as `backup-[DATE].xml`

---

## 🌐 Useful URLs

- **Blogger Help:** support.google.com/blogger
- **Template Docs:** support.google.com/blogger/answer/46995
- **Layout Guide:** support.google.com/blogger/answer/176245

---

## 📞 Emergency Recovery

If theme breaks:
1. Theme → Backup/Restore
2. Choose previous backup
3. Restore

---

## ⚡ Performance Tips

1. Optimize images before upload
2. Use lazy loading (built-in)
3. Minimize custom scripts
4. Use CDN for external resources
5. Enable Blogger compression

---

**Keep this card handy!** 📌

Print or save for quick reference during theme customization.

---

_Version 1.0.0 | Updated: Jan 2026_
