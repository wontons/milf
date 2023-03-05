import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface NavInfo {
    name: string;
    link: string;
}

const pages: NavInfo[] = [
    {name: "tour", link: "/tour"},
    {name: "events", link: "/events"},
    {name: "about us", link: "/about-us"},
    {name: "disc game", link: "/discgame"},
];

const navButtonStyle = {
    color: '#f4f2f1',
    mr: '1rem',
};

export function NavBar() {
    const navigate = useNavigate();
    const [open, setOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>('');

    const handleDrawerClick = () => {
        setOpen(!open);
    };

    const handleItemClicked = (info: NavInfo) => {
        setSelected(info.name);
        navigate(info.link);
    };

    const handleHomeClicked = () => {
        setSelected('');
        navigate("/");
    }

    const drawer = (
        <Box onClick={handleDrawerClick} textAlign="center" sx={{background: '#1245ED'}}>
            <Box alignItems="center" display="flex" justifyContent="center" my="1rem">
                <Button onClick={handleHomeClicked}>
                    <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', color: 'white'}}>MI<FavoriteIcon />F</Typography>
                </Button>
            </Box>
            <Divider />
            <List>
                {pages.map((info: NavInfo) => (
                    <ListItem key={info.name} disablePadding onClick={() => handleItemClicked(info)}>
                        <ListItemButton sx={{ textAlign: 'center'}}>
                            <ListItemText primary={<Typography variant="h6" color={info.name === selected ? 'black' : 'white'}><strong>{info.name}</strong></Typography>}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box display="flex" mb="3rem">
            <AppBar sx={{background: '#1245ED'}}>
                <Toolbar>
                    <IconButton color="inherit" edge="start" size="large" onClick={handleDrawerClick} sx={{ display: {sm: 'none'}, mr: 2}}>
                        <MenuIcon />
                    </IconButton>
                    <Box alignItems="center" mr="1rem" sx={{ display: { xs: 'none', sm: 'flex'}}}>
                        <Button sx={{ color: 'white'}} onClick={handleHomeClicked}>
                            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center'}}>MI<FavoriteIcon />F</Typography>
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' }}}>
                        {pages.map((info) => (
                            <Button sx={navButtonStyle} onClick={() => handleItemClicked(info)}>
                                <Typography variant="h6" color={info.name === selected ? 'black' : 'white'}><strong>{info.name}</strong></Typography>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box>
                <Drawer 
                    open={open} 
                    onClose={handleDrawerClick} 
                    sx={{ 
                        display: { xs: 'block', sm: 'none' }, 
                        '& .MuiDrawer-paper': { boxSixing: 'border-box', width: 200 },
                        }} 
                    variant="temporary">
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}