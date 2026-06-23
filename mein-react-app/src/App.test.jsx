// Unit-Test für App-Komponente mit Vitest & React Testing Library
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

// Test-Suite: Gruppiert zusammengehörige Tests
describe('App Komponente', () => {

  // Test 1: Prüft initiale Anzeige
  test('zeigt initial Zählerstand 0', () => {
    // ARRANGE: Komponente rendern
    render(<App />)

    // ASSERT: Prüfen ob "Zähler: 0" im DOM ist
    // data-testid ist Best Practice für Test-Selektoren
    expect(screen.getByTestId('counter-display')).toHaveTextContent('Zähler: 0')
  })

  // Test 2: Prüft Interaktion (Button-Klick)
  test('erhöht Zähler beim Klick auf Button', () => {
    // ARRANGE
    render(<App />)
    const button = screen.getByTestId('increment-button')

    // ACT: Simuliert Nutzer-Klick
    fireEvent.click(button)

    // ASSERT: Zähler muss jetzt 1 sein
    expect(screen.getByTestId('counter-display')).toHaveTextContent('Zähler: 1')
  })

  // Test 3: Mehrere Klicks
  test('erhöht Zähler bei mehrfachen Klicks', () => {
    render(<App />)
    const button = screen.getByTestId('increment-button')

    // 3x klicken
    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)

    // Prüfen: Zähler = 3
    expect(screen.getByTestId('counter-display')).toHaveTextContent('Zähler: 3')
  })

  // Test 4: Bedingte Anzeige (count > 5)
  test('zeigt Erfolgsmeldung bei count > 5', () => {
    render(<App />)
    const button = screen.getByTestId('increment-button')

    // 6x klicken -> count = 6
    for (let i = 0; i < 6; i++) fireEvent.click(button)

    // Erfolgsmeldung muss sichtbar sein
    expect(screen.getByTestId('success-message')).toBeInTheDocument()
    expect(screen.getByTestId('success-message')).toHaveTextContent('🎉 Mehr als 5!')
  })

  // Test 5: Meldung nicht sichtbar bei count <= 5
  test('versteckt Erfolgsmeldung bei count <= 5', () => {
    render(<App />)
    const button = screen.getByTestId('increment-button')

    // Nur 5x klicken
    for (let i = 0; i < 5; i++) fireEvent.click(button)

    // Meldung darf NICHT im DOM sein
    expect(screen.queryByTestId('success-message')).not.toBeInTheDocument()
  })
})