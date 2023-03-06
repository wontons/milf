import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Divider, Typography } from "@mui/material";
import { Event, events } from "../../data/events_data";

function Title() {
  return (
    <Typography
      px="0.5rem"
      variant="h6"
      fontWeight="bold"
      sx={{
        position: "absolute",
        top: "-17px",
        backgroundColor: "#f8f8f8",
        color: "#4a4a4a",
      }}
    >
      Upcoming Events
    </Typography>
  );
}

interface Props {
  event: Event;
}

function SmallEvent(props: Props) {
  const { event } = props;
  return (
    <Box my="1rem" px="0.5rem">
      <Box display={{ xs: "inline", sm: "flex"}} alignItems="center" justifyContent="space-between">
        <Typography variant="subtitle1" fontWeight="bold">
          {event.name}
        </Typography>
        <Typography sx={{ color: "#6a6a6a", fontSize: "0.8rem" }}>
          {event.date}
        </Typography>
      </Box>
      <Box display={"flex"} alignItems="center" fontSize="0.9rem">
        <LocationOnIcon fontSize="small" />
        <Typography sx={{ pl: "0.2rem", fontSize: "inherit" }}>
          {event.location}
        </Typography>
      </Box>
    </Box>
  );
}

export default function UpcomingView() {
  return (
    <Box
      m="2rem"
      p="1rem"
      border="2px solid #a1a1a1"
      borderRadius={4}
      sx={{ position: "relative", background: "#f8f8f8" }}
    >
      <Title />
      {events.map((e, i) => {
        let ret = [<SmallEvent event={e} />];
        if (i < events.length - 1) {
          ret.push(<Divider />);
        }
        return ret.map((c) => c);
      })}
    </Box>
  );
}
