import { Box, Stack, Typography } from "@mui/material";

const players = [
    'Adam Verrier 229055',
    'Airyn Clark 187630',
    'Alex MacNeil 215574',
    'Andrew Ridd 235325',
    'Anton Sawka 211169',
    'Dan Edinborough 103620',
    'David Harrison 208773',
    'Eric Giesbrecht 80850',
    'Eric Kulchycki	75272',
    'Jim Fraser 18727',
    'Jonathan Villaverde 204038',
    'Mike Evans 208478',
    'Nick Briere 126734',
    'Sarah Mitchell 242081',
    'Sunny Dhillon 234954',
    'Xavier Tomanek	89051',
]


export function Leaderboards () {
    return (
        <Box display="flex" flex={1} alignItems="top" justifyContent="center" sx={{ overflowY: 'auto', overflowX: 'hidden'}}>
            <Stack direction="column" alignItems="center" mr="1rem">
                <Typography variant="h4"><strong>Leaderboards</strong></Typography>
                {players.map((player) => (
                    <Typography variant="h6" key={player}>{player}</Typography>
                ))}
            </Stack>
        </Box>
    );
}
