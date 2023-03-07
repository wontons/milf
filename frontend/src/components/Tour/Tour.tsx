import { PlayArrow } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import tour from "../../assets/mbtour.png";

const url = "https://www.discgolfscene.com/tournaments/2023_Manitoba_Disc_Golf_Tour_2023"

export function Tour () {
 
    return (
        <Box display="flex" flex={1} alignItems="top" justifyContent="center" sx={{ overflowY: 'auto', overflowX: 'hidden'}}>
            <Stack direction="column">
                <Button variant="contained" href={url} target="_blank" endIcon={<PlayArrow />} sx={{ m: '1rem' }}>REGISTER</Button>
                <Typography variant="h3" width="50%" textAlign="center">
                                The Manitoba Disc Golf Tour
                                </Typography>
                <Typography variant="h6" width="50%" textAlign="center">
                                The Manitoba Disc Golf Tour is a way for players to compete over the entire disc golf season to earn points and win prizes. Players will earn points for playing in tour events, and the players with the most points at the end of the season will qualify for the Tour Championship!
                                </Typography>
                <Typography variant="h3" width="50%" textAlign="center">
                                Registration
                                </Typography>
                <Typography variant="h6" width="50%" textAlign="center">
                                Registration is $30 and is done through Disc Golf Scene. All players that register will receive a custom Tour Shirt, and be eligible to earn points at Manitoba Tour events and some other perks.
                                Payment may also be made via e-Transfer to manilovefrisbee@gmail.com
                                </Typography>
                <Typography variant="h3" width="50%" textAlign="center">
                                Points
                                </Typography>
                <Typography variant="h6" width="50%" textAlign="center">
                                By playing in Manitoba Tour events, you will earn points based on your score and how you finish. Players will earn extra points for each stroke they beat a competitor by. Leaderboards will be split into their respective divisions and will track each player's points across the season.
                                </Typography>
                <Typography variant="h3" width="50%" textAlign="center">
                                Tour Championship
                                </Typography>
                <Typography variant="h6" width="50%" textAlign="center">
                                By placing in the top 50% of players in your division will qualify for the Tour Championship. This will be the last chance to earn points and take home the title of Tour Champion. All players that qualify for the Tour Championship will earn prizes based on how they finish.
                                </Typography>
            </Stack>
        </Box>
    );
}
