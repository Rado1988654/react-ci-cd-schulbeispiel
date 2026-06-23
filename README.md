# React CI/CD Schulbeispiel

Minimales React-Projekt mit **Vite**, **Vitest** und **GitHub Actions** Pipeline.

## Projektstruktur

```
├── .github/workflows/ci.yml    # CI Pipeline (Build + Test)
├── src/
│   ├── App.jsx                 # Hauptkomponente (Counter)
│   ├── App.test.jsx            # 3 Unit-Tests
│   ├── main.jsx                # Einstiegspunkt
│   ├── index.css               # Minimales Styling
│   └── test-setup.js           # Test-Konfiguration (jest-dom)
├── index.html                  # HTML Template
├── package.json                # Dependencies & Scripts
└── vite.config.js              # Vite + Vitest Config
```

## Lokale Entwicklung

```bash
# 1. Dependencies installieren
npm install

# 2. Dev-Server starten (http://localhost:5173)
npm run dev

# 3. Tests einmal ausführen
npm test -- --run

# 4. Production-Build erstellen
npm run build
```

## Was die Pipeline macht (`.github/workflows/ci.yml`)

| Schritt | Befehl | Zweck |
|---------|--------|-------|
| Checkout | `actions/checkout` | Holt Code in den Runner |
| Node Setup | `actions/setup-node` | Installiert Node 20 + cached `node_modules` |
| Install | `npm ci` | Saubere Installation (lockfile-basiert) |
| Build | `npm run build` | Prüft: Kompiliert der Code? Gibt es Syntaxfehler? |
| Test | `npm test -- --run` | Führt alle `*.test.jsx` Dateien aus |

## Tests erklärt (`src/App.test.jsx`)

```jsx
// AAA-Pattern: Arrange → Act → Assert
test('erhöht Zähler beim Klick', () => {
  render(<App />)           // Arrange: Komponente rendern
  fireEvent.click(button)   // Act:     Button klicken
  expect(...).toBe(...)     // Assert:  Ergebnis prüfen
})
```

- **Test 1:** Initial-Zustand (Zähler = 0)
- **Test 2:** Ein Klick → Zähler = 1
- **Test 3 Klicks → Zähler = 3

## Pipeline starten

1. Repo auf GitHub pushen
2. Gehe zu **Actions** Tab → siehst Pipeline laufen
3. Bei grün: ✅ Build & Tests erfolgreich
4. Bei rot: ❌ Fehler in Logs ansehen

## Optional: Deploy zu Vercel (kostenlos)

1. [vercel.com](https://vercel.com) → "Add New Project"
2. GitHub Repo auswählen → Deploy
3. Jeder Push auf `main` deployed automatisch

## Tech-Stack & Warum?

| Tool | Warum? |
|------|--------|
| **Vite** | Schneller Dev-Server, 0 Config, moderner Standard |
| **Vitest** | In Vite integriert, Jest-kompatibel, schnell |
| **Testing Library** | Testet wie Nutzer (nicht Implementierungsdetails) |
| **GitHub Actions** | Kostenlos, im Repo integriert, Standard in der Industrie |

## Für die Schule erklären

1. **CI (Continuous Integration):** Automatisches Prüfen bei jedem Push
2. **Pipeline:** Kette aus Schritten (Install → Build → Test)
3. **Unit-Test:** Testet EINE Komponente isoliert (hier: Counter-Logik)
4. **Quality Gate:** Code kommt nur in main, wenn Tests grün sind
5. **Automatisierung:** Kein manuelles Testen nötig, läuft bei jedem Commit