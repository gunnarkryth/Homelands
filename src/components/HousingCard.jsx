// Her importeres nødvendige komponenter fra Material UI, PropTypes og React Router DOM
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// Her oprettes komponentet, der viser boligen i card-form
export const HousingCard = ({ item }) => {
  // Her konverteres den engelske nummereringsstil til den danske ved hjælp af Intl.NumberFormat
  const danishPrice = new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
  }).format(item.price);

  // Selve HTML-strukturen, der vises til brugeren
  return (
    <Grid item>
      <Card
        component={NavLink} // Card-komponentet fra Material UI antager NavLinkets evner samtidig med at den beholder kortets styling
        to={`/boliger/${item.id}`} // Når brugeren klikker et sted på kortet, sendes de til en side dedikeret til den bolig. Dette foregår gennem routing i App.jsx
        sx={{ textDecoration: "none", color: "inherit" }}
      >
        // I gennem koden trækkes forskellige informationer ud om boligen:
        billede, addresse, postkode, by, boligplads og pris (som blev
        konverteret ovenover)
        <CardMedia
          sx={{ height: 140 }}
          image={item?.images[0]?.filename.medium}
          title={item?.images[0]?.file}
        />
        <CardContent>
          <Typography variant="h5">{item.address}</Typography>
          <Box display="flex" flex="1" flexDirection="column">
            <Typography variant="body1">
              {item.zipcode} {item.city}
            </Typography>
            <Typography variant="body1">{item.floor_space} m²</Typography>
            <Typography variant="body1">{danishPrice}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};
// PropTypes kræver at "item" eksistere, for at kunne fortsætte
HousingCard.propTypes = {
  item: PropTypes.object.isRequired,
};
