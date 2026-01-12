# GitHub Deployment Guide

## 🚀 Quick Start

### 1. Create GitHub Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Blogger theme v1.0.0"

# Create repo on GitHub (replace YOUR_USERNAME)
# Go to: https://github.com/new
# Name: blogger-theme-vorintwo

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/blogger-theme-vorintwo.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repo: `https://github.com/YOUR_USERNAME/blogger-theme-vorintwo`
2. Click **Settings** → **Pages**
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)** or **/public** (if you want only public folder)
4. Click **Save**
5. Wait 1-2 minutes for deployment

### 3. Get Your Live URLs

Your assets will be available at:
```
https://YOUR_USERNAME.github.io/blogger-theme-vorintwo/public/assets/main.css?v=1.0.0
https://YOUR_USERNAME.github.io/blogger-theme-vorintwo/public/assets/main.js?v=1.0.0
```

**OR** if you deploy from /public folder:
```
https://YOUR_USERNAME.github.io/blogger-theme-vorintwo/assets/main.css?v=1.0.0
https://YOUR_USERNAME.github.io/blogger-theme-vorintwo/assets/main.js?v=1.0.0
```

### 4. Update theme.xml

Replace local CSS/JS references with GitHub Pages URLs:

```xml
<!-- In <head> section -->
<link rel="stylesheet" href="https://YOUR_USERNAME.github.io/blogger-theme-vorintwo/public/assets/main.css?v=1.0.0"/>

<!-- Before </body> -->
<script defer src="https://YOUR_USERNAME.github.io/blogger-theme-vorintwo/public/assets/main.js?v=1.0.0"></script>
```

## 🔄 How to Update Assets

### When you modify CSS or JS:

1. **Edit** `src/css/main.css` or `src/js/main.js`
2. **Copy** to public folder:
   ```bash
   Copy-Item src\css\main.css public\assets\main.css
   Copy-Item src\js\main.js public\assets\main.js
   ```
3. **Commit and push**:
   ```bash
   git add .
   git commit -m "Update: CSS improvements v1.0.1"
   git push
   ```
4. **Bump version** in theme.xml:
   ```xml
   <!-- Change ?v=1.0.0 to ?v=1.0.1 -->
   <link rel="stylesheet" href="...main.css?v=1.0.1"/>
   <script src="...main.js?v=1.0.1"></script>
   ```

### Version Naming Convention:
- **Major changes**: v2.0.0 (breaking changes)
- **Minor updates**: v1.1.0 (new features)
- **Patches**: v1.0.1 (bug fixes, small tweaks)

## 📦 Alternative: Use jsDelivr CDN

For faster global delivery, use jsDelivr as a CDN:

```xml
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/YOUR_USERNAME/blogger-theme-vorintwo@main/public/assets/main.css"/>

<!-- JS -->
<script defer src="https://cdn.jsdelivr.net/gh/YOUR_USERNAME/blogger-theme-vorintwo@main/public/assets/main.js"></script>
```

**Benefits:**
- Global CDN caching
- Faster load times worldwide
- Automatic cache purge on updates

## ⚠️ Important Notes

1. **XML Safety**: Always use `&amp;` instead of `&` in XML attributes
   ```xml
   ✅ href="url?v=1.0.0&amp;cache=bust"
   ❌ href="url?v=1.0.0&cache=bust"
   ```

2. **Critical CSS**: Keep minimal critical CSS in `<b:skin>` for initial render:
   ```xml
   <b:skin><![CDATA[
   body { font-family: sans-serif; }
   .vt-header { background: white; }
   ]]></b:skin>
   ```

3. **Fallback**: Add `onerror` handler for JS:
   ```xml
   <script defer src="CDN_URL" onerror="console.error('Failed to load script')"></script>
   ```

## 🔍 Troubleshooting

### Assets not loading?
- Check GitHub Pages is enabled
- Verify file paths are correct
- Check browser console for CORS errors
- Wait 2-5 minutes after push for GitHub Pages to update

### Cache issues?
- Increment version number: `?v=1.0.1`
- Hard refresh browser: Ctrl+Shift+R
- Check CDN cache if using jsDelivr

### CORS errors?
- GitHub Pages serves files with proper CORS headers
- No additional configuration needed

## 📊 Monitor

Check deployment status:
- GitHub Actions tab: See deployment logs
- Settings → Pages: See live URL and status

## 🎯 Best Practices

1. ✅ Always test locally with `preview.html` first
2. ✅ Commit to a `dev` branch, test, then merge to `main`
3. ✅ Use semantic versioning (v1.0.0, v1.0.1, etc.)
4. ✅ Keep `public/assets/` in sync with `src/`
5. ✅ Document changes in CHANGELOG.md
6. ✅ Test on real Blogger before pushing updates

## 📝 Quick Command Reference

```bash
# Update assets
Copy-Item src\css\main.css public\assets\main.css
Copy-Item src\js\main.js public\assets\main.js

# Commit
git add .
git commit -m "Update: description"
git push

# Check status
git status

# View remote
git remote -v
```

## 🌐 Example Final URLs

Replace `YOUR_USERNAME` with your actual GitHub username:

```
Repository: https://github.com/YOUR_USERNAME/blogger-theme-vorintwo
Pages Site: https://YOUR_USERNAME.github.io/blogger-theme-vorintwo/public/
CSS: https://YOUR_USERNAME.github.io/blogger-theme-vorintwo/public/assets/main.css?v=1.0.0
JS: https://YOUR_USERNAME.github.io/blogger-theme-vorintwo/public/assets/main.js?v=1.0.0
```

---

**Need help?** Check GitHub Pages documentation: https://docs.github.com/pages
