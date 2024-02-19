import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FestivalIcon from '@mui/icons-material/Festival';
import PersonIcon from '@mui/icons-material/Person';
import PlaceIcon from '@mui/icons-material/Place';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import TodayIcon from '@mui/icons-material/Today';
import { Box, Button, Collapse, IconButton, Stack, Typography } from "@mui/material";
import { useState } from 'react';

export function EventCard(props: IEvent) {
    const { title, tier, date, location, td } = props;
    const [expanded, setExpanded] = useState<boolean>(false);

    return (
    <Box sx={{ m: '1rem', width: '50%'}}>
        <Stack direction="row" alignItems="center">
            <IconButton sx={{ mr: '1rem'}} onClick={() => setExpanded(!expanded)}>
                {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <Typography>{title}</Typography>
        </Stack>
        <Collapse in={expanded}>
            <Stack direction="column" alignItems="left" ml="3.5rem">
                <Box alignItems="center" display="flex" mt="1rem">
                    <FestivalIcon sx={{ mr: '1rem'}}/>
                    <Typography>{tier}-Tier</Typography>
                </Box>
                <Box alignItems="center" display="flex" mt="1rem">
                    <TodayIcon sx={{ mr: '1rem'}}/>
                    <Typography>{date}</Typography>
                </Box>
                <Box alignItems="center" display="flex" mt="1rem">
                    <PlaceIcon sx={{ mr: '1rem'}}/>
                    <Typography>{location}</Typography>
                </Box>
                <Box alignItems="center" display="flex" mt="1rem">
                    <PersonIcon sx={{ mr: '1rem'}}/>
                    <Typography>{td}</Typography>
                </Box>
                <Button
                    sx={{ mt: "1rem", width: { xs: "75%", sm: "50%"}}}
                    variant="contained"
                    endIcon={<PlayArrowIcon />}
                    href={""}
                    target="_blank"
                    >
                    REGISTER
                </Button>
            </Stack>
        </Collapse>
    </Box>
    )
}