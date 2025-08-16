# Fin Tax Solutions - Professional Financial Services Website

A modern, responsive website for Fin Tax Solutions built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Optimized**: Structured for search engine visibility
- **Professional Services Showcase**: Complete display of financial services
- **Contact Forms**: Easy client consultation scheduling
- **Brand Focused**: Prominent brand highlighting throughout

## 🛠️ Technologies Used

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Forms**: React Hook Form
- **Animations**: Tailwind CSS Animate

## 📦 Installation & Development

```bash
# Clone the repository
git clone <repository-url>
cd "fin tax solutions"

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Deploy to Render

1. **Connect your GitHub repository** to Render
2. **Create a new Web Service** on Render
3. **Use these settings**:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run preview`
   - **Environment**: Node
   - **Node Version**: 18.17.0

4. **The `render.yaml` file** is already configured for automatic deployment

### Deploy with Docker

```bash
# Build the Docker image
docker build -t fin-tax-solutions .

# Run the container
docker run -p 3000:3000 fin-tax-solutions
```

### Environment Variables (if needed)

```env
# Add any environment variables in Render dashboard
NODE_ENV=production
PORT=10000
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services showcase
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── pages/              # Page components
├── lib/                # Utilities
└── assets/             # Images and static files
```

## 🎨 Key Components

- **Hero Section**: Brand introduction with animated elements
- **Services Grid**: Comprehensive financial services display
- **Stats Section**: Animated counters showing company achievements
- **Why Choose Us**: Feature highlights with icons
- **Contact Form**: Professional consultation scheduling
- **Responsive Header**: Smooth navigation with scroll effects

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Friendly**: Perfect layout for tablets
- **Desktop Enhanced**: Full-featured desktop experience
- **Touch Optimized**: Great touch interactions on all devices

## 🎯 SEO & Performance

- **Fast Loading**: Optimized bundle size with code splitting
- **SEO Ready**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant design
- **Modern Browser Support**: Works on all modern browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

**Fin Tax Solutions**
- Website: [Your deployed URL]
- Email: contact@fintaxsolutions.com
- Phone: +91 98765 43210

---

Built with ❤️ for professional financial services
