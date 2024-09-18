import { PlayArrow } from "@mui/icons-material";
import { Button, Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/MBDGTlogowhite.png";
import Upcoming from "./Upcoming";
import { Leaderboards } from './Leaderboards';

const url =
  "https://www.discgolfscene.com/tournaments/2023_Manitoba_Disc_Golf_Tour_2023";

export function Home() {
  const navigate = useNavigate();

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Stack alignItems="center">
        <img alt="Logo" style={{ height: "300px", width: "300px" }} src={logo} />
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
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Leaderboards />
      </Grid>
      <Grid item xs={3}>
        <Upcoming />
      </Grid>
    </Grid>
  );
}
