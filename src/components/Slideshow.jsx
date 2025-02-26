import { Box, CircularProgress, IconButton } from "@mui/material";
import useFetch from "../hooks/useFetch";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";

export const Slideshow = () => {
  const { data, loading, error, request } = useFetch();

  //Liste af billeder
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleGet = () => {
      request("https://api.mediehuset.net/homelands/images");
    };
  }, [request]);

  if (loading) return <CircularProgress color="accent.primary" />;

  return (
    <Box>
      <IconButton aria-label="" onClick={handleNext}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};
