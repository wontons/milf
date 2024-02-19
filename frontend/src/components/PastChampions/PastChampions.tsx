import { Box, Stack, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";

const rows = [
    {div: "MPO", name: "Marshall Toews"},
    {div: "MA1", name: "Mark Eldridge"},
    {div: "MA40", name: "Dan Edinborough"},
    {div: "MA2", name: "Sunny Dhillon"},
    {div: "MA3", name: "Trevor Menard"},
    {div: "FA1", name: "Camilla Tang"},
    {div: "FA2", name: "Sarah Mitchell"},
    {div: "FA3", name: "Dinah Talgoy"},
    {div: "Putting Champion", name: "Marshall Toews"},
    {div: "Kilter Long Drive", name: "David Sims"}
];

export function PastChampions() {
    return (
        <Box m="1rem" sx={{ overflowY: 'auto', overflowX: 'hidden'}}>
            <Stack direction="column" alignItems="center" mr="1rem">
                <Typography variant="h6">
                    2023
                </Typography>
                <Table sx={{ width: 400, margin: 'auto'}}>
                    <TableBody sx={{textAlign: 'center'}}>
                        <TableRow>
                            <TableCell />
                            <TableCell />
                        </TableRow>
                        {rows.map((row) => (
                            <TableRow>
                                <TableCell>
                                    {row.div}
                                </TableCell>
                                <TableCell>
                                    {row.name}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Stack>
        </Box>
    )   
}