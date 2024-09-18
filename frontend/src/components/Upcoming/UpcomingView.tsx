import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Divider, Typography } from "@mui/material";
import { events } from "../../data/events_data";
import { Title } from "../Title";

interface Props {
  event: IEvent;
}

function SmallEvent(props: Props) {
  const { event } = props;
  return (
    <Box my="1rem" px="0.5rem">
      <Box display={{ xs: "inline", sm: "flex"}} alignItems="center" justifyContent="space-between">
        <Typography variant="subtitle1" fontWeight="bold">
          {event.title}
        </Typography>
        <Typography sx={{ fontSize: "0.8rem", textAlign: "right" }}>
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
      color="white"
      m="2rem"
      p="1rem"
      borderRadius={4}
      sx={{ position: "relative", background: "rgba(0,0,0,0.5)" }}
    >
      <Title title="Upcoming Events" />
      <Box height={{ xs: "20px", sm: "0px", lg: "20px"}} />
      {events.map((e, i) => {
        let ret = [<SmallEvent event={e} key={e.title}/>];
        if (i < events.length - 1) {
          ret.push(<Divider key={i}/>);
        }
        return ret.map((c) => c);
      })}
    </Box>
  );
}
