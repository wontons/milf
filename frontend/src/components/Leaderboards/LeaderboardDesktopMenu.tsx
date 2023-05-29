import { Tab, Tabs } from "@mui/material";
import { MenuProps } from "./types";
import { divisions } from "./utils";

const LeaderboardDesktopMenu = (props: MenuProps) => {
    const { selected, handleChange } = props;

    return (
        <Tabs value={selected} onChange={handleChange}>
            {divisions.map((divison) => (
                <Tab label={divison} key={divison} />
            ))}
        </Tabs>
    );    
};

export default LeaderboardDesktopMenu;
