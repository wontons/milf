import { Box, Stack, Typography } from "@mui/material";
import accurate_leasing from "../../assets/AccurateLeasing.png";
import dr_logo_bar from "../../assets/DR_bar.png";
import dr_logo_vert from "../../assets/DR_vert.png";
import kilter_brewing_co from "../../assets/KilterBrewingCo.webp";
import odins_eye from "../../assets/OdinsEye.png";
import avail from "../../assets/avail.png";
import local_public_eatery from "../../assets/localpubliceatery.png";
import victory_pints from "../../assets/victorypints.webp";

export function Sponsors () {
    return (
        <Box display="flex" flex={1} alignItems="top" justifyContent="center" sx={{ overflowY: 'auto', overflowX: 'hidden'}}>
            <Stack direction="column" alignItems="center" mr="1rem" mt="1rem">
                <Typography variant="h5" mt="1rem"><strong>Title Sponsor</strong></Typography>
                <Box component="img" src={dr_logo_bar} alt="disc republic" height={{ sm: "105px", md:"170px"}} display={{ xs: 'none', sm: 'block' }}/>
                <Box component="img" src={dr_logo_vert} alt="disc republic" height="100px" mb="3rem" display={{ xs: 'block', sm: 'none' }}/>
                <Typography variant="h5" mb="1rem"><strong>Sponsors</strong></Typography>
                <Box component="img" bgcolor="black" src={kilter_brewing_co} alt="kilter brewing co" height="200px" display={{ xs: 'none', sm: 'block' }} mb="1rem"/>
                <Box component="img" bgcolor="black" src={kilter_brewing_co} alt="kilter brewing co" height="100px" display={{ xs: 'block', sm: 'none' }} mb="1rem"/>
                <Box component="img" src={victory_pints} alt="victory pints" height="200px" display={{ xs: 'none', sm: 'block' }} mb="1rem"/>
                <Box component="img" src={victory_pints} alt="victory pints" height="100px" display={{ xs: 'block', sm: 'none' }} mb="1rem"/>
                <Box component="img" src={accurate_leasing} alt="accurate leasing" height="200px" display={{ xs: 'none', sm: 'block' }} mb="1rem"/>
                <Box component="img" src={accurate_leasing} alt="accurate leasing" height="100px" display={{ xs: 'block', sm: 'none' }} mb="1rem"/>
                <Box component="img" src={local_public_eatery} alt="local public eatery" height="200px" display={{ xs: 'none', sm: 'block' }} mb="1rem"/>
                <Box component="img" src={local_public_eatery} alt="local public eatery" height="100px" display={{ xs: 'block', sm: 'none' }} mb="1rem"/>
                <Box component="img" src={avail} alt="avail" height="300px" display={{ xs: 'none', sm: 'block' }} mb="1rem"/>
                <Box component="img" src={avail} alt="avail" height="200px" display={{ xs: 'block', sm: 'none' }} mb="1rem"/>
                <Box component="img" src={odins_eye} alt="odins eye" height="300px" display={{ xs: 'none', sm: 'block' }} mb="1rem"/>
                <Box component="img" src={odins_eye} alt="odins eye" height="200px" display={{ xs: 'block', sm: 'none' }} mb="1rem"/>
            </Stack>
        </Box>
    );
}