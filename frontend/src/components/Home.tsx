import { PlayArrow } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/MBDGTlogoblack_cropped.png";
import Upcoming from "./Upcoming";

const url =
  "https://www.discgolfscene.com/tournaments/2023_Manitoba_Disc_Golf_Tour_2023";

export function Home() {
  const navigate = useNavigate();

  return (
    <Box
      m="1rem"
      display={{sm: "inline", lg: "flex"}}
      flex={1}
      alignItems="top"
      sx={{ overflowY: "auto", overflowX: "hidden" }}
    >
      <Box width="25%" />
      <Stack justifyContent="top" alignItems="center" flex={1}>

        <Box component="img" src={logo} alt="tour" height={{ xs: "200px", sm: "400px"}} />
        {/* <Typography mt="1rem" sx={{ typography: { xs: "h4", sm: "h2"}}}>Presented By</Typography>
        <Box component="img" src={dr_logo_bar} alt="disc republic" height={{ sm: "105px", md:"170px"}} display={{ xs: 'none', sm: 'block' }}/>
        <Box component="img" src={dr_logo_vert} alt="disc republic" height="100px" display={{ xs: 'block', sm: 'none' }}/> */}
        <Button
          sx={{ mt: "1rem", width: { xs: "75%", sm: "50%"}}}
          variant="contained"
          endIcon={<PlayArrow />}
          onClick={() => navigate("/tour")}
        >
          LEARN MORE
        </Button>
        <Button
          sx={{ mt: "1rem", width: { xs: "75%", sm: "50%"}}}
          variant="contained"
          endIcon={<PlayArrow />}
          href={url}
          target="_blank"
        >
          REGISTER
        </Button>
        {/* <Button
          sx={{ mt: "1rem", width: { xs: "75%", sm: "50%"}}}
          variant="contained"
          endIcon={<PlayArrow />}
          onClick={() => navigate('/leaderboards')}
        >
          LEADERBOARDS
        </Button> */}
      </Stack>
      <Box width={{ md: "100%", lg: "25%" }} justifyContent="center" alignItems="center">
        <Upcoming />
      </Box>
    </Box>
  );
}
