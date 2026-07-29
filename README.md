# Cybersecurity Portfolio - Raviteja Alli

A modern, responsive portfolio website for cybersecurity professionals built with React, TypeScript, Tailwind CSS, Framer Motion, and Three.js.

## 🚀 Features

- **Cinematic Loading Screen** with animated letters and progress indicator
- **Three.js 3D Background** with particle effects and animated waves
- **Dark/Light Theme Toggle** with localStorage persistence
- **Responsive Design** optimized for mobile, tablet, and desktop
- **Advanced Animations** using Framer Motion
- **Interactive Skills Visualization** with radial progress indicators
- **Professional Timeline** for experience section
- **Contact Form** with validation and toast notifications
- **SEO Optimized** with proper meta tags and structured data

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Custom Design System
- **Animations**: Framer Motion, Three.js, React Three Fiber
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Notifications**: Sonner Toast

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cybersecurity-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Required Public Assets

Place these files in the `public/` folder:

- **Profile Image**: `image.jpeg` (512x512px recommended)
- **Resume**: `RESUME_RAVI_TEJA_ALLI.pdf`
- **Project Images**:
  - `project-zerotrust.jpg` (640x512px)
  - `project-threatdetection.jpg` (640x512px)
  - `project-dashboard.jpg` (640x512px)
  - `project-identity.jpg` (640x512px)
- **Favicon**: `favicon.ico`

## 🎨 Customization

### 1. Update Content
Edit `src/data/portfolioData.js` to customize:
- Personal information
- Professional summary
- Skills and technologies
- Work experience
- Projects
- Education
- Certifications
- Contact details

### 2. Modify Design System
Update colors and themes in:
- `src/index.css` - CSS variables and component styles
- `tailwind.config.ts` - Tailwind configuration

### 3. Add/Remove Sections
Modify `src/pages/Index.tsx` to add or remove sections.

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Manual Deployment
1. Build: `npm run build`
2. Upload `dist` folder contents to your web server

## 🔧 Environment Variables

No environment variables required for basic setup. For contact form backend, add:
- `VITE_API_ENDPOINT` - Your contact form API endpoint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 Performance Tips

- Images are lazy-loaded automatically
- Components use React.memo where appropriate
- Three.js animations respect `prefers-reduced-motion`
- Optimized bundle splitting with Vite

## 🔒 Security Features

- Content Security Policy ready
- No inline scripts
- Sanitized user inputs
- Secure external link handling

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, reach out via:
- Email: ravitejaalli55@gmail.com
- LinkedIn: [Raviteja Alli](https://www.linkedin.com/in/raviteja-alli)

---
