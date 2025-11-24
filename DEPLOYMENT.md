# Deployment Guide

Complete guide to deploy your portfolio website to various hosting platforms.

## Prerequisites

- Git installed on your computer
- Node.js and npm installed
- GitHub account (for most deployment options)

## Option 1: Vercel (Recommended)

### Why Vercel?
- Free hosting for static sites
- Automatic HTTPS
- Lightning-fast CDN
- Easy custom domain setup
- Automatic deployments from Git

### Deploy Steps

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel
```

4. **Follow the prompts:**
   - Set up and deploy? Y
   - Which scope? Select your account
   - Link to existing project? N
   - Project name? (press Enter for default)
   - In which directory? ./ (press Enter)
   - Want to override settings? N

5. **Production Deploy**
```bash
vercel --prod
```

Your site is now live! 🎉

### Custom Domain on Vercel
1. Go to vercel.com dashboard
2. Select your project
3. Go to Settings > Domains
4. Add your custom domain
5. Update DNS settings as instructed

## Option 2: GitHub Pages

### Deploy Steps

1. **Initialize Git Repository**
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

2. **Create GitHub Repository**
   - Go to github.com
   - Click "New repository"
   - Name it (e.g., `portfolio` or `your-username.github.io`)
   - Don't initialize with README

3. **Push to GitHub**
```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
   - Save

5. **Access Your Site**
   - URL: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
   - Or `https://YOUR-USERNAME.github.io/` if repo name is `your-username.github.io`

### Custom Domain on GitHub Pages
1. In repository Settings > Pages
2. Add your custom domain
3. Update DNS with CNAME record pointing to `your-username.github.io`

## Option 3: Netlify

### Method A: Drag & Drop

1. Visit netlify.com
2. Sign up or log in
3. Drag and drop your project folder
4. Site is live instantly!

### Method B: Git Integration

1. Push code to GitHub (see GitHub steps above)
2. Visit netlify.com
3. Click "New site from Git"
4. Choose GitHub
5. Select your repository
6. Build settings:
   - Build command: (leave empty)
   - Publish directory: ./ or (leave empty)
7. Deploy site

### Custom Domain on Netlify
1. Go to Site settings > Domain management
2. Add custom domain
3. Update DNS settings as instructed

## Option 4: Firebase Hosting

### Deploy Steps

1. **Install Firebase CLI**
```bash
npm install -g firebase-tools
```

2. **Login to Firebase**
```bash
firebase login
```

3. **Initialize Firebase**
```bash
firebase init hosting
```

4. **Configure:**
   - Use existing project or create new
   - Public directory: . (current directory)
   - Single-page app: N
   - Automatic builds with GitHub: N
   - Don't overwrite index.html

5. **Deploy**
```bash
firebase deploy
```

## Option 5: Cloudflare Pages

1. Push code to GitHub
2. Visit pages.cloudflare.com
3. Connect GitHub account
4. Select repository
5. Build settings:
   - Framework preset: None
   - Build command: (leave empty)
   - Build output directory: /
6. Save and deploy

## Post-Deployment Checklist

After deploying to any platform:

✅ Test all navigation links
✅ Verify CV download works
✅ Check mobile responsiveness
✅ Test all interactive features
✅ Verify social media links
✅ Check page load speed
✅ Test on multiple browsers
✅ Set up custom domain (optional)
✅ Enable HTTPS (usually automatic)
✅ Submit to search engines

## Update Your Live Site

### For Vercel
```bash
git add .
git commit -m "Update content"
git push
```
Or simply run `vercel --prod` again

### For GitHub Pages
```bash
git add .
git commit -m "Update content"
git push
```
Changes deploy automatically

### For Netlify
```bash
git add .
git commit -m "Update content"
git push
```
Auto-deploys from Git

## Custom Domain Setup

### DNS Configuration

Add these records to your domain DNS:

**For Apex Domain (example.com):**
```
Type: A
Name: @
Value: [Platform's IP address]
```

**For Subdomain (www.example.com):**
```
Type: CNAME
Name: www
Value: [Platform's domain]
```

### SSL Certificate

Most platforms provide free SSL automatically. If not:
- Use Let's Encrypt (free)
- Enable in platform settings

## Performance Optimization

After deployment:

1. **Enable Compression**
   - Usually automatic on modern platforms

2. **Use CDN**
   - Vercel, Netlify, Cloudflare provide this automatically

3. **Cache Static Assets**
   - Configured via platform settings

4. **Monitor Performance**
   - Use Google PageSpeed Insights
   - Aim for 90+ score

## Troubleshooting

### Site Not Loading
- Check DNS propagation (can take 24-48 hours)
- Verify build succeeded in platform dashboard
- Check for console errors in browser

### Broken Links
- Ensure all paths are relative
- Check file names and extensions
- Verify all assets are committed to Git

### Styling Issues
- Clear browser cache
- Check CSS file paths
- Verify Bootstrap CDN is accessible

## Getting Help

- **Vercel**: vercel.com/support
- **GitHub Pages**: docs.github.com/pages
- **Netlify**: docs.netlify.com
- **Firebase**: firebase.google.com/support

## Recommended: Continuous Deployment

Set up automatic deployments:

1. Connect Git repository to hosting platform
2. Every push to main branch auto-deploys
3. Preview deployments for pull requests
4. Rollback to previous versions if needed

**Your portfolio is production-ready!** 🚀
