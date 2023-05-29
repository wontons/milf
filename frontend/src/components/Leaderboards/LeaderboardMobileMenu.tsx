import { Button, Menu, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { MenuProps } from "./types";
import { divisions } from "./utils";

const LeaderboardMobileMenu = (props: MenuProps) => {
    const { selected, handleChange } = props;
    const [anchor, setAnchor] = useState<HTMLElement | null>(null);
    const open = Boolean(anchor);

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        setAnchor(e.currentTarget);
    };

    const handleClose = () => {
        setAnchor(null);
    };

    return (
        <>
            <Button onClick={handleClick} variant="contained">
                {divisions[selected]}
            </Button>
            <Menu open={open} onClose={handleClose} anchorEl={anchor} anchorOrigin={{ vertical: 'top', horizontal: 'left'}}>
                <Tabs orientation="vertical" value={selected} onChange={handleChange} onClick={handleClose}>
                    {divisions.map((divison) => (
                        <Tab label={divison} key={divison} />
                    ))}
                </Tabs>
            </Menu>
        </>
    );   
};

export default LeaderboardMobileMenu;
