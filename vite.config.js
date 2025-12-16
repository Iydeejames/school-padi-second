import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({ 
      devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^index.html$/]
        /* other options */
      },
      manifest: {
        name: 'Schoolpadi',
        short_name: 'Schoolpadi',
        description: 'Schoolpadi Web App!',
        theme_color: '#ffffff',
        background_color: '#F3F4F8',
        display: 'standalone',
        "display_override": ["window-controls-overlay"],
        start_url: '/',
        id:"/",
        
        icons: [
          {
            src: '/icons/android-launchericon-192-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
        splash_screens: [
          {
            src: '/splash/SplashScreen.scale-150.png',
            sizes: '640x1136',
            type: 'image/png',
            media: '(device-width: 1440px) and (device-height: 568px)',
          },
          {
            src: '/splash/SplashScreen.scale-200.png',
            sizes: '750x1334',
            type: 'image/png',
            media: '(device-width: 1240px) and (device-height: 667px)',
          },
        ],
        protocol_handlers: [
          {
            protocol: 'web+schoolpadi',
            url: '/?url=%s'
          }
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true,
      },

      registerType: 'autoUpdate' })



  ],
})
