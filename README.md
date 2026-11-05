# VNP Flower Shop (React)

A multi-page React website (Vite + React Router) for a traditional flower shop.

## Run it

You need Node.js 18 or newer (https://nodejs.org).

```bash
npm install
npm run dev
```

Open the address shown in the terminal (usually http://localhost:5173).

## Build for hosting

```bash
npm run build
```

Upload the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, etc.).
The site uses hash routing (`/#/flowers`), so no server setup is needed.

## Edit your details

- `src/config.js`: shop name, phone, WhatsApp number, address, hours
- `src/data/products.js`: flowers, prices, occasions, wedding packages
- `src/styles.css`: colours are at the top in `:root`

## Pages

| Page      | File                    |
|-----------|-------------------------|
| Home      | `src/pages/Home.jsx`      |
| Flowers   | `src/pages/Flowers.jsx`   |
| Occasions | `src/pages/Occasions.jsx` |
| About     | `src/pages/About.jsx`     |
| Contact   | `src/pages/Contact.jsx`   |

## Images

The flower pictures are illustrations drawn in code (`src/components/Art.jsx`).
To use your own photos instead, put them in `src/assets/` and replace the
`<Art kind="..." />` in `ProductCard.jsx` with an `<img>` tag.
