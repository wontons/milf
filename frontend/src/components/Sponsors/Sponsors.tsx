import { Box, Stack, Typography } from "@mui/material";
import dr_logo_bar from "../../assets/DR_bar.png";
import dr_logo_vert from "../../assets/DR_vert.png";

export function Sponsors () {
    return (
        <Box display="flex" flex={1} alignItems="top" justifyContent="center" sx={{ overflowY: 'auto', overflowX: 'hidden'}}>
            <Stack direction="column" alignItems="center" mr="1rem">
                <Typography variant="h4"><strong>Sponsors</strong></Typography>
                <Typography variant="h5" mt="1rem">Title Sponsor</Typography>
                <Box component="img" src={dr_logo_bar} alt="disc republic" height={{ sm: "105px", md:"170px"}} display={{ xs: 'none', sm: 'block' }}/>
                <Box component="img" src={dr_logo_vert} alt="disc republic" height="100px" display={{ xs: 'block', sm: 'none' }}/>
            </Stack>
        </Box>
    );
}