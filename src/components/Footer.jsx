import { Container, Toolbar, MenuItem, Typography } from "@mui/material";
import { TwitterIcon, FacebookIcon } from "@mui/icons-material";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <Container disableGutters>
      <footer>
        <Logo />
        <Toolbar>
          <MenuItem>
            <ul>
              <li>
                <Typography variant="body1" color="initial">
                  Øster Uttrupvej 5
                </Typography>
              </li>
              <li>
                <Typography variant="body1" color="initial">
                  9000 Aalborg
                </Typography>
              </li>
            </ul>
          </MenuItem>
          <MenuItem>
            <ul>
              <li>
                <Typography variant="body1" color="initial">
                  Email: info@homelands.dk
                </Typography>
              </li>
              <li>
                <Typography variant="body1" color="initial">
                  Telefon: +45 11 22 33 44
                </Typography>
              </li>
            </ul>
          </MenuItem>
        </Toolbar>
        <ul>
          <li>
            <svg data-testid="TwitterIcon" />
          </li>
          <li>
            <svg data-testid="FacebookIcon" />
          </li>
        </ul>
      </footer>
    </Container>
  );
};
