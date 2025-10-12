import { AppBar, Typography } from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';

export function Header() {
    return (
        <AppBar>
            <img src="../../../../public/teste.svg" style={{height:"48px"}} alt="Logo NomeProjeto"/>
            <Typography>
              LOGO
            </Typography>
        </AppBar>
    );
}