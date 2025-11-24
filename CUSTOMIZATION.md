# Customization Guide

Complete guide to customize your portfolio website.

## Table of Contents
1. [Personal Information](#personal-information)
2. [Colors and Branding](#colors-and-branding)
3. [Content Updates](#content-updates)
4. [Adding Images](#adding-images)
5. [Social Media Links](#social-media-links)
6. [Projects Section](#projects-section)
7. [Skills and Expertise](#skills-and-expertise)
8. [Animations and Effects](#animations-and-effects)

---

## Personal Information

### Update Name and Title
**File:** `index.html`

**Line ~35-37:** Hero Section
```html
<h1 class="display-4 fw-bold mb-3">Your Name Here</h1>
<h2 class="h3 text-primary mb-3">Your Professional Title</h2>
```

### Update Contact Information
**File:** `index.html`

**Line ~38-42:** Location and Email
```html
<p class="lead mb-4">
    <i class="bi bi-geo-alt-fill text-primary"></i> Your City, Country
</p>
<p class="lead mb-4">
    <i class="bi bi-envelope-fill text-primary"></i> 
    <a href="mailto:your.email@example.com">your.email@example.com</a>
</p>
```

### Update Footer
**File:** `index.html`

**Line ~580:** Copyright Year and Name
```html
<p class="mb-2">&copy; <span id="currentYear"></span> Your Name. All rights reserved.</p>
```

---

## Colors and Branding

### Primary Color Scheme
**File:** `assets/css/style.css`

**Line 1-10:** CSS Variables
```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --primary-dark: #4f46e5;       /* Darker shade for hover */
    --primary-light: #818cf8;      /* Lighter shade for gradients */
    --secondary-color: #f59e0b;    /* Accent color */
}
```

**Popular Color Schemes:**

Professional Blue:
```css
--primary-color: #2563eb;
--primary-dark: #1e40af;
--primary-light: #3b82f6;
```

Creative Purple:
```css
--primary-color: #8b5cf6;
--primary-dark: #7c3aed;
--primary-light: #a78bfa;
```

Modern Green:
```css
--primary-color: #10b981;
--primary-dark: #059669;
--primary-light: #34d399;
```

---

## Content Updates

### About Me Section
**File:** `index.html`

**Line ~70-85:** Update your professional summary
```html
<p class="lead text-center mb-4">
    Your elevator pitch here...
</p>
<p>
    Your detailed professional background...
</p>
```

### Experience Section
**File:** `index.html`

**Line ~95-200:** Update each experience card

**Template:**
```html
<div class="timeline-item animate-slide-in">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <div class="experience-card">
            <div class="d-flex justify-content-between align-items-start mb-3">
                <div>
                    <h4 class="mb-1">Job Title</h4>
                    <h5 class="text-primary mb-2">Company Name</h5>
                </div>
                <span class="badge bg-primary">Start - End</span>
            </div>
            <ul class="experience-list">
                <li>Achievement or responsibility 1</li>
                <li>Achievement or responsibility 2</li>
            </ul>
        </div>
    </div>
</div>
```

### Education Section
**File:** `index.html`

**Line ~410-445:** Update degrees and certifications

---

## Adding Images

### Profile Photo

1. **Prepare Your Photo:**
   - Size: 500x500px (square)
   - Format: JPG or PNG
   - File size: < 200KB
   - Name it: `profile.jpg`

2. **Place in Folder:**
   ```
   assets/img/profile.jpg
   ```

3. **Update HTML:**
   **File:** `index.html` (Line ~55-60)
   
   Replace:
   ```html
   <div class="profile-placeholder">
       <i class="bi bi-person-circle"></i>
   </div>
   ```
   
   With:
   ```html
   <img src="assets/img/profile.jpg" alt="Your Name" 
        class="img-fluid rounded-circle shadow-lg" 
        style="max-width: 300px;">
   ```

### Project Images

1. **Prepare Images:**
   - Size: 1200x800px
   - Format: JPG or PNG
   - Optimize for web

2. **Update Project Cards:**
   **File:** `index.html` (Line ~320-410)
   
   Replace:
   ```html
   <div class="project-placeholder">
       <i class="bi bi-palette-fill"></i>
   </div>
   ```
   
   With:
   ```html
   <img src="assets/img/project1.jpg" alt="Project Name" 
        class="img-fluid">
   ```

---

## Social Media Links

### Update Links
**File:** `index.html`

**Line ~540-565:** Social Media Section
```html
<a href="https://linkedin.com/in/yourprofile" class="social-link">
    <i class="bi bi-linkedin"></i>
</a>
<a href="https://github.com/yourusername" class="social-link">
    <i class="bi bi-github"></i>
</a>
```

### Add More Social Icons

**Available Bootstrap Icons:**
- `bi-facebook`
- `bi-twitter-x` (Twitter/X)
- `bi-instagram`
- `bi-youtube`
- `bi-tiktok`
- `bi-pinterest`
- `bi-discord`
- `bi-telegram`

**Template:**
```html
<a href="YOUR_URL" class="social-link" aria-label="Platform Name">
    <i class="bi bi-icon-name"></i>
</a>
```

---

## Projects Section

### Add New Project

**File:** `index.html` (Line ~320-410)

**Template:**
```html
<div class="col-lg-4 col-md-6 project-item" data-category="design">
    <div class="project-card">
        <div class="project-image">
            <div class="project-placeholder">
                <i class="bi bi-palette-fill"></i>
            </div>
            <div class="project-overlay">
                <a href="project-link.html" class="btn btn-light btn-sm">View Details</a>
            </div>
        </div>
        <div class="project-info">
            <h4>Project Title</h4>
            <p>Project description goes here...</p>
            <div class="project-tags">
                <span class="tag">Tag 1</span>
                <span class="tag">Tag 2</span>
            </div>
        </div>
    </div>
</div>
```

### Filter Categories

Update `data-category` attribute:
- `design` - Design projects
- `content` - Content creation
- `web` - Web development

---

## Skills and Expertise

### Update Skills
**File:** `index.html` (Line ~210-290)

**To Add Skill Badge:**
```html
<span class="skill-badge">New Skill Name</span>
```

### Update Progress Bars
**File:** `index.html` (Line ~293-318)

**Template:**
```html
<div class="skill-bar-item">
    <div class="d-flex justify-content-between mb-2">
        <span>Skill Name</span>
        <span>85%</span>
    </div>
    <div class="progress">
        <div class="progress-bar" style="width: 85%"></div>
    </div>
</div>
```

### Add New Skill Category

**Template:**
```html
<div class="col-lg-4 col-md-6">
    <div class="skill-category">
        <div class="skill-icon">
            <i class="bi bi-icon-name"></i>
        </div>
        <h4>Category Name</h4>
        <div class="skill-items">
            <span class="skill-badge">Skill 1</span>
            <span class="skill-badge">Skill 2</span>
        </div>
    </div>
</div>
```

---

## Animations and Effects

### Disable Animations
**File:** `assets/css/style.css`

Comment out animation classes:
```css
/*
.animate-fade-in {
    animation: fadeIn 1s ease-in;
}
*/
```

### Adjust Animation Speed
**File:** `assets/css/style.css`

Modify transition durations:
```css
:root {
    --transition: all 0.3s ease;  /* Change 0.3s to desired duration */
}
```

### Change Hover Effects
**File:** `assets/css/style.css`

Example - Modify button hover:
```css
.btn-primary:hover {
    transform: translateY(-5px);  /* Adjust lift height */
    box-shadow: var(--shadow-lg);
}
```

---

## Advanced Customization

### Add Google Fonts

1. **Choose Font:** fonts.google.com

2. **Add to HTML:** `index.html` (in `<head>`)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
```

3. **Update CSS:** `assets/css/style.css`
```css
body {
    font-family: 'Poppins', sans-serif;
}
```

### Add Custom Background

**File:** `assets/css/style.css`

```css
.hero-section {
    background-image: url('../img/background.jpg');
    background-size: cover;
    background-position: center;
}
```

### Add Particles Effect

Add before closing `</body>` in `index.html`:
```html
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script>
    particlesJS("particles-js", {
        "particles": {
            "number": {"value": 80},
            "color": {"value": "#6366f1"},
            "shape": {"type": "circle"}
        }
    });
</script>
```

---

## Testing Your Changes

After making changes:

1. **Save All Files**
2. **Refresh Browser** (Ctrl/Cmd + Shift + R for hard refresh)
3. **Test on Mobile** (Browser DevTools > Device Mode)
4. **Check Console** (F12 > Console for errors)
5. **Validate HTML** (validator.w3.org)

---

## Tips for Maintenance

- **Backup Regularly:** Keep copies before major changes
- **Test Locally:** Use `npm start` before deploying
- **Version Control:** Use Git to track changes
- **Update Gradually:** Make small changes and test
- **Mobile First:** Always check mobile view
- **Performance:** Keep images optimized
- **Browser Test:** Check Chrome, Firefox, Safari
- **Accessibility:** Ensure good contrast ratios

---

## Need Help?

- Bootstrap Docs: getbootstrap.com/docs
- Bootstrap Icons: icons.getbootstrap.com
- CSS Tricks: css-tricks.com
- MDN Web Docs: developer.mozilla.org

**Happy Customizing!** 🎨
