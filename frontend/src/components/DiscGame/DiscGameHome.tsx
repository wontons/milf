import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export function DiscGameHome() {
    const navigate = useNavigate();

    return (
        <Box m="1rem" display="flex" flex={1} alignItems="top" justifyContent="center">
            <Stack alignItems="center">
                <Typography variant="h4">Disc Game</Typography>
                <Typography variant="h5" sx={{my: '1rem'}}>How To Play</Typography>
                <Typography variant="body1">- given a letter of the alphabet, guess all discs that start with that letter</Typography>
                <Typography variant="body1">- a successful guess will appear in the list and give you points</Typography>
                <Typography variant="body1">- you win by guessing all of the disc names</Typography>
                <Button disabled onClick={() => navigate("/discgame/original")} variant="contained" size="large" sx={{ mt: '1rem'}}>Play</Button>
                {/* <Button onClick={() => navigate("/discgame/original")} variant="contained" disabled>Innova</Button>
                <Button onClick={() => navigate("/discgame/original")} variant="contained" disabled>Discmania</Button>
                <Button onClick={() => navigate("/discgame/original")} variant="contained" disabled>Discraft</Button>
                <Button onClick={() => navigate("/discgame/original")} variant="contained" disabled>MVP</Button>
                <Button onClick={() => navigate("/discgame/original")} variant="contained" disabled>Trilogy</Button> */}
            </Stack>
        </Box>
    );
}