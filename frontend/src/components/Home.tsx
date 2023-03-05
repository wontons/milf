import { PlayArrow } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/MBDGTlogoblack.png";

const url = "https://www.discgolfscene.com/tournaments/2023_Manitoba_Disc_Golf_Tour_2023"

export function Home() {
    const navigate = useNavigate();

    return (
        <Box m="1rem" display="flex" flex={1} alignItems="top" justifyContent="center" sx={{ overflowY: 'auto', overflowX: 'hidden'}}>
            <Stack justifyContent="top" alignItems="center">
                <Typography variant="h4">Man I Love Frisbee</Typography>
                <Typography variant="body1">presents</Typography>
                <Box component="img" src={logo} alt="tour" height="500px"/>
                <Button 
                    sx={{ mt: "1rem" }}
                    variant="contained"
                    endIcon={<PlayArrow />} 
                    onClick={() => navigate('/tour')}
                >
                    LEARN MORE
                </Button>
                <Button 
                    sx={{ mt: "1rem" }}
                    variant="contained"
                    endIcon={<PlayArrow />} 
                    href={url}
                    target="_blank"
                >
                    REGISTER
                </Button>
            </Stack>
        </Box>
    );
}