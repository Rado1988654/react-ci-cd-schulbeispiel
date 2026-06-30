import { useState } from 'react'

// Hauptkomponente: Einfacher Counter mit Button
function App() {
  const [count, setCount] = useState(0) // State für Zählerstand

  const increment = () => setCount(c => c + 2) // Erhöht Zähler um 1

  return (
    <div>
      <h1>React CI/CD Schulbeispiel</h1>
      <p>Zählerstand: <strong>{count}</strong></p>
      <button onClick={increment}>Erhöhen</button>
      <p style={{ marginTop: '2rem', color: '#666', fontSize: '0.9rem' }}>
        Pipeline: Build → Test → Deploy
      </p>
    </div>
  )
}

export default App