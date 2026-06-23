import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite Konfiguration - zentraler Ort für Build & Test Einstellungen
export default defineConfig({
  plugins: [react()],                    // React Plugin aktivieren (JSX, Hot Reload)

  // Vitest Konfiguration (Test-Runner)
  test: {
    environment: 'jsdom',                // Simuliert Browser-DOM (document, window, etc.)
    setupFiles: './src/test-setup.js',   // Wird vor jedem Test ausgeführt
    globals: true,                       // describe, it, expect global verfügbar (ohne Import)
    include: ['src/**/*.test.{js,jsx}']  // Test-Dateien finden (Namenskonvention)
  }
})