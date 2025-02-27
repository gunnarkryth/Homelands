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
      if (result && result.items) {
        setData(result);
        // Preload images
        result.items.slice(-3).forEach((item) => {
          const img = new Image();
          img.src = item.image[0];
        });
      } else {
        setError(new Error("Invalid data structure"));
      }
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
  if (!data || !data.items) return null;

  const lastThreeImages = data.items.slice(-3);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % lastThreeImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + lastThreeImages.length) % lastThreeImages.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % lastThreeImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [lastThreeImages.length]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "400px", md: "700px" }, // Responsive height
        overflow: "hidden",
      }}
    >
      <img
        src={lastThreeImages[currentIndex]?.image?.[0]}
        alt={lastThreeImages[currentIndex]?.description || "Billede"}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-between",
          transform: "translateY(-50%)",
          px: 2,
        }}
      >
        <IconButton
          aria-label="Forrige billede"
          onClick={handlePrev}
          sx={{ color: "white" }}
        >
          <ArrowForwardIosIcon
            sx={{ color: "white", fontSize: 40, transform: "rotate(180deg)" }}
          />
        </IconButton>
        <IconButton
          aria-label="Næste billede"
          onClick={handleNext}
          sx={{ color: "white" }}
        >
          <ArrowForwardIosIcon sx={{ color: "white", fontSize: 40 }} />
        </IconButton>
      </Box>
    </Box>
  );
};
