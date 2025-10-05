import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

export function App() {
  return (
    <div>
      Main APP
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
