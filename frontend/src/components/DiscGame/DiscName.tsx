import { Box, Typography } from "@mui/material";

interface Props {
    name: string;
}

export function DiscName(props: Props) {
    const { name } = props;

    const getBgColor = (name: string) => {
        if (name === "?") {
            return "background.paper";
        }

        return "lightGreen";
    };

    return (
        <Box sx={{ boxShadow: 1, borderRadius: 2, p: 2, m: '0.5rem', minWidth: 100, bgcolor: getBgColor(name), textAlign: 'center'}}>
            <Typography>{name}</Typography>
        </Box>
    );
}