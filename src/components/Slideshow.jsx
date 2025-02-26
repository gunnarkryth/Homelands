import { Box, IconButton } from "@mui/material";
import useFetch from "../hooks/useFetch";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Slideshow = () => {
  const { data, loading, error, request } = useFetch();

  const handleGet = () => {
    request("https://api.mediehuset.net/homelands/images");
  };

  return (
    <Box>
      <IconButton aria-label="" onClick={handleNext}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};
