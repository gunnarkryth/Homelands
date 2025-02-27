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
            <Typography variant="p">
              {item.zipcode} {item.city}
            </Typography>
            <Typography variant="p">{item.floor_space} m²</Typography>
            <Typography variant="p">{item.price} DKK</Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

HousingCard.propTypes = {
  item: PropTypes.object.isRequired,
};
