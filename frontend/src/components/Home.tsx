import { PlayArrow } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/MBDGTlogoblack.png";
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
        <Box component="img" src={logo} alt="tour" height="500px" />
        <Button
          sx={{ mt: "1rem" }}
          variant="contained"
          endIcon={<PlayArrow />}
          onClick={() => navigate("/tour")}
        >
          LEARN MORE
        </Button>
        <Button
          sx={{ mt: "1rem" }}
          variant="contained"
          endIcon={<PlayArrow />}
          href={url}
          target="_blank"
        >
          REGISTER
        </Button>
      </Stack>
      <Box width={{ md: "100%", lg: "25%" }} justifyContent="center" alignItems="center">
        <Upcoming />
      </Box>
    </Box>
  );
}
