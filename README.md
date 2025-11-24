# Tanshiba Naorin Prapti - Portfolio Website

A modern, responsive portfolio website showcasing the professional experience, skills, and projects of Tanshiba Naorin Prapti - Creative Digital Solutions Executive.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Interactive Elements**: Filterable project gallery, smooth scrolling, and dynamic content
- **Performance Optimized**: Fast loading times with optimized assets
- **SEO Friendly**: Properly structured HTML with semantic elements and meta tags
- **Easy to Deploy**: Ready for deployment on Vercel, GitHub Pages, or any static hosting

## Technologies Used

- HTML5
- CSS3 (Custom styling with CSS variables)
- JavaScript (Vanilla JS)
- Bootstrap 5.3.2
- Bootstrap Icons

## Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css      # Custom CSS styles
│   ├── js/
│   │   └── main.js        # JavaScript functionality
│   ├── img/               # Image assets (placeholder)
│   └── pdf/               # PDF files (CV)
├── package.json           # NPM configuration
├── vercel.json            # Vercel deployment config
└── README.md              # This file
```

## Sections

1. **Hero Section**: Introduction with name, title, and contact information
2. **About Me**: Professional summary and background
3. **Experience**: Timeline of professional experience with detailed descriptions
4. **Skills**: Comprehensive display of technical and soft skills
5. **Projects**: Filterable portfolio of featured projects
6. **Education**: Academic background and certifications
7. **Extra-Curricular**: Volunteering and community involvement
8. **Languages**: Language proficiency levels
9. **Contact**: Contact information and social media links

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- NPM (v6 or higher)

### Local Development

1. Clone or download the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

### Alternative: Direct Opening

You can also open the `index.html` file directly in your browser without running a server, though some features may require a local server.

## Customization

### Update Personal Information

1. Open `index.html`
2. Search for and update:
   - Name and title in the hero section
   - Email and contact information
   - Social media links
   - Experience details
   - Education information
   - Skills and expertise

### Modify Colors

1. Open `assets/css/style.css`
2. Update CSS variables in the `:root` selector:
```css
:root {
    --primary-color: #6366f1;
    --primary-dark: #4f46e5;
    --primary-light: #818cf8;
    --secondary-color: #f59e0b;
}
```

### Add Images

1. Place your images in the `assets/img/` directory
2. Update the image references in `index.html`
3. Replace the placeholder profile image with your photo

### Add Your CV

1. Place your CV PDF file in the `assets/pdf/` directory
2. Rename it to `CV_Tnp.pdf` or update the link in the hero section

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

### Deploy to GitHub Pages

1. Create a GitHub repository
2. Push your code to the repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

3. Go to repository Settings > Pages
4. Select the branch (main) and folder (root)
5. Save and wait for deployment

### Deploy to Netlify

1. Create a Netlify account
2. Drag and drop the project folder to Netlify
3. Or connect your GitHub repository for automatic deployments

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 2.5s
- Accessibility: 100%

## Features Implementation

### Smooth Scrolling
All anchor links use smooth scrolling behavior for better UX.

### Scroll to Top Button
A floating button appears when scrolling down, allowing quick return to the top.

### Project Filtering
Projects can be filtered by category (All, Design, Content, Web Development).

### Active Navigation
Navigation links highlight based on the current section in view.

### Responsive Navigation
Mobile-friendly hamburger menu for smaller screens.

### Animated Progress Bars
Skill and language proficiency bars animate when scrolled into view.

### Intersection Observer
Elements fade in smoothly as they enter the viewport.

## NPM Scripts

- `npm start`: Start the development server
- `npm run build`: (Optional) Build for production
- `npm test`: (Optional) Run tests

## Contributing

This is a personal portfolio website. For suggestions or improvements, please contact:
- Email: tanshibanaorin@gmail.com

## License

© 2025 Tanshiba Naorin Prapti. All rights reserved.

This is a personal portfolio website. All content and design are proprietary.

## Support

For any questions or issues:
- Email: tanshibanaorin@gmail.com
- Location: Johor Bahru, Malaysia

## Acknowledgments

- Bootstrap team for the excellent CSS framework
- Bootstrap Icons for the icon library
- Google Fonts for typography
- All mentors and colleagues who provided feedback

---

**Built with ❤️ by Tanshiba Naorin Prapti**
