import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const HouseDetails = () => {
  const { id } = useParams();
  const [house, setHouse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.mediehuset.net/homelands/homes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setHouse(data.item);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching house details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container sx={{ textAlign: "center", mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!house) {
    return (
      <Container sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h5">House not found.</Typography>
      </Container>
    );
  }

  const danishPrice = new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
  }).format(house.price);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: `url(${
          house?.images[0]?.filename.large || house?.images[0]?.filename.medium
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      /> */}

      <Container sx={{ position: "relative", py: 4 }}>
        <Paper
          elevation={6}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            p: 4,
            borderRadius: 2,
            maxWidth: 800,
            margin: "auto",
          }}
        >
          <Typography variant="h4" align="left" gutterBottom>
            {house.address}
          </Typography>
          <Typography variant="subtitle1" align="left" gutterBottom>
            {house.zipcode} {house.city}
          </Typography>
          <Typography variant="subtitle1" align="left" gutterBottom>
            {house.type} | {house.floor_space} m² | {house.num_rooms} værelser
          </Typography>
          <Typography variant="subtitle1" align="left" gutterBottom>
            Set {house.num_clicks} gange
          </Typography>
          <Grid container spacing={3}>
            <Grid item>
              <Typography variant="subtitle1" align="left" gutterBottom>
                Sagsnr. {house.id}
              </Typography>
              <Typography variant="subtitle1" align="left" gutterBottom>
                Boligareal {house.floor_space} m²
              </Typography>
              <Typography variant="subtitle1" align="left" gutterBottom>
                Grundareal {house.ground_space} m²
              </Typography>
              <Typography variant="subtitle1" align="left" gutterBottom>
                Antal rum {house.num_rooms}
              </Typography>
              <Typography variant="subtitle1" align="left" gutterBottom>
                Antal plan {house.num_floors}
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant="subtitle1" align="left" gutterBottom>
                Kælder {house.basement_space} m²
              </Typography>
              <Typography variant="subtitle1" align="left" gutterBottom>
                Byggeår {house.year_construction}
              </Typography>
              <Typography variant="subtitle1" align="left" gutterBottom>
                Ombygget {house.year_rebuilt}
              </Typography>
              <Typography variant="subtitle1" align="left" gutterBottom>
                Energimærke {house.energy_label_name}
              </Typography>
              <Typography variant="subtitle1" align="left" gutterBottom>
                Liggetid {house.date_friendly}
              </Typography>
            </Grid>
          </Grid>

          <Typography variant="body1">{house.description}</Typography>

          {/* <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                <strong>Price:</strong> {danishPrice}
              </Typography>
              <Typography variant="body1">
                <strong>Payout:</strong> {house.payout} DKK
              </Typography>
              <Typography variant="body1">
                <strong>Gross:</strong> {house.gross} DKK
              </Typography>
              <Typography variant="body1">
                <strong>Net:</strong> {house.net} DKK
              </Typography>
              <Typography variant="body1">
                <strong>Cost:</strong> {house.cost} DKK
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                <strong>Boligareal:</strong> {house.floor_space} m²
              </Typography>
              <Typography variant="body1">
                <strong>Grundareal:</strong> {house.ground_space} m²
              </Typography>
              <Typography variant="body1">
                <strong>Værelser:</strong> {house.num_rooms}
              </Typography>
              <Typography variant="body1">
                <strong>Etager:</strong> {house.num_floors}
              </Typography>
              <Typography variant="body1">
                <strong>Kælder:</strong> {house.basement_space} m²
              </Typography>
            </Grid>
          </Grid>

          <Box sx={{ mt: 2 }}>
            <Typography variant="body1">
              <strong>Bygget i år:</strong> {house.year_construction}
            </Typography>
            <Typography variant="body1">
              <strong>Genopbygget i år:</strong> {house.year_rebuilt}
            </Typography>
            <Typography variant="body1">
              <strong>Energimærke:</strong> {house.energy_label_name}
            </Typography>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
              {house.description}
            </Typography>
          </Box> */}

          <Box sx={{ mt: 4, textAlign: "center" }}>
            <Button
              component={Link}
              to="/boliger"
              variant="contained"
              color="primary"
            >
              &larr; Tilbage
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
