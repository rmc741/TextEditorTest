import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {AlertProvider} from "./provider/AlertProvider"

export function App() {
  return (
    <AlertProvider>
      <div>
        Main APP
      </div>
    </AlertProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
