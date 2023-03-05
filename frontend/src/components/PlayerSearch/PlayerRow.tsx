import { TableCell, TableRow, Typography } from "@mui/material";

interface Props {
    player: Player;
}

export function PlayerRow(props: Props) {
    const { player } = props;

    return (
    // <Box
    //     boxShadow={1} 
    //     borderRadius={4} 
    //     p="1rem" 
    //     flex={1} 
    //     m="1rem"
    //     sx={{
    //         '&:hover': {
    //         bgcolor: '#f8f8f8',
    //         cursor: 'pointer',
    //         }
    //     }}
    //     onClick={() => {}}
    // >
    //     <Typography></Typography>
    // </Box>
    <TableRow key={player.pdga_number}>
        <TableCell>
            <Typography variant="body1">{player.pdga_number}</Typography>
        </TableCell>
        <TableCell>
            <Typography variant="body1">{player.first_name} {player.last_name}</Typography>
        </TableCell>
        <TableCell>
            <Typography variant="body1">{player.rating || '-'}</Typography>
        </TableCell>
        <TableCell>
            <Typography variant="body1">
                {player.city ? `${player.city}, `: ''} 
                {player.state_prov ? `${player.state_prov}, ` : ''} 
                {player.country ? `${player.country}` : '-'}
            </Typography>
        </TableCell>
    </TableRow>
    );
}