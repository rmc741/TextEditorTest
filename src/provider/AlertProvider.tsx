import {createContext, useContext, useEffect, useState} from 'react';
import {Alert} from '@mui/material';
import type {AlertColor} from '@mui/material/Alert';
import {registerAlert} from "../services/AlertService";

interface AlertContextType {
  showAlert: (message: string, severity?: AlertColor, icon?: React.ReactNode) => void;
  hideAlert: () => void;
}

const AlertContext = createContext<AlertContextType>({
  showAlert: () => {
  },
  hideAlert: () => {
  },
});

export function AlertProvider({children}: { children: React.ReactNode }) {
  const [alert, setAlert] = useState<{ message: string; severity: AlertColor; icon?: React.ReactNode } | null>(null);

  const showAlert = (message: string, severity: AlertColor = 'success', icon?: React.ReactNode) => {
    setAlert({message, severity, icon});
    setTimeout(() => hideAlert(), 30000)
  };

  const hideAlert = () => {
    setAlert(null);
  };

  useEffect(() => {
    registerAlert(showAlert);
  }, []);

  return (
    <AlertContext.Provider value={{showAlert, hideAlert}}>
      {children}
      {alert && (
        <div
          style={{
            position: 'fixed',
            top: '3%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10000,
          }}
        >
          <Alert
            icon={alert.icon}
            severity={alert.severity}
            onClose={hideAlert}
          >
            {alert.message}
          </Alert>
        </div>
      )}
    </AlertContext.Provider>
  );
}

export function useAlert() {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('Use alert deve ser utilizado dentro de um alert provider');
  }
  return context;
}