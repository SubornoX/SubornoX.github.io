# Portfolio Website Customization & Publishing Guide

## Table of Contents
1. [Website Overview](#website-overview)
2. [How to Customize Your Portfolio](#how-to-customize-your-portfolio)
3. [Step-by-Step Publishing Guide](#step-by-step-publishing-guide)
4. [Adding Your Own Projects](#adding-your-own-projects)
5. [Updating Skills and Experience](#updating-skills-and-experience)
6. [Customizing Design and Colors](#customizing-design-and-colors)
7. [Domain Setup and Custom URLs](#domain-setup-and-custom-urls)
8. [Maintenance and Updates](#maintenance-and-updates)
9. [Troubleshooting](#troubleshooting)

---

## Website Overview

Your portfolio website has been created with a modern, professional design inspired by cutting-edge technology companies. It includes:

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth scrolling, animations, and dynamic content
- **Professional Sections**: Hero, About, Skills, Projects, Experience, and Contact
- **Modern Styling**: Dark theme with electric blue and green accents
- **SEO Optimized**: Proper meta tags and structure for search engines

---

## How to Customize Your Portfolio

### 1. Personal Information
Edit the following files to update your personal details:

**In `index.html`:**
- Find the hero section and update:
  - Your name
  - Professional title
  - Email address
  - Phone number
  - Location

**In `app.js`:**
- Update the personal information object at the top of the file

### 2. Profile Photo
To add your professional photo:
1. Save your photo as `profile.jpg` in the same folder as your website files
2. Ensure the photo is square (e.g., 400x400 pixels) for best results
3. The website will automatically display it in the About section

### 3. Resume/CV
To add your resume:
1. Save your resume as `resume.pdf`
2. The download button will automatically link to this file

---

## Step-by-Step Publishing Guide

### Method 1: GitHub Pages (Recommended for Beginners)

**Step 1: Create a GitHub Account**
1. Go to [github.com](https://github.com)
2. Click "Sign up" and create a free account
3. Verify your email address

**Step 2: Create a Repository**
1. Click the "+" icon in the top right corner
2. Select "New repository"
3. Name it: `your-username.github.io` (replace "your-username" with your GitHub username)
4. Make sure it's set to "Public"
5. Check "Add a README file"
6. Click "Create repository"

**Step 3: Upload Your Website Files**
1. Click "uploading an existing file"
2. Drag and drop all your website files (index.html, style.css, app.js, etc.)
3. Add a commit message: "Initial portfolio upload"
4. Click "Commit changes"

**Step 4: Enable GitHub Pages**
1. Go to your repository settings
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"

**Step 5: Access Your Website**
- Your website will be available at: `https://your-username.github.io`
- It may take a few minutes to become active

### Method 2: Netlify (Alternative Option)

**Step 1: Sign Up for Netlify**
1. Go to [netlify.com](https://netlify.com)
2. Sign up for a free account

**Step 2: Deploy Your Site**
1. Click "Add new site" → "Deploy manually"
2. Drag and drop your website folder (containing all files)
3. Your site will be deployed with a random URL

**Step 3: Customize Your URL**
1. Go to Site settings → Domain management
2. Click "Change site name"
3. Choose a custom name: `mahamudul-portfolio.netlify.app`

### Method 3: Vercel

**Step 1: Sign Up for Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub for easier integration

**Step 2: Deploy**
1. Click "New Project"
2. Import your GitHub repository
3. Click "Deploy"
4. Your site will be live instantly

---

## Adding Your Own Projects

### 1. Update the Projects Data
In `app.js`, find the `projects` array and modify it:

```javascript
const projects = [
    {
        title: "Your Project Name",
        description: "Brief description of what the project does and its purpose",
        technologies: ["Arduino", "C++", "Sensors", "IoT"],
        category: "Embedded Systems",
        link: "https://github.com/your-username/project-repo" // Optional
    },
    // Add more projects here
];
```

### 2. Project Categories
Use these categories for consistency:
- **Embedded Systems**: Microcontroller-based projects
- **IoT**: Internet of Things applications
- **Electronics**: Circuit design and hardware projects
- **Programming**: Software development projects
- **Automation**: Control systems and robotics

### 3. Adding Project Images
1. Create a folder called `images` in your website directory
2. Add project screenshots named: `project1.jpg`, `project2.jpg`, etc.
3. Update the image references in the HTML

---

## Updating Skills and Experience

### 1. Skills Section
In `app.js`, update the `skills` array:

```javascript
const skills = [
    { name: "Skill Name", level: 85 }, // Level is 0-100
    { name: "Another Skill", level: 70 },
    // Add more skills
];
```

**Skill Level Guidelines:**
- 90-100: Expert level
- 80-89: Advanced
- 70-79: Intermediate
- 60-69: Basic knowledge
- 50-59: Learning

### 2. Experience Section
Update your work experience and education:

```javascript
const experience = [
    {
        title: "Your Job Title",
        company: "Company Name",
        duration: "Jan 2023 - Present",
        description: "Brief description of your role and achievements"
    },
    // Add more experiences
];
```

---

## Customizing Design and Colors

### 1. Color Scheme
In `style.css`, find the `:root` section to change colors:

```css
:root {
    --primary-color: #00d4ff;    /* Electric blue */
    --secondary-color: #00ff88;   /* Bright green */
    --background-color: #0a0a0a;  /* Dark background */
    --text-color: #ffffff;        /* White text */
}
```

### 2. Typography
To change fonts, update the Google Fonts link in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your-Font:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### 3. Layout Adjustments
- Modify spacing in the CSS file
- Adjust section heights and padding
- Change animation timings and effects

---

## Domain Setup and Custom URLs

### 1. Buying a Custom Domain
1. Choose a domain registrar (Namecheap, GoDaddy, Google Domains)
2. Search for available domains (e.g., `mahamudulsuborno.com`)
3. Purchase your preferred domain

### 2. Connecting Your Domain

**For GitHub Pages:**
1. In your repository settings → Pages
2. Add your custom domain in the "Custom domain" field
3. Create a CNAME file in your repository with your domain name

**For Netlify:**
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

**For Vercel:**
1. Go to your project settings → Domains
2. Add your custom domain
3. Update your DNS settings as instructed

---

## Maintenance and Updates

### 1. Regular Updates
- Add new projects as you complete them
- Update your skills as you learn new technologies
- Refresh your experience section with new roles or achievements
- Update your contact information if it changes

### 2. Content Guidelines
- Keep project descriptions concise but informative
- Use action verbs to describe your achievements
- Include relevant keywords for SEO
- Maintain consistent formatting and style

### 3. Performance Optimization
- Optimize images (compress and resize)
- Keep file sizes reasonable
- Test loading speed regularly
- Ensure mobile responsiveness

---

## Troubleshooting

### Common Issues and Solutions

**1. Website Not Loading**
- Check that all files are uploaded correctly
- Ensure `index.html` is in the root directory
- Verify that your hosting service is active

**2. Images Not Displaying**
- Check file paths in HTML
- Ensure image files are uploaded
- Verify image file names match references

**3. Animations Not Working**
- Check JavaScript console for errors
- Ensure `app.js` is linked correctly
- Verify CSS animations are properly defined

**4. Mobile Display Issues**
- Test on multiple devices and browsers
- Check CSS media queries
- Ensure viewport meta tag is present

**5. Contact Form Not Working**
- The basic form needs a backend service
- Consider using Netlify Forms or Formspree for functionality
- Add form validation for better user experience

### Getting Help

**Online Resources:**
- GitHub Pages Documentation: [pages.github.com](https://pages.github.com)
- Netlify Documentation: [docs.netlify.com](https://docs.netlify.com)
- Web Development Communities: Stack Overflow, Reddit r/webdev
- CSS and JavaScript References: MDN Web Docs

**Best Practices:**
- Always backup your files before making changes
- Test changes locally before uploading
- Keep your code clean and well-commented
- Regular updates keep your portfolio fresh and relevant

---

## Next Steps

1. **Customize** the website with your personal information
2. **Add** your own projects and experiences
3. **Upload** your professional photo and resume
4. **Choose** a hosting platform and deploy
5. **Test** thoroughly on different devices
6. **Share** your portfolio URL with potential employers
7. **Maintain** and update regularly

Your portfolio is now ready to showcase your skills and help you land your dream job in electrical engineering and embedded systems!

---

*Good luck with your career journey, Mahamudul! Remember to keep learning, building, and showcasing your growth in the exciting field of embedded systems.*