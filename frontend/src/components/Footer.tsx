import { Box, Button, Typography } from "@mui/material";

export function Footer() {
    return (
        <Box display="flex" justifyContent="space-between" sx={{ background: 'white', borderRadius: 4, m: '1rem'}}>
            <Box display="flex" justifyContent="left" alignItems="center" >
                <Button href="https://www.pdga.com" target="_blank">
                    <Typography variant="body2">
                        Course, Player, & Event Data © {new Date().getFullYear()} PDGA
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
}