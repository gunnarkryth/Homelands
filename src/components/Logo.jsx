import { Box, Typography } from "@mui/material";

export const Logo = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#AF7627",
        border: "black 5px solid",
        padding: "1rem",
      }}
    >
      <Typography variant="h1" color="secondary">
        Homelands
      </Typography>
    </Box>
  );
};
