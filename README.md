# guidofabiancabrera.github.io

Portfolio de Guido Fabian Cabrera. Next.js (exportación estática), TypeScript y Tailwind CSS. Dos idiomas: español en `/` e inglés en `/en/`.

## Cómo se organiza

- `src/content/es.ts` y `src/content/en.ts`: **todo el texto** del sitio y del CV. Es lo único que hay que tocar para cambiar contenido.
- `src/components/Portfolio.tsx`: la página. `src/components/CvDocument.tsx`: el CV imprimible (`/cv/` y `/en/cv/`, no indexadas).
- `public/images/`: foto y capturas de los proyectos.
- `public/Guido-Fabian-Cabrera-CV-ES.pdf` y `-EN.pdf`: los CV que descarga el sitio.

## Comandos

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # genera la carpeta out/
```

## Regenerar los PDF del CV

Los PDF salen del mismo contenido que la página, impresos con un navegador sin interfaz. Se hace después de cambiar `src/content`:

```bash
pnpm build
python3 -m http.server 3200 --directory out &
"/Applications/Brave Browser.app/Contents/MacOS/Brave Browser" --headless=new --no-pdf-header-footer \
  --print-to-pdf=public/Guido-Fabian-Cabrera-CV-ES.pdf http://localhost:3200/cv/
"/Applications/Brave Browser.app/Contents/MacOS/Brave Browser" --headless=new --no-pdf-header-footer \
  --print-to-pdf=public/Guido-Fabian-Cabrera-CV-EN.pdf http://localhost:3200/en/cv/
kill %1
```

Estos PDF **no llevan teléfono**, porque están publicados en una web abierta. Para postular, usá el CV con teléfono.

## Publicación

Al subir a `main`, GitHub Actions construye el sitio y lo publica en la rama `gh-pages`, que es de donde GitHub Pages lo sirve (`.github/workflows/deploy.yml`).

El sitio se sirve en `https://guidofc.com.ar` (`public/CNAME`, `NEXT_PUBLIC_SITE_URL` en el workflow). El DNS está en Cloudflare, en modo solo DNS.
