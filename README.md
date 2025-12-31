# Yoga Studio Website

A modern, responsive yoga studio website built with React.js and Tailwind CSS.

## Features

- 🧘 Beautiful, modern UI with custom color palette (Teal, Stone, Sage)
- 📱 Fully responsive design
- 🎨 Atomic component architecture
- 🚀 Fast and optimized with Vite
- 🧭 React Router for navigation
- 🎯 Reusable UI components

## Project Structure

```
yoga-website/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and icons
│   ├── components/     # Reusable UI components
│   │   ├── ui/         # Atomic components (Button, Card)
│   │   └── layout/     # Layout components (Navbar, Footer)
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── sections/       # Large page sections
│   ├── services/       # API services
│   ├── styles/         # Global styles and Tailwind
│   ├── App.jsx         # Main app with routing
│   └── main.jsx        # Entry point
├── tailwind.config.js  # Tailwind configuration
└── package.json
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Colors

The color palette is defined in `tailwind.config.js`:
- **Teal**: Primary brand color
- **Stone**: Neutral tones
- **Sage**: Secondary accent color

### Adding New Components

1. UI components go in `src/components/ui/`
2. Layout components go in `src/components/layout/`
3. Page sections go in `src/sections/`
4. Full pages go in `src/pages/`

## Technologies

- React 18
- React Router DOM
- Tailwind CSS
- Vite

## License

MIT

