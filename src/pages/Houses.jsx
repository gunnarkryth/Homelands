import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import { HousingCard } from "../components/HousingCard";
import { useParams } from "react-router";
import { findValuesInObject } from "../helpers/findValuesInObject";

export const Houses = () => {
  const [houseData, setHouseData] = useState();

  const { keyword } = useParams();

  useEffect(() => {
    console.log("key", keyword);
    fetch("https://api.mediehuset.net/homelands/homes")
      .then((res) => res.json())
      .then((data) =>
        keyword !== null &&
        keyword !== "" &&
        keyword !== "undefined" &&
        keyword !== undefined
          ? setHouseData({
              items: data.items.filter((item) =>
                findValuesInObject(item, keyword)
              ),
            })
          : setHouseData(data)
      )
      .catch((err) => console.log("error: ", err));
  }, [keyword]);

  return (
    <Container>
      <Typography textAlign="center" margin="2vh" variant="h3">
        Housing Page
      </Typography>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {houseData?.items?.map((item) => {
          return (
            <Grid size={4} key={item.id}>
              <HousingCard item={item} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
