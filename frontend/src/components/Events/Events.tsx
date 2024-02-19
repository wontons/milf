import { Box, Stack } from "@mui/material";
import { events } from "../../data/events_data";
import { EventCard } from "./EventCard";

export function Events() {

    return (
        <Box m="1rem" sx={{ overflowY: 'auto', overflowX: 'hidden'}}>
            <Stack direction="column" alignItems="center">
                {events.map((event) => (
                   <EventCard {...event} />
                ))}
            </Stack>
        </Box>
    );
}