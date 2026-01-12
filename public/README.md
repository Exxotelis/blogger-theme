# Public Assets - GitHub Pages

This folder contains production-ready assets served via GitHub Pages.

## 📁 Structure

```
public/
├── index.html          # CDN asset directory (shows available URLs)
└── assets/
    ├── main.css        # Production CSS (copied from src/css/main.css)
    └── main.js         # Production JS (copied from src/js/main.js)
```

## 🌐 Live URLs

After enabling GitHub Pages, your assets will be available at:

```
https://YOUR_USERNAME.github.io/REPO_NAME/public/assets/main.css?v=1.0.0
https://YOUR_USERNAME.github.io/REPO_NAME/public/assets/main.js?v=1.0.0
```

## 🔄 Updating Assets

1. Edit source files in `src/css/` or `src/js/`
2. Copy to public folder:
   ```bash
   Copy-Item src\css\main.css public\assets\main.css
   Copy-Item src\js\main.js public\assets\main.js
   ```
3. Commit and push changes
4. Bump version in theme.xml: `?v=1.0.1`

## ⚡ Cache Busting

Always use version query parameters to force browser cache updates:

```html
<!-- Before update -->
<link href="...main.css?v=1.0.0" rel="stylesheet"/>

<!-- After update -->
<link href="...main.css?v=1.0.1" rel="stylesheet"/>
```

## 📊 File Sizes

- `main.css`: ~23 KB (minified: ~18 KB)
- `main.js`: ~9 KB (minified: ~6 KB)

## 🚀 CDN Alternatives

### jsDelivr (Recommended for global delivery)
```
https://cdn.jsdelivr.net/gh/YOUR_USERNAME/REPO_NAME@main/public/assets/main.css
https://cdn.jsdelivr.net/gh/YOUR_USERNAME/REPO_NAME@main/public/assets/main.js
```

### Benefits:
- ✅ Global CDN with edge caching
- ✅ Faster load times worldwide
- ✅ Automatic GZIP compression
- ✅ HTTP/2 support

## 🔒 CORS Headers

GitHub Pages automatically serves files with proper CORS headers, allowing cross-origin requests from Blogger.

## 📝 Notes

- **DO NOT** edit files in `public/assets/` directly
- Always edit source files in `src/` folder
- Keep this folder in sync with `src/`
- Version numbers help with cache management
