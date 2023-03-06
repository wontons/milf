import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import TourIcon from "@mui/icons-material/Tour";
import EventIcon from "@mui/icons-material/Event";
import PeopleIcon from "@mui/icons-material/People";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface NavInfo {
  name: string;
  link: string;
  icon: React.ReactNode;
}

const navIconStyle = { marginBottom: "2px", paddingRight: "8px" };

const navButtonStyle = {
  color: "#f4f2f1",
  mr: "1rem",
};

const pages: NavInfo[] = [
  { name: "TOUR", link: "/tour", icon: <TourIcon sx={navIconStyle} /> },
  { name: "EVENTS", link: "/events", icon: <EventIcon sx={navIconStyle} /> },
  {
    name: "ABOUT US",
    link: "/about-us",
    icon: <PeopleIcon sx={navIconStyle} />,
  },
  {
    name: "DISC GAME",
    link: "/discgame",
    icon: <SportsEsportsIcon sx={navIconStyle} />,
  },
];

export function NavBar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");

  const handleDrawerClick = () => {
    setOpen(!open);
  };

  const handleItemClicked = (info: NavInfo) => {
    setSelected(info.name);
    navigate(info.link);
  };

  const handleHomeClicked = () => {
    setSelected("");
    navigate("/");
  };

  const drawer = (
    <Box onClick={handleDrawerClick} textAlign="center">
      <Box
        alignItems="center"
        display="flex"
        flexDirection={"column"}
        my="1rem"
      >
        <Button onClick={handleHomeClicked} sx={{ color: "white" }}>
          <HomeIcon sx={navIconStyle} />
          <Typography variant="h6">
            HOME {/* TODO: replace HOME with the white logo */}
          </Typography>
        </Button>

        <Divider />
        <List>
          {pages.map((info: NavInfo) => (
            <ListItem
              key={info.name}
              disablePadding
              onClick={() => handleItemClicked(info)}
            >
              <ListItemButton
                alignItems="center"
                sx={{
                  color: info.name === selected ? "white" : "#b2b2b2",
                }}
              >
                {info.icon}
                <ListItemText
                  primary={<Typography variant="h6">{info.name}</Typography>}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <Box display="flex" mb="3rem">
      <AppBar sx={{ background: "#010024" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            size="large"
            onClick={handleDrawerClick}
            sx={{ display: { sm: "none" }, mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            alignItems="center"
            mr="1rem"
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            <Button sx={{ color: "white" }} onClick={handleHomeClicked}>
              <HomeIcon sx={navIconStyle} />
              <Typography
                variant="h6"
                sx={{ display: "flex", alignItems: "center" }}
              >
                HOME
              </Typography>
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {pages.map((info) => (
              <Button
                sx={{
                  ...navButtonStyle,
                  color: info.name === selected ? "white" : "#b2b2b2",
                }}
                onClick={() => handleItemClicked(info)}
              >
                {info.icon}
                <Typography variant="h6">{info.name}</Typography>
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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { width: "70%", background: "#010024" },
          }}
          variant="temporary"
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
