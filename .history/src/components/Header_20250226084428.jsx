import { AppBar, Container, Toolbar } from "@mui/material";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { SearchBar } from "./SearchBar";

export const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "none",
        backgroundImage: `url('data:image/svg;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1737.138" height="123.576" viewBox="0 0 1737.138 123.576">
  <path id="HEADER_BG" data-name="HEADER BG" d="M0,123.576,491,70.562l1246.138,53.014V0H0Z"/>
</svg>
)`,
      }}
    >
      <Container maxWidth="" disableGutters>
        <Toolbar>
          <Logo />
          <Nav />
          <SearchBar />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
