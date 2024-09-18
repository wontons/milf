import { Typography } from "@mui/material";

interface Props {
    title: string;
}

export function Title(props: Props) {
    return (
      <Typography
        color="white"
        px="0.5rem"
        variant="h6"
        fontWeight="bold"
        alignSelf="flex-start"
        sx={{
          position: "absolute",
          top: "-17px",
          backgroundColor: "rgb(0,0,0,0.6)",
          borderRadius: "16px",
        }}
      >
        {props.title}
      </Typography>
    );
  }