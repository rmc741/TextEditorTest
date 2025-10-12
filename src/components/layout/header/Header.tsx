import { AppBar, Toolbar, Typography } from "@mui/material";
import "./index.css"
import { Link } from "react-router-dom";

export function Header() {
    return (
        <AppBar sx={{display:"flex"}}>
            <Toolbar sx={{justifyContent:"space-between"}}>
                <a className="logo" href="/">
                    <img src="teste.svg" style={{height:"50px"}} alt="Logo NomeProjeto"/>
                    <Typography>
                        TEXTE EDITOR TEST
                    </Typography>
                </a>

                <div className="nav-bar">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/about">About</Link>
                </div>
            </Toolbar>
        </AppBar>
    );
}