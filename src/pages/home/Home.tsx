import { Box, Card, CardContent, Typography } from "@mui/material";

type Artigos = {
    id : number;
    descricao : string;
    tag : string;
};

const artigos: Artigos[] = [
    {
        id: 1,
        descricao: "Teeeeste",
        tag: "Tag"
    },
    {
        id: 2,
        descricao: "Teeeeste2",
        tag: "Tag"
    },
];

export function Home() {
    return(
        <div>
            HOME PAGE

            <Box>
                {artigos.map((artigo) => (
                    <Card key={artigo.id}>
                        <CardContent>
                            <Typography variant="h6" fontWeight="bold">
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
        </div>
    );
}