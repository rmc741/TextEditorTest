import { AppBar, Typography } from "@mui/material";
import "./index.css"

export function Header() {
    return (
        <AppBar sx={{display:"flex"}}>
            <a className="logo" href="/">
                <img src="teste.svg" style={{height:"50px"}} alt="Logo NomeProjeto"/>
                <Typography>
                TEXTE EDITOR TEST
                </Typography>
            </a>
        </AppBar>
    );
}