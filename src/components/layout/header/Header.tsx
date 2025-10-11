import { AppBar, Typography } from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';

export function Header() {
    return (
        <AppBar>
            <AdbIcon/>
            <Typography>
              LOGO
            </Typography>
        </AppBar>
    );
}