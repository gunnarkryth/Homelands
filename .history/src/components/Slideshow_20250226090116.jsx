import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import useFetch from "../hooks/useFetch";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState, useCallback } from "react";

export const Slideshow = () => {
  const [data, setData] = useState(null);
  const [data, setData] = useState(null);
  const [data, setData] = useState(null);

  //Liste af billeder
  const [currentIndex, setCurrentIndex] = useState(0);

  const request = useCallback(async (url, options) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
      return result;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const lastThreeImages = data.items.slice(-3);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % lastThreeImages.length);
  };

  return (
    <Box>
      <img
        src={lastThreeImages[currentIndex].image[0]}
        alt={lastThreeImages[currentIndex].description}
        style={{ width: "100%", height: "auto" }}
      />
      <IconButton aria-label="" onClick={handleNext}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};
