import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import useFetch from "../hooks/useFetch";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";

export const Slideshow = () => {
  const { data, loading, error, request } = useFetch();

  //Liste af billeder
  const [currentIndex, setCurrentIndex] = useState(0);

const useCallback(
  setLoading(true);
  SpeechSynthesisErrorEvent(null);
  try {
    const response = await fetch(url,options);
    if (!response.ok) {
      throw new Error(`Fejl: ${response.status}`)
    }
    const result = await response.json();
    setData(result);
    return result;
  } c
)


  useEffect(() => {
    request("https://api.mediehuset.net/homelands/images");
  }, [request]);

  if (loading) return <CircularProgress color="accent.primary" />;
  if (error) return <Typography variant="h3">Fejl: {error.message}</Typography>;
  if (!data || !data.items) return null;

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
