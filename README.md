# 🧑‍💻 Personal Portfolio

Welcome to my **personal portfolio** website! 🎉  
Built with **React + Vite**, this site showcases my projects, skills, experience, and passion for building cool and meaningful tech. Deployed live on **GitHub Pages**.

🔗 Live Demo: [https://buildwithdivyanshu.co.in](https://buildwithdivyanshu.co.in])

---

## 🚀 Tech Stack

- ⚡ [Vite](https://vitejs.dev/) — Super fast build tool
- ⚛️ [React](https://reactjs.org/) — Frontend framework
- 💄 Tailwind CSS — Styling
- 🎨 Three.js — 3D fireflies animation
- 🧩 GitHub Pages — Deployment

---

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/endurance21/personal_portfolio.git
cd personal_portfolio
```

2. Install dependencies:
```bash
npm install
```

---

## 🧪 Testing Locally

### Development Mode
Run the development server:
```bash
npm run dev
```
The site will be available at `http://localhost:8080`

### Production Preview
Build and preview the production version locally:
```bash
npm run build
npm run preview
```
The preview server will start at `http://localhost:4173` (or next available port)

**What to test:**
- ✅ All pages load correctly
- ✅ Images and assets display properly
- ✅ Navigation works (Projects, Testimonials, etc.)
- ✅ Animations work smoothly (fireflies, neon border)
- ✅ Responsive design on mobile/tablet
- ✅ No console errors
- ✅ All links work correctly

---

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Build the project:**
```bash
npm run build
```
This creates an optimized production build in the `dist` folder.

2. **Deploy to GitHub Pages:**
```bash
npm run deploy
```
This command will:
- Automatically build the project (`predeploy` script)
- Deploy the `dist` folder to the `gh-pages` branch using `gh-pages`

3. **Wait for GitHub Pages to update:**
- GitHub Pages typically updates within 1-2 minutes
- Visit your site at `buildwithdivyanshu.co.in` to verify

### Manual Deployment Steps

If you need to deploy manually:

1. Build the project:
```bash
npm run build
```

2. Commit and push changes:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

3. Deploy to gh-pages:
```bash
npm run deploy
```

---

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Build and deploy to GitHub Pages

---

## 🔧 Configuration

### Custom Domain
The custom domain `buildwithdivyanshu.co.in` is configured via:
- `public/CNAME` file (automatically copied to `dist` during build)
- GitHub Pages settings should point to your custom domain

### Base Path
The site is configured for root domain deployment (`/`) in:
- `vite.config.ts` - `base: "/"`
- `src/App.tsx` - No basename in BrowserRouter

---

## 🐛 Troubleshooting

### Images not loading
- Check that image paths use `/` instead of `/personal_portfolio/`
- Ensure images are in the `public/` folder

### Build errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run lint`

### Deployment issues
- Ensure `.nojekyll` file exists in `public/` folder
- Verify `CNAME` file is present
- Check GitHub Pages settings in repository settings

---

## 📄 License

This project is open source and available under the MIT License.

