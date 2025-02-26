import { Box, IconButton } from "@mui/material";
import useFetch from "../hooks/useFetch";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Slideshow = () => {

  const = {data,loading, error} = useFetch()

  return (
    <Box>
      <IconButton aria-label="" onClick={handleNext}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};
