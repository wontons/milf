import { Box, CircularProgress, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import { useAPI } from '../hooks';

export function TopTenRatedPlayers() {
    const { api } = useAPI();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [players, setPlayers] = useState<any[]>([]);

    useEffect(() => {
        setLoading(true);
        api<any[]>('get', 'http://localhost:5000/players?state_prov=MB&class=P').then((resp) => {
            setPlayers(resp.data);
        }).catch((e) => {
            setError(e?.response?.data?.message || "failed to get players")
        }).finally(() => {
            setLoading(false);
        });
    }, [api]);

    if (loading){
        return (
            <Stack>
                <CircularProgress/>
            </Stack>
        )
    }

    if (error){
        return (
            <Stack>
                <Typography>{error}</Typography>
            </Stack>
        )
    }

    return (
        <Box>
            <Typography>Top 10 Players In Manitoba</Typography>
            { players.length > 0 && players.sort((a, b) => a.rating > b.rating ? -1 : 1).map((player, idx) => (
                <Box key={idx}>
                    <Typography>{player.first_name} {player.last_name} {player.rating}</Typography>
                </Box>
            ))}
        </Box>
    )
}