# Freelance Portfolio Website

A modern, fully responsive freelance portfolio website built with React, Tailwind CSS, and Framer Motion. This portfolio is designed to attract freelance clients and showcase your projects in a professional, high-converting manner.

## Features

- **Modern Design**: Clean, premium SaaS-style UI with generous spacing and large typography
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **Responsive**: Fully responsive design that works on all devices
- **Project Showcase**: Dynamic project filtering by category
- **Smooth Animations**: Subtle Framer Motion animations for enhanced user experience
- **Static Data**: All content stored in JSON files (no backend required)
- **SEO-Friendly**: Clean structure optimized for search engines
- **Contact Form**: Integrated with Formspree/EmailJS for easy client contact

## Pages

1. **Home** - Hero section with CTAs and statistics
2. **Work** - Project grid with category filtering
3. **Project Details** - Individual project case studies
4. **About** - Professional introduction and skills showcase
5. **Contact** - Contact form and social links

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization Guide

### 1. Update Your Information

#### Social Links
Edit `src/data/socialLinks.json`:
```json
{
  "name": "GitHub",
  "url": "https://github.com/YOUR_USERNAME",
  "icon": "FaGithub"
}
```

#### Projects
Edit `src/data/projects.json` to add your own projects. Each project should include:
- id (unique identifier)
- title
- category
- description
- image (use Pexels URLs or your own)
- tech (array of technologies)
- liveUrl
- overview, problem, solution, result

#### Skills
Edit `src/data/skills.json` to list your skills by category.

### 2. Contact Form Setup

The contact form uses Formspree. To set it up:

1. Go to [Formspree](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Copy your form ID
5. Update `src/pages/Contact.jsx`:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

Alternatively, you can use [EmailJS](https://www.emailjs.com/) or another email service.

### 3. Add Your Resume

Place your resume PDF file in the `public` directory as `resume.pdf`. The download link in the footer will automatically work.

### 4. Update Personal Information

Search for and replace these placeholders throughout the codebase:
- `your.email@example.com`
- `yourusername` (GitHub, LinkedIn, Twitter)
- Portfolio title and descriptions
- About page content

### 5. Customize Colors

The site uses blue as the primary color. To change it:

1. Open `tailwind.config.js`
2. Add custom colors in the theme.extend section:
   ```javascript
   colors: {
     primary: {
       50: '#your-color',
       // ... add all shades
     }
   }
   ```
3. Replace `blue-600`, `blue-400`, etc. throughout components

### 6. Add Your Project Images

Replace the Pexels URLs in `projects.json` with:
- Your own project screenshots
- Images hosted on a CDN
- Stock photos from [Pexels](https://www.pexels.com/) or [Unsplash](https://unsplash.com/)

## Tech Stack

- **React** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Vite** - Build tool

## Project Structure

```
src/
├── components/         # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   └── ProjectCard.jsx
├── pages/             # Page components
│   ├── Home.jsx
│   ├── Work.jsx
│   ├── ProjectDetails.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── context/           # React context
│   └── ThemeContext.jsx
├── data/              # JSON data files
│   ├── projects.json
│   ├── skills.json
│   └── socialLinks.json
├── App.jsx            # Main app component
└── index.css          # Global styles
```

## Deployment

This is a static site that can be deployed to:
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for deployment
- **Cloudflare Pages**: Connect your repository

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import your repository
4. Vercel will automatically detect Vite settings
5. Deploy!

### Deploy to Netlify

1. Run `npm run build`
2. Go to [Netlify](https://www.netlify.com/)
3. Drag and drop the `dist` folder
4. Your site is live!

## Tips for Success

1. **Update Projects Regularly**: Keep your portfolio fresh with new projects
2. **Use High-Quality Images**: Professional screenshots make a big difference
3. **Write Result-Focused Descriptions**: Focus on the impact of your work
4. **Optimize Images**: Compress images before uploading for better performance
5. **Test on Multiple Devices**: Ensure responsive design works everywhere
6. **SEO**: Add meta tags in `index.html` for better search visibility

## Support

For issues or questions:
- Check the [React documentation](https://react.dev/)
- Check the [Tailwind CSS documentation](https://tailwindcss.com/)
- Check the [Framer Motion documentation](https://www.framer.com/motion/)

## License

This project is open source and available for personal and commercial use.

---

Built with ❤️ for freelancers and developers
