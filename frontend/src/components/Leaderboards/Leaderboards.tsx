import { Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { fa1, fa2, fa3, fa40, ma1, ma2, ma3, ma40, mpo } from "./fall_classic_2023";
import LeaderboardDesktopMenu from "./LeaderboardDesktopMenu";
import LeaderboardMobileMenu from "./LeaderboardMobileMenu";
import LeaderboardTabPanel from "./LeaderboardTabPanel";
import { leaderboardColumns } from "./utils";

const divisions: Player[][] = [[], mpo, ma40, fa40, ma1, fa1, ma2, fa2, ma3, fa3]

interface TabProps {
    rows: Player[];
    selected: number;
    index: number;
}

const TabPanel = (props: TabProps) => {
    const { rows, selected, index } = props;

    return (
        <LeaderboardTabPanel value={selected} index={index}>
            {rows.length === 0 ? (
                <Typography align="center">No available data</Typography>
            ) : (
                <DataGrid rows={rows} columns={leaderboardColumns} hideFooter disableColumnMenu disableColumnFilter/>
            )}
        </LeaderboardTabPanel>
    );
};

const Leaderboards = () => {
    const [selected, setSelected] = useState<number>(1);
    const isMenuVertical = useMediaQuery({ query: '(max-width: 768px'});
    
    const handleChange = (e: React.SyntheticEvent, value: number) => {
        setSelected(value);
    };

    return (
        <Stack direction="column" alignItems="center" height="50%">
            <Typography variant="h4"><strong>Leaderboards</strong></Typography>
            {isMenuVertical && (
                <LeaderboardMobileMenu selected={selected} handleChange={handleChange} />
            )}
            {!isMenuVertical && (
                <LeaderboardDesktopMenu selected={selected} handleChange={handleChange}/>  
            )}
            {divisions.map((division, i) => (
                <TabPanel rows={division} selected={selected} index={i} key={i}/>
            ))}
        </Stack>
    )
}

export default Leaderboards;
