# Coming Soon Website

A beautiful, modern coming soon page with video background built with React.

## Features

- 🎥 Full-screen video background
- 📱 Fully responsive design
- ✨ Smooth animations and transitions
- 🎨 Modern UI with glassmorphism effects
- 🚀 Fast loading and optimized performance

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your video file:
   - Place your video file in the `public` folder
   - Rename it to `sample-video.mp4` or update the video source path in `src/App.js`
   - For best results, use MP4 format and keep file size under 50MB

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization

### Adding Your Video

Replace the video files in the `public` folder:
- `sample-video.mp4` (required)
- `sample-video.webm` (optional, for better browser support)

### Customizing Text

Edit the text in `src/App.js`:
```javascript
<h1 className="coming-soon-text">Coming Soon</h1>
<p className="subtitle">Something amazing is on the way</p>
```

### Customizing Links

Update the social links in `src/App.js`:
```javascript
<div className="social-links">
  <a href="https://your-social-media" className="social-link">Follow Us</a>
  <a href="mailto:your-email@example.com" className="social-link">Get Notified</a>
</div>
```

### Styling

Customize colors, fonts, and animations in `src/App.css`.

## Video Requirements

For optimal performance:
- **Format**: MP4 (H.264 codec recommended)
- **Resolution**: 1920x1080 or higher
- **Duration**: 10-30 seconds (loops automatically)
- **File Size**: Under 50MB for web performance
- **Aspect Ratio**: 16:9 works best

## Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## Deployment

You can deploy this to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Note

If you don't have a video file, you can download free stock videos from:
- [Pexels](https://www.pexels.com/videos/)
- [Pixabay](https://pixabay.com/videos/)
- [Videvo](https://www.videvo.net/)

Remember to check the license for commercial use if needed. 