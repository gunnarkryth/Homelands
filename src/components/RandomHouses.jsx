import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import axios from "axios";
import { NavLink } from "react-router-dom";

const RandomHousingCards = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await axios.get(
          "https://api.mediehuset.net/homelands/homes"
        );
        const allHouses = response.data.items;
        const randomHouses = allHouses
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
        setHouses(randomHouses);
      } catch (error) {
        console.error("Error fetching houses:", error);
      }
    };

    fetchHouses();
  }, []);

  return (
    <Grid container spacing={2}>
      {houses.map((house) => (
        <Grid item xs={12} sm={4} key={house.id}>
          <Card component={NavLink} to={`/boliger/${house.id}`}>
            <CardMedia
              component="img"
              height="250"
              image={house.images[0]?.filename.medium}
              alt={house.address}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {house.address}
              </Typography>
              <Typography variant="body2" color="text.primary">
                {house.city}, {house.zipcode}
              </Typography>
              <Typography variant="body2" color="text.primary">
                {house.type} - {house.price} DKK
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RandomHousingCards;
