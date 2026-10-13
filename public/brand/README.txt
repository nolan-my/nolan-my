NOLAN — BLACK & WHITE BRAND ASSETS

LOGOS
nolan-light.png / .svg: black lettering (#000000) on white (#ffffff).
nolan-dark.png / .svg: white lettering (#ffffff) on black (#000000).
nolan-black-transparent.png / .svg: black lettering with genuine transparency.
nolan-white-transparent.png / .svg: white lettering with genuine transparency.

All logo canvases are square. PNGs are 2048 x 2048 pixels; SVGs are outlined
vectors that scale without requiring an installed font. The transparent
versions preserve the same placement and padding as the solid versions.

The lettering comes from the website's local Manrope variable font at
weight 800 (ExtraBold), with -0.035em tracking. The visible wordmark occupies
70% of the square's width and is centred in the canvas.

WEB ICONS (icons/)
favicon.svg: white lowercase 'n' on a black circle, transparent outside the circle.
favicon.ico: the same icon at 16, 32, 48, 64, 128 and 256 pixels.
favicon-16x16.png, favicon-32x32.png, favicon-48x48.png: small raster exports.
apple-touch-icon.png: opaque black square, 180 x 180 pixels.
web-app-manifest-192x192.png and -512x512.png: circular application icons.
web-app-manifest-maskable-512x512.png: opaque square with safe-area padding.
manifest.webmanifest: web app metadata and icon paths used by this website.

Web icons use option A: the lowercase 'n' extracted from the same Manrope
ExtraBold wordmark, centred at approximately 58% of the canvas height.
The single letter stays readable at small browser-tab sizes. Apple and
maskable icons use the same letter on a solid black square, with no baked-in
rounded corners; the operating system supplies the shape. The letter fits
within the maskable icon's central safe circle (radius: 40% of the canvas width).

REPOSITORY INTEGRATION
src/app/favicon.ico, src/app/icon.svg and src/app/apple-icon.png are the
Next.js file-based icons. src/app/manifest.webmanifest is the active manifest.
Next.js adds the appropriate head links automatically.
The manifest's icon URLs point to /brand/icons/ within this repository.

SOURCE
Source font: src/app/fonts/manrope-latin-variable.woff2
Font copyright: 2018 The Manrope Project Authors.
Font license: SIL Open Font License 1.1, retained at src/app/fonts/OFL.txt.
Typography source: src/app/globals.css, .wordmark.
Black and white logo colours were explicitly requested on 2026-10-13.
The lowercase 'n' web icon (option A) was selected on 2026-10-14.
