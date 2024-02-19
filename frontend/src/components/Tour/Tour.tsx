import { PlayArrow } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";


const url = "https://www.discgolfscene.com/tournaments/2023_Manitoba_Disc_Golf_Tour_2023"

export function Tour () {
 
    return (
        <Box display="flex" flex={1} alignItems="top" justifyContent="center" sx={{ overflowY: 'auto', overflowX: 'hidden'}}>
            <Stack direction="column" alignItems="center" mr="1rem">
                <Typography variant="h2" textAlign="center">The Manitoba Disc Golf Tour</Typography>
               <Typography variant="body1" textAlign="center" sx={{ mt: '0.5rem'}}>
                    The Manitoba Disc Golf Tour is a new way for players to compete over the entire disc golf season to earn points and win prizes. Players will earn points for playing in tour events and face off at the end of the year in the Tour Championship! 
                </Typography>
                <Typography variant="h5" mt="1rem"><strong>Registration</strong></Typography>
                <Typography variant="body1" mt="0.5rem" textAlign="center">
                    Signing up for the Manitoba Tour is Quick and Easy! Registration is handled through Disc Golf Scene. Everyone who signs up for the Tour will receive a custom Tour hat, as well as entry to the Tour Championship on October 5th and 6th. The cost to sign up for the tour is $30 before the first event of the season (Spring Fling, April 13th) then it goes up to $40 before the halfway mark (Provincials, July 13th) and is $50 if you sign up after. If you are unable to register through Disc Golf Scene for any reason, send us an email at manilovefrisbee@gmail.com and we will be able to help you out.
                </Typography>
                <Button variant="contained" href={url} target="_blank" endIcon={<PlayArrow />} sx={{ mt: '1rem', width: { xs: '75%', sm: '50%'} }}>
                    REGISTER NOW
                </Button>
                <Typography variant="h5" mt="1rem"><strong>Points</strong></Typography>
                <Typography variant="body1" mt="0.5rem" textAlign="center">
                    Everyone who participates in a Tour Event will earn points for that event as follows; 10 points per player you finished above in your division, plus 1 bonus point for each stroke you won by.
                    <br/><br/>
                    Players are able to earn points in multiple divisions if they play in different divisions throughout the year, but they are only able to play and earn prizes in a single division at the Tour Championship.
                    <br/><br/>
                    Each player's Tour Points at the end of the season will be their top 3 events that year. (If you played in 3 or less events it will be all of your points you earned) The Tour Championship is worth triple points (30 points per player and 3 points per stroke) making it worth just as much as the season.
                </Typography>
                <Typography variant="h5" mt="1rem"><strong>Tour Championship</strong></Typography>
                <Typography variant="body1" mt="0.5rem" textAlign="center">
                    All players who sign up for the tour are automatically registered for the Tour Championship. (If you need to change divisions throughout the season send us an email at manilovefrisbee@gmail.com and we can move you) Final Standings at the the end of the Tour Championship will be your combined score from the regular season as well as the Championship, so winning the season or the Championship alone does not guarantee first place.
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
                    MA40 &gt; 880 (Ratings above 880 and over 40 years of age)<br/>
                    MA50 &gt; 880 (Ratings above 880 and over 50 years of age)
                    <br/><br/>
                    Female Divisions:<br/>
                    FA3 &lt; 750 (Ratings under 750)<br/>
                    FA2 &lt; 800 (Ratings between 750 and 800)<br/>
                    FA1 &lt; 800 (Ratings between 800 and 850)<br/>
                    FPO &gt; 850 (Ratings over 850)<br/>
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
                    <strong>When can I join the Tour?</strong>
                </Typography>
                <Typography variant="body1" mt="0.5rem" textAlign="center">
                    Players can join the tour at any time, but you can sign up early to get the early bird discounts! Make sure to sign up early and save those dollars!
                </Typography>
                <Typography variant="h6" mt="1rem" textAlign="center">
                    <strong>The division I want to play in isn’t part of the tour, what can I do?</strong>
                </Typography>
                <Typography variant="body1" mt="0.5rem" textAlign="center">
                    The divisions selected for the tour were based on popularity across the year based on previous years events in Manitoba. We are looking for consistently a minimum of 4 players in each division at all events, if you feel like another division should be added reach out to us at manilovefrisbee@gmail.com and we will consider it for future years.
                </Typography>
            </Stack>
        </Box>
    );
}
