# Quick Start Guide

Get your futuristic analytics dashboard up and running in minutes!

## 🚀 Installation

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the magic! ✨

## 📦 What You Get

Your dashboard includes:

- ✅ 6 Animated stat cards with real-time metrics
- ✅ Revenue overview chart (area chart)
- ✅ System performance metrics (bar chart)
- ✅ Real-time activity feed
- ✅ Server status distribution (pie chart)
- ✅ Smooth scrolling and animations
- ✅ Responsive design for all devices
- ✅ Futuristic cyberpunk theme

## 🎨 Customization

### Change Colors

Edit [tailwind.config.ts](tailwind.config.ts):

```typescript
cyber: {
  blue: "#00f0ff",    // Change to your brand color
  purple: "#9d4edd",
  pink: "#ff006e",
  green: "#00ff94",
}
```

### Update Stats Data

Edit [app/page.tsx](app/page.tsx) to change the values:

```typescript
<StatsCard
  title="Your Metric"
  value="$123,456"
  change="+15.3%"
  trend="up"
  icon={YourIcon}
/>
```

### Modify Charts

Update chart data in component files:
- [components/RevenueChart.tsx](components/RevenueChart.tsx)
- [components/PerformanceChart.tsx](components/PerformanceChart.tsx)
- [components/MetricsCircle.tsx](components/MetricsCircle.tsx)

## 🌐 Deploy to Vercel

### Option 1: GitHub + Vercel (Easiest)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Done! Your dashboard is live! 🎉

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 🔧 Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📱 Features Overview

### Header
- Search functionality
- Notification bell
- Settings icon
- User profile

### Stats Cards
- Hover animations
- Trend indicators
- Gradient effects
- Icon badges

### Charts
- Interactive tooltips
- Smooth animations
- Responsive sizing
- Custom colors

### Activity Feed
- Real-time events
- Icon-based categories
- Smooth scrolling
- Timestamp display

## 🎯 Next Steps

1. **Connect Real Data**: Replace mock data with your API
2. **Add Authentication**: Implement user login
3. **Customize Branding**: Change colors, logo, and text
4. **Add More Charts**: Extend with additional visualizations
5. **Enable PWA**: Add service worker for offline support

## 📚 Documentation

- [Full README](README.md) - Complete project documentation
- [Deployment Guide](DEPLOYMENT.md) - Detailed Vercel setup
- [Project Overview](PROJECT_OVERVIEW.md) - Technical details

## 🆘 Troubleshooting

### Dev server won't start
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Build errors
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port 3000 in use
```bash
# Use different port
npm run dev -- -p 3001
```

## 💡 Tips

- Use [http://localhost:3000](http://localhost:3000) for development
- Changes are reflected instantly (hot reload)
- Check browser console for any errors
- Use React DevTools for debugging

## 🎨 Keyboard Shortcuts (VSCode)

- `Ctrl/Cmd + P` - Quick file open
- `Ctrl/Cmd + Shift + F` - Search across files
- `Alt + Up/Down` - Move line up/down
- `Ctrl/Cmd + D` - Select next occurrence

---

Happy coding! 🚀✨

Need help? Check out the [full README](README.md) or open an issue on GitHub.
