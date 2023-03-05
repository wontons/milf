import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Stack, Typography } from "@mui/material";
import { Event as IEvent, events } from './events_data';

import { Event, EventAvailable, Person, Place } from "@mui/icons-material";
import { useState } from "react";
import logo from "../../assets/basic_logo_no_circle.png";

export function Events() {
    const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);

    return (
        <Box m="1rem" sx={{ overflowY: 'auto', overflowX: 'hidden'}}>
            <Stack direction="column" alignItems="center">
                {!selectedEvent && events.map((event: IEvent) => (
                    <Card key={event.name} sx={{ m: '1rem', width: '50%'}}>
                        <CardActionArea onClick={() => setSelectedEvent(event)}>
                            <CardMedia 
                                component="img"
                                height="140"
                                image={event.logo_src || logo}
                                alt="mbtour"
                            />
                            <CardContent sx={{ background: '#f4f2f1' }}>
                                <Typography gutterBottom variant="h4">
                                    {event.name}
                                    {event.presenter && ` Presented by ${event.presenter}`}
                                    {event.sponsor && ` Sponsored by ${event.sponsor}`}
                                </Typography>
                                <Stack direction="row" spacing={2}>
                                    <Stack spacing={2}>
                                        <Chip icon={<EventAvailable />} label={`Registration Opens: ${event.registration_date}`} />
                                        <Chip icon={<Event />} label={`Tournament: ${event.date}`} />
                                    </Stack>
                                    <Stack spacing={2}>
                                        <Chip icon={<Place />} label={event.location} />
                                        <Chip icon={<Person />} label={event.td} />
                                    </Stack>
                                </Stack>
                            </CardContent>
                            <CardActions>
                                <Button href={event.dgs_link} target="_blank">REGISTER</Button>
                                <Button>MORE INFO</Button>
                                <Button href={event.pdga_link} target="_blank">PDGA</Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                ))}
            </Stack>
            { selectedEvent && (
                <Box onClick={() => setSelectedEvent(null)}>
                    <Box component="img" height="280" src={logo} alt="mbtour" />
                    <Typography>{selectedEvent.name}</Typography>
                </Box>
            )}
        </Box>
    );
}