import { Box, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { fa1, fa2, fa3, fa40, ma1, ma2, ma3, ma40, mpo } from "./fall_classic_2023";
import LeaderboardDesktopMenu from "./LeaderboardDesktopMenu";
import LeaderboardMobileMenu from "./LeaderboardMobileMenu";
import LeaderboardTabPanel from "./LeaderboardTabPanel";
import { divisions as _divisions, leaderboardColumns } from "./utils";


const divisions: Player[][] = [mpo, ma40, fa40, ma1, fa1, ma2, fa2, ma3, fa3]

interface LeaderTabProps {
    rows: Player[];
    division: string;
}

interface TabProps {
    rows: Player[];
    selected: number;
    index: number;
}

const LeaderTabPanel = (props: LeaderTabProps) => {
    const { rows, division } = props;

    console.log(rows)

    return (
        <Box style={{ marginBottom: '1rem'}}>
            <Typography>{division}</Typography>
            {rows.length === 0 ? (
                <Typography align="center">No available data</Typography>
            ) : (
                <DataGrid autoHeight rows={rows} columns={leaderboardColumns} hideFooter disableColumnMenu disableColumnFilter/>
            )}
        </Box>
    )
};

const TabPanel = (props: TabProps) => {
    const { rows, selected, index } = props;

    return (
        <LeaderboardTabPanel value={selected} index={index}>
            {rows.length === 0 ? (
                <Typography align="center">No available data</Typography>
            ) : (
                <DataGrid autoHeight rows={rows} columns={leaderboardColumns} hideFooter disableColumnMenu disableColumnFilter/>
            )}
        </LeaderboardTabPanel>
    );
};

const Leaderboards = () => {
    const [selected, setSelected] = useState<number>(0);
    const isMenuVertical = useMediaQuery({ query: '(max-width: 768px'});
    
    const handleChange = (e: React.SyntheticEvent, value: number) => {
        setSelected(value);
    };

    return (
        <Stack direction="column" alignItems="center" sx={{ overflowY: 'auto'}}>
            <Typography variant="h4"><strong>Leaderboards</strong></Typography>
            {isMenuVertical && (
                <LeaderboardMobileMenu selected={selected} handleChange={handleChange} />
            )}
            {!isMenuVertical && (
                <LeaderboardDesktopMenu selected={selected} handleChange={handleChange}/>  
            )}
            <LeaderboardTabPanel value={selected} index={0}>
                {divisions.map((division, i) => (
                    <LeaderTabPanel rows={division.slice(0,3)} division={_divisions[i+1]} key={i}/>
                ))}
            </LeaderboardTabPanel>
            {divisions.map((division, i) => (
                <TabPanel rows={division} selected={selected} index={i+1} key={i+1}/>
            ))}
        </Stack>
    )
}

export default Leaderboards;
