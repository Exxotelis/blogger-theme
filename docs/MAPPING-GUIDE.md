# HTML to Blogger XML Mapping Guide

## 🎯 Σκοπός

Αυτός ο οδηγός εξηγεί πώς τα στατικά HTML components μετατρέπονται σε dynamic Blogger XML templates.

---

## 📋 Βασικά Blogger Tags

### Data Variables

```xml
<!-- Blog Info -->
<data:blog.title/>              <!-- Blog title -->
<data:blog.homepageUrl/>        <!-- Homepage URL -->
<data:blog.url/>                <!-- Current page URL -->
<data:blog.pageTitle/>          <!-- Current page title -->
<data:blog.metaDescription/>    <!-- Meta description -->
<data:blog.locale/>             <!-- Language (e.g., 'en') -->
<data:blog.languageDirection/>  <!-- 'ltr' or 'rtl' -->

<!-- Post Info -->
<data:post.title/>              <!-- Post title -->
<data:post.url/>                <!-- Post permalink -->
<data:post.body/>               <!-- Full post content -->
<data:post.snippet/>            <!-- Post excerpt -->
<data:post.author/>             <!-- Author name -->
<data:post.date/>               <!-- Publication date -->
<data:post.featuredImage/>      <!-- Featured image URL -->
<data:post.labels/>             <!-- Array of labels -->
<data:post.numComments/>        <!-- Comment count -->

<!-- Label/Category Info -->
<data:label.name/>              <!-- Label name -->
<data:label.url/>               <!-- Label page URL -->
<data:label.count/>             <!-- Post count -->
```

### Conditionals

```xml
<!-- Check if homepage -->
<b:if cond='data:view.isHomepage'>
    <!-- Homepage content -->
</b:if>

<!-- Check if single post -->
<b:if cond='data:view.isSingleItem'>
    <!-- Single post content -->
</b:if>

<!-- Check if has featured image -->
<b:if cond='data:post.featuredImage'>
    <img expr:src='data:post.featuredImage'/>
<b:else/>
    <img src='https://placehold.co/800x570'/>
</b:if>

<!-- Check if has labels -->
<b:if cond='data:post.labels'>
    <!-- Display labels -->
</b:if>
```

### Loops

```xml
<!-- Loop through posts -->
<b:loop values='data:posts' var='post'>
    <data:post.title/>
</b:loop>

<!-- Loop through labels -->
<b:loop values='data:post.labels' var='label'>
    <data:label.name/>
</b:loop>

<!-- Loop through archive -->
<b:loop values='data:data' var='interval'>
    <data:interval.name/>
</b:loop>
```

### Dynamic Attributes

```xml
<!-- Dynamic href -->
<a expr:href='data:post.url'>Link</a>

<!-- Dynamic src -->
<img expr:src='data:post.featuredImage' expr:alt='data:post.title'/>

<!-- Dynamic class -->
<div expr:class='data:view.isHomepage ? "home" : "other"'>...</div>
```

---

## 🔄 Component Mappings

### 1. Header.html → Blogger Header

**HTML Component:**
```html
<header class="header-with-topbar">
    <nav class="navbar">
        <a href="/">Logo</a>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </nav>
</header>
```

**Blogger XML:**
```xml
<b:section id='header-section'>
    <b:widget id='Header1' type='Header'>
        <b:includable id='main'>
            <header class='header-with-topbar'>
                <nav class='navbar'>
                    <a expr:href='data:blog.homepageUrl'>
                        <b:if cond='data:blog.logoUrl'>
                            <img expr:src='data:blog.logoUrl'/>
                        <b:else/>
                            <data:blog.title/>
                        </b:if>
                    </a>
                    <ul>
                        <li><a expr:href='data:blog.homepageUrl'>Home</a></li>
                        <li><a href='/p/about.html'>About</a></li>
                    </ul>
                </nav>
            </header>
        </b:includable>
    </b:widget>
</b:section>
```

**Αλλαγές:**
- `href="/"` → `expr:href='data:blog.homepageUrl'`
- Static logo → `<b:if cond='data:blog.logoUrl'>` condition
- Fallback στο blog title

---

### 2. Post-Card.html → Blogger Post Loop

**HTML Component:**
```html
<article class="card">
    <div class="blog-image">
        <a href="POST_URL">
            <img src="POST_THUMBNAIL" alt="POST_TITLE"/>
        </a>
        <div class="blog-categories">
            <a href="CATEGORY_URL">CATEGORY_NAME</a>
        </div>
    </div>
    <div class="card-body">
        <h2><a href="POST_URL">POST_TITLE</a></h2>
        <p>POST_SNIPPET</p>
        <span>POST_DATE</span>
        <span>AUTHOR_NAME</span>
    </div>
</article>
```

**Blogger XML:**
```xml
<b:includable id='post' var='post'>
    <article class='card'>
        <div class='blog-image'>
            <a expr:href='data:post.url'>
                <b:if cond='data:post.featuredImage'>
                    <img expr:src='data:post.featuredImage' expr:alt='data:post.title'/>
                <b:else/>
                    <img src='https://placehold.co/800x570' alt='No image'/>
                </b:if>
            </a>
            
            <b:if cond='data:post.labels'>
                <div class='blog-categories'>
                    <b:loop values='data:post.labels' var='label'>
                        <a expr:href='data:label.url'>
                            <data:label.name/>
                        </a>
                    </b:loop>
                </div>
            </b:if>
        </div>
        
        <div class='card-body'>
            <h2>
                <a expr:href='data:post.url'>
                    <data:post.title/>
                </a>
            </h2>
            <p><data:post.snippet/></p>
            <span><data:post.date/></span>
            <span><data:post.author/></span>
        </div>
    </article>
</b:includable>
```

**Αλλαγές:**
- `POST_URL` → `expr:href='data:post.url'`
- `POST_THUMBNAIL` → `expr:src='data:post.featuredImage'`
- `POST_TITLE` → `<data:post.title/>`
- `CATEGORY_NAME` → Loop through `data:post.labels`
- Conditional για featured image (με fallback)
- Conditional για labels (δεν εμφανίζει αν δεν υπάρχουν)

---

### 3. Hero.html → Featured Post

**HTML Component:**
```html
<section class="hero-section">
    <div class="blog-box">
        <div class="blog-image" style="background-image: url('FEATURED_IMAGE')">
            <a href="POST_URL"></a>
        </div>
        <div class="blog-content">
            <h2><a href="POST_URL">POST_TITLE</a></h2>
            <p>POST_SNIPPET</p>
        </div>
    </div>
</section>
```

**Blogger XML:**
```xml
<b:if cond='data:view.isHomepage'>
    <b:with value='data:posts[0]' var='post'>
        <section class='hero-section'>
            <div class='blog-box'>
                <div class='blog-image' expr:style='"background-image: url(" + data:post.featuredImage + ")"'>
                    <a expr:href='data:post.url'></a>
                </div>
                <div class='blog-content'>
                    <h2>
                        <a expr:href='data:post.url'>
                            <data:post.title/>
                        </a>
                    </h2>
                    <p><data:post.snippet/></p>
                </div>
            </div>
        </section>
    </b:with>
</b:if>
```

**Αλλαγές:**
- Εμφανίζεται μόνο στην homepage: `<b:if cond='data:view.isHomepage'>`
- Παίρνει το πρώτο post: `data:posts[0]`
- Dynamic background image: `expr:style=...`
- `<b:with>` για να δημιουργήσουμε `post` variable

---

### 4. Sidebar.html → Blogger Widgets

**HTML Component:**
```html
<aside class="sidebar">
    <!-- Search -->
    <div class="widget">
        <h3>Search</h3>
        <form action="/search" method="get">
            <input type="text" name="q" placeholder="Search...">
            <button type="submit">Search</button>
        </form>
    </div>
    
    <!-- Categories -->
    <div class="widget">
        <h3>Categories</h3>
        <ul>
            <li><a href="CATEGORY_URL">CATEGORY_NAME (COUNT)</a></li>
        </ul>
    </div>
</aside>
```

**Blogger XML:**
```xml
<b:section id='sidebar'>
    <!-- Search Widget -->
    <b:widget id='BlogSearch1' type='BlogSearch'>
        <b:includable id='main'>
            <div class='widget'>
                <h3><data:title/></h3>
                <form expr:action='data:blog.searchUrl' method='get'>
                    <input expr:value='data:q' name='q' placeholder='Search...' type='text'/>
                    <button type='submit'>Search</button>
                </form>
            </div>
        </b:includable>
    </b:widget>
    
    <!-- Label Widget -->
    <b:widget id='Label1' type='Label'>
        <b:includable id='main'>
            <div class='widget'>
                <h3><data:title/></h3>
                <ul>
                    <b:loop values='data:labels' var='label'>
                        <li>
                            <a expr:href='data:label.url'>
                                <data:label.name/>
                                (<data:label.count/>)
                            </a>
                        </li>
                    </b:loop>
                </ul>
            </div>
        </b:includable>
    </b:widget>
</b:section>
```

**Αλλαγές:**
- Κάθε widget = `<b:widget type='...'>`
- Widget title: `<data:title/>`
- Search URL: `expr:action='data:blog.searchUrl'`
- Categories: Loop through `data:labels`
- Post count: `<data:label.count/>`

---

## 🎨 CSS Integration

**HTML (External CSS):**
```html
<link rel="stylesheet" href="css/main.css">
```

**Blogger XML:**
```xml
<b:skin><![CDATA[
/* Όλο το CSS εδώ */
:root {
    --base-color: #f43f5e;
}

body {
    font-family: sans-serif;
}
/* ... */
]]></b:skin>
```

**Σημαντικό:**
- Το CSS μπαίνει μέσα σε `<b:skin><![CDATA[ ... ]]></b:skin>`
- Δεν χρειάζεται `<style>` tag
- `<![CDATA[` για να αποφύγουμε XML parsing issues

---

## 📜 JavaScript Integration

**HTML (External JS):**
```html
<script src="js/main.js"></script>
```

**Blogger XML:**
```xml
<script>
<![CDATA[
// JavaScript code εδώ
(function() {
    'use strict';
    
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Loaded!');
    });
})();
]]>
</script>
```

**Σημαντικό:**
- Scripts μπαίνουν πριν το `</body>`
- Χρήση `<![CDATA[ ... ]]>` για να αποφύγουμε issues με `<`, `>`, `&`
- Όλο το JS inline (δεν υποστηρίζεται external file στο Blogger)

---

## 🔧 Common Patterns

### Pattern 1: Conditional Display

**HTML:**
```html
<div class="featured">
    <!-- Static content -->
</div>
```

**Blogger:**
```xml
<b:if cond='data:view.isHomepage'>
    <div class='featured'>
        <!-- Dynamic content -->
    </div>
</b:if>
```

### Pattern 2: Loop with Index

**Blogger:**
```xml
<b:loop index='i' values='data:posts' var='post'>
    <b:if cond='data:i == 0'>
        <!-- First post (featured) -->
    <b:else/>
        <!-- Regular post -->
    </b:if>
</b:loop>
```

### Pattern 3: Fallback Content

**Blogger:**
```xml
<b:if cond='data:post.featuredImage'>
    <img expr:src='data:post.featuredImage'/>
<b:else/>
    <img src='https://placehold.co/800x570'/>
</b:if>
```

### Pattern 4: Multiple Conditions

**Blogger:**
```xml
<b:if cond='data:view.isHomepage and data:posts'>
    <!-- Content -->
</b:if>

<b:if cond='data:post.labels and data:post.labels.size &gt; 0'>
    <!-- Labels exist -->
</b:if>
```

---

## 📌 Important Notes

### XML Escaping

```xml
<!-- Wrong -->
<b:if cond='data:count > 5'>

<!-- Right -->
<b:if cond='data:count &gt; 5'>

<!-- Wrong -->
if (x < 10 && y > 5)

<!-- Right -->
<![CDATA[
if (x < 10 && y > 5)
]]>
```

### Attribute Quotes

```xml
<!-- Static -->
<div class="container">

<!-- Dynamic -->
<a expr:href='data:post.url'>

<!-- Mixed -->
<div class="card" expr:id='"post-" + data:post.id'>
```

### Section Structure

```xml
<b:section id='UNIQUE_ID' maxwidgets='NUMBER'>
    <b:widget id='UNIQUE_ID' type='TYPE'>
        <b:includable id='main'>
            <!-- Widget content -->
        </b:includable>
    </b:widget>
</b:section>
```

---

## ✅ Checklist για Conversion

- [ ] Replace static URLs με `expr:href`
- [ ] Replace static images με `expr:src`
- [ ] Wrap repeating content σε `<b:loop>`
- [ ] Add conditionals για optional content
- [ ] Add fallbacks για missing data
- [ ] Escape XML special characters
- [ ] Wrap CSS σε `<b:skin><![CDATA[ ]]></b:skin>`
- [ ] Wrap JS σε `<![CDATA[ ]]>`
- [ ] Test όλα τα page types (home, post, label, search)

---

**Ready to convert?** Start με τα HTML components και follow αυτούς τους patterns! 🚀
