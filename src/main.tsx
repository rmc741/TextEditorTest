import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {AlertProvider} from "./provider/AlertProvider"
import { useApiLoading } from './interceptor/Interceptor';
import { Loader } from './components/loader/Loader';
import { Header } from './components/layout/header/Header';
import AppRouteConfig from './config/RouteConfig';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  const isLoading = useApiLoading();

  return (
      <AlertProvider>
      <div className="app-container">
        {isLoading && <Loader/>}
        <Header/>
        <main className="main-content">
          <AppRouteConfig/>
        </main>
      </div>
    </AlertProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
