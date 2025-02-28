import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import axios from "axios";

const StaffCards = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await axios.get(
          "https://api.mediehuset.net/homelands/staff"
        );
        setStaff(response.data.items);
      } catch (error) {
        console.error("Error fetching staff:", error);
      }
    };

    fetchStaff();
  }, []);

  return (
    <Grid container spacing={2}>
      {staff.map((member) => (
        <Grid item xs={12} sm={3} key={member.id}>
          <Box
            sx={{
              position: "relative",
              "&:hover .hoverDetails": {
                opacity: 1,
              },
            }}
          >
            <Card>
              <CardMedia
                component="img"
                height="600px"
                image={member.image}
                alt={`${member.firstname} ${member.lastname}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {member.firstname} {member.lastname}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.position}
                </Typography>
              </CardContent>
            </Card>
            <Box
              className="hoverDetails"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                opacity: 0,
                transition: "opacity 0.3s",
              }}
            >
              <Typography variant="body1">Phone: {member.phone}</Typography>
              <Typography variant="body1">Email: {member.email}</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default StaffCards;
