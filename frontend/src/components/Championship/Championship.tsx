import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CircleIcon from '@mui/icons-material/Circle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import GroupsIcon from '@mui/icons-material/Groups';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Box, Card, CardContent, ListItemButton, ListItemText, Stack, Typography } from "@mui/material";
export function Championship() {

    return (
        <Box m="1rem" sx={{ overflowY: 'auto', overflowX: 'hidden'}}>
            <Stack direction="column" alignItems="center" mt="1rem">
                <Card sx={{ minWidth: 275, mb: '1rem' }} variant="outlined" >
                    <CardContent>
                        <Typography variant="h4" color="text.primary" ml="1rem">
                            Saturday
                        </Typography>
                        <ListItemButton>
                            <CalendarTodayIcon sx={{ mr: '1rem'}}/>
                            <ListItemText primary={<Typography variant="h6">September 30th</Typography>} />
                        </ListItemButton>
                        <ListItemButton>
                            <GolfCourseIcon sx={{ mr: '1rem'}}/>
                            <ListItemText primary={<Typography variant="h6">Stony Mountain Disc Golf Course</Typography>} />
                        </ListItemButton>
                        <ListItemButton>
                            <LocationOnIcon sx={{ mr: '1rem'}}/>
                            <ListItemText primary={<Typography variant="h6">31 Dufferin Dr, Stony Mountain, MB R0C 3A0</Typography>} />
                        </ListItemButton>
                        <ListItemButton>
                            <AssignmentTurnedInIcon sx={{ mr: '1rem'}}/>
                            <ListItemText primary={<Typography variant="h6">Check-in 9:00am</Typography>} />
                        </ListItemButton>
                        <ListItemButton>
                            <GroupsIcon sx={{ mr: '1rem'}}/>
                            <ListItemText primary={<Typography variant="h6">Player Meeting 10:00am</Typography>} />
                        </ListItemButton>
                        <ListItemButton>
                            <CalendarTodayIcon sx={{ mr: '1rem'}}/>
                            <ListItemText primary={<Typography variant="h6">Round 1 shotgun start 10:30am</Typography>} />
                        </ListItemButton>
                        <ListItemButton>
                            <WorkspacePremiumIcon sx={{ mr: '1rem'}}/>
                            <ListItemText primary={<Typography variant="h6">Putting Championship Qualifier 2:00pm</Typography>} />
                        </ListItemButton>
                        <Stack direction="row">
                            <Box>
                                <ListItemButton>
                                    <CircleIcon sx={{ mr: '1rem', color: 'blue'}}/>
                                    <ListItemText primary={<Typography variant="h6">Blues (Longs)</Typography>} />
                                </ListItemButton>
                                <Typography variant="body1" textAlign="center">MPO</Typography>
                                <Typography variant="body1" textAlign="center">MA40</Typography>
                                <Typography variant="body1" textAlign="center">FA1</Typography>
                                <Typography variant="body1" textAlign="center">MA1</Typography>
                                <Typography variant="body1" textAlign="center">MA2</Typography>
                            </Box>
                            <Box>
                                <ListItemButton alignItems="center">
                                    <CircleIcon sx={{ mr: '1rem', color: 'red'}}/>
                                    <ListItemText primary={<Typography variant="h6">Reds (Shorts)</Typography>} />
                                </ListItemButton>
                                <Typography variant="body1" textAlign="center">FA40</Typography>
                                <Typography variant="body1" textAlign="center">FA2</Typography>
                                <Typography variant="body1" textAlign="center">FA3</Typography>
                                <Typography variant="body1" textAlign="center">MA3</Typography>
                            </Box>
                        </Stack>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275, mb: '1rem' }} variant="outlined" >
                    <CardContent>
                        <Typography variant="h4" color="text.primary" ml="1rem">
                            Sunday
                        </Typography>
                       
                        <ListItemButton>
                            <CalendarTodayIcon sx={{ mr: '1rem'}}/>
                            <ListItemText primary={<Typography variant="h6">October 1st</Typography>} />
                        </ListItemButton>
                        <ListItemButton>
                            <GolfCourseIcon sx={{ mr: '1rem'}}/>
                            <ListItemText primary={<Typography variant="h6">Stony Mountain Disc Golf Course</Typography>} />
                        </ListItemButton>
                        <ListItemButton>
                            <LocationOnIcon sx={{ mr: '1rem'}}/>
                            <ListItemText primary={<Typography variant="h6">31 Dufferin Dr, Stony Mountain, MB R0C 3A0</Typography>} />
                        </ListItemButton>
                        <ListItemButton>
                            <AssignmentTurnedInIcon sx={{ mr: '1rem'}}/>
                            <ListItemText primary={<Typography variant="h6">Last Chance To Qualify For Putting Championship 9:00am</Typography>} />
                        </ListItemButton>
                        <ListItemButton>
                            <GroupsIcon sx={{ mr: '1rem'}}/>
                            <ListItemText primary={<Typography variant="h6">Player Meeting 10:00am</Typography>} />
                        </ListItemButton>
                        <ListItemButton>
                            <CalendarTodayIcon sx={{ mr: '1rem'}}/>
                            <ListItemText primary={<Typography variant="h6">Round 2 shotgun start 10:30am</Typography>} />
                        </ListItemButton>
                        <ListItemButton>
                            <WorkspacePremiumIcon sx={{ mr: '1rem'}}/>
                            <ListItemText primary={<Typography variant="h6">Putting Championship 2:00pm</Typography>} />
                        </ListItemButton>
                        <ListItemButton>
                            <EmojiEventsIcon sx={{ mr: '1rem'}}/>
                            <ListItemText primary={<Typography variant="h6">Awards 2:30pm</Typography>} />
                        </ListItemButton>
                        <Stack direction="row">
                            <Box>
                                <ListItemButton>
                                    <CircleIcon sx={{ mr: '1rem', color: 'blue'}}/>
                                    <ListItemText primary={<Typography variant="h6">Blues (Longs)</Typography>} />
                                </ListItemButton>
                                <Typography variant="body1" textAlign="center">MPO</Typography>
                                <Typography variant="body1" textAlign="center">MA1</Typography>
                            </Box>
                            <Box>
                                <ListItemButton alignItems="center">
                                    <CircleIcon sx={{ mr: '1rem', color: 'red'}}/>
                                    <ListItemText primary={<Typography variant="h6">Reds (Shorts)</Typography>} />
                                </ListItemButton>
                                <Typography variant="body1" textAlign="center">FA40</Typography>
                                <Typography variant="body1" textAlign="center">MA40</Typography>
                                <Typography variant="body1" textAlign="center">FA1</Typography>
                                <Typography variant="body1" textAlign="center">FA2</Typography>
                                <Typography variant="body1" textAlign="center">MA2</Typography>
                                <Typography variant="body1" textAlign="center">FA3</Typography>
                                <Typography variant="body1" textAlign="center">MA3</Typography>
                            </Box>
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
        </Box>
    );
}
