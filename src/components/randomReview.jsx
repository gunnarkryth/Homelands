import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Box, Rating } from "@mui/material";
import axios from "axios";
import { ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "../theme/MainTheme";
import { NavLink } from "react-router-dom";

const RandomReview = () => {
  const [review, setReview] = useState(null);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await axios.get(
          "https://api.mediehuset.net/homelands/reviews"
        );
        const allReviews = response.data.items;
        const randomReview =
          allReviews[Math.floor(Math.random() * allReviews.length)];
        setReview(randomReview);
      } catch (error) {
        console.error("Error fetching review:", error);
      }
    };

    fetchReview();
  }, []);

  return (
    <ThemeProvider theme={MainTheme}>
      {review && (
        <Card
          sx={{
            textDecoration: "none",
            color: "inherit",
            mx: "auto",
            mt: 4,
            backgroundColor: "accent.primary",
            "&:hover": {
              boxShadow: 6,
            },
          }}
        >
          <CardContent sx={{ maxWidth: "400" }}>
            <Rating value={Number(review.num_stars) || 0} readOnly />
            <Typography gutterBottom variant="h6" color="text.primary">
              {review.title}
            </Typography>
            <Typography variant="body2" color="text.primary">
              {review.content}
            </Typography>
            <Typography
              variant="caption"
              color="text.primary"
              display="block"
              mt={2}
            >
              - {review.user.firstname} {review.user.lastname}
            </Typography>
          </CardContent>
        </Card>
      )}
    </ThemeProvider>
  );
};

export default RandomReview;
