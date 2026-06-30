import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite Konfiguration: https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // React Plugin für JSX & Fast Refresh
  base: '/react-ci-cd-schulbeispiel/', // WICHTIG: Repository-Name für GitHub Pages
  test: {
    environment: 'jsdom',        // Simuliert Browser-DOM für Tests (wie im echten Browser)
    globals: true,               // Ermöglicht describe/it/expect ohne Import (wie Jest)
    setupFiles: './src/test-setup.js', // Wird vor jedem Test ausgeführt
    include: ['src/**/*.test.{js,jsx}']  // Test-Dateien finden
  }
})