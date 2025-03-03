import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState, useCallback } from "react";

export const Slideshow = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    request("https://api.mediehuset.net/homelands/images");
  }, [request]);

  if (loading) return <CircularProgress color="primary" />;
  if (error) return <Typography variant="h3">Fejl: {error.message}</Typography>;
  if (!data || !data.items) return null; // 🔥 Prevents crashes if `data` is still `null`

  const lastThreeImages = data.items.slice(-3);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % lastThreeImages.length);
  };

  return (
    <Box>
      <img
        src={lastThreeImages[currentIndex]?.image?.[0]}
        alt={lastThreeImages[currentIndex]?.description || "Billede"}
        style={{ width: "100%", height: "auto" }}
      />
      <Box>
        <IconButton
          aria-label="Næste billede"
          onClick={() =>
            setCurrentIndex(
              (prevIndex) => (prevIndex + 1) % lastThreeImages.length
            )
          }
        >
          <ArrowForwardIosIcon />
        </IconButton>
        
      </Box>
    </Box>
  );
};
