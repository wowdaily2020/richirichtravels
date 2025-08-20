# Richirich Travels – Website

A lightweight React (Vite) site with Tailwind via CDN, React Router, a Netlify-ready booking form, and placeholder media.

## Local Development
```bash
npm install
npm run dev
```

## Build & Deploy on Netlify
1. **Push to GitHub** (create a repository and upload these files).
2. On Netlify:
   - New Site from Git → connect your repo.
   - Build command: `npm run build`
   - Publish directory: `dist`
3. To enable the contact/booking form:
   - Netlify auto-detects forms with `data-netlify="true"`.
   - Submit once in production to see entries in Netlify → Forms.

## Customization
- Replace `public/logo.png` with your logo (already added from your upload).
- Update contact number/email in `src/App.jsx` footer and `src/pages/Contact.jsx`.
- Replace placeholder images in `Home` and `Gallery` with your own (hosted or in `/public`).
- Update tours and fleet details in `src/pages/Tours.jsx` and `src/pages/Fleet.jsx`.
- SEO: Edit `<title>` and `<meta name="description">` in `index.html`.

## Optional: Netlify Settings
A basic `netlify.toml` is included for SPA fallback routing.
