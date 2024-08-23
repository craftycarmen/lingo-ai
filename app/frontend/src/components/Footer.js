import { Box, Button, Container, Link, Grid, LinearProgress, Typography } from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import React from "react";

function Footer() {
    return (
        <Container style={{ padding: "10px 0px 20px 0px", textAlign: "center" }}>
            <Typography variant="overline"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <EmojiEventsIcon fontSize="small" />
                <span>&nbsp;Second Place - App Academy Summer 2024 Hackathon</span>
            </Typography>
            <Typography variant="overline" display="block">
                Developed by:&nbsp;
                <Link href="https://github.com/athena-codes" target="_blank" rel="noopener noreferrer">Athena Chiarello</Link>&nbsp;&#183;&nbsp;
                <Link href="https://github.com/craftycarmen" target="_blank" rel="noopener noreferrer">Carmen Shiu</Link>&nbsp;&#183;&nbsp;
                <Link href="https://github.com/glmenta" target="_blank" rel="noopener noreferrer">Geryko Menta</Link>&nbsp;&#183;&nbsp;
                <Link href="https://github.com/pennywangpw" target="_blank" rel="noopener noreferrer">Penny Wang</Link>&nbsp;&#183;&nbsp;
                <Link href="https://github.com/vth-co" target="_blank" rel="noopener noreferrer">Vu Co</Link>

            </Typography>
            <Typography variant="overline" gutterBottom>
                <Link href="https://github.com/athena-codes/a-A-summer-hackathon" target="_blank" rel="noopener noreferrer">GitHub</Link>&nbsp;&#183;&nbsp;
                <Link href="https://www.canva.com/design/DAGNT7gwwFE/xwdKN4xlFMP-E6KX5mU2ig/view" target="_blank" rel="noopener noreferrer">Pitch Deck</Link>
            </Typography>
        </Container>
    )
}

export default Footer
