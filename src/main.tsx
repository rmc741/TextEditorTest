import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {AlertProvider, useAlert} from "./provider/AlertProvider"
import { Button } from '@mui/material';
// import { useApiLoading } from './interceptor/Interceptor';

export function App() {
  // const isLoading = useApiLoading();
  // {isLoading && <Loader/>}

  //Teste do alert provider
  const { showAlert } = useAlert();

  const handleClick = () => {
    showAlert('AAAAAAAAA', 'success');
  };

  return (
      <div style={{ padding: 20 }}>
      <Button variant="contained" onClick={handleClick}>
        Mostrar alerta
      </Button>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AlertProvider>
      <App />
    </AlertProvider>
  </StrictMode>,
)
