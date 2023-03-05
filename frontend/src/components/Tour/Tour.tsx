import { PlayArrow } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import tour from "../../assets/mbtour.png";

const url = "https://www.discgolfscene.com/tournaments/2023_Manitoba_Disc_Golf_Tour_2023"

export function Tour () {
 
    return (
        <Box display="flex" flex={1} alignItems="top" justifyContent="center" sx={{ overflowY: 'auto', overflowX: 'hidden'}}>
            <Stack direction="column">
                <Button variant="contained" href={url} target="_blank" endIcon={<PlayArrow />} sx={{ m: '1rem' }}>REGISTER</Button>
                <Box component="img" src={tour} alt="tour" height="90%"/>
            </Stack>
        </Box>
    );
}