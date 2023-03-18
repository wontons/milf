import { PlayArrow } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";

import dr_logo_bar from "../../assets/DR_bar.png";
import dr_logo_vert from "../../assets/DR_vert.png";

const url = "https://www.discgolfscene.com/tournaments/2023_Manitoba_Disc_Golf_Tour_2023"

export function Tour () {
 
    return (
        <Box display="flex" flex={1} alignItems="top" justifyContent="center" sx={{ overflowY: 'auto', overflowX: 'hidden'}}>
            <Stack direction="column" alignItems="center" mr="1rem">
                <Typography variant="h2" textAlign="center">The Manitoba Disc Golf Tour</Typography>
                <Typography variant="h4" sx={{ mt: '0.5rem'}}>Presented By</Typography>
                <Box component="img" src={dr_logo_bar} alt="disc republic" height={{ sm: "105px", md:"170px"}} display={{ xs: 'none', sm: 'block' }}/>
                <Box component="img" src={dr_logo_vert} alt="disc republic" height="100px"  display={{ xs: 'block', sm: 'none' }}/>
                <Typography variant="body1" textAlign="center" sx={{ mt: '0.5rem'}}>
                    The Manitoba Disc Golf Tour is a new way for players to compete over the entire disc golf season to earn points and win prizes. Players will earn points for playing in tour events and face off at the end of the year in the Tour Championship! 
                </Typography>
                <Typography variant="h5" mt="1rem"><strong>Registration</strong></Typography>
                <Typography variant="body1" mt="0.5rem" textAlign="center">
                    Registration is handled through Disc Golf Scene. The cost is $30 and includes a custom Manitoba Tour shirt and invites you to compete in the Tour Championship. The registration is used to help cover the cost of the shirt and the rest will go towards prizing. If you are unable to pay through Disc Golf Scene for any reason you can send $30 via eTransfer to manilovefrisbee@gmail.com. Please include your first and last name, PDGA number if you have one, and shirt size (S,M,L,XL,XXL).
                </Typography>
                <Button variant="contained" href={url} target="_blank" endIcon={<PlayArrow />} sx={{ mt: '1rem', width: { xs: '75%', sm: '50%'} }}>
                    REGISTER NOW
                </Button>
                <Typography variant="h5" mt="1rem"><strong>Points</strong></Typography>
                <Typography variant="body1" mt="0.5rem" textAlign="center">
                    By participating in Manitoba Tour events you will earn points based on your score and how you finish. Players will earn extra points for each stroke they beat a competitor by. Leaderboards will be split into their respective divisions and will track each player's points across the season.
                    <br/><br/>
                    The amount of points awarded will be similar to PDGA points but distributed based on score in addition to position. The two main factors that will impact points for each event is the number of players and how you play compared to the rest of the division. For example, winning an event by 5 strokes will award you more points than winning by 1 stroke.
                    <br/><br/>
                    This point system is designed to give a more accurate representation of how you play over the season and reward you for playing well. 
                    <br/><br/>
                    Each players division will be set after the first event they compete in based on what division they play. If you change divisions between events, you will incur a small point penalty and your points will be scaled to the division. For example if the MA3 division has a total of 1000 points and MA2 has a total of 500, switching from MA3 to MA2 means your points would be worth approximately half the amount in MA2. This is to prevent players from trying to game the system and switch divisions to gain a points advantage.
                </Typography>
                <Typography variant="h5" mt="1rem"><strong>Tour Championship</strong></Typography>
                <Typography variant="body1" mt="0.5rem" textAlign="center">
                    Manitoba Tour Players will be eligible to participate in the Tour Championship. The Tour Championship is free to enter for all Tour Members (non-PDGA members will have to pay $10). The event will be worth double the points compared to regular events. All players' Tour Points will carry over from the season and be added to the points you earn in the Tour Championship. Prizing for the Tour Championship will be based on total points, so finishing 1st in the Tour Championship does not necessarily mean you become the Tour Champion for your division.
                    <br/><br/>
                    Prizing for the Tour Championship will be paid out following PDGA guidelines but based on total points from the Tour season and Tour Championships combined. 
                    <br/><br/>
                    For example, let's look at 3 players. Player A has 200 tour points, Player B has 300, and Player C has 350 from the Tour season. At the Tour Championship Player A and B tie and both earn 300 and Player C earns 50. Player A now has 500, Player B has 600 and Player C has 400 total. Player B would earn the most prizes for having the most points, and player A would earn more than Player C despite player C doing better in the Tour season.
                </Typography>
                <Typography variant="h5" mt="2rem"><strong>FAQ</strong></Typography>
                <Typography variant="h6" mt="1rem"><strong>What division should I play?</strong></Typography>
                <Typography variant="body1" mt="0.5rem" textAlign="center">
                    You can follow our recommendations below if you are unsure, if you don’t have a rating reach out and we can help you decide. (These recommendations differ from PDGA guidelines and line up with past trends for Manitoba events)
                    <br/><br/>
                    Mixed Divisions:<br/>
                    MA3 &lt; 880 (Ratings under 870)<br/>
                    MA2 &lt; 910 (Ratings between 870 and 900)<br/>
                    MA1 &lt; 940 (Ratings between 900 and 930)<br/>
                    MPO &gt; 940 (Rating above 930)<br/>
                    MA40 &gt; 880 (Ratings above 880 and over 40 years of age)
                    <br/><br/>
                    Female Divisions:<br/>
                    FA3 &lt; 750 (Ratings under 750)<br/>
                    FA2 &lt; 800 (Ratings between 750 and 800)<br/>
                    FA1 &gt; 800 (Ratings over 800)<br/>
                    FA40 &gt; 750 (Ratings over 750 and over 40 years of age)
                    <br/><br/>
                    If you are on the bubble between divisions it is generally recommended you play in the higher division, as you will improve over time. 
                </Typography>
                <Typography variant="h6" mt="1rem" textAlign="center">
                    <strong>Do I have to play all of the events to play in the Championship?</strong>
                </Typography>
                <Typography variant="body1" mt="0.5rem" textAlign="center">
                    No, players can play any number of events, but the more events you play the more points you can earn which will help you earn more prizes at the Tour Championship. 
                </Typography>
                <Typography variant="h6" mt="1rem">
                    <strong>When can I join the tour?</strong>
                </Typography>
                <Typography variant="body1" mt="0.5rem" textAlign="center">
                    You can join the tour at any time throughout the season, but the earlier you join the more points you will be able to earn. Players after that join after the 3rd event will be able to retroactively earn points from 1 event that previously participated in that season. Make sure to register early! 
                </Typography>
                <Typography variant="h6" mt="1rem">
                    <strong>Will there be any additional events?</strong>
                </Typography>
                <Typography variant="body1" mt="0.5rem" textAlign="center">
                    There are no planned additional events for the 2023 season, but you can expect there to be more events in future years!
                </Typography>
                <Typography variant="h6" mt="1rem" textAlign="center">
                    <strong>The division I want to play in isn’t part of the tour, what can I do?</strong>
                </Typography>
                <Typography variant="body1" mt="0.5rem" textAlign="center">
                    The divisions selected for the tour were based on popularity across the year based on previous years events in Manitoba. We are looking for consistently a minimum of 4 players in each division at all events, if you feel like another division should be added reach out to us at manilovefrisbee@gmail.com and we will consider it for future years.
                </Typography>
                <Typography variant="h6" mt="1rem" textAlign="center">
                    <strong>Can I earn points if there's less than 4 people in my division at an event?</strong>
                </Typography>
                <Typography variant="body1" mt="0.5rem" textAlign="center">
                    If an event has less than 4 people in a division, they may choose to participate in a division higher. Those players' points will still be attributed to their original division and will not incur a penalty.
                </Typography>
            </Stack>
        </Box>
    );
}
