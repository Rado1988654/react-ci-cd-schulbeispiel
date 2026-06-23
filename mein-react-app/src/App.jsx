import { useState } from 'react'          // Hook für State-Verwaltung
import './App.css'                         // CSS-Styles importieren

// Hauptkomponente der App - einfach & testbar
function App() {
  const [count, setCount] = useState(0)   // State: Zähler startet bei 0

  // Handler-Funktion: erhöht Zähler um 1
  const increment = () => setCount(c => c + 1)

  return (
    <div className="app">
      <header>
        <h1>Meine React App</h1>           // Überschrift
      </header>

      <main>
        {/* Zeigt aktuellen Zählerstand an */}
        <p data-testid="counter-display">Zähler: {count}</p>

        {/* Button ruft increment-Funktion auf */}
        <button onClick={increment} data-testid="increment-button">
          Erhöhen
        </button>

        {/* Bedingte Anzeige: nur bei count > 5 */}
        {count > 5 && (
          <p data-testid="success-message">🎉 Mehr als 5!</p>
        )}
      </main>
    </div>
  )
}

export default App