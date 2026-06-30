import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

// Test-Suite für die App-Komponente
describe('App', () => {
  // Test 1: Prüft ob Initial-Zustand korrekt gerendert wird
  test('zeigt initial Zählerstand 0', () => {
    render(<App />) // Komponente rendern (in jsdom)
    // Die Zahl steht isoliert im <strong> Tag → direkt danach suchen
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  // Test 2: Prüft Interaktion (Button-Klick → State-Update)
  test('erhöht Zähler beim Klick auf Button', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /erhöhen/i }) // Button finden
    fireEvent.click(button) // Simuliert Benutzer-Klick
    // Prüft ob Zähler auf 1 aktualisiert wurde
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  // Test 3: Mehrere Klicks nacheinander
  test('erhöht Zähler bei mehreren Klicks korrekt', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /erhöhen/i })
    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)
    expect(screen.getByText('3')).toBeInTheDocument()
  })
})