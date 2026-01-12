# Futuristic Analytics Dashboard

A modern, tech-inspired analytics dashboard built with cutting-edge technologies and featuring smooth scrolling animations, real-time data visualization, and a stunning cyberpunk aesthetic.

![Dashboard Preview](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

## Features

- **Smooth Scrolling Experience** - Buttery smooth animations powered by Framer Motion
- **Real-time Analytics** - Interactive charts and graphs using Recharts
- **Responsive Design** - Works perfectly on all devices
- **Futuristic UI** - Cyberpunk-inspired design with glowing effects
- **Performance Optimized** - Built with Next.js 15 App Router for optimal performance
- **Type-Safe** - Fully typed with TypeScript
- **Modern Tech Stack** - Leveraging the latest web technologies

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/dashboard-new-aj.git
cd dashboard-new-aj
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment on Vercel

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/dashboard-new-aj)

## Project Structure

```
dashboard-new-aj/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── StatsCard.tsx
│   ├── RevenueChart.tsx
│   ├── PerformanceChart.tsx
│   ├── ActivityFeed.tsx
│   └── MetricsCircle.tsx
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Features Breakdown

### 🎨 Design
- Glassmorphism effects
- Gradient backgrounds
- Custom scrollbar
- Grid overlay pattern
- Glow effects and animations

### 📊 Analytics Components
- Revenue overview chart (Area chart)
- System performance metrics (Bar chart)
- Server status distribution (Pie chart)
- Real-time activity feed
- Key performance indicators (KPI cards)

### ⚡ Animations
- Smooth page transitions
- Hover effects on cards
- Floating particles background
- Entrance animations for all components
- Interactive chart tooltips

## Customization

### Colors
Edit the color scheme in [tailwind.config.ts](tailwind.config.ts):
```typescript
cyber: {
  blue: "#00f0ff",
  purple: "#9d4edd",
  pink: "#ff006e",
  green: "#00ff94",
}
```

### Charts Data
Modify chart data directly in component files:
- [RevenueChart.tsx](components/RevenueChart.tsx)
- [PerformanceChart.tsx](components/PerformanceChart.tsx)
- [MetricsCircle.tsx](components/MetricsCircle.tsx)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

- Design inspiration from modern cyberpunk aesthetics
- Built with love using the latest web technologies

---

Made with ⚡ by [Your Name]
