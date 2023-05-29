import { Box } from "@mui/material";
import { TabProps } from "./types";

const LeaderboardTabPanel = (props: TabProps) => {
    const { children, index, value } = props;

    return (
        <Box hidden={value !== index} width="100%" mt="1rem">
            {value === index && (
                <>
                    {children}
                </>
            )}
        </Box>
    )
};

export default LeaderboardTabPanel;
