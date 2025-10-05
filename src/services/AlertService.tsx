import type {AlertColor} from '@mui/material';

type ShowAlertFunction = (message: string, severity?: AlertColor, icon?: React.ReactNode) => void;

let showAlertRef: ShowAlertFunction | null = null;

export function registerAlert(showAlert: ShowAlertFunction) {
  showAlertRef = showAlert;
}

export function triggerAlert(message: string, severity: AlertColor = 'info', icon?: React.ReactNode) {
  if (showAlertRef) {
    showAlertRef(message, severity, icon);
  } else {
    console.warn('AlertProvider não está inicializado. Alerta não foi exibido:', message);
  }
}
