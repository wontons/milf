import { Box, Stack } from "@mui/material";
import { events } from "../../data/events_data";
import { EventCard } from "./EventCard";

export function Events() {

    return (
        <Box color="white" p="2rem" m="2rem" borderRadius={4} sx={{ background: 'rgb(0,0,0,0.6)'}}>
            <Stack direction="column" alignItems="center">
                {events.map((event) => (
                   <EventCard {...event} />
                ))}
            </Stack>
        </Box>
    );
}