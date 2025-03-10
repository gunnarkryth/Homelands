import {
  Container,
  Toolbar,
  MenuItem,
  Typography,
  AppBar,
} from "@mui/material";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <Container
      maxWidth=""
      disableGutters
      sx={{ backgroundColor: "primary.main", color: "secondary" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h2" color="secondary.main">
          Homelands
        </Typography>
        <ul style={{ listStyle: "none" }}>
          <li>
            <Typography variant="body1" sx={{ color: "secondary.main" }}>
              Øster Uttrupvej 5
            </Typography>
          </li>
          <li>
            <Typography variant="body1" sx={{ color: "secondary.main" }}>
              9000 Aalborg
            </Typography>
          </li>
        </ul>
        <ul style={{ listStyle: "none" }}>
          <li>
            <Typography variant="body1" sx={{ color: "secondary.main" }}>
              Email: info@homelands.dk
            </Typography>
          </li>
          <li>
            <Typography variant="body1" sx={{ color: "secondary.main" }}>
              Telefon: +45 11 22 33 44
            </Typography>
          </li>
        </ul>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31.5"
              height="31.5"
              viewBox="0 0 31.5 31.5"
            >
              <path
                id="Icon_awesome-twitter-square"
                data-name="Icon awesome-twitter-square"
                d="M28.125,2.25H3.375A3.376,3.376,0,0,0,0,5.625v24.75A3.376,3.376,0,0,0,3.375,33.75h24.75A3.376,3.376,0,0,0,31.5,30.375V5.625A3.376,3.376,0,0,0,28.125,2.25ZM24.687,13.416c.014.2.014.4.014.6a13.031,13.031,0,0,1-13.12,13.12A13.06,13.06,0,0,1,4.5,25.066a9.715,9.715,0,0,0,1.111.056,9.246,9.246,0,0,0,5.723-1.969,4.618,4.618,0,0,1-4.31-3.2,4.97,4.97,0,0,0,2.081-.084,4.612,4.612,0,0,1-3.691-4.528v-.056A4.608,4.608,0,0,0,7.5,15.87,4.6,4.6,0,0,1,5.442,12.03,4.554,4.554,0,0,1,6.068,9.7a13.094,13.094,0,0,0,9.506,4.823,4.621,4.621,0,0,1,7.868-4.212A9.036,9.036,0,0,0,26.367,9.2a4.6,4.6,0,0,1-2.025,2.538A9.177,9.177,0,0,0,27,11.025,9.707,9.707,0,0,1,24.687,13.416Z"
                transform="translate(0 -2.25)"
                fill="#fff"
              />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31.5"
              height="31.5"
              viewBox="0 0 31.5 31.5"
            >
              <path
                id="Icon_ionic-logo-facebook"
                data-name="Icon ionic-logo-facebook"
                d="M34.261,4.5H6.239A1.74,1.74,0,0,0,4.5,6.239V34.261A1.74,1.74,0,0,0,6.239,36H20.25V23.531H16.485V18.938H20.25v-3.4c0-4.069,2.822-6.284,6.456-6.284,1.739,0,3.609.131,4.044.189V13.7h-2.9c-1.977,0-2.354.935-2.354,2.313v2.929h4.709l-.615,4.594H25.5V36h8.761A1.74,1.74,0,0,0,36,34.261V6.239A1.74,1.74,0,0,0,34.261,4.5Z"
                transform="translate(-4.5 -4.5)"
                fill="#fff"
              />
            </svg>
          </li>
        </ul>
      </Toolbar>
    </Container>
  );
};
