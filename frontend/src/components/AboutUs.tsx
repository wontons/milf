import { Box, Typography } from "@mui/material";

export function AboutUs() {
    return (
        <Box m="1rem" display="flex" flex={1} alignItems="top" justifyContent="center">
            <Typography variant="h6" width="50%" textAlign="center">
            The 2023 Manitoba Tour aims to create a season long competition for players to play for prizes and glory. Tour members will be competing for points at each tour event to qualify for the Tour Championship at the end of the season. Players will earn points by placing well in their respective divisions, earning more the better they play. The top players at in each division at the end of the season will then battle one last time in the Tour Championship to crown a Champion and earn prizes.
            </Typography>
        </Box>
    );
}