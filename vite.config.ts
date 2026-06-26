import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import sharp from 'sharp'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

// ----------------------------------------------------------------------------
//  OPTIMISATION AUTOMATIQUE DES IMAGES (au build uniquement)
// ----------------------------------------------------------------------------
//  Au moment du `npm run build`, chaque image est :
//    - redimensionnée si elle dépasse MAX_WIDTH (inutile de servir du 8000 px
//      sur un site large de ~400 px),
//    - recompressée (JPEG / PNG / WebP).
//  Les fichiers d'origine dans src/imports/ ne sont JAMAIS modifiés : seule la
//  copie publiée dans dist/ est optimisée. Aucun changement de workflow.
//  Pour servir des images plus nettes/zoomables : augmenter MAX_WIDTH.
//  Pour des fichiers plus légers (au prix de la qualité) : baisser QUALITY.
const MAX_WIDTH = 1600
const QUALITY = 80

function optimizeImages() {
  return {
    name: 'optimize-images',
    apply: 'build' as const,
    async generateBundle(_options: unknown, bundle: Record<string, any>) {
      await Promise.all(
        Object.values(bundle).map(async (asset: any) => {
          if (asset.type !== 'asset') return
          const ext = asset.fileName.split('.').pop()?.toLowerCase()
          if (!ext || !['png', 'jpg', 'jpeg', 'webp'].includes(ext)) return

          const input = Buffer.isBuffer(asset.source)
            ? asset.source
            : Buffer.from(asset.source)
          try {
            let pipeline = sharp(input, { failOn: 'none' })
            const meta = await pipeline.metadata()
            if (meta.width && meta.width > MAX_WIDTH) {
              pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true })
            }
            if (ext === 'png') {
              pipeline = pipeline.png({ compressionLevel: 9, quality: QUALITY, palette: true })
            } else if (ext === 'webp') {
              pipeline = pipeline.webp({ quality: QUALITY })
            } else {
              pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true })
            }
            const output = await pipeline.toBuffer()
            // On ne garde la version optimisée que si elle est réellement plus légère.
            if (output.length < input.length) asset.source = output
          } catch (err) {
            this.warn(`optimize-images: ${asset.fileName} ignoré (${(err as Error).message})`)
          }
        })
      )
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    optimizeImages(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
