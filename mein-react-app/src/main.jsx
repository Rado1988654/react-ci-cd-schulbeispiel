// Einstiegspunkt der React-Anwendung
import { StrictMode } from 'react'           // Strengere Prüfungen in Dev-Modus
import { createRoot } from 'react-dom/client' // Client-seitiges Rendering (Browser)
import './index.css'                          // Globale Styles
import App from './App.jsx'                   // Hauptkomponente importieren

// React 18: createRoot API (konkurrent Rendering)
createRoot(document.getElementById('root')).render(
  <StrictMode>                                // Entwicklungs-Hilfen (Doppelte Effekte, etc.)
    <App />                                   // App-Komponente in #root rendern
  </StrictMode>
)