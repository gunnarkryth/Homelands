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
        backgroundImage: ,
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
