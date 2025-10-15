import { Box, Button, Card, CardContent, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { About } from "../about/About";

type Artigos = {
    id: number;
    titulo: string;
    descricao: string;
    tag: string;
};


export function Home() {

    const [open, setOpen] = useState(false);

    const [artigos, setArtigos] = useState<Artigos[]>([
        {
            id: 1,
            titulo: "Titulo 1",
            descricao: "Teeeeste",
            tag: "Tag"
        },
        {
            id: 2,
            titulo: "Titulo 2",
            descricao: "Teeeeste2",
            tag: "Tag"
        },
    ]);

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [tag, setTag] = useState("");

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSalvar = () => {
        if (!titulo || !descricao || !tag) return;

        const novoArtigo: Artigos = {
            id: artigos.length + 1,
            titulo,
            descricao,
            tag,
        };

        // adiciona o novo artigo à lista existente
        setArtigos([...artigos, novoArtigo]);

        // limpa campos e fecha o modal
        setTitulo("");
        setDescricao("");
        setTag("");
        handleClose();
    };

    return (
        <div>
            <Button
                variant="contained"
                onClick={handleOpen}
                sx={{ backgroundColor: "#031795", mb: 3 }}
            >
                Novo Artigo
            </Button>

            <Box>
                {artigos.map((artigo) => (
                    <Card key={artigo.id}>
                        <CardContent>
                            <Typography variant="h6" fontWeight="bold">
                                {artigo.titulo}
                            </Typography>
                            <Typography variant="body1">
                                {artigo.descricao}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {artigo.tag}
                            </Typography>
                            <Typography variant="caption" color="text.disabled">
                                ID: {artigo.id}
                            </Typography>

                        </CardContent>
                    </Card>
                ))}
            </Box>

            {/* Modal para criar novo artigo */}
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 4,
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                    }}
                >
                    <Typography variant="h6" textAlign="center">
                        Novo Artigo
                    </Typography>

                    <TextField
                        label="Título"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        fullWidth
                    />

                    <TextField
                        label="Descrição"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        fullWidth
                        multiline
                        rows={3}
                    />

                    <TextField
                        label="Tag"
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                        fullWidth
                    />

                    <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                        <Button onClick={handleClose} color="inherit">
                            Cancelar
                        </Button>
                        <Button variant="contained" onClick={handleSalvar}>
                            Salvar
                        </Button>
                    </Box>
                </Box>
            </Modal>

            <About/>
        </div>
    );
}