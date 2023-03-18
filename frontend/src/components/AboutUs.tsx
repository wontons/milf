import { Box, Typography } from "@mui/material";

export function AboutUs() {
    return (
        <Box m="1rem" display="flex" flex={1} alignItems="top" justifyContent="center">
            <Typography variant="h6" width="50%" textAlign="center">
                Man I Love Frisbee aims to promote the sport of disc golf in Manitoba. Our goal is to help introduce the sport to new players and provide events and other opportunities to our rapidly growing community. We are excited to be a part of disc golf in Manitoba and help it grow!
            </Typography>
        </Box>
    );
}