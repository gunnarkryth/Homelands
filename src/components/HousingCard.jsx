import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import PropTypes from "prop-types";

export const HousingCard = ({ item }) => {
  const danishPrice = new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
  }).format(item.price);

  return (
    <Grid item>
      <Card>
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

HousingCard.propTypes = {
  item: PropTypes.object.isRequired,
};
